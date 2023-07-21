$(document).ready(function () {
    generateRatings();
});



function showRatingWrapper(wrapperIndex) {
    const ratingsWrappers = $('.question-area');
    const wrapper = ratingsWrappers[wrapperIndex];
    $(wrapper).fadeIn(1000);
}

function generateRatings() {
    var emotionsArray = ['angry', 'disappointed', 'meh', 'happy', 'inLove'];
    $(".rating-items").emotionsRating({
        emotionSize: 30,
        bgEmotion: 'happy',
        emotions: emotionsArray,
        color: 'gold'
    });
}