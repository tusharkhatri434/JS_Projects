const form = document.querySelector(".form");
const input = document.querySelector("#text-box");
const qrCode = document.querySelector("#qr-code");
const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const loader = `<span class="spinner"></span>`;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  generateQRCode(input.value);
});

function showLoader(){
  qrCode.innerHTML = loader;
}
function hideLoader(){
  qrCode.innerHTML="";
}

async function generateQRCode(data) {
    showLoader();
  if (data != "" && data != " ") {
    let url = `${api} + ${data}`;
    const res = await fetch(url);
    //   console.log(res.url)
    if(res){
    hideLoader();
    showQRCode(res.url);
    }
  }
}
function showQRCode(img) {
  const imageElement = document.createElement("img");
  imageElement.src = img;
  imageElement.alt = "qr-image";
  qrCode.innerHTML = "";
  qrCode.appendChild(imageElement);
}
