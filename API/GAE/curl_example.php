<?php

// Initialise and execute a request
$data = $request['postfields'];
$data = http_build_query($data);
$context =
  array("http"=> array(
    "method" => $method,
    "header" => "Content-Type: application/x-www-form-urlencoded\r\n" .
                "Content-Length: " . strlen($data) . "\r\n",
    "content" => $data,
  ));
$context = stream_context_create($context);
$response = file_get_contents($request['url'], false, $context);

if ($response == FALSE) {
  throw new Exception("error");
}
?>