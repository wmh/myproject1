<?php
$s = 1;
$e = 20;
$level = 7; // 7 not pass?

foreach (range($s, $e) as $i) {
    echo sprintf('%1$02d', rand_sort($s, $e, $i, $level)), ' ';
}
echo "\n";
foreach (range($s, $e) as $i) {
    echo $i % ($level + 1) == 0 ? '__ ' : '   ';
}
echo "\n";

function rand_sort($start, $end, $src, $complication) {
    // offset
    $total = $end - $start + 1;
    $half = floor($total / 2);

    // swap
    $dst = $src;
    $dst += $half;
    $dst -= $dst > $total ? $total : 0;
    for ($i = 2; $i <= $complication; ++$i) {
        if ($i * 2 > $total) {
            break;
        }
        if ($src % $i === 0) {
            $offset = $i * ($i - 1);
            $swap_target_index = $src + $offset;
            $swap_target_index = $swap_target_index > $total ? $i * ($i - floor(($total - $src) / $i) - 1) : $swap_target_index;
            $dst = rand_sort($start, $end, $swap_target_index, $i - 1);
        }
    }
    return $dst;
}




?>
