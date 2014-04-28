<?php
require  __DIR__ . '/vendor/catfan/medoo/medoo.php';

$database = new medoo([
    'database_type' => 'mysql',
    'database_name' => 'test',
    'server' => 'localhost',
    'username' => 'root',
    'password' => 'zxcv',
]);

$table_name = "medoo_test_". mt_rand(1000, 9999);
echo $table_name, "\n";

$database->query("CREATE TABLE IF NOT EXISTS ". $table_name ." (  id int(11) NOT NULL auto_increment,  data varchar(10) NOT NULL,  ctime int(11) NOT NULL,  PRIMARY KEY  (id)) ENGINE=MEMORY DEFAULT CHARSET=utf8;");
echo $database->last_query(), "\n\n";

$start_time = array_sum(explode(' ', microtime()));

// insert
for ($i = 0; $i < 10000; ++$i) {
  $last_id = $database->insert($table_name, [
    "data" => $i,
    "ctime" => time(),
  ]);
//  echo $last_id, " ";
}
echo "\n";
echo $database->last_query(), "\n\n";

$end_time = array_sum(explode(' ', microtime()));
echo "spend time: ", ($end_time - $start_time), "\n";

//$database->query("DROP TABLE ". $table_name);
//echo $database->last_query(), "\n\n";

