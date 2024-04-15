const input_box = document.querySelector("#input");
const searchBtn = document.querySelector("#search");
let apiKey = "<{YOUR API KEYS}>";
const notFound = document.querySelector(".not__found");
const defBox = document.querySelector(".def");
const audioBox = document.querySelector(".audio");
const loading = document.querySelector(".loading");
// https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}

let URL = "https://www.dictionaryapi.com/api/v3/references/learners/json/";
let SoundURL = "https://media.merriam-webster.com/soundc11";

searchBtn.addEventListener('click',function(e){
    e.preventDefault();

    audioBox.innerHTML = "";
    notFound.innerText = "";
    defBox.innerText   = "";  
    let word = input_box.value;

    if(word==''){
        alert('word is required');
        return;
    }
    getData(word);

});

async function getData(word){
    loading.style.display = "block";
    let URL_API = `${URL}${word}?key=${apiKey}`;
    const res = await fetch(URL_API);
    const data = await res.json();
    console.log(data);

    if(!data.length){
      loading.style.display = "none";
      notFound.innerText = "No result found";
      return;
    }

    if(typeof data[0]==='string'){
        loading.style.display = "none";
        let heading = document.createElement("h3");
        heading.innerTexr = 'Did you mean?';
        notFound.appendChild(heading);
        data.forEach(element => {
           let suggestion = document.createElement('span');
           suggestion.classList.add('suggested');
           suggestion.innerText = element;
           notFound.appendChild(suggestion);
        });
        return;
    }


     loading.style.display = "none";
     let defination = data[0].shortdef[0];
     defBox.innerText = defination;

     // Sound
     const soundName = data[0]?.hwi?.prs[0]?.sound?.audio;
     if (soundName) {
       renderSound(soundName);
     }

}

function renderSound(soundName){
  let subFolder = soundName.charAt(0);
  let soundSrc = `${SoundURL}/${subFolder}/${soundName}.wav?key=${apiKey}}`;

  let aud = document.createElement("audio");
  aud.src = soundSrc;
  aud.controls = true;
  audioBox.appendChild(aud);
}