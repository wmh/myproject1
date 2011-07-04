<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html">
<title>YUI 3.x: CSS Grids Units Example</title>
<link rel="stylesheet" href="http://yuiblog.com/sandbox/yui/3.2.0pr1/build/cssreset/reset.css" type="text/css">
<link rel="stylesheet" href="http://yuiblog.com/sandbox/yui/3.2.0pr1/build/cssfonts/fonts.css" type="text/css">
<link rel="stylesheet" href="http://yuiblog.com/sandbox/yui/3.2.0pr1/build/cssgrids/grids.css" type="text/css">
<style type="text/css">
#doc864 {
    background-color: #eee;
    margin: 0 auto;
    width: 864px;
}
#doc960 {
    background-color: #eee;
    margin: 0 auto;
    width: 960px;
}
.content {
    height: 300px;
    border-right: 10px solid silver;
}
.yui3-u-1-24 {
    width: 4.2%;
}
</style>
<body>

<div id="doc864">
    <div class="yui3-g">
<?php for ($i = 0; $i < 24; ++$i) : ?>
        <div class="yui3-u-1-24">
            <div class="content"><?php echo $i; ?></div>
        </div>
<?php endfor; ?>
    </div>
</div>
<div id="doc960">
    <div class="yui3-g">
<?php for ($i = 0; $i < 24; ++$i) : ?>
        <div class="yui3-u-1-24">
            <div class="content"><?php echo $i; ?></div>
        </div>
<?php endfor; ?>
    </div>
</div>
</body>
</html>
