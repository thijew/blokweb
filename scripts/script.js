// JavaScript Document

// Nav tevoorschijn halen
var deOpenButton = document.querySelector("header > button");
var deNav = document.querySelector("nav");
var deSluitButton = document.querySelector("header nav button");

deOpenButton.addEventListener("click", toggleMenu);
deSluitButton.addEventListener("click", toggleMenu);

function toggleMenu () {
    deNav.classList.toggle("toonMenu");
}



// in de nav  de about sectie 
var aboutButton = document.querySelector("header section.navFooter button:nth-of-type(1)");
var aboutUl = document.querySelector("header section.navFooter ul:nth-of-type(1)");
var eersteBackButton = document.querySelector("header section.navFooter ul button:nth-of-type(1)")

aboutButton.addEventListener("click", toggleAbout);
eersteBackButton.addEventListener("click", toggleAbout)

function toggleAbout () {
    aboutUl.classList.toggle("toonFooterNav");
    deNav.classList.toggle("noScroll")

}

var customerButton = document.querySelector("header section.navFooter button:nth-of-type(2)");
var customertUl = document.querySelector("header section.navFooter ul:nth-of-type(2)");
var tweedeBackButton = document.querySelector("header section.navFooter ul:nth-of-type(2) button")

customerButton.addEventListener("click", toggleAboutTwee);
tweedeBackButton.addEventListener("click", toggleAboutTwee)

function toggleAboutTwee () {
    customertUl.classList.toggle("toonFooterNav");
    deNav.classList.toggle("noScroll")

}

var contactButton = document.querySelector("header section.navFooter button:nth-of-type(3)");
var contactUl = document.querySelector("header section.navFooter ul:nth-of-type(3)");
var derdeBackButton = document.querySelector("header section.navFooter ul:nth-of-type(3) button")

contactButton.addEventListener("click", toggleAboutDrie);
derdeBackButton.addEventListener("click", toggleAboutDrie)

function toggleAboutDrie () {
    contactUl.classList.toggle("toonFooterNav");
    deNav.classList.toggle("noScroll")
}




//footer dropdown menu's

var deEersteButton = document.querySelector("footer section.footerNav button");
var deEersteDrop = document.querySelector("footer section.footerNav ul");

deEersteButton.addEventListener("click", toggleEersteDrop)

function toggleEersteDrop () {
    deEersteDrop.classList.toggle("toonDrop");
}

var deTweedeButton = document.querySelector("footer section.footerNav button:nth-of-type(2)");
var deTweedeDrop = document.querySelector("footer section.footerNav ul:nth-of-type(2)");

deTweedeButton.addEventListener("click", toggleTweedeDrop)

function toggleTweedeDrop () {
    deTweedeDrop.classList.toggle("toonDrop");
}

var deDerdeButton = document.querySelector("footer section.footerNav button:last-of-type");
var deDerdeDrop = document.querySelector("footer section.footerNav ul:last-of-type");

deDerdeButton.addEventListener("click", toggleDerdeDrop)

function toggleDerdeDrop () {
    deDerdeDrop.classList.toggle("toonDrop");
}

