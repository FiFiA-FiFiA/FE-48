const root = document.querySelector(':root');
const container = document.querySelector('[container]');

container.onclick = () => {
  root.classList.toggle('night');
}