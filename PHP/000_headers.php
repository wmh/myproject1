<?php
$headers = apache_request_headers();

foreach ($headers as $header => $value) {
    echo "$header: $value\n";
}


//echo "\n", file_get_contents("php://input");
?>
