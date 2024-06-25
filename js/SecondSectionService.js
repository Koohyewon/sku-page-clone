
$(document).ready(function(){
    //Favorite Slider
    $(".wrap-favorite .slider").not('.slick-initialized').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        infinite: true,
        pauseOnHover: false,
        fade: false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        nextArrow: '.wrap-favorite .next',
        prevArrow: '.wrap-favorite .prev',
        responsive: [
            {
                breakpoint: 1106,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 861,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 661,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });

    $('.wrap-favorite .play').on('click', function () {
        $(".wrap-favorite .slider").slick("slickPlay");
        $(this).removeClass('on');
        $('.wrap-favorite .stop').addClass('on');
    });

    $('.wrap-favorite .stop').on('click', function () {
        $(".wrap-favorite .slider").slick("slickPause");
        $(this).removeClass('on');
        $('.wrap-favorite .play').addClass('on');
    });
})