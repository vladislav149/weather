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