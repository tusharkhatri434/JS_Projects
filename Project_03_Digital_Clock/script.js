const clock = document.querySelector("#clock");

setInterval((e)=>{
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
// console.log(date.toLocaleTimeString());
},1000)