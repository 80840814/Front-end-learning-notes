"use strict";
//asconst将之前的宽泛类型字符串更改为值类型
let a = 'qweqw';
let b = 1221;
let hd = [a, b];
// let hd=[a,b] as const
let f = hd[1];
f = 'wqeqwwqe';
console.log(f);
// let div=document.querySelector('.id');
// div.id
let div = document.querySelector('.id');
let divs = document.querySelector('.id');
//如果元素是唯一的会进行推断，如果不是唯一的，会向原型链上一级找一个最接近的
//如果确定有这个元素，可以使用as断言，或者使用！进行非空断言
div.id;
divs.id;
