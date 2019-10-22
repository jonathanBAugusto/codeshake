const remote = require("electron").remote;

let w = remote.getCurrentWindow();

if (typeof module === "object") {
  // Require Electron, IPC, other modules here
  window.module = module;
  module = undefined;
}

$(document).ready(() => {
  $("#btnCalculadora").on("click", () => {
    window.open('./src/views/calculadora_view.html', 'modal');
  });

  $("#btnJokenpo").on("click", () => {
    alert("Jokenpo say: You Click-me hehe!");
  });

  $("#btnJogodavelha").on("click", () => {
    alert("Jogodavelha say: You Click-me hehe!");
  });

  $("#btnSair").on("click", () => {
    if(window.confirm("You sure? :("))
      w.close();
  });
});
