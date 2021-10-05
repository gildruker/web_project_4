import {hobby,fullName} from "./constants.js"

export default class UserInfo{
    constructor({userName , userJob}){
        this._userName = userName.value;
        this._userJob = userJob.value;
    }

    getUserInfo(){
        return {name:fullName.textContent, job:hobby.textContent}
    }

    setUserInfo(){
        fullName.textContent = this._userName;
        hobby.textContent = this._userJob;
    }
}