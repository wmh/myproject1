<?php
header("X-XSS-Protection: 0");
$str = "'梁()";
$str = "'%A()";
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Title Here</title>
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.0.0/build/cssreset/reset-min.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.0.0/build/cssfonts/fonts-min.css">
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
</head>
<body>
<?php
if ($_SERVER['QUERY_STRING']) {
    echo ($_SERVER['QUERY_STRING']), "<hr>";
}
?>

<a href="t1.php?<?php echo rawurlencode($str); ?>"><?php echo $str; ?></a> |
<a href="t1.php?<?php echo $str; ?>"><?php echo $str; ?></a>
<button id="t1"><?php echo $str; ?>1</button>
<button id="t2"><?php echo $str; ?>2</button>
<hr>
<button id="t3"><?php echo $str; ?>1</button>
<button id="t4"><?php echo $str; ?>2</button>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js"></script>
<script>
$(function () {
    $("#t1").click(function () {
        location.href = "./t1.php?" + encodeURIComponent("<?php echo $str; ?>");
    });
    $("#t2").click(function () {
        location.href = "./t1.php?<?php echo $str; ?>";
    });
    $("#t3").click(function () {
        location.href = "./t1.php?sharp#" + encodeURIComponent("<?php echo $str; ?>");
    });
    $("#t4").click(function () {
        location.href = "./t1.php?sharp#<?php echo $str; ?>";
    });
});
</script>
</body>
</html>