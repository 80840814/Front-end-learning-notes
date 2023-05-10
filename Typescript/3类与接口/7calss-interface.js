"use strict";
{
    class User {
        constructor(user) {
            this._info = user;
        }
        get info() {
            return this._info;
        }
    }
    const hd = new User({ name: 'sda', age: 12 });
    console.log(hd._info);
}
