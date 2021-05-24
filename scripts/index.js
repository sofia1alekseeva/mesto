const popupOpen = document.querySelector('.profile__info_edit-button');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('input.popup__input');
const jobInput = document.querySelector('input.popup__input:nth-child(2)');
const profileName = document.querySelector('.profile__info_title');
const jobName = document.querySelector('.profile__info_subtitle');


function similarValue() {
  nameInput.value = profileName.textContent;
  jobInput.value = jobName.textContent;
}

popupOpen.addEventListener("click", toggleClass, false);
popupOpen.addEventListener("click", similarValue, false);
popupClose.addEventListener("click", toggleClass, false);

function toggleClass() {
  popup.classList.toggle('popup__opened');
}

popup.addEventListener('click', function (event) {
  if (event.target === event.currentTarget) {
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
