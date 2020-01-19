var openButton = document.querySelector('.main-nav__open-button');
var siteMenu = document.querySelector('.main-nav__list--site');
var userMenu = document.querySelector('.main-nav__list--user');

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay-js')
var openModal = document.querySelectorAll('.modal-open-js');
var addButton = document.querySelector('.modal-form__add-button');

var form = document.querySelector('form');
var sendButton = form.querySelector('.form__send-button');

// открытие и закрытие мобильного меню

siteMenu.classList.remove('main-nav__list--open');
userMenu.classList.remove('main-nav__list--open');
siteMenu.classList.add('main-nav__list--close');
userMenu.classList.add('main-nav__list--close');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  siteMenu.classList.toggle('main-nav__list--close');
  userMenu.classList.toggle('main-nav__list--close');
  siteMenu.classList.toggle('main-nav__list--open');
  userMenu.classList.toggle('main-nav__list--open');
});

// открытие и закрытие модального окна

for (var i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--open');
    overlay.classList.add('modal--open');
  });
};

addButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--open');
  overlay.classList.remove('modal--open');
});

overlay.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal--open');
  overlay.classList.remove('modal--open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--open')) {
      modal.classList.remove('modal--open');
      overlay.classList.remove('modal--open');
    }
  }
});
