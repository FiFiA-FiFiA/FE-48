let div = document.querySelector("[div]");

let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

div.style.background = `rgb(${red}, ${green}, ${blue})`;

div.addEventListener("click", get__random__color);

function get__random__color() {
  red = Math.floor(Math.random() * 255);
  green = Math.floor(Math.random() * 255);
  blue = Math.floor(Math.random() * 255);

  div.style.background = `rgb(${red}, ${green}, ${blue})`;

  if ((red + green + blue >= 350)) {
    div.style.color = "#111";
  } else {
    div.style.color = "#fff";
  }
}