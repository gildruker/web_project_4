//form validation
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  

  
  const toggleSubmitButton = (inputList,buttonElement,btnDisabledClass) => {
      if (hasInvalidInput(inputList)){
        console.log(btnDisabledClass);
        buttonElement.classList.add(btnDisabledClass)
        console.log(buttonElement.classList)
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
  
  
  const checkInputValidity = (formElement,inputElement) => {
      const inputTypeErr = "popup__input_type_error";
      const inputErrElement="popup__input-error_active";
    if (!inputElement.validity.valid){
      showInputError(formElement,inputElement,inputElement.validationMessage,inputTypeErr,inputErrElement)
    }
    else{
      hideInputError(formElement,inputElement,inputTypeErr,inputErrElement);
    }
  
  }
  
  const setEventListeners = (formElement) =>{
    const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
    const buttonElement = formElement.querySelector(".popup__button_type_submit")
    const btnDisabledClass = "popup__button_type_disabled";
    toggleSubmitButton(inputList,buttonElement,btnDisabledClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input",function(){
        checkInputValidity(formElement,inputElement);
        toggleSubmitButton(inputList,buttonElement,btnDisabledClass);
      });
    });
  }
  
   const enableValidation = () => {
     const formList = Array.from(document.querySelectorAll(".popup__form"));
    
     formList.forEach((formElement) => {
      formElement.addEventListener("submit",(evt) => {
        evt.preventDefault();
      });
  
      setEventListeners(formElement);
     });
   }
  
  
  enableValidation();
  