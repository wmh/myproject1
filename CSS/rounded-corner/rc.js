/*
 * DEPRECIATED. Use VML instead!
*/
/*global YUI
*/
YUI().use("node", function (Y) {
    if (!Y.UA.ie || Y.UA.ie >= 9) {
        return;
    }
    var applyRoundedCorner = function (node, size) {
        var position, xy, w, h, rcTL, rcTR, rcBL, rcBR, upperNode, upperXY;
        position = node.getStyle("position");

        if (position === "relative" || position === "absolute") {
            node.append(['<span class="miii-rc', size, '-decorations">',
                '<span class="miii-rc', size, '-tl"></span>',
                '<span class="miii-rc', size, '-tr"></span>',
                '<span class="miii-rc', size, '-bl"></span>',
                '<span class="miii-rc', size, '-br"></span></span>'].join(""));
            return;
        }
        if (Y.UA.ie >= 7) {
            node.setStyle("position", "relative");
            node.addClass("clearfix");
            node.append(['<span class="miii-rc', size, '-decorations">',
                '<span class="miii-rc', size, '-tl"></span>',
                '<span class="miii-rc', size, '-tr"></span>',
                '<span class="miii-rc', size, '-bl"></span>',
                '<span class="miii-rc', size, '-br"></span></span>'].join(""));
            return;
        }
        // find an upper relative or absolute element
        upperNode = node;
        while (1) {
            position = upperNode.getStyle("position");
            if (position === "relative" || position === "absolute") {
                break;
            }
            if (upperNode.get("tagName").toLowerCase() === "body") {
                break;
            }
            upperNode = upperNode.get("parentNode");
        }
        xy = node.getXY();
        upperXY = upperNode.getXY();
        w = node.get('offsetWidth');
        h = node.get('offsetHeight');
        rcTL = Y.Node.create('<span class="miii-rc' + size + '-tl"></span>').setStyles({
            top: xy[1] - upperXY[1],
            left: xy[0] - upperXY[0]
        });
        rcTR = Y.Node.create('<span class="miii-rc' + size + '-tr"></span>').setStyles({
            top: xy[1] - upperXY[1],
            left: xy[0] - upperXY[0] + w - size
        });
        rcBL = Y.Node.create('<span class="miii-rc' + size + '-bl"></span>').setStyles({
            top: xy[1] - upperXY[1] + h - size,
            left: xy[0] - upperXY[0]
        });
        rcBR = Y.Node.create('<span class="miii-rc' + size + '-br"></span>').setStyles({
            top: xy[1] - upperXY[1] + h - size,
            left: xy[0] - upperXY[0] + w - size
        });
        node.append(Y.Node.create('<span class="miii-rc' + size + '-decorations"></span>').append(rcTL).append(rcTR).append(rcBL).append(rcBR));
    };

    Y.all(".miii-rc5").each(function (node) {
        applyRoundedCorner(node, 5);
    });
    Y.all(".miii-rc4").each(function (node) {
        applyRoundedCorner(node, 4);
    });
    Y.all(".miii-rc3").each(function (node) {
        applyRoundedCorner(node, 3);
    });
    Y.all(".miii-rc2").each(function (node) {
        applyRoundedCorner(node, 2);
    });
});
