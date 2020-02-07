var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        541: {
            slidesPerView: 2
        }
    }
});

(() => {
    var slides = document.getElementsByClassName('card');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.background = `linear-gradient(180deg, rgba(20, 18, 24, 0.5) 0%, #2D2D2D 100%), url('img/series/series${slides[i].className.slice(-1)}.png')`;
        slides[i].style['background-repeat'] = 'no-repeat';
        slides[i].style['background-size'] = 'cover';
        slides[i].style['background-position'] = 'center';
    }
})();

var menuButtonArea = document.querySelector('.menu-button-area');
var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menuButtonArea.addEventListener('click', function () {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-btn-active');
});