import { formEdit } from "./constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector , submitCallback){
        super(popupSelector)
        this._callback = submitCallback;
    }

    _getInputValues(){
        const inputs = Array.from(this._popup.querySelectorAll(".popup__input"));
        const inputValues = {};

        inputs.forEach((input)=>{
            inputValues[input.name]=input.value;
        })
        return inputValues;
    }

    _submitHandler =(evt)=>{
        evt.preventDefault();
        this._callback(this._getInputValues());
    }

    setEventListeners(){
        super.setEventListeners()
        this._popup.querySelector(".popup__form").addEventListener("submit",this._submitHandler)
    }

    close(){
        super.close();
        this._popup.querySelector(".popup__form").reset();
    }

    reset(){
        this._popup.querySelector(".popup__input_type_image-title").value = ""
        this._popup.querySelector(".popup__input_type_url").value = ""
    }


}