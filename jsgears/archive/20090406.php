<?php

file_put_contents('20090406.txt', date('Y-m-d H:i:s '). $_GET['colorid'] ."\n", FILE_APPEND);

?>
ok!