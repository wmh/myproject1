var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(8002);

function handler (req, res) {
  fs.readFile(__dirname + '/io.sockets.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading io.sockets.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log("socket.id : " + socket.id);
    console.log(data);
  });
});