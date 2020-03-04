function BinToDec(divId) {

    createDiv(divId);

    const funcs = require('../../static/js/funcs');

    document.getElementById('binInput').addEventListener('keypress', funcs.maskBinary);
    document.getElementById('decInput').addEventListener('keypress', funcs.maskDecimals);

    document.getElementById('binInput').addEventListener('keyup', (e) => {
        let dec = document.getElementById('decInput');
        if (e.target.value != '') {
            dec.value = parseInt(e.target.value, 2);
        } else {
            dec.value = '';
        }
    });
    document.getElementById('decInput').addEventListener('keyup', (e) => {
        let bin = document.getElementById('binInput');
        if (e.target.value != '') {
            bin.value = (+e.target.value).toString(2);
        } else {
            bin.value = '';
        }
    });

    function createDiv(divId) {
        let html = `
            <div class="card p-2">
            <div class="mb-2">Bin2Dec</div>
            <div class="d-flex align-items-center">
              <input type="text" class="form-control form-control-sm col" name="binInput" id="binInput"
                placeholder="Binary" style="width: 60px;" />
              <span class="col-auto px-1">TO</span>
              <input type="text" class="form-control form-control-sm col" name="decInput" id="decInput"
                placeholder="Decimal" style="width: 60px;" />
            </div>
          </div>
        `;
        document.getElementById(divId).innerHTML = html;
    }
}

module.exports = BinToDec;
