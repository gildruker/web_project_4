//form validation
const hasInvalidInput = (inputList) => {
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
  
  
  enableValidation({
    inputTypeErr:"popup__input_type_error",
    inputErrElement:"popup__input-error_active",
    btnDisabledClass:"popup__button_type_disabled",
    formSelector:".popup__form",
    inputSelector:".popup__input",
    buttonElement:".popup__button_type_submit"
  });
  