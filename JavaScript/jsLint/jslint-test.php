<?php

$rtn = exec('java -jar js.jar jslint-rhino.js D:\Workspace\GitRepositories\myproject1\jsLint\test1-origin.js', $output, $rtn_var);
//$rtn = exec('java -jar js.jar jslint-rhino.js D:\Workspace\GitRepositories\myproject1\jsLint\test1.js', $output, $rtn_var);

//jslint always return 0
if (count($output) === 1 && strpos($output[0], 'jslint: No problems found') !== FALSE) {
    echo 'no error';
} else {
    echo join($output, "\n");
}


?>
