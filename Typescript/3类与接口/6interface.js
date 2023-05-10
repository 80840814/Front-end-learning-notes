"use strict";
const user = {
    name: 'sda',
    age: 12,
    isLock: true
};
function isLock(user, lock) {
    user.isLock = lock;
    return user;
}
isLock(user, true);
