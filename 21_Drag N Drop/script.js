const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')



fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)


for (empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragover', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
    
}
function dragStart() {
    // fill.classList.add('hold')
    this.className += ' hold'
    setTimeout(()=>{
        this.className = 'invisible'
    },0)

    
    
    
}

function dragEnd() {
    this.className='fill'
    
}

function dragOver(e) {
    e.preventDefault()
    console.log('drag over');
    
}

function dragLeave() {
    console.log('drag leave');
    this.className= 'empty'
    
}


function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
    console.log('drag enter');
    
}
function dragDrop() {
    this.className = 'empty'
    // this.classList.add('fill') 
    this.append(fill)
    console.log('drag drop');
    
}
