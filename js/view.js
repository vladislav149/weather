import {
  UI_ELEMENTS,
  favoriteCity,
  SERVER,
  MONTHS
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

export function resetInput() {
  UI_ELEMENTS.INPUT_CITY.value = '';
}

export function showInfo(data) {
  data.then(function (response) {
    UI_ELEMENTS.TEMPERATURE.textContent = Math.round(response.main.temp) + '°';
    UI_ELEMENTS.DETAILS.TEMPERATURE.textContent = Math.round(response.main.temp) + '°';
    UI_ELEMENTS.DETAILS.FEELS_LIKE.textContent = Math.round(response.main.feels_like) + '°';
    UI_ELEMENTS.DETAILS.WEATHER.textContent = response.weather[0].description;
    UI_ELEMENTS.DETAILS.SUNRISE.textContent = timeConverter(response.sys.sunrise);
    UI_ELEMENTS.DETAILS.SUNSET.textContent = timeConverter(response.sys.sunset);
    UI_ELEMENTS.WEATHER_ICON.style['background-image'] = `url(${SERVER.ICON}${response.weather[0].icon}.png)`;
    UI_ELEMENTS.CITY.forEach(city => {
      city.textContent = response.name;
      const checkCity = favoriteCity.find(elem => elem === response.name)
      if (checkCity) {
        UI_ELEMENTS.BUTTON_LIKE.classList.add('main__btn-heart--active');
      } else {
        UI_ELEMENTS.BUTTON_LIKE.classList.remove('main__btn-heart--active');
      }
    });
  })
  data.catch(err => console.log('hi', err))
}

export function showInfoHourly(data) {
  data.then(function (response) {
    for (let i = 0; i < response.list.length; i++) {
      const date = dateConverter(response.list[i].dt);
      const time = timeConverter(response.list[i].dt);
      const temperature = Math.round(response.list[i].main.temp);
      const feelsLike = Math.round(response.list[i].main.feels_like);
      const icon = response.list[i].weather[0].icon;
      const weather = response.list[i].weather[0].description;
      addForecast(date, time, temperature, feelsLike, icon, weather);
    }
  })
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

function addForecast(date, time, temperature, feelsLike, icon, weather) {

  UI_ELEMENTS.HOURLY_INFO.insertAdjacentHTML('beforeend',
    `<li class="main__hourly-item">
      <article class="card-weather">
        <div class="card-weather__top">
          <time class="card-weather__date">${date}</time>
          <time class="card-weather__date">${time}</time>
        </div>

        <div class="card-weather__bottom">
          <div class="card-weather__box">
            <span class="card-weather__temperature">Temperature: ${temperature}°</span>
            <span class="card-weather__temperature">Feels like: ${feelsLike}°</span>
          </div>

          <div class = "card-weather__box" style = "background-image:url(${SERVER.ICON}${icon}.png)" >
            ${weather}
          </div>
        </div>
      </article>
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
    hour = 0 + hour;
  }
  let minute = String(date.getMinutes());
  if (minute.length === 1) {
    minute = 0 + minute;
  }

  return `${hour}:${minute}`;
}

function dateConverter(unix) {
  const date = new Date(unix * 1000);
  const month = MONTHS[date.getMonth()];

  let day = String(date.getDate());
  if (day.length === 1) {
    day = 0 + day;
  }

  return `${day} ${month}`;
}

export function deleteForecast() {
  UI_ELEMENTS.HOURLY_INFO.innerHTML = '';
}