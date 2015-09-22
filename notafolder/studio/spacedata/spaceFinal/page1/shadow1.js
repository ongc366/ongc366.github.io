var theleft;
var theright;

var text = window.location.href;
    function delineate(str) {
    theleft = str.indexOf("=") + 1;
    theright = str.indexOf("&");
    return(str.substring(theleft, str.length));
    }
    page1.html=delineate(text)
    
    function refreshFrame() {
    if(slides.location!=url&&url!=location.href)
    slides.location.replace(url);
}