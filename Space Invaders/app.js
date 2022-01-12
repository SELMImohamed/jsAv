
const grilleJeu = document.querySelector('.grille')

//  Création d'une grille sur toute la zone de combat
for (let i = 0; i < 260; i++) { 
  const zoneAlien = document.createElement('div')
  grilleJeu.appendChild(zoneAlien)  //  Ajouté ces div en temps que enfants de la div grille
}

const tableauJeu = Array.from(document.querySelectorAll('.grille div')) //  Mettre toutes les div dans un tableau
console.log(tableauJeu)

const tableauAlien = [   //  Ajouté les index de où ce trouveront les aliens
  0,1,2,3,4,5,6,7,8,9,
  20,21,22,23,24,25,26,27,28,29,
  40,41,42,43,44,45,46,47,48,49,
]

function afficherAliens( ) {  // Afficher les aliens
  for (let i = 0; i < tableauAlien.length; i++) {
     tableauJeu [tableauAlien [i]].classList.add('alien')
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

tableauJeu[positionTireur].classList.add('tireur')

// const murDroit = [19,39,59,79,99,119,139,159,179,199,219,239,259]
// const murGauche = [0,20,40,60,80,100,120,140,160,180,200,240]

function changerDirection() {
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

function deplacementAliens() {

    changerDirection()
    supprimerAliens()

    if (changerDirection() && versDroite) {
        for (let i = 0; i < tableauAlien.length; i++) {
            tableauAlien[i] += width 
            direction = -1
            versDroite = false
        }
    }else if(changerDirection() == false && !versDroite){
        for (let i = 0; i < tableauAlien.length; i++) {
            tableauAlien[i] += width 
            direction = 1
            versDroite = true
        }
    }else

    for (let i = 0; i < tableauAlien.length; i++) {
        tableauAlien[i] += direction 
    }
    // console.log(tableauAlien)
    afficherAliens()
}

// setInterval(deplacementAliens, 200);

function moveTireur3(e){
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
}
document.addEventListener('keydown', moveTireur3)


let IntervalDeplacementAlien = setInterval(game, 200)

function game() {
    deplacementAliens()
    for (let i = 0; i < tableauAlien.length; i++) {

        if(tableauAlien[i] == positionTireur){
            console.log('sur tireur')
            clearInterval(IntervalDeplacementAlien)
            alert('vous avez perdu')
        }else
        console.log('pas sur tireur')

        
    }
}