"use strict";
const user = { name: 'asdas', age: 12, open: true, lesson: [{ title: 'linux' }, { title: 'css' }] };
user.open = false;
user.age = 34;
user.lesson.push({ title: "js" });
console.log(user);
