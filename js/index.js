//FUNCTIONS MENU HAMBURGER
const toggleButton = document.querySelector("#button-menu-navbar");
const menuNavbar= document.querySelector("#menu-list");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("close");
    menuNavbar.classList.toggle("show")
});

//FUNCTION ARROW MENU LANGUAGE & SUBMENU

const arrowMenu = document.querySelectorAll(".button-item--click");

arrowMenu.forEach(listElement => {
    listElement.addEventListener("click", () => {
        listElement.classList.toggle(".arrow-reverse");
    })
})

const arrowReverse = document.querySelector("#button-language");
const menuLanguage = document.querySelector("#menu-language");

arrowReverse.addEventListener("click", () => {
    arrowReverse.classList.toggle("reverse");
    menuLanguage.classList.toggle("show");
});

//CLICK OUT OF MENU

document.addEventListener("click", (e) => {
    if (!menuNavbar.contains(e.target) && !toggleButton.contains(e.target)) {
        toggleButton.classList.remove("close");
        menuNavbar.classList.remove("show");
    }

    if (!arrowReverse.contains(e.target) && !menuLanguage.contains(e.target)) {
        arrowReverse.classList.remove("reverse");
        menuLanguage.classList.remove("show");
    }
})

//FOR THE CAROUSEL SLIDER

 const principalSlider = document.querySelector("#carousel-slider");
 let sliderSection = document.querySelectorAll(".slider-section");
 let sliderSectionLast = sliderSection[sliderSection.length -1];

 const buttonLeft = document.querySelector("#slider-button-left");
 const buttonRight = document.querySelector("#slider-button-right");

 principalSlider.insertAdjacentElement("afterbegin", sliderSectionLast);

 function toNext() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    principalSlider.style.marginLeft = "-200%";
    principalSlider.style.transition = "all .5s";
    setTimeout(function() {
        principalSlider.style.transition = "none";
        principalSlider.insertAdjacentElement("beforeend", sliderSectionFirst);
        principalSlider.style.marginLeft = "-100%";
    }, 500);
 }

 buttonRight.addEventListener("click", function(){
    toNext();
 });

 function toPrev() {
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    principalSlider.style.marginLeft = "0";
    principalSlider.style.transition = "all .5s";
    setTimeout(function() {
        principalSlider.style.transition = "none";
        principalSlider.insertAdjacentElement("afterbegin", sliderSectionLast);
        principalSlider.style.marginLeft = "-100%";
    }, 500);
 };

 buttonLeft.addEventListener("click", function() {
    toPrev();
 });

 setInterval(function() {
    toNext();
 }, 5000);

 //FUNTCIONS FORM NL

 const form = document.querySelector("#formNL");
 const sendButton = document.querySelector("#sendInfo");
 const messageInfo = document.querySelector("#messageNL");

 sendButton.addEventListener("click", function() {
    let validData = true;
    const name = document.querySelector("#name");
    const eMail = document.querySelector("#email");
    const policy = document.querySelector("#policy");
    const infoInterest = document.querySelectorAll('input[name^="interest"]:checked');

    if (!name.value.match(/^[a-zA-ZáéíóúàèìòùäëïöüâêîôûÁÉÍÓÚÀÈÌÒÙÄËÏÖÜÂÊÎÔÛñÑ\s]+$/)) {
        validData = false;
        name.classList.add("invalid");
    } else {
        name.classList.remove("invalid");
    }

    if (!eMail.checkValidity()) {
        validData = false;
        eMail.classList.add("invalid");
    } else {
        eMail.classList.remove("invalid");
    }

    if (!policy.checked) {
        validData = false;
    }

    if (infoInterest.length === 0) {
        validData = false;
    }

    //Envío de formulario cuando todos los campos sean validos

    if (validData) {
        sendForm();
    }
});

function sendForm() {
     messageInfo.style.display = "block";
     form.style.display = "none";
     // Reservado para la lógica de la configuracion del envío de la info al correo electrónico //
 }