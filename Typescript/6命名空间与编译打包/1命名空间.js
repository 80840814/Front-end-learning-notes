"use strict";
var User;
(function (User) {
    User.name = '后盾人';
})(User || (User = {}));
var Member;
(function (Member) {
    Member.name = 'houdunren.com';
})(Member || (Member = {}));
console.log(User.name);
console.log(Member.name);
//报错，因为没有使用 export 将变量导出
