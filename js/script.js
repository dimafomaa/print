$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .menu, .header__btn').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu').toggleClass('open');
    });
    $('.menu__link').click(function (event) {
        $('.header__burger, .menu, .header__btn').removeClass('active');
        $('body').removeClass('lock');
    });

    $(".gallery__wrapper").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });

    $('.question__block--title').click(function (event) {
        if ($('.question__block').hasClass('one')) {
            $('.question__block--title').not($(this)).removeClass('active');
            $('.question__block--text').not($(this).next()).slideUp(300);

        }
        $(this).toggleClass('active').next().slideToggle(300);

    });

});

const swiper = new Swiper('.reviews__swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerGrou:1,
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight: true,
    breakpoints:{
        320:{
            slidesPerView: 1, 
        },
        600:{
            slidesPerView: 2, 
        },
        900:{
            slidesPerView: 3, 
        },
    }
});