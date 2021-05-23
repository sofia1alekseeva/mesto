const editProfile = document.querySelector('.profile__info_edit-button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close')

editProfile.addEventListener('click', function () {
  console.log('Мы кликнули по элементу');
  popup.classList.toggle('popup__opened');
});

popupClose.addEventListener('click', function () {
  popup.classList.toggle('popup__opened')
});
