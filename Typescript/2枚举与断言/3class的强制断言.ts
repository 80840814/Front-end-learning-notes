// let alink=document.querySelector('#hd') as HTMLLinkElement
// alink.href
class Hd{
    el:HTMLDivElement
    constructor(el:HTMLDivElement){
        this.el=el
    }
    html(){
        return this.el.innerHTML
    }
    
}
const el=document.querySelector('.xj')as HTMLDivElement
const obj=new Hd(el)
console.log(obj.html());
