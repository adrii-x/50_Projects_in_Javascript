const body = document.body
const slides = document.querySelectorAll('.slide')
const left = document.getElementById('left')
const right = document.getElementById('right')


let activeSlide = 0



function setBg() {
    body.style.backgroundImage= slides[activeSlide].style.backgroundImage
}

function setSlide() {

    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[activeSlide].classList.add('active')
    
}

setSlide()
setBg()

right.addEventListener('click', ()=> {
    activeSlide++

    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }

    setSlide()
    setBg()
})

left.addEventListener('click', ()=> {
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }

    setSlide()
    setBg()
})


