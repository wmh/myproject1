<?php
//setcookie("w1", "test3;w3=2;", time()+60*60*24*1/*one day*/, "/");
//setcookie("w2", "test3''\"\"", 0,                            "/");

$headers = apache_request_headers();
echo "<pre>", print_r($headers, TRUE), "</pre>";



echo "<pre>", print_r($_COOKIE, TRUE), "</pre>";
foreach ($_COOKIE as $k => $v) {
    echo urlencode($k), "=", urlencode($v), "<br />";
}

?>
