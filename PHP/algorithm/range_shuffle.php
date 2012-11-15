<?php
$s = 1001;
$range = 1000;

$e = $s + $range - 1;
$level = 6;

// single debug
if (0) {
    define("DEBUG", 1);
    $deep = 0;
    echo sprintf('%1$02d', rand_sort($s, $e, 21, $level)), ' ';
    return;
}

// single result
if (1) {
    foreach (range($s, $s + 20) as $i) {
        echo sprintf('%1$02d', rand_sort($s, $e, $i, $level, TRUE)), ' ';
    }
    return;
}

foreach (range($s, $e) as $i) {
    echo sprintf('%1$02d', $i), ' ';
}
echo "\n";
for ($curr_level = 1; $curr_level <= $level; ++$curr_level) {
    foreach (range($s, $e) as $i) {
        //echo $i % $curr_level == 0 ? '-- ' : '   ';
        echo "---";
    }
    echo "\n";
    foreach (range($s, $e) as $i) {
        echo sprintf('%1$02d', rand_sort($s, $e, $i, $curr_level, TRUE)), ' ';
    }
    echo "\n";
    foreach (range($s, $e) as $i) {
        echo ($i - $s + 1) % $curr_level == 0 ? '-- ' : '   ';
    }
    echo "\n";
    foreach (range($s, $e) as $i) {
        echo sprintf('%1$02d', rand_sort($s, $e, $i, $curr_level)), ' ';
    }
    echo "\n";
}

function rand_sort($start, $end, $src, $complexity, $skip_last_jump = FALSE) {
    //$offset = $src;
    global $deep;
    $deep += 4;
    $total = $end - $start + 1;
    for ($i = 1; $i <= $complexity; ++$i) {
        if (defined("DEBUG")) echo str_pad(" ", $deep), "i: ", $i, "\n";

        // offset
        $offset = floor($total / ($i + 1));
        if ($offset > 1) {
            $offset_index = $src + $offset;
            $offset_index -= $offset_index > $end ? $total : 0;
            if ($i == 1) {
                $dst = $offset_index;
            } else {
                if (defined("DEBUG")) echo str_pad(" ", $deep), "offset rand_sort($start, $end, $offset_index, $i - 1):\n";
                $dst = rand_sort($start, $end, $offset_index, $i- 1);
                if (defined("DEBUG")) echo str_pad(" ", $deep), "==>", $dst, "\n";
            }
        }
        if ($src == $start && $i == $complexity && $skip_last_jump !== FALSE) {
            echo str_pad(" ", $deep), "total: ", $total, ", offset: ", $offset, "-->", $offset, "\n";
        }
        if (defined("DEBUG")) echo str_pad(" ", $deep), "offset: ", $offset, ", dst: ", $dst, "\n";

        // jump
        if ($i == 1 || ($skip_last_jump && $i == $complexity)) {
            if (defined("DEBUG")) echo str_pad(" ", $deep), "skip jump 1\n";
            continue;
        }
        $jump = $i * ($i - 1);
        if ($jump > $total) {
            if (defined("DEBUG")) echo str_pad(" ", $deep), "skip jump 2\n";
            break;
        }
        $src_index = $src - $start + 1;
        if ($src_index % $i === 0) {
            $jump_index = $src + $jump;
            $jump_index = $jump_index > $end ? $i * ($i - floor(($end - $src) / $i) - 1) + $start - 1 : $jump_index;
            //if (defined("DEBUG")) echo str_pad(" ", $deep), "jump: ", $jump_index, "\n";
            if (defined("DEBUG")) echo str_pad(" ", $deep), "jump rand_sort($start, $end, $jump_index, $i - 1, TRUE):\n";
            $dst = rand_sort($start, $end, $jump_index, $i, TRUE);
            if (defined("DEBUG")) echo str_pad(" ", $deep), "==>", $dst, "\n";
        }
    }

    if (defined("DEBUG")) echo str_pad(" ", $deep), "===>", $dst, "\n";
    $deep -= 4;
    return $dst;
}




 ?>
