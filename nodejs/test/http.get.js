var http = require('http'),
    request_timer = null,
    req = null;

request_timer = setTimeout(function() {
    req.abort();
    console.log('Request Timeout. 1');
}, 5000);

var options = {
    host: 'baike.baidu.com',
    port: 80,
    path: '/api/lemmacnt/2'
};

req = http.get(options, function(res) {
    clearTimeout(request_timer);
    var response_timer = setTimeout(function() {
        res.destroy();
        console.log('Response Timeout. 2');
    }, 60000);

    res.setEncoding('utf8');
    console.log("Got response: " + res.statusCode);
    var chunks = [], length = 0;
    res.on('data', function(chunk) {
        console.log(chunk);
        length += chunk.length;
        chunks.push(chunk);
    });
    res.on('end', function() {
        var a = JSON.parse(chunks);
        console.log(a);
        console.log("\n\n");
    });
});

return;