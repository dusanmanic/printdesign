let homeText = document.querySelector('.homeText');
let contactText = document.querySelector('.contactText');


function homePageText() {
    let niz = ["<img src='./img/logo.png'>", "Štampa velikih formata", "Dizajn i idejna rešenja", "Uvek dostupni za Vas", "Pogledajte u galeriji naše radove...", "<a href='www.google.com'><img src='./img/logo.png'></a>" ]

    for(let i=0; i<niz.length; i++) {
        setTimeout(() => {
            homeText.innerHTML = niz[i]
        }, 3500 * i)
    }
    
}

homePageText()
