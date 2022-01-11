// const divResultat = document.querySelector("grille");
var tablJeu = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    ];

// afficherTableau1();
// function afficherTableau1(){
//     let parentNode = document.querySelector('.grille')
//     let element = document.createElement('p')
//     parentNode.appendChild(element)
//     element.innerHTML = 'tete'

//     tabJeu.forEach(function(index){
//         console.log(index);
        
//     })
// }

const  grille = document.querySelector('.grille');
affichertabl();

function affichertabl() {
    let parentNode = document.querySelector('.grille')
    let element = document.createElement('div')
    element.setAttribute('id','ennemiesVaisseau')
    parentNode.appendChild(element)
    element.style.width ='500px'

    var txt ="";
    for(var i=0; i<tablJeu.length;i++){
        for(var j=0; j<tablJeu[i].length;j++){
            txt += "<img src='ressources/ennemies.png' class='m'>"
        }
    }
    element.innerHTML = txt;
}