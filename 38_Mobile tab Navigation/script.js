const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('li')



function hide_all_contents() {
    contents.forEach(content =>{
        content.classList.remove('show')

    })
}
    

function hide_all_items() {
    listItems.forEach(li =>{
        li.classList.remove('active')

    }
    
    )
    
}

listItems.forEach((li, index)=>{

    li.addEventListener('click', ()=>{
        hide_all_items()
        hide_all_contents()

        li.classList.add('active')
        contents[index].classList.add('show')
        
        


    } )

})


