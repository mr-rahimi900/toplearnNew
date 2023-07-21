$(function() {
    $('.select-title-city').click(function (e) { 
        e.preventDefault();

        $('.select-title-city').css('border-radius', '5px 5px 0 0');
        $('.hide_menu').css('display', 'block');
    });
    $(".title-city").hover(function () {
        let x = $(this).attr("data-city-name");
        let city = $('path').filter('.' + x);
        $(city).css('fill', 'green');
            
        }, function () {
            let x = $(this).attr("data-city-name");
        let city = $('path').filter('.' + x);
            $(city).css('fill', '#7fbb00');
        }
    );
    $('#City_top').change(function(e) {
        e.preventDefault();
        let x = $('#City_top option:selected').val();
        let city = $('path').filter('.' + x);
        $(city).css('fill', 'blue');
    });
});