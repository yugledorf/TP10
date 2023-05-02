const form = document.querySelector('form');
const input = document.querySelector('input');
const weatherContainer = document.getElementById('weather-container');
const FButton = document.getElementById('Forecast-button');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form submission
  
  let cityName = input.value;
  let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/today?key=P48QZ97RTS9TRHGDWT3WH4GLY&include=days&contentType=json`;
  
  //get daily weather for current
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then(data => {
      const weatherData = {
        address: data.address,
        date: data.days[0].datetime,
        temp: data.days[0].temp + "F",
        humidity: data.days[0].humidity,
        windspeed: data.days[0].windspeed + "MPH",
        winddir: data.days[0].winddir + " Degrees N",
        uvindex: data.days[0].uvindex,
        cloudcover: data.days[0].cloudcover + "%",
        conditions: data.days[0].icon,
};  
const conditions = weatherData.conditions;
const body = document.querySelector('body');

//create image based off of icon conditions
if (conditions === "clear-day") {
  body.style.backgroundImage = "url('clear-day.png')";
} else if (conditions === "clear-night") {
  body.style.backgroundImage = "url('clear-night.png')";
} else if (conditions === "cloudy") {
  body.style.backgroundImage = "url('cloudy.png')";
} else if (conditions === "fog") {
  body.style.backgroundImage = "url('fog.png')";
} else if (conditions === "partly-cloudy-day") {
  body.style.backgroundImage = "url('partly-cloudy-day.png')";
} else if (conditions === "rain") {
  body.style.backgroundImage = "url('rain.png')";
} else if (conditions === "showers-day") {
  body.style.backgroundImage = "url('showers-day.png')";
} else if (conditions === "showers-night") {
  body.style.backgroundImage = "url('showers-night.png')";
} else if (conditions === "snow") {
  body.style.backgroundImage = "url('snow.png')";
} else if (conditions === "snow-showers-day") {
  body.style.backgroundImage = "url('snow-showers-day.png')";
} else if (conditions === "snow-showers-night") {
  body.style.backgroundImage = "url('snow-showers-night.png')";
} else if (conditions === "thunder-rain") {
  body.style.backgroundImage = "url('thunder-rain.png')";
} else if (conditions === "thunder-showers-day") {
  body.style.backgroundImage = "url('thunder-showers-day.png')";
} else if (conditions === "thunder-showers-night") {
  body.style.backgroundImage = "url('thunder-showers-night.png')";
} else if (conditions === "wind") {
  body.style.backgroundImage = "url('wind.png')";
} else {
  body.style.backgroundImage = "url('default-background.jpg')";
}
// clear previous weather data
  weatherContainer.innerHTML = '';
  
  // create and append weather cards
  Object.keys(weatherData).forEach(key => {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');
    
    const header = document.createElement('h2');
    header.textContent = key.toUpperCase();
    weatherCard.appendChild(header);
    
    const content = document.createElement('p');
    content.textContent = weatherData[key];
    weatherCard.appendChild(content);
    
    weatherContainer.appendChild(weatherCard);
  });
})
//catch errors
.catch(error => {
  console.log(error);
});});
FButton.addEventListener('click', () => {
    cityName = input.value;
url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}/today/next3days?key=P48QZ97RTS9TRHGDWT3WH4GLY&include=days&contentType=json`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    //get forecast weather data
    .then(data => {
      const weatherData = {
        date: data.days[0].datetime,
        temp: data.days[0].temp + "F",
        humidity: data.days[0].humidity,
        windspeed: data.days[0].windspeed + "MPH",
        winddir: data.days[0].winddir + " Degrees N",
        uvindex: data.days[0].uvindex,
        cloudcover: data.days[0].cloudcover + "%",
        Tomorrow: data.days[1].datetime,
        Temp: data.days[1].temp + "F",
        Humidity: data.days[1].humidity,
        Windspeed: data.days[1].windspeed + "MPH",
        Winddir: data.days[1].winddir + " Degrees N",
        Uvindex: data.days[1].uvindex,
        Cloudcover: data.days[1].cloudcover + "%",
        Day_Three: data.days[2].datetime,
        TEmp: data.days[2].temp + "F",
        HUmidity: data.days[2].humidity,
        WIndspeed: data.days[2].windspeed + "MPH",
        WInddir: data.days[2].winddir + " Degrees N",
        UVindex: data.days[2].uvindex,
        CLoudcover: data.days[2].cloudcover + "%",
        Day_Four: data.days[3].datetime,
        TEMp: data.days[3].temp + "F",
        HUMidity: data.days[3].humidity,
        WINdspeed: data.days[3].windspeed + "MPH",
        WINddir: data.days[3].winddir + " Degrees N",
        UVIndex: data.days[3].uvindex,
        CLOudcover: data.days[3].cloudcover + "%",
        address: data.address,
};  // clear previous weather data
  weatherContainer.innerHTML = '';
  
  // create and append weather cards
  Object.keys(weatherData).forEach(key => {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');
    
    const header = document.createElement('h2');
    header.textContent = key.toUpperCase();
    weatherCard.appendChild(header);
    
    const content = document.createElement('p');
    content.textContent = weatherData[key];
    weatherCard.appendChild(content);
    
    weatherContainer.appendChild(weatherCard);
  });
})
.catch(error => {
  console.log(error);
});
});