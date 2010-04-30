<?php
//sleep(mt_rand(1, 1));
echo json_encode(
    array(
        "result" => 1,
        "msg" => ($_SERVER['HTTP_X_REQUESTED_WITH'] == 'xmlhttprequest')
    )
);

?>