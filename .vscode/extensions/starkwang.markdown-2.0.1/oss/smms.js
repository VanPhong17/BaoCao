const axios = require('axios')
const fs = require('fs')
const vscode = require('vscode')
let config = vscode.workspace.getConfiguration('figimg')

function smms(path) {
  const FormData = require('form-data');
  const form = new FormData();
  const token = config.smmsToken || 'ojVCYGim3kWmDV3hJuCmRUWmWDy1Mdhy'
  // vscode.window.showErrorMessage(token)
  form.append('smfile', fs.createReadStream(path));
  return axios.post('https://sm.ms/api/v2/upload', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Basic ${token}`
    }
  }).then(response => {
    console.log('response', response)
    const res = response.data
    if (res.success) {
      console.log('url', response.data.data.url)
      return { status: res.success, message: res.message, storename: res.data.storename, url: res.data.url }
    }
    return { status: res.success, message: res.message }
  })
    .catch(error => {
      console.log('error', error)
    })
}

exports.smms = smms
