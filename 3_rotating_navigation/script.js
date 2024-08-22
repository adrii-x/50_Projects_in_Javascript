const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


console.log(container)
console.log(open)
console.log(close)

open.addEventListener('click',()=>{
    
    container.classList.add('shownav')
    
 });

close.addEventListener('click',()=>{
    container.classList.remove('shownav')
    
});