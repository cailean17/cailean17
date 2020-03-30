// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

window.addEventListener('DOMContentLoaded', () => {
 const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
 }
})
const {PythonShell} = require("python-shell");
const path = require('path')


ppathTest = function() {
  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    //pythonPath : 'python3',
    args : [year, month, date, hour, minute]
  }




 let reminder = new PythonShell('SetReminder.py', options)

  reminder.on('message', function(message){
    alert(message);
  }
  )
}
