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

});

const swiper = new Swiper('.gallery__swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    slidesPerColumn: 3,   
});