var input = document.querySelector('.inputCity');
var cityname = document.querySelector('.City');
var countryname = document.querySelector('.Country');
var temp = document.querySelector('.temp');
// var min_temp = document.querySelector('.min_temp');
// var max_temp = document.querySelector('.max_temp');
var hum = document.querySelector('.hum');
var weather = document.querySelector('.desc');
var wind = document.querySelector('.wind');
var button = document.querySelector('.submit');

input.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        button.click();
        this.blur();
    }
})

button.addEventListener('click', function (Cityname) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=08a8aefda2a75b43cc9f4b86b88ebab5&units=metric`)
        .then(response => response.json())
        .then(data => {
            var tempValue = data.main.temp;
            // var min_tempValue = data.main.temp_min;
            // var max_tempValue = data.main.temp_max;
            var nameValue = data.name;
            var humValue = data.main.humidity;
            var countryValue = data.sys.country;
            var desc = data.weather['0'].main;
            var windSpeed = data.wind.speed;

            cityname.innerHTML = nameValue;
            countryname.innerHTML = countryValue;
            temp.innerHTML = tempValue;
            // min_temp.innerHTML = "MIN: " + min_tempValue + "&#8451";
            // max_temp.innerHTML = "Max: " + max_tempValue + "&#8451";
            hum.innerHTML = "Humidity: " + humValue + "&percnt;";
            wind.innerHTML = "Wind Speed: " + windSpeed + " m/s";
            weather.innerHTML = desc;
            input.value = "";

            if (weather.textContent == 'Clouds') {
                document.body.style.background = "url('./images/clouds.jpg')";
            } else if (weather.textContent == 'Clear') {
                document.body.style.background = "url('./images/clear.jpg')";
            } else if (weather.textContent == 'Thunderstorm') {
                document.body.style.background = "url('./images/thunderstorm.jpg')";
            } else if (weather.textContent == 'Drizzle') {
                document.body.style.background = "url('./images/drizzle.jpg')";
            } else if (weather.textContent == 'Rain') {
                document.body.style.background = "url('./images/rain.jpg')";
            } else if (weather.textContent == 'Snow') {
                document.body.style.background = "url('./images/snow.jpg')";
            } else if (weather.textContent == 'Mist') {
                document.body.style.background = "url('./images/mist.jpg')";
            } else if (weather.textContent == 'Smoke') {
                document.body.style.background = "url('./images/smoke.jpg')";
            } else if (weather.textContent == 'Haze') {
                document.body.style.background = "url('./images/haze.jpg')";
            } else if (weather.textContent == 'Dust') {
                document.body.style.background = "url('./images/dust.jpg')";
            } else if (weather.textContent == 'Fog') {
                document.body.style.background = "url('./images/fog.jpg')";
            } else if (weather.textContent == 'Sand') {
                document.body.style.background = "url('./images/sand.jpg')";
            } else if (weather.textContent == 'Ash') {
                document.body.style.background = "url('./images/ash.jpg')";
            } else if (weather.textContent == 'Squall') {
                document.body.style.background = "url('./images/sqall.jpg')";
            } else if (weather.textContent == 'Tornado') {
                document.body.style.background = "url('./images/tornado.jpg')";
            }
            document.body.style.backgroundSize = "cover";
            document.body.style.overflow = "hidden";
            document.body.style.backgroundPosition = "center center";
            document.body.style.backgroundRepeat = "no-repeat";
            // document.body.style.height = "100vh";

        })

        .catch(err => cityname.innerHTML = "No data found!!",
            countryname.innerHTML = "",
            temp.innerHTML = "",
            hum.innerHTML = "",
            wind.innerHTML = "",
            weather.innerHTML = "");//alert("Sorry We don't have data for you city!"));
})
