<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Test Websocket</title>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.0/css/bootstrap.min.css">
<link href='http://fonts.googleapis.com/css?family=Amaranth:400,700' rel='stylesheet' type='text/css'>
<style>
body {
  background-image: url(//wmh.github.io/circular-slides-generator/static/img/noise.png);
}
h1 {
  font-size: 82px;
  font-family: 'Amaranth', sans-serif;
  text-shadow: 0px 3px 3px #666;
  margin-top: 0;
}
h2 {
  font-family: 'Amaranth', sans-serif;
}
</style>
<body>
<div class="container">
<!--
  <h1>Socket.io</h1>
  <p class="lead">Testing...</p>
-->
  <form class="form-horizontal" role="form">
    <div class="form-group">
      <label for="nickname" class="col-md-2 control-label">Nickname: </label>
      <div class="col-md-2">
        <input type="text" class="form-control" id="nickname" value="">
      </div>
      <label for="message" class="col-md-1 control-label">Message: </label>
      <div class="col-md-4">
        <input type="text" class="form-control" id="message" value="">
      </div>
    </div>

    <div class="form-group">
      <label for="nickname" class="col-md-2 control-label"></label>
      <div class="col-md-2" id="message-block">
        <p><strong>Hun: </strong> this is a test.</p>
        <p><strong>Guest: </strong> this is a test two.</p>
      </div>
    </div>

  </form>
</div>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//localhost:82/socket.io/socket.io.js"></script>
<script>
var sid = '<?php echo session_id(); ?>';
$(function () {
  var socket = io.connect('http://localhost:82');

  socket.on('connect', function (data) {
    console.log("--connect--");
    socket.emit('sid', {sid: sid});
    socket.emit('change-nickname', { nickname: $('#nickname').val() });
  });

  socket.on('show', function (data) {
    $("#message-block").prepend('<p><strong>' + data.nickname + ': </strong>' + data.message + '</p>');
  });

  $('#nickname').change(function () {
    var nickname = $(this).val();
    console.log('Nickname: ' + nickname);
    socket.emit('change-nickname', { nickname: nickname });
  });
  $('#message').keypress(function (e) {
    if ( event.which == 13 ) {
      var message = $(this).val();
      event.preventDefault();
      console.log('Send: ' + message);
      $(this).val('');
      socket.emit('send', { message: message});
    }
  });
});
</script>
</body>
</html>