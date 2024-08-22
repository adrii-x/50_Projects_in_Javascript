const loadtext= document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring,30)


function blurring(){
    
    load++

    if (load<101) {
        loadtext.innerHTML = load+'%'
        // bg.style.opacity = (((load)/100))
        loadtext.style.opacity = (1-((load)/100))
        bg.style.filter = `blur(${(1-(load/100))*20}px)`
    }
    else{
        
        clearInterval(int)
    }
    console.log(load)
}