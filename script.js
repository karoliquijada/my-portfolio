/* NAVIGATION BAR FOR MOBILE */


const openNav = () => {
  document.getElementById("main-navbar").style.width = "60vw";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

const closeNav = () => {
  document.getElementById("main-navbar").style.width = "0";
  document.body.style.backgroundColor = "white";
}