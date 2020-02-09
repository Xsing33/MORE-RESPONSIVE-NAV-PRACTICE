const burger = document.querySelector(".bars i");
const nav = document.querySelector(".nav__list");

function toggleNav() {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
}

burger.addEventListener("click", () => {
  toggleNav();
});
