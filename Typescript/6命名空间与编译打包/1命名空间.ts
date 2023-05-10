namespace User {
    export let name: string = '后盾人'
}
namespace Member {
    export let name: string = 'houdunren.com'
}

console.log(User.name);
    
console.log(Member.name); 

//报错，因为没有使用 export 将变量导出