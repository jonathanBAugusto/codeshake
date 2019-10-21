const remote = require("electron").remote;

let w = remote.getCurrentWindow();

if (typeof module === "object") {
  // Require Electron, IPC, other modules here
  window.module = module;
  module = undefined;
}

$(document).ready(() => {
  $("#btnCalculadora").on("click", () => {
    alert("Calculadora say: You Click-me hehe!");
  });

  $("#btnJokenpo").on("click", () => {
    alert("Jokenpo say: You Click-me hehe!");
  });

  $("#btnJogodavelha").on("click", () => {
    alert("Jogodavelha say: You Click-me hehe!");
  });

  $("#btnSair").on("click", () => {
    alert("Adios! T-T");
    w.close();
  });
});
