const opener = document.querySelector('.open-button')
const closer = document.querySelector('.close-button')
const navs = document.querySelectorAll('.nav')

opener.addEventListener('click', ()=>{
    navs.forEach((nav) => {
        nav.classList.add('visible')
        
    
        
    });

    // without need of delays in CSS

    // navs[0].classList.add('visible')


    // setTimeout(() => {
    //     navs[1].classList.add('visible')
    // }, 200);
    // setTimeout(() => {
    //     navs[2].classList.add('visible')
    // }, 400);

})

closer.addEventListener('click', ()=>{

    // navs[2].classList.remove('visible')


    // setTimeout(() => {
    //     navs[1].classList.remove('visible')
    // }, 200);
    // setTimeout(() => {
    //     navs[0].classList.remove('visible')
    // }, 400);



    navs.forEach(nav => {
        nav.classList.remove('visible')
        
    });

})
