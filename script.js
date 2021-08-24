// open edit form
const buttonEdit = document.querySelector(".profile__button_type_edit");
const popupEdit = document.querySelector(".popup_type_edit");
const fullNameInput = popupEdit.querySelector(".popup__input_type_full-name");
const hobbyInput = popupEdit.querySelector(".popup__input_type_hobby");
const fullName = document.querySelector(".profile__full-name");
const hobby = document.querySelector(".profile__hobby");
const buttonSave = document.querySelector(".popup__button_type_save");
const formEdit = document.querySelector(".popup_form__type_edit");



function openEdit(){
    popupEdit.classList.add("popup_showen");
    fullNameInput.value = fullName.textContent
    hobbyInput.value = hobby.textContent
    
    //exit button edit
    const buttonExitEdit = popupEdit.querySelector(".popup__button_type_exit");
    buttonExitEdit.addEventListener("click",function(evt){
        evt.target.parentElement.parentElement.parentElement.classList.remove("popup_showen");
    })
}

buttonEdit.addEventListener("click",openEdit);


//edit profile function
function profileEdit(evt){
    evt.preventDefault();
    fullName.textContent = fullNameInput.value;
    hobby.textContent = hobbyInput.value;
    popupEdit.classList.remove("popup_showen");
}

formEdit.addEventListener("submit",profileEdit);



// open create form
const buttonAdd = document.querySelector(".profile__button_type_add");
const popupCreate = document.querySelector(".popup_type_create"); 
console.log(popupCreate)


function openCreate(){
    popupCreate.classList.add("popup_showen");
    
    //create exit button 
    const buttonExitAdd = popupCreate.querySelector(".popup__button_type_exit");
    buttonExitAdd.addEventListener("click",function(evt){
        evt.target.parentElement.parentElement.parentElement.classList.remove("popup_showen");
    });
}

buttonAdd.addEventListener("click",openCreate);


    //initial 6 cards    
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

//card click open function 
function biggerPicture(evt){
    const picture = document.querySelector(".image-popup");
    picture.querySelector(".image-popup__image").src = evt.target.src;
    const pictureTitle = document.querySelector(".image-popup__title");
    pictureTitle.textContent = evt.target.parentElement.parentElement.querySelector(".card__description").textContent;
    console.log(picture);
    picture.querySelector(".image-popup__button").addEventListener("click",function(evt){
        evt.target.parentElement.parentElement.classList.remove("popup_showen");
    })
    picture.classList.add("popup_showen");
    console.log(picture.classList)
}


//create card function

function create(element){
    const cardTemplate = document.querySelector("#photo").content;
    const newCard = cardTemplate.querySelector(".card").cloneNode(true);

    const cardTitle = newCard.querySelector(".card__description");
    const cardImage = newCard.querySelector(".card__image"); 
    cardTitle.textContent = element.name;
    cardImage.src = element.link;

    //card delete button
    const buttonDelete = newCard.querySelector(".card__button_type_delete");
    buttonDelete.addEventListener("click",function(evt){
        evt.target.parentElement.parentElement.remove()
    })

    //card like button
    const buttonLike = newCard.querySelector(".card__button_type_like");
    buttonLike.addEventListener("click", function (evt){
        evt.target.classList.toggle("card__button_type_like_active");
});

    //card click open image
    cardImage.addEventListener("click",biggerPicture) 

    document.querySelector(".cards").prepend(newCard);
}





//initial 6 card loop function
function initial(cards){
        cards.forEach(card => {
        create(card)
    });
}

initial(initialCards);



//create form handler function
const createForm =document.querySelector(".popup__form_type_create");

function cardFormHandler(evt){
    evt.preventDefault();
    newCard = {}

    const cardTitleInput = popupCreate.querySelector(".popup__input_type_image-title");
    newCard.name = cardTitleInput.value;
    
    const cardUrlInput = popupCreate.querySelector(".popup__input_type_url");
    newCard.link = cardUrlInput.value;

    create(newCard);
    popupCreate.classList.remove("popup_showen");

    cardTitleInput.value = ""
    cardUrlInput.value = ""
}

createForm.addEventListener("submit",cardFormHandler)




// open image on click
