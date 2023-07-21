$('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this).parent();
    var plusMinus = $(this);
    var checkBox = $this.find('Input');

    // این هنگام بسته شدن اجرا میشه
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp('slow');
        plusMinus.html('+').css('font-size', '14px')

    } else {
        // این موقعه باز شدن اجرا میشه
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp('slow');
        $this.parent().parent().find('.main-title span').html('+')
        $this.next().toggleClass('show');
        plusMinus.html('-').css('font-size', '16px')

    }

    if (checkBox.checked(true)) {
        $this.next().toggleClass('show');
        plusMinus.html('-').css('font-size', '16px')

    }

});

// $('.Input').change(function(e) {

//     e.preventDefault();

//     var $this = $(this).parent();

//     if ($this.find('input label') != null) {
//         $this.parent().parent().find('li .inner').hasClass('show');
//         $this.parent().parent().find('li .inner').slideDown('slow');
//         $this.next().toggleClass('show');
//     }

// });