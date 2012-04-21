<?php

$mem = new Memcache;
$mem->connect("127.0.0.1", 11211);
$mem->set('anumber', 0, 0, 3600);

$start = array_sum(explode(" ", microtime()));

for ($i = 0; $i < 100000; ++$i) {
    $mem->increment('anumber');
}

echo $mem->get('anumber'), '<br>';

echo array_sum(explode(" ", microtime())) - $start;

?>
