$(function(){

    $(document).on('click','.teacher-profile-content .top-layer .left-col ul li a' , function(){
        var target = $(this).attr('class');
        $('.teacher-profile-content .profile-content > div').removeClass('active').css('display','none');
        $('.teacher-profile-content .top-layer .left-col ul li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('#'+target).fadeIn('fast').addClass('active');
    });

    $('.teacher-profile-content .top-layer .left-col ul li a').bind( "touchstart" , function(e){
        var target = $(this).attr('class');
        $('.teacher-profile-content .profile-content > div').removeClass('active').css('display','none');
        $('.teacher-profile-content .top-layer .left-col ul li a').removeClass('active');
        $(this).addClass('active');
        $('#'+target).fadeIn('fast').addClass('active');
    });

});

