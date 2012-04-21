<?php
error_reporting(E_ALL);

$priv_key = file_get_contents('priv.key');

$data = json_encode(array(
    "status" => "ok",
    "msg" => "This is Elton Jonn!",
));
$result = openssl_private_encrypt($data, $crypted, $priv_key);

echo $result, "\n";

file_put_contents("02.result.txt", base64_encode($crypted));


?>
