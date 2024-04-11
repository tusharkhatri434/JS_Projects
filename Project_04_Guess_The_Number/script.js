let randomNumber =  parseInt(Math.random()*100+1);
console.log(randomNumber);
const form = document.querySelector(".form");
const guess = document.querySelector("#guessField");
const resultParas = document.querySelector(".resultParas");
const prevGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let game  = true;
let previResult = [];
let count = 10;
const p1 = document.createElement("p");

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  checkNumber();
})

function previousNumber(number){
  guess.value = '';
  prevGuess.innerHTML += `${number},`;
  remainingGuess.innerHTML = `${count}`;
  if(count==0){
    game = false;
    endGame();
    return;
  }
}

function checkNumber(){
   const enteredNumber = parseInt(guess.value);
    if(isNaN(enteredNumber)){
      lowOrHi.innerHTML = "please enter correct input";
      return;
    }
   if(count==0){
      game = false;
      endGame();
      return;
   }

   if(enteredNumber>randomNumber){
    count--;
    previResult.push(enteredNumber);
    lowOrHi.innerHTML = `Your guess ${enteredNumber} is more than random number`;
    previousNumber(enteredNumber);
   }else if(enteredNumber<randomNumber){
    count--;
    previResult.push(enteredNumber);
    lowOrHi.innerHTML = `Your guess ${enteredNumber} is less than random number`;
    previousNumber(enteredNumber);
   }else if(enteredNumber==randomNumber){
    previResult.push(enteredNumber);
    lowOrHi.innerHTML = `Your guess ${enteredNumber} is correct`;
    previousNumber(enteredNumber);
    endGame();
   }
}
function endGame(){
   if(count==0 && !game ){
        p1.innerHTML = "Start new Game";
        lowOrHi.innerHTML = "You Chances ended";
        guess.setAttribute('disabled','');
        p1.id = "startNew";
        p1.addEventListener('click',(e)=>{
            e.preventDefault();
            newGame();
        })
         resultParas.appendChild(p1);
   }else{
     p1.innerHTML = "Start new Game";
     lowOrHi.innerHTML = "You win";
     guess.setAttribute("disabled", "");
     resultParas.appendChild(p1);
     p1.id = "startNew";
     p1.addEventListener("click", (e) => {
       e.preventDefault();
       newGame();
     });
   resultParas.appendChild(p1);

   }
}

function newGame(){
   guess.removeAttribute('disabled');
   p1.innerHTML = '';
   count = 10;
   previResult = [];
   lowOrHi.innerHTML = '';
   prevGuess.innerHTML = '';
   remainingGuess.innerHTML = count;
   randomNumber = parseInt(Math.random() * 100 + 1);
   console.log(randomNumber);
}