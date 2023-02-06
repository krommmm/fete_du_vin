//drapeaux

document.querySelector(".drapeaux").addEventListener("mouseover", fUnDisplay);
document.querySelector(".drapeaux").addEventListener("mouseout", fDisplay);

function fUnDisplay() {
  document.querySelector(".drapeau_fr").style.visibility = "visible";
  document.querySelector(".fa-caret-down").style.display = "none";
  document.querySelector(".fa-caret-up").style.display = "block";
}

function fDisplay() {
  document.querySelector(".drapeau_fr").style.visibility = "hidden";
  document.querySelector(".fa-caret-down").style.display = "block";
  document.querySelector(".fa-caret-up").style.display = "none";
}

document.querySelector(".fa-caret-up").style.display = "none";
