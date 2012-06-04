<?php
$src = 'D:/Workspace/miiicasa/conf/fuse/fuse.xml';
$dst = 'D:/Workspace/miiicasa/static/smin/groupsConfig.php';

$min_group_config = array();
$fuse_modules = array();
$fuse = simplexml_load_file($src, NULL, LIBXML_XINCLUDE);
$dom = dom_import_simplexml($fuse);
$dom->ownerDocument->xinclude();
foreach ($fuse->module as $module) {
    $module_id = (string)$module["id"];
    if (!isset($fuse_modules[$module_id])) {
        $fuse_modules[$module_id] = 1; // just in case

        echo "\n", $module_id, "\n";
        foreach ($module->file as $file) {
            $type = (string)$file["type"];
            $src = (string)$file["src"];
            $min_group_config[$module_id .'_'. $type][] = '//'. $src;
        }
    }
}

file_put_contents($dst,
    "<?php\n".
    "return  ". var_export($min_group_config, TRUE) .";\n".
    "?>"
);
?>