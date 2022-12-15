// * HTML 
let Html = document.querySelector("html");
let Theme = localStorage.getItem("Theme");
// * Button Themes
const Btn__Toggle__Theme = document.querySelectorAll("[Btn-Toggle__Theme]");

// * Call Function
Btn__Toggle__Theme.forEach(Btn => Btn.addEventListener("click", Set__Theme));


// * Function Declaration

function Get__Theme() {
  Theme = localStorage.getItem("Theme");
  if (Theme == "Dark") {
    Html.classList.add("Dark__Theme");
    Btn__Toggle__Theme.forEach(Btn => Btn.children.item(i => i).classList.replace("fa-moon", "fa-brightness"));
  } else {
    Html.classList.remove("Dark__Theme");
    Btn__Toggle__Theme.forEach(Btn => Btn.children.item(i => i).classList.replace("fa-brightness", "fa-moon"));
  }
}
Get__Theme();

function Set__Theme() {
  Theme = localStorage.getItem("Theme");

  if (Theme != "Dark") {
    localStorage.setItem("Theme", "Dark");
  } else {
    localStorage.setItem("Theme", "");
  }

  Get__Theme();
}