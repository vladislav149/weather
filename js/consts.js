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
  HOURLY_INFO: document.querySelector('.main__hourly-list'),
  DETAILS: {
    TEMPERATURE: document.getElementById('temperature'),
    FEELS_LIKE: document.getElementById('feels-like'),
    WEATHER: document.getElementById('weather'),
    SUNRISE: document.getElementById('sunrise'),
    SUNSET: document.getElementById('sunset')
  }
}

export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export let favoriteCity = [];
if (localStorage.getItem('favoriteCity')) {
  favoriteCity = localStorage.getItem('favoriteCity').split(',');
}

export const SERVER = {
  URL: {
    CURRENT: 'https://api.openweathermap.org/data/2.5/weather',
    HOURLY: 'https://api.openweathermap.org/data/2.5/forecast'
  },
  API_KEY: '3d8af9f7ae111ad0770a6a9d37546134',
  ICON: 'https://openweathermap.org/img/w/'
}