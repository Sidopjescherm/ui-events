/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een bibber animatie als je op iets klikt


// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let bibberlink = document.querySelector('a:nth-of-type(2)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
bibberlink.addEventListener('click', bibberHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function bibberHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  bibberlink.classList.toggle('bibberlink')
}




// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let swipefade = document.querySelector('a:nth-of-type(1)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
swipefade.addEventListener('mouseup', dissapear)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function dissapear() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  swipefade.classList.toggle('swipe')
}

let vergroten = document.querySelector('a:nth-of-type(3)')

vergroten.addEventListener('click', vergroot)

function vergroot(){
  vergroten.classList.toggle('vergroten')
}

let kleurencyclus = document.querySelector('a:nth-of-type(4)')

kleurencyclus.addEventListener('dblclick', colorcycle)

function colorcycle(){
  kleurencyclus.classList.toggle('RGB')
}

let stretchngo = document.querySelector('a:nth-of-type(7)')

stretchngo.addEventListener('click', stretchy)

function stretchy(){
  stretchngo.classList.toggle('rekenren')
}