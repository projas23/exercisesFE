async function getWeather(){
   
    // let city = '08536';
let city = document.getElementById('zipcode').value
let key = 'd72729578543cfc435344f99b226b1c9'
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
await fetch(url)
.then((weather) => {return weather.json()})
.then(displayData);
}


function displayData(weather){
    let mydiv = document.getElementById('w');
    console.log(weather);
    let tempCelsius = weather.main.temp;
    let tempFahrenheit = (tempCelsius * 9/5) + 32;
    let city = weather.name;
    let weatherDescription = weather.weather[0].main;
    let iconCode = weather.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

    mydiv.innerHTML = `
        <div class="card mt-4">
            <div class="card-header">Weather in ${city}</div>
            <div class="card-body">
                <h5 class="card-title">
                    <img src="${iconUrl}" alt="Icon"> ${weatherDescription}
                </h5>
                <p class="card-text">Temperature: ${tempCelsius}°C (${tempFahrenheit}°F)</p>
                <p class="card-text">Humidity: ${weather.main.humidity}%</p>
                <p class="card-text">Wind Speed: ${weather.wind.speed} m/s</p>
            </div>
        </div>
    `;
}
