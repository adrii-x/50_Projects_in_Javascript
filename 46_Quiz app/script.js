const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz')
const options = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit = document.getElementById('submit')


let current_quiz = 0
let score = 0

function deselector() {
    options.forEach(option=>{
        option.checked = false
    })
    
}

function loadQuiz() {
    deselector()

    const current_data = quizData[current_quiz]

    question.innerText= current_data.question
    a_text.innerText = current_data.a
    b_text.innerText = current_data.b
    c_text.innerText = current_data.c
    d_text.innerText = current_data.d

    
    
}

function getSelected() {
    let answer=''

    options.forEach(option=>{
        if (option.checked) {
            answer = option.id
            console.log(answer)
            
        }

         
    })

    if (answer==='') {
        answer='f'

        console.log(answer)

    }

    return answer
    
}


submit.addEventListener('click',()=>{
    console.log(getSelected())
    const answered = getSelected()
    const current_data = quizData[current_quiz]


    if(answered){
        if (answered === current_data.correct) {
            score++   
            console.log(score)
        }
        current_quiz++

        if (current_quiz< quizData.length) {
            loadQuiz()
            
        }else{
            quiz.innerHTML =`
                <h2 class='result' >You answered </br>${score}/${quizData.length} </br> questions correctly </h2>

                <button onclick="location.reload()">Reload</button>
                `

        }

    }
    
})

loadQuiz()




