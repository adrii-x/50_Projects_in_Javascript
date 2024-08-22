const result = document.getElementById('result')
const length = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generate = document.getElementById('generate')
const clipboard = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandLower,
    upper: getRandUpper,
    number: getRandNumber,
    symbol: getRandSymbol

}


generate.addEventListener('click',()=>{
    const len = +length.value
    const low_case = lowercase.checked
    const  up_case = uppercase.checked
    const  num = numbers.checked
    const  sym = symbols.checked
    result.innerText = generatePassword(len, low_case,up_case,num ,sym);

    


})


copied.addEventListener('click', ()=>{
    const Textarea = document.createElement('textarea')
    const password = result.innerText

    if (password===' ' ) {
        return null
    }

    else if(password===''){
        return null
    
    }
    else{
        Textarea.value = password
        document.body.appendChild(Textarea)
        Textarea.select()
        document.execCommand('copy')
        Textarea.remove()
        alert('password copied to clipboard')
    }

})

function generatePassword(len, lower,upper,number ,symbol) {
    let generatedPassword= ''
    const count = lower  + upper + number + symbol
    const arr = [{lower},{upper},{number} ,{symbol}].filter((items) => Object.values(items)[0])
    console.log(arr)
    console.log(count)

    if (count === 0) {
        return ' '

    }



    for (let i = 0; i < len; i+= count) {
        console.log(i)
        arr.forEach(type => {
            const funcName = Object.keys(type)[0]
            console.log(funcName)
            generatedPassword += randomFunc[funcName]()
            // console.log(randomFunc[funcName])
            
            
        });
        
    }
    console.log(generatedPassword);


    let answer1 = (generatedPassword.split(''))
    let answer2 = answer1.sort(() => (Math.random() > .5) ? 1 : -1).toString().replaceAll(',','')
        
    

    return (answer2.slice(0,len)) 

    
    
}


function getRandLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandNumber() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[(Math.floor(Math.random()*symbols.length))]
}

