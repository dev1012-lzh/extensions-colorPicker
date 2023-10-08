/* Change HEX color codes into RGB/RGBA color codes*/
const hexToRGB = hex => {
    var field = document.getElementById('lblcolor');
    var val = field.value;
    let alpha = false,
        h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;


    h = parseInt(h, 16);
    var field = document.getElementById('lblcolor');
    var r = (h >>> (alpha ? 24 : 16));
    var g = ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8));
    var b = ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0));
    var a = (alpha ? `, ${h & 0x000000ff}` : '');
    var rgb =
        'rgb'
        +
        (alpha ? 'a' : '')
        +
        '('
        +
        r
        +
        ', '
        +
        g
        +
        ', '
        +
        b
        +
        a
        +
        ')'
        ;
    var field = document.getElementById('color');
    if (field.value === "" || r > 255 || g > 255 || b > 255) {
        var field = document.getElementById('lblcolor');
        field.innerHTML = val;
    }
    var field = document.getElementById('lblcolor');
    field.innerHTML = rgb;
};

var field = document.getElementById('color');

document.addEventListener('keydown', function () {
    hexToRGB(field.value);
})