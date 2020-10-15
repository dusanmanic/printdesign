let uploadDiv = document.querySelector('.uploadDiv')
let kategorija = document.getElementById('kategorija')
let fileUpload = document.querySelector('#fileUpload')
let izabranaKategorija
let toStorage


function izaberiKategoriju() {

    let p = document.querySelector('.upisiKategoriju')

    p.innerHTML = kategorija.value
    izabranaKategorija = kategorija.value
    console.log(kategorija.value)
}
fileUpload.addEventListener('change', event => {
    // console.log(event.target.files)
    // console.log(event.target.files[0])
    // console.log(event.target.files[0].name)
    // console.log(event.target.files.length)
    
    // let slika = event.target.files[0]
    // let slikaIme = event.target.files[0].name
    // toStorage = storage.ref(`images/${izabranaKategorija}/${slikaIme}`)
    // toStorage.put(slika)

    let slika = event.target.files
    
    if(slika.length >= 0) {

        for(let i=0; i<slika.length; i++) {

            toStorage = storage.ref(`images/${izabranaKategorija}/${slika[i].name}`)
            toStorage.put(slika[i])
            // console.log(slika[i])
            // console.log(slika[i].name)
            }
    }


})

console.log(izabranaKategorija)