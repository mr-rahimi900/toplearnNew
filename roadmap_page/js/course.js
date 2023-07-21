$(function(){

    new Clipboard('.copy-btn');

    $('.copy-btn').click(function () {
        var copied = $(this);
        $(this).addClass("copied");
        setTimeout(function () {
            $(copied).removeClass("copied");
        }, 1000);
    });

    $('.video-items-layer .video-item > .view-description').bind( "touchstart", function(e){
    	$('.video-items-layer .video-item .video-description-layer').css('display','none');
	 	$(this).parents().closest('.video-item').find('.video-description-layer').fadeIn('fast');
    });

    $("html,body").on('click', function(e) {
        if (!$(e.target).parents().hasClass('view-description')) {
            $('.video-items-layer .video-item .video-description-layer').fadeOut('fast');
        }
    })

    $(document).on('click', '.video-items-layer .video-item > .view-description', function() {
    	$('.video-items-layer .video-item .video-description-layer').css('display','none');
	 	$(this).parents().closest('.video-item').find('.video-description-layer').fadeIn('fast');
	});

});

$(document).ready(function(){
    function expandable(){
    let btnDisplayMore=$('.js-collapse-btn');
    let containerCourseDetails=$('.js-collapse-container');
    
    // calculateHeight
    let courseDetailMaxHeight = containerCourseDetails.css('max-height');
    containerCourseDetails.addClass('collapsed');
    let courseDetailHeight = containerCourseDetails.height();
    containerCourseDetails.removeClass('collapsed');

    btnDisplayMore.click(function(){
        if(containerCourseDetails.hasClass('collapsed')){
            smoothClose(containerCourseDetails, courseDetailMaxHeight); 
        }else{
            smoothOpen(containerCourseDetails, courseDetailHeight, courseDetailMaxHeight);
        }
        
    })
}
expandable();
})

function smoothOpen(el, openHeight, closeHeight) {
    el.addClass('collapsed'); 
    $(el).height(closeHeight);     
    $(el).animate({
        'height': openHeight
    }, 1000)
}

function smoothClose(el, closeHeight) {
    $(el).animate({
        'height': closeHeight
    }, 1000, function() {
        $(el).removeClass('collapsed');
        $(el).css('height', 'auto');
    })
}