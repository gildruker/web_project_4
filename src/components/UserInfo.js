export default class UserInfo{
    constructor({userNameSelector , userJobSelector}){
        this._userName = document.querySelector(userNameSelector);
        this._userJob = document.querySelector(userJobSelector);
    }

    getUserInfo(){
        return {name:this._userName.textContent, job:this._userJob.textContent}
    }

    setUserInfo(data){
        this._userName.textContent = data["full-name"];
        this._userJob.textContent = data["hobby"];
    }
}