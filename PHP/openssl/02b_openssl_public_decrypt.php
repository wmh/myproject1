<?php
error_reporting(E_ALL);

$pub_key = file_get_contents('pub.key');
$encrypt = base64_decode(file_get_contents('02.result.txt'));
$result = openssl_public_decrypt($encrypt, $decrypted, $pub_key);
print_r(json_decode($decrypted, TRUE));

?>
