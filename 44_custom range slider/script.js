const range = document.getElementById('range')


range.addEventListener('input', (e) =>{
    const value = e.target.value
    e.target.parentNode.childNodes[3].innerHTML = value

    let boxX=50-value
    let boxY=value-50


    if (value>50) {
        let final1 = +value - 0.06*(boxY)

        console.log(e.target.parentNode.childNodes[3].style.left = `${((final1/100)*300)}px`);
        
        
    }
    else if (value<50) {
        let final2 = +value + 0.06*(boxX)
        
        console.log(e.target.parentNode.childNodes[3].style.left = `${((final2/100)*300)}px`);
        
    }
    else{
        let final = 50
        console.log(e.target.parentNode.childNodes[3].style.left = `${((final/100)*300)}px`);
    }

    


    // console.log(e.target.parentNode.childNodes[3].style.left = `${((value/100)*300)}px`);

    
})