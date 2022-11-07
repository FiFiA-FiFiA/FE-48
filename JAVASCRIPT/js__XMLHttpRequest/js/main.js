const API__KEY = `5c99d5db686e3e394aae68917e6d7b16`;

const Input = document.querySelector("[Input]");
const Search__Btn = document.querySelector("[Search__Btn]");
const Result__Wrapper = document.querySelector("[Result__Wrapper]");

const SUN__JPEG = "./Image/SUN__JPEG.jpg";
const SUN__PNG = "./Image/SUN__PNG.png";
const CLOUD__JPEG = "./Image/CLOUD__JPEG.jpg";
const CLOUD__PNG = "./Image/CLOUD__PNG.png";
const RAIN__JPEG = "./Image/RAIN__JPEG.jpg";
const RAIN__PNG = "./Image/RAIN__PNG.png";

let Get__Weather = () => {
  let City__Name = Input.value;

  if (City__Name.trim() == "") {
    Result__Wrapper.innerHTML = `<h3 class="Massage">Please enter a city name</h3>`;
  } else {
    const API__Link = `https://api.openweathermap.org/data/2.5/weather?q=${City__Name}&appid=${API__KEY}&units=metric`;
    Input.value = "";

    fetch(API__Link)
      .then((Response) => Response.json())
      .then((Data) => {

        let Weather__Image;

        if (Data.weather[0].main.toLowerCase() == "clouds") {
          document.body.style.backgroundImage = `url(${CLOUD__JPEG})`;
          Weather__Image = CLOUD__PNG;
          document.querySelector("title").textContent = `Weather | ${Data.name} ☁`;
        } else if (Data.weather[0].main.toLowerCase() == "clear") {
          document.body.style.backgroundImage = `url(${SUN__JPEG})`;
          document.querySelector("title").textContent = `Weather | ${Data.name} ☀`;
          Weather__Image = SUN__PNG;
        } else if (Data.weather[0].main.toLowerCase() == "rain") {
          document.body.style.backgroundImage = `url(${RAIN__JPEG})`;
          document.querySelector("title").textContent = `Weather | ${Data.name} 🌧`;
          Weather__Image = RAIN__PNG;
        } else {
          document.body.style.backgroundColor = "#628cf5";
        }

        Result__Wrapper.innerHTML = `
        <h2>${Data.name}</h2>
        <h4 class="weather">${Data.weather[0].main}</h4>
        <h4 class="desc">${Data.weather[0].description}</h4>
        <img src="${Weather__Image}">
        <h1>${Data.main.temp}℃</h1>
        <div class="Temp__Container">
            <div>
                <h4 class="Title">min</h4>
                <h4 class="Temp">${Data.main.temp_min}℃</h4>
            </div>
            <div>
                <h4 class="Title">max</h4>
                <h4 class="Temp">${Data.main.temp_max}℃</h4>
            </div>
        </div>
        `;
      }).catch(() => {
        Result__Wrapper.innerHTML = `<h3 class="Massage">City not found</h3>`;
      });
  }
};

Search__Btn.addEventListener("click", Get__Weather);
window.addEventListener("load", Get__Weather);