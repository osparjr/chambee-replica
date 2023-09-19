function closeMenu() {
  let menu = document.getElementById("menu").classList.toggle("show");

  if (menu == true) {
    document.getElementById("side-nav-mobile").style.display = "flex";
  } else {
    document.getElementById("side-nav-mobile").style.display = "none";
  }
  console.log(menu);
}
