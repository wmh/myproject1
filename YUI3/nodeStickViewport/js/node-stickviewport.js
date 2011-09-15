/*global YUI, window */
/**
 * Stick Viewport Node Plugin
 *
 * @module mui
 * @requires base, node
 */
YUI.add("node-stickviewport", function (Y) {

    var Lang = Y.Lang,
        MODULE_ID = "NodeNodeStickViewport";

    /**
     * Stick Viewport
     *
     * @constructor
     * @namespace plugin
     * @class NodeStickViewport
     * @param config {Object} Configuration.
     */
    function NodeStickViewport() {
	    NodeStickViewport.superclass.constructor.apply(this, arguments);
    }

    NodeStickViewport.NAME = 'nodeStickViewport';
    NodeStickViewport.NS = 'stickViewport';

    NodeStickViewport.UTIL = {
        isOutside : function (pos, viewBounding, nodeBounding) {
            switch (pos) {
            case "top":
            case "left":
                return (viewBounding > nodeBounding);
                break;

            default:
                return (nodeBounding > viewBounding);
                break;
            }
        }
    };

    // Methods
    Y.extend(NodeStickViewport, Y.Plugin.Base, {

    	//	Public methods
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
            Y.one(document).on("scroll", Y.bind(this._scrollHandler, this));
            Y.one(window).on("resize", Y.bind(this._resizeHandler, this));
        },

        setBounding : function (pos, val) {
            this.bounding[pos] = val;
        },
        boundingTop : function (val) {
            this.setBounding("top", val);
        },
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
                margin  : node.getComputedStyle("marginTop") + " "
                          + node.getComputedStyle("marginRight") + " "
                          + node.getComputedStyle("marginBottom") + " "
                          + node.getComputedStyle("marginLeft")
            });
            this.config.host.insert(this.cloneNode, "before");
        },

        // Private methods
        _scrollHandler : function () {
            //Y.log("_scrollHandler", "INFO", MODULE_ID);
            var basePos,
                floatingStyles = {},
                needFloating = false,
                self = this,
                node = self.config.host,
                originalStyle = self.originalStyle,
                region = self.region,
                viewRegion = Y.DOM.viewportRegion();

            //step 1: check need to float or not
            Y.each(this.bounding, function (val, pos) {
                if (NodeStickViewport.UTIL.isOutside(pos, viewRegion[pos], region[pos]) && val) {
                    needFloating = true;
                }
            });

            //step 2: change style (FIXME: pos conflict)
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
                        case "bottom":  floatingStyles.top    = "auto"; break;
                        case "right":   floatingStyles.left   = "auto"; break;
                        }
                    } else {
                        floatingStyles[pos] = region[pos] - viewRegion[pos];
                    }
                });
                floatingStyles.height = region.height
                    - parseInt(node.getComputedStyle("borderTopWidth"), 10)
                    - parseInt(node.getComputedStyle("borderBottomWidth"), 10)
                    - parseInt(node.getComputedStyle("paddingTop"), 10)
                    - parseInt(node.getComputedStyle("paddingBottom"), 10);
                floatingStyles.width = region.width
                    - parseInt(node.getComputedStyle("borderLeftWidth"), 10)
                    - parseInt(node.getComputedStyle("borderRightWidth"), 10)
                    - parseInt(node.getComputedStyle("paddingLeft"), 10)
                    - parseInt(node.getComputedStyle("paddingRight"), 10);
                floatingStyles.position = "fixed";
                node.setStyles(floatingStyles);
                self.floating = true;
                if (self.cloneNode) {
                    self.cloneNode.setStyle("display", "block");
                }
            }
        },
        _resizeHandler : function () {
            //Y.log("_resizeHandler", "INFO", MODULE_ID);
            this.region = this.config.host.get("region");   // update region
            this._scrollHandler.call(this);                 // refresh position
        }
    });

    Y.namespace('Plugin');
    Y.Plugin.NodeStickViewport = NodeStickViewport;

}, "0.0.1", {"requires" : ["base", "node", "plugin"]});
