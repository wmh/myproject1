<?php
echo apc_store("apc_test_d", date("Y-m-d H:i:s", time())), '<br>';
?>
