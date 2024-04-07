
function htmlQuestions(){
    window.location.href = "html.html";
    startQuiz();
}

let timeSecond = 3000;
const timeH = document.getElementById("my-countdown");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.display
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time out";
  showScore();
}



const questions = [
    {
        question: "In HTML, what does the `fieldset` tag do?",
        answers:[
            {text: "A.  It is used to group related data in a form.", correct: true},
            {text: "B.  It sets the field to a fixed size.", correct: false},
            {text: "C.  It automatically validates the fields within a form.", correct: false},
            {text: "D.  It hides the fields in a form.", correct: false},
        ]
    },
    {
        question: "What does HTML stand for?",
        answers:[
            {text: "A.  Hyper Trainer Marking Language", correct: false},
            {text: "B.  Hyper Text Marketing Language", correct: false},
            {text: "C.  Hyper Text Markup Language", correct: true},
            {text: "D.  Hyper Text Markup Leveler", correct: false},
        ]
    },
    {
        question: "Which HTML element is used to define the title of a document?",
        answers:[
            {text: "A.  head", correct: false},
            {text: "B.  title", correct: true},
            {text: "C.  header", correct: false},
            {text: "D.  top", correct: false},
        ]
    },
    {
        question: "What is the purpose of the <body> tag in HTML?",
        answers:[
            {text: "A.  It defines the document's head section.", correct: false},
            {text: "B.  It contains all the content such as text, images, and links.", correct: true},
            {text: "C.  It is used to define the main content of an HTML document.", correct: false},
            {text: "D.  It specifies the body of the email content in HTML.", correct: false},
        ]
    },
    {
        question: "What is the purpose of the <body> tag in HTML?",
        answers:[
            {text: "A.  It defines the document's head section.", correct: false},
            {text: "B.  It contains all the content such as text, images, and links.", correct: true},
            {text: "C.  It is used to define the main content of an HTML document.", correct: false},
            {text: "D.  It specifies the body of the email content in HTML.", correct: false},
        ]
    },
    
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    ShowQuestion();
}

function ShowQuestion(){ 
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
};

function showScore(){                                                                                                                                                                                   
    resetState();
    
    
    timeH.style.display = "none";

    // var divElement = document.createElement('div');
    questionElement.style.width = "500px";
    questionElement.style.height = "300px";
    questionElement.style.position = "absolute";
    questionElement.style.background = "#ccc";
    questionElement.style.transform = "translate(-50%,-50%)";
    questionElement.style.top = "50%"
    questionElement.style.left = "50%"
    questionElement.textContent   = `you scored ${score} out of ${questions.length}.`
    questionElement.style.textAlign = "center";
    questionElement.style.padding = "50px";
    questionElement.style.fontSize= "50px"
    questionElement.style.color= "#070707";
    questionElement.style.borderRadius= "20px";
    questionElement.style.fontWeight= "500";
   
    const button = document.createElement("button");
    button.innerHTML = "Play Again";
    button.classList.add("btn11");
    questionElement.appendChild(button);
    // document.body.appendChild(divElement);


    button.addEventListener('click', () =>{
        window.location.href = "index.html";
    })

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        ShowQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();

