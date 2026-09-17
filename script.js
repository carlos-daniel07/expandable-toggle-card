let toggleBtn = document.querySelector(".toggle");
let container = document.querySelector(".container");

toggleBtn.onclick = function () {
  container.classList.toggle("active");
  toggleBtn.classList.toggle("active");
};
