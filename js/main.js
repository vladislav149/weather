import {
  UI_ELEMENTS,
  showInfo,
  resetInput
} from './view.js'

const SERVER = {
  URL: 'https://api.openweathermap.org/data/2.5/weather',
  API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f'
}

UI_ELEMENTS.FORM_SUBMIT.addEventListener('submit', getWeather);

function getWeather(e) {
  e.preventDefault();
  showInfo(getJSON());
  resetInput();
}

function getCity(input) {
  return input.value;
}

function getJSON() {
  const city = getCity(UI_ELEMENTS.INPUT_CITY);
  const url = `${SERVER.URL}?q=${city}&appid=${SERVER.API_KEY}`;
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        alert('Некорректный город')
      }
    })
    .catch(err => alert('Ошибка url', err))
}