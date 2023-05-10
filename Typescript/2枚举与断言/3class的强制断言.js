"use strict";
// let alink=document.querySelector('#hd') as HTMLLinkElement
// alink.href
class Hd {
    constructor(el) {
        this.el = el;
    }
    html() {
        return this.el.innerHTML;
    }
}
const el = document.querySelector('.xj');
const obj = new Hd(el);
console.log(obj.html());
