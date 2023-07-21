function AddOwlCarousel(selector, config) {
    $(selector).owlCarousel(config);
}

$(document).ready(function () {
    AddOwlCarousel(".latest-courses-section", {
        loop: false,
        nav: false,
        rtl: true,
        dots: false,
        autoWidth: true,
        items: 3,
    });


    AddOwlCarousel(".link-image", {
        loop: true,
        nav: false,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    AddOwlCarousel(".TopBanner", {
        loop: true,
        nav: false,
        rtl: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        animateOut: 'slideOutUp',
        responsive: {
            0: {
                items: 1
            }
        }
    });

    AddOwlCarousel(".road-map-carousel", {
        loop: true,
        navigation:false,
        slidesSpeed:500,
        paginationSpeed:800,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        rtl: true,
        dots: true,
        autoplay: false,
        margin:15,
        navText: ['<button class="btn-nav-carousel"><img src="./images/right.png" alt=""></button>','<button class="btn-nav-carousel"><img src="./images/left.png" alt=""></button>'],
        thumbs: true,
        thumbsPrerendered: true,
        responsiveClass: true,
        
        responsive: {
            0: {
                items: 1
            },
            540:{
                items:2
            },
            993:{
                items:1
            }

        }
    });
});


$("[toplearn-category]").on("click", function () {
    var categoryName = $(this).attr("toplearn-category");
    $("[toplearn-category]").removeClass("active");
    $(this).addClass("active");
    $("[toplearn-category-courses]").hide().removeClass("active");
    $('[toplearn-category-courses="' + categoryName + '"]')
        .fadeIn(400)
        .addClass("active");
});
