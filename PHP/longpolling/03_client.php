<?php
//http://localhost/myproject1/PHP/longpolling/02_server.php

set_time_limit(0);
define("COMET_API_URL", "http://api.miiicasa.com/service/getRecentlyAddedInfo");
define("LOGIN_API_URL", "https://api.miiicasa.com/service/login");
define("EMAIL", "hunter_wu@miiicasa.com");
define("PASSWORD", "zxcv1234");
define("TMP_COOKIE_FILE", ".cookie.txt");

$post_data = array(
    "email" => EMAIL,
    "password" => PASSWORD,
);
$ch = curl_init(LOGIN_API_URL);
curl_setopt($ch, CURLOPT_TIMEOUT, 86400);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
curl_setopt($ch, CURLOPT_COOKIEJAR, TMP_COOKIE_FILE);
curl_setopt($ch, CURLOPT_COOKIEFILE, TMP_COOKIE_FILE);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
$output = curl_exec($ch);
if (curl_error($ch))
{
    echo curl_error($ch), "\n";
}
curl_close($ch);
echo $output;


$ch = curl_init(COMET_API_URL);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_COOKIEJAR, TMP_COOKIE_FILE);
curl_setopt($ch, CURLOPT_COOKIEFILE, TMP_COOKIE_FILE);
$output = curl_exec($ch);
if (curl_error($ch))
{
    echo curl_error($ch), "\n";
}
curl_close($ch);
echo $output;

return;

$after = 0;
while (1)
{
    echo "Connecting to comet server...\n";
    $url = API_URL;
    if ($after > 0)
    {
        $url .= "?after=" . $after;
    }
    echo "--> ", $url , "\n";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_TIMEOUT, 86400);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($ch);
    if (curl_error($ch))
    {
        echo curl_error($ch), "\n";
    }
    curl_close($ch);

    $json = json_decode($output, TRUE);
    if (! $json)
    {
        sleep(1);
        continue;
    }

    if ($json["status"] !== "ok")
    {
        $errmsg = $json["errmsg"];
        if (empty($errmsg))
        {
            $errmsg = "Unknown error!!";
        }
        echo $error, "\n";
        continue;
    }

    if (empty($json["folders"]))
    {
        echo "No data!!!!!!\n";
        sleep(10);
        continue;
    }

    foreach ($json["folders"] as $folder)
    {
        echo $folder["owner_name"], " added ", $folder["num"], " ",
            $folder["type"], " in ", $folder["folder_name"], "\n";
        $after = max($folder["time"], $after);
    }
    sleep(1);
}

?>