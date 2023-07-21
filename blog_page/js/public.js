$(function(){

    $('.landing-layer .main-header .clientarea a').click(function(){
        $('.landing-layer .main-header .clientarea .logged-in .sublayer').fadeToggle('fast');
    })

	$('.fixed-menu .inner').slimScroll({
        railVisible: true,
        position: 'left',
        size: '4px',
        height: '100%',
        distance: '6px',
        railColor: '#355b77',
        railOpacity: 0.2,
        alwaysVisible: false,
        color: "#48708f"
    })

    $('.fixed-menu .inner nav > ul li').each(function(){
        if($(this).find('ul').length > 0) {
            $(this).append('<span class="arrow-sign"><i class="zmdi zmdi-minus"></i><i class="zmdi zmdi-plus"></i></span>');
        } 
    })

    $('.fixed-menu .inner nav > ul li .arrow-sign .zmdi-plus').click(function(e){
        var parent = $(this).parent();
        e.preventDefault();
        $(this).parents().closest('li').find('ul:first').slideDown( "fast", function() {
            $(parent).find('.zmdi-plus').hide();
            $(parent).find('.zmdi-minus').show();
        }); 
    })

    $('.fixed-menu .inner nav > ul li .arrow-sign .zmdi-minus').click(function(e){
        var parent = $(this).parent();
        e.preventDefault();
        $(this).parent('.arrow-sign').parent('li').find('ul:first').slideUp( "fast", function() {
            $(parent).find('.zmdi-minus').hide();
            $(parent).find('.zmdi-plus').show();
        }); 
    })

    $('.responsive-menu').click(function(){
        $('html,body').css('overflow-y','hidden');
        $('.overlay').fadeIn('fast');
        $('.fixed-menu').animate({right: "0"});
    })

    $('.close-menu').click(function(){
        $('html,body').css('overflow-y','auto');
        $('.overlay').fadeOut('fast');
        $('.fixed-menu').animate({right: "-310px"});
    })

    $(".overlay").click(function(e) {
        if (!$(e.target).parents().hasClass('fixed-menu')) {
            $('.overlay').fadeOut('fast');
            $('.fixed-menu').animate({right: "-310px"});
            $('html,body').css('overflow-y','auto');
        }
        if (!$(e.target).parents().hasClass('search-layer')) {
            $('.overlay').fadeOut('fast');
            $('.search-layer').fadeOut('fast');
            $('html,body').css('overflow-y','auto');
        }
    })
    
    $("html,body").click(function(e) {
        if (!$(e.target).parents().hasClass('logged-in')) {
            $('.landing-layer .main-header .clientarea .logged-in .sublayer').fadeOut('fast');
        }
    })

    $('.landing-layer .main-header .clientarea > a').click(function(){
        $('.overlay').fadeIn('fast');
        $('.search-layer').fadeIn('slow');
        $('html,body').css('overflow-y','hidden');
    })

    $('.landing-layer .main-header nav > ul > li').hover(function(){
        $(this).find('ul:first').fadeIn('fast');
    },function(){
        $(this).find('ul:first').fadeOut('fast');
    })
    $('.main-menu nav > ul > li').hover(function(){
        $(this).find('ul:first').fadeIn('fast');
    },function(){
        $(this).find('ul:first').fadeOut('fast');
    })

    $('.main-menu nav > ul > li').each(function(){
        if($(this).find('ul').length > 0) {
            $(this).append('<span class="sign-down"><i class="zmdi zmdi-chevron-down"></i></span>');
        } 
    });
});


function checkMenu() {
    if (!window.matchMedia('(max-width: 991px)').matches) {
        $('.fixed-menu').css('right','-330px');
        $('.overlay').fadeOut();
    } 
}

checkMenu();

$(window).resize(function(event) { 
    event.preventDefault();
    checkMenu();
});
