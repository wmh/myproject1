<?php

$dir = new DirectoryIterator(getcwd());
foreach ($dir as $entry)
{
    echo $entry . "\n";
}

echo "----------\n";

$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator(getcwd()),
                                              RecursiveIteratorIterator::CHILD_FIRST);
foreach ($iterator as $path)
{
    echo $path . "\n";
}

?>