$('.childer').css('display', 'none');
// Check plus parent
$('[parentCatgory]').click(function() {
    let child = $(this).attr('parentCatgory')
    let SearchInput = $('.childer[parentCatgoryBody=' + child + ']');
    let Icons_attr = $('.icons_category[parentCatgory=' + child + ']');
    let icons = $(Icons_attr).text();
    $(SearchInput).addClass('showOnly');
    $(Icons_attr).text('-');

    if (icons === '-') {
        $(SearchInput).removeClass('showOnly');
        $(Icons_attr).text('+');
    }
})

// Check Input Child
$('[childCatgory]').change(function(e) {
    let child_sec = $(this).attr('childCatgory')
    let childCatgoryCheck = $('[childCatgory=' + child_sec + ']');
    let checkeing = $(childCatgoryCheck).is(':checked');
    let SearchInput = $('.childer[parentCatgoryBody=' + child_sec + ']');
    let Icons_attr = $('.icons_category[parentCatgory=' + child_sec + ']');

    if (checkeing) {
        $(SearchInput).addClass("showOnlyChlid");
        $(Icons_attr).text('-');
        $(Icons_attr).css({ "pointer-events": "none" })
    } else {
        $(SearchInput).removeClass("showOnlyChlid");
        $(Icons_attr).css({ "pointer-events": "" })
    }
});