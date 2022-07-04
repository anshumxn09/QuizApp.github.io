
const myQuizData = [{
    question : "Q1. What does HTML stand for?",
    a : 'Hyper Tag Markup Language',
    b : 'Hyper Text Markup Language',
    c : 'Hyperlinks Text Mark Language',
    d : 'Hyperlinking Text Marking Language', 
    ans : 'ans2'
},
{
    question : "Q2. What symbol indicates a tag?",
    a : 'Angle brackets e.g.<>',
    b : 'Curved brackets e.g. {,}',
    c : 'Commas e.g. ","',
    d : 'Exclamation marks e.g. !',
    ans : 'ans1'
},
{
    question : "Q3. Which of these is a genuine tag keyword?",
    a : 'Header',
    b : 'Bold',
    c : 'Body',
    d : 'Image',
    ans : 'ans3'
},
{
    question : "Q4. A CSS file can be applied to only one HTML file.",
    a : 'True',
    b : 'False',
    c : 'Less than 100',
    d : 'None of the above',
    ans : 'ans2'
},

{
    question : "Q5. What is the correct tag for a line break?",
    a : '<bt>',
    b : '<bl>',
    c : '<br>',
    d : '<break>',
    ans : 'ans3'
},

{
    question : "Q6. What does CSS stand for?",
    a : 'Computing Style Sheet',
    b : 'Creative Style System',
    c : 'Cascading Style Sheet',
    d : 'Creative Styling Sheet',
    ans : 'ans3'
},

{
    question : "Q7. Where should a CSS file be referenced in a HTML file?",
    a : 'Before any HTML code',
    b : 'After all HTML code',
    c : 'Inside the head section',
    d : 'Inside the body section',
    ans : 'ans3'
},

{
    question : "Q8. What is the correct format for aligning written content to the center of the page in CSS?",
    a : 'Text-align:center;',
    b : 'Font-align:center;',
    c : 'Font-align:center;',
    d : 'Font:align-center;',
    ans : 'ans1'
},

{
    question : "Q9. What is the correct format for changing the background colour of a div in CSS?",
    a : 'Bg-color:red;',
    b : 'Background:red;',
    c : 'Background-colour:red;',
    d : 'Background-color:red;',
    ans : 'ans4'
},

{
    question : "Q10. What is the correct format for a div?",
    a : 'Div-id=example',
    b : 'Div id="example"',
    c : 'Div="example"',
    d : 'Div.example',
    ans : 'ans2'
},
];
const score = document.getElementById('myscore');
const scoreBlock = document.getElementById('scoreBlock');
const playAgain =  document.getElementById('playAgain');

const question = document.getElementById('question');
question.innerText = myQuizData[0].question;
const option1 = document.getElementById('op1');
option1.innerText = myQuizData[0].a;
const option2 = document.getElementById('op2');
option2.innerText = myQuizData[0].b;
const option3 = document.getElementById('op3');
option3.innerText = myQuizData[0].c;
const option4 = document.getElementById('op4');
option4.innerText = myQuizData[0].d;

let myPoints = 0;
let questionIndex = 1;
let lastQuestion;

submit.addEventListener('click' , () => {
    lastQuestion = true;
    console.log(questionIndex);
    if(questionIndex <= 10){
        const value = document.querySelector('input[type=radio][name=option]:checked');
        if(value.id === myQuizData[questionIndex - 1].ans){
            myPoints = myPoints + 1;
        }
        if(questionIndex < 10){
            value.checked = false;
            question.innerText = myQuizData[questionIndex].question;
            option1.innerText = myQuizData[questionIndex].a;
            option2.innerText = myQuizData[questionIndex].b;
            option3.innerText = myQuizData[questionIndex].c;
            option4.innerText = myQuizData[questionIndex].d;
            questionIndex = questionIndex + 1;
            lastQuestion = false;
        }
        else if(questionIndex === 10 && lastQuestion){
            questionIndex = questionIndex + 1;
            score.innerText = `✌Your Score is : ${myPoints}✌`;
            scoreBlock.style.display = "block";
        }
    }
})

playAgain.addEventListener('click', ()=> {
    location.reload();
})