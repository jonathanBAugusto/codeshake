function BorderRadius(divId) {

    // createDiv(divId);

    const funcs = require('../../static/js/funcs');
    document.getElementById('topLeft').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('topRight').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('bottomLeft').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('bottomRight').addEventListener('keypress', funcs.maskNumerics);

    // function createDiv(divId) {
    //     let html = `
    //     <div class="card p-2">
    //         <div class="mb-2">Bin2Dec</div>
    //         <div class="d-flex align-items-center">
    //           <input type="text" class="form-control form-control-sm col" name="binInput" id="binInput"
    //             placeholder="Binary" style="width: 60px;" />
    //           <span class="col-auto px-1">TO</span>
    //           <input type="text" class="form-control form-control-sm col" name="decInput" id="decInput"
    //             placeholder="Decimal" style="width: 60px;" />
    //         </div>
    //       </div>
    //     `;
    //     document.getElementById(divId).innerHTML = html;
    // }
    function styleRectangle(rec, type) {
        let rectangle = document.getElementById(rec.id);
        rectangle.style.borderRadius = `${rec.topLeft}${type}, ${rec.topRight}${type}, ${rec.bottomRight}${type}, ${rec.bottomLeft}${type},`;
    }
}

module.exports = BorderRadius;
