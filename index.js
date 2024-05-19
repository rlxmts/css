const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    effect: "fade",
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });