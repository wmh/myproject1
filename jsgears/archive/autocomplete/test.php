<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-tw">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="zh-tw" />
<title>New Page</title>
</head>

<body>
<?php

$q = "%u8A31%u529F%u84CB";
echo join('', json_decode('["'. strtr($q, '%u', '\u') . '"]'));


?>
</body>

</html>
