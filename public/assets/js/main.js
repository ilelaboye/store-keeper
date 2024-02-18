"use strict";

//variables
const body = document.body;
const navHead = document.querySelector(".nav-header");
const navToggler = document.querySelector(".nav-toggler");
const navClose = document.querySelector("#nav-close");
const overlay = document.querySelector("#overlay");
const navMobile = document.querySelector("#nav-mobile");

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 200,
  nav: false,
  center: false,
  dotsEach: true,
  responsive: {
    0: {
      items: 2,
    },
  },
});
function openNav() {
  body.style.overflowY = "hidden";
  navMobile.classList.add("open");
  overlay.classList.add("open");
}
function closeNav() {
  body.style.overflowY = "auto";
  navMobile.classList.remove("open");
  overlay.classList.remove("open");
}

window.addEventListener("scroll", function () {
  if (scrollY > 20) {
    navHead.classList.add("scroll");
  } else {
    navHead.classList.remove("scroll");
  }
});

document
  .querySelectorAll(".nav-link-streched")
  .forEach((link) => link.addEventListener("click", () => closeNav()));
overlay.addEventListener("click", () => openNav());
navToggler.addEventListener("click", () => openNav());
navClose.addEventListener("click", () => closeNav());
