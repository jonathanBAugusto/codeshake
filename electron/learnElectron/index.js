
const remote = require("electron").remote;
const binTwoDec = require('./src/bintodec/bintodec');
const borderRadius = require('./src/borderradius/borderradius');

let w = remote.getCurrentWindow();

if (typeof module === "object") {
  // Require Electron, IPC, other modules here
  window.module = module;
  module = undefined;
}

document.addEventListener('DOMContentLoaded', () => {
  (new binTwoDec('binToDec'));
  (new borderRadius());
});


