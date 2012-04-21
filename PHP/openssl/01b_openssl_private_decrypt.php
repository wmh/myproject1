<?php
error_reporting(E_ALL);

$priv_key = file_get_contents('priv.key');

$encrypt = base64_decode(file_get_contents('01.result.txt'));

$result = openssl_private_decrypt($encrypt, $decrypted, $priv_key);
print_r(json_decode($decrypted, TRUE));

?>
