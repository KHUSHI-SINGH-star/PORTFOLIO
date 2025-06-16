const last_button = document.querySelector(".up-button");
const submit_button = document.querySelector("#submit-button"); 
const Name = document.querySelector("#name_section"); 
const email = document.querySelector("#email_section");
const phoneNo = document.querySelector("#phoneNo_section");
const massage = document.querySelector("#massage_section");

const ig = document.querySelector("#ig");
const ln = document.querySelector("#li");
const github = document.querySelector("#github");
const gmail = document.querySelector("#gmail");

const tap_button = document.querySelector(".last");
const more_about_me = document.querySelector("#more_about_me");
const home = document.querySelector("#home");
const about_me = document.querySelector("#about_me");
const skill_sec = document.querySelector("#skill_sec");
const project_sec = document.querySelector("#project_sec");
const contact_sec = document.querySelector("#contact_sec");

const dino_game = document.querySelector("#dino_game");
const rock_paper_game = document.querySelector("#rock_paper_game");
const tic_tak_toe_game = document.querySelector("#tic_tak_toe_game");
const amazon_clone = document.querySelector("#amazon_clone");
const todoList = document.querySelector("#todoList");

// Project links
dino_game.addEventListener("click", () => {
  document.location = "https://khushi-singh-star.github.io/DRAGON_GAME/";
});

rock_paper_game.addEventListener("click", () => {
  document.location = "https://khushi-singh-star.github.io/STONE_PAPER_SECISSORS_GAME/";
});

tic_tak_toe_game.addEventListener("click", () => {
  document.location = "https://khushi-singh-star.github.io/TIC_TAK_TOE_GAME/";
});

amazon_clone.addEventListener("click", () => {
  document.location = "https://khushi-singh-star.github.io/amason-clone/";
});

todoList.addEventListener("click", () => {
  document.location = "https://khushi-singh-star.github.io/TODO_LIST/";
});

last_button.addEventListener("click", () => {
  window.scrollTo({ top: 1, behavior: "instant" });
});

tap_button.addEventListener("click", () => {
  window.scrollTo({ top: 1, behavior: "smooth" });
});

more_about_me.addEventListener("click", () => {
  window.scrollTo({ top: 800, behavior: "smooth" });
});

about_me.addEventListener("click", () => {
  window.scrollTo({ top: 800, behavior: "smooth" });
});

home.addEventListener("click", () => {
  window.scrollTo({ top: 100, behavior: "smooth" });
});

skill_sec.addEventListener("click", () => {
  window.scrollTo({ top: 1800, behavior: "smooth" });
});

project_sec.addEventListener("click", () => {
  window.scrollTo({ top: 3200, behavior: "smooth" });
});

contact_sec.addEventListener("click", () => {
  window.scrollTo({ top: 4000, behavior: "smooth" });
});

// Social links
ig.addEventListener("click", () => {
  window.open("https://www.instagram.com/_.512khushiii._/");
});

ln.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/khushi-singh-4448572a7/");
});

github.addEventListener("click", () => {
  window.open("https://github.com/KHUSHI-SINGH-star");
});
