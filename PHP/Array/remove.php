<?php
//http://xmouse.ithium.net/2004/removing-values-from-a-php-array

$array = array(
    "aaa",
    "bbb",
    "ccc",
    "ddd",
    "eee",
);

array_splice($array, 2 , 1);
print_r($array);


?>