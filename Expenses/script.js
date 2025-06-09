const expence_Name = document.getElementById("expence_Name");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");
const add_Expences = document.getElementById("add_Expences");
const expenseList = document.getElementById("expenseList");
const total_show_ = document.querySelector(".total_show");

totalCal()

let expenses = JSON.parse(localStorage.getItem("expenses_data")) || [];

function displayItems() {
  expenseList.innerHTML = "";
  expenses.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "div_Data_row";
    row.innerHTML = `
          <p>${item.name}</p>
          <p> ₹${item.amount}</p>
          <p>${item.category}</p>
          <p>${item.date}</p>
          <p><button onclick="deleteItem(${index})">Delete</button></p>
        `;
    expenseList.appendChild(row);
  });
}

function deleteItem(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses_data", JSON.stringify(expenses));
  displayItems();
  totalCal()
}


add_Expences.addEventListener("click", () => {
  const name = expence_Name.value.trim();
  const amt = amount.value.trim();
  const cat = category.value;
  const dt = date.value;

  if (!name || !amt || !cat || !dt) {
    alert("Please fill out all fields.");
    return;
  }

  expenses.push({ name, amount: amt, category: cat, date: dt });
  localStorage.setItem("expenses_data", JSON.stringify(expenses));

  expence_Name.value = "";
  amount.value = "";
  category.value = "";
  date.value = "";

  displayItems();

  totalCal();
});

window.onload = displayItems;

//Total Calculate

function totalCal() {
  const data = JSON.parse(localStorage.getItem("expenses_data"));
  let total = 0;
  data.forEach((item) => {
    total += parseFloat(item.amount);
  });

  total_show_.innerText = `₹${total}`;
}
