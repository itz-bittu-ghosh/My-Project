let y = prompt("Enter the Timer time in Sec. : ");

function timer(x, callback) {
  if (x <= 0) {
    document.getElementById("demo").innerHTML = "Time Over!";

    setInterval(() => {
      var r = Math.floor(Math.random() * 150) + 50;
      var g = Math.floor(Math.random() * 150) + 50;
      var b = Math.floor(Math.random() * 150) + 50;
      // console.log(r, g, b)
      let color = `rgb(${r}, ${g}, ${b})`;

      document.body.style.background = color;

      document.getElementById("endSound").play();
    }, 200);

    document.getElementById("refreshButton").style.display = "inline-block";

    return;
  } else {
    x -= 1;
    document.getElementById("demo").innerHTML = x;

    setTimeout(function () {
      callback(x, callback);
    }, 1000);
  }
}

function refreshPage() {
  location.reload();
}
timer(y, timer);
