$(document).ready(function() {
    $(window).scroll(function() {
        var elementTop = $('.hover-text-one').offset().top;
        var elementBottom = elementTop + $('.hover-text-one').outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $('.hover-text-one').addClass('automatic-hover');
        } else {
            $('.hover-text-one').removeClass('automatic-hover');
        }
    });
});