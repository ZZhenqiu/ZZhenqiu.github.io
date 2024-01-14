

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




var portfoliolinks = document.getElementsByClassName("portfolio-link");
var portfoliocontents = document.getElementsByClassName("portfolio-contents");

function openportfolio(portfolioname){
    for(portfoliolink of portfoliolinks){
      portfoliolink.classList.remove("active-portfolio-link");
    }

    for(portfoliocontent of portfoliocontents){
      portfoliocontent.classList.remove("active-portfolio");
    }

    event.currentTarget.classList.add("active-portfolio-link");
    document.getElementById(portfolioname).classList.add("active-portfolio")

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

  



