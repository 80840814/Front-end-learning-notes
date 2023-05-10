{
    function getLength<T extends string|number|any[]>(arg:T):number{
    return arg.length
}
console.log(getLength('dsasadsad'));
}
{
    function getLength<T extends {length:number}>(arg:T):number{
    return arg.length
 }
 console.log(getLength<string|number>(['sadsa','asd',1231]));
}