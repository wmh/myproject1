<style>
pre {
    border-left: 3px solid silver;
    padding-left: 6px;
}
</style>
<?php
error_reporting(E_ALL);
//$cmd = 'php -v';
$cmd = 'crontab -l';

$rtn = exec($cmd, $output, $rtn_var);
echo '<h1>$rtn = exec(\'' . $cmd . '\', $output, $rtn_var)</h1>';
echo "<pre>", $rtn, "</pre>",
    "<pre>", print_r($output, TRUE), "</pre>",
    "<pre>", $rtn_var, "</pre>";

$rtn = system($cmd, $rtn_var);
echo '<h1>$rtn = system(\'' . $cmd . '\', $rtn_var)</h1>';
echo "<pre>", $rtn, "</pre>",
    "<pre>", $rtn_var, "</pre>";

$rtn = shell_exec($cmd);
echo '<h1>$rtn = shell_exec(\'' . $cmd . '\')</h1>';
echo "<pre>", $rtn, "</pre>";

// This function should be used in place of exec() or system() when the output
// from the Unix command is binary data which needs to be passed directly back
// to the browser.  A common use for this is to execute something like the
// pbmplus utilities that can output an image stream directly.
passthru($cmd, $rtn_var);
echo '<h1>passthru(\'' . $cmd . '\', $rtn_var)</h1>';
echo "<pre>", $rtn_var, "</pre>";

?>
