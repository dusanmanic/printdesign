///////////////////////////////////////////////////////
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
                console.log(datumProvera)

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
/////////////////////////////////////////////////////////

function logging() {
    let user = document.getElementById('username')
    let pass = document.getElementById('password')
    let p = document.querySelector('p')

    localStorage.setItem('curentUser', user.value)

    console.log(`Radi`)

    db.collection('login_info')
    .get()
    .then(snapshot => {
        if(!snapshot.empty) {
            let login_info = snapshot.docs
            login_info.forEach(user => {
                let userInfo = user.data()

                if(localStorage.getItem('curentUser') === userInfo.information.user && pass.value === userInfo.information.pass) {

                    p.innerHTML = 'Uspesno ste se logovali !'
                    let datum = new Date();
                    let update = {
                        logged_in: firebase.firestore.Timestamp.fromDate(datum),
                        log: true
                    }

                    db.collection('login_info').doc(`${userInfo.information.user}`).update(update)
                    
                    setTimeout(() => {
                        window.location.href = "../pages/uploadPage.html"
                    }, 1500)
                } else {
                    p.innerHTML = 'Username ili password <br> nije tačan'
                }
                
            })
        }
    })
    .catch(error => {
        console.log(`Došlo je do greške: ${error}`)
    });
}

////////////////////////////////////////////////////////////////////////
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
                        window.location.href = "./login.html"
                    }, 1500)
                }
                
            })
        }
    })
    .catch(error => {
        console.log(`Došlo je do greške: ${error}`)
    });
}

// Ubaciti u skriptu
//checker()