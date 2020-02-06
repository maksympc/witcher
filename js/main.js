var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: '.arrow'
    }
});

(() => {
    var slides = document.getElementsByClassName('card');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.background = `linear-gradient(180deg, rgba(20, 18, 24, 0.5) 0%, #2D2D2D 100%), url('img/series/series${slides[i].className.slice(-1)}.png')`;
        slides[i].style['background-repeat'] = 'no-repeat';
        slides[i].style['background-size'] =  'cover';
        slides[i].style['background-position'] = 'center';
    }
})();