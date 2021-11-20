ScrollReveal({ reset: true });
ScrollReveal().reveal('.baruun', {
    origin:right,
    distance:'200px',
    delay: 300
});

ScrollReveal().reveal('.heroscroll', {
    origin:left,
    distance:'100%',
    delay: 1000
});

ScrollReveal().reveal('.overlay', {
    origin:left,
    distance:'100%',
    delay: 2000
});



const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});