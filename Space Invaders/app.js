
const grilleJeu = document.querySelector('.grille')
let alienMort = []

//  Création d'une grille sur toute la zone de combat
for (let i = 0; i < 260; i++) { 
  const zoneAlien = document.createElement('div')
  grilleJeu.appendChild(zoneAlien)  //  Ajouté ces div en temps que enfants de la div grille
}

const tableauJeu = Array.from(document.querySelectorAll('.grille div')) //  Mettre toutes les div dans un tableau
console.log(tableauJeu)

const tableauAlien = [   //  Ajouté les index de où ce trouveront les aliens
  0,1,2,3,4,5,6,7,8,9,10,11,
  20,21,22,23,24,25,26,27,28,29,30,31,
  40,41,42,43,44,45,46,47,48,49,50,51
]

function afficherAliens( ) {  // Afficher les aliens
  for (let i = 0; i < tableauAlien.length; i++) {
      if (!alienMort.includes(i)) {     // Si l'alien n'est pas dans le tableau des aliens mort on l'affiche 
        tableauJeu [tableauAlien [i]].classList.add('alien')
      }
  }
}

function supprimerAliens( ) {  // Supprimer les aliens
    for (let i = 0; i < tableauAlien.length; i++) {
       tableauJeu [tableauAlien [i]].classList.remove('alien')
    }
}



afficherAliens()

let positionTireur = 250
let width = 20
let direction = 1
let versDroite = true

tableauJeu[positionTireur].classList.add('tireur')  // Afficher le tirreur


/* ******************************************************** */
/*     Fonction permettant de savoir si un alien touche     */
/*                  le mur gauche ou droit                  */
/* ******************************************************** */

// const murDroit = [19,39,59,79,99,119,139,159,179,199,219,239,259]
// const murGauche = [0,20,40,60,80,100,120,140,160,180,200,240]

function changerDirection() { // Fonction permettant de savoir si un alien touche le mur gauche ou droit

    for (let i = 0; i < tableauAlien.length; i++) {
       
        if (tableauAlien[i] == 19 || tableauAlien[i] == 39 || tableauAlien[i] == 59 || tableauAlien[i] == 79 || tableauAlien[i] == 99 || tableauAlien[i] == 119 || tableauAlien[i] == 139 || tableauAlien[i] == 159 || tableauAlien[i] == 179 || tableauAlien[i] == 199 || tableauAlien[i] == 219 || tableauAlien[i] == 239 || tableauAlien[i] == 259)  {
            console.log('mur Droit')
            return true
    
        }else if (tableauAlien[i] == 20 || tableauAlien[i] == 40 || tableauAlien[i] == 60 || tableauAlien[i] == 80 || tableauAlien[i] == 100 || tableauAlien[i] == 120 || tableauAlien[i] == 140 || tableauAlien[i] == 160 || tableauAlien[i] == 180 || tableauAlien[i] == 200 || tableauAlien[i] == 220 || tableauAlien[i] == 240 ){
            console.log('mur Gauche')
            return false
        }else
        console.log('map')
        
    }
}
console.log(changerDirection())

/* ****************************************************** */
/*    Fonction permettant de faire déplacer les aliens    */
/* ****************************************************** */

function deplacementAliens() {

    changerDirection()
    supprimerAliens()

    if (changerDirection() && versDroite) {              // Si un alien touche le mur droit on fait déscendre les aliens et on change le sens de direction
        for (let i = 0; i < tableauAlien.length; i++) {
            tableauAlien[i] += width    // Faire déscendre
            direction = -1              // Changer sens de direction
            versDroite = false
        }
    }
    
    else if(changerDirection() == false && !versDroite){    // Si un alien touche le mur gauche on fait déscendre les aliens et on change le sens de direction
        for (let i = 0; i < tableauAlien.length; i++) {
            tableauAlien[i] += width    // Faire déscendre
            direction = 1               // Changer sens de direction
            versDroite = true
        }
    }else

    for (let i = 0; i < tableauAlien.length; i++) { // Faire avancer les aliens dans la dernière direction donnée
        tableauAlien[i] += direction 
    }
    // console.log(tableauAlien)
    afficherAliens()
}



/* ************************************ */
/*    Fonction pour bouger le tireur    */
/* ************************************ */

document.addEventListener('keydown',function moveTireur(e){
    tableauJeu[positionTireur].classList.remove('tireur')

    console.log(positionTireur)
    if(positionTireur  >= 240  && positionTireur <= 259){

        if (e.key == 'ArrowLeft' && positionTireur > 240) {
            console.log('gauche')
            positionTireur -=1
        } 

        else if(e.key == 'ArrowRight' && positionTireur < 259) {
            console.log('droite')
            positionTireur +=1
        }

        else if(e.key == 'ArrowUp') {
            console.log('Up')
            positionTireur -= width ;

        }
        console.log(positionTireur)
    }

    else if(positionTireur  >= 220  && positionTireur <= 239){

        if (e.key == 'ArrowLeft' && positionTireur > 220) {
            console.log('gauche')
            positionTireur -=1
        } 

        else if(e.key == 'ArrowRight' && positionTireur < 239) {
            console.log('droite')
            positionTireur +=1
        }

        else if(e.key == 'ArrowUp') {
            console.log('Up')
            positionTireur -= width ;

        }

        else if(e.key == 'ArrowDown'){
            console.log('down')
            positionTireur +=width ; 
        }

        console.log(positionTireur)
    }

    else if(positionTireur  >= 200  && positionTireur <= 219){

        if (e.key == 'ArrowLeft' && positionTireur > 200) {
            console.log('gauche')
            positionTireur -=1
        } 

        else if(e.key == 'ArrowRight' && positionTireur < 219) {
            console.log('droite')
            positionTireur +=1
        }

        else if(e.key == 'ArrowDown'){
            console.log('down')
            positionTireur +=width ; 
        }

        console.log(positionTireur)
    }
    tableauJeu[positionTireur].classList.add('tireur')
});



let IntervalDeplacementAlien = setInterval(game, 500) // Permet dans lancé le déplacement des aliens donc de commencer la partie

/* ********************************************** */
/*     Fonction permettant de lancé la partie     */
/*                  et de l'arrêter               */
/* ********************************************** */

function game() {
    deplacementAliens()
    // for (let i = 0; i < tableauAlien.length; i++) {

        // if(tableauAlien[i] == positionTireur){
        if(tableauJeu[positionTireur].classList.contains('alien', 'tireur')){   // Si sur la position du tireur la case contient les classes 'alien' et 'tireur' on arrête le jeu
            console.log('sur tireur')
            clearInterval(IntervalDeplacementAlien)
            alert('vous avez perdu')
        }
        
         if(alienMort.length === tableauAlien.length){  //  Si la taille du tableau alienMort est égale à la taille du tableau tableauAlien on arrête le jeu
            console.log('fini')
            clearInterval(IntervalDeplacementAlien)
            alert('YOU WIN')
        }
        // }
        else{
            for (let i = 0; i < tableauAlien.length; i++) {
                if(tableauAlien[i] > tableauJeu.length-2){  //  Si un alien dépasse la taille du tableau on arrête le jeu 
                    clearInterval(IntervalDeplacementAlien)
                    alert('vous avez perdu hors zone')
                    
                }  
            }
        }

        
    // }
}


/* ******************************************** */
/*    Fonction permettant de tiré des lasers    */
/* ******************************************** */

let peuxTirer = true

document.addEventListener('keydown', function lesMissilles(e){
    let intervalLaser
    let posLaser = positionTireur
    
    console.log('1 : peuxTirer ' + peuxTirer)

    if(peuxTirer){
        
        console.log('2 : peuxTirer ' + peuxTirer)

        function missilles() {

            peuxTirer = false
            
            tableauJeu[posLaser].classList.remove('laser')
    
            posLaser -= width   // Faire monter le Laser
    
            tableauJeu[posLaser].classList.add('laser')
        
            if(posLaser >= 0 && posLaser <=19 ){    // Pour évité les érreurs si les lasers sorte de la grille
                tableauJeu[posLaser].classList.remove('laser')
                console.log('retirer')
                clearInterval(intervalLaser)
            }
            

            // for (let i = 0; i < tableauAlien.length; i++) {
                // if (posLaser == tableauAlien[i]) {

                if(tableauJeu[posLaser].classList.contains('alien')){   // Si la case où ce trouve le laser contient la classe 'alien'
                    clearInterval(intervalLaser)
                    console.log('toucher')
                    console.log(' toucher et peuxTirer ' + peuxTirer)
                    tableauJeu[posLaser].classList.remove('alien')  //  On supprime les classes 'alien' et 'laser' => ils disparaissent
                    tableauJeu[posLaser].classList.remove('laser')
                    tableauJeu[posLaser].classList.add('boom')      //  Et on fait apparaître l'explosion
    
                    // console.log(tableauJeu)
    
                    setTimeout(function() {tableauJeu[posLaser].classList.remove('boom')},100) //   Après 100 miliseconde on enlève la classe 'boom' donc on supprime l'explotion
    
                    const aliensToucher = tableauAlien.indexOf(posLaser)    //  On cherche dans le tableau tableauAlien l'index de l'alien qui a été touché par le laser
                    alienMort.push(aliensToucher)   //  Et on l'ajoute dans le tableau alienMort
                    // console.log(alienMort)
    
                }
            // }
        }

        // Si appuie Bar Espace
        if (e.key === ' ') { 
            intervalLaser = setInterval(missilles,50)
            setTimeout( function(){    peuxTirer = true ; console.log('PARÉ À TIRÉÉÉÉÉÉ') ; console.log(' 3 : peuxTirer ' + peuxTirer)},1000)
            //  Après 1 seconde mettre peuxTirer = true pour pouvroit retirer
            
            console.log('avant condition')
            console.log('2 : peuxTirer ' + peuxTirer)
        }
    }
})