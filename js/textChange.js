let homeText = document.querySelector('.homeText');
let contactText = document.querySelector('.contactText');


function homePageText() {
    let niz = ["<img src='./img/logo.png' width='70%' class='logoPocetna'>", "Štampa velikih formata", "Dizajn i idejna rešenja", "Uvek dostupni za Vas", "Pogledajte naše radove u galeriji..." ]
    for(let i=0; i<niz.length; i++) {
        setTimeout(() => {
            homeText.innerHTML = niz[i]
        },3000 * i)
    }
    // setTimeout(() => {
    //     window.location="../pages/galerija.html"
    // },brojka + 5000)
    
}

let tempImg1 = new Image()
let tempImg2 = new Image()
let tempImg3 = new Image()
let tempImg4 = new Image()
let tempImg5 = new Image()
tempImg1.src = "./img/lights.jpg"
tempImg2.src = "./img/nature.jpg"
tempImg3.src = "./img/mountains.jpg"
tempImg4.src = "./img/laserslika.jpg"
tempImg5.src = "./img/back.jpg"

function homePageImage() {
    let niz = [tempImg1, tempImg2, tempImg3, tempImg4, tempImg5 ]
    for(let i=0; i<niz.length; i++) {
        setTimeout(() => {
            document.body.style.backgroundImage = `url(${niz[i].src})`
        },3300 * i)

    }    

}

homePageImage()
homePageText()


