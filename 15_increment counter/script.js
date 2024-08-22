const counters = document.querySelectorAll('.counter')


counters.forEach(counter =>{
    counter.innerText = '0'
    const  updateCounter = () => {
        // console.log(counter)
        const target = +counter.getAttribute('data-target')
        // console.log(target)
        const c = +counter.innerText
        // console.log(c)
        const increment = target / 200
        // console.log(increment)


        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 2)
            
        }
        else{
            counter.innerText = target
        }

        
        

       
    }

    updateCounter()
    
})

        
