const axios = require('axios')
const fs = require('fs')
const vscode = require('vscode')
let config = vscode.workspace.getConfiguration('figimg')


function qiniu (path) {
  // vscode.window.showErrorMessage(path)
  const formData = {
    file: fs.createReadStream(path)
  }
  // request.post({url:'http://127.0.0.1:5002/v1/uploadFile?file', formData: formData}, function optionalCallback(err, httpResponse, body) {
  return axios.post({url: 'https://api.shudong.wang/v1/uploadFile', formData: formData}, function optionalCallback (err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err)
    }
    console.log('Upload successful!  Server responded with:', body)
    const data = JSON.parse(body) 
    try {
      console.log(typeof data)
      console.log('imgp',data)
    } catch (error) {
      console.log('error',error)
    }
    
    const imgp = data.data.imgUrl
    console.log('imgp',imgp)
    const img = `![${imgp}](https://s.shudong.wang/${imgp})`
    report('upload success', { data: {img,url:`https://s.shudong.wang/${imgp}`}, err: false }, 'error')
    // const img = `sss`
    // console.log('xxxxx', xxx)
    vscode.window.activeTextEditor.edit(textEditorEdit => {
      textEditorEdit.insert(vscode.window.activeTextEditor.selection.active, img)
    })
    console.log('body', body)
    return body
  })
}

exports.qiniu = qiniu
