const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 3000;

const apiKey = '862694f448a4fe6a6bdddee4cae2c879'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = 'https://api.openweathermap.org/data/3.0/onecall';

app.use(express.static(path.join(__dirname, '/')));

app.get('/weather', async (req, res) => {
  try {
    const lat = req.query.lat || '51.0501';
    const lon = req.query.lon || '-114.0853';
    const units = req.query.units || 'metric';

    const response = await axios.get(apiUrl, {
      params: {
        lat: lat,
        lon: lon,
        appid: apiKey,
        units: units,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
