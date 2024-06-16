const url = "https://weather-api138.p.rapidapi.com/weather?city_name=";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "1115bf28cdmshbf28d70044822e4p12bb9bjsndb3f433a9dc2",
    "x-rapidapi-host": "weather-api138.p.rapidapi.com",
  },
};

const searchBox = document.querySelector(".search input");
const search = document.querySelector(".searchIcon");
const cross = document.querySelector(".crossIcon");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBox = document.querySelector(".weather");
const weatherCondition = document.querySelector(".condition");

async function checkWeather(city) {
  showLoader();
  const response = await fetch(url + city, options);
  const result = await response.json();
  hideLoader();
  // console.log(result);
  if (result.cod == 404) {
    document.querySelector(".error").style.display = "block";
    weatherBox.style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML = result.name;
    document.querySelector(".temp").innerHTML =
      kelvinToCelsius(result.main.temp) + "°C";
    document.querySelector(".humidityDetails").innerHTML =
      result.main.humidity + " %";
    document.querySelector(".windDetails").innerHTML =
      result.wind.speed + " m/s";
    weatherBox.style.display = "block";

    if (result.weather[0].main == "Clouds") {
      weatherIcon.src = "ASSETS/clouds.png";
      weatherCondition.innerHTML = "Cloudy! it might be raining.. I don't know";
    }
    if (result.weather[0].main == "Clear") {
      weatherIcon.src = "ASSETS/clear.png";
      weatherCondition.innerHTML =
        "Wather is clear! Find someone to walk with you";
    }
    if (result.weather[0].main == "Rain") {
      weatherIcon.src = "ASSETS/rain.png";
      weatherCondition.innerHTML = "Raining! Have some tea and enjoy in home";
    }
    if (result.weather[0].main == "Snow") {
      weatherIcon.src = "ASSETS/snow.png";
      weatherCondition.innerHTML = "Snowing! It's might be christmass";
    }
    if (result.weather[0].main == "Mist") {
      weatherIcon.src = "ASSETS/mist.png";
      weatherCondition.innerHTML = "Misty! Drive carefully";
    }
    if (result.weather[0].main == "Drizzle") {
      weatherIcon.src = "ASSETS/drizzle.png";
      weatherCondition.innerHTML =
        "It's drizzling! Don't forget to take umbrella";
    }
  }
}

search.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

cross.addEventListener("click", () => {
  searchBox.value = "";
  weatherBox.style.display = "none";
  document.querySelector(".error").style.display = "none";
});

kelvinToCelsius(result.main.temp);
function kelvinToCelsius(kelvin) {
  var celsius = kelvin - 273;
  return Math.round(celsius);
}
// -----------------------------Loader function-----------------------------
function hideLoader() {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
}

function showLoader() {
  const loader = document.querySelector(".loader");
  loader.style.display = "block";
}
