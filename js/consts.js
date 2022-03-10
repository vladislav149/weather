export const UI_ELEMENTS = {
  TABS_BUTTON: document.querySelectorAll('.main__tab'),
  TABS_INFO: document.querySelectorAll('.main__info'),
  FORM_SUBMIT: document.querySelector('.main__form'),
  TEMPERATURE: document.querySelector('.main__temperature'),
  CITY: document.querySelectorAll('.main__city'),
  INPUT_CITY: document.querySelector('.main__input'),
  BUTTON_LIKE: document.querySelector('.main__btn-heart'),
  LIST_FAVORITE_CITY: document.querySelector('.main__list'),
  CITY_BUTTON: document.querySelectorAll('.main__btn'),
  CITY_DELETE_BUTTON: document.querySelectorAll('.main__delete'),
  WEATHER_ICON: document.querySelector('.main__main-info'),
  DETAILS: {
    TEMPERATURE: document.getElementById('temperature'),
    FEELS_LIKE: document.getElementById('feels-like'),
    WEATHER: document.getElementById('weather'),
    SUNRISE: document.getElementById('sunrise'),
    SUNSET: document.getElementById('sunset')
  }
}



export const favoriteCity = ['Amur Oblast', 'Samara Oblast', 'Bali', 'Dane', 'Kilo', 'Nur-Sultan'];

export const SERVER = {
  URL: 'https://api.openweathermap.org/data/2.5/weather',
  API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
  ICON: 'http://openweathermap.org/img/w/'
}