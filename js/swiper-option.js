const voiceSwiper = new Swiper('.voice-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,

    breakpoints: {
        768: {
            slidesPerView: 2.5,
        },
        1400: {
            slidesPerView: 3.5,
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const blogsSwiper = new Swiper('.blogs-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});