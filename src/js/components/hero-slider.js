const slider = document.querySelector(".hero__slider");

let swiper = new Swiper(slider, {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hero__slider--next',
    prevEl: '.hero__slider--prev',
  },
});
