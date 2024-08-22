const smallCups = document.querySelectorAll('.cup-small')
const liters= document.getElementById('liters')
const percentage = document.getElementById('percentage')
const  remained = document.getElementById('remained')


function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup.cup-small.full').length
    const totalCups = smallCups.length

    console.log(fullCups)



    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0  
    }
    else{  
        percentage.style.visibility = 'visible'
        percentage.style.height = `${(fullCups/totalCups)*330}px`
        percentage.innerText= `${(fullCups/totalCups) * 100}%`
    }



    if (fullCups === totalCups) {
        remained.style.visibility ='hidden'
        remained.style.height = 0
    }
    else{
        remained.style.visibility ='visible'
        liters.innerText = `${2-(250*fullCups)/1000}L`
    }

}

function highlightCups(id) {
    if (smallCups[id].classList.contains('full') && !smallCups[id].nextElementSibling.classList.contains('full')) {
        id = id - 1
    }

   smallCups.forEach((cup,id2)=>{
        if (id2 <= id) {
            cup.classList.add('full')
        }
        else{
           cup.classList.remove('full')
        }
   })

   updateBigCup()
    
}





smallCups.forEach((cup,id)=>{
    
    cup.addEventListener('click', () => {
        highlightCups(id)
    })

    
    
})