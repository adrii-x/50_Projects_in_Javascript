const imgs = document.querySelector('#imgs')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run,2000)

function changeImage() {
    if (idx > img.length-1) {
        idx = 0
    }else if(idx < 0){
        idx = img.length-1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
    console.log(imgs.style)

    
}

function run() {
    idx++
    changeImage()
    console.log(idx)
}

function reset(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

left.addEventListener('click', ()=>{
    idx--
    reset()
    changeImage()
})

right.addEventListener('click', ()=>{
    idx++
    reset()
    changeImage()
})