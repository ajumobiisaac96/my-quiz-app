
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
        question: " What is CSS??",
        answers:[
            {text: "A.   CSS is a style sheet language.", correct: false},
            {text: "B.  CSS is designed to separate the presentation and content, including layout, colors, and fonts.", correct: false},
            {text: "C.  CSS is the language used to style the HTML documents.", correct: false},
            {text: "D.  All of the mentioned.", correct: true},
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
        question: " Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        answers:[
            {text: "A.  HTML", correct: false},
            {text: "B. php", correct: false},
            {text: "C.  CSS", correct: true},
            {text: "D.  Ajax", correct: false},
        ]
    },
    {
        question: " Which of the following CSS framework is used to create a responsive design??",
        answers:[
            {text: "A.  django.", correct: false},
            {text: "B.  rails.", correct: false},
            {text: "C.  larawell.", correct: false},
            {text: "D.  bootstrap.", correct: true},
        ]
    },
    {
        question: " Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        answers:[
            {text: "A.  tag.", correct: false},
            {text: "B.  id.", correct: true},
            {text: "C.  class.", correct: false},
            {text: "D.  both class and tag.", correct: false},
        ]
    },
{
        question: "  Which of the following CSS property is used to make the text bold?",
        answers:[
            {text: "A.  text-decoration: bold.", correct: false},
            {text: "B.  font-weight: bold.", correct: true},
            {text: "C.  font-style: bold.", correct: false},
            {text: "D.  text-align: bold.", correct: false},
        ]
    },
{
        question: " Which of the following CSS style property is used to specify an italic text?",
        answers:[
            {text: "A.  style.", correct: false},
            {text: "B.  font.", correct: false},
            {text: "C.  font-style.", correct: true},
            {text: "D.  @font face.", correct: false},
        ]
    },
{
        question: "  Which of the following are the CSS Extension Prefixes for Webkit??",
        answers:[
            {text: "A.  -chrome.", correct: false},
            {text: "B.  -web.", correct: false},
            {text: "C.  -o-.", correct: false},
            {text: "D   -webkit.", correct: true},
        ]
    },
{
        question: " Which of the following is the first CSS specification to become an official W3C Recommendation?",
        answers:[
            {text: "A.  CSS level 2.", correct: false},
            {text: "B.   (X)HTML CSS.", correct: false},
            {text: "C.  CSSS Level 1.", correct: true},
            {text: "D.  CSS level 2.1.", correct: false},
        ]
    },
{
        question: " Which of the following function defines a linear gradient as a CSS image?",
        answers:[
            {text: "A.  gradient()", correct: false},
            {text: "B.  linear-gradient().", correct: true},
            {text: "C.  grayscale.", correct: false},
            {text: "D.  image().", correct: false},
        ]
    },
{
        question: " Which of the following CSS property can be used to set the image as a border instead of the border style?",
        answers:[
            {text: "A.  background-image-source.", correct: false},
            {text: "B.  background-image.", correct: false},
            {text: "C.  border-image-source.", correct: true},
            {text: "D.  border-image.", correct: false},
        ]
    },
{
        question: "  Which of the following CSS property defines the different properties of all four sides of an element’s border in a single declaration?",
        answers:[
            {text: "A.  border-collapse.", correct: false},
            {text: "B.  border-width.", correct: true},
            {text: "C.   padding.", correct: false},
            {text: "D.  border.", correct: false},
        ]
    },
{
        question: "  Which of the following is the correct way to apply CSS Styles?",
        answers:[
            {text: "A.  in an external CSS file.", correct: false},
            {text: "B.  inside an HTML element.", correct: false},
            {text: "C.  inside the <head> section of an HTML page.", correct: false},
            {text: "D.  all of the mentioned.", correct: true},
        ]
    },
{
        question: " Which of the following CSS property sets the font size of text?",
        answers:[
            {text: "A.  font-size.", correct: true},
            {text: "B.  text-size.", correct: false},
            {text: "C.  text.", correct: false},
            {text: "D.  size.", correct: false},
        ]
    },
{
        question: "Which of the following is not the property of the CSS box model??",
        answers:[
            {text: "A.  margin.", correct: false},
            {text: "B.  color.", correct: true},
            {text: "C.  width.", correct: false},
            {text: "D.	height.", correct: false},
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

