setInterval(() => {
  var r = Math.floor(Math.random() * 150) + 50;
  var g = Math.floor(Math.random() * 150) + 50;
  var b = Math.floor(Math.random() * 150) + 50;
  // console.log(r, g, b)
  let color1 = `rgb(${r}, ${g}, ${b})`;
  // console.log(color)

  var r = Math.floor(Math.random() * 150) + 50;
  var g = Math.floor(Math.random() * 150) + 50;
  var b = Math.floor(Math.random() * 150) + 50;
  let color2 = `rgb(${r}, ${g}, ${b})`;

  var r = Math.floor(Math.random() * 150) + 50;
  var g = Math.floor(Math.random() * 150) + 50;
  var b = Math.floor(Math.random() * 150) + 50;
  let color3 = `rgb(${r}, ${g}, ${b})`;

  var r = Math.floor(Math.random() * 150) + 50;
  var g = Math.floor(Math.random() * 150) + 50;
  var b = Math.floor(Math.random() * 150) + 50;
  let color4 = `rgb(${r}, ${g}, ${b})`;

  var r = Math.floor(Math.random() * 150) + 50;
  var g = Math.floor(Math.random() * 150) + 50;
  var b = Math.floor(Math.random() * 150) + 50;
  let color5 = `rgb(${r}, ${g}, ${b})`;

  document.body.firstElementChild.children[0].style.backgroundColor = color1;
  document.body.firstElementChild.children[1].style.backgroundColor = color2;
  document.body.firstElementChild.children[2].style.backgroundColor = color3;
  document.body.firstElementChild.children[3].style.backgroundColor = color4;
  document.body.firstElementChild.children[4].style.backgroundColor = color5;
}, 200);
