import "./index.css"
import profilePic from "../images/profile-pic.jpg"
import headerTitle from "../images/header-title.png"
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import { FormValidator} from "../components/FormValidator.js";
import {editNameInput,editHobbyInput,headerSvg,profileImage,cards,enableValidaitor,initialCards,hobby,formEdit,buttonExitEdit,buttonAdd,popupAddCard,buttonExitAdd,popupImage,buttonExitCard,overlays,cardUrlInput,cardTitleInput,createForm,buttonEdit,popupEditProfile,fullNameInput,hobbyInput,fullName} from "../utils/constants.js" 
import Section from "../components/Section.js"
import UserInfo from "../components/UserInfo.js"


profileImage.src = profilePic;
headerSvg.src = headerTitle;
//create form handler function

const imagePopup = new PopupWithImage(".image-popup");
imagePopup.setEventListeners();

export const createCard = (data) =>{
  return (new Card(data,"#photo",()=>{
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
  cards.prepend(cardElement)
})

popupCreate.setEventListeners();

buttonAdd.addEventListener("click",()=>{
  popupCreate.open();
})

const edit = new UserInfo({userNameSelector:".profile__full-name",userJobSelector:".profile__hobby"})

const popupEdit = new PopupWithForm(".popup_type_edit",()=>{
  edit.setUserInfo(popupEdit._getInputValues());
  popupEdit.close();
})

popupEdit.setEventListeners();

buttonEdit.addEventListener("click",()=>{
  popupEdit.open();
  const userData = edit.getUserInfo()
  editNameInput.value = userData.name
  editHobbyInput.value = userData.job
})


