var mainNav = document.querySelector('.main-nav');
var openButton = mainNav.querySelector('.main-nav__open-button');
var mobileMenu = mainNav.querySelectorAll('.mobile-menu-open-js');
var modal = document.querySelector('.modal');


// скрытие мобильного меню

for (var i = 0; i < mobileMenu.length; i++) {
  mobileMenu[i].classList.remove('main-nav__list--open');
  mobileMenu[i].classList.add('main-nav__list--close');
};

// открытие и закрытие мобильного меню

openButton.addEventListener('click', function (evt) {
  openButton.classList.toggle('open-js');
  for (var i = 0; i < mobileMenu.length; i++) {
    evt.preventDefault();
    mobileMenu[i].classList.toggle('main-nav__list--close');
    mobileMenu[i].classList.toggle('main-nav__list--open');
  };
});

// открытие и закрытие модального окна

if (modal) {
  var addButton = modal.querySelector('.modal-form__add-button');
  var overlay = document.querySelector('.modal__overlay-js')
  var openModal = document.querySelectorAll('.modal-open-js');

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

  overlay.addEventListener('click', function (evt) {
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
};
