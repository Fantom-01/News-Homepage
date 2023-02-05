let menuIcon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");

menuIcon.addEventListener("click", menuDisplay(menu));

function menuDisplay(menu) {
  menu.style.display = "block";
}
