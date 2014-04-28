var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen(82);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var ss = {};
io.sockets.on('connection', function (socket) {
  ss[socket.id] = socket;
  //console.log('--- ' + socket.id + ' connection! ---');
  socket.on('sid', function (data) {
    socket.phpsid= data.sid;
    console.log('--- ' + socket.phpsid + ' connection! ---');
  });

  socket.on('change-nickname', function (data) {
    console.log(data);
    socket.nickname = data.nickname;
  });
  socket.on('send', function (data) {
    data.nickname = socket.nickname;
    io.sockets.emit('show', data);
  });
  socket.on('disconnect', function () {
    delete ss[socket.id];
    console.log('=== ' + socket.id + ' disconnected! ===');
  });
});

(function () {
  console.log('Current users: ' + Object.keys(ss).length);
  for (id in ss) {
    console.log('  ' + id);
  }
  setTimeout(arguments.callee, 3000);
}());