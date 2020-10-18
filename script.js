let textA = localStorage.getItem('abtn')
let promeniA = document.querySelector('.changeA')

if(textA != null) {
    promeniA.innerHTML = textA
} else {
    promeniA.innerHTML = "Log in"
}

function proveriEkran() {
    if(window.innerWidth < 450) {
        let li = document.querySelector('.removeLi')
        li.remove()
        console.log(`manje`)
    }
}
