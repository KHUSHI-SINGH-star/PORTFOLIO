const scrollUpBtn = document.querySelector("#scrollUp");
const ig = document.querySelector("#ig");
const ln = document.querySelector("#li");
const gmail = document.querySelector("#gmail");
const github = document.querySelector("#github");
const mode=document.querySelector("#mode_sec")
const dino_game = document.querySelector("#dino_game");
const rock_paper_game = document.querySelector("#rock_paper_game");
const tic_tak_toe_game = document.querySelector("#tic_tak_toe_game");
const amazon_clone = document.querySelector("#amazon_clone");
const todoList = document.querySelector("#todoList");
const hamburger = document.getElementById('hamburger');
const nav_hover = document.querySelector(".menu");

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#home").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#about_me").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#skill_sec").addEventListener("click", () => {
  document.querySelector("#skills").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#project_sec").addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#contact_sec").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#more_about_me").addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
});

// Social Links
ig.addEventListener("click", () => {
  window.open("https://www.instagram.com/_.512khushiii._/");
});
ln.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/khushi-singh-4448572a7/");
});
gmail.addEventListener("click", () => {
  window.location.href = "khushisingh977374@gmail.com"; 
});
github.addEventListener("click", () => {
  window.open("https://github.com/KHUSHI-SINGH-star");
});

// Project Links
dino_game.addEventListener("click", () => {
  window.open("https://khushi-singh-star.github.io/DRAGON_GAME/");
});
rock_paper_game.addEventListener("click", () => {
  window.open("https://khushi-singh-star.github.io/STONE_PAPER_SECISSORS_GAME/");
});
tic_tak_toe_game.addEventListener("click", () => {
  window.open("https://khushi-singh-star.github.io/TIC_TAK_TOE_GAME/");
});
amazon_clone.addEventListener("click", () => {
  window.open("https://khushi-singh-star.github.io/amason-clone/");
});
todoList.addEventListener("click", () => {
  window.open("https://khushi-singh-star.github.io/TODO_LIST/");
});

function toggleMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", function () {
   console.log("hamburger =", hamburger);
    console.log("navLinks =", navLinks);
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
})
