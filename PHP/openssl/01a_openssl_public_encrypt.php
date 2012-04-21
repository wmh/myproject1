<?php
error_reporting(E_ALL);

$pub_key = file_get_contents('pub.key');

$data = json_encode(array(
    "status" => "ok",
    "msg" => "Helloooooo world!",
));
$result = openssl_public_encrypt($data, $crypted, $pub_key);

echo $result, "\n";

file_put_contents("01.result.txt", base64_encode($crypted));


?>
