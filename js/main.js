document.addEventListener("DOMContentLoaded", function () {
  const mainSection = document.querySelector("main");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-list li a");
  let currentSlide = 0;

  const list = document.querySelectorAll(".list");
  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

  function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector(
      ".slide-container"
    ).style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  showSlide(currentSlide);

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});
