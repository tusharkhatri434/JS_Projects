const questions = [
    {
     res:true
    },
    {
        value:false,
        select:{},
        ques:"World largest Population country ?",
        options:[
            {text:"India",value:"true"},
            {text:"China",value:"False"},
            {text:"America",value:"False"},
            {text:"Russia",value:"False"},
        ]
    },
    {
        ques:"World largest river country ?",
        options:[
            {text:"India",value:"true"},
            {text:"China",value:"False"},
            {text:"America",value:"False"},
            {text:"Russia",value:"False"},
        ]
    },
    {
        ques:"World largest Population country ?",
        options:[
            {text:"India",value:"true"},
            {text:"China",value:"False"},
            {text:"America",value:"False"},
            {text:"Russia",value:"False"},
        ]
    },
];
const question_text = document.querySelector("#question")
const options = document.querySelector(".options");
const pre_Btn = document.querySelector("#pre");
const next_Btn = document.querySelector("#next");
const submit_Btn = document.querySelector("#submit");
const restart_Btn = document.querySelector("#restart");
const selectionSection = document.querySelector(".selection");

let score = 0;
let question_no = 1;
const No_of_questions = questions.length;
showQuestion(1);

function showQuestion(number){
    cleanUp();
  if(question_no<No_of_questions){
      let question = questions[number];
    //   console.log(question);
    question_text.innerHTML = `${number}. ${question.ques}`;

    question.options.forEach((res)=>{
    //   console.log(res);
     const button = document.createElement("button");
     button.classList.add('option');
     button.innerText = res.text;
     button.dataset.value=res.value;
     options.appendChild(button);
     button.addEventListener('click',checkAnswer)
      
    })
  }
  else{
    showScore();
  }
}
function showScore(){
    cleanUp();
    question_text.innerHTML = `Score-:${score} out of ${No_of_questions - 1} each Question 1 marks`;
     selectionSection.style.display = "none";
     restart_Btn.style.display="block";
}
function cleanUp(){
    options.innerHTML = "";
    question_text.innerHTML = "";
}
function disabledOptions(){
    // console.log(options);
    const elements = options.querySelectorAll('.option')
     elements.forEach((ele)=>{
        ele.setAttribute('disabled','');
     })
}
function checkAnswer(e){
  e.preventDefault();
  const ans = e.target;

  if(ans.dataset.value=="true"){
      ans.classList.add('correct');
      score++;
  }else{
      ans.classList.add("incorrect");
  }
   disabledOptions();
   question_no++;
}

function restartGame(){
    score = 0;
    question_no = 1;
    showQuestion(question_no);
    restart_Btn.style.display="none";
    selectionSection.style.display = "flex";
}

restart_Btn.style.display = "none";
next_Btn.addEventListener("click", ()=>{showQuestion(question_no)});
restart_Btn.addEventListener("click",restartGame)
submit_Btn.addEventListener("click",showScore);