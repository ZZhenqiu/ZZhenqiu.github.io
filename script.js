

/* About */

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}




const portfoliolinks = document.querySelectorAll(".portfolio-link");
const projects = document.querySelectorAll(".project__item");

function openportfolio(category) {
    portfoliolinks.forEach((link) => link.classList.remove("active-portfolio-link"));
    projects.forEach((project) => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    // Ajouter la classe active sur le bouton cliqué
    event.target.classList.add("active-portfolio-link");
}




/* Animation (en lien avec CSS) */

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 15;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  

  
  document.cookie = "flag=FLAG-CTF-XSS; path=/;";

// Fonction pour soumettre le formulaire
function submitContact() {
    // Récupère les valeurs des champs
    const userName = document.getElementById("userName").value;
    const userMessage = document.getElementById("userMessage").value;

    // Vérifie si les champs sont remplis
    if (userName.trim() === "" || userMessage.trim() === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Affiche le message envoyé directement dans le DOM sans échapper les caractères (vulnérabilité XSS)
    const messageDisplay = document.getElementById("messageDisplay");
    messageDisplay.innerHTML = `
        <p><strong>${userName} dit :</strong></p>
        <p>${userMessage}</p>
    `;

    // Réinitialise les champs après l'envoi
    document.getElementById("contactForm").reset();
}



