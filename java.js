
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".navbar-brand img");
  
    if (!logo) return;
  
    // Click
    logo.addEventListener("click", () => {
      logo.classList.toggle("logo-click");
    });
  
    // Teclado
    logo.setAttribute("tabindex", "0");
    logo.setAttribute("role", "button");
    logo.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        logo.click();
      }
    });
  });
  