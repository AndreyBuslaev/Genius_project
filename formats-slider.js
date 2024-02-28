const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active'
    },
    navigation: {
        nextEl: '.carousel-button.next',
        prevEl: '.carousel-button.prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    }
});