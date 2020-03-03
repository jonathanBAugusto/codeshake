const remote = require("electron").remote;

let w = remote.getCurrentWindow();

if (typeof module === "object") {
  // Require Electron, IPC, other modules here
  window.module = module;
  module = undefined;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('binInput').addEventListener('keypress', (e) => {
    saveLog(document.getElementById('binInput').value);
  });
  document.getElementById('decInput').addEventListener('keypress', (e) => {
    saveLog(JSON.stringify(e));
  });
});

function saveLog(text) {
  document.getElementById('logArea').innerHTML += '\n' + text;
}
