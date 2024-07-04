async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '60a3c0cf479ccb218b44398a96eeba32'; 
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'60a3c0cf479ccb218b44398a96eeba32'}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert('City not found!');
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML= `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    ` ; 

}
