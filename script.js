// ==========================
// NAVBAR
// ==========================

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        nav.classList.add("nav-scroll");
    }
    else{
        nav.classList.remove("nav-scroll");
    }

});

// ==========================
// ANIMACIONES AL HACER SCROLL
// ==========================

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach(el => {

        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            el.classList.add("show");

        }

    });

});