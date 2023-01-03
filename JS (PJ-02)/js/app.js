let slides = document.querySelectorAll(".slide-container"),
  prev = document.querySelector("#prev"),
  next = document.querySelector("#next");

let dots = document.querySelectorAll(".slider__dots-item"),
  navs = document.querySelectorAll(".image-li-item");
let index = 0;

const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};

const activeDots = (n) => {
  for (dot of dots) {
    dot.classList.remove("activ");
  }
  dots[n].classList.add("activ");
};
const activeMenu = (n) => {
  for (nav of navs) {
    nav.classList.remove("li-active");
  }
  navs[n].classList.add("li-active");
};

const curentsSlide = (ind) => {
  activeSlide(ind);
  activeDots(ind);
  activeMenu(ind);
};
const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    curentsSlide(index);
  } else {
    index++;
    curentsSlide(index);
  }
};
const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    curentsSlide(index);
  } else {
    index--;
    curentsSlide(index);
  }
};

dots.forEach((item, indexDots) => {
  item.addEventListener("click", () => {
    index = indexDots;
    curentsSlide(index);
  });
});

navs.forEach((item, indexNavs) => {
  item.addEventListener("click", () => {
    index = indexNavs;
    curentsSlide(index);
  });
});
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
