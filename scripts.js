$('.activity-slider').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable:true,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$(window).scroll(function() {
    var windowTop = $(window).scrollTop();
    var stickyTop = $('header').outerHeight();

    if (stickyTop < windowTop) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});