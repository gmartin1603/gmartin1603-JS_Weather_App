

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


// * Retrieve weather data from openweathermap

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  //CODE GOES HERE
  const weatherPromise = fetch(FULL_URL)
  return weatherPromise.then((response) => {
    return response.json()
  })
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((response)=>{
    showWeatherData(response);
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText = weatherData.weather[0].description;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = Math.floor(weatherData.main.temp_min);
  document.getElementById("max-temp").innerText = Math.floor(weatherData.main.temp_max);
  document.getElementById("humidity").innerText = Math.floor(weatherData.main.humidity);
  document.getElementById("wind-speed").innerText = Math.floor(weatherData.wind.speed);
  document.getElementById("wind-direction").innerText = `${getWindDir(weatherData.wind.deg)} @ ${weatherData.wind.deg}°`;
  // document.getElementById("sun-rise").innerText = `${getSunRise(weatherData.sys.sunrise)}`;
}


var input = document.getElementById("city-input");

// Execute a function when the user releases a key on the keyboard
window.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    searchCity();
  }
});



function getWindDir(windDeg) {
  let compassDir = null
  
  if (windDeg == 0) {
    compassDir = "N"
  }

  else if (windDeg > 0 && windDeg < 45) {
    compassDir = "N,NE"
  }
  
  else if (windDeg == 45) {
    compassDir = "NE"
  }

  else if (windDeg > 45 && windDeg < 90) {
    compassDir = "E,NE"
  }
  
  else if (windDeg == 90) {
    compassDir = "E"
  }

  else if (windDeg > 90 && windDeg < 135) {
    compassDir = "E,SE"
  }
  
  else if (windDeg == 135) {
    compassDir = "SE"
  }
  
  else if (windDeg > 135 && windDeg < 180) {
    compassDir = "S,SE"
  }
  
  else if (windDeg == 180) {
    compassDir = "S"
  }
  
  else if (windDeg > 180 && windDeg < 225) {
    compassDir = "S,SW"
  }
  
  else if (windDeg == 225) {
    compassDir = "SW"
  }
  
  else if (windDeg > 225 && windDeg < 270) {
    compassDir = "W,SW"
  }
  
  else if (windDeg == 270) {
    compassDir = "W"
  }
  
  else if (windDeg > 270 && windDeg < 360) {
    compassDir = "N,NW"
  }
  return compassDir
}




// function getSunRise(dateStamp) {
//   console.log(dateStamp)
//   let hours = new Date(dateStamp).getHours();
//   let mins = new Date(dateStamp).getMinutes();
//   let sunrise = `${hours+1}:${mins}`
//   console.log(sunrise)
//   return sunrise
// }