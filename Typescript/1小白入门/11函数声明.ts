let hd=()=>{}
//可选值
function sum(a:number,b:number,ratio?:){
    return (a+b)*ratio
}
console.log(sum(4,6,0.4));
//设置默认值
function sum1(a:number,b:number,ratio:number=0.3){
    return (a+b)*ratio
}
console.log(sum1(4,6));