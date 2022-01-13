const cartes = document.querySelectorAll('.carte')

let carteDejaRetourné = false;
let premièreCarte, secondeCarte

let tab = []


supprimerButton()

//  Clique possible si la carte contient la classe arrière 
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('arriere')){
        console.log(e.target.parentNode.parentNode.getAttribute("data-attr"))
        carteReturn(e.target)
    }
} )

//  Transformer le curseur en pointer au survol d'une carte possible à retournée
document.addEventListener("mouseover",(e)=>{
    if(e.target.classList.contains('arriere')){ 
        e.target.style.cursor='pointer';
    }
})


/* *********************************************** */
/*    Fonction pour les conditions de victoires    */
/* *********************************************** */


function carteReturn(card){
    console.log(card)
    card.parentNode.classList.add('active')
    if (!carteDejaRetourné){
        carteDejaRetourné = true;
        premièreCarte = card.parentNode.parentNode

    }
    else {
        secondeCarte = card.parentNode.parentNode
        checkCard(premièreCarte,secondeCarte)
        carteDejaRetourné = false
    }
    
    win()
    // console.log(premièreCarte)
    // console.log(secondeCarte)
}

function checkCard(premièreCarte , secondeCarte){
    //  Si le nom de la première carte est égale au nom de la deuxièmme 
    if (premièreCarte.getAttribute("data-attr") === secondeCarte.getAttribute("data-attr")){
        tab.push(premièreCarte.getAttribute("data-attr"))
        tab.push(secondeCarte.getAttribute("data-attr"))
    }
    else {
        setTimeout(()=>{
            premièreCarte.childNodes[1].classList.remove('active')
            secondeCarte.childNodes[1].classList.remove('active')
            // console.log(premièreCarte.childNodes);
            // console.log(secondeCarte.childNodes);

        },1000)
    }
    console.log('1  ' + premièreCarte.getAttribute("data-attr"))
    console.log('2  ' + secondeCarte.getAttribute("data-attr"))
    console.log(tab)
}



function supprimerButton() { 
    document.querySelector('.button').style.display='none'  //  On fait disparaître le bouton
}

function ajouterButton() { 
    document.querySelector('.button').style.display='flex'  //  On fait apparaître le boutton
    document.querySelector('.button').style.justifyContent ='center'    //  Et on le centre
    
    document.querySelector('button').style.fontSize = '30px'
    document.querySelector('button').style.margin ='20px'
    document.querySelector('button').style.padding ='30px 20px'
    document.querySelector('button').style.borderRadius = '10px'
}


/* *********************************************** */
/*    Fonction pour les conditions de victoires    */
/* *********************************************** */


function win() {

    if(tab.length == 12){
        ajouterButton()
        
        document.querySelector('.button').addEventListener('click', function() {
            document.location.reload();
        })
        stopTimer()
        // console.log('oui')

    }
    // else
    // console.log('non')
}



/* ******************************* */
/*    Mettre en marche le timer    */
/* ******************************* */


const timer = document.getElementById('timer')
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    // console.log( hr + ' h '+ min + ' min '+sec+' sec ')
    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout(()=>{timerCycle()}, 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
}

timer.style.fontSize='60px'

// Star le timer quand la page est chargée
window.onload = startTimer()
