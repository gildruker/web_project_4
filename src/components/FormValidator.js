
//form validation
export class FormValidator{
constructor(settings,formElement){
  this._formElement = document.querySelector(formElement);
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



_showInputError = (inputElement,errMsg,inputTypeErr,inputErrElement) => {
const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.add(inputTypeErr)
errorElement.textContent = errMsg;
errorElement.classList.add(inputErrElement);
}

_hideInputError = (inputElement,inputTypeErr,inputErrElement) => {
const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
inputElement.classList.remove(inputTypeErr)
errorElement.classList.remove(inputErrElement);
errorElement.textContent = "";
}



  _checkInputValidity = (inputElement,inputErrElement,inputTypeErr) => {
  if (!inputElement.validity.valid){
    this._showInputError(inputElement,inputElement.validationMessage,inputTypeErr,inputErrElement)
  }
  else{
    this._hideInputError(inputElement,inputTypeErr,inputErrElement);
  }

}

_disableButton(buttonElement,btnDisabledClass){
    buttonElement.classList.add(btnDisabledClass)
    buttonElement.disabled = true;
}


_setEventListeners(){
  const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
  const  buttonElement= this._formElement.querySelector(this._settings.buttonElement)
  this._toggleSubmitButton(inputList,buttonElement,this._settings.btnDisabledClass);
  this._formElement.addEventListener('reset', () => {

    this._disableButton( buttonElement,this._settings.btnDisabledClass);

    inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
    })
});
  inputList.forEach((inputElement) => { 
    inputElement.addEventListener("input",() => {
      this._checkInputValidity(inputElement,this._settings.inputErrElement,this._settings.inputTypeErr);
      this._toggleSubmitButton(inputList,buttonElement,this._settings.btnDisabledClass);
    });
  });
}

enableValidation(){
  this._setEventListeners() 
}

}



   



  
