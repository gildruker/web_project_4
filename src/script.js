import {Card} from "./card.js";
import { FormValidator} from "./FormValidator.js";
import {openPopup,closeOnEscape,closePopup} from "./utils.js"
import {enableValidaitor,initialCards,hobby,formEdit,buttonExitEdit,buttonAdd,popupCreate,buttonExitAdd,picture,buttonExitCard,overlays,cardUrlInput,cardTitleInput,createForm,buttonEdit,popupEdit,fullNameInput,hobbyInput,fullName} from "./constants.js" 

console.log(buttonExitEdit,buttonAdd,buttonEdit,popupEdit)



//open edit function
function openEditPopup(){
  openPopup(popupEdit)
  fullNameInput.value = fullName.textContent
  hobbyInput.value = hobby.textContent
}

buttonEdit.addEventListener("click",openEditPopup);

//exit button edit function
function closeEditPopup(){
  closePopup(popupEdit)
}

buttonExitEdit.addEventListener("click",closeEditPopup);

//edit profile function
function submitEditProfileForm(evt){
    evt.preventDefault();
    fullName.textContent = fullNameInput.value;
    hobby.textContent = hobbyInput.value;
    closeEditPopup();
}

formEdit.addEventListener("submit",submitEditProfileForm);

function openAddCardPopup(){
    openPopup(popupCreate)
}

buttonAdd.addEventListener("click",openAddCardPopup);

//create exit button 
function closeAddCardPopup(){
  closePopup(popupCreate);
}

buttonExitAdd.addEventListener("click",closeAddCardPopup);  

//card popup close
function closePopupCard(){
closePopup(picture);
}

buttonExitCard.addEventListener("click",closePopupCard)

//create form handler function

const createCard = (data) =>{
return (new Card(data,"#photo"))
}

function addCardFormSubmitHandler(evt){
    evt.preventDefault();
    const titleInput = cardTitleInput.value;
    const urlInput = cardUrlInput.value;
    const newCard = {name:titleInput , link:urlInput}
    const card = createCard(newCard)
    const cardElement = card.createCard()
    document.querySelector(".cards").prepend(cardElement);
    closeAddCardPopup()

    cardTitleInput.value = ""
    cardUrlInput.value = ""
    addCardValidator.enableValidation()
}

createForm.addEventListener("submit",addCardFormSubmitHandler)

//closing popup by tapping overlay
const closePopupsByOverlayClick = ((overlays)=>{
  overlays.forEach(overlay => {
    overlay.addEventListener("click",(evt)=>{
      if(evt.target === overlay){
        closePopup(overlay);
      }
  });
})
})

closePopupsByOverlayClick(overlays);

initialCards.forEach((initialcard) => {
  const card = createCard(initialcard);
  const cardElement = card.createCard();

  document.querySelector(".cards").prepend(cardElement);

});

const editProfileValidator = new FormValidator(enableValidaitor,'.popup__form_type_edit');
const addCardValidator = new FormValidator(enableValidaitor,'.popup__form_type_create');
   editProfileValidator.enableValidation();
   addCardValidator.enableValidation();
