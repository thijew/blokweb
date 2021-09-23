// JavaScript Document
var deOpenButton = document.querySelector("header > button");
var deNav = document.querySelector("nav");
var deSluitButton = document.querySelector("header nav button");

deOpenButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);

function toggleMenu () {
    deNav.classList.toggle("toonMenu")
}