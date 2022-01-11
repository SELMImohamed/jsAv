const  grille = document.querySelector('.grille');

var tablJeu = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],


];

affichertabl();

function affichertabl() {
   var txt ="";
for(var i=0; i<tablJeu.length;i++){
    txt += "<div>";
    for(var j=0; j<tablJeu[i].length;j++){
        txt += "<img src='ressources/ennemies.png' style'width:100px;height:100px;height:100px'class='m'>"
    }
    txt += "</div>";
}
grille.innerHTML = txt;

}