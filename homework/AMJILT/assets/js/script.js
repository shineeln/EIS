ScrollReveal().reveal('#right', {
    origin: 'right',
    distance: '200px',
    delay: 300
});

ScrollReveal().reveal('#left', {
    origin: 'left',
    distance: '200px',
    delay: 300
});


ScrollReveal().reveal('.hero', {
    origin: 'left',
    distance: '100%',
    delay: 100
});

ScrollReveal().reveal('.overlay', {
    origin: 'left',
    distance: '100%',
    delay: 1000
});

var swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 8,
    spaceBetween: 30,
});
