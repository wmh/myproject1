var http = require('http'),
    fs   = require('fs'),
    util = require('util'),
    url  = require("url"),
    server,
    cnt = 0;

server = http.createServer(function (request, response) {
    var segements = url.parse(request.url).pathname.split("/");
    if (segements[1] === 'favicon.ico') {
        var ico = new Buffer('AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD8/v0DvurVXMHr11f///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wDV8eQ6b9Giz07Hjf9Ox43/ddOmx9rz5zL///8A////AP///wD///8A////AP///wD///8A////AOj38B+L2rSnTseN/07Hjf9Ox43/TseN/07Hjf9Ox43/kNy4n+759Bj///8A////AP///wD///8A+f37B6TixINTyJD3TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9WyZLzrOTKd/z+/QP///8A////AKnkyHtOx43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf+y5s1v////AP///wCn48Z+TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/p+PGfv///wD///8Ap+PGfk7Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/6fjxn7///8A////AKfjxn5Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf+n48Z+////AP///wCn48Z+TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/p+PGfv///wD///8Ap+PGfk7Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/6fjxn7///8A////AKfjxn5Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf+n48Z+////AP///wC86dNgTseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf9Qx476xOzZU////wD///8A////ANfy5Tdy0qTKTseN/07Hjf9Ox43/TseN/07Hjf9Ox43/TseN/07Hjf961am/3fTpL////wD///8A////AP///wD///8A////ALzp02BezJfnTseN/07Hjf9Ox43/TseN/2TOm97B69dX////AP///wD///8A////AP///wD///8A////AP///wD///8A9vz5DKHhwodTyJD3U8iQ96nkyHv5/fsH////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A6PfwH+759Bj///8A////AP///wD///8A////AP///wD///8A//8AAPw/AADwDwAAwAcAAMADAADAAwAAwAMAAMADAADAAwAAwAMAAMADAADAAwAA4AcAAPgfAAD8fwAA//8AAA==', 'base64');
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.write(ico);
        response.end();
        return;
    }
    if (segements[1] === 'test.gif') {
        var gif = new Buffer('R0lGODlhFAAWAMIAAP/////Mmcz//5lmMzMzMwAAAAAAAAAAACH+TlRoaXMgYXJ0IGlzIGluIHRoZSBwdWJsaWMgZG9tYWluLiBLZXZpbiBIdWdoZXMsIGtldmluaEBlaXQuY29tLCBTZXB0ZW1iZXIgMTk5NQAh+QQBAAACACwAAAAAFAAWAAADVCi63P4wyklZufjOErrvRcR9ZKYpxUB6aokGQyzHKxyO9RoTV54PPJyPBewNSUXhcWc8soJOIjTaSVJhVphWxd3CeILUbDwmgMPmtHrNIyxM8Iw7AQA7', 'base64');
        response.writeHead(200, {'Content-Type': 'image/gif'});
        response.write(gif);
        response.end();
        return;
    }
    if (segements[1] === 'static' && segements[2]) {
        filePath = '.' + request.url;
        fs.readFile(filePath, function(err, file) {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end();
                return;
            }
            response.writeHead(200, {'Content-Type': 'application/octet-stream'});
            response.write(file);
            response.end();
        });
        return;
    }

    // normal request
    ++cnt;

    // DON'T write log async
    // fs.appendFileSync("access.log", util.inspect(request, false, 1) + "\n", 'utf8');

    console.log("Got request " + cnt + " ...");
    console.log(util.inspect(segements));
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('You are the ' + cnt + 'th guest.\n');
});

server.listen(8001, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8001...\n");
