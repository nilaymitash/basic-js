var counter = 0;

function resetCounter() {
  this.counter = 0;
  document.getElementById("counter-span").innerHTML = counter;
}
resetCounter();

function increaseCounter() {
  this.counter++;
  document.getElementById("counter-span").innerHTML = counter;   
}

function decreaseCounter() {
  this.counter--;
  document.getElementById("counter-span").innerHTML = counter;
}

function changeColor(element, color) {
  element.style = "background: "+color;
}

function resetColor(element) {
  element.style = null;
}
