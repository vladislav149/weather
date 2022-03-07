  const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';

  export async function sendCity() {
    const input = document.querySelector('.main__input');
    const cityName = input.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${SERVER_URL}?q=${cityName}&appid=${apiKey}`;
    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      const city = document.querySelector('.main__city');
      const temperature = document.querySelector('.main__temperature');
      city.textContent = cityName[0].toUpperCase() + cityName.slice(1);
      temperature.textContent = Math.round(json.main.temp - 273.16) + '°';
      input.value = '';
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }