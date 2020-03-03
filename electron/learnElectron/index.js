const remote = require("electron").remote;

let w = remote.getCurrentWindow();

if (typeof module === "object") {
  // Require Electron, IPC, other modules here
  window.module = module;
  module = undefined;
}

$(document).ready(() => {

});
