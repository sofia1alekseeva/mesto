const profileEdit = document.querySelector('.profile__edit');
const cardAdd = document.querySelector('.profile__add-button')
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-place')
const cardsContainer = document.querySelector('.cards');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupEditClose = popupEdit.querySelector('.popup__close');
const profileEditForm = popupEdit.querySelector('form[name=edit-profile_form]');
const addPlaceForm = popupAdd.querySelector('form[name=add-place_form]')
const nameInput = document.querySelector('input[name=name]');
const jobInput = document.querySelector('input[name=job]');
const profileName = document.querySelector('.profile__title');
const jobName = document.querySelector('.profile__subtitle');
const popupImage = document.querySelector('.popup_image');
const popupImageClose = popupImage.querySelector('.popup__close');
const popupOpenedImage = document.querySelector('.popup__image-opened');
const popupImageText = document.querySelector('.popup__image-text');
const cardTemplate = document.querySelector('#card-template').content;
const placeTitle = popupAdd.querySelector('input.popup__input');
const imageSrc = popupAdd.querySelector('input.popup__input:nth-child(2)');

function openCardImage(cardImage, cardTitle) {
  cardImage.addEventListener('click', () => {
    openPopup(popupImage);
    popupOpenedImage.setAttribute('src', cardImage.src);
    popupOpenedImage.setAttribute('alt', cardImage.alt);
    popupImageText.textContent = cardTitle.textContent;
  });
}

function deleteCard(cardElement) {
  const card = cardElement.querySelector('.card__delete');
  card.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  })
}

function handleLike(cardElement) {
  const cardLike = cardElement.querySelector('.card__like');
  cardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  });
}

function createCard(placeTitle, imageSrc) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = placeTitle;
  cardImage.setAttribute('src', imageSrc);
  cardImage.setAttribute('alt', placeTitle);
  deleteCard(cardElement);
  handleLike(cardElement);
  openCardImage(cardImage, cardTitle);
  return cardElement;
}

function addCard(container, element) {
  container.prepend(element);
}

function addPlace(evt) {
  evt.preventDefault();
  addCard(cardsContainer, createCard(placeTitle.value, imageSrc.value));
  addPlaceForm.reset();
  closePopup(popupAdd);
}

initialCards.forEach((element) => cardsContainer.appendChild(createCard(element.name, element.link)));

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openPopupEdit() {
  nameInput.value = profileName.textContent;
  jobInput.value = jobName.textContent;
}

cardAdd.addEventListener("click", () => openPopup(popupAdd), false);
profileEdit.addEventListener("click", () => {
  openPopup(popupEdit);
  openPopupEdit();
});
popupAddClose.addEventListener("click", () => {
  closePopup(popupAdd);


}, false);
popupEditClose.addEventListener("click", () => closePopup(popupEdit), false);
popupImageClose.addEventListener('click', () => closePopup(popupImage), false);


function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const updateProfileData = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  closePopup(popupEdit);
}

addPlaceForm.addEventListener('submit', addPlace);
profileEditForm.addEventListener('submit', updateProfileData);
