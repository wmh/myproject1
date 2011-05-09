<?php
header("X-UA-Compatible: IE=EmulateIE7");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache" />
<title>Testing opacity</title>
<style type="text/css">
.test {
    color: #fff;
    font-size: 93%;
    font-weight: bold;
    padding: 3px;
    position: static;
    filter: alpha(opacity=50);
    -moz-opacity: 0.5;
    -khtml-opacity: 0.5;
    opacity: 0.5;
}
.test2 {
    color: red;
    background-color: green;
    position: absolute;
    width: 500px;
    height: 100px;
    filter: alpha(opacity=30);
    opacity: 0.3;
}
</style>
</head>

<body>

<div style="background-color: green;  width: 500px; height: 100px; color: red;">
    test
</div>

<div class="test2">
    test
</div>

<img src="http://l.yimg.com/a/i/ww/news/2010/04/11/coleman1-pd.jpg" />

<img src="http://l.yimg.com/a/i/ww/news/2010/04/11/coleman1-pd.jpg" class="test" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
<script type="text/javascript">
$(function () {
    $(document).click(function () {
        alert(1);
        $(".test2").css("position", "static");
    });
});
</script>
</body>
</html>
