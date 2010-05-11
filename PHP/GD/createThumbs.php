<?php
ini_set('memory_limit', '100M');
/*
print_r(gd_info());
echo IMG_GIF, "\n"; //1
echo IMG_JPG, "\n"; //2
echo IMG_JPEG,"\n"; //2
echo IMG_PNG, "\n"; //4
*/
/*
13 100x100 = 32kb, 2.5kb/each
13 180x180 = 86kb, 6.6kb/each
13 + 1 = should be 38.6, but in real is 41kb, 2.4kb wasted (6%),
*/
$dir = 'D:/Workspace/tmp/router_disk/team_building';
$memory_test = 100;
$makeCover = TRUE;
$coverSize = 180;
$thumbSize = 100;
$quality = 85;

$cnt = 0;
$tmpImg = array();
for ($i = 0; $i < $memory_test; ++$i) {
    $d = dir($dir);
    while ($entry = $d->read()) {
        if (strlen($entry) <= 2) continue;
        $full_entry = $dir .'/'. $entry;
        $ext = pathinfo($full_entry, PATHINFO_EXTENSION);
        if ($ext !== 'jpg') {
            continue;
        }
        $lastImgPath = $full_entry;
        $tmpImg[] = makeThumb($full_entry, $thumbSize);
        ++$cnt;
        echo $full_entry, "\n";
        //if ($cnt > 3) break;
    }
    echo "=== ", $i, " ===\n";
    showMemUsage();
}

if ($makeCover) {
    $coverImg = makeThumb($lastImgPath, $coverSize);
}

//combine
$imgCnt = count($tmpImg);
$thumbs = imagecreatetruecolor($makeCover ? $coverSize : $thumbSize, ($makeCover ? $coverSize : 0) + $imgCnt * $thumbSize);
$white = imagecolorallocate($thumbs, 200, 200, 200);
imagefill($thumbs, 0, 0, $white);

if ($makeCover) {
    //cover
    $w = imagesx($coverImg);
    $h = imagesy($coverImg);
    $offsetX = $offsetY = 0;
    if ($w < $coverSize) {
        $offsetX = (int)(($coverSize - $w) / 2);
    }
    if ($h < $coverSize) {
        $offsetY = (int)(($coverSize - $h) / 2);
    }
    imagecopy($thumbs, $coverImg, 0 + $offsetX, $offsetY, 0, 0, $w, $h);
}

//thumbs
for ($i = 0; $i < $imgCnt; ++$i) {
    $img = $tmpImg[$i];
    $w = imagesx($img);
    $h = imagesy($img);
    $offsetX = $offsetY = 0;
    if ($w < $thumbSize) {
        $offsetX = (int)(($thumbSize - $w) / 2);
    }
    if ($h < $thumbSize) {
        $offsetY = (int)(($thumbSize - $h) / 2);
    }
    imagecopy($thumbs, $img, 0 + $offsetX, $thumbSize * $i + $offsetY + ($makeCover ? $coverSize : 0), 0, 0, $w, $h);
}
imageJpeg($thumbs, "thumbs_". $thumbSize ."_". $quality .($memory_test > 1 ? "m". $memory_test : ""). ".jpg", $quality);

function makeThumb($src, $newSize = 100) {
    $srcSize = getimagesize($src);
    $srcRatio  = $srcSize[0] / $srcSize[1];
    $destRatio = 1;
    if ($destRatio > $srcRatio) {
        $destSize[1] = $newSize;
        $destSize[0] = round($newSize * $srcRatio);
    } else {
        $destSize[0] = $newSize;
        $destSize[1] = round($newSize / $srcRatio);
    }
    $destImage = imagecreatetruecolor($destSize[0], $destSize[1]);
    $srcImage = imagecreatefromjpeg($src);
    imagecopyresampled($destImage, $srcImage, 0, 0, 0, 0, $destSize[0], $destSize[1], $srcSize[0], $srcSize[1]);
    imagedestroy($srcImage);    //free memory, this is a MUST
    //imageJpeg($destImage, null, 85);
    return $destImage;
}

function showMemUsage() {
    //echo "memory_limit:", ini_get('memory_limit'), "\n";
    echo "memory_get_usage:", memory_get_usage(), "\n";
    if (function_exists('memory_get_peak_usage')) {
        echo "memory_get_peak_usage:", memory_get_peak_usage(), "\n";
    }
}

?>
