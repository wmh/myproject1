<?php

$ch = curl_init("http://172.17.3.18:5555/ws/api/getRouter?tok=tok123&callback=abc");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);

if (curl_error($ch)) {
    echo curl_error($ch);
}
curl_close($ch);

echo htmlspecialchars($output);

?>