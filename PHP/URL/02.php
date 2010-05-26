<?php

if (isset($_GET['url'])) {
    echo htmlspecialchars($_GET['url']);
}
else {
    $argv = substr(str_replace($_SERVER['SCRIPT_NAME'], '', $_SERVER['REQUEST_URI']), 1);
    echo htmlspecialchars($argv);
    //phpinfo();
}

?>
