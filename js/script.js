const link = document.querySelector('.login-link');
const modal = document.querySelector('.modal-login');
const close = document.querySelector('.modal-close');

const login = modal.querySelector('[name=login]');
const password = modal.querySelector('[name=password');
const form = modal.querySelector('form');

let isStorageSupport = true;
let storage;
// конструкция для обработок ошибок браузера: попробуй выполнить инструкцию, если увидишь ошибку то выполни это
try {
  storage = localStorage.getItem('login'); //мы значем, что эта строка может вызвать ошибку
  //получаем из локального хранилища по ключу 'login' какое-то значение
} catch (err) {
  isStorageSupport = false;  //здесь мы описываем что делать,если ошибка произойдёт
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-login-show');
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function (evt) {
  modal.classList.remove('modal-login-show');
  modal.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    modal.classList.add('modal-error');
  } else {
    if (isStorageSupport) { //записываем логин, только если локальное хранилище доступно
      localStorage.setItem('login', login.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-login-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-login-show');
    }
  }
});
