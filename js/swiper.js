const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
