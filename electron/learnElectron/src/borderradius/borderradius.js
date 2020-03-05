function BorderRadius(divId) {
    const funcs = require('../../static/js/funcs');
    const inputs = {
        'topLeft': 'tlType',
        'topRight': 'trType',
        'bottomLeft': 'blType',
        'bottomRight': 'brType',
    }

    document.getElementById('topLeft').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('topRight').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('bottomLeft').addEventListener('keypress', funcs.maskNumerics);
    document.getElementById('bottomRight').addEventListener('keypress', funcs.maskNumerics);

    document.getElementById('topLeft').addEventListener('keyup', borderUpdate);
    document.getElementById('topRight').addEventListener('keyup', borderUpdate);
    document.getElementById('bottomLeft').addEventListener('keyup', borderUpdate);
    document.getElementById('bottomRight').addEventListener('keyup', borderUpdate);

    function borderUpdate(e) {
        let value = e.target.value;
        if (value.match(/[0-9.,\-]/g)) {
            let type = document.querySelector(`input[name="${inputs[e.target.id]}"]:checked`);
            if (type) {
                applyStyleRectangle();
            }
        }
    }

    function applyStyleRectangle() {
        let rec = returnRectangle();
        let rectangle = document.getElementById(rec.id);
        let borderRadius = `${rec.topLeft.value}${rec.topLeft.type} ${rec.topRight.value}${rec.topRight.type} ${rec.bottomRight.value}${rec.bottomRight.type} ${rec.bottomLeft.value}${rec.bottomLeft.type}`;
        rectangle.style.borderRadius = borderRadius;
        console.log(borderRadius, rectangle);
    }

    function returnRectangle() {
        return {
            'id': 'rectangle',
            'topLeft': {
                'value': document.getElementById('topLeft').value || 0,
                'type': document.querySelector('input[name=' + inputs['topLeft'] + ']:checked').value,
            },
            'topRight': {
                'value': document.getElementById('topRight').value || 0,
                'type': document.querySelector('input[name=' + inputs['topRight'] + ']:checked').value,
            },
            'bottomLeft': {
                'value': document.getElementById('bottomLeft').value || 0,
                'type': document.querySelector('input[name=' + inputs['bottomLeft'] + ']:checked').value,
            },
            'bottomRight': {
                'value': document.getElementById('bottomRight').value || 0,
                'type': document.querySelector('input[name=' + inputs['bottomRight'] + ']:checked').value,
            },
        }
    }
}

module.exports = BorderRadius;
