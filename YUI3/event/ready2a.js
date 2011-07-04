/*
mod_deflate + mod_expires
*/
function massInsert() {
    var alerted = false;
    var iNode = document.getElementById("insert-node");
    for (i = 0; i < 100; ++i) {
        if (!alerted) {
            alerted = true;
            console.log("RUN - " + document.readyState);
        }
        /*
        var e   = document.createElement("script");
        e.type  = "text/javascript";
        e.src   = "http://yui.yahooapis.com/3.2.0/build/yui/yui-min.js?" + new Date().getTime() + "_" + i;
        e.async = true;
        iNode.appendChild(e);
        */
        var e   = document.createElement("iframe");
        e.src  = "about:blank";
        iNode.appendChild(e);
    }
}
setTimeout(massInsert, 300);
console.log("READY2 - " + document.readyState);
