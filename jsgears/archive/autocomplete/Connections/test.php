<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_test = "localhost";
$database_test = "test";
$username_test = "root";
$password_test = "";
$test = mysql_pconnect($hostname_test, $username_test, $password_test) or trigger_error(mysql_error(),E_USER_ERROR);
//mysql_query("SET NAMES 'big5'",$test );
mysql_query("SET NAMES utf8",$test);
//mysql_query("SET CHARACTER SET utf8",$test);
mysql_select_db($database_test);
?>