//sticky header
$(window).scroll(function () {
    var windowTop = $(window).scrollTop();
    var stickyTop = $('header').outerHeight();

    if (stickyTop < windowTop) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});

//mobile menu
function myFunction() {
    var x = document.getElementById("mobmenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


//popup
var modal = document.getElementById("myModal");
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

//data for galler
$.getJSON('data.json', function (json) {
    $(json).each(function (i, val) {
        $('.slider').append("<div>\n" +
            "                <a href='" + val.link + "'>\n" +
            "                    <div class='image-wrap'>\n" +
            "                        <img src='" + val.image + "' alt='Matific Video'>\n" +
            "                    </div>\n" +
            "                    <h3 class='icon-matplay2'>" + val.name + "</h3>\n" +
            "                </a>\n" +
            "            </div>");
    });
});

//slick gallery
setTimeout(function(){
    //slick slider
    $('.responsive').slick({
        dots: true,

        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        numViews:5,
        activeView:0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
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

