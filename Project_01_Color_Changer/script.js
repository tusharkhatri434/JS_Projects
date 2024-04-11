const button = document.querySelectorAll(".button");
const body = document.querySelector("body");
const colorPicker = document.querySelector("#colorPicker");
const hexCode = document.querySelector("#hexCode");
button.forEach((item)=>{
   item.addEventListener('click',(e)=>{
    //   console.log(e.target.id);
     body.style.backgroundColor = e.target.id;
   })
})

colorPicker.addEventListener('input',(e)=>{
//   console.log(e.target.value);
body.style.backgroundColor = e.target.value;
hexCode.innerText = `Hex code: ${e.target.value}`;
})