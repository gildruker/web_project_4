import "./styles/index.css"
import profilePic from "./images/profile-pic.jpg"
import headerTitle from "./images/header-title.png"
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Card from "./Card.js";
import { FormValidator} from "./FormValidator.js";
import {editNameInput,editHobbyInput,headerSvg,profileImage,cards,enableValidaitor,initialCards,hobby,formEdit,buttonExitEdit,buttonAdd,popupAddCard,buttonExitAdd,popupImage,buttonExitCard,overlays,cardUrlInput,cardTitleInput,createForm,buttonEdit,popupEditProfile,fullNameInput,hobbyInput,fullName} from "./constants.js" 
import Section from "./Section.js"
import UserInfo from "./UserInfo.js"


profileImage.src = profilePic;
headerSvg.src = headerTitle;
//create form handler function

export const createCard = (data) =>{
  return (new Card(data,"#photo",()=>{
   const imagePopup = new PopupWithImage(".image-popup");
   imagePopup.setEventListeners();
   imagePopup.open(data)
  }))
  }

const initialCardsRendering = new Section({items:initialCards,renderer:(item)=>{
  const newItem = createCard(item);
  const element = newItem.createCard();
  initialCardsRendering.addItem(element)
}},".cards")

initialCardsRendering.renderItems()


const editProfileValidator = new FormValidator(enableValidaitor,'.popup__form_type_edit');
const addCardValidator = new FormValidator(enableValidaitor,'.popup__form_type_create');
   editProfileValidator.enableValidation();
   addCardValidator.enableValidation();


const popupCreate = new PopupWithForm(".popup_type_create",(inputValues)=>{
  const newCard = {name:inputValues["image-title"],link:inputValues["image-Url"]}
  const card = createCard(newCard);
  const cardElement = card.createCard();
  popupCreate.close();
  popupCreate.reset();
  addCardValidator.enableValidation();

  cards.prepend(cardElement)
})

buttonAdd.addEventListener("click",()=>{
  popupCreate.open();
  popupCreate.setEventListeners();
})

const popupEdit = new PopupWithForm(".popup_type_edit",()=>{
  const edit = new UserInfo({userName:editNameInput,userJob:editHobbyInput})
  edit.setUserInfo();
  popupEdit.close();
})

buttonEdit.addEventListener("click",()=>{
  popupEdit.open();
  editNameInput.value = fullName.textContent
  editHobbyInput.value = hobby.textContent
  popupEdit.setEventListeners();
})


