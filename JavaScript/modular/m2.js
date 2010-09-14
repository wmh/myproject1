/*global Y, window */
Y.PlatformCore.register("m2", function () {
    var api,
        node,
        //===========================
        // Private Functions & Events
        //===========================
        /*
         * Private function sample
         * @event fooPrivateFunction
         * @private
         */
        fooPrivateFunction = function () {
            // do something
        },
        //=========================
        // pubilc functions
        //=========================
        /*
         * Module initialization
         * @event init
         * @param api {Y.Sandbox} Module API
         * @public
         * @return void
         */
        init = function (sandbox) {
            Y.log("init() is executed", "info", "#m2");
            api = sandbox;
            api.listen("m1:rendered");
            api.listen("m2:rendered");
        },
        /*
         * Module content ready
         * @event onviewload
         * @public
         * @return void
         */
        onviewload = function () {
            Y.log("onviewload() is executed", "info", "#m2");
            node = api.getViewNode();
            // data = ...
            api.broadcast("m2:rendered", {b: "bbb"});
        },
        /*
         * Module message receive
         * @event onmessage
         * @public
         * @return void
         */
        onmessage = function (eventName, callerId, callerData) {
            Y.log("onmessage() " + eventName, "info", "#m2");
            switch (eventName) {
            case "rendered":
                if (callerId === "m2") {
                    Y.log("I'm m2, listen to m2.");
                } else {
                    Y.log("I'm m2, listen to m1.");
                }
                break;
            }
        };


    return {
        init: init,
        onviewload: onviewload,
        onmessage: onmessage
    };
}());