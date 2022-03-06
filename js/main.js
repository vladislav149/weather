document.querySelectorAll('.main__tab').forEach(item =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.main__tab').forEach(
      elem => elem.classList.remove('main__tab--active')
    );
    document.querySelectorAll('.main__info').forEach(
      elem => elem.classList.remove('main__info--active')
    );

    item.classList.add('main__tab--active');
    document.getElementById(id).classList.add('main__info--active');
  })
);

document.querySelector('.main__tab').click();


const button = document.querySelector('.main__search');
button.addEventListener('click', sendCity);

async function sendCity() {
  const inputValue = document.querySelector('.main__input').value;
  const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${serverUrl}?q=${inputValue}&appid=${apiKey}`;
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json();
    const city = document.querySelector('.main__city');
    const temperature = document.querySelector('.main__temperature');
    city.textContent = inputValue[0].toUpperCase() + inputValue.slice(1);
    temperature.textContent = Math.round(json.main.temp - 271) + '°';
  } else {
    alert("Ошибка HTTP: " + response.status);
  }
}