
function htmlQuestions(){
    window.location.href = "html.html";
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
        question: "In HTML, what does the fieldset tag do?",
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
{
        question: "What is HTML?",
        answers:[
            {text: "A.  HTML describes the structure of a webpage.", correct: false},
            {text: "B.  HTML is the standard markup language mainly used to create web pages.", correct: false},
            {text: "C.  HTML consists of a set of elements that helps the browser how to view the content.", correct: false},
            {text: "D.  All of the mentioned.", correct: true},
        ]
    },
{
        question: " Who is the father of HTML?",
        answers:[
            {text: "A.  Rasmus Lerdorf.", correct: false},
            {text: "B.  Tim Berners-Lee.", correct: true},
            {text: "C.  Brendan Eich.", correct: false},
            {text: "D.  Sergey Brin.", correct: false},
        ]
    },
{
        question: "  HTML stands for __________?",
        answers:[
            {text: "A.  Hyper Text Markup Language.", correct: true},
            {text: "B.  HyperText Machine Language.", correct: false},
            {text: "C.  HyperText Marking Language.", correct: false},
            {text: "D.  HighText Marking Language.", correct: false},
        ]
    },
{
        question: " Which of the following is used to read an HTML page and render it??",
        answers:[
            {text: "A.  Web server.", correct: false},
            {text: "B.   Web network.", correct: false},
            {text: "C.  Web browser.", correct: true},
            {text: "D.  Web matrix.", correct: false},
        ]
    },
{
        question: " Which of the following is not a difference between HTML and XHTML?",
        answers:[
            {text: "A.  Charset in both html and xhtml is “text/html", correct: true},
            {text: "B.  Tags and attributes are case-insensitive in HTML but not in XHTML.", correct: false},
            {text: "C.  Special characters must be escaped using character entities in XHTML unlike HTML.", correct: false},
            {text: "D.  Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml.", correct: false},
        ]
    },
{
        question: " Which of the following tag is used for inserting the largest heading in HTML?",
        answers:[
            {text: "A.  head.", correct: false},
            {text: "B.  h1.", correct: true},
            {text: "C.  h6.", correct: false},
            {text: "D.  heading.", correct: false},
        ]
    },
{
        question: "  What is DOM in HTML?",
        answers:[
            {text: "A.  Language dependent application programming.", correct: false},
            {text: "B.  Hierarchy of objects in ASP.NET.", correct: false},
            {text: "C.   Application programming interface.", correct: false},
            {text: "D.  Convention for representing and interacting with objects in html documents.", correct: true},
        ]
    },
{
        question: " In which part of the HTML metadata is contained?",
        answers:[
            {text: "A.  head tag .", correct: false},
            {text: "B.  title tag.", correct: true},
            {text: "C.  html tag.", correct: false},
            {text: "D.  body tag.", correct: false},
        ]
    },
{
        question: " Which of the following is not the element associated with the HTML table layout?",
        answers:[
            {text: "A.  alignment.", correct: false},
            {text: "B.  color.", correct: true},
            {text: "C.  size.", correct: false},
            {text: "D.  spanning.", correct: false},
        ]
    },
{
        question: "  Which element is used for or styling HTML5 layout??",
        answers:[
            {text: "A.  CSS.", correct: true},
            {text: "B.  JQuery.", correct: false},
            {text: "C.  JavaScript.", correct: false},
            {text: "D.	PHP.", correct: false},
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

