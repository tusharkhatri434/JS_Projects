const form = document.querySelector("form");                              

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

//   console.log(height.value);
//   console.log(weight.value);

  if(height=='' || height<=0 || isNaN(height)){
    results.innerText = `Please enter correct format height ${height}`; 
  }
  else if(weight=='' || weight<=0 || isNaN(weight)){
    results.innerText = `Please enter correct format weight ${weight}`; 
  }else{
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `Your BMI - <span>${bmi}</span>`;
  }
  
})
