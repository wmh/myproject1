<?php

function get_utf8_basename($str)
{
    $last_slash = mb_strrpos($str, "/", "utf-8");
    return mb_substr($str, ++$last_slash, mb_strlen($str, "utf-8"), "utf-8");
}
