const ratings = document.querySelectorAll('.rating')
const send = document.querySelector('#send')
const rate_container = document.querySelector('.ratings-container')
const panel = document.querySelector('#panel')
let rated = 'Satisfied'


function remover() {
    for (let i = 0; i < ratings.length; i++) {
        console.log(ratings.length)
        
        ratings[i].classList.remove('active')
        console.log(ratings)
        
    }
    
}

send.addEventListener('click', (e)=>{
    panel.innerHTML =`
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${rated}</strong>
        <p>We'll use your feed back to improve our customer support</p>

    `
})



rate_container.addEventListener('click', (e)=>{
   

    if (e.target.parentNode.classList.contains('rating')) {
        remover()
        e.target.parentNode.classList.add('active')
        rated = e.target.parentNode.childNodes[3].innerHTML
        console.log(rated)

        
    }
})