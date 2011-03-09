<?php
//Sample code
$host = 'api.miiicasa.com';
//$host = '7396.devm1.corp.miiicasa.com';
$port = 80;
$timeout = 10;
$path = '/service/device/auth/saveInfo';

$fp = fConnect($host, $port, $timeout);
fGet($fp, $host, $path);
$output = fContentAllTill($fp, '</html>');
echo $output;

function fConnect($host, $port, $timeout = 10) {
        if ($port == 443) $host = "ssl://$host";
        $fp = fsockopen($host, $port, $errno, $errstr, $timeout);
        if (!$fp) {
                echo "$errstr ($errno)<br />\n";
                exit();
        } else {
                return $fp;
        }
}

function fGet($fp, $host, $path, $extra = '') {
        $getContent = "GET $path HTTP/1.1\r\n";
        $getContent .= "Host: $host\r\n";
        $getContent .= "Accept: */*\r\n";
        $getContent .= "Accept-Language: zh-tw\r\n";
        $getContent .= "User-Agent: ". fRandomUserAgent() ."\r\n";
        $getContent .= "Connection: close";
        if ($extra != "") $getContent .= "\r\n$extra";
        fputs($fp, $getContent."\r\n\r\n");
}

function fPost($fp, $host, $path, $data, $extra = '') {
        $dataLength = strlen($data);
        $postContent = "POST $path HTTP/1.1\r\n";
        $postContent .= "Host: $host\r\n";
        $postContent .= "Content-Type: application/x-www-form-urlencoded\r\n";
        $postContent .= "Content-Length: $dataLength\r\n";
        $postContent .= "User-Agent: ". fRandomUserAgent() ."\r\n";
        $postContent .= "Connection: close";
        if ($extra != "") $postContent .= "\r\n$extra";
        $postContent .= "\r\n\r\n";
        $postContent .= $data;
        fputs($fp, $postContent);
}

function fPostBlogger($fp, $host, $path, $data, $extra = '') {
        $dataLength = strlen($data);
        $postContent = "POST $path HTTP/1.0\r\n";
        $postContent .= "Host: $host\r\n";
        $postContent .= "Content-Type: application/atom+xml\r\n";
        $postContent .= "Content-Length: $dataLength\r\n";
        $postContent .= "User-Agent: ". fRandomUserAgent() ."\r\n";
        $postContent .= "Connection: close";
        if ($extra != "") $postContent .= "\r\n$extra";
        $postContent .= "\r\n\r\n";
        $postContent .= $data;
        fputs($fp, $postContent);
}

function fContent($fp) {
  return fContentAllTill($fp);
}

function fContentAllTill($fp, $till = '') {
        $content = "";
        while ($fp && !feof($fp)) {
                $tmp = fread($fp, 4096);
                if (!$tmp) break;
                $content .= $tmp;
                if ($till != '' && strstr($tmp, $till)) break;
        }
        return $content;
}

function fRandomUserAgent() {
  $user_agents = array('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)',
                       'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
                       'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0; GTB5; Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; InfoPath.1; .NET CLR 3.0.04506; .NET CLR 3.5.21022)',
                       'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.19 (KHTML, like Gecko) Chrome/1.0.154.53 Safari/525.19',
                       );
  return $user_agents[rand(0, count($user_agents) - 1)];
}