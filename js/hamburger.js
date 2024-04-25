function show(closestLi) {
  let dropdown = closestLi.querySelector(".children");
  if (window.innerWidth <= 768) {
    let dropdown = closestLi.querySelector(".children");
    if (dropdown) {
      dropdown.classList.toggle("open_up");
      closestLi.classList.toggle("rotate");
    }
  }
  document.querySelectorAll(".container-me .children").forEach(function (el) {
    if (el !== dropdown) {
      el.classList.remove("open_up");
    }
  });
}
