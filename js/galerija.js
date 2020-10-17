import {showImages} from "./posalji.js"

let text
let img = document.querySelectorAll('img')
let divContainer = document.querySelector('.galTumb')

img.forEach(slike => {
    slike.addEventListener('click', event => {
    
            text = event.target.id
        
            divContainer.remove()
            
            showImages(`${text}`)
        
        })
})





