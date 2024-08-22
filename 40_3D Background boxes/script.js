const container = document.getElementById('boxes')
const button = document.getElementById('button')

const max = 16
const x= [0,-125,-250,-375]
const y= [0,-125,-250,-375]
const listy =[]
const listx =[]

function box_maker() {

    y.forEach(value=>{
        x.forEach(val=>{
            listy.push(value)
            listx.push(val)
            
        })
    })


    for (let index = 0; index < max; index++) {
        const box = document.createElement('div')
        box.classList.add('box')

        container.appendChild(box)

        box.style.backgroundPositionX = `${listx[index]}px`
        box.style.backgroundPositionY = `${listy[index]}px`
    } 
    
}

box_maker()


button.addEventListener('click', ()=>{
    container.classList.toggle('big')
})






// const boxesContainer = document.getElementById('boxes')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

// function createBoxes() {
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       const box = document.createElement('div')
//       box.classList.add('box')
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
//       boxesContainer.appendChild(box)
//     }
//   }
// }

// createBoxes()
