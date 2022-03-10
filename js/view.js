import {
  UI_ELEMENTS,
  favoriteCity,
  SERVER
} from './consts.js'

UI_ELEMENTS.TABS_BUTTON.forEach(item =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href').replace('#', '');

    UI_ELEMENTS.TABS_BUTTON.forEach(
      elem => elem.classList.remove('main__tab--active')
    );
    UI_ELEMENTS.TABS_INFO.forEach(
      elem => elem.classList.remove('main__info--active')
    );

    item.classList.add('main__tab--active');
    document.getElementById(id).classList.add('main__info--active');
  })
);

document.querySelector('.main__tab').click();

export function resetInput() {
  UI_ELEMENTS.INPUT_CITY.value = '';
}

export function showInfo(data) {
  data.then(response => UI_ELEMENTS.TEMPERATURE.textContent = Math.round(response.main.temp) + '°')
  data.then(response => UI_ELEMENTS.DETAILS.TEMPERATURE.textContent = Math.round(response.main.temp) + '°')
  data.then(response => UI_ELEMENTS.DETAILS.FEELS_LIKE.textContent = Math.round(response.main.feels_like) + '°')
  data.then(response => UI_ELEMENTS.DETAILS.WEATHER.textContent = response.weather[0].main)
  data.then(response => UI_ELEMENTS.DETAILS.SUNRISE.textContent = timeConverter(response.sys.sunrise))
  data.then(response => UI_ELEMENTS.DETAILS.SUNSET.textContent = timeConverter(response.sys.sunset))
  data.then(response => UI_ELEMENTS.WEATHER_ICON.style['background-image'] = `url(${SERVER.ICON}${response.weather[0].icon}.png)`)
  data.then(response => UI_ELEMENTS.CITY.forEach(city => {
    city.textContent = response.name;
    const checkCity = favoriteCity.find(elem => elem === response.name)
    if (checkCity) {
      UI_ELEMENTS.BUTTON_LIKE.classList.add('main__btn-heart--active');
    } else {
      UI_ELEMENTS.BUTTON_LIKE.classList.remove('main__btn-heart--active');
    }
  }))
  data.catch(err => console.log('hi', err))
}

export function addFavoriteCite(nameCity) {
  UI_ELEMENTS.LIST_FAVORITE_CITY.insertAdjacentHTML('beforeend',
    `<li class="main__item animation">
      <button class="main__btn" type="button">${nameCity}</button>
      <button class="main__delete" type="button"></button>
    </li>`
  )
}

export function deleteFavoriteCity(nameCity) {
  document.querySelectorAll('.main__btn').forEach(
    elem => {
      if (elem.textContent === nameCity) {
        elem.parentElement.remove()
      }
    }
  )
}

function timeConverter(unix) {
  const date = new Date(unix * 1000);
  let hour = String(date.getHours());
  if (hour.length === 1) {
    hour = 0 + hour
  }
  let minute = String(date.getMinutes());
  if (minute.length === 1) {
    minute = 0 + minute
  }
  return hour + ':' + minute;
}