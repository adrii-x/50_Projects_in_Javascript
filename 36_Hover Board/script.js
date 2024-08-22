const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares_=400

function getRandomColor() {
 let rand = colors[Math.floor(Math.random()*colors.length)]
    return rand
    
}

function set_color(element) {
    const color = getRandomColor()
    element.style.background = `${color}`
    element.style.boxShadow = `0 0 4px ${color}, 0 0 12px ${color} `

    
}
function remove_color(element) {
    element.style.background = `#1d1d1d`
    element.style.boxShadow = `0 0 2px #000`

    
}

for (let i = 0; i < squares_; i++) {
    const element = document.createElement('div');
    element.classList.add('square')
    container.appendChild(element)
    element.addEventListener('mouseover', ()=>{
        set_color(element)
    }) 
    element.addEventListener('mouseout', ()=>{
        remove_color(element)
    })
}



