/*global Y, window */
Y.PlatformCore.register("m1", function () {
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
            Y.log("init() is executed", "info", "#m1");
            api = sandbox;
            api.listen("m2:rendered");
        },
        /*
         * Module content ready
         * @event onviewload
         * @public
         * @return void
         */
        onviewload = function () {
            Y.log("onviewload() is executed", "info", "#m1");
            node = api.getViewNode();
            // data = ...
            api.broadcast("m1:rendered", {a: "aaa"});
        },
        /*
         * Module message receive
         * @event onmessage
         * @public
         * @return void
         */
        onmessage = function (eventName, callerId, callerData) {
            Y.log("onmessage() " + eventName, "info", "#m1");
            switch (eventName) {
            case "rendered":
                if (callerId === "m2") {
                    Y.log("I'm m1, listen to m2.");
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