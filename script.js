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
                document.body.style.background = "url('https://images.unsplash.com/photo-1612321962149-e521bd2285e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80')";
                document.body.style.backgroundSize = "cover";
                document.body.style.backgroundRepeat = "no-repeat";
            } else if (weather.textContent == 'Clear') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1614945762401-cd723ad19cd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Thunderstorm') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Drizzle') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1505404919723-002ecad81b92?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Rain') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1496034663057-6245f11be793?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Snow') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1598301412171-f3b253961f9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Mist') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1563417079254-6025a98aef80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Smoke') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1570895986281-4ac3feb00b9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Haze') {
                document.body.style.background = "url('https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1161&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Dust') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1530867500740-c0def037d2c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Fog') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1491824989090-cc2d0b57eb0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1418&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Sand') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1543604502-9baac28067ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Ash') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1518457901585-7ef149f860f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Squall') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1446751326867-4d0fd17def86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            } else if (weather.textContent == 'Tornado') {
                document.body.style.background = "url('https://images.unsplash.com/photo-1581059729226-c493d3086748?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80')";
                document.body.style.backgroundRepeat = "no-repeat";
                document.body.style.backgroundSize = "cover";
            }

        })

        .catch(err => cityname.innerHTML = "No data found!!");//alert("Sorry We don't have data for you city!"));
})