const board = document.querySelector('.board');
const scoreBox = document.querySelector("#score");
const arrowKey = document.querySelector(".arrowKey");
const foodSound = new Audio("music/food.mp3");
const gameOverSound = new Audio("music/gameover.mp3");
const moveSound = new Audio("music/move.mp3");
// const musicSound = new Audio("music/music.mp3");
let inputDir = { x: 0, y: 0 }; 
let speed = 4;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 8, y: 9 }];

let food = { x: 3, y: 15 };

// game function
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    // console.log(lastPaintTime)
    lastPaintTime = ctime;
    gameEngine();
}

function generateFoodRandomly(){
    let a = 2;
    let b = 17;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),};

    }

    function isCollide(snake){
        // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
    }
function gameEngine(){

    // we check if snake collide with himself or wall;
    if(isCollide(snakeArr)){
         gameOverSound.play();
        // musicSound.pause();
        inputDir =  {x: 0, y: 0}; 
        alert(`Game Over. score:${score} Press any key to play again!`);
        snakeArr = [{x: 13, y: 15}];
        // musicSound.play();
        score = 0; 
        scoreBox.innerHTML = score;
    }

    // eaten food or not
    if(snakeArr[0].y===food.y && snakeArr[0].x===food.x){
       score+=1;
       scoreBox.innerHTML = score;
       foodSound.play();
        
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        generateFoodRandomly();
    }
    // updating snake array so snake move furture or jump
     for (let i = snakeArr.length - 2; i >= 0; i--) {
       snakeArr[i + 1] = { ...snakeArr[i] };
     }

     snakeArr[0].x += inputDir.x;
     snakeArr[0].y += inputDir.y;


    //  display Snake on screen
    board.innerHTML = "";
    snakeArr.forEach((arr,index)=>{
      let snakeElement = document.createElement("div");
      snakeElement.style.gridRowStart = arr.y;
      snakeElement.style.gridColumnStart = arr.x;
      if(index===0){
        snakeElement.classList.add("head");
      }else{
        snakeElement.classList.add("snake");
      }
       board.appendChild(snakeElement);
    })

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);

}

// main logic
// musicSound.play();
window.requestAnimationFrame(main);
// key logic 
window.addEventListener("keydown", (e) => {
      moveSound.play();

  inputDir = { x: 0, y: 1 }; // Start the game
  switch (e.key) {
    case "ArrowUp":
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
});
arrowKey.addEventListener('click',(e)=>{
  e.preventDefault();
    //  moveSound.play();
  inputDir = { x: 0, y: 1 }; // Start the game

  console.log(e.target.id);
  switch (e.target.id) {
    case "ArrowUp":
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      inputDir.x = 1;
      inputDir.y = 0;
      break;
    default:
      break;
  }
})