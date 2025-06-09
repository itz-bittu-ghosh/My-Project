const body = document.querySelector("body");
const copyText = document.getElementById("myInput");
const compy_mag = document.querySelector(".mag");
const copyTextCode = document.getElementById("myInputCode");

let lastSetColor = localStorage.getItem("lastSetColor");
setBgColor(lastSetColor);

function myFunction() {
  const choseColor = copyText.value;
  navigator.clipboard.writeText(choseColor);
  setBgColor(choseColor);

}

function copyTextCodeInput() {
  let copyTextCodeValue = copyTextCode.value;

  setBgColor(copyTextCodeValue);


 copyTextCode.value = ""


}

function setBgColor(choseColor) {
  body.style.backgroundColor = `${choseColor}`;
  localStorage.setItem("lastSetColor", choseColor);

}

function myColor() {
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  // alert("Copied the text: " + copyText.value);
  compy_mag.style.display = "block"
setTimeout(() =>{
compy_mag.style.display = "none"
}, 800);
  
}

