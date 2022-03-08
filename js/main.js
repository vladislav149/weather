import {
  UI_ELEMENTS,
  resetInput
} from './view.js'

const SERVER = {
  URL: 'https://api.openweathermap.org/data/2.5/weather',
  API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
}

UI_ELEMENTS.FORM_SUBMIT.addEventListener('submit', getWeather);

function getWeather(e) {
  e.preventDefault();
  showInfo();
  resetInput();
}

function getCity(input) {
  return input.value;
}

function getJSON() {
  const city = getCity(UI_ELEMENTS.INPUT_CITY);
  const url = `${SERVER.URL}?q=${city}&appid=${SERVER.API_KEY}`;
  return fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err))
}

function showInfo() {
  const json = getJSON()
  json.then(response => UI_ELEMENTS.TEMPERATURE.textContent = Math.round(response.main.temp - 273.16) + '°')
  json.then(response => UI_ELEMENTS.CITY.forEach(city => city.textContent = response.name))
  json.catch(err => console.log(err))
}