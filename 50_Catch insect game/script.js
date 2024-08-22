const screens = document.querySelectorAll('.screen')

const choose_insect_buttons  = document.querySelectorAll('.choose-insect-btn')

const start_button =  document.getElementById('start-button')

const game_container =  document.querySelector('.game-container')
console.log(game_container)

const time =  document.getElementById('time')
const scored =  document.getElementById('score')
const message = document.getElementById('message')


let seconds = 0

let score = 0

let selected_insect = {}

 
function get_random_location() {
    const width = window.innerWidth

    const height = window.innerHeight

    const x = Math.random() * (width-200) + 100
    const y = Math.random() * (height-200) + 100

    return  {x, y}

    
}

function increase_score() {
    score++

    if(score>19){
        message.classList.add('visible')

    }

    scored.innerHTML=`Score: ${score}`
}
function add_insects() {
    setTimeout(create_insect,1000)
    setTimeout(create_insect,1500)
    

}

function catch_insect() {
    increase_score()

    this.classList.add('caught')

    setTimeout(() => {
        this.remove(),2000
    }, 2000);


    add_insects()
    
}

function create_insect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = get_random_location()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform:rotate(${Math.random()*360}deg)" />`

    // insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    
    game_container.appendChild(insect)

    insect.addEventListener('click', catch_insect)
    
}








start_button.addEventListener('click', ()=>{
    screens[0].classList.add('up')
})



function increase_time() {
    let m = Math.floor(seconds/60)

    let s = seconds % 60

    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s

    time.innerHTML = `Time: ${m}: ${s}`
    seconds++

}


function start_game() {
    setInterval(increase_time, 1000)
    
}

choose_insect_buttons.forEach(insect_button =>{
    insect_button.addEventListener('click',()=>{
        // const img  = insect_button.childNodes[3]
        const img = insect_button.querySelector('img')
        // console.log(img)
        const src = img.getAttribute('src')
        // console.log (src)

        const alt = img.getAttribute('alt')
        selected_insect ={src,alt}
        screens[1].classList.add('up')
        setTimeout(create_insect, 1000)
        start_game()

    })
})