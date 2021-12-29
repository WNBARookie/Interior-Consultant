// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu");

// add event listener
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  close.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});
