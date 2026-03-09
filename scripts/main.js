// Store a reference to the <h1> in a variable
const myImg = document.querySelector("img");
const btn = document.getElementById("ChgColBtn");
let btnChgUsr = document.getElementById("ChgUsrBtn");
let h1 = document.querySelector("h1");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

myImg.title = "Hello world!";

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
  if (btn.style.backgroundColor === `rgb(255, 255, 255)`) {
    btn.style.setProperty("background-color", `rgb(255, 217, 0)`);
  } else {
    btn.style.setProperty("background-color", `rgb(255, 255, 255)`);
  }
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  h1.textContent = `Hi, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  h1.textContent = `Hi, ${storedName}`;
}

btnChgUsr.addEventListener("click", () => {
  setUserName();
});
