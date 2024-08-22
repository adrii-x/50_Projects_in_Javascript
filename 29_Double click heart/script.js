const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')
let likes = 0
let clickTime = 0

// loveMe.addEventListener('dblclick' , (e)=>{
//     console.log(123)
// })
loveMe.addEventListener('click' , (e)=>{
    if (clickTime===0) {
        clickTime = new Date().getTime()
        
    }
    else{
        if ((new Date().getTime()- clickTime)<800) {
            createHeart(e)

            clickTime = 0
            
        }
        else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e)=>{
    likes++
    
    times.innerText = likes
    
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const left_start= e.target.offsetLeft
    const top_start= e.target.offsetTop


    const xinside = x-left_start
    const yinside = y-top_start
    console.log(xinside,yinside);


    heart.style.top = `${yinside}px`
    heart.style.left = `${xinside}px`

    loveMe.appendChild(heart)



    setTimeout(() => {
        heart.remove()
    }, 1000);


    
}