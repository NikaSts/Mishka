var openButton = document.querySelector('.main-nav__open-button');
var siteMenu = document.querySelector('.main-nav__list--site');
var userMenu = document.querySelector('.main-nav__list--user');

// открытие и закрытие мобильного меню

siteMenu.classList.remove('main-nav__list--open');
userMenu.classList.remove('main-nav__list--open');
siteMenu.classList.add('main-nav__list--close');
userMenu.classList.add('main-nav__list--close');

openButton.addEventListener('click', function () {
  siteMenu.classList.toggle('main-nav__list--close');
  userMenu.classList.toggle('main-nav__list--close');
  siteMenu.classList.toggle('main-nav__list--open');
  userMenu.classList.toggle('main-nav__list--open');
});

// модальное окно
