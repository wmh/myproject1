<?php

$md5 = md5_file("D:\_foot.php");

echo $md5, "\n";
echo any2dec($md5, 16), "\n";
echo base_convert($md5, 16, 10), "\n";
echo base_convert($md5, 16, 36), "\n";
echo dec2any(any2dec($md5, 16)), "\n";






/*
 * Decimal > Custom
 *
 * Parameters:
 * $num - your decimal integer
 * $base - base to which you wish to convert $num (leave it 0 if you are providing $index or omit if you're using default (62))
 * $index - if you wish to use the default list of digits (0-1a-zA-Z), omit this option, otherwise provide a string (ex.: "zyxwvu")
 */
function dec2any($num, $base=62, $index=FALSE) {
  if ($num == 0) return '0';
  if (!$base) {
    $base = strlen($index);
  } else if (!$index) {
    $index = substr("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 0, $base);
  }
  $out = "";
  for ($t = floor( log10( $num ) / log10( $base ) ); $t >= 0; $t--) {
    $a = floor( $num / pow( $base, $t ) );
    $out = $out . substr( $index, $a, 1 );
    $num = $num - ( $a * pow( $base, $t ) );
  }
  return $out;
}

/*
 * Custom > Decimal
 *
 * Parameters:
 * $num - your custom-based number (string) (ex.: "11011101")
 * $base - base with which $num was encoded (leave it 0 if you are providing $index or omit if you're using default (62))
 * $index - if you wish to use the default list of digits (0-1a-zA-Z), omit this option, otherwise provide a string (ex.: "abcdef")
 */
function any2dec($num, $base=62, $index=FALSE) {

  if (!$base) {
    $base = strlen($index);
  } else if (!$index) {
    $index = substr("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 0, $base);
  }
  $out = 0;
  $len = strlen($num) - 1;
  for ($t = 0; $t <= $len; $t++) {
    $out = $out + strpos( $index, substr( $num, $t, 1 ) ) * pow( $base, $len - $t );
  }
  return $out;
}



?>