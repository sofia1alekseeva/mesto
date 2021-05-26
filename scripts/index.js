const popupOpen = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('input.popup__input');
const jobInput = document.querySelector('input.popup__input:nth-child(2)');
const profileName = document.querySelector('.profile__title');
const jobName = document.querySelector('.profile__subtitle');


popupOpen.addEventListener("click", addClass, false);
popupClose.addEventListener("click", removeClass, false);

function addClass() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = jobName.textContent;
}

function removeClass() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  removeClass();
}
formElement.addEventListener('submit', formSubmitHandler);
