{
    interface UserInterface{
        name:string,age:number
    }
    class User{
    _info:UserInterface
    constructor(user:UserInterface){
        this._info=user
    }
    get info():UserInterface{
        return this._info
    }
}
const hd=new User({name:'sda',age:12})
console.log(hd._info);
}