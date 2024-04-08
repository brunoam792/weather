async function fetchWeatherData() {
    try {
      const response = await fetch('/weather');
      const data = await response.json();
      displayWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  function displayWeatherData(data) {
    const weatherDataElement = document.getElementById('weatherData');
    const cityName = 'Calgary';
    const iconUrl = `//openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
    const content = `
      <h2>${cityName}</h2>
      <img src="${iconUrl}" alt="Weather Icon">
      <p>Current Temperature: ${data.current.temp}°C</p>
      <p>Weather Description: ${data.current.weather[0].description}</p>
      <p>Wind Speed: ${data.current.wind_speed} m/s</p>
      <p>Humidity: ${data.current.humidity}%</p>
    `;
    weatherDataElement.innerHTML = content;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
  });
  