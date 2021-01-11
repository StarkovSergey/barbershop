const mapLink = document.querySelector('.contacts-button-map');
const mapModal = document.querySelector('.modal-map');
const mapClose = document.querySelector('.modal-map .modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.add('modal-map-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('modal-map-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapModal.classList.contains('modal-map-show')) {
      evt.preventDefault();
      mapModal.classList.remove('modal-map-show');
    }
  }
})
