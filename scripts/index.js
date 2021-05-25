const popupOpen = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('input.popup__input');
const jobInput = document.querySelector('input.popup__input:nth-child(2)');
const profileName = document.querySelector('.profile__title');
const jobName = document.querySelector('.profile__subtitle');


popupOpen.addEventListener("click", toggleClass, false);
popupClose.addEventListener("click", toggleClass, false);

function toggleClass() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = jobName.textContent;
}

popup.addEventListener('click', function (event) {
  if (event.target == event.currentTarget) {
    toggleClass();
  }
});


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;

  toggleClass();
}
formElement.addEventListener('submit', formSubmitHandler);
