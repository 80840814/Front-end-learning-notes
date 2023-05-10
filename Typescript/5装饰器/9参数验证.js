"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
//引入支持元数据的扩展名
require("reflect-metadata");
const requiredMetadataKey = Symbol('required');
//哪些参数需要验证，记录参数顺序数字
let requiredParameters = [];
function required(target, propertyKey, parameterIndex) {
    //将需要验证的参数索引存入
    requiredParameters.push(parameterIndex);
    //在 target 对象的 propertyKey属性上定义元素数据 ，参数为: 键，值，对象，方法
    Reflect.defineMetadata(requiredMetadataKey, requiredParameters, target, propertyKey);
}
const validate = (target, propertyKey, descriptor) => {
    const method = descriptor.value;
    descriptor.value = function () {
        //读取 @required 装饰器定义的元数据
        let requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey);
        //如果有值，表示有需要验证的参数
        if (requiredParameters) {
            for (const parameterIndex of requiredParameters) {
                //如果参数不存在或参数值为 undefined 报出错误
                if (requiredParameters.includes(parameterIndex) && arguments[parameterIndex] === undefined) {
                    throw new Error('验证失败，参数不能为空.');
                }
            }
        }
        //验证通过后执行类方法
        return method.apply(this, arguments);
    };
};
class Hd {
    show(name, id) {
        console.log('验证通过，执行方法');
    }
}
__decorate([
    validate,
    __param(0, required),
    __param(1, required),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Hd.prototype, "show", null);
const f = new Hd();
f.show('后盾人', 18);
// f.show('后盾人', undefined as any)
