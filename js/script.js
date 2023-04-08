$(document).ready(function () {


    $('input[type="tel"]').inputmask("+38 (999) 999-99-99");

    $('form').on('submit', function (e) {
        e.preventDefault(); // предотвращение стандартного поведения формы
        var form = $(this);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);
        // отправка формы с помощью AJAX
        $.ajax({
            url: 'send-mail.php',
            type: 'POST',
            data: form.serialize(),
            success: function (data) {
                form[0].reset(); // очистка формы
                // Открываем модальное окно благодарности после успешной отправки формы
                const thankPopup = document.getElementById('modal-thank');
                popupOpen(thankPopup);
            }
        });
    });


    // закрытие модального окна при нажатии на кнопку закрытия


    //Получаем инпут file в переменную
    const formImage = document.getElementById('formImage');
    //Получаем див для превью в переменную
    const formPreview = document.getElementById('formPreview');

    //Слушаем изменения в инпуте file
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
        // провераяем тип файла
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
            alert('Разрешены только изображения.');
            formImage.value = '';
            return;
        }
        // проверим размер файла (<2 Мб)
        if (file.size > 20 * 1024 * 1024) {
            alert('Файл должен быть менее 20 МБ.');
            return;
        }

        var reader = new FileReader();
        reader.onload = function (e) {
            formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
        };
        reader.onerror = function (e) {
            alert('Ошибка');
        };
        reader.readAsDataURL(file);
    }


});


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


    $(document).ready(function () {
        $('.gallery__wrapper, .reviews__wrapper').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',

            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function (element) {
                    return element.find('img');
                }
            }

        });
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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 30,
    autoHeight: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        600: {
            slidesPerView: 2,

        },
        900: {
            slidesPerView: 3,
        },
    }
});

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Получаем элементы формы
const sizeSelect = document.getElementById('size');
const styleSelect = document.getElementById('style');
const stretchSelect = document.querySelector('select[name="stretch"]');
const materialSelect = document.querySelector('select[name="material"]');
const packagingCheckbox = document.getElementById('packaging');
const urgentCheckbox = document.getElementById('urgent');

// Получаем элемент, где будет отображаться цена
const priceElement = document.getElementById('price');

// Функция для обновления цены
function updatePrice() {
    // Получаем значения выбранных элементов формы
    const sizeValue = sizeSelect.options[sizeSelect.selectedIndex].value;
    const sizePrice = parseInt(sizeSelect.options[sizeSelect.selectedIndex].dataset.price);
    const stylePrice = parseInt(styleSelect.options[styleSelect.selectedIndex].dataset.price || '0');
    const stretchPrice = parseInt(stretchSelect.options[stretchSelect.selectedIndex].dataset.price || '0');
    const materialPrice = parseInt(materialSelect.options[materialSelect.selectedIndex].dataset.price || '0');
    const packagingPrice = packagingCheckbox.checked ? 70 : 0;
    const urgentPrice = urgentCheckbox.checked ? 100 : 0;

    // Считаем итоговую цену
    const totalPrice = sizePrice + stylePrice + stretchPrice + materialPrice + packagingPrice + urgentPrice;

    // Обновляем текст элемента с ценой
    priceElement.innerText = `${totalPrice} грн`;
}

// Вызываем функцию для первоначальной установки цены
updatePrice();

// Назначаем обработчики событий для изменения элементов формы
sizeSelect.addEventListener('change', updatePrice);
styleSelect.addEventListener('change', updatePrice);
stretchSelect.addEventListener('change', updatePrice);
materialSelect.addEventListener('change', updatePrice);
packagingCheckbox.addEventListener('change', updatePrice);
urgentCheckbox.addEventListener('change', updatePrice);
