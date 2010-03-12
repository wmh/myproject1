
YUI().use('node', 'event-key', function(Y) {

    var hdNode = Y.one('#demo .hd');
    hdNode.setStyles({
        'color': 'red',
        'background-color': 'yellow'
    });

    hdNode.on('click', function (e) {
        //for debugging
        var _Y = Y;
        window.__Y = _Y;

        e.preventDefault();
        console.log('You clicked hdNode!');
    });

    // store the return value from Y.on to remove the listener later
    var handle = Y.on('key', function(e, arg1, arg2, etc) {
        Y.log(e.type + ": " + e.keyCode + ' -- ' + arg1);

        // stopPropagation() and preventDefault()
        e.halt();

        // unsubscribe so this only happens once
        handle.detach();

    // Attach to 'text1', specify keydown, keyCode 13, make Y the context, add arguments
    }, '#tt', 'down:13', Y, "arg1", "arg2", "etc");

    //event delegate
    Y.delegate('click', function(e) {
        Y.log(e.target.get('className'));
        hdNode.fire('kick');
    }, '#demo', 'div');

    //custom event
    hdNode.on('kick', function(e) {
        Y.log('kick hdNode');
    });

});
