$(function() {
    $('.Part_Item_Cart_Icon , .Submenu_badge_Cart_Shopping').hover(function() {
        // over
        $('.Submenu_badge_Cart_Shopping').css('display', 'block');
    }, function() {
        // out
        $('.Submenu_badge_Cart_Shopping').css('display', 'none');
    });
});