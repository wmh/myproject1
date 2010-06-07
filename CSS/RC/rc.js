YUI().use("node", function (Y) {
    if (Y.UA.ie) {
        Y.all(".miii-rc5").each(function(node) {
            var position, xy, w, h, rcTL, rcTR, rcBL, rcBR;
            position = node.getStyle("position");
            if (position === "relative" || position === "absolute") {
                node.append('<span class="miii-rc5-decorations"><span class="miii-rc5-tl"></span><span class="miii-rc5-tr"></span><span class="miii-rc5-bl"></span><span class="miii-rc5-br"></span></span>');
            } else {
                xy = node.getXY();
                w = node.get('offsetWidth');
                h = node.get('offsetHeight');
                rcTL = Y.Node.create('<span class="miii-rc5-tl"></span>').setStyles({
                    top: xy[1],
                    left: xy[0]
                });
                rcTR = Y.Node.create('<span class="miii-rc5-tr"></span>').setStyles({
                    top: xy[1],
                    left: xy[0] + w - 5
                });
                rcBL = Y.Node.create('<span class="miii-rc5-bl"></span>').setStyles({
                    top: xy[1] + h - 5,
                    left: xy[0]
                });
                rcBR = Y.Node.create('<span class="miii-rc5-br"></span>').setStyles({
                    top: xy[1] + h - 5,
                    left: xy[0] + w - 5
                });
                node.append(Y.Node.create('<span class="miii-rc5-decorations"></span>').append(rcTL).append(rcTR).append(rcBL).append(rcBR));
            }
        });
    }
});
