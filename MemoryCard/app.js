const cartes = document.querySelectorAll('.carte')

let carteRetourné = false;
let premièreCarte, secondeCarte

let tab = []

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('arriere')){
        console.log(e.target.parentNode.parentNode.getAttribute("data-attr"))
        carteReturn(e.target)
    }
} )

document.addEventListener("mouseover",(e)=>{
    if(e.target.classList.contains('arriere')){
        e.target.style.cursor='pointer';
    }
})

function carteReturn(card){
    console.log(card)
    card.parentNode.classList.add('active')
    if (!carteRetourné){
        carteRetourné = true;
        premièreCarte = card.parentNode.parentNode

    }
    else {
        secondeCarte = card.parentNode.parentNode
        checkCard(premièreCarte,secondeCarte)
        carteRetourné = false
    }
    // console.log(premièreCarte)
    // console.log(secondeCarte)
}

function checkCard(premièreCarte , secondeCarte){
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

