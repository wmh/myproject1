<?php

$data = array(
    "key" => "xxx",
    "tags" => "test",
    "fileupload" => "@D:/Downloads/Photos/_for_test/serial/001.jpg",
);

$ch = curl_init("http://www.imageshack.us/upload_api.php");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
$output = curl_exec($ch);

if (curl_error($ch)) {
    echo curl_error($ch);
}
curl_close($ch);

echo $output;

?>