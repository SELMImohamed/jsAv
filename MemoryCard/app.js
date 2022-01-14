const cartes = document.querySelectorAll('.carte')
const timer = document.getElementById('timer')

let carteDejaRetourné = false;
let premièreCarte, secondeCarte

let min = 0;
let sec = 0;
let stoptime = true;

let flipCardSound = new Audio('ressources/sound/dingSound.m4a')

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
        flipCardSound.volume = 0.1
        flipCardSound.play()
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
}


/* *********************************************** */
/*    Fonction pour les conditions de victoires    */
/* *********************************************** */

    

function win() {

    if(tab.length == 12){
        ajouterButton()
        // timer.style.position ='relative'
        // timer.style.top ='200px'
        // timer.style.zIndex='-1'

        document.querySelector('.start-btn').addEventListener('click', function() {
            document.location.reload();
        })

        stopTimer()

        document.querySelector('.grille').style.margin='0px auto 0px'

        timer.style.position ='relative'
        timer.style.top ='370px'
        timer.style.display ='flex'
        timer.style.justifyContent ='center'
        timer.style.textAlign ='center'
        timer.style.color ='white'
        timer.style.backgroundColor ='black'
        timer.style.zIndex='1'
        timer.innerHTML = 'Vous avez gagné votre temps : </br>'+ min + ' min ' + sec + ' sec'
        // console.log('oui')

    }
    // else
    // console.log('non')
}



/* ******************************* */
/*    Mettre en marche le timer    */
/* ******************************* */





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

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    // console.log( hr + ' h '+ min + ' min '+sec+' sec ')
    timer.innerHTML = min + ':' + sec;

    setTimeout(()=>{timerCycle()}, 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00';
}

timer.style.fontSize='60px'

// Star le timer quand la page est chargée
window.ready = startTimer()



//  Création d'objet pour les images

const dataImages = [
    { imgSrc: 'ressources/apple.svg', name: 'apple' },
    { imgSrc: 'ressources/banana.svg', name: 'banana' },
    { imgSrc: 'ressources/brocoli.svg', name: 'brocoli' },
    { imgSrc: 'ressources/cherry.svg', name: 'chery' },
    { imgSrc: 'ressources/pepper.svg', name: 'papper' },
    { imgSrc: 'ressources/straw.svg', name: 'straw' },
    { imgSrc: 'ressources/apple.svg', name: 'apple' },
    { imgSrc: 'ressources/banana.svg', name: 'banana' },
    { imgSrc: 'ressources/brocoli.svg', name: 'brocoli' },
    { imgSrc: 'ressources/cherry.svg', name: 'chery' },
    { imgSrc: 'ressources/pepper.svg', name: 'papper' },
    { imgSrc: 'ressources/straw.svg', name: 'straw' }
];


/* ************************************************* */
/*    Fonction pour mélanger les index du tableau    */
/* ************************************************* */


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // Temps qu'il y a des éléments à mélanger
    while (currentIndex != 0) {
  
      // Prendre l'élément restant
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // Et le remplacer par l'élément actuel.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  
shuffle(dataImages);
console.log(dataImages);


/* ******************************** */
/*    Afficher toutes les cartes    */
/* ******************************** */


for (let i = 0; i < dataImages.length; i++) {

    document.querySelector('.grille').innerHTML += 
    `
    <div class="carte"  data-attr="${dataImages[i].name}">
        <div class="double-face">
            <div class="face">
                <img src="${dataImages[i].imgSrc}">
            </div>
            <div class="arriere">
                ❓
            </div>
        </div>
    </div>
    `;
}




