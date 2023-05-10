"use strict";
class User {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    info() {
        return `${this.name}的年龄是${this.age}`;
    }
}
const hd = new User('后盾人', 14);
const xj = new User('alice', 18);
const users = [];
users.push(hd, xj);
console.log(users);
