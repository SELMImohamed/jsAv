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

function displayAliens( ) {  // Afficher les aliens
  for (let i = 0; i < tableauAlien.length; i++) {
     tableauJeu [tableauAlien [i]].classList.add('alien')
  }
}

displayAliens()

let positionTireur = 250
let width = 20
const minwidth = 240
const maxwidth = 260

tableauJeu[positionTireur].classList.add('tireur')

function moveTireur(e){
  tableauJeu[positionTireur].classList.remove('tireur')
  switch (e.key) {
    case 'ArrowLeft':
      console.log("gauche press")
      console.log(positionTireur )

      if(positionTireur  > minwidth  ) positionTireur -=1
      break
    case 'ArrowRight':
      console.log("droite press")
      console.log(positionTireur )
      if(positionTireur  < maxwidth - 1 ) positionTireur +=1
      break
  }
  tableauJeu[positionTireur].classList.add('tireur')
}
document.addEventListener('keydown', moveTireur)