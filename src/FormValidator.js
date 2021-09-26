import {enableValidaitor } from "./constants.js";

//form validation
export class FormValidator{
constructor(settings,formElement){
  this._formElement = formElement;
  this._settings = settings;
}

_hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

_toggleSubmitButton = (inputList,buttonElement,btnDisabledClass) => {
  if (this._hasInvalidInput(inputList)){
    buttonElement.classList.add(btnDisabledClass)
    buttonElement.disabled = true;
  }
  else{
    buttonElement.classList.remove(btnDisabledClass)
    buttonElement.disabled = false;
  }
}



_showInputError = (formElement,inputElement,errMsg,inputTypeErr,inputErrElement) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.add(inputTypeErr)
errorElement.textContent = errMsg;
errorElement.classList.add(inputErrElement);
}

_hideInputError = (formElement,inputElement,inputTypeErr,inputErrElement) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.remove(inputTypeErr)
errorElement.classList.remove(inputErrElement);
errorElement.textContent = "";
}



  _checkInputValidity = (formElement,inputElement,inputErrElement,inputTypeErr) => {
  if (!inputElement.validity.valid){
    this._showInputError(formElement,inputElement,inputElement.validationMessage,inputTypeErr,inputErrElement)
  }
  else{
    this._hideInputError(formElement,inputElement,inputTypeErr,inputErrElement);
  }

}


_setEventListeners(formElement){
  const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
  const  buttonElement= formElement.querySelector(this._settings.buttonElement)
  this._toggleSubmitButton(inputList,buttonElement,this._settings.btnDisabledClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input",() => {
      this._checkInputValidity(formElement,inputElement,this._settings.inputErrElement,this._settings.inputTypeErr);
      this._toggleSubmitButton(inputList,buttonElement,this._settings.btnDisabledClass);
    });
  });
}

enableValidation(){
  const formElement = document.querySelector(this._formElement);
  this._setEventListeners(formElement) 
}

}



   



  
