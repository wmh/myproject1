<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="zh-tw">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="zh-tw" />
<title>New Page</title>
</head>
<body>
<?php

$q = 'lin%20yu%20chun';
$q = '你是我的花朵';
$q = 'I will always love you';
$q = '熊貓人';
$q = urlencode($q);
//echo $q;exit;

//http://www.youtube.com/watch?v=aA-tOsM6F4Y&feature=youtube_gdata
$ch = curl_init("http://gdata.youtube.com/feeds/api/videos?v=2&q={$q}&safeSearch=none&orderby=relevance&max-results=3");
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_POST, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);

if (curl_error($ch)) {
    echo curl_error($ch);
}
curl_close($ch);

$xml = new SimpleXMLElement($output);
//echo "<pre>", print_r($xml, TRUE), "</pre>";
foreach ($xml->entry as $entry) {
    echo $entry->title, '<br />';
    foreach ($entry->link as $link) {
        echo $link['href'], '<br />';
        break;
    }
}

?>
</body>
</html>
