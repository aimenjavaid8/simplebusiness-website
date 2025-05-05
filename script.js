//nav start//

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars-staggered");
});

//nav end//

//owl carousel start//

$('.clients-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 450,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 2
        },
        1200: {
            items: 2
        },
        1920: {
            items: 2
        }
    }
});

//owl carousel end//

//scroll to top start//

const scrollBtn = document.querySelector('#scroll-to-top');

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 300){
     scrollBtn.style.display = "block";
  }else{
        scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    });
});

//scroll to top end//