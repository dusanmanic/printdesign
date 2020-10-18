function provera() {
    

    db.collection('login_info')
    .get()
    .then(snapshot => {
        if(!snapshot.empty) {
            let login_info = snapshot.docs
            login_info.forEach(user => {
                let userInfo = user.data()
                
                console.log(userInfo.log)
                

                

                if(userInfo.log) {
                    localStorage.setItem("abtn", "Update")
                    
                } else {
                    localStorage.setItem("abtn", "Log in")
                    
                }

                
            })
        }
    })
    .catch(error => {
        console.log(`Došlo je do greške: ${error}`)
    });

    

}
let textA = localStorage.getItem('abtn')
let promeniA = document.querySelector('.changeA').innerHTML = textA


provera()

function proveriEkran() {
    if(window.innerWidth < 450) {
        let li = document.querySelector('.removeLi')
        li.remove()
        console.log(`manje`)
    }
}
