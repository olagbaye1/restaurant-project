const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
  });
});


// const hamburger = document.getElementById("hamburger");
//   const nav = document.querySelector(".navright");

//   hamburger.addEventListener("click", () => {
//     nav.classList.toggle("show");
//   });