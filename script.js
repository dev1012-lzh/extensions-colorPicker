$(document).ready(function () {
    $('#text').autosize();
});

var d = document;
var doc = document;

d.addEventListener('DOMContentLoaded', function () {

    var savedContent = localStorage.getItem("notepadcontent");
    if (savedContent != null) {
        d.getElementById("text").value = savedContent;
    }


    d.getElementById("text").onkeyup = function () {
        var data = d.getElementById("text").value; localStorage.setItem("notepadcontent", data);
    }
});

