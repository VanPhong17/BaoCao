const qiniu = require('qiniu')
const path = require('path')
const url = require('url')
const PutExtra = qiniu.form_up.PutExtra
const { report } = require('./log')
// 上传策略函数
// const uptoken = (bucket, key) => new PutPolicy(`${bucket}:${key}`).token()


const uptoken = (bucket, key, mac) => {
  var options = {
    scope: bucket
    // scope: bucket + ":" + key
  }
  try {
    var putPolicy = new qiniu.rs.PutPolicy(options);
    const resToken = putPolicy.uploadToken(mac)
    return resToken
  } catch (error) {
    console.log('error1', error);
    report({ error, putPolicy }, 'error')
  }
}

// 默认参数
const formatParam = (file, mdFileName) => {
  const dt = new Date()
  const y = dt.getFullYear()
  const m = dt.getMonth() + 1
  const d = dt.getDate()
  const h = dt.getHours()
  const mm = dt.getMinutes()
  const s = dt.getSeconds()

  const date = `${y}${m}${d}`
  var ext = path.extname(file)

  return {
    date,
    dateTime: `${date}${h}${mm}${s}`,
    fileName: path.basename(file, ext),
    ext,
    mdFileName
  }
}

const formatString = (tplString, data) => {
  const keys = Object.keys(data)
  const values = keys.map(k => data[k])

  return new Function(keys.join(','), 'return `' + tplString + '`').apply(null, values)
}

module.exports = (config, file, mdFile) => {
  let access_key = config.access_key;
  let secret_key = config.secret_key;
  let bucket = config.bucket;
  let domain = config.domain;
  let remotePath = config.remotePath;
  var mac = new qiniu.auth.digest.Mac(access_key, secret_key);
  var config = new qiniu.conf.Config();
  qiniu.conf.ACCESS_KEY = access_key
  qiniu.conf.SECRET_KEY = secret_key


  let localFile = file
  if (/^".+"$/.test(localFile)) {
    localFile = file.substring(1, file.length - 1)
  }
  // 预设参数值
  const param = formatParam(localFile, mdFile)
  //上传到七牛后保存的文件名
  const saveFile = formatString(remotePath + '${ext}', param)
  // console.log('saveFile', saveFile);
  //生成上传 Token
  const uploadToken = uptoken(bucket, saveFile, mac)
  var formUploader = new qiniu.form_up.FormUploader(config);
  // let url = `${domain}/${saveFile}`

  return new Promise((resolve, reject) => {
    const putExtra = new PutExtra()
    formUploader.putFile(uploadToken, saveFile, localFile, putExtra, (err, respBody, respInfo) => {
      if (!err) {
        // 上传成功， 处理返回值
        console.log('key111', err, respBody, respInfo)
        resolve({
          name: path.basename(respBody.key, param.ext),
          url: url.resolve(domain, saveFile)
        })
      } else {
        console.log('err2', err)
        // report('formUploader err',err,'error')
        // return 
        // 上传失败， 处理返回代码
        reject(err)
      }
    })
  })
}

