<?php

$pub = file_get_contents("D:/Workspace/github/myproject1/PHP/openssl/pub.key");
$data = array(
    "a" => 1,
    "b" => $pub,
);

$ch = curl_init("http://192.168.254.9/~hunter_wu/nil.php");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

echo $output = curl_exec($ch);
curl_close($ch);


?>