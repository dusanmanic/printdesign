let homeText = document.querySelector('.homeText');
let contactText = document.querySelector('.contactText');


function homePageText() {
    let niz = ["<img src='./img/logo.png' width='70%' class='logoPocetna'>", "Štampa velikih formata", "Dizajn i idejna rešenja", "Uvek dostupni za Vas", "Pogledajte naše radove u galeriji..." ]
    let brojka = 0;
    for(let i=0; i<niz.length; i++) {
        setTimeout(() => {
            homeText.innerHTML = niz[i]
        },brojka = 3500 * i)
    }
    // setTimeout(() => {
    //     window.location="../pages/galerija.html"
    // },brojka + 5000)
    
}

homePageText()
