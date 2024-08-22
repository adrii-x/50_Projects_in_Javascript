const form=document.getElementById('form')

const search = document.getElementById('search')

 const main = document.getElementById('main')

const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1319ce2503e3df3a5fad63c26866f5a4&page=1'

const img_path = 'https://image.tmdb.org/t/p/w1280'

const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=1319ce2503e3df3a5fad63c26866f5a4&query="'


function rate_color(vote) {
    if(vote>= 8){
        return 'green'
    }

    else if(vote>=5){
        return 'orange'
    }
    else{
        return 'red'
    } 
    
}
function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach(movie => {
        const {title,poster_path,vote_average,overview} = movie
        
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <img
        src="${img_path + poster_path}"
        alt="${title}"
      />

      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${rate_color(vote_average)}">${Math.round(vote_average)}</span>
      </div>

      <div class="overview">
        <h3>Overview</h3>
        ${overview}
        reiciendis tempore.
      </div>
        `

        main.appendChild(movieEl)
        
    });
}

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
    
}



getMovies(api_url)

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(search_api + searchTerm) 

        search.value= ''
    }
    else{
        window.location.reload()
    }
})

