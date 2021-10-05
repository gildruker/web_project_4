
export default class Popup{
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose=(evt)=>{
        if(evt.key === "Escape"){
            console.log(evt.target)
            this.close();
        }
    }

    open(){
        this._popup.classList.add("popup_showen");
        document.addEventListener("keydown",this._handleEscClose)  
    }

    

    _handleLayoutClose=(evt)=>{
        if(evt.target === this._popup){
        this.close()
    }
}

    close=()=>{
        this._popup.classList.remove("popup_showen");
        document.removeEventListener("keydown",this._handleEscClose)
    }

    

    setEventListeners(){
        this._popup.querySelector(".popup__button_type_exit").addEventListener("click",this.close);
        this._popup.addEventListener("click",this._handleLayoutClose)
        }
}





