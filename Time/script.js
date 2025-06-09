function myTimer() {
  const newTime = new Date();
  let pra = document.querySelector("#demo");

  pra.innerHTML = newTime.toLocaleTimeString();
}

setInterval(myTimer, 1000);
