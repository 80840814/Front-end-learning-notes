type userType={name:string;age:number;sex?:boolean|string|number}
let addUser=(user:userType):void=>{
    console.log('添加用户');
}
addUser({name:'demo',age:12})
let updateUser=(user:userType):void=>{
    console.log('更新用户');
}
updateUser({name:'demo',age:12})