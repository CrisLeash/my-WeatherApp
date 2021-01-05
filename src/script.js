function textCity(event) {
    event.preventDefault();
    
    let cityName = document.querySelector("#enterCity");
    let showName = document.querySelector("#currentCity");
    let temperatureCel = document.querySelector("#h2Temp");
    let humidity = document.querySelector("#humidity");
    let feelsLike = document.querySelector("#feelsLike");
    let wind = document.querySelector("#wind");
    let units = "metric";
    let apiKey = "05905c132e5fe49110e5269479bec0c0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=${units}`;
    let weatherIcon = document.querySelector("#icon");
    let description = document.querySelector("#description");

    axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature => {
        
        celsiusTemp = showTemperature.data.main.temp;

        console.log(showTemperature);
        let iconNumber = showTemperature.data.weather[0].icon;
        showName.innerHTML = showTemperature.data.name;
        temperatureCel.innerHTML = Math.round(celsiusTemp);
        humidity.innerHTML = showTemperature.data.main.humidity;
        wind.innerHTML = showTemperature.data.wind.speed;
        feelsLike.innerHTML = Math.round(showTemperature.data.main.feels_like);
        description.innerHTML = showTemperature.data.weather[0].description;
        weatherIcon.setAttribute("src" , `http://openweathermap.org/img/wn/${iconNumber}@2x.png`);
    });
    
}
     
 function locationButton() {
    function myLocation(position){

        function showCurrentLocation(temp) {
            let iconNumber = temp.data.weather[0].icon;
            console.log(iconNumber);
            document.querySelector("#currentCity").innerHTML = temp.data.name;
            document.querySelector("#humidity").innerHTML = temp.data.main.humidity;
            document.querySelector("#wind").innerHTML = temp.data.wind.speed;
            document.querySelector("#feelsLike").innerHTML = (Math.round(temp.data.main.feels_like));
            document.querySelector("#h2Temp").innerHTML = (Math.round(temp.data.main.temp));
            document.querySelector("#description").innerHTML = temp.data.weather[0].description;
            document.querySelector("#icon").innerHTML = weatherIcon.setAttribute("src" , `http://openweathermap.org/img/wn/${iconNumber}@2x.png`);
        }
        
        let lat = (position.coords.latitude);
        let lon = (position.coords.longitude);
        let units = "metric";
        let apiKey = "05905c132e5fe49110e5269479bec0c0";
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;

        axios.get(`${apiURL}&units=${units}&appid=${apiKey}`).then(showCurrentLocation);

     }
     navigator.geolocation.getCurrentPosition(myLocation);
}
function showFarenheit(event) {
    event.preventDefault();
    let showTemp = document.querySelector("#h2Temp");
    let farenheitTemp = ((celsiusTemp * 9) / 5 + 32);
    showTemp.innerHTML = Math.round(farenheitTemp);
}

function showCelsius(event) {
    event.preventDefault();
    let showTemp = document.querySelector("#h2Temp");
    showTemp.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", showFarenheit);

let form = document.querySelector("#citySubmit");
    form.addEventListener("click", textCity);

//location coordinates button
let maLocation = document.querySelector("#buttonCurrentPlace");
maLocation.addEventListener("click", locationButton);

//formatDate
let now = new Date();
let days = 
["Sunday",
"Monday", 
"Tuesday", 
"Wednsday", 
"Thursday", 
"Friday",
 "Saturday"];
let currentTimeWeek = document.querySelector("#weekDay");
let actualMonth = now.getMonth()+1;
let actualDay = now.getDate() 
let actualHours = now.getHours();
let actualMinutes = now.getMinutes();
let currentHoursMinutes = document.querySelector("#actualTime");
let currentDateDay = document.querySelector("#dateDayMonth");

currentTimeWeek.innerHTML = days[now.getDay()];
currentDateDay.innerHTML = `${actualDay >= 10 ? actualDay : '0' + actualDay} / ${actualMonth >= 10 ? actualMonth : '0' + actualMonth}`;
currentHoursMinutes.innerHTML = `${actualHours >= 10 ? actualHours : `0` + actualHours} : ${actualMinutes >= 10 ? actualMinutes : `0` + actualMinutes}`;

