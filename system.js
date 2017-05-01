const os = require('os')
const electronScreen = require('electron').screen

const osName = os.platform()
const osType = os.type()
const osBit = os.arch()
const pcName = os.hostname()
const nInterface = Object.values(os.networkInterfaces())[1][0].address
const size = electronScreen.getPrimaryDisplay().size

const Name = document.getElementById('os-name').getElementsByClassName('sys-value')[0]
const pcNametext = document.getElementById('pc-name').getElementsByClassName('sys-value')[0]
const ipText = document.getElementById('ip').getElementsByClassName('sys-value')[0]
const resText = document.getElementById('res').getElementsByClassName('sys-value')[0]
const message = `${size.width} x ${size.height}`

pcNametext.innerHTML = pcName;
Name.innerHTML = osType + " ( " + osName + ", " + osBit + " )";
ipText.innerHTML = nInterface;
resText.innerHTML = message;