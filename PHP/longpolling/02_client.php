<?php
//http://localhost/myproject1/PHP/longpolling/02_server.php

set_time_limit(0);
//define("API_URL",  "http://comet.miiicasa.com/service/getRecentlyAddedInfo");
define("API_URL",  "http://localhost/myproject1/PHP/longpolling/02_server.php");

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