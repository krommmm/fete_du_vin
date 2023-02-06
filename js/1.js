//drapeaux

document.querySelector(".drapeaux").addEventListener("mouseover", fUnDisplay);
document.querySelector(".drapeaux").addEventListener("mouseout", fDisplay);

function fUnDisplay() {
  document.querySelector(".drapeau_uk").style.visibility = "visible";
  document.querySelector(".fa-caret-down").style.display = "none";
  document.querySelector(".fa-caret-up").style.display = "block";
}

function fDisplay() {
  document.querySelector(".drapeau_uk").style.visibility = "hidden";
  document.querySelector(".fa-caret-down").style.display = "block";
  document.querySelector(".fa-caret-up").style.display = "none";
}

document.querySelector(".fa-caret-up").style.display = "none";

//Menu déroulant <|Gauche Droite|>

document.querySelector(".goLeft").addEventListener("click", fGoRight);
var cumul = 0;

function fGoRight() {
  if (cumul > -600) {
    cumul = cumul - 300;
  } else {
    cumul = cumul;
  }

  document.querySelector(
    ".article_container"
  ).style.transform = `translateX(${cumul}px)`;
  console.log(cumul);
}

//-----------
document.querySelector(".goRight").addEventListener("click", fGoLeft);

function fGoLeft() {
  if (cumul === 0) {
    document.querySelector(".goRight").style.background =
      "rgba(211, 44, 100,.7)";
  } else {
    document.querySelector(".goRight").style.background = "rgba(211, 44, 100)";
  }

  if (cumul < 0) {
    cumul = cumul + 300;
  }

  document.querySelector(
    ".article_container"
  ).style.transform = `translateX(${cumul}px)`;
  console.log(cumul);
}

//-------------panneau_info des articles----------------------
/*

document.querySelector(".drapeauxDown").addEventListener("mouseover", fUnDisplayDown);
document.querySelector(".drapeauxDown").addEventListener("mouseout", fDisplayDown);

function fUnDisplayDown() {
  document.querySelector(".drapeau_ukDown").style.visibility = "visible";
  document.querySelector(".coucou1").style.display = "none";
  document.querySelector(".coucou2").style.display = "block";
}

function fDisplayDown() {
  document.querySelector(".drapeau_ukDown").style.visibility = "hidden";
  document.querySelector(".coucou1").style.display = "block";
  document.querySelector(".coucou2").style.display = "none";
}

document.querySelector(".coucou2").style.display = "none";

//sites_web

//Grossit le l'image de fond quand on clique sur le fond ou sur sur rectangle avec du texte(visiter bordeaux.com)

var allCube = document.querySelector(".cube");


document.querySelector(".cube").addEventListener("mouseover",fMove);
document.querySelector(".fond").addEventListener("mouseover",fMove2);
document.querySelector(".sites_web-left").addEventListener("mouseout",fMoveOut);


function fMove(){
  document.querySelector(".fond").style.transform="scale(1.1)";
}

function fMove2(){
  document.querySelector(".fond").style.transform="scale(1.1)";
}

function fMoveOut(){
  document.querySelector(".fond").style.transform="scale(1)";
}

const ratio = .1
const options = {
  root: null,
  rootMargin:'0px',
  threshold: ratio
}

const handleIntersect = function(entries,observer){
  entries.forEach(function(entry){
    if(entry.intersectionRatio > ratio){
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function(r){
  observer.observe(r)
})
*/

//observer.observe(document.querySelector(".reveal"))

//  document.querySelector(".AncreDébutImg").style.opacity="1";

//........................

/* instruction quand on scroll
window.addEventListener('scroll',()=>{
  console.log('scroll ! ');
})
*/
// console nav => window.scrollY; (indique la quantité de scroll parcouru[en px])

const ancre = document.querySelector(".AncreDébutImg");
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    ancre.style.opacity = "1";
    ancre.style.transform = "scale(1)";
  } else if (window.scrollY < 700) {
    ancre.style.transform = "scale(0)";
  }
});

//depliant_header_menu

//variables globales
var depliant_Off = document.querySelector(".depliant_header_off");
var depliantIconeBarres = document.querySelector(
  ".depliant_header_off .fa-bars"
);
var depliantIconeCroix = document.querySelector(".depliant_header_off .fa-x");
var menuDepliant = document.querySelector(".depliant_header_menu");
var main = document.querySelector("main");
var footer = document.querySelector("footer");

//L'icone change quand on clique sur menu depliant
depliant_Off.addEventListener("click", changeIcon);

//fonction qui change l'icone
function changeIcon() {
  if (depliantIconeBarres.style.display != "none") {
    depliantIconeBarres.style.display = "none";
    depliantIconeCroix.style.display = "flex";
    menuDepliant.style.display = "inline-block";
    main.style.display = "none";
    footer.style.position = "absolute";
    footer.style.top = "80%";
    footer.style.width = "100%";
  } else if (depliantIconeBarres.style.display != "flex") {
    depliantIconeBarres.style.display = "flex";
    depliantIconeCroix.style.display = "none";
    menuDepliant.style.display = "none";
    main.style.display = "inline";
    footer.style.position = "relative";
    footer.style.top = "80%";
    footer.style.width = "100%";
  }
}

//On gère le changement d'écran pour ferme le menu display (si on a oublié de le fermer)
window.onresize = () => {
  var resolutionEcran = document
    .querySelector("body")
    .getBoundingClientRect().width;

  if (resolutionEcran > 1175) {
    menuDepliant.style.display = "none";
    main.style.display = "inline";
    footer.style.position = "relative";
    footer.style.top = "80%";
    footer.style.width = "100%";
    depliant_Off.style.display = "none";
  } else {
    depliant_Off.style.display = "flex";
  }
};

