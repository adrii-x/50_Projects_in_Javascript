const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', ()=>{
    console.log(window.innerHeight)
    const triggerbuttom=(window.innerHeight/5 *4)

    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerbuttom) {
            box.classList.add('show')   
        }
        else{
            box.classList.remove('show')
        }
    })

})