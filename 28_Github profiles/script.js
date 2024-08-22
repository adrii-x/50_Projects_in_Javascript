
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const api_url = 'http://api.github.com/users/'





async function get_user(username) {
    try {
        const {data} = await axios(api_url + username)
        console.log(data)

        createCard(data)
        get_repos(username)
        main.classList.add('active')

        
    } catch (error) {
        
        if (error.response.status === 404) {
            error_card('no profile with this username')


            
        }

            
        }
        
    }

    



async function get_repos(username) {
    try {
        const {data} = await axios(api_url + username+ '/repos?sort=created')

        add_repos(data)
        
        

        
    } catch (error) {

        error_card('problem fecthing repos')

       
        
        
    }

    

}

function add_repos(repos) {
    console.log(repos)
    
    const rep = document.getElementById('repos')
    console.log(rep);

    repos.slice(0,10).forEach( repo => {
        const rep_element = document.createElement('a')

        rep_element.classList.add('repo')
        rep_element.href = repo.html_url
        rep_element.target = '_blank'
        rep_element.innerText = repo.name
        
        rep.append(rep_element)
        
    });
    
}

function error_card(msg) {
    const card_html =`
    <div class="card" style="font-size:11px; ">
        <h1>${msg}</h1>
    </div>
    `

    main.innerHTML = card_html
    
}


function createCard(user) {
    const card_html = `
    <div class="card">
        <div>
          <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
          />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
            ${user.bio}
          </p>
          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following}<strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repos</strong></li>
          </ul>
          <div id="repos">
            
          </div>
        </div>
      </div>

    `
    main.innerHTML = card_html
}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const user = search.value

   if (user) {
        get_user(user)

        search.value=''
   }
})

