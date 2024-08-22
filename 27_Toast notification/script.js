const button = document.getElementById('btn')
const toasts = document.getElementById('toasts')
 index = 4

const messages = [
    'Messages One',
    'Messages Two',
    'Messges three',
    'Messages Four',

]

const type = [
    'info','success', 'error'
]


button.addEventListener('click', ()=>{
    const another = document.createElement('div')
    let types = Math.floor(Math.random()*type.length)
    another.classList.add(`${type[types]}`)
    another.classList.add('toast')
    let rand = Math.floor(Math.random()*index)
    
    another.innerText = messages[rand]
    toasts.appendChild(another)
    setTimeout(() => {
        another.remove()
    }, 6000);
})