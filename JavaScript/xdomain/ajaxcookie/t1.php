<?php

//setcookie("aa", "123", time() + 60*60*24*30, "/", "miiicasa.com");
header("Access-Control-Allow-Origin: http://aaa.h.miiicasa.com/");
header("Access-Control-Allow-Credentials: true");

echo $_COOKIE["aa"];

?>