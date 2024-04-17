
function cssQuestions(){
    window.location.href = "cssQuestion.html";
    startQuiz();
}

let timeSecond = 600;
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
        question: " What is JavaScript??",
        answers:[
            {text: "A.   JavaScript is a scripting language used to make the website interactive.", correct: true},
            {text: "B.   JavaScript is an assembly language used to make the website interactive.", correct: false},
            {text: "C.  JavaScript is a compiled language used to make the website interactive.", correct: false},
            {text: "D.  None of the mentioned.", correct: false},
        ]
    },
    {
        question: " Which of the following CSS selectors are used to specify a group of elements?",
        answers:[
            {text: "A.  tag", correct: false},
            {text: "B.  id", correct: false},
            {text: "C.  class", correct: true},
            {text: "D.  both class and tag", correct: false},
        ]
    },
    {
        question: "Which of the following is correct about JavaScript?",
        answers:[
            {text: "A.  JavaScript is an Object-Based language", correct: true},
            {text: "B. JavaScript is Assembly-language", correct: false},
            {text: "C. JavaScript is an Object-Oriented language JavaScript is an Object-Oriented language", correct: false},
            {text: "D.  JavaScript is a High-level language", correct: false},
        ]
    },
    {
        question: " Among the given statements, which statement defines closures in JavaScript?",
        answers:[
            {text: "A.  JavaScript is a function that is enclosed with references to its inner function scope.", correct: false},
            {text: "B.  JavaScript is a function that is enclosed with references to its lexical environment.", correct: true},
            {text: "C. JavaScript is a function that is enclosed with the object to its inner function scope.", correct: false},
            {text: "D.  None of the mentioned.", correct: false},
        ]
    },
    {
        question: " Arrays in JavaScript are defined by which of the following statements?",
        answers:[
            {text: "A.  It is an ordered list of values.", correct: false},
            {text: "B.  It is an ordered list of objects.", correct: true},
            {text: "C.  It is an ordered list of string.", correct: false},
            {text: "D.  It is an ordered list of functions.", correct: false},
        ]
    },
{
        question: " Which of the following is not javascript data types?",
        answers:[
            {text: "A.  Null type.", correct: false},
            {text: "B.  Undefined type.", correct: false},
            {text: "C.  Number type.", correct: false},
            {text: "D. All of the mentioned.", correct: true},
        ]
    },
{
        question: " Where is Client-side JavaScript code is embedded within HTML documents?",
        answers:[
            {text: "A.  A URL that uses the special javascript:code.", correct: false},
            {text: "B.  A URL that uses the special javascript:protocol.", correct: true},
            {text: "C.  A URL that uses the special javascript:encoding.", correct: false},
            {text: "D.  A URL that uses the special javascript:stack.", correct: false},
        ]
    },
{
        question: "  Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers:[
            {text: "A.  position.", correct: false},
            {text: "B.  -window.", correct: true},
            {text: "C.  standard.", correct: false},
            {text: "D   location.", correct: false},
        ]
    },
{
        question: " Which of the following can be used to call a JavaScript Code Snippet?",
        answers:[
            {text: "A.  Function/Method.", correct: false},
            {text: "B.   Preprocessor.", correct: false},
            {text: "C.  Triggering Event.", correct: true},
            {text: "D.  RMI.", correct: false},
        ]
    },
{
        question: " Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
        answers:[
            {text: "A.  will work perfectly well on a Windows Machine", correct: true},
            {text: "B.  will be displayed as JavaScript text on the browser.", correct: false},
            {text: "C.  will throw errors and exceptions.", correct: false},
            {text: "D.  must be restricted to a Unix Machine only:", correct: false},
        ]
    },
{
        question: " Which of the following scoping type does JavaScript use?",
        answers:[
            {text: "A.  sequential.", correct: false},
            {text: "B.  segmenetal.", correct: false},
            {text: "C.  lexical.", correct: true},
            {text: "D.  literal.", correct: false},
        ]
    },
{
        question: "  What is the basic difference between JavaScript and Java?",
        answers:[
            {text: "A.  Functions are considered as fields.", correct: false},
            {text: "B.  Functions are values, and there is no hard distinction between methods and fields.", correct: true},
            {text: "C.   Variables are specific.", correct: false},
            {text: "D.  There is no difference.", correct: false},
        ]
    },
{
        question: "Why JavaScript Engine is needed?",
        answers:[
            {text: "A Both Compiling & Interpreting the JavaScript.", correct: false},
            {text: "B.  Parsing the javascript.", correct: false},
            {text: "C.  Interpreting the JavaScript.", correct: true},
            {text: "D.  Compiling the JavaScript.", correct: false},
        ]
    },
{
        question: "Which of the following methods/operation does javascript use instead of == and !=?",
        answers:[
            {text: "A.  JavaScript uses equalto().", correct: false},
            {text: "B.  JavaScript uses equals() and notequals() instead.", correct: false},
            {text: "C.  JavaScript uses bitwise checking.", correct: false},
            {text: "D.  JavaScript uses === and !== instead.", correct: true},
        ]
    },
{
        question: "Why EVent handlers is needed in JS?",
        answers:[
            {text: "A.  Allows JavaScript code to alter the behaviour of windows.", correct: true},
            {text: "B.  Adds innerHTML page to the code.", correct: false},
            {text: "C. Change the server location.", correct: false},
            {text: "D.	Performs handling of exceptions and occurrences.", correct: false},
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
    let currentQuestion = questions[Math.floor(Math.random() * 15)];
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
    nextButton.style.display = "flex"

};

function showScore(){                                                                                                                                                                                   
    resetState();
    
    
    timeH.style.display = "none";

    // var divElement = document.createElement('div');
    function media(x){
        if (x.matches){
            questionElement.style.width = "300px";
            questionElement.style.height = "400px";
            questionElement.style.display = "flex";
            questionElement.style.background = "#ccc";
            questionElement.style.alignItems = "center";
            questionElement.style.justifyContent = "center"
            questionElement.textContent   = `you scored ${score} out of ${questions.length}.`
            questionElement.style.textAlign = "center";
            questionElement.style.padding = "10px";
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
        else{
            
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
        }

        
        var x = window.matchMedia("(max-width : 900px)")
        media(x);
        x.addEventListener("change",function(){
            media(x)
        });


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

