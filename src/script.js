function textCity(event) {
    event.preventDefault();
    
    let cityName = document.querySelector("#enterCity");
    let showName = document.querySelector("#currentCity");
    let temperature = document.querySelector("#h2Temp");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let units = "metric";
    let apiKey = "05905c132e5fe49110e5269479bec0c0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=${units}`;
    
    axios.get(`${apiURL}&appid=${apiKey}`).then(showTemperature => {
        showName.innerHTML = showTemperature.data.name;
        console.log(showTemperature);
        temperature.innerHTML = Math.round(showTemperature.data.main.temp);
        humidity.innerHTML = showTemperature.data.main.humidity;
        wind.innerHTML = showTemperature.data.wind.speed;
    });
    
}
     

 function locationButton() {
    function myLocation(position){
        function showCurrentLocation(temp) {
            document.querySelector("#currentCity").innerHTML = temp.data.name;
            document.querySelector("#h2Temp").innerHTML = (Math.round(temp.data.main.temp));
            
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
currentTimeWeek.innerHTML = days[now.getDay()];
let actualMonth = now.getMonth(); 
let actualDay = now.getDate();
let currentDateDay = document.querySelector("#dateDayMonth");
currentDateDay.innerHTML = `${actualDay} / ${actualMonth}`;
let actualHours = now.getHours();
let actualMinutes = now.getMinutes();
let currentHoursMinutes = document.querySelector("#actualTime");
currentHoursMinutes.innerHTML = `${actualHours} : ${actualMinutes}`;