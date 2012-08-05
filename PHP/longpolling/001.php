<?php

$ch = curl_init("http://127.0.0.1:8124/?cmd=release");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);

if (curl_error($ch)) {
    echo curl_error($ch);
}
curl_close($ch);

echo htmlspecialchars($output), "\n";
?>