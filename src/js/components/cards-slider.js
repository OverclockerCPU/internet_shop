const slider = document.querySelector(".cards__slider");
let swiper = new Swiper(slider, {
  slidesPerView: "auto",
  spaceBetween: 30,
  mousewheel: true,

  // Navigation arrows
  navigation: {
    nextEl: ".cards__slider--next",
    prevEl: ".cards__slider--prev",
  },
});
