const text = document.getElementById('text')
const speed = document.getElementById('speed')
const test = 'We love Programming.'
let idx = 1

let speeder = 100/ (1*speed.value)



function writeText() {
    text.innerText = test.slice(0, idx)

    idx++

    if (idx > test.length) {
        idx = 1
        
    }

    
    setTimeout(writeText, speeder)
    
}

writeText()





speed.addEventListener('input',()=>{
    speeder = 100/ (1*(speed.value))
    

} )



