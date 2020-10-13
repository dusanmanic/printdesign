let homeText = document.querySelector('.homeText');
let contactText = document.querySelector('.contactText');


function homePageText() {
    let niz = ["<img src='./img/logo.png' width='70%' class='logoPocetna'>", "Štampa velikih formata", "Dizajn i idejna rešenja", "Uvek dostupni za Vas", "Pogledajte naše radove...", "<a href='onama.html'>Galerija...</a>" ]

    for(let i=0; i<niz.length; i++) {
        setTimeout(() => {
            homeText.innerHTML = niz[i]
        }, 3500 * i)
    }
    
}

homePageText()
