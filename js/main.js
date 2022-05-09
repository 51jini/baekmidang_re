/* main */
$(document).ready(function(){
    $('.flexslider').flexslider({
        slideshowSpeed: 5000,
        animation: "fade",
        prevText: "",
        nextText: "",
        after: function(){
            $('#main .ms_wrap > *').addClass('active');
        },
        before: function(){
            $('#main .ms_wrap > *').removeClass('active');
        },
        start: function(){
            $('#main .ms_wrap > *').addClass('active');
        }
    });
});

/* icecream */
$(document).ready(function(){
    var swiper = new Swiper('#icecream .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 500,
        navigation: {
            nextEl: '#icecream .swiper-button-next',
            prevEl: '#icecream .swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});

/* bakery */
$(document).ready(function(){
    var swiper = new Swiper('.bakery .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        speed: 500,
        pagination: {
            el: '.bakery .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
});

/* media */
$(document).ready(function(){
    var swiper = new Swiper('#media .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 80,
        speed: 1000,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '#media .swiper-button-next',
            prevEl: '#media .swiper-button-prev',
        },
    });
});
