<?php

file_put_contents(dirname(__FILE__) ."/log.txt", print_r($_POST, TRUE), FILE_APPEND);
/*
Array
(
    [value] => Test
    [id] => d1
)
*/

echo $_POST['value'];
?>