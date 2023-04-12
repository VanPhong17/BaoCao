var request = require('request');
const {spawn} = require('child_process')
const os = require("os");
//获取本机ip
function getIpAddress() {
  /**os.networkInterfaces() 返回一个对象，该对象包含已分配了网络地址的网络接口 */
  var interfaces = os.networkInterfaces();
  for (var devName in interfaces) {
    var iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i];
      if (
        alias.family === "IPv4" &&
        alias.address !== "127.0.0.1" &&
        !alias.internal
      ) {
        return alias.address;
      }
    }
  }
}
const myHost = getIpAddress();

const report = (title, data, level) => {

  try {

    let errData = null
    if (data.err) {
      errData = JSON.stringify(data.err, Object.getOwnPropertyNames(data.err), 2)
    }
    console.log('errData', errData);
    var options = {
      'method': 'POST',
      'url': 'https://kmos-api.kaikeba.com/nvwa-log-api/log',
      'headers': {
        'User-Agent': 'apifox/1.0.0 (https://www.apifox.cn)',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "appId": "5a78a7ec8fce42da99dcb89723c5a4b2",
        "clientVersion": "1.0.0-SNAPSHORT",
        "env": "prod",
        "level": level,
        "logData": '{"content":' + JSON.stringify(data.data) + ',"err":' + errData + '}',
        "logTitle": "vscode-markdown",
        "sourceUrl": "vscode-markdown",
        "type": "notice",
        "uid": 0,
        "uidStr": "",
        "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
        "noticeTitle": title,
        "noticeMsg": '#### IP: ' + myHost + '\n ##### content: > ' + JSON.stringify(data.data) + ' \n  ##### 异常：' + errData + '}',
        "isNotice": false,
        "apiRequestInfo": {
          "request_method": "POST",
          "request_params": "1=1&2=2",
          "request_path": "http://localhost/log",
          "response_content": "OK",
          "response_status_code": 200
        },
        "payInfo": {
          "orderNo": "xxxx",
          "orderStatus": "0",
          "payStatus": "0",
          "payType": "0"
        },
        "userInfo": {
          "mobile": "",
          "openid": "",
          "uid": 0,
          "unionid": ""
        }
      })

    };

    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log('logx', response.body);
    });


  } catch (error) {
    console.log('logerror', error);
  }
}

exports.report = report
