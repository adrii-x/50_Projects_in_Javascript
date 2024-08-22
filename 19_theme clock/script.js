const hour = document.querySelector('.needle.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const times = document.querySelector('.time')
const date = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ['Sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday']

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 
'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date1 = time.getDate()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const hours_for_clock = hours % 12
    const ampm = hours>12 ? 'PM': 'AM'
    
    console.log(day)
    hour.style.transform = `translate(-50%, -100%) rotate(${(hours_for_clock / 11)*360}deg)`

    minute.style.transform = `translate(-50%, -100%) rotate(${(minutes / 59)*360}deg)`

    second.style.transform = `translate(-50%, -100%) rotate(${(seconds / 59)*360}deg)`

times.innerHTML = `${hours_for_clock}:${minutes<10 ? `0${minutes}`:minutes} ${ampm}`

date.innerHTML = `${days[day]}, ${months[month]}<span class="circle">${date1}</span>`

    
}

toggle.addEventListener('click', (e)=>{
    const html= document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='Dark mode'
    }
    else{
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

setTime()

// setInterval(setTime,1000)

setInterval(() => {
    setTime()
}, 1000);

