<?php
header("X-UA-Compatible: IE=EmulateIE7");
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache" />
<title>Bookmark</title>
<style type="text/css">
</style>
</head>

<body>
<a href="" onclick='window.external.addFavorite("http://localhost/", "Test Site"); return false;'> Add Favorite </a>
<hr>
<a href="#" id="tt"> Add Favorite TOO...</a>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
<script type="text/javascript">
$(function () {
    $("#tt").click(function () {
        alert(1);
        window.external.addFavorite("http://localhost/", "Test Site");
        alert(2);
        return false;
    });
});
</script>
</body>
</html>
