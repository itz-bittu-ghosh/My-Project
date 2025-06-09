const event_Do = document.querySelectorAll("td");
const table_ = document.querySelector("table");
const cross_ = document.querySelector(".cross");
const content_show_ = document.querySelector(".content_show");
const date_ = document.querySelector(".date");
const day_ = document.querySelector(".day");

function btn(cell) {
  let event_click = cell.innerText;

  if (event_click == "") {
    alert("invalid Click.");
  } else {
    // console.log("Clicked:", event_click);
    date_.innerText = event_click;

    if (
      event_click == 1 ||
      event_click == 8 ||
      event_click == 15 ||
      event_click == 22 ||
      event_click == 29
    ) {
      day_.innerText = "SUNDAY";
    } else if (
      event_click == 2 ||
      event_click == 9 ||
      event_click == 16 ||
      event_click == 23 ||
      event_click == 30
    ) {
      day_.innerText = "MONDAY";
    }else if (
      event_click == 3 ||
      event_click == 10 ||
      event_click == 17 ||
      event_click == 24
    ) {
      day_.innerText = "TUESDAY";
    }else if (
      event_click == 4 ||
      event_click == 11 ||
      event_click == 18 ||
      event_click == 25 
    ) {
      day_.innerText = "WEDNESDAY";
    }else if (
      event_click == 5 ||
      event_click == 12 ||
      event_click == 19 ||
      event_click == 26 
    ) {
      day_.innerText = "THURSDAY";
    }else if (
      event_click == 6 ||
      event_click == 13 ||
      event_click == 20 ||
      event_click == 27
    ) {
      day_.innerText = "FRIDAY";
    }else if (
      event_click == 7 ||
      event_click == 14 ||
      event_click == 21 ||
      event_click == 28
    ) {
      day_.innerText = "SATURDAY";
    }
  
    showDetail();
  }
}


event_Do.forEach((cell) => {
  cell.addEventListener("click", () => btn(cell));
});

function showDetail() {
  table_.style.display = "none";
  cross_.style.display = "flex";
  content_show_.style.display = "grid";
}

function out() {
  table_.style.display = "table";
  cross_.style.display = "none";
  content_show_.style.display = "none";

}

cross_.addEventListener("click",()=>out())