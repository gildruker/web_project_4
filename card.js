import {openPopup} from "./script.js"


export class Card{
    constructor(data,template){
        this._image=data.link;
        this._title=data.name;
        this._template = template;

        console.log(this._template)
        console.log(this._image)
        console.log(this._title)

    }

   _cardTemplate(){
        console.log(this._template)
       const cardElement = document
       .querySelector(this._template).content
       .querySelector(".card")
       .cloneNode(true);
       
       
       return cardElement;
   }

   _handleRemoveCard(){
    this._element.remove();
 }

 _cardDeleteEventLister(){
    this._element.querySelector(".card__button_type_delete").addEventListener("click",()=>{
        this._handleRemoveCard();
    });
 }


 _handleLikeCard(){
     this._element.querySelector(".card__button_type_like").classList.toggle("card__button_type_like_active");
 }

 _cardlikeEventLister(){
     this._element.querySelector(".card__button_type_like").addEventListener("click",()=>{
         this._handleLikeCard();
     });

 }

 _openCardImageHandler(){
     document.querySelector(".image-popup__image").src = this._image;
     document.querySelector(".image-popup__title").textContent = this._title;
     openPopup(document.querySelector(".image-popup"));
 }

 _openCardEventListener(){
     this._element.querySelector(".card__image-container").addEventListener("click",() => {
         this._openCardImageHandler()
     })
 }





 createCard(){
       this._element = this._cardTemplate()

       this._element.querySelector(".card__image").src = this._image;
       this._element.querySelector(".card__description").textContent = this._title;

       this._cardDeleteEventLister()
       this._cardlikeEventLister()
       this._openCardEventListener()
    
       

       return this._element;
   }
}
const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];

initialCards.forEach((initialcard) => {
    const card = new Card (initialcard,"#photo");
    const cardElement = card.createCard();

    document.querySelector(".cards").prepend(cardElement);

});


