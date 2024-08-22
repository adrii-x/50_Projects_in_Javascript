const faqs = document.querySelectorAll('.faq')
const btn = document.querySelectorAll('.faq-toggle')


btn.forEach((button,idx)=> {
    
    button.addEventListener('click', ()=>{
        // console.log(button)
        // console.log(idx)
        faqs[idx].classList.toggle('active')
    })
});