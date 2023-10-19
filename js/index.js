const burger__menu = document.getElementById("burger__menu");
const burger__content = document.getElementById("burger__content");

burger__menu.onclick = function () {
  burger__content.classList.toggle("burger__content");

  burger__menu.classList.toggle("burger__menu__cross");
};
