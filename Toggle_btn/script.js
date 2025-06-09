let btn = document.querySelector("#btn");
let isDark = true;
btn.addEventListener("click", toggle_btn);

function toggle_btn() {
  if (isDark == true) {
    document.body.style.backgroundColor = "black";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  } else if (isDark == false) {
    document.body.style.backgroundColor = "white";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  }
  isDark = !isDark;
}
