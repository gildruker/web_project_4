let buttonEdit = document.querySelector(".button_edit");
let buttonExit = document.querySelector(".button_exit");
let popup = document.querySelector(".popup");
let buttonSave = document.querySelector(".button_save");
let fullName = document.querySelector(".profile__full-name");
let hobby = document.querySelector(".profile__hobby");
let hobbyInput = document.querySelector(".popup__input_hobby");
let nameInput = document.querySelector(".popup__input_full-name");



function openEdit(){
    popup.classList.add("popup__showen")
    nameInput.value = fullName.textContent;
    hobbyInput.value = hobby.textContent;
}

buttonEdit.addEventListener("click",openEdit);


function exitEdit(){
    popup.classList.remove("popup__showen")
}

buttonExit.addEventListener("click",exitEdit);



function changeProfile(evt){
    evt.preventDefault();   
    hobby.textContent = hobbyInput.value;
    fullName.textContent = nameInput.value;
    popup.classList.remove("popup__showen");
}
popup.addEventListener("submit",changeProfile);
