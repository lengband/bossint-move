/* eslint-disable */
function recalc() {
    var html = document.documentElement,
        screen = html.clientWidth,
        body = document.getElementsByTagName("body")[0],
        fz;
    fz = screen / 375 * 100 + "px";
    html.style.fontSize = fz;
    if (screen <= 320) {    
        screen = 320;
        fz = screen / 375 * 100 + "px";
        html.style.fontSize = fz;
        body.style.fontSize = 14 + 'px';
    }
}
recalc();
if (window.attachEvent) {  
    window.attachEvent("onresize", recalc);  
} else if (window.addEventListener) {  
    window.addEventListener("resize", recalc, false);    
}   
