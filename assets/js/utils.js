copyGPS = function(el) {
    el.contentEditable = true;
    el.readOnly = false;
    
    range = document.createRange();
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.
    el.contentEditable = false;
    el.readOnly = true;

    document.execCommand("copy");
}