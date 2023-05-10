"use strict";
{
    let SexType;
    (function (SexType) {
        SexType[SexType["Boy"] = 0] = "Boy";
        SexType[SexType["Girl"] = 1] = "Girl";
    })(SexType || (SexType = {}));
    const hd = {
        name: 'sdasdas',
        age: 12,
        sex: SexType.Boy
    };
    const xj = {
        name: 'sdasdas',
        age: 17,
        sex: SexType.Girl
    };
    const users = [hd, xj];
    console.log(users);
}
