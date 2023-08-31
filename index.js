
const openFormButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

function addPopup(){
    popup.classList.add('popup-visible');
}

function closePopup(){
    popup.classList.remove('popup-visible');
}

openFormButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', closePopup);  

const profileName = document.querySelector('.profile__name');
const profileDetail = document.querySelector('.profile__detail');

const inputName = document.querySelector('.popup__name');
const inputDetail = document.querySelector('.popup__detail');
const saveButton = document.querySelector('.popup__save');

function changeProfile() {
          profileName.textContent = inputName.value;
          profileDetail.textContent = inputDetail.value;
  
 closePopup();
}
saveButton.addEventListener('click', changeProfile);

