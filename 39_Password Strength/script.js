const password = document.querySelector('#password')
const background = document.querySelector('#background')


password.addEventListener('input', (e)=>{
   const inputed = e.target.value
   
   const length = inputed.length
//    console.log(length)
   const blur = 20 - (length * 2)

   background.style.filter = `blur(${blur}px)`

})