const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

const dice_ = document.querySelector(".dice");
let last_move = localStorage.getItem("lastmove");
dice_.innerText = last_move || "🎲"; 

function random_num() {
  let ran_com = Math.floor(Math.random() * 6);
  dice_.innerText = diceFaces[ran_com];
  localStorage.setItem("lastmove", diceFaces[ran_com]);
}
