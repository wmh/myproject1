<?php
//http://localhost/myproject1/PHP/longpolling/01_server.php
set_time_limit(60);

$a = new aa();
$a->run();

Class aa
{
    public function __construct()
    {
        echo "__construct\n";
        file_put_contents("D:/tmp.log", "__construct\n", FILE_APPEND);
    }
    public function run() {
        $last_ts = time();
        while (1) {
            echo mt_rand(0, 9);
            $new_ts = time();
            if ($new_ts !== $last_ts) {
                echo "\n", $new_ts, "\n";
                $last_ts = $new_ts;
                file_put_contents("D:/tmp.log", $last_ts . "\n", FILE_APPEND);
            }
        }
    }
    public function __destruct()
    {
        echo "__destruct\n";
        file_put_contents("D:/tmp.log", "__destruct\n", FILE_APPEND);
    }

}


/*
set_time_limit(60);
$last_ts = time();
while (1) {
    echo mt_rand(0, 9);
    $new_ts = time();
    if ($new_ts !== $last_ts) {
        echo "\n", $new_ts, "\n";
        $last_ts = $new_ts;
        file_put_contents("D:/tmp.log", $last_ts . "\n", FILE_APPEND);
    }
}
*/

?>