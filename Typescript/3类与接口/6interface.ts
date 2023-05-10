interface UserInterface{
    name:string
    age:number
    isLock:boolean
}
const user:UserInterface={
    name:'sda',
    age:12,
    isLock:true
}
function isLock(user:UserInterface,lock:boolean):UserInterface{
    user.isLock=lock
    
    return user
}
isLock(user,true)