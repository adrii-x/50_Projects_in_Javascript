const container = document.querySelector('.container')
const splash_url = 'https://source.unsplash.com/random/'
const rows = 10

function random_number() {
    return Math.floor(Math.random()*10 + 300)
    
}
function random_size() {
    console.log(`${random_number()}x${random_number()}`);
    return `${random_number()}x${random_number()}`
    
}




for (let i = 0; i < rows*3; i++) {
    const img = document.createElement('img')
    img.src = `${splash_url}${random_size()}`


    container.appendChild(img)
    
}
