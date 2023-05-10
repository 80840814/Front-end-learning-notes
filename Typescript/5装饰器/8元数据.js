"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//引入支持元数据的扩展名
require("reflect-metadata");
const hd = { name: '向军', city: '北京' };
//在对象 hd 的属性 name 上定义元数据 (元数据指对数据的描述)
Reflect.defineMetadata('xj', 'houdunren.com', hd, 'name');
let value = Reflect.getMetadata('xj', hd, 'name');
console.log(value);
