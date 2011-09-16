/*global YUI, window */
/**
 * Stick Viewport Node Plugin, which can be used to make a DOM element always
 * stick/floating inside the viewport.
 *
 * <p>The current implementation is designed to change the position style of the
 * node. And you can choose to use a clone element placing on the original
 * position to keep the page layout if necessary.</p>
 *
 * @module mui
 * @requires base, node
 */
YUI.add("node-stickviewport", function (Y) {

    var Lang = Y.Lang,
        MODULE_ID = "NodeNodeStickViewport";

    /**
     * A plugin class which can be used to make a floating element easily.
     *
     * @constructor
     * @namespace plugin
     * @class NodeStickViewport
     * @param config {Object} Configuration.
     */
    function NodeStickViewport() {
	    NodeStickViewport.superclass.constructor.apply(this, arguments);
    }

    /**
     * The NAME of the NodeStickViewport class. Used to prefix events generated
     * by the plugin.
     *
     * @property NodeStickViewport.NAME
     * @static
     * @type String
     * @default "nodeStickViewport"
     */
    NodeStickViewport.NAME = 'nodeStickViewport';

    /**
     * The namespace for the plugin. This will be the property on the node,
     * which will reference the plugin instance, when it's plugged in.
     *
     * @property NodeStickViewport.NS
     * @static
     * @type String
     * @default "stickViewport"
     */
    NodeStickViewport.NS = 'stickViewport';

    NodeStickViewport.UTIL = {

        /**
         * Given a position and two elements' bounding to determine the
         * relationship, return true if the second one is most far alway from
         * center.
         *
         * @method NodeStickViewport.UTIL.isOutside
         * @static
         */
        isOutside : function (pos, viewBounding, nodeBounding) {
            switch (pos) {
            case "top":
            case "left":
                return (viewBounding > nodeBounding);

            default:
                return (nodeBounding > viewBounding);
            }
        }
    };

    Y.extend(NodeStickViewport, Y.Plugin.Base, {

        /**
         * The initializer lifecycle implementation.
         *
         * @method initializer
         * @param {Object} config The user configuration for the plugin
         */
        initializer : function (config) {
            var node = config.host;
            this.config = config;

            // region need to be cached to get higher performance
            this.region = node.get("region");
            this.originalStyle = {
                "height"   : node.getStyle("height"),
                "left"     : node.getStyle("left"),
                "top"      : node.getStyle("top"),
                "width"    : node.getStyle("width"),
                "position" : node.getStyle("position")
            };
            this.bounding = {
                left: false,
                top: true,
                bottom: false,
                right: false
            };
            this.floating = false;
            Y.one(window).on("scroll", Y.bind(this._scrollHandler, this));
            Y.one(window).on("resize", Y.bind(this._resizeHandler, this));
        },

        /**
         * Set bounding of the node.
         *
         * @method setBounding
         * @param pos {String} Which position need to be stick inside viewport,
         *                     can be one of the top/left/right/bottom.
         * @param val {Boolean} True to set the position stick inside viewport.
         */
        setBounding : function (pos, val) {
            this.bounding[pos] = val;
        },

        /**
         * Clone the original element.
         *
         * @method clone
         */
        clone : function () {
            var node = this.config.host,
                region = this.region;
            this.cloneNode = Y.Node.create("<div>");
            this.cloneNode.setStyles({
                display : "none",
                float   : node.getStyle("float"),
                height  : region.height,
                position: node.getStyle("position"),
                width   : region.width,
                margin  : node.getComputedStyle("marginTop") + " " +
                            node.getComputedStyle("marginRight") + " " +
                            node.getComputedStyle("marginBottom") + " " +
                            node.getComputedStyle("marginLeft")
            });
            this.config.host.insert(this.cloneNode, "before");
        },

        /**
         * The scroll event listener.
         *
         * @method _scrollHandler
         * @param e {Event.Facade} The event facade
         * @protected
         */
        _scrollHandler : function (e) {
            //Y.log("_scrollHandler", "INFO", MODULE_ID);
            var basePos,
                floatingStyles = {},
                needFloating = false,
                self = this,
                node = self.config.host,
                originalStyle = self.originalStyle,
                region = self.region,
                viewRegion = Y.DOM.viewportRegion();

            //step 1: check bounding
            Y.each(this.bounding, function (val, pos) {
                if (NodeStickViewport.UTIL.isOutside(pos, viewRegion[pos], region[pos]) && val) {
                    needFloating = true;
                }
            });

            //step 2: change style
            if (!needFloating) {
                if (self.floating) {
                    node.setStyles(self.originalStyle);
                    self.floating = false;
                    if (self.cloneNode) {
                        self.cloneNode.setStyle("display", "none");
                    }
                }
            } else {
                Y.each(this.bounding, function (val, pos) {
                    if (NodeStickViewport.UTIL.isOutside(pos, viewRegion[pos], region[pos]) && val) {
                        floatingStyles[pos] = 0;
                        switch (pos) {
                        case "bottom":
                            floatingStyles.top    = "auto";
                            break;
                        case "right":
                            floatingStyles.left   = "auto";
                            break;
                        }
                    } else {
                        floatingStyles[pos] = region[pos] - viewRegion[pos];
                    }
                });
                floatingStyles.height = region.height -
                    parseInt(node.getComputedStyle("borderTopWidth"), 10) -
                    parseInt(node.getComputedStyle("borderBottomWidth"), 10) -
                    parseInt(node.getComputedStyle("paddingTop"), 10) -
                    parseInt(node.getComputedStyle("paddingBottom"), 10);
                floatingStyles.width = region.width -
                    parseInt(node.getComputedStyle("borderLeftWidth"), 10) -
                    parseInt(node.getComputedStyle("borderRightWidth"), 10) -
                    parseInt(node.getComputedStyle("paddingLeft"), 10) -
                    parseInt(node.getComputedStyle("paddingRight"), 10);
                floatingStyles.position = "fixed";
                node.setStyles(floatingStyles);
                self.floating = true;
                if (self.cloneNode) {
                    self.cloneNode.setStyle("display", "block");
                }
            }
        },

        /**
         * The window resize event listener.
         *
         * @method _resizeHandler
         * @param e {Event.Facade} The event facade
         * @protected
         */
        _resizeHandler : function (e) {
            //Y.log("_resizeHandler", "INFO", MODULE_ID);
            this.region = this.config.host.get("region");   // update region
            this._scrollHandler.call(this);                 // refresh position
        }
    });

    Y.namespace('Plugin');
    Y.Plugin.NodeStickViewport = NodeStickViewport;

}, "0.0.1", {"requires" : ["base", "node", "plugin"]});
