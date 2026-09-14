const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  toggle.setAttribute("aria-expanded", open);
  toggle.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  document.querySelector("#formMessage").textContent =
    "¡Gracias por escribirnos! Este formulario es una demostración; conecta un servicio de correo o WhatsApp para recibir los mensajes.";

  event.currentTarget.reset();
});