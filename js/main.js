import {
  UI_ELEMENTS,
  favoriteCity,
  SERVER
} from './consts.js'

import {
  showInfo,
  showInfoHourly,
  resetInput,
  addFavoriteCite,
  deleteFavoriteCity,
  deleteForecast
} from './view.js'

UI_ELEMENTS.FORM_SUBMIT.addEventListener('submit', getWeather);
UI_ELEMENTS.BUTTON_LIKE.addEventListener('click', changeListFavoriteCity);
UI_ELEMENTS.CITY_BUTTON.forEach(item => {
  item.addEventListener('click', showThisCity)
});
UI_ELEMENTS.CITY_DELETE_BUTTON.forEach(item => {
  item.addEventListener('click', deleteCity)
});


function getWeather(e) {
  e.preventDefault();
  deleteForecast();
  showInfo(getJSON(SERVER.URL.CURRENT));
  showInfoHourly(getJSON(SERVER.URL.HOURLY));
  resetInput();
}

function getCity(input) {
  return input.value;
}

function getJSON(server) {
  const city = getCity(UI_ELEMENTS.INPUT_CITY);
  const url = `${server}?q=${city}&appid=${SERVER.API_KEY}&units=metric`;
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

function changeListFavoriteCity() {
  const nameCity = this.previousElementSibling.textContent;
  if (!nameCity) return
  this.classList.toggle('main__btn-heart--active');
  let isThereACity = favoriteCity.findIndex(elem => elem === nameCity);

  if (isThereACity + 1) {
    favoriteCity.splice(isThereACity, 1);
    deleteFavoriteCity(nameCity);

  } else {
    favoriteCity.push(nameCity);
    addFavoriteCite(nameCity);

    const newFavoriteCity = UI_ELEMENTS.LIST_FAVORITE_CITY.lastChild.querySelector('.main__btn');
    newFavoriteCity.addEventListener("click", showThisCity);

    const deleteNewFavoriteCity = UI_ELEMENTS.LIST_FAVORITE_CITY.lastChild.querySelector('.main__delete');
    deleteNewFavoriteCity.addEventListener("click", deleteCity);
  }
}

function showThisCity() {
  UI_ELEMENTS.INPUT_CITY.value = this.textContent;
  deleteForecast();
  showInfo(getJSON(SERVER.URL.CURRENT));
  showInfoHourly(getJSON(SERVER.URL.HOURLY));
  resetInput();
}

function deleteCity() {
  const city = this.previousElementSibling.textContent;
  deleteFavoriteCity(city);
  let isThereACity = favoriteCity.findIndex(elem => elem === city);
  favoriteCity.splice(isThereACity, 1);
  UI_ELEMENTS.BUTTON_LIKE.classList.remove('main__btn-heart--active');
}