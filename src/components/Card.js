
export default class Card{
    constructor(data,template,handleCardClick){
        this._image=data.link;
        this._title=data.name;
        this._template = template;
        this._handleCardClick = handleCardClick;
    }

   _cardTemplate(){
       const cardElement = document
       .querySelector(this._template).content
       .querySelector(".card")
       .cloneNode(true);
       
       
       return cardElement;
   }

   _handleRemoveCard(){
    this._element.remove();
 }

 


 _handleLikeCard(){
    this._likeButton.classList.toggle("card__button_type_like_active");
 }



 _setEventListener(){
   
        this._element.querySelector(".card__button_type_delete").addEventListener("click",()=>{
            this._handleRemoveCard();
        });
     
        this._likeButton = this._element.querySelector(".card__button_type_like");

        this._likeButton.addEventListener("click",()=>{
             this._handleLikeCard();
         });
         this._cardImage.addEventListener("click",this._handleCardClick)
 }

/*
 _openCardImageHandler(){
     pictureImage.src = this._image;
     pictureTitle.textContent = this._title;
     pictureImage.alt = this._title;
     openPopup(popupImage);
 }
*/

 createCard(){
       this._element = this._cardTemplate()
       this._cardImage = this._element.querySelector(".card__image")
       this._cardImage.src = this._image;
       this._cardImage.alt = this._title
       this._element.querySelector(".card__description").textContent = this._title;

       this._setEventListener()
    
       return this._element;
   }
}





