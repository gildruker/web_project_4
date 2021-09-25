//form validation
class FormValidator{
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
console.log(`.${inputElement.id}-error`)
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
console.log(errorElement)
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



/*const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  

  
  const toggleSubmitButton = (inputList,buttonElement,btnDisabledClass) => {
      if (hasInvalidInput(inputList)){
        buttonElement.classList.add(btnDisabledClass)
        buttonElement.disabled = true;
      }
      else{
        buttonElement.classList.remove(btnDisabledClass)
        buttonElement.disabled = false;
      }
  }
  
  
  
  const showInputError = (formElement,inputElement,errMsg,inputTypeErr,inputErrElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputTypeErr)
    errorElement.textContent = errMsg;
    errorElement.classList.add(inputErrElement);
  }
  
  const hideInputError = (formElement,inputElement,inputTypeErr,inputErrElement) => {
    console.log(`.${inputElement.id}-error`)
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement)
    inputElement.classList.remove(inputTypeErr)
    errorElement.classList.remove(inputErrElement);
    errorElement.textContent = "";
  }
  
  
  const checkInputValidity = (formElement,inputElement,inputErrElement,inputTypeErr) => {
    if (!inputElement.validity.valid){
      showInputError(formElement,inputElement,inputElement.validationMessage,inputTypeErr,inputErrElement)
    }
    else{
      hideInputError(formElement,inputElement,inputTypeErr,inputErrElement);
    }
  
  }
  
  const setEventListeners = (formElement,settings) =>{
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const  buttonElement= formElement.querySelector(settings.buttonElement)
    toggleSubmitButton(inputList,buttonElement,settings.btnDisabledClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input",function(){
        checkInputValidity(formElement,inputElement,settings.inputErrElement,settings.inputTypeErr);
        toggleSubmitButton(inputList,buttonElement,settings.btnDisabledClass);
      });
    });
  }
  
   const enableValidation = (settings) => {
     const formList = Array.from(document.querySelectorAll(settings.formSelector));
     formList.forEach((formElement) => {
      formElement.addEventListener("submit",(evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement,settings);
     });
   }
    */
   const enableValidaitor = {
    inputTypeErr:"popup__input_type_error",
    inputErrElement:"popup__input-error_active",
    btnDisabledClass:"popup__button_type_disabled",
    formSelector:".popup__form",
    inputSelector:".popup__input",
    buttonElement:".popup__button_type_submit"
  };

   const editForm = new FormValidator(enableValidaitor,'.popup__form_type_edit')
   editForm.enableValidation();

   const addForm = new FormValidator(enableValidaitor,'.popup__form_type_create')
   addForm.enableValidation();

   



  