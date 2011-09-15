<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Stick Viewport</title>
<link rel="stylesheet" type="text/css" href="//yui.yahooapis.com/3.2.0/build/cssreset/reset-min.css">
<link rel="stylesheet" type="text/css" href="//yui.yahooapis.com/3.2.0/build/cssfonts/fonts-min.css">
<link rel="stylesheet" type="text/css" href="//demo.52framework.com/css/css3.css" />
<link rel="stylesheet" type="text/css" href="//demo.52framework.com/css/general.css" />
<link rel="stylesheet" type="text/css" href="//demo.52framework.com/css/grid.css" />
<style>
h2 {
    background-color: yellow;
    border: 5px solid silver;
    color: navy;
    padding: 10px;
}
#toolbar {
    border: 1px solid silver;
}
#toolbar span {
    padding: 0 10px;
    margin: 0 10px;
}
#t4 {
    float: right;
    padding: 20px;
}
.red {  background-color: red; color: white; }
.orange {  background-color: orange; color: white; }
.yellow {  background-color: yellow; color: white; }
.green {  background-color: green; color: white; }
.blue {  background-color: blue; color: white; }
.cyan {  background-color: cyan; color: white; }
.purple {  background-color: purple; color: white; }
</style>
</head>

<body>
<div class="row">
	<div class="col col_16">
	    <div class="row">
        	<div class="col col_16">
                <h1>Stick Viewport demo</h1>
    	    </div>
    	</div>
	    <div class="row">
        	<div class="col col_4">
        	    <h2 id="t1">Hello</h2>
<?php
foreach (range(1, 10) as $i) {
    echo "<p>Hello...{$i}</p>";
}
echo '<h2 id="t2">Hello 2</h2>';
foreach (range(11, 100) as $i) {
    echo "<p>Hello...{$i}</p>";
}
?>
        	</div>
        	<div class="col col_12">
        	    <div id="toolbar">
        	        <span class="red">Hello</span>
        	        <span class="orange">Hello</span>
        	        <span class="yellow">Hello</span>
        	        <span class="green">Hello</span>
        	        <span class="blue">Hello</span>
        	        <span class="cyan">Hello</span>
        	        <span class="purple">Hello</span>
        	    </div>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec dolor lectus, id suscipit tortor. Integer vel mi nec turpis sagittis dictum vitae quis erat. Cras id orci eu quam interdum congue. Sed vestibulum vulputate arcu laoreet convallis. Sed tellus ligula, suscipit ac gravida accumsan, tempus et mauris. Donec dapibus mollis sem, et tincidunt justo lacinia quis. Sed ultrices mattis pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel neque lorem. Donec ante enim, condimentum ac faucibus at, tristique nec risus.<br><br>

In rhoncus vestibulum tempus. Vivamus imperdiet placerat augue, et dignissim ante ullamcorper sit amet. Etiam posuere blandit consectetur. Nam scelerisque lacus arcu. Quisque iaculis dui eget lorem tempus convallis. Sed sollicitudin, est id facilisis ultricies, est nunc placerat leo, a egestas tortor est eu libero. Cras quis enim dolor, at aliquet nibh. Morbi ut mattis velit. Sed mollis tempor ante, vel porttitor nibh tincidunt eget. Pellentesque porta aliquam arcu, rhoncus suscipit justo fringilla sit amet. Fusce pellentesque lobortis leo ac suscipit. Cras elementum tincidunt dapibus. Duis consectetur faucibus augue eget tempus. Aliquam scelerisque euismod nulla, eu pretium nibh viverra a. Ut sit amet dictum enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla ac justo sapien, eu cursus dolor. In hac habitasse platea dictumst.<br><br>
<h2 id="t3">Hello 3</h2>

Praesent blandit erat et lorem porta ac euismod justo consectetur. Proin id rhoncus justo. Nulla facilisi. Nunc id purus magna. Duis ut urna eget metus congue consectetur quis vel dolor. Praesent sit amet orci turpis, at adipiscing diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie lorem nec sem malesuada faucibus. Proin mattis venenatis justo, eget eleifend neque scelerisque at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus mollis, quam et egestas euismod, urna lacus egestas velit, sed laoreet nibh magna ut arcu. Pellentesque interdum velit et ante consectetur at rutrum erat lobortis. Suspendisse libero erat, tincidunt quis ultricies non, elementum eu est. Vestibulum porttitor, velit in malesuada rhoncus, libero enim facilisis turpis, in pellentesque nulla augue ac ante. Suspendisse tellus mauris, blandit quis euismod ac, sodales at tortor.<br><br>

Nulla facilisi. Quisque a fringilla mi. Maecenas eu massa ac tortor rhoncus placerat. Nullam sodales, ante at fringilla pretium, nisl purus rutrum dolor, scelerisque euismod magna augue sed velit. Nunc vitae dolor nunc, eget tristique dolor. Cras dapibus pellentesque rutrum. Aliquam nec felis libero. In leo lorem, consectetur sed cursus vel, adipiscing sed mi. Etiam at ipsum at odio vestibulum sollicitudin sit amet sed sem. Cras molestie metus sed elit euismod vehicula sit amet nec enim. Aliquam bibendum eros non leo venenatis eget rhoncus massa pulvinar. Phasellus id rhoncus enim. Integer ornare hendrerit nisi in ultricies. Nunc in risus diam. Vestibulum non purus a enim porta egestas. Sed at lorem libero, a eleifend augue. Suspendisse porta ligula at massa hendrerit porta. Pellentesque consequat, diam et consectetur ultrices, sem lorem porttitor dolor, sed hendrerit urna turpis ut nisi.<br><br>
<h2 id="t4">Hello 4</h2>

Vivamus viverra gravida varius. Donec at ante tortor. Nulla sem lacus, consectetur non feugiat vel, volutpat sit amet ante. Suspendisse molestie tellus eget arcu iaculis rutrum. Aenean feugiat, odio vitae dignissim bibendum, diam leo suscipit lacus, in aliquet purus magna sit amet arcu. Sed vitae nisl turpis. Aliquam erat volutpat. Aenean suscipit risus sed lectus elementum quis imperdiet ipsum vulputate. Nulla a leo et nisl rhoncus rutrum. Integer vel ipsum metus, et ornare lorem. Nunc auctor sollicitudin nibh non elementum. Quisque vel vestibulum dolor. Vivamus gravida, urna sed ornare pellentesque, orci dui dignissim orci, eget eleifend velit mi quis dolor. Mauris consequat, leo lacinia suscipit venenatis, turpis urna suscipit ligula, eget adipiscing elit nulla et turpis. Cras lobortis viverra justo, viverra consequat magna bibendum sed. Nunc augue erat, feugiat at lobortis at, mattis non sapien. Maecenas posuere placerat vehicula. Vestibulum eu urna enim. Sed leo arcu, posuere eget varius eget, sollicitudin id nisl.<br><br>
        	</div>
    	</div>
	</div>
</div>

<script src="http://yui.yahooapis.com/3.2.0/build/yui/yui.js"></script>
<!--  Fixed getComputedStyle usage in IE -->
<!--script src="http://a.mimgs.com/lib/yui/3.2.0/dom/dom.js"></script-->
<script src="js/node-stickviewport.js"></script>
<script type="text/javascript">

YUI({
    filter: 'raw'
}).use('node', 'node-stickviewport', function(Y) {

    if (0) {
        var myNode = Y.one("#t1");
        myNode.plug(Y.Plugin.NodeStickViewport);
        myNode.stickViewport.clone();
        myNode.stickViewport.setBounding("left", true);
        window.myNode = myNode; //for testing
    }
    if (0) {
        var toolbar = Y.one("#toolbar");
        toolbar.plug(Y.Plugin.NodeStickViewport);
        toolbar.stickViewport.clone();
        toolbar.stickViewport.setBounding("right", true);
    }
    if (1) {
        var t3 = Y.one("#t3");
        t3.plug(Y.Plugin.NodeStickViewport);
        t3.stickViewport.clone();
    }
    if (0) {
        var t4 = Y.one("#t4");
        t4.plug(Y.Plugin.NodeStickViewport);
        t4.stickViewport.clone();
        t4.stickViewport.setBounding("top", false);
        t4.stickViewport.setBounding("bottom", true);
    }
    window.Y = Y;
});

</script>
</body>
</html>
