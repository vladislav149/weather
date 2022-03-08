export const UI_ELEMENTS = {
  TABS_BUTTON: document.querySelectorAll('.main__tab'),
  TABS_INFO: document.querySelectorAll('.main__info'),
  FORM_SUBMIT: document.querySelector('.main__form'),
  TEMPERATURE: document.querySelector('.main__temperature'),
  CITY: document.querySelectorAll('.main__city'),
  INPUT_CITY: document.querySelector('.main__input')
}

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
  data.then(response => UI_ELEMENTS.TEMPERATURE.textContent = Math.round(response.main.temp - 273.16) + '°')
  data.then(response => UI_ELEMENTS.CITY.forEach(city => city.textContent = response.name))
  data.catch(err => console.log('hi', err))
}