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
const MusicDecorator = (type) => {
    switch (type) {
        case 'player':
            return (constructor) => {
                constructor.prototype.playMusic = () => {
                    console.log(`播放【海阔天空】音乐`);
                };
            };
            break;
        default:
            return (constructor) => {
                constructor.prototype.playMusic = () => {
                    console.log(`播放【喜洋洋】音乐`);
                };
            };
    }
};
let Tank = class Tank {
    constructor() {
    }
};
Tank = __decorate([
    MusicDecorator('tank'),
    __metadata("design:paramtypes", [])
], Tank);
const tank = new Tank();
tank.playMusic();
let Player = class Player {
};
Player = __decorate([
    MusicDecorator('player')
], Player);
const xj = new Player();
xj.playMusic();
