let menuIcon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");
let menuIconClose = document.getElementById("menu-icon-close");

menuIcon.addEventListener("click", menuDisplay);
menuIconClose.addEventListener("click", menuHide);

function menuDisplay() {
  menu.style.display = "block";
}

function menuHide() {
  menu.style.display = "none";
}
