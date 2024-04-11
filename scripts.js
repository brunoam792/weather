async function fetchWeatherData() {
  try {
const apiKey = '862694f448a4fe6a6bdddee4cae2c879';
const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.0501&lon=-114.0853&appid=862694f448a4fe6a6bdddee4cae2c879&units=metric');
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeatherData(data) {
  const weatherDataElement = document.getElementById('weatherData');
  const cityName = data.name;
  const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const content = `
    <h2>${cityName}</h2>
    <img src="${iconUrl}" alt="Weather Icon">
    <p>Current Temperature: ${data.main.temp}°C</p>
    <p>Weather Description: ${data.weather[0].description}</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
  weatherDataElement.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchWeatherData();
});
