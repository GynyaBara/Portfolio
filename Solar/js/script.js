let slides = document.querySelectorAll(".sleders-blocks"),
  prev = document.querySelector(".slid-buttom-left"),
  next = document.querySelector(".slid-buttom-right"),
  navs = document.querySelectorAll(".sleder-nav-li");
let index = 0;
const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};
const activeMenu = (n) => {
  for (nav of navs) {
    nav.classList.remove("li-active");
  }
  navs[n].classList.add("li-active");
};
const curentSlide = (ind) => {
  activeMenu(ind);
  activeSlide(ind);
};
const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    curentSlide(index);
  } else {
    index++;
    curentSlide(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    curentSlide(index);
  } else {
    index--;
    curentSlide(index);
  }
};
navs.forEach((item, indexNavs) => {
  item.addEventListener("click", () => {
    index = indexNavs;
    curentSlide(index);
  });
});
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Swiper
const swiper = new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
  },
});
