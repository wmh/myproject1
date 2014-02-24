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

// insert
for ($i = 0; $i < 100; ++$i) {
  $last_id = $database->insert($table_name, [
  	"data" => $i,
  	"ctime" => time(),
  ]);
  echo $last_id, " ";
}
echo "\n";
echo $database->last_query(), "\n\n";

// update
for ($i = 0; $i < 100; ++$i) {
  $database->update($table_name, [
  	"data" => mt_rand(10000, 99999),
  ], [
  	"id" => $i + 1,
  ]);
}
echo $database->last_query(), "\n";

// get one record
$data = $database->get($table_name, "data", [
	"id" => 100
]);
echo $data, "\n\n";

// select
$data = $database->select($table_name, [
	"id",
	"data",
	"ctime",
], [
	"id[<]" => 20,
	"ORDER" => "data DESC",
	"LIMIT" => 10
]);
echo $database->last_query(), "\n\n";

foreach ($data as $row) {
  echo $row["id"], "\t", $row["data"], "\t", date("Y-m-d H:i:s", $row["ctime"]), "\n";
}
echo "\n";

// delete
for ($i = 0; $i < 100; ++$i) {
  $database->delete($table_name, [
    "id" => $i + 1,
  ]);
}
echo $database->last_query(), "\n";

// count
$count = $database->count($table_name);
echo $count, " record!\n\n";

$database->query("DROP TABLE ". $table_name);
echo $database->last_query(), "\n\n";

?>