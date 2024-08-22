const resulter =document.querySelector('#results')
const resulted = document.querySelector('#resulted')
const filter =document.querySelector('#filter')
// const ListItems = []

console.log(resulter.innerText)


async function get_data() {
    const res = await fetch('https://randomuser.me/api?results=1000')
    const data = await res.json()
    resulter.innerHTML = ''

    data.results.forEach(result => {
        resultHTML=`
        <img
          src="${result.picture.medium}"
          alt="${result.name.first}"
        />
        <div class="user-info">
          <h4>${result.name.first} ${result.name.last}</h4>
          <p>${result.location.city}, ${result.location.country}</p>
        </div>
        `
        const item = document.createElement('li')

        item.innerHTML = resultHTML

        resulter.appendChild(item)

        


        


    });

    filter.addEventListener('input', (e) =>{
        resulted.classList.remove('hider')
        resulter.classList.add('hider')

            

        setTimeout(() => {
            resulted.classList.add('hider')
            resulter.classList.remove('hider')

            filterData(e.target.value)
        }, 1000);
            
            
     

        
    })


    function filterData(inputed) {
        const lies = resulter.querySelectorAll('li .user-info h4')
        const list = resulter.querySelectorAll('li')
        let index = 0


        lies.forEach(result => {
            index++


            if (result.innerText.toLowerCase().includes(inputed.toLowerCase())) {
                
                
                list[(index)-1].classList.remove('hide') 
          
            }
            else{
                console.log(list[(index)-1])
                    list[(index)-1].classList.add('hide')
                      
                
            }
        
                
        })
        
        
        
        }

    

    
};







    

    

resulter.innerHTML=''

setTimeout(() => {
    resulter.innerHTML= `

        <li>
          <h3>loading...</h3>
        </li>
        `
    
}, 1000);

setTimeout(() => {
    resulter.innerHTML=''

    get_data()
    
}, 2000);
    
        

    
    

