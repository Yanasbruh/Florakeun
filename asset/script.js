// Tempat Variabel
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

// Tempat Memanggil Variabel pada Mobile Device
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("show");
});
