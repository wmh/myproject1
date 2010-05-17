<?php
sleep(2);

if ($_FILES) {
    file_put_contents("files.log", date("Y-m-d H:i:s") ."\n". print_r($_FILES, TRUE), FILE_APPEND);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache" />
<title>Title</title>
<style>
</style>
</head>

<body>

<h1>t2.php</h1>


</body>
</html>
