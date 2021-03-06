<?php
define("PWD", $_ENV["PWD"]);
$check_extensions = array("js");
$ignore_entries = array("yui");
$err_cnt = 0;
$opts = getopt("f:d:o:i:e:hr");

if (isset($opts["h"]))
{
    show_help();
    exit;
}
elseif (isset($opts["f"]))
{
    // check single file
    if (substr($opts["f"], 0, 1) !== "/")
    {
        $opts["f"] = PWD ."/". $opts["f"];
    }
    $err_cnt = check_file($opts["f"]);
}
else
{
    // check files in specified directory
    $basepath = (isset($opts["d"]) ? $opts["d"] : PWD);
    $recursive = isset($opts["r"]) || isset($opts["R"]);
    $GLOBALS['check_extensions'] = (isset($opts["e"]) ? explode(",", $opts["e"]) : $check_extensions);
    $GLOBALS['ignore_entries'] = (isset($opts["i"]) ? explode(",", $opts["i"]) : $ignore_entries);
    $err_cnt = check_dir($basepath, $recursive);
}

if ($err_cnt === 0)
{
    echo "No problems found. Congratulations!\n\n";
}


function check_dir($dir, $recursive = TRUE)
{
    $err_cnt = 0;
    $d = dir($dir);
    //echo "Path: " . $d->path . "\n";
    while ($entry = $d->read())
    {
        if (strlen($entry) <= 2) continue;
        $full_entry = $dir .'/'. $entry;
        if ($recursive && is_dir($full_entry) && !in_array($entry, $GLOBALS['ignore_entries']))
        {
            $err_cnt += check_dir($full_entry);
        }
        else
        {
            $file_extension = pathinfo($entry, PATHINFO_EXTENSION);
            if (!in_array($file_extension, $GLOBALS['check_extensions']))
            {
                continue;
            }
            $err_cnt += check_file($full_entry);
        }
    }
    return $err_cnt;
}

// use jslint to check single file
function check_file($file)
{
    $rtn = exec("java -jar js.jar jslint-rhino.js ". $file, $output, $rtn_var);

    //Note: jslint always return 0
    //if ($rtn_var == 0) return 0;
    if (count($output) === 1 && strpos($output[0], "jslint: No problems found") !== FALSE)
    {
        return 0;
    }

    //global $result_file;
    //file_put_contents($result_file, "<h2>".$file."</h2><pre>".join("\n", $output)."</pre>", FILE_APPEND);
    echo $file, "\n\n  ", join("\n  ", $output), "\n";
    return 1;
}


// show help
function show_help()
{
    echo <<<HELP
Usage: jslint [options]
              [-f <filename> | -d <directory>]
              [-o <output_file>]
              [-i <ignore_entries>]
              [-e <extensions>]

  -h        This help
  -r, -R    Check sub directories recursively
  -f        Specify a filename to do jslint check
  -d        Specify a directory to do jslint check. By default, jslint runs the check in current directory.
  -o        Ouput file (not implement yet.)
  -i        Ignore entries seperate by comma. The default value is 'yui'
  -e        Extensions seperate by comma. The default value is 'js'


HELP;
}
?>
