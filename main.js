const num1 = document.getElementById("num1");
let val = Number (num1.innerText);



function reset () {
  val = 0;
  num1.innerHTML = val;
  update();
}

function increase () {
  val += 1;
  num1.innerHTML= val;
  update();
}

function decrease () {
  val -= 1;
  num1.innerHTML = val;
  update();
}

function update () {
  if (val > 0) num1.style.color="green";
  else if (val < 0) num1.style.color="red";
  else if (val === 0) num1.style.color="black";
}