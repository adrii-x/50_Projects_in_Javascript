const form = document.getElementById('form')
const inputed = document.getElementById('input')
const todos = document.getElementById('todos')





// for storing and updating data to local storage

function update_storage() {

    items = document.querySelectorAll('li')

    const storage1 = []

    items.forEach(item=>{
        storage1.push({
            text: item.innerText,
            completed:item.classList.contains('completed')
        })
    })
    localStorage.setItem('storage1', JSON.stringify(storage1))


     
}
//ends here





function addTodo(todo) {
    let todoText = inputed.value
    console.log(todoText);


    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const item = document.createElement('li')

        //for Stored Data

        if(todo && todo.completed){
            console.log(todo)
            console.log(todo.completed);
            item.classList.add('completed')
        }
        //ends here



        item.innerText=todoText

        item.addEventListener('click',()=>{
            item.classList.toggle('completed')
            update_storage()
        })


        item.addEventListener('contextmenu',(e)=>{
            e.preventDefault()
            item.remove()
            update_storage()
        })

        todos.appendChild(item)

        inputed.value=''

        update_storage()

    }
    

}



// for getting and adding data from local storage

const stored = JSON.parse(localStorage.getItem('storage1'))

if(stored){
    stored.forEach( store_item => {
        addTodo(store_item)
        
    });

}
// ends here

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    addTodo()

})