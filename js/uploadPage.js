function checker() {
    
    db.collection('login_info')
    .get()
    .then(snapshot => {
        if(!snapshot.empty) {
            let login_info = snapshot.docs
            login_info.forEach(user => {
                let userInfo = user.data()
                
                datum = new Date (),
                datumProvera = new Date ( datum );
                datumProvera.setMinutes ( new Date().getMinutes() + 30 );

                let trenutniUser = localStorage.getItem('curentUser')
                console.log(trenutniUser)
                
                if(userInfo.log && trenutniUser === userInfo.information.user) {
                    document.body.style.display = "block"
                    console.log(`Korisnik je logovan`)
                } else {
                    window.location.href = '../login/login.html'
                }
            })
        }
    })
    .catch(error => {
        console.log(`Došlo je do greške: ${error}`)
    });
}
checker()

function logout () {
    db.collection('login_info')
    .get()
    .then(snapshot => {
        if(!snapshot.empty) {
            let login_info = snapshot.docs
            login_info.forEach(user => {
                let userInfo = user.data()
                
                datum = new Date (),
                datumProvera = new Date ( datum );
                datumProvera.setMinutes ( new Date().getMinutes() + 30 );
                console.log(datumProvera)

                if(localStorage.getItem('curentUser') === userInfo.information.user) {

                    let datum = new Date();
                    let update = {
                        logged_in: firebase.firestore.Timestamp.fromDate(datum),
                        log: false
                    }

                    db.collection('login_info').doc(`${userInfo.information.user}`).update(update)
                    
                    setTimeout(() => {
                        window.location.href = "../index.html"
                    }, 1500)
                }
                
            })
        }
    })
    .catch(error => {
        console.log(`Došlo je do greške: ${error}`)
    });
}

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
    let slikaIme = new Date()
    
    if(slika.length >= 0) {

        for(let i=0; i<slika.length; i++) {

            toStorage = storage.ref(`images/${izabranaKategorija}/${slikaIme.setSeconds(slikaIme.getSeconds() + i)}`)
            toStorage.put(slika[i])
            // console.log(slika[i])
            // console.log(slika[i].name)
            //console.log(slikaIme)
            }
    }


})
localStorage.setItem('vrednost', "nije")
let btnPromeni = document.querySelector('.promeni')
let clicked = 0;
let vrednost
let localStorageVrednost = localStorage.getItem("vrednost")

console.log(localStorageVrednost)

if(localStorageVrednost.includes("jeste")) {
    btnPromeni.innerHTML = `"obrisi" dugme ukljuceno`
    clicked = 0;
} else {
    btnPromeni.innerHTML = `"obrisi" dugme iskljuceno`
    clicked = 1;
}

btnPromeni.addEventListener('click', event => {
    event.preventDefault()
    clicked++
    console.log(clicked)
    
    if(clicked == 1) {
        btnPromeni.innerHTML = `"obrisi" dugme iskljuceno`
        localStorage.setItem('vrednost', "nije")
    } else if(clicked == 2) {
        btnPromeni.innerHTML = `"obrisi" dugme ukljuceno`
        localStorage.setItem('vrednost', "jeste")
        clicked = 0        
    }
    console.log(localStorage.getItem("vrednost"))

})


