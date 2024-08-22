const  joke = document.getElementById('joke')
const  btn = document.getElementById('jokeBtn')


btn.addEventListener('click', ()=>{
    Get_joke()
})



async function Get_joke() {
    config= {
        headers:{
            Accept: 'application/json',
        }
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const base = await res.json()
    joke.innerHTML= base.joke


// function Get_joke() {
//     config= {
//         headers:{
//             Accept: 'application/json',
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then((res)=> res.json())
//     .then(data=>{joke.innerHTML= data.joke})

    
}



