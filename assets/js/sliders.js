$(document).ready(function () {

    var sliderSettings = {
        infinite: true,
        arrows: false,
        speed: 500,
        cssEase: 'linear',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        accessibility: false
    };
    //init sliders on main section
    $('.main-slider-base').slick(sliderSettings);
    $('.main-slider-type').slick(sliderSettings);
    $('.main-slider-aroma').slick(sliderSettings);

    //custom navigation
    $(".main-slider-base__next").click(function(e) { 
        $(".main-slider-base").slick('slickNext');
    });
    $(".main-slider-base__prev").click(function(e) { 
        $(".main-slider-base").slick('slickPrev');
    });


    $(".main-slider-type__next").click(function(e) { 
        $(".main-slider-type").slick('slickNext');
    });
    $(".main-slider-type__prev").click(function(e) { 
        $(".main-slider-type").slick('slickPrev');
    });


    $(".main-slider-aroma__next").click(function(e) { 
        $(".main-slider-aroma").slick('slickNext');
    });
    $(".main-slider-aroma__prev").click(function(e) { 
        $(".main-slider-aroma").slick('slickPrev');
    });


    //change slider background image
    if (window.matchMedia("(min-width: 1024px)").matches) {

        $('.main-slider-base').on('beforeChange', function (evt, slick, currentSlide, nextSlide) {
            $('.fade-base').removeClass('fade-scale').fadeOut(1000);
            $('.fade-base')
                .eq(nextSlide)
                .fadeIn({queue: false, duration: 800})
                .addClass('fade-scale');
        });
    
        
        $('.main-slider-type').on('beforeChange', function (evt, slick, currentSlide, nextSlide) {
            $('.fade-type').removeClass('fade-scale').fadeOut(1000);
            $('.fade-type')
                .eq(nextSlide)
                .fadeIn({queue: false, duration: 800})
                .addClass('fade-scale');
        });
    
    
        $('.main-slider-aroma').on('beforeChange', function (evt, slick, currentSlide, nextSlide) {
            $('.fade-aroma').removeClass('fade-scale').fadeOut(1000);
            $('.fade-aroma')
                .eq(nextSlide)
                .fadeIn({queue: false, duration: 800})
                .addClass('fade-scale');
        });
    }


    //blog header slider
    $('.blog-slider').slick({
        infinite: true,
        arrows: false,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        accessibility: false
    });


});