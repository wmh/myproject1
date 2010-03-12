<?php

$ignore_dirs = array('yui');
$ignore_files = array('jslint.js');

$basepath = '/home/hunter_wu/muchiii/index/static';
$result_file = '/home/hunter_wu/try/hunter/jslint_results.html';

//$basepath = 'D:/Workspace/GitRepositories/myproject1/jsLint';
//$result_file = 'D:/Workspace/GitRepositories/myproject1/jsLint/jslint_results.html';

file_put_contents($result_file, '<!doctype html><head>
<title>jsLint reports</title>
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.0.0/build/cssreset/reset-min.css" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.0.0/build/cssbase/base-min.css" />
<style type="text/css">
pre { margin-left: 2em; padding: 0.5em; border-left: 3px solid #ccc; }
</style>
</head>
<body>
<h1>Date: '.date('Y-m-d').'</h1>');

$err_cnt = 0;
build_dir($basepath);
if ($err_cnt === 0) {
    file_put_contents($result_file, '<h2>No error found.</h2>');
}

file_put_contents($result_file, '</body>
</html>', FILE_APPEND);

function build_dir($dir) {
    global $err_cnt, $ignore_dirs;
    $d = dir($dir);
    //echo "Path: " . $d->path . "\n";
    while ($entry = $d->read()) {
        if (strlen($entry) <= 2) continue;
        $full_entry = $dir.'/'.$entry;
        if (is_dir($full_entry) && !in_array($entry, $ignore_dirs)) {
            build_dir($full_entry);
        } else {
            if (strtolower(substr($entry, -3)) != '.js') continue;
            $err_cnt += jslint_check($full_entry);
        }
    }
}

function jslint_check($file) {
    $rtn = exec('java -jar js.jar jslint-rhino.js '.$file, $output, $rtn_var);

    //Note: jslint always return 0
    //if ($rtn_var == 0) return 0;
    if (count($output) === 1 && strpos($output[0], 'jslint: No problems found') !== FALSE) {
        return 0;
    }

    global $result_file;
    file_put_contents($result_file, "<h2>".$file."</h2><pre>".join("\n", $output)."</pre>", FILE_APPEND);
    return 1;
}

?>
