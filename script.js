// Part 1: Variables & Conditionals
document.getElementById("checkBtn").addEventListener("click", () => {
  let age = Number(document.getElementById("ageInput").value);
  let name = document.getElementById("nameInput").value;

  document.getElementById("greeting").textContent = "Hello " + name;

  if (age < 18) {
    document.getElementById("ageMessage").textContent = "You are young.";
  } else {
    document.getElementById("ageMessage").textContent = "You are an adult.";
  }
});

// Part 2: Functions
function calculateTotal(qty, price) {
  return qty * price;
}

function formatName(raw) {
  return raw.charAt(0).toUpperCase() + raw.slice(1).toLowerCase();
}

document.getElementById("calcBtn").addEventListener("click", () => {
  let q = Number(document.getElementById("qty").value);
  let p = Number(document.getElementById("price").value);
  document.getElementById("totalResult").textContent = "Total: " + calculateTotal(q, p);
});

document.getElementById("fmtBtn").addEventListener("click", () => {
  let raw = document.getElementById("rawName").value;
  document.getElementById("fmtResult").textContent = formatName(raw);
});

// Part 3: Loops
const fruits = ["Apple", "Banana", "Cherry"];
document.getElementById("generateBtn").addEventListener("click", () => {
  let list = document.getElementById("sampleList");
  list.innerHTML = "";
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
});

document.getElementById("countBtn").addEventListener("click", () => {
  let n = Number(document.getElementById("countFrom").value);
  let text = "";
  while (n >= 0) {
    text += n + " ";
    n--;
  }
  document.getElementById("countDisplay").textContent = text;
});

// Part 4: DOM Interactions
let counter = 0;
document.getElementById("addItemBtn").addEventListener("click", () => {
  counter++;
  let li = document.createElement("li");
  li.textContent = "Item " + counter;
  document.getElementById("dynamicList").appendChild(li);
});

document.getElementById("clearItemsBtn").addEventListener("click", () => {
  document.getElementById("dynamicList").innerHTML = "";
  counter = 0;
});

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("themeStatus").textContent =
    document.body.classList.contains("dark")
      ? "Theme is dark"
      : "Theme is light";
});
