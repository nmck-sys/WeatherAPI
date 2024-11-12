
const searchBar = document.getElementbyID('textEntry');
const form = document.getElementbyID('searchBar');
const history = document.getElementbyID('giveHistory');
const currentWeather = document.getElementById('weatherNow');
const currentForecast = document.getElementById('giveForecast');


function grabWeather(city) {
    const apiKey = 'adc0831491596516de14222646967ab3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
}

function showWeather

function showForecast

function expandHistory