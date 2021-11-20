ScrollReveal({ reset: true });
ScrollReveal().reveal('.baruun', {
    origin: 'right',
    distance: '200px',
    delay: 300
});

ScrollReveal().reveal('.heroscroll', {
    origin: 'left',
    distance: '100%',
    delay: 1000
});

ScrollReveal().reveal('.overlay', {
    origin: 'left',
    distance: '100%',
    delay: 2000
});

var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 8,
    spaceBetween: 30,
});
