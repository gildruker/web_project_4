
const buttonEdit = document.querySelector(".profile__button_type_edit");
const popupEdit = document.querySelector(".popup_type_edit");
const fullNameInput = popupEdit.querySelector(".popup__input_type_full-name");
const hobbyInput = popupEdit.querySelector(".popup__input_type_hobby");
const fullName = document.querySelector(".profile__full-name");
const hobby = document.querySelector(".profile__hobby");
const buttonSave = document.querySelector(".popup__button_type_save");
const formEdit = document.querySelector(".popup__form_type_edit");
const buttonExitEdit = popupEdit.querySelector(".popup__button_type_exit");

const buttonAdd = document.querySelector(".profile__button_type_add");
const popupCreate = document.querySelector(".popup_type_create"); 
const buttonExitAdd = popupCreate.querySelector(".popup__button_type_exit");

const picture = document.querySelector(".image-popup");
const buttonExitCard = picture.querySelector(".popup__button_type_exit") 
const pictureTitle = document.querySelector(".image-popup__title");
const pictureImage = document.querySelector(".image-popup__image")

const createForm = document.querySelector(".popup__form_type_create");
const cardTitleInput = popupCreate.querySelector(".popup__input_type_image-title");
const cardUrlInput = popupCreate.querySelector(".popup__input_type_url");

const overlays = Array.from(document.querySelectorAll(".popup"));

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

  const enableValidaitor = {
    inputTypeErr:"popup__input_type_error",
    inputErrElement:"popup__input-error_active",
    btnDisabledClass:"popup__button_type_disabled",
    formSelector:".popup__form",
    inputSelector:".popup__input",
    buttonElement:".popup__button_type_submit"
  };

   


    export{pictureImage,initialCards,enableValidaitor,overlays,cardUrlInput,cardTitleInput,createForm,pictureTitle,buttonEdit,popupEdit,fullNameInput,hobbyInput,fullName,hobby,buttonSave,formEdit,buttonExitEdit,buttonAdd,popupCreate,buttonExitAdd,picture,buttonExitCard}

