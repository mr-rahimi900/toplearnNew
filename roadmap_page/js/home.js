$(function(){

    $('.suggested-courses-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:500,
        autoplayHoverPause:true,
        margin:25,
        nav:false,
        dots:true,
        rtl: true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            481:{
                items:2
            },
            1024:{
                items:3
            },
            1199:{
                items:4
            }
        }
    });
    $('.free-courses-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplaySpeed:500,
        autoplayHoverPause:true,
        margin:25,
        nav:false,
        dots:true,
        rtl: true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            481:{
                items:2
            },
            1024:{
                items:3
            },
            1199:{
                items:4
            }
        }
    });

    AOS.init();

});

