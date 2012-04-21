<?php
error_reporting(E_ALL);

function createKey()
{
    $r = openssl_pkey_new();

    openssl_pkey_export($r, $privKey);
    file_put_contents('priv.key', $privKey);

    $rp = openssl_pkey_get_details($r);

    $pubKey = $rp['key'];
    file_put_contents('pub.key', $pubKey);
}
createKey();


?>
