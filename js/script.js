let burger__content = document.getElementsByClassName(burger__content);
let burger__menu = document.getElementsByClassName(burger__menu);

burger__menu.onclick = function () {
  burger__menu.classlist.toggle("burger__content");
};
