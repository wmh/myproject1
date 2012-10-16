<?php
$src = 'D:/Workspace/miiicasa/conf/fuse/fuse.xml';
$dst = 'D:/Workspace/miiicasa/static/smin/groupsConfig.php';

$min_group_config = array();
$fuse_modules = array();
$fuse = simplexml_load_file($src, NULL, LIBXML_XINCLUDE);
file_put_contents("D:/1.txt", print_r($fuse, TRUE));
$dom = dom_import_simplexml($fuse);
file_put_contents("D:/2.txt", print_r($fuse, TRUE));
$dom->ownerDocument->xinclude();
file_put_contents("D:/3.txt", print_r($fuse, TRUE));

foreach ($fuse->module as $module) {
    $module_id = (string)$module["id"];
if ($module_id !== "index_space_index") {
    continue;
}
    if (!isset($fuse_modules[$module_id])) {
        $fuse_modules[$module_id] = 1; // just in case

        echo $module_id, "\n";
        $module_files = read_module_files($module);


        foreach ($module_files["js"] as $file) {
            echo $file, "\n";
            $min_group_config[$module_id .'_js'][] = $file;
        }
        foreach ($module_files["css"] as $file) {
            $min_group_config[$module_id .'_css'][] = $file;
        }
    }
}
function read_module_files($module) {
    global $fuse;
    $module_id = (string)$module["id"];
    $files = array(
        "js"  => array(),
        "css" => array(),
    );
    if ($module->file) {
        foreach ($module->file as $file) {
            $type = (string)$file["type"];
            $src = (string)$file["src"];
            $files[$type][] = '//'. $src;
        }
    }
    if ($module->require) {
        foreach ($module->require as $require) {
            $sub_module_str = (string)$require["module"];
            $sub_module = $fuse->xpath("//fuse/module[@id='". $sub_module_str ."']");
            if (!is_array($sub_module)) {
                continue;
            }
            $sub_files = read_module_files($sub_module[0], 1);
            $files["js"] = array_merge($files["js"], $sub_files["js"]);
            $files["css"] = array_merge($files["css"], $sub_files["css"]);
        }
    }
    return $files;
}

if (0)
file_put_contents($dst,
    "<?php\n".
    "return  ". var_export($min_group_config, TRUE) .";\n".
    "?>"
);
?>