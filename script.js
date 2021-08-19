let buttonEdit = document.querySelector(".profile__button_type_edit");
let buttonExit = document.querySelector(".popup__button_type_exit");
let popup = document.querySelector(".popup");
let buttonSave = document.querySelector(".popup__button_type_save");
let fullName = document.querySelector(".profile__full-name");
let hobby = document.querySelector(".profile__hobby");
let hobbyInput = document.querySelector(".popup__input_type_hobby");
let nameInput = document.querySelector(".popup__input_type_full-name");
let popupForm = document.querySelector(".popup__form");



function openEdit(){
    popup.classList.add("popup_showen")
    nameInput.value = fullName.textContent;
    hobbyInput.value = hobby.textContent;
}

buttonEdit.addEventListener("click",openEdit);


function exitEdit(){
    popup.classList.remove("popup_showen")
}

buttonExit.addEventListener("click",exitEdit);



function changeProfile(evt){
    evt.preventDefault();   
    hobby.textContent = hobbyInput.value;
    fullName.textContent = nameInput.value;
    popup.classList.remove("popup_showen");
}
popupForm.addEventListener("submit",changeProfile);
