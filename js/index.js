const burger__menu = document.getElementById("burger__menu");
const burger__content = document.getElementById("burger__content");

const button__search = document.getElementById("button__search");
const closed_search = document.getElementById("closed_search");
const container__search = document.getElementById("container__search");

burger__menu.onclick = function () {
  burger__content.classList.toggle("burger__content");
  burger__menu.classList.toggle("burger__menu__cross");
};

button__search.onclick = function () {
  button__search.style.display = "none";
  container__search.classList.add("container__search_show");
};

closed_search.onclick = function () {
  button__search.style.display = "block";
  container__search.classList.remove("container__search_show");
};
