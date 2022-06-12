//Creating variables
let x = document.getElementById("fdiv");
let y = document.getElementById("subdiv");
let z = document.getElementById("sec");
let q = document.getElementById("text")

//Creating submit function
function submit() {
     z.replaceChild(y, x);
     y.style.display = "block";
}

//Creating rating fuction
let a = document.getElementById("one");
let b = document.getElementById("two");
let c = document.getElementById("three");
let d = document.getElementById("four");
let e = document.getElementById("five");

function one() {
  a.style.backgroundColor = "hsl(25, 97%, 53%)";
  a.style.color = "white";
  q.innerText = "You selected 1 out of 5";
}

function two() {
  b.style.backgroundColor = "hsl(25, 97%, 53%)";
  b.style.color = "white";
  q.innerText = "You selected 2 out of 5";
}

function three() {
  c.style.backgroundColor = "hsl(25, 97%, 53%)";
  c.style.color = "white";
  q.innerText = "You selected 3 out of 5";
}

function four() {
  d.style.backgroundColor = "hsl(25, 97%, 53%)";
  d.style.color = "white";
  q.innerText = "You selected 4 out of 5";
}

function five() {
  e.style.backgroundColor = "hsl(25, 97%, 53%)";
  e.style.color = "white";
  q.innerText = "You selected 5 out of 5";
}