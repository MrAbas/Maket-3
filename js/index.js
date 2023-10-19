const burger__menu = document.getElementById("burger__menu");
const burger__content = document.getElementById("burger__content");

const button__search = document.getElementById("button__search");
const closed_search = document.getElementById("closed_search");
const btn_input = document.getElementById("btn_input");
const show__container__search = document.getElementById(
  "show__container__search"
);

burger__menu.onclick = function () {
  burger__content.classList.toggle("burger__content");
  burger__menu.classList.toggle("burger__menu__cross");
};

button__search.onclick = function () {
  btn_input.classList.remove("hidden");
  closed_search.classList.remove("hidden");
  show__container__search.classList.add("show__container__search");
};

closed_search.onclick = function () {
  btn_input.classList.add("hidden");
  closed_search.classList.add("hidden");
  show__container__search.classList.remove("show__container__search");
};
