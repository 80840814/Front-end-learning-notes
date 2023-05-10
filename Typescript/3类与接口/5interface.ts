{interface UserInterface{
    name:string
    age?:number
    info():string
}
let hd:UserInterface={
    name:'qw',
    // age:12,
    info(){
        return `${this.name}+${this.age}`
    }
    
}
console.log(hd);
}