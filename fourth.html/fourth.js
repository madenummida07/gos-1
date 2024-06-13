document
  .getElementById("darkModeToggle")
  .addEventListener("click", () => document.body.classList.toggle("dark-mode"));

function openTab(evt, tabName) {
  Array.from(document.getElementsByClassName("tabcontent")).forEach(
    (tc) => (tc.style.display = "none")
  );
  Array.from(document.getElementsByClassName("tablinks")).forEach((tl) =>
    tl.classList.remove("active")
  );
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("Tab1").style.display = "block";
  document.querySelector(".tablinks").classList.add("active");
});

document.querySelectorAll(".cta").forEach((button) =>
  button.addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
  })
);

document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});

let slideIndex = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  slideIndex = n >= slides.length ? 0 : n < 0 ? slides.length - 1 : n;
  Array.from(slides).forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

document
  .querySelector(".prev")
  .addEventListener("click", () => showSlide(--slideIndex));
document
  .querySelector(".next")
  .addEventListener("click", () => showSlide(++slideIndex));

showSlide(slideIndex);
