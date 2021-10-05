import Popup from "./Popup.js"

export default class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
    }

    open({link,name}){
        const imageElement = this._popup.querySelector(".image-popup__image");
        const descriptionText = this._popup.querySelector(".image-popup__title")

        imageElement.src = link;
        imageElement.alt = name;
        descriptionText.textContent = name;

        super.open();
    }

    close(){
        super.close()
    }

    setEventListeners(){
        super.setEventListeners();
    }
}