<?php
/*
{
"status":"ok",
"errno":"",
"errmsg":"",
"count":11,
"filepath":"/var/tmp/storage_dev/HD_WDC_WD3200BEVT-1/Photos/Birthday",
"files":[
    {
        "name":".","type":2,"ext":"","size":4096,"mtime":946712440
    },{
        "name":"..","type":2,"ext":"","size":4096,"mtime":946660694
    },{
        "name":"Bling.jpg","type":1,"ext":"jpg","size":30081,"mtime":1271933598
    },{
        "name":"Blow_the_candle.jpg","type":1,"ext":"jpg","size":37216,"mtime":1271933582
    },{
        "name":"I_want_cake.jpg","type":1,"ext":"jpg","size":35057,"mtime":1271933550
    },{
        "name":"happy.jpg","type":1,"ext":"jpg","size":33138,"mtime":1271933568
    },{
        "name":"singsong.jpg","type":1,"ext":"jpg","size":23134,"mti    me":1271933534},{"name":"sit_beside_cake.jpg","type":1,"ext":"jpg","size":39741,"mtime":1271933520},{"name":"waiting.jpg","type":1,"ext":"jpg","size":27903,"mtime":1271933400},{"name":"watch_cake.jpg","type":1,"ext":"jpg","size":38143,"mtime":1271933382},{"name":"yummy.jpg","type":1,"ext":"jpg","size":44169,"mtime":1271933356}]};

*/

$a = '{"status":"ok","errno":"","errmsg":"","count":11,"filepath":"/var/tmp/storage_dev/HD_WDC_WD3200BEVT-1/Photos/Birthday","files":[{"name":".","type":2,"ext":"","size":4096,"mtime":946712440},{"name":"..","type":2,"ext":"","size":4096,"mtime":946660694},{"name":"Bling.jpg","type":1,"ext":"jpg","size":30081,"mtime":1271933598},{"name":"Blow_the_candle.jpg","type":1,"ext":"jpg","size":37216,"mtime":1271933582},{"name":"I_want_cake.jpg","type":1,"ext":"jpg","size":35057,"mtime":1271933550},{"name":"happy.jpg","type":1,"ext":"jpg","size":33138,"mtime":1271933568},{"name":"singsong.jpg","type":1,"ext":"jpg","size":23134,"mtime":1271933534},{"name":"sit_beside_cake.jpg","type":1,"ext":"jpg","size":39741,"mtime":1271933520},{"name":"waiting.jpg","type":1,"ext":"jpg","size":27903,"mtime":1271933400},{"name":"watch_cake.jpg","type":1,"ext":"jpg","size":38143,"mtime":1271933382},{"name":"yummy.jpg","type":1,"ext":"jpg","size":44169,"mtime":1271933356}]}';

echo "<pre>";
$b = json_decode($a, TRUE);
for ($i = 0; $i < count($b['files']); ++$i) {
    $arr = array($b['files'][$i]['name'], $b['files'][$i]['size'], $b['files'][$i]['mtime']);
    $b['files'][$i]['md5'] = md5(join("", $arr));
    $b['files'][$i]['sn'] = $i;
}

print_r($b);
echo "</pre>";

?>
