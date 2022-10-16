//Date & Time
let now = new Date();
let currentTime = document.querySelector("#time");

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

currentTime.innerHTML = `${day} ${hour}:${minutes}`;

///New City
function changeCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let searchForm = document.querySelector(".form-control");
  h1.innerHTML = `${searchForm.value}`;
}

let searchButton = document.querySelector("form");
searchButton.addEventListener("submit", changeCity);

//New Main Weather Info
function showWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city-name");
  let descriptionElement = document.querytSelector("#weather-desc");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}10d@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

//Weather API
function searchCity(city) {
  let apiKey = "1852aed5ea516d2b62e398fa77506e7c";
  let unit = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data";
  let apiUrl = `${apiEndPoint}/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city-name").value;
  searchCity(city);
}

function showFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (14 * 9) / 5 + 32;
  alert(fahrenheitTemperature);
  let temperatureElement = document.querySelector("temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsuisTemperature = null;

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

//Unit Conversaion
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemperature);

searchCity("Los Angeles");

//function convertCelsius(event) {
// event.preventDefault();
//let currentTemperature = document.querySelector("#temperature");
//let celsius = (5 / 9) * (Math.round(fahrenheitTemperature) - 32);
//currentTemperature.innerHTML = Math.round(celsius);
//celsiusUnit.classList.add("active");
//fahrenheitUnit.classList.remove("active");
//}

//function convertFahrenheit(event) {
//event.preventDefault();
//let currentTemperature = document.querySelector("#temperature");
//currentTemperature.innerHTML = Math.round(fahrenheitTemperature);
//celsiusUnit.classList.remove("active");
//fahrenheitUnit.classList.add("active");
//}
