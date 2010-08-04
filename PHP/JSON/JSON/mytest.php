<?php
error_reporting(E_ALL);
require_once 'JSON.php';

$arr = array(
    "a" => "中文",
    "b" => "英文文",
);

$json = new Services_JSON();
echo $json->encode($arr);


?>
