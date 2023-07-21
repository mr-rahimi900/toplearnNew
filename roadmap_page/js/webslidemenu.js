'use strict';
/** @type {!Array} */
var _0x964f = ["use strict", "touchstart", "addEventListener", "click", "wsoffcanvasopener", "toggleClass", ".wsmenucontainer", "on", "#wsnavtoggle", "removeClass", "#overlapblackbg", '<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>', "prepend", ".wsmenu-submenu", "has", ".wsmenu-list> li", ".wsshoptabing", ".wsmenu-list > li", ".megamenu", "ws-activearrow", "children", "siblings", "parent", "slow", "slideUp", ".wsmenu-submenu, .wsshoptabing, .megamenu", "not", "slideToggle",
    ".wsmenu-click", '<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>', ".wstitemright", ".wstabitem > li", ".wstbrandbottom", ".wstabitem02 > li", ".wsmenu-click02", "mouseenter", "wsshoplink-active", "addClass", ".wsshoptabing.wtsdepartmentmenu > .wsshopwp > .wstabitem > li", ".wsshoptabing.wtsbrandmenu > .wsshoptabingwp > .wstabitem02 > li", "ready", "load resize", "width", "height", "100%", "css", ".wsshopwp", "innerHeight", "find", "auto", "each", "", ".wsshoptabing, .wstitemright, .wstbrandbottom",
    "resize"];
(function () {
    /**
     * @return {undefined}
     */
    function wrap_list_input() {
        /** @type {number} */
        var newH = 1;
        $(_0x964f[31])[_0x964f[50]](function () {
            var diH = $(this)[_0x964f[48]](_0x964f[30])[_0x964f[47]]();
            newH = diH > newH ? diH : newH;
            $(this)[_0x964f[48]](_0x964f[30])[_0x964f[45]](_0x964f[43], _0x964f[49]);
        });
        $(_0x964f[46])[_0x964f[45]](_0x964f[43], newH + 0);
    }
    _0x964f[0];
    document[_0x964f[2]](_0x964f[1], function () {
    }, false);
    $(function () {
        $(_0x964f[8])[_0x964f[7]](_0x964f[3], function () {
            $(_0x964f[6])[_0x964f[5]](_0x964f[4]);
            return false;
        });
        $(_0x964f[10])[_0x964f[7]](_0x964f[3], function () {
            $(_0x964f[6])[_0x964f[9]](_0x964f[4]);
            return false;
        });
        $(_0x964f[15])[_0x964f[14]](_0x964f[13])[_0x964f[12]](_0x964f[11]);
        $(_0x964f[17])[_0x964f[14]](_0x964f[16])[_0x964f[12]](_0x964f[11]);
        $(_0x964f[17])[_0x964f[14]](_0x964f[18])[_0x964f[12]](_0x964f[11]);
        $(_0x964f[28])[_0x964f[7]](_0x964f[3], function () {
            $(this)[_0x964f[5]](_0x964f[19])[_0x964f[22]]()[_0x964f[21]]()[_0x964f[20]]()[_0x964f[9]](_0x964f[19]);
            $(_0x964f[25])[_0x964f[26]]($(this)[_0x964f[21]](_0x964f[25]))[_0x964f[24]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[13])[_0x964f[27]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[16])[_0x964f[27]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[18])[_0x964f[27]](_0x964f[23]);
            return false;
        });
        $(_0x964f[31])[_0x964f[14]](_0x964f[30])[_0x964f[12]](_0x964f[29]);
        $(_0x964f[33])[_0x964f[14]](_0x964f[32])[_0x964f[12]](_0x964f[29]);
        $(_0x964f[34])[_0x964f[7]](_0x964f[3], function () {
            $(this)[_0x964f[21]](_0x964f[30])[_0x964f[27]](_0x964f[23]);
            $(this)[_0x964f[21]](_0x964f[32])[_0x964f[27]](_0x964f[23]);
            return false;
        });
    });
    $(window)[_0x964f[40]](function () {
        $(_0x964f[38])[_0x964f[7]](_0x964f[35], function () {
            $(this)[_0x964f[37]](_0x964f[36])[_0x964f[21]](this)[_0x964f[9]](_0x964f[36]);
            return false;
        });
        $(_0x964f[39])[_0x964f[7]](_0x964f[35], function () {
            $(this)[_0x964f[37]](_0x964f[36])[_0x964f[21]](this)[_0x964f[9]](_0x964f[36]);
            return false;
        });
    });
    wrap_list_input();
    $(window)[_0x964f[7]](_0x964f[41], function () {
        var _0x50b6x1 = $(window)[_0x964f[42]]();
        if (_0x50b6x1 <= 991) {
            $(_0x964f[46])[_0x964f[45]](_0x964f[43], _0x964f[44]);
            $(_0x964f[30])[_0x964f[45]](_0x964f[43], _0x964f[44]);
        } else {
            wrap_list_input();
        }
    });
    $(document)[_0x964f[40]](function (verifyjQuery) {
        /**
         * @return {undefined}
         */
        function propagateStream() {
            if (verifyjQuery(window)[_0x964f[42]]() >= 991) {
                verifyjQuery(_0x964f[52])[_0x964f[45]]({
                    "display": _0x964f[51]
                });
            }
        }
        propagateStream();
        verifyjQuery(window)[_0x964f[53]](propagateStream);
    });
})();
$('.btn__mega,.ASC-Mega').mouseenter(function () {
    $('#overlay').css('display', 'block');
});
$('.ASC-Mega').on('mousemove',function () {
    $('#overlay').css('display', 'block');
});
$('#overlay').mouseenter(function () {
    $('#overlay').css('display', 'none');
});

$(window).ready(function () {
    let hide = $(this).width();
    // alert(hide)
    if (hide <= 1076) {
        // alert(hide)
        $('#overlay').remove();
    }
    else {
        $('.Warp').html("<div id='overlay'></div>");
    }

});
$(window).resize(function () {
    let hide = $(this).width();
    if (hide <= 1076) {
        $('#overlay').hide();
    }
    else {
        $('#overlay').show();

    }

});
let checking = false;
$('#wsnavtoggle').click(function (e) {
    e.preventDefault();
    checking = !checking;


});

$(window).scroll(function () {

    let scrollDist = $(document).scrollTop()
    if (scrollDist > 300 && checking === false) {
        document.getElementById('wsnavtoggle').style.position = 'static'
    } else {
        document.getElementById('wsnavtoggle').style.position = 'fixed'
    }
});


