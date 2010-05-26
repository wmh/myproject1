/*global YAHOO, alert, document
*/
(function () {
    if (typeof YAHOO === 'undefined') {
        alert('You need to load YUI2 before using Logger!');
        return false;
    }
    if (typeof YAHOO.widget.LogReader !== 'undefined') {
        alert('Logger is aleady loaded!');
        return false;
    }
    var body, head, css, js, callback;
    callback = function () {
        var logger, loggerDiv;
        if (YAHOO.widget.LogReader) {
            loggerDiv = document.createElement('div');
            loggerDiv.id = "loggerDiv" + (parseInt(Math.random() * 900000, 10) + 100000);
            loggerDiv.style.cssFloat = "right";
            loggerDiv.style.styleFloat = "right";
            body.insertBefore(loggerDiv, body.firstChild);
            logger = new YAHOO.widget.LogReader(loggerDiv.id);
            alert("Logger is ready for you.");
        }
    };
    head = document.getElementsByTagName('head')[0];
    body = document.getElementsByTagName('body')[0];
    css = document.createElement('link');
    css.setAttribute('type', 'text/css');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('href', 'http://yui.yahooapis.com/2.8.0r4/build/logger/assets/skins/sam/logger.css');
    head.appendChild(css);
    js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', 'http://yui.yahooapis.com/2.8.0r4/build/logger/logger-min.js');
    head.appendChild(js);
    js.onreadystatechange = function () {
        if (js.readyState === 'complete') {
            callback();
        }
    };
    js.onload = function () {
        callback();
    };
}());