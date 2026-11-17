
const sidebar = document.getElementById("mySidebar");
const menuButton = document.querySelector(".openbtn");
const menuBackdrop = document.querySelector(".menu-backdrop");
let menuReturnFocus;

function openNav() {
  menuReturnFocus = document.activeElement;
  sidebar.inert = false;
  sidebar.classList.add("is-open");
  sidebar.setAttribute("aria-hidden", "false");
  menuButton.setAttribute("aria-expanded", "true");
  menuBackdrop.hidden = false;
  document.body.classList.add("menu-open");
  document.querySelector("main").inert = true;
  document.querySelector("footer").inert = true;
  sidebar.querySelector(".closebtn").focus();
}

function closeNav() {
  sidebar.classList.remove("is-open");
  sidebar.setAttribute("aria-hidden", "true");
  sidebar.inert = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuBackdrop.hidden = true;
  document.body.classList.remove("menu-open");
  document.querySelector("main").inert = false;
  document.querySelector("footer").inert = false;
  if (menuReturnFocus) menuReturnFocus.focus();
}

sidebar.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNav();
});

document.addEventListener("keydown", (event) => {
  if (!sidebar.classList.contains("is-open")) return;
  if (event.key === "Escape") closeNav();
  if (event.key !== "Tab") return;
  const targets = sidebar.querySelectorAll("button, a[href]");
  const first = targets[0];
  const last = targets[targets.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.matchMedia("(min-width: 1101px)").addEventListener("change", (event) => {
  if (event.matches && sidebar.classList.contains("is-open")) closeNav();
});
