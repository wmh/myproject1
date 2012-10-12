var ws = require("websocket-server"),
    util = require('util'),
    cnt = 0;

var server = ws.createServer();

server.addListener("connection", function(connection){
    console.log("connection...");
    connection.addListener("message", function(msg){
        console.log("message...");
        server.send(msg);
    });
});
server.addListener("request", function (request, response) {
    ++cnt;
    console.log("Got request " + cnt + " ...");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('You are the ' + cnt + 'th guest.\n');
});

server.listen(8081);
