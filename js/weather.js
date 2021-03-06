const API_KEY = "563e585dd9e92253052b32aef4361b52";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json().then(data =>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = data.name;
    // console.log(data.name, data.weather[0].main)
  }));
}
function onGeoError(){
  alert("Can't find you. No Weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)