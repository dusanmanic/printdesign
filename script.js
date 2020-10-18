let textA = localStorage.getItem('abtn')
let promeniA = document.querySelector('.changeA').innerHTML = textA


function proveriEkran() {
    if(window.innerWidth < 450) {
        let li = document.querySelector('.removeLi')
        li.remove()
        console.log(`manje`)
    }
}
