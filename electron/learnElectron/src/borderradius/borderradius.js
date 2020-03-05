function BorderRadius(divId) {
    const funcs = require('../../static/js/funcs');

    document.getElementById('topLeft').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('topRight').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('bottomLeft').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('bottomRight').addEventListener('keypress', funcs.maskNumerics);

    document.getElementById('topLeft').addEventListener('keyup', (e) => { });

    function styleRectangle(rec, type) {
        let rectangle = document.getElementById(rec.id);
        rectangle.style.borderRadius = `${rec.topLeft}${type}, ${rec.topRight}${type}, ${rec.bottomRight}${type}, ${rec.bottomLeft}${type},`;
    }
}

module.exports = BorderRadius;
