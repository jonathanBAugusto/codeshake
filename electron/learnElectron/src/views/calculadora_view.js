let err = '';
try {
  const remote = require("electron").remote;
  err += 'remote';
  let w = remote.getCurrentWindow();
  err += 'getCurrentWindow';

  if (typeof module === "object") {
    // Require Electron, IPC, other modules here
    window.module = module;
    module = undefined;
  }

  $(document).ready(() => {
    alert("pay");
    w.center();
    w.setHasShadow(true);
    w.setSize(200, 500, true);
    w.setResizable(false);
    w.setTitle("Teste Calculadora");
  });
} catch (error) {
  alert(error + '\n\n' + err);
}
