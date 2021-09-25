import {Card} from "./card.js";

// open edit form
const buttonEdit = document.querySelector(".profile__button_type_edit");
const popupEdit = document.querySelector(".popup_type_edit");
const fullNameInput = popupEdit.querySelector(".popup__input_type_full-name");
const hobbyInput = popupEdit.querySelector(".popup__input_type_hobby");
const fullName = document.querySelector(".profile__full-name");
const hobby = document.querySelector(".profile__hobby");
const buttonSave = document.querySelector(".popup__button_type_save");
const formEdit = document.querySelector(".popup__form_type_edit");
const buttonExitEdit = popupEdit.querySelector(".popup__button_type_exit");

//open every popup function
export function openPopup(popup){
  popup.classList.add("popup_showen");
  document.addEventListener("keydown",closeOnEscape);
}

//closes every popup
    function closePopup(popup){
  popup.classList.remove('popup_showen');
  document.removeEventListener("keydown",closeOnEscape)
}

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
function profileEdit(evt){
    evt.preventDefault();
    fullName.textContent = fullNameInput.value;
    hobby.textContent = hobbyInput.value;
    closeEditPopup();
}

formEdit.addEventListener("submit",profileEdit);






// open create form
const buttonAdd = document.querySelector(".profile__button_type_add");
const popupCreate = document.querySelector(".popup_type_create"); 
const buttonExitAdd = popupCreate.querySelector(".popup__button_type_exit");

function openCreatePopup(){
    openPopup(popupCreate)
}

buttonAdd.addEventListener("click",openCreatePopup);


//create exit button 
function exitCreatePopup(){
  closePopup(popupCreate);
}

buttonExitAdd.addEventListener("click",exitCreatePopup);

//initial 6 cards    




//card click open function 
/*



function openImagePopup(evt){
    picture.querySelector(".image-popup__image").src = evt.target.src;
    pictureTitle.textContent = evt.target.parentElement.parentElement.querySelector(".card__description").textContent;
    openPopup(picture);
    
}
*/
const picture = document.querySelector(".image-popup");
const buttonExitCard = picture.querySelector(".popup__button_type_exit") 
const pictureTitle = document.querySelector(".image-popup__title");

//card popup close
function closePopupCard(){
closePopup(picture);
}

buttonExitCard.addEventListener("click",closePopupCard)


//create card function
  /*const cardTemplate = document.querySelector("#photo").content;
  let newCard = cardTemplate.querySelector(".card").cloneNode(true);
  */
/*function create(element){
    

    const cardTitle = newCard.querySelector(".card__description");
    const cardImage = newCard.querySelector(".card__image"); 
    cardTitle.textContent = element.name;
    cardImage.src = element.link;
    cardImage.alt = element.name;

    //card delete button
    const buttonDelete = newCard.querySelector(".card__button_type_delete");
    buttonDelete.addEventListener("click",function(){
    newCard.remove()
    })

    //card like button
    const buttonLike = newCard.querySelector(".card__button_type_like");
    buttonLike.addEventListener("click", function (evt){
        evt.target.classList.toggle("card__button_type_like_active");
});

    //card click open image
    cardImage.addEventListener("click",openImagePopup) 

    return newCard;
}
*/




//initial 6 card loop function
/*function renderInitialCards(cards){
        cards.forEach(card => {
        document.querySelector(".cards").prepend(create(card));
    });
}

renderInitialCards(initialCards);
*/


//create form handler function
const createForm = document.querySelector(".popup__form_type_create");
const cardTitleInput = popupCreate.querySelector(".popup__input_type_image-title");
const cardUrlInput = popupCreate.querySelector(".popup__input_type_url");

function cardFormHandler(evt){
    evt.preventDefault();
    const titleInput = cardTitleInput.value;
    console.log(titleInput);
    const urlInput = cardUrlInput.value;
    console.log(urlInput);
    const newCard = {name:titleInput , link:urlInput}
    const card = new Card(newCard ,"#photo")
    const cardElement = card.createCard()
    document.querySelector(".cards").prepend(cardElement);
    exitCreatePopup()

    cardTitleInput.value = ""
    cardUrlInput.value = ""
}

createForm.addEventListener("submit",cardFormHandler)


//closing popup by tapping overlay

const overlays = Array.from(document.querySelectorAll(".popup"));
console.log(overlays);

const exitTap = ((overlays)=>{
  overlays.forEach(overlay => {
    overlay.addEventListener("click",(evt)=>{
      if(evt.target === overlay){
        closePopup(overlay);
      }
  });
})
})

exitTap(overlays);


function closeOnEscape(evt){
  if (evt.key === "Escape"){
    closePopup(document.querySelector(".popup_showen"))
  }
}
