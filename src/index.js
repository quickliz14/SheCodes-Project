//Assignment 1
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

///Assignment 2
function changeCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let searchForm = document.querySelector(".form-control");
  h1.innerHTML = `${searchForm.value}`;
}

let searchButton = document.querySelector("form");
searchButton.addEventListener("submit", changeCity);

//week 5 homework
function showWeather(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-desc").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed * 3.6
  );
}

function searchCity(city) {
  let apiKey = "1852aed5ea516d2b62e398fa77506e7c";
  let unit = "imperial";
  let apiEndPoint = "https://api.openweathermap.org/data";
  let apiUrl = `${apiEndPoint}/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

let iconElement = document.querySelector("#icon");
iconElement.setAttribute(
  "src",
  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}10d@2x.png`
);
iconElement.setAttribute("alt", response.data.weather[0].description);

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city-name").value;
  searchCity(city);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

searchCity("Los Angeles");

//Adding in more data  functionality
