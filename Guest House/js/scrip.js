const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 2.2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
});
