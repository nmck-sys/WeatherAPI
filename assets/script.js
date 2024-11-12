
const searchBar = document.getElementById('textEntry');
const form = document.getElementById('searchBar');
const history = document.getElementById('giveHistory');
const currentWeather = document.getElementById('weatherNow');
const currentForecast = document.getElementById('giveForecast');

let weatherHistory = [];
const apiKey = 'adc0831491596516de14222646967ab3';

function grabWeather(city) {
    const myURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    fetch(myURL)
        .then(response => response.json())
        .then(data => {
            showWeather(data);
        })
};


function showWeather(data) {
    currentWeather.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
    <h2>Current weather in ${data.name}</h2>
    <h3>Temperature: ${data.main.temp}°C</h3>
    <h4>Humidity: ${data.main.humidity}%</h4>
    `
    weatherHistory.push(data.name);
    showHistory();
}


function grabForecast(city) {
    const forecastLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(forecastLink)
        .then(response => response.json())
        .then(data => {
            showForecast(data);
        })
};

function showForecast(data) {
    currentForecast.innerHTML = `<h5>Five-day forecast:</h5>`;
    data.list.forEach((item) => {
        if (item.dt_txt.includes('12:00:00')) {
            currentForecast.innerHTML += `
                <div class="forecast-item">
                <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png">
                    <p><strong>${new Date(item.dt_txt).toLocaleDateString()}</strong></p>
                    <p>Temperature: ${item.main.temp}°C</p>
                    <p>Condition: ${item.weather[0].description}</p>
                </div>
`;
        }
    })
}

function saveHistory() {
    history.innerHTML = '<h3>Search History</h3>';
    weatherHistory.forEach(city => {
        history.innerHTML += `<p>${city}</p>`;
    });
}

const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    const city = searchBar.value.trim();
    if (city) {
        grabWeather(city);
        grabForecast(city);
        searchBar.value = ''
    }
}

form.addEventListener('submit', handleSearchFormSubmit);