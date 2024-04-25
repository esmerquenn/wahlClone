const bottom_nav = document.querySelector(".bottom_nav");
function toggleMenu() {
   bottom_nav.classList.toggle("hamburger")
   if (bottom_nav.classList.contains("hamburger")) {searchinput.value = '', resultsContainer.style.display = 'none'}
}
window.addEventListener("scroll", function () {
  if (bottom_nav.classList.contains("hamburger")) {
    bottom_nav.classList.remove("hamburger");
  }
});
