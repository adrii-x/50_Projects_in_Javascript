const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')


toggles.forEach(toggle =>{
    toggle.addEventListener('change', (e) =>{doTheTrick(e.target)})
})

function doTheTrick(theCLickOne){
    
    if (good.checked && cheap.checked && fast.checked) {
        if( good === theCLickOne){
            fast.checked = false

        }
        if( cheap === theCLickOne){
            good.checked = false

        }
        if( fast === theCLickOne){
            cheap.checked = false

        }
        
    }


}
