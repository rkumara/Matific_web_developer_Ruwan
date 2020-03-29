$('.activity-slider').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
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

$(window).scroll(function () {
    var windowTop = $(window).scrollTop();
    var stickyTop = $('header').outerHeight();

    if (stickyTop < windowTop) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});


//popup
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$.getJSON('data.json', function (json) {
    $(json).each(function (i, val) {
        $('.slider').append("<div>\n" +
            "                <a href='" + val.link + "'>\n" +
            "                    <div class='image-wrap'>\n" +
            "                        <img src='" + val.image + "' alt=''>\n" +
            "                    </div>\n" +
            "                    <h3>" + val.name + "</h3>\n" +
            "                </a>\n" +
            "            </div>");
    });
});

setTimeout(function(){
    //slick slider
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    jQuery(".slick-dots").appendTo('.try-activities');
}, 500);

