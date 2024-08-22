const tags= document.getElementById('tags')
const textarea= document.getElementById('textarea')

textarea.focus()

 function createTags(value) {
    const items = value.split(',')
    .filter(tag => tag.trim()!== '')
    .map(tag => tag.trim())
    
    tags.innerHTML=''

    items.forEach(item => {
        const element = document.createElement('span')
        element.setAttribute('class', 'tag')
        element.innerHTML= item
        tags.appendChild(element)
    });
    
 }

 function randomSelect() {
    const times = 30

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()

        

        highlight(randomTag)

        setTimeout(() => {
            unhighlight(randomTag)
        }, 100);

    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlight(randomTag)
            
        }, 100);
        
    }, times*100);
    
 }

 function pickRandomTag(){
    const picks = document.querySelectorAll('.tag')
    return picks[Math.floor(Math.random() * picks.length)]
 }

 function highlight(tag){
    console.log(tag)
    tag.classList.add('highlight')
    
 }
 function unhighlight(tag){
    tag.classList.remove('highlight')
 }


textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)
     if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value=''
        }, 100);
        randomSelect()
     }
})