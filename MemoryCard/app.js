const cartes = document.querySelectorAll('.carte')

let carteRetourné = false;
let lockBoard = false;
let premièreCarte, secondeCarte

let tab = []

cartes.forEach(carte => carte.addEventListener('click',carteReturn))
function carteReturn(card){
    card.target.parentNode.classList.add('active')
    if (!carteRetourné){
        carteRetourné = true;
        premièreCarte = this

      
      
        
    }
    else {
        secondeCarte = this 
    }
    checkCard()
}
function checkCard(){
    if (premièreCarte.getAttribute("data-attr") === secondeCarte.getAttribute("data-attr")){
        premièreCarte.removeEventListenner('click',carteReturn)
        secondeCarte.removeEventListenner('click',carteReturn)
    }
    else {
        setTimeout(()=>{
            premièreCarte.childNodes[1].classList.remove('active')
            secondeCarte.childNodes[1].classList.remove('active')
            //console.log(premièreCarte.childNodes);
            //console.log(secondeCarte.childNodes);

            
        
            
        },1500)

       
        
    }

}



/*function carteTourner() {
    if (lockBoard) return;
    if ( this == premièreCarte) return;

    if (!carteRetourné){
        carteRetourné = true;
        premièreCarte = this;
        return
    }



    
}*/


/*document.addEventListener ( 'click',(e) => {
    if (e.target.classList.contains('arriere')){
        console.log(e.target.parentNode.parentNode.getAttribute('data-attr')) 

        
        e.target.parentNode.classList.toggle('active') 

        tab.push(e.target.parentNode.parentNode.getAttribute('data-attr'))
        console.log(tab)

    }

    


} )*/






