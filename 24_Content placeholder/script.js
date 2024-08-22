const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_image = document.getElementById('profile_img')
console.log(profile_image);
const namer = document.getElementById('name')
const date = document.getElementById('date')
const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

function getData() {
    header.innerHTML='<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.16 ixid=eyJhcHBfaWQ10jEyMDd9&auto=format&fit=crop&w=210269=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, molestias.'
    profile_image.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    namer.innerHTML ='John Doe'
    date.innerHTML = 'Oct 08, 2020'

    animated_bgs.forEach((bg)=> {
        bg.classList.remove('animated-bg')
    })

    animated_bg_text.forEach((bgt)=> {
        bgt.classList.remove('animated-bg-text')
    })

    
}

setTimeout(getData, 2500)