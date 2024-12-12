/*
   De eerste interactie is al voor jullie uitgewerkt
   Als je op het 12e linkje klikt (“Interaction”), springt deze omhoog
*/

/*Hier is het event dat bij de 'Interaction' link hoort */
let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)

function jumpHandler() {

  interaction.classList.toggle('jump')
}

interaction.addEventListener('animationend', jumpHandler)

/*Hier is het event dat hoort bij de 'Frontend' link*/
let swipefade = document.querySelector('a:nth-of-type(1)')

swipefade.addEventListener('mouseup', dissapear)

function dissapear() {
  swipefade.classList.toggle('swipe')
}

/*Hier is het event dat bij de 'design' link hoort */
let bibberlink = document.querySelector('a:nth-of-type(2)')

bibberlink.addEventListener('mouseover', bibberHandler)

function bibberHandler() {

  bibberlink.classList.toggle('bibberlink')
}

/*Hier is het even dat hoort bij de '&' link*/ 
let vergroten = document.querySelector('a:nth-of-type(3)')

vergroten.addEventListener('click', vergroot)

function vergroot(){
  vergroten.classList.toggle('vergroten')
}

/*Hier is het event dat hoor bij de 'development' link*/ 
let kleurencyclus = document.querySelector('a:nth-of-type(4)')

kleurencyclus.addEventListener('dblclick', colorcycle)

function colorcycle(){
  kleurencyclus.classList.toggle('RGB')
}

/*Hier is het event die hoort bij de 'Sprint 5' link*/ 
let stretchngo = document.querySelector('a:nth-of-type(5)')

stretchngo.addEventListener('click', Sonic)

function Sonic(){
  stretchngo.classList.toggle('rekenren')
}

/*Hier is het event dat hoort bij de 'Fix' link*/

let bouncing = document.querySelector('a:nth-of-type(6)')

bouncing.addEventListener('mouseout', stuiter)

function stuiter(event){
  bouncing.classList.toggle('bounce')
}

/*Hier is het event die hoort bij de 'THE' link*/
let glowing = document.querySelector('a:nth-of-type(7)')

glowing.addEventListener('click', gloei)

function gloei(){
  glowing.classList.toggle('oplichten')
}