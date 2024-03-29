function Funcs() {
    this.maskBinary = function (e) {
        if (e.keyCode != '') {
            let char = String.fromCharCode(e.keyCode);
            if (!char.match(/[0-1]/)) {
                e.preventDefault();
            }
        }
    }

    this.maskDecimals = function (e) {
        if (e.keyCode != '') {
            let char = String.fromCharCode(e.keyCode);
            if (!char.match(/[0-9]/)) {
                e.preventDefault();
            }
        }
    }

    this.maskNumerics = function (e) {
        if (e.keyCode != '') {
            let char = String.fromCharCode(e.keyCode);
            if (!char.match(/[0-9.\-+/*]/)) {
                e.preventDefault();
            }
        }
    }
}

module.exports = new Funcs();
