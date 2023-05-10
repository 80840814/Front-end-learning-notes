const movedecor:ClassDecorator=(target:Function)=>{
    console.log(target);
    target.prototype.getPosition=():{x:number;y:number}=>{
        return {x:100,y:200}
    }
}
@movedecor
class Tank{
    public getPosition(){}
}
@movedecor
class Player{}
const t=new Tank()
console.log(t.getPosition());