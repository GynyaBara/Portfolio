let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let linkmap = document.querySelector(".map-link");
let popupmap = document.querySelector(".modal-map");
let exit = document.querySelector(".modal-close");
let exitmap = document.querySelector(".modal-close-map");
let login = popup.querySelector("[name=login]");
let pass = popup.querySelector("[name=password]");
let form = popup.querySelector("form");
let storeage = localStorage.getItem("login"); // переменнная для записи логина из хронилещя

let isStorageSupport = true;
let storage = " ";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
  evt.preventDefault(); // отминяет действие ссилки
  popup.classList.add("modal-show");

  if (storeage) {
    login.value = storeage;
    pass.focus();
  } else {
    login.focus();
  }
});
exit.addEventListener("click", function (evt) {
  evt.preventDefault(); // отминяет действие ссилки
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});

linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("modal-show");
});
exitmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupmap.classList.contains("modal-show")) {
      evt.preventDefault();
      popupmap.classList.remove("modal-show");
    }
  }
});
