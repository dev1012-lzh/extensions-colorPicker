
var onpick = document.getElementById("onpick");
var onpickvalue = localStorage.getItem('aftercolorPICKED-extensionColorPickerChromeExtension');
var onpickdefaultvalue = 'copyshow';

var onclickcolor = document.getElementById('onclickcolor');
var onclickcolorvalue = localStorage.getItem('aftercolorCLICKED-extensionColorPickerChromeExtension');
var onclickcolordefaultvalue = 'copydel';

var converter = document.getElementById('converter');
var convertervalue = localStorage.getItem('convertHEXTORGBA?-extensionColorPickerChromeExtension');
var converterdefaultvalue = 'yes';

if (onpickvalue) {
    onpick.value = onpickvalue;
}
else {
    onpick.value = onpickdefaultvalue;
}

if (onclickcolorvalue) {
    onclickcolor.value = onclickcolorvalue;
}
else {
    onclickcolor.value = onclickcolordefaultvalue;
}

if (convertervalue) {
    converter.value = convertervalue;
}
else {
    converter.value = converterdefaultvalue;
}



onpick.addEventListener("change", function () {
    var itemkey = 'aftercolorPICKED-extensionColorPickerChromeExtension';
    let itemvalue = document.getElementById('onpick').value;
    localStorage.setItem(itemkey, itemvalue);
    var msg = "key  " + itemkey + "  to  " + itemvalue;
    console.log('%c' + msg, 'color:magenta');
});


onclickcolor.addEventListener("change", function () {
    var itemkey = 'aftercolorCLICKED-extensionColorPickerChromeExtension';
    let itemvalue = document.getElementById('onclickcolor').value;
    localStorage.setItem(itemkey, itemvalue);
    var msg = "key  " + itemkey + "  to  " + itemvalue;
    console.log('%c' + msg, 'color:magenta');
});


converter.addEventListener("change", function () {
    var itemkey = 'convertHEXTORGBA?-extensionColorPickerChromeExtension';
    let itemvalue = document.getElementById('converter').value;
    localStorage.setItem(itemkey, itemvalue);
    var msg = "key  " + itemkey + "  to  " + itemvalue;
    console.log('%c' + msg, 'color:magenta');
});
