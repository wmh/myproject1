<?php
$q = $_GET["q"];
if (!$q) return;
$data = array(
'台北市中正區',
'台北市大同區',
'台北市中山區',
'台北市松山區',
'台北市大安區'
);
foreach ($data as $value) {
  if (strpos($value, $q) !== false) {
    echo $value."\n";
  }
}
?>