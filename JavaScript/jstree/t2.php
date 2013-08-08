<?php

if (!isset($_GET['gid'])) {
    $root = array(
        "data" => "group1",
        "attr" => array(
            'data-gid' => 1,
            'data-path' => '/',
            'rel' => 'group',
        ),
        "state" => "closed",
        "children" => []
    );
    echo json_encode($root);
    return;
}

$tree = array(
    array(
        "data" => "sub-folder",
        "attr" => array(
            'rel' => 'folder',
        ),
        "state" => "closed",
    ),
    array(
        "data" => "file1",
        "attr" => array(
            'rel' => 'text-file',
        ),
        "state" => "",
    ),
    array(
        "data" => "file2",
        "attr" => array(
            'rel' => 'text-file',
        ),
        "state" => "",
    ),
);
echo json_encode($tree);
return;


?>