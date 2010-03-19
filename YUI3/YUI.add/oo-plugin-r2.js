
YUI.add('fly', function (Y) {

//(function() {
    /*
     * Plugin
     */
    function EverythingCanFly(config) {
        this.config = config;
    }
    EverythingCanFly.NS = 'flyNS';
    EverythingCanFly.prototype = {
        fly: function () {
            Y.log('One ' + this.config.host.get('brand') + ' is flying...!@##@');
        }
    };

    Y.EverythingCanFly = EverythingCanFly;


//}());

}, "3.0.0", {"requires" : ["base"]});
