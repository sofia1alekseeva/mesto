const profileEdit = document.querySelector('.profile__edit');
const profileAdd = document.querySelector('.profile__add-button')
const popupEdit = document.querySelector('.popup_edit-profile');
const popupAdd = document.querySelector('.popup_add-place')
const popup = document.querySelector('.popup');
const cardsContainer = document.querySelector('.cards');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupEditClose = popupEdit.querySelector('.popup__close');
const profileEditForm = popupEdit.querySelector('form[name=edit-profile_form]');
const addPlaceForm = popupAdd.querySelector('form[name=add-place_form]')
const nameInput = document.querySelector('input.popup__input');
const jobInput = document.querySelector('input.popup__input:nth-child(2)');
const profileName = document.querySelector('.profile__title');
const jobName = document.querySelector('.profile__subtitle');
const popupImage = document.querySelector('.popup_image');
const popupImageClose = popupImage.querySelector('.popup__close');
const popupOpenedImage = document.querySelector('.popup_image-opened');
const popupImageText = document.querySelector('.popup_image-text');
const cardTemplate = document.querySelector('#card-template').content;


function addClass(sel) {
  sel.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = jobName.textContent;
}

profileAdd.addEventListener("click", () => addClass(popupAdd), false);
profileEdit.addEventListener("click", () => addClass(popupEdit), false);
popupAddClose.addEventListener("click", () => removeClass(popupAdd), false);
popupEditClose.addEventListener("click", () => removeClass(popupEdit), false);
popupImageClose.addEventListener('click', () => removeClass(popupImage), false);


function removeClass(sel) {
  sel.classList.remove('popup_opened');
}

const updateProfileData = (evt) => {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  jobName.textContent = jobInput.value;
  removeClass(popupEdit);
}


const addCard = (placeTitle, imageSrc) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = placeTitle;
  cardImage.setAttribute('src', imageSrc);
  cardElement.querySelector('.card__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  })
  deleteCard(cardElement);
  openCardImage(cardImage, cardTitle);
  cardsContainer.prepend(cardElement);
}

const addPlace = (evt) => {
  evt.preventDefault();
  const placeTitle = popupAdd.querySelector('input.popup__input');
  const imageSrc = popupAdd.querySelector('input.popup__input:nth-child(2)');
  addCard(placeTitle.value, imageSrc.value);
  placeTitle.value = '';
  imageSrc.value = '';
  removeClass(popupAdd);
}

function deleteCard(cardElement) {
  const card = cardElement.querySelector('.card__delete');
  card.addEventListener('click', (evt) => {
    card.closest('.card').remove();
  })
}

addPlaceForm.addEventListener('submit', addPlace);
profileEditForm.addEventListener('submit', updateProfileData);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach((element) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardLike = cardElement.querySelector('.card__like');
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = element.name;
  cardImage.setAttribute('src', element.link);
  cardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active');
  })
  deleteCard(cardElement);
  openCardImage(cardImage, cardTitle);
  cardsContainer.append(cardElement);
})

function openCardImage(cardImage, cardTitle) {
  cardImage.addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    popupOpenedImage.setAttribute('src', cardImage.src);
    popupImageText.textContent = cardTitle.textContent;
  });
}
