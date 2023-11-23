const input = document.querySelector('.input-search')
const main = document.querySelector('#main')

function changeWeatherApp(weather) {
    const city = document.querySelector('.heading-name .city')
    const country = document.querySelector('.heading-name .country')
    const datetime = document.querySelector('.datetime')
    const temperature = document.querySelector('.temperature .value')
    const shortDescription = document.querySelector('.short-desc')
    const visibility = document.querySelector('.visibility span')
    const wind = document.querySelector('.wind span')
    const cloud = document.querySelector('.cloud span')

    city.innerText = weather.name
    country.innerText = weather.sys.country
    datetime.innerText = new Date().toLocaleString()
    shortDescription.innerText = weather.weather[0].main

    var temper = Math.round(weather.main.temp)
    temperature.innerText = temper
    temper >= 18 ? main.className = 'hot' : main.className = 'cold'

    visibility.innerText = weather.visibility + ' (m)'
    wind.innerText = weather.wind.speed + ' (m/s)'
    cloud.innerText = weather.clouds.all + ' (%)'
}

input.onkeyup = function(e) {
    if (e.keyCode === 13) {
        getWeather(e.target.value)
    }
}

function getWeather(input) {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    fetch(weatherApi)
        .then(response => response.json())
        .then(weather => {
            changeWeatherApp(weather)
        })
}

getWeather('ha noi')
