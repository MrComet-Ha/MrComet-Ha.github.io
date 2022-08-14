const APIKEY = "64525566df173c8295f7ee24d23d6c84";
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
    fetch(url).then(
        response =>response.json()).then(
            data =>{
                const weatherContainer = document.querySelector("#weather span:first-child");
                const cityContainer = document.querySelector("#weather span:last-child");
                weatherContainer.innerText = `It's ${data.weather[0].description}`;
                cityContainer.innerText = `in ${data.name}`;
            }
    );
}

function onGeoError(){
    const errormessage = document.querySelector("#weather span:first-child");
    errormessage.innerText = "I'm so sorry but, I can't find your location."
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
