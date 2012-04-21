<?php

$start = array_sum(explode(" ", microtime()));

for ($i = 0; $i < 5000000; ++$i) {
    apc_inc('anumber');
}

echo apc_fetch('anumber'), '<br>';

echo array_sum(explode(" ", microtime())) - $start;

?>
