<?php

if (!isset($_GET['gid'])) {
    $root = array(
        "data" => "group1",
        "attr" => array(
            'data-gid' => 1,
            'data-path' => '/',
        ),
        "state" => "closed",
        "children" => []
    );
    echo json_encode($root);
    return;
}

$tree = array(
    "data" => "file1",
);
echo json_encode($tree);
return;


?>