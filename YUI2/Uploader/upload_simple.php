<?php

file_put_contents("log.txt", "=== ". date("Y-m-d H:i:s") ." ===". print_r($_FILES, TRUE) ."\n", FILE_APPEND);

echo "ok";
?>
