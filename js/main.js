// nav
const navLinks = document.querySelectorAll('.navbar__link');
  const checkbox = document.getElementById('click');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      checkbox.checked = false;
    });
  });

// popup.js
document.addEventListener("DOMContentLoaded", function () {
    const openPopupBtn = document.getElementById("openPopup");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("closePopup");
  
    // Ouvrir la popup
    openPopupBtn.addEventListener("click", function () {
      popup.setAttribute("aria-hidden", "false");
      popup.querySelector(".popup__content").focus();
    });
  
    // Fermer la popup
    closePopupBtn.addEventListener("click", function () {
      popup.setAttribute("aria-hidden", "true");
    });
  
    // Fermer la popup avec la touche Échap
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && popup.getAttribute("aria-hidden") === "false") {
        popup.setAttribute("aria-hidden", "true");
      }
    });
  
    // Fermer la popup en cliquant à l'extérieur de la boîte
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.setAttribute("aria-hidden", "true");
      }
    });
  });

// bouton flotante

const scrollBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


 