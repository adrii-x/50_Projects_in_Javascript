const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const replay = document.querySelector('#replay')




function runAnimation() {
    nums.forEach((num,idx)=>{
        const next_to_last = nums.length - 1

        num.addEventListener('animationend', (e)=>{
            if (e.animationName ==='go_in' && idx !== next_to_last) {
                num.classList.remove('in')
                num.classList.add('out')
            }
            else if (e.animationName == 'go_out' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')


            }else{
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}

runAnimation()

function reset() {
    counter.classList.remove('hide')
    final.classList.remove('show')

    nums.forEach((num)=>{
        num.classList.value = ''
    })

    nums[0].classList.add('in')
}

replay.addEventListener('click', ()=>{
    reset()
    runAnimation()
})