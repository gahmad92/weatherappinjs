// VERSION 1:

// const apiKey = "6df12092efee5937f3893bad6c020c73";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=31.5204&lon=74.3587&units=metric";

// let checkWeather = async () => {
//     const response = await fetch(apiURL+ `&appid=${apiKey}`);
//     let data = await response.json()
//     console.log(data);
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+'°C ';
//     document.querySelector(".humidity").innerHTML = data.main.humidity+'%';
//     document.querySelector(".wind").innerHTML = data.wind.speed+'km';

// }

// checkWeather();

// VERSION 2:

// const apiKey = "6df12092efee5937f3893bad6c020c73";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".jhelo");
// const searchBtn = document.querySelector(".search-btn");

// async function checkWeather(city) {
//     const response = await fetch(apiURL + city + `&appid=${apiKey}`);

//     if (response.status == 404) {
//         alert("City not found!");
//         return;
//     }

//     let data = await response.json();
//     console.log(data);

//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//     document.querySelector(".Wind").innerHTML = data.wind.speed + " km";
// }

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });

//VERSION 3:

const apiKey = "6df12092efee5937f3893bad6c020c73";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".jhelo");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    alert("City not found!");
    return;
  }

  const data = await response.json();
  console.log(data);

  document.querySelector(
    ".city"
  ).innerHTML = `${data.name}, ${data.sys.country}`;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
  document.querySelector(".visibility").innerHTML =
    data.visibility / 1000 + " km";
  document.querySelector(".condition").innerHTML =
    data.weather[0].main + " - " + data.weather[0].description;


  document.querySelector(
    ".lat-lon"
  ).innerHTML = `Lat: ${data.coord.lat}, Lon: ${data.coord.lon}`;
  document.querySelector(".feels-like").innerHTML = `Feels like: ${Math.round(
    data.main.feels_like
  )}°C`;
  document.querySelector(".temp-range").innerHTML = `Min: ${Math.round(
    data.main.temp_min
  )}°C, Max: ${Math.round(data.main.temp_max)}°C`;
  document.querySelector(
    ".clouds"
  ).innerHTML = `Cloudiness: ${data.clouds.all}%`;
  document.querySelector(".timezone").innerHTML = `Timezone Offset: ${
    data.timezone / 3600
  } hrs`;

  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  document.querySelector(
    ".sun-times"
  ).innerHTML = `Sunrise: ${sunriseTime}, Sunset: ${sunsetTime}`;

  if(data.weather[0].main =="Clouds"){
    weatherIcon.src="images/clouds.png"
  }
  else if (data.weather[0].main=="Clear") {
    weatherIcon.src= "images/clear.png"
  }
  else if (data.weather[0].main=="Rain") {
    weatherIcon.src="images/rain.png"
  }
  else if (data.weather[0].main=="Drizzle") {
    weatherIcon.src="images/drizzle.png"
  }
 else if (data.weather[0].main=="Mist") {
    weatherIcon.src="images/mist.png"
 }

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});
searchBox.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value.trim());
  }
});
