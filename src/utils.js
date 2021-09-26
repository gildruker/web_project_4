export function openPopup(popup){
    popup.classList.add("popup_showen");
    document.addEventListener("keydown",closeOnEscape);
  }

  export function closeOnEscape(evt){
    if (evt.key === "Escape"){
      closePopup(document.querySelector(".popup_showen"))
    }
  }

  export function closePopup(popup){
    popup.classList.remove('popup_showen');
    document.removeEventListener("keydown",closeOnEscape)
  }