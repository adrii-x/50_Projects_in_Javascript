const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')
console.log(circles.length);
let ActiveNum = 0




next.addEventListener('click', ()=>{
    ActiveNum++
    prev.disabled = false
    if (ActiveNum > circles.length-1) {
        ActiveNum = circles.length-1
        console.log(ActiveNum)
    }
    else if ((ActiveNum>-1) && (ActiveNum<4)) {
        console.log(ActiveNum / (circles.length-1))
        progress.style.width = ((ActiveNum / (circles.length-1))*100 + '%') 
        circles.forEach((circle, id)=>{
            // console.log( id)
            // console.log(ActiveNum)
            if ((ActiveNum >= id) && (id>0)){
                // console.log(circle);
                circle.classList.add('active')
                
            }
            else if(ActiveNum === 3){
                next.disabled = true
                prev.disabled = false
            }
        }) 
    }
    
    else{
        next.disabled = false
    }   
        
    
})

prev.addEventListener('click', ()=>{

    ActiveNum--
    next.disabled = false
    if ((ActiveNum>-1) && (ActiveNum<4)) {
        console.log(ActiveNum/ (circles.length-1))
        progress.style.width = ((ActiveNum / (circles.length-1))*100 + '%')  
        circles.forEach((circle, id)=>{
            // console.log( id)
            // console.log(ActiveNum)
            
            if ((ActiveNum < id) && (id>0)) {
                
                circle.classList.remove('active')
                
            }
            else if(ActiveNum === 0){
                next.disabled = false
                prev.disabled = true
            }
        })
        }
    
    else if (ActiveNum < 0 ) {
        ActiveNum = 0
        console.log(ActiveNum)            
    }

    else{
        prev.disabled = false
    }
})
