const canvas = document.getElementById('canvas');
const increaser = document.getElementById('increase');
const decreaser = document.getElementById('decrease');
const sizer = document.getElementById('size');
const colorer = document.getElementById('color');
const clear = document.getElementById('clear');
console.log(colorer)

const ctx = canvas.getContext('2d');
console.log(Math.PI);

 let  isPressed = false
 let size = 10

 let color = 'black'

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc( x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
    
}


function drawLine(x1,y1, x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size*2
    ctx.stroke()
    
}


colorer.addEventListener('change', (e)=>{
    console.log(colorer)
    color = e.target.value
})

increaser.addEventListener('click', (e)=>{
    if (size<=29) {
        size++
        sizer.innerHTML= `${size}`
        
    }
    else{
        size=30
    }
    
})
decreaser.addEventListener('click', (e)=>{
    if (size>1) {
        size--
        sizer.innerHTML= `${size}`
        
    }
    else{
        size=1
    }
   
    
})

clear.addEventListener('click', ()=> ctx.clearRect(0,0, canvas.width, canvas.height))



canvas.addEventListener('mousedown', (e)=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY

})

canvas.addEventListener('mousemove', (e)=>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        

        drawCircle(x2,y2)
        drawLine(x,y, x2,y2)

        y = y2
        x = x2


    }})

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false  
    // x = undefined  
    // y = e.offsetY
})
