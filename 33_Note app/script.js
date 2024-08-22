const add = document.querySelector('#add')
const retrieved_notes = JSON.parse(localStorage.getItem('notes'))

if (retrieved_notes) {
    retrieved_notes.forEach(note => addNewNote(note))
    
}

add.addEventListener('click', ()=>{
    addNewNote()
})

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML=`
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>


    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>

    

    `
    document.body.prepend(note)
    const edit = note.querySelector('.edit')
    const del = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textarea = note.querySelector('textarea')
    textarea.value = text
    console.log(text)
    main.innerHTML= marked(text)



    textarea.addEventListener('input',(e)=>{
        // console.log(textarea.value)
        // console.log(e.target.value)
        const {value} = e.target

        main.innerHTML = marked(value)

        updateLS()
        

    })
    


    
    
    del.addEventListener('click', ()=>{
        note.remove()
        updateLS()
    })

    edit.addEventListener('click', ()=>{
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })


    
   
    
}

function updateLS(){
    const Test_Notes = document.querySelectorAll('textarea')
    const notes = []

    Test_Notes.forEach(note => {
        notes.push(note.value) 
        console.log(notes)
        
    });

    rev=notes.reverse()
        console.log(rev)

    localStorage.setItem('notes',JSON.stringify(rev))
}