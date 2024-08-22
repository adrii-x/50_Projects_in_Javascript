const sliderContainer = document.querySelector('.slider-container')
const right = document.querySelector('.right-slide')
const left = document.querySelector('.left-slide')
const up = document.querySelector('.up-button')
const down = document.querySelector('.down-button')
const slidesLength = right.querySelectorAll('div').length

// console.log(slidesLength)
let index=0

left.style.top = `-${(slidesLength - 1) * 100}vh`



up.addEventListener('click', ()=> changeSlides('up'))
down.addEventListener('click', ()=> changeSlides('down'))



const changeSlides = (direction)=>{
    const sliderHight = sliderContainer.clientHeight
    if (direction==='up') {
        index++
        if (index >slidesLength-1) {
            index = 0
        }
        
    }
    else if (direction==='down') {
        index--
        if (index < 0 ) {
            index = slidesLength-1
        }
        
    }
    console.log(right)
    right.style.transform =`translateY(-${index * 100}vh)`

    left.style.transform =`translateY(+${index * 100}vh)`

}





