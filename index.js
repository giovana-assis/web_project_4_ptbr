
const openFormButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

function addPopup(){
    popup.classList.add('popup-visible');
}

function removePopup(){
    popup.classList.remove('popup-visible');
}

openFormButton.addEventListener('click', addPopup);
closeButton.addEventListener('click', removePopup);  

const profileName = document.querySelector('.profile__name');
const profileDetail = document.querySelector('.profile__detail');

const inputName = document.querySelector('.popup__name');
const inputDetail = document.querySelector('.popup__detail');
const saveButton = document.querySelector('.popup__save');

function changeProfile() {
    if(inputName.value != ''){
          profileName.textContent = inputName.value;
    }
    if(inputDetail.value != ''){
        profileDetail.textContent = inputDetail.value;
    }
    removePopup();
}
saveButton.addEventListener('click', changeProfile);

