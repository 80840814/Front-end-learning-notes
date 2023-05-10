# TypeScript

## 基础知识

typescript可以将 typescript 中的类型理解为一类值的集合，比如 'houdunren'、'后盾人'都属于 string 类型集合。

- 有些类型没有值比如 never，不能将任何值赋予 never 类型的变量

- 有些类型只有一个值，下面的`hd`变量的值只能是字符串`a`

  ```text
   type HOUDUNREN='a' ;
   const hd:HOUDUNREN='a'
  ```

- string、number 是无限集合，而上例中的 HOUDUNREN 类型为有限集合

### 类型校验

下面没有使用类型限制时，函数参数传入字符串也是可以执行的，显示这个结果是不对的

```text
function sum(a,b){
	return a+b;
}

console.log(sum('a',3)); //结果为 a3
```

加上严格类型后，在编译环节就会提示错误

```text
function sum(a:number,b:number){
	return a+b;
}

console.log(sum('a',3))
//报错 Argument of type 'string' is not assignable to parameter of type 'number'.
```

### 类型推断

当没有明确设置类型时，系统会根据值推断变量的类型

#### 字符串

下例中系统会根据值推断 hd 变量为 string，当将 hd 设置为 18 的 number 类型时编译时将报误

```text
let hd = 'houdunren.com'; //let hd: string
hd = 18;
```

#### 数值

ts 中的数值类型包括了小数、负数、整数

```text
let hd =100 //let hd: number
hd = 100.1
hd = -101
```

#### 布尔值

值为 true 或 false 会被推断为 boolean 类型

```text
let state = true; //let state: boolean
```

#### 数组

下面是数组类型的推断结果，表示数组内容值为字符串

```text
const hd = ['houdunren.com', '后盾人'] //const hd: string[]

hd.push(100) //因为类型不允许，所以报错
```

下面会推断数组允许的值为字符串或数值

```text
const hd = ['houdunren.com', '后盾人',100] //const hd:(string|number)[]

hd.push(100,'向军') //数组允许数值、字符串类型，所以编译通过
```

#### 对象

ts 也可以推断字面量类型

```text
const user = {name:'后盾人',age:18,open:true}
```

推断结果如下

```text
const user: {
    name: string;
    age: number;
    open: boolean;
}
```

如果向对象中添加类型中不存在的属性将报错

```text
const user = {name:'后盾人',age:18,open:true}

user.city = '北京'
//将产生错误 Property 'city' does not exist on type
```

下面是更复杂的在对象中嵌套对象，TS 也是可以推断出来的

```text
const user = {name:'后盾人',age:18,open:true,lessons:[
    {title:'linux'},
    {title:'TS'}
]}

user.lessons[0].title
```

上例推断的结果是

```text
const user: {
    name: string;
    age: number;
    open: boolean;
    lessons: {
        title: string;
    }[];
}
```

#### 索引签名

如果有明确的索引名称可以使用下面方式来定义签名

```text
type HOUDUNREN = {
  name: string
  city: string
}

let hd: HOUDUNREN = {
  name: 'houdunren',
  city: 'beijing'
}
```

如果定义任意属性的签名，可以使用索引签名完成

```text
type HOUDUNREN = {
  [key: string]: keyof any
}

let hd: HOUDUNREN = {
  name: 'houdunren'
}
```

也可以添加明确的索引

```text
type HOUDUNREN = {
  [key: string]: keyof any
  city: string
}

let hd: HOUDUNREN = {
  name: 'houdunren',
  city: 'beijing'
}
```

下例中我们要求索引后有 Hd 的后缀，则可以使用模板字面量形式

```text
type HOUDUNREN = {
  [key: `${string}Hd`]: keyof any
}

let hd: HOUDUNREN = {
  nameHd: 'houdunren'
}
```

当然也可以使用 Record 工具类型来定义

```text
type HOUDUNREN = Record<string, string>

let hd: HOUDUNREN = {
  name: 'houdunren'
}
```

Record 可以使用联合类型定义索引

```text
type HOUDUNREN = Record<'name' | 'age' | 'city', string>

let hd: HOUDUNREN = {
  name: 'houdunren',
  age: '18',
  city: 'beijing'
}
```

#### any

使用 any 指包含所有值的顶部类型，所以 any 不进行类型检查，等于关闭了 TS 对该变量的严格类型校验

- 使用 any 类型等同于使用纯 JavaScript 的开发方式
- any 类型是顶部类型，所有其他类型是他的子类型
- 使用 any 类型将失去 typescript 静态类型的强制检测
- 只有在描述一个根本不知道的类型时使用 any

可以将 any 视为所有类型的组合表示

```text
let hd:string|boolean|number;
hd = '后盾人'

let houdunren:any
hd = '后盾人'
```

下面是设置基本 any 的示例

```text
let hd:any

//以下赋值不会报错
hd='houdunren'
hd=2010
hd=true
hd=[]
hd ={}
hd= class{}
```

在数组中使用 any 类型，可以设置任意类型的值

```text
let hd:any[] =['houdunren.com','后盾人',2010,true]
```

也可以使用泛型的方式设置 any 类型数组

```text
let hd:Array<any> =['houdunren.com','后盾人',2010,true]
```

为对象属性设置类型

```text
let hd:{
    name:any,
    year:any
}
//以下设置都不会报错
hd={name:'后盾人',year:2010}
hd={name:2010,year:'后盾人'}
```

any 太过宽泛所以不建议使用，他会丢失 TS 的严格类型校验，比如下面的示例并不会报错

```text
let hd:any
hd.get() //不会报错
```

下面再来看一下对象的使用 any 类型造成的问题

```text
class Hd {
    constructor() { }
    get = () => 'houdunren'
}

const obj:any = new Hd;
console.log(obj.get());

obj.show()
```

所以上例需要指定正确的 Hd 类型，而不是使用 any

```text
...
const obj:Hd = new Hd;
...
```

能过设置 tsconfig.json 的 `noImplicitAny=true` 配置项，可以禁止隐含的 any 类型。以下代码会在编译时报错

```text
function sum(a, b) {
  return a + b
}
```

#### unknown

unknown 类型也是顶部类型这与 any 一样

- unknown 用于表示未知的类型
- 会进行 TS 的类型检查，any 不进行 TS 检查
- 使用 unknown 类型时可以使用 `as` 类型断言来明确类型

下面是 any 与 unknown 赋值上的区别，unknown 需要明确类型后赋值，any 则不需要

```text
let xj:any ='后盾人'
let hd:unknown = 'houdurnen'

let a:string = xj
let b:string=hd //报错: 'unknown'未知类型不能赋值给'string'类型

// unknown 类型需要明确类型后赋值
let c:string=hd as string
```

可以把任何值赋值给 unknown 类型，但在使用时需要指明类型

```text
let hd: unknown
hd = 'houdunren'
hd = 100

//在使用时，TS不知道是什么类型，所以需要使用类型断言进行告之
let c = hd as number + 20
```

使用 keyof 类型工具时 unknown 与 any 的区别

```text
type HD<T> = { [P in keyof T]: string }

//{[x: string]: string;}
type HOUDUNREN = HD<any>

//结果为{}，因为 keyof unknow 是never，所以被忽略了
type XJ = HD<unknown>
```

不同类型赋值时会报错

```text
let hd:string ='99'
let xj:number =hd as number //报错，TS 认为字符串转数值会出现错误
```

这里需要使用 unknown 做个中间层转换，将其先转换为 unknown 未知类型，再转换为 string 类型

```text
let hd:string ='99'
let xj:number =hd as unknown as number
```

any 与 unknown 在类型检查上是有区别的

```text
let houdunren: any
houdunren.show();//any不进行类型检查，所以不会报错

let hd: unknown

hd.show();//unknown进行类型检查，unknown是未知类型所以报错
```

使用 any 类型 ts 不进行类型校验，所以在编译时不会报错，但执行编译后的 js 后会显示 NaN

```text
function get(val: any) {
  val = val * 100;
  return val
}

console.log(get('后盾人'));  //NaN
```

使用 unknown 类型时，结合 typeof 进行类型判断，根据不同类型使用不同逻辑

```text
function get(val: unknown) {
  if (typeof val === 'number') {
    return val * 100;
  }
  return 0
}

console.log(get(100));  //NaN
```

#### void

void 类型的值为 null 或 undefined，常用于对函数返回值类型定义

- 严格模式（tsconfig.json 配置中关闭`strict`）时，void 值只能是 undefined（有关 TS 配置会在后面章节介绍）
- 如果函数没有返回值请使用 void 类型，这会使用代码更易读，并可对不小心造成的函数返回内容进行校验
- 你也可以将 void 理解为对返回 null 或 undefined 的函数返回值声明
- TypeScript 中，不返回任何内容的 void 函数实际上返回的是 undefined

void 类型的值可以是 null 或 undefined，但如果 TS 配置开启了 `strict` 或 `strictNullChecks`则不允许 void 为 null

```text
let hd:void = undefined;
let houdunren:void = null;
```

void 不允许设置其他类型

```text
let hd:void
hd='houdunren.com' //设置string 将报错
```

TypeScript 中，不返回任何内容的 void 函数实际上返回的是 undefined

```text
function hd(): void {
}

let xj = hd();
xj = undefined
```

经过 void 限定后是不允许函数返回内容的，所以以下代码将报错

```text
function hd():void{
    return 'hd'
}
```

#### never

never 是任何类型的子类型，可以赋值给任何类型，没有类型是 never 的子类型。

never 类型的特点

- never 没有任何子类型，所以任何类型都不可以赋值给 never
- 函数抛出异常或无限循环时返回值是 never
- 可以将每个类型理解为某类值的集合，比如 number 类型包含所有数字，但 never 类型没有任何值。

```text
function hd():never{
	throw new Error("出错了")
}
```

never 是所有类型的子类型，可以分配给任何类型，所以下面类型为 `string`

```text
type HOUDUNREN = never extends string ? string : boolean //string
```

其他类型不可以分配给 never 类型

```text
type HOUDUNREN = string extends never ? string : boolean //boolean
```

never 是所有类型的子类型，所以下面实际类型是 `string | number`

```text
type HOUDUNREN = never | string | number //string | number
```

#### null & undefined

null 与 undefined 也是对变量类型，用于定义值为 null 或 undefined

```text
let hd:null =null
let houdunren:undefined=undefined

console.log(hd,houdunren);
```

下面是函数返回值的使用

```text
function getName():string |null{
    return null
}

console.log(getName());
```

当配置项启用 `strictNullChecks` 时，null 与 undefined 只能赋值给 void、null、undefined 类型

```text
let hd:string =undefined; //配置strictNullChecks=true 时将报错
```

#### union 联合类型

union 联合类型是多个类型的组合，使用 `|` 进行连接，`|` 类似于 javascript 中的 `||` 或运算符。

下面是为变量声明字符串或数值类型

```text
let hd:string | number = 'houdunren.com'
hd = 2010
```

下面是为数组声明多种类型

```text
let hd:(string | number | boolean)[]  = []
hd.push('houdunren.com',2010,true)
```

也可以使用泛型方式声明（泛型的详细使用后面内容会介绍）

```text
let hd:Array<string|number|boolean>  = []
hd.push('houdunren.com',2010,true)
```

函数参数是联合类型时，可以使用 typeof 进行判断后分别处理，ts 会根据条件进行类型推断

```text
type HD = {
  name: '后盾人'
}

function get(a: string | HD) {
  if (typeof a === 'string') {
    a.includes('houdunren')
  } else {
    return a.name
  }
```

### 函数

#### 函数声明

```ts
let hd=()=>{}
```

#### 函数参数声明

```ts
function sum(a:number,b:number,ratio?:){
    return (a+b)*ratio
}
console.log(sum(4,6,0.4));
//设置默认值
function sum1(a:number,b:number,ratio:number=0.3){
    return (a+b)*ratio
}
console.log(sum1(4,6));
```

#### 返回值类型

下面是系统自动推断的参数返回值为 `number`

```text
function sum(a: number, b: number) {
    return a + b;
}
//函数结构为 function sum(a: number, b: number): number
```

我们也可以明确返回类型

```text
function sum(a: number, b: number): string {
    return `计算结果是：${a + b}`;
}

console.log(sum(3, 3));
```

下面是箭头函数的表示方法

- 因为函数体只有一条语句，所以省略了`{}`

```text
let sum = (a: number, b: number): string => `计算结果是：${a + b}`
```

当函数没有明确返回值时，使用 void 类型。TS 会自动推断，建议明确声明 void 类型

```text
let hd = (): void => {
    console.log('后盾人');
}
hd()
```

#### type对参数进行声明

```ts
type userType={name:string;age:number;sex?:boolean|string|number}
let addUser=(user:userType):void=>{
    console.log('添加用户');
}
addUser({name:'demo',age:12})
let updateUser=(user:userType):void=>{
    console.log('更新用户');
}
updateUser({name:'demo',age:12})
```

#### tuple元组

> - 元组与数组类似，但元组要为每个值进行类型声明。
>
> - 数组只是定义了值的类型，并没有约束某个位置的值必须是什么类型

```ts
const hd: [string, number] = ['后盾人', 2030]
hd[0] = true //报错，第一个值必须是字符串
```

## 断言的使用

### 枚举

枚举在程序语言及 mysql 等数据库中广泛使用

- 不设置值时，值以 0 开始递增
- 当某个字段设置数值类型的值后，后面的在它基础上递增
- 也可以将值设置为其他类型

```tsx
enum SexType{
    BOY='boy',
    GIRL='girl'
}
let user={
    name:"houdunre",
    sex:1
}
console.log(SexType.BOY);
```

### as断言

> as 断言的意思就是用户断定这是什么类型，不使用系统推断的类型，说白了就是『我说是什么，就是什么』

下例中 TS 会根据函数推断变量 f 的类型是 string | number

```text
function hd(arg: number) {
  return arg ? 'houdunren' : 2030
}

let f = hd(1) //let f: string | number
```

我们可以由开发者来断定（断言）这就是字符串，这就是断言

```text
function hd(arg: number) {
  return arg ? 'houdunren' : 2030
}

let f = hd(1) as string //let f: string
```

也可以使用下面的断言语法

```text
function hd(arg: number) {
  return arg ? 'houdunren' : 2030
}

let f = <string>hd(1) //let f: stri
```

### const断言

- const 保证该字面量的严格类型
- let 为通用类型比如字符串类型

> `const`断言告诉编译器为表达式推断出它能推断出的最窄或最特定的类型，而不是宽泛的类型

- 字符串、布尔类型转换为具体值
- 对象转换为只读属性
- 数组转换成为只读元组

```text
let user = '后盾人' as const
user = 'houdunren.com'

let a='qweqw' as const
//asconst将之前的宽泛类型字符串更改为值类型

//与以下很相似
let user: 'houdunren' = 'houdunren'
user = 'houdunren'
```

对象转换为只读属性

```text
let user = { name: '后盾人' } as const
user.name = 'houdunren' //因为是只读属性，所以不允许设置值
```

当为变量时转换为变量类型，具体值是转为值类型

```text
let a = 'houdunren.com'
let b = 2030

let f = [a, b, 'houdurnen.com', true, 100] as const //readonly [string, number, "sina.com", true, 100]
let hd = f[0]
hd = '向军'
```

#### **数组使用const** 

```tsx
let a='qweqw'
let b=1221
//let hd=[a,b]
let hd=[a,b] as const
let f=hd[1]
```

没有使用const前，f的类型是string或者number

使用了const之后，f的类型只能是数值number

#### 解构

使用 as const 就可以很高效的解决上面的问题，可以得到具体的类型，来得到更安全的代码，同时会有更好的代码提示

```text
function hd() {
  let a = '后盾人'
  let b = (): void => {}
  return [a, b] as const
}

const [x, y] = hd() //变量 y 的类型为 () => void
```

因为 const 是取值的类型，下面代码虽然不报错，但此时 b 的类型已经是 字符串或函数，所以像下面一样在函数调用时 as const 没有意义

```text
function hd() {
  let a = 'houdunren.com'
  let b = (x: number, y: number): number => x + y
  return [a, b]
}

const [n, m] = [...hd()] as const
```

#### null/undefined

默认情况下 null 与 undefined 可以赋值给其他类型

```text
let hd: string = 'houdunren.com'
hd = null
hd = undefined
```

当我们修改 tsconfig.json 配置文件的 strictNullChecks 字段为 true（默认即为 true） 时，则不能将 null、undefined 赋值给其他类型

```text
"strictNullChecks": true
```

除非向下面一样明确指定类型

```text
let hd: string |undefiend|null = 'houdunren.com'
hd = null
hd = undefined
```

### 非空断言

下面的示例获取的值可能为 HTMLDivElement 或 null，所以直接分配类型“HTMLDivElement”将报错误

> 下例操作需要开启 tsconfig.json 的配置项 strictNullChecks 字段为 true

```text
const el: HTMLDivElement = document.querySelector('.hd')
console.log(el.id);
```

可以使用 as 断言类型

```text
const el: HTMLDivElement = document.querySelector('.hd') as HTMLDivElement
console.log(el.id);
```

在值后面使用 `!` 来声明值非 null

```text
const el: HTMLDivElement = document.querySelector('.hd')!
console.log(el.id);
```

#### dom的断言

```tsx
let div=document.querySelector('.id') as HTMLDivElement
let divs=document.querySelector('.id')!
//如果元素是唯一的会进行推断，如果不是唯一的，会向原型链上一级找一个最接近的
//如果确定有这个元素，可以使用as断言，或者使用！进行非空断言
div.id
divs.id
```

#### 断言处理

使用`as` 将类型声明为 `HTMLAnchorElement` 则 TS 会将其按 a 链接类型处理

- 现在所有的提示将是 a 链接属性或方法

```text
const el = document.querySelector('.hd') as HTMLAnchorElement //const el: HTMLAnchorElement
console.log(el.href);
```

下例中的 DOM 类型会报错，因为.hd 是 Element 类型，而构建函数参数 el 的类型是 `HTMLDivElement`

```text
class Hd {
    constructor(el: HTMLDivElement) {
    }
}
const el = document.querySelector('.hd'); //el: Element
new Hd(el)
```

这时可以使用 as 断言处理，明确告之获取的值类型是 `HTMLDivElement`

```text
class Hd {
    constructor(el: HTMLDivElement) {
    }
}
const el = document.querySelector('.hd') as HTMLDivElement;
new Hd(el)
```

#### dom事件的处理

html的处理

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="bt">add</button>
</body>
<script src="4dom事件处理.js"></script>
</html>
```

ts代码：

```tsx
const bt=document.querySelector('#bt')as HTMLButtonElement
bt.addEventListener('click',(e:Event)=>{
    e.preventDefault()
    const body=document.querySelector('body')!
    body.insertAdjacentHTML('beforeend','<h2>asaa</h2>')
})

```

## 类与接口

### clas的约束

```tsx
class User{
    name:string
    age:number
    constructor(n:string,a:number){
        this.name=n
        this.age=a
    }
    info():string{
        return `${this.name}的年龄是${this.age}`
    }

}
const hd=new User('后盾人',14)
const xj=new User('alice',18)
const users:User[]=[]
users.push(hd,xj)
console.log(users);
```

###  修饰符

#### public

下面来介绍第一个访问修饰符 public，指**公开**的属性或方法

- 默认情况下属性是 public （公开的），即可以在类的内部与外部修改和访问
- 不明确设置修饰符即为 public

#### potected

> protected 修饰符指**受保护**的，只允许在父类与子类使用，不允许在类的外部使用

```tsx
class Hd {
    protected name: string
    constructor(name: string) {
        this.name = name
    }
}
class User extends Hd {
    constructor(name: string) {
        super(name)
    }

    public info(): string {
        return `你好 ${this.name}`
    }
}

const hd = new User('后盾人');

console.log(hd.info());
console.log(hd.name); //属性是 protected 不允许访问
```

#### private

private 修饰符指**私有**的，不允许在子类与类的外部使用

父类声明 private 属性或方法子类不允许覆盖

```text
class Hd {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    private info(): void { }
}
class User extends Hd {
    constructor(name: string) {
        super(name)
    }

    public info(): void {

    }
}
```

子类不能访问父类的 private 属性或方法

```text
class Hd {
    private name: string
    constructor(name: string) {
        this.name = name
    }
}
class User extends Hd {
    constructor(name: string) {
        super(name)
    }

    public info(): string {
        return `你好 ${this.name}` //属性是 private 不允许子类访问
    }
}
```

子类更改父类方法或属性的访问修饰符有些限制的

- 父类的 private 不允许子类修改
- 父类的 protected 子类可以修改为 protected 或 public
- 父类的 public 子类只能设置为 public

```text
class Hd {
    private name: string
    constructor(name: string) {
        this.name = name
    }
    public info(): void { }
}
class User extends Hd {
    constructor(name: string) {
        super(name)
    }
    protected info(): string {
        return 'houdunren.com'
    }
}
```

#### readonly

readonly 将属性定义为只读，不允许在类的内部与外部进行修改

- 类似于其他语言的 const 关键字

```tsx
class Axios{
    readonly site:string='http://www.baidu.com/'
    public constructor(site?:string){
        this.site=site||this.site
    }
    public get(url:string):any[]{
        console.log(`你请求的是${this.site}/${url}`);
        return []
    }
}
const instance=new Axios('http://yixiaomo.top')
instance.get('user')
```

#### constructor 

构造函数是初始化实例参数使用的，在 TS 中有些细节与其他程序不同

我们可以在构造函数 constructor 中定义属性，这样就不用在类中声明属性了，可以简化代码量

- 必须要在属性前加上 public、private、readonly 等修饰符才有效

```text
class User {
    constructor(
        public name: string,
        public age: number
    ) {}

    public info(): string {
        return `${this.name}的年龄是 ${this.age}`
    }
}

const hd = new User('后盾人', 12);
```

#### static

static 用于定义静态属性或方法，属性或方法是属于构造函数的

- 静态属性是属于构造函数的，不是对象独有的，所以是所有对象都可以共享的
- 只能通过构造函数调用
- 有关原型与 class 的原理，向军大叔已经在[后盾人 (opens new window)](https://houdunren.com/)上录制了，有时间学习一下，可以了解原理

**语法介绍**

下面是 static 使用的语法

```text
class Site {
    static url: string = 'houdunren.com'

    static getSiteInfo() {
        return '我们不断更新视频教程在' + Site.url
    }
}
console.log(Site.getSiteInfo());
```

#### 单例模式

当把 construct 定义为非 public 修饰符后，就不能通过这个类实例化对象了。

```text
class User {
    protected constructor() {

    }
}

const hd = new User();//报错
```

我们可以利用这个特性再结合 static 即可实现单例模式，即只实例化一个对象

```text
{
    class Axios{
        private static instance:Axios|null=null
        private constructor(){
            // console.log('asdsa');
        }
        static make():Axios{
            if (Axios.instance==null) {
                console.log('success');
                Axios.instance=new Axios()
            }
            return Axios.instance
        }
    }
const instance =Axios.make()
const instance1 =Axios.make()
const instance2 =Axios.make()
const instance3 =Axios.make()
// console.log(instance);
}
```

### get/set

使用 get 与 set 访问器可以动态设置和获取属性，类似于 vue 或 laravel 中的计算属性

```text
class User {
    private _name
    constructor(name: string) {
        this._name = name
    }
    public get name() {
        return this._name;
    }
    public set name(value) {
        this._name = value
    }
}

const hd = new User('向军')
hd.name = '李四'
console.log(hd.name);
```

因为 get 与 set 是新特性所以编译时要指定 ES 版本

```text
tsc 1.ts -w -t es5
```

### abstract

> 一个规范的模板

- 抽象类里面有无抽象方法或者抽象属性都可以

- 抽象方法或者抽象属性的使用必须有抽象类

- 但是用了抽象类一定要有实现，不然会进行报错

抽象类定义使用 abstract 关键字，抽象类除了具有普通类的功能外，还可以定义抽象方法

- 抽象类可以不包含抽象方法，但抽象方法必须存在于抽象类中
- 抽象方法是对方法的定义，子类必须实现这个方法
- 抽象类不可以直接使用，只能被继承
- 抽象类类似于类的模板，实现规范的代码定义

```text
class Animation {
    protected getPos() {
        return { x: 100, y: 300 }
    }
}

class Tank extends Animation {
    public move(): void {

    }
}

class Player extends Animation {
    public move: void{

}
```

上例中的子类都有 move 方法，我们可以在抽象方法中对其进行规范定义

- 抽象方法只能定义，不能实现，即没有函数体
- 子类必须实现抽象方法

```text
abstract class Animation {
    abstract move(): void
    protected getPos() {
        return { x: 100, y: 300 }
    }
}

class Tank extends Animation {
    public move(): void {

    }
}

class Player extends Animation {
    public move(): void {

    }
}
```

子类必须实现抽象类定义的抽象属性

```text
abstract class Animation {
    abstract move(): void
    abstract name: string
    protected getPos() {
        return { x: 100, y: 300 }
    }
}
class Tank extends Animation {
    name: string = '坦克'
    public move(): void {

    }
}

class Player extends Animation {
    name: string = '玩家'

    public move(): void {

    }
}
```

抽象类不能被直接使用，只能被继承

```text
abstract class Animation {
    abstract move(): void
    protected getPos() {
        return { x: 100, y: 300 }
    }
}
const hd = new Animation(); //报错，不能通过抽象方法创建实例
```

### interface

接口用于描述类和对象的结构

- 使项目中不同文件使用的对象保持统一的规范
- 使用接口也会支有规范更好的代码提示

使用接口进行约束

```tsx
{interface UserInterface{
    name:string
    age?:number
    info():string
}
let hd:UserInterface={
    name:'qw',
    // age:12,
    info(){
        return `${this.name}+${this.age}`
    }
    
}
console.log(hd);
}
```

#### 接口和继承

下面定义游戏结束的接口 `PlayEndInterface` ，AnimationInterface 接口可以使用 `extends` 来继承该接口

```text
interface PlayEndInterface {
    end(): void
}
interface AnimationInterface extends PlayEndInterface {
    name: string
    move(): void
}

class Animation {
    protected getPos(): { x: number; y: number } {
        return { x: 100, y: 300 }
    }
}

class Tank extends Animation implements AnimationInterface {
    name: string = '敌方坦克'
    public move(): void {
        console.log(`${this.name}移动`)
    }
    end() {
        console.log('游戏结束');
    }
}

class Player extends Animation implements AnimationInterface {
    name: string = '玩家'
    public move(): void {
        console.log(`${this.name}坦克移动`)
    }
    end() {
        console.log('游戏结束');
    }
}
const hd = new Tank()
const play = new Player()
hd.move()
play.move()
```

对象可以使用实现多个接口，多个接口用逗号连接

```text
interface PlayEndInterface {
    end(): void
}
interface AnimationInterface {
    name: string
    move(): void
}

class Animation {
    protected getPos(): { x: number; y: number } {
        return { x: 100, y: 300 }
    }
}

class Tank extends Animation implements AnimationInterface, PlayEndInterface {
    name: string = '敌方坦克'
    public move(): void {
        console.log(`${this.name}移动`)
    }
    end() {
        console.log('游戏结束');
    }
}

class Player extends Animation implements AnimationInterface, PlayEndInterface {
    name: string = '玩家'
    public move(): void {
        console.log(`${this.name}坦克移动`)
    }
    end() {
        console.log('游戏结束');
    }
}
const hd = new Tank()
const play = new Player()
hd.move()
play.move()
```

#### 接口interface对函数参数与返回值的类型约束

```tsx
interface UserInterface{
    name:string
    age:number
    isLock:boolean
}
const user:UserInterface={
    name:'sda',
    age:12,
    isLock:true
}
function isLock(user:UserInterface,lock:boolean):UserInterface{
    user.isLock=lock
    
    return user
}
isLock(user,true)
```

#### 接口interface在类的使用

```tsx
{
    interface UserInterface{
        name:string,age:number
    }
    class User{
    _info:UserInterface
    constructor(user:UserInterface){
        this._info=user
    }
    get info():UserInterface{
        return this._info
    }
}
const hd=new User({name:'sda',age:12})
console.log(hd._info);
}
```

#### interface与enum的结合

```tsx
{
    enum SexType{
        Boy,
        Girl
    }
    interface UserInterface{
        name:string
        age:number
        sex:SexType
    }
    const hd:UserInterface={
        name:'sdasdas',
        age:12,
        sex:SexType.Boy
    
    }
    const xj:UserInterface={
        name:'sdasdas',
        age:17,
        sex:SexType.Girl
    
    }
    const users:UserInterface[]=[hd,xj]
    console.log(users);

}
```

#### 扫码支付案例

下面是 index.ts 文件的内容，通过 interface 接口来限制支付宝与微信支付的规范

```text
interface PayInterace {
    handle(price: number): void
}

class AliPay implements PayInterace {
    handle(price: number): void {
        console.log('支付宝付款');
    }
}
class WePay implements PayInterace {
    handle(price: number): void {
        console.log('微信付款');
    }
}

//支付调用
function pay(type: string, price: number): void {
    let pay: PayInterace
    if (type == 'alipay') {
        pay = new AliPay()
    } else {
        pay = new WePay()
    }
    pay.handle(price)
}
```

然后执行编译

```text
tsc index.ts -w
```

界面处理 index.html

```text
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>后盾人</title>
        <script src="index.js" defer></script>
    </head>
    <body>
        <button onclick="pay('alipay',100)">支付宝</button>
        <button onclick="pay('wepay',200)">微信付款</button>
    </body>
</html>
```

type 与 interface 非常相似都可以描述一个对象或者函数，使用 type 用于定义类型的别名，是非常灵活的类型定义方式。

- type 可以定义基本类型别名如联合类型，元组
- type 与 interface 都是可以进行扩展
- 使用 type 相比 interface 更灵活
- 如果你熟悉其他编程语言，使用 interface 会让你更亲切
- 使用类(class) 时建议使用接口，这可以与其他编程语言保持统一
- 决定使用哪个方式声明类型，最终还是看公司团队的规范

### type

#### 基本使用

下面是使用 type 声明对象类型

```text
type User = {
    name: string,
    age: number
}
const hd: User = { name: '后盾人', age: 18 }
```

上面已经讲解了使用 interface 声明函数，下面来看使用 type 声明函数的方式

```text
type Pay = (price: number) => boolean
const wepay: Pay = (price: number) => {
    console.log(`微信支付${price}`);
    return true;
}

wepay(100)
```

#### 类型别名

**type 可以为 number、string、boolean、object 等基本类型定义别名，比如下例的 IsAdmin。**

```text
//基本类型别名
type IsAdmin = boolean

//定义联合类型
type Sex = 'boy' | 'girl'

type User = {
    isAdmin: IsAdmin,
    sex: Sex
}
const hd: User = {
    isAdmin: true,
    sex: "boy"
}

//声明元组
const users: [User] = [hd]
```

#### 索引类型

type 与 interface 在索引类型上的声明是相同的

```text
interface User {
    [key: string]: any
}

type UserTYpe = {
    [key: string]: any
}
```

#### 声明继承

typescript 会将同名接口声明进行合并

```text
interface User {
    name: string
}
interface User {
    age: number
}
const hd: User = {
    name: '后盾人',
    age: 18
}
```

interface 也可以使用 extends 继承

```text
interface Admin {
    role: string
}
interface User extends Admin {
    name: string
}
const hd: User = {
    role: 'admin',
    name: '后盾人',
}
```

interface 也可以 extends 继承 type

```text
type Admin = {
    role: string
}
interface User extends Admin {
    name: string
}
const hd: User = {
    role: 'admin',
    name: '后盾人',
}
```

type 与 interface 不同，存在同名的 type 时将是不允许的

```text
type User {
    name: string
}
type User {
    age: number
}
```

不过可以使用& 来进行 interface 的合并

```text
interface Name {
    name: string
}
interface Age {
    age: number
}
type User = Name & Age
```

下面是 type 类型的声明合并

```text
type Admin = {
    role: string,
    isSuperAdmin: boolean
}
type Member = {
    name: string
}

type User = Admin & Member;

const hd: User = {
    isSuperAdmin: true,
    role: 'admin',
    name: '后盾人'
}
```

下面声明的是满足任何一个 type 声明即可

```text
type Admin = {
    role: string,
    isSuperAdmin: boolean
}
type Member = {
    name: string
}

type User = Admin | Member;

const hd: User = {
    role: 'admin',
    name: '后盾人'
}
```

#### implements

class 可以使用 implements 来实现 type 或 interface

```text
type Member = {
    name: string
}

class User implements Member {
    name: string = '后盾人'
}
```

## 泛型

有些会自动推断

### generics实现方法

```tsx
function dump<T>(arg:T):T{
    return arg
}
let hd=dump<string>('sdadaas')
let xj=dump<boolean>(true)
```

### generics的继承

下面的代码是不严谨的，我们不需要处理数字，因为数字没有 length 属性，同时我们希望返回类型不是 any

```text
function getLength(arg: any) {
    return arg.length;
}
console.log(getLength('houdunren.com')); //13
console.log(getLength(['后盾人'])); //1
console.log(getLength(18)); //undefined
```

泛型是不确定的类型，所以下面读取 length 属性将报错

```text
function getLength<T>(arg: T): number {
    return arg.length; //类型“T”上不存在属性“length”
}
```

我们可以通过继承来解决这个问题

```text
function getLength<T extends string>(arg: T): number {
    return arg.length;
}
```

上例只能处理字符串，不能处理数组等包含 length 的数据，我们可以通过继承 extends 继承，让泛型定义包含 length 属性

```text
function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

//或使用 interface 或 type

type LengthType = { length: number }
function getLengthAttribute<T extends }>(arg: T): number {
    return arg.length;
}
```

如果你的类型只是字符串或数组，也可以使用联合类型

```text
function getLength<T extends string | any[]>(arg: T): number {
    return arg.length
}

console.log(getLength('houdunren.com'))
console.log(getLength(['后盾人', '向军']))
```

TS 也会自动推断，比如下面参数是 T[]，TS 会推断为数组类型，所以这时候是存在 length 的，不会报错

```text
function getLength<T>(arg: T[]): number {
    return arg.length;
}
```

将泛型理解为动态类型，他最终也会是一个类型，所以使用方式与我们其他类型一样的。比如下面的返回值类型，我们就返回了一个元组，包括泛型与数值类型

```text
{
    function getLength<T extends string|number|any[]>(arg:T):number{
    return arg.length
}
console.log(getLength('dsasadsad'));
}

{
    function getLength<T extends {length:number}>(arg:T):number{
    return arg.length
 }
 console.log(getLength<string|number>(['sadsa','asd',1231]));
}
```

### 类

下面我们来掌握在类中使用泛型的方法

**使用泛型复用类**

下面是对数值与字符串类型的集合进行管理，因为业务是一样的，所以下面的实现是重复的

```text
class CollectionNumber {
    data: number[] = []
    public push(...items: number[]) {
        this.data.push(...items)
    }
    public shift() {
        return this.data.shift()
    }
}

class CollectionString {
    data: string[] = []
    public push(...items: string[]) {
        this.data.push(...items)
    }
    public shift() {
        return this.data.shift()
    }
}

const numberCollection = new CollectionNumber()
numberCollection.push(1)
const stringCollection = new CollectionString()
stringCollection.push('后盾人', '向军')

console.log(stringCollection.shift());
```

上例使用泛型来控制就好多了

```text
class Collection<T> {
    data: T[] = []
    public push(...items: T[]) {
        this.data.push(...items)
    }
    public shift() {
        return this.data.shift()
    }
}

const collections = new Collection<number>()
collections.push(1)

type User = { name: string, age: number }
const hd: User = { name: "后盾人", age: 18 }
const userCollection = new Collection<User>()

userCollection.push(hd)
console.log(userCollection.shift());
```

**接口结合泛型**

下面的代码是不稳定的，我们的意图是传递用户数据，但没有类型约束情况下，可以传递任何类型

```text
class User {
    constructor(protected _user) { }
    public get() {
        return this._user
    }
}

const instance = new User({ name: '后盾人' })
console.log(instance.get());
```

对类使用泛型处理后，可以保证传递与返回值的类型，并具有良好的代码提示

```text
interface Article<B,C>{
    title:string
    isLock:B
    comments:C[]
}
type commentType={
    content:string
    auther?:string
}
const hd:Article<boolean,commentType> ={
    title:'sdaas',
    isLock:true,
    comments:[{content:'sdasassadasdsa',auther:'demo'}]
}

```

## 装饰器

装饰器（Decorators）为我们在类的声明及成员上通过编程语法扩展其功能，装饰器以函数的形式声明。

### 装饰器类型

可用装饰器包括以下几种

| 装饰器             | 说明       |
| ------------------ | ---------- |
| ClassDecorator     | 类装饰器   |
| MethodDecorator    | 方法装饰器 |
| PropertyDecorator  | 属性装饰器 |
| ParameterDecorator | 参数装饰器 |

### 实验性

Decorators 是实验性的功能，所以开发时会提示错误，我们需要启动 Decorator 这个实验性的功能。

```text
error TS1219: Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.
```

首先创建配置文件 tsconfig.js

```text
tsc --init
```

然后开启以下配置项，来启动装饰器这个实验性的功能。

```text
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

然后执行命令，错误就消失了，如果没有 [ts-node (opens new window)](https://github.com/TypeStrong/ts-node)请先安装

```text
tsc -w
```

比如下面测试都写在`index.ts`，你要定义index.html内容如下

```text
<html>
<head>
	<script src="index.js"></script>
</head>
</html>
```

### 类装饰器

类装饰器是对类的功能进行扩展

- 首先执行 RoleDecorator 装饰器，然后执行类的构造函数
- 装饰器会优先执行，这与装饰器与类的顺序无关

**装饰器参数**

首先介绍装饰器函数参数说明

| 参数   | 说明     |
| ------ | -------- |
| 参数一 | 构造函数 |

- 普通方法是构造函数的原型对象 Prototype
- 静态方法是构造函数

```text
const MoveDecorator: ClassDecorator = (constructor: Function): void => {
    console.log(`装饰器 RoleDecorator `);
}

@MoveDecorator
class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}
```

即使把装饰器定义放在类的后面也是先执行装饰器

```text
@MoveDecorator
class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}

function MoveDecorator(constructor: Function): void {
    console.log(`装饰器 RoleDecorator `);
}
```

#### 原型对象

因为可以装饰器上得到构造函数，所以可以通过原型对象来添加方法或属性，供实例对象使用

```text
const MoveDecorator: ClassDecorator = (constructor: Function) => {
    constructor.prototype.hd = '后盾人'
    constructor.prototype.getPosition = (): { x: number, y: number } => {
        return { x: 100, y: 100 }
    }
}

@MoveDecorator
class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}
const tank = new Tank()
console.log(tank.getPosition());
```

不过在编译阶段会提示错误，但这不影响编译生成 js 文件

```text
Property 'getPosition' does not exist on type 'Tank'
```

我们可以通过为类添加默认属性来解决这个错误

```text
class Tank {
    public hd: string | undefined
    public getPosition() { }
    constructor() {
        console.log('tank 构造函数');
    }
}
```

或者在调用时使用断言处理

```text
const tank = new Tank()
console.log((tank as any).getPosition());
//或使用以下方式断言
console.log((<any>tank).getPosition());
```

#### 语法糖

不需要把装饰器想的很复杂，下面是同样实现了装饰器的功能。只不过是我们人为调用函数，所以可以把装饰器理解为这种调用的语法糖，这样理解就简单些。

```text
const MoveDecorator: ClassDecorator = (constructor: Function) => {
    constructor.prototype.hd = '后盾人'
    constructor.prototype.getPosition = (): { x: number, y: number } => {
        return { x: 100, y: 100 }
    }
}

class Tank {
    constructor() {
        console.log('tank 构造函数');
    }
}

MoveDecorator(Tank);
const tank = new Tank()
console.log(tank.getPosition());
```

#### 装饰器叠加

装饰器可以叠加使用，下面是定义了位置管理与音乐播放装饰器

```text
//位置控制
const MoveDecorator: ClassDecorator = (constructor: Function): void => {
    constructor.prototype.hd = '后盾人'
	console.log('MoveDecorator');
    constructor.prototype.getPosition = (): void => {
        console.log('获取坐标');
    }
}

//音乐播放
const MusicDecorator: ClassDecorator = (constructor: Function): void => {
	console.log('MusicDecorator');
    constructor.prototype.playMusic = (): void => {
        console.log('播放音乐');
    }
}

@MoveDecorator
@MusicDecorator
class Tank {
    constructor() {
    }
}
const tank = new Tank();
(<any>tank).playMusic();
(<any>tank).getPosition();
```

#### 多类复用

定义好装饰器后，可以为多个类复用，比如下面的玩家与坦克

```text
//位置控制
const MoveDecorator: ClassDecorator = (constructor: Function): void => {
    constructor.prototype.hd = '后盾人'
    constructor.prototype.getPosition = (): void => {
        console.log('获取坐标');
    }
}
//音乐播放
const MusicDecorator: ClassDecorator = (constructor: Function): void => {
    constructor.prototype.playMusic = (): void => {
        console.log('播放音乐');
    }
}

@MoveDecorator
@MusicDecorator
class Tank {
    constructor() {
    }
}
const tank = new Tank();
(<any>tank).playMusic();
(<any>tank).getPosition();

@MoveDecorator
class Player {
}

const xj: Player = new Player();
(xj as any).getPosition()
```

#### 响应消息

下面是将网站中的响应消息工作，使用装饰器进行复用。

```text
//消息响应
const MessageDecorator: ClassDecorator = (constructor: Function): void => {
    constructor.prototype.message = (message: string): void => {
        document.body.insertAdjacentHTML('afterbegin', `<h2>${message}</h2>`)
    }

}

@MessageDecorator
class LoginController {
    login() {
        console.log('登录逻辑');
        this.message('登录成功')
    }
}
const controller = new LoginController();

controller.login()
```

### 装饰器工厂

有时有需要根据条件返回不同的装饰器，这时可以使用装饰器工厂来解决。可以在类、属性、参数等装饰器中使用装饰器工厂。

下例根据 MusicDecorator 工厂函数传递的不同参数，返回不同装饰器函数。

```text
const MusicDecorator = (type: string): ClassDecorator => {
    switch (type) {
        case 'player':
            return (constructor: Function) => {
                constructor.prototype.playMusic = (): void => {
                    console.log(`播放【海阔天空】音乐`);
                }
            }
            break;
        default:
            return (constructor: Function) => {
                constructor.prototype.playMusic = (): void => {
                    console.log(`播放【喜洋洋】音乐`);
                }
            }

    }
}

@MusicDecorator('tank')
class Tank {
    constructor() {
    }
}
const tank = new Tank();
(<any>tank).playMusic();

@MusicDecorator('player')
class Player {
}

const xj: Player = new Player();
(xj as any).playMusic()
```

### 方法装饰器

装饰器也可以修改方法，首先介绍装饰器函数参数说明

| 参数   | 说明                                                         |
| ------ | ------------------------------------------------------------ |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数   |
| 参数二 | 方法名称                                                     |
| 参数三 | 属性描述，如果对这个知识点不清楚，请访问[后盾人 (opens new window)](https://www.houdunren.com/)看向军大叔录制的 js 课程 |

#### 基本使用

下面使用 ShowDecorator 装饰来修改 show 方法的实现

```text
const ShowDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | Symbol,
  descriptor: PropertyDescriptor,
): void => {
  //对象
  console.dir(target)
  //方法名
  console.dir(propertyKey)
  //方法实现
  console.dir(descriptor)
  descriptor.value = () => {
    console.log('houdunren.com')
  }
}

class Hd {
  @ShowDecorator
  show() {
    console.log('show method')
  }
}

const instance = new Hd()
instance.show()
```

输出结果

```text
Object
show
Object
houdunren.com
```

下面是修改方法的属性描述 writable 为 false，这时将不允许修改方法。

> 如果对属性描述知识点不清楚，请访问 [后盾人 (opens new window)](https://www.houdunren.com/)看向军大叔录制的 js 课程

```text
const ShowDecorator: MethodDecorator = (target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void => {
    descriptor.writable = false
}

class Hd {
    @ShowDecorator
    show() {
        console.log(33);
    }
}

const instance = new Hd;
instance.show()

//装饰器修改了 writable 描述，所以不能重写函数
instance.show = () => { }
```

#### 静态方法

静态方法使用装饰器与原型方法相似，在处理静态方法时装饰器的第一个参数是构造函数。

```text
const ShowDecorator: MethodDecorator = (target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void => {
    descriptor.value = () => {
        console.log('houdunren.com');
    }
}

class Hd {
    @ShowDecorator
    static show() {
        console.log('show method');
    }
}

Hd.show()
```

#### 代码高亮

下面使用装饰器模拟代码高亮

```text
const highlightDecorator: MethodDecorator = (target: object, propertyKey: any, descriptor: PropertyDescriptor): any => {
		//保存原型方法
    const method = descriptor.value;

		//重新定义原型方法
    descriptor.value = () => {
        return `<div style="color:red">${method()}</div>`
    }
}

class User {
    @highlightDecorator
    response() {
        return '后盾人 人人做后盾';
    }
}

console.log(new User().response());
```

#### 实现延迟

下面是延迟执行方法的装饰器，装饰器参数是延迟的时间，达到时间后才执行方法。

```text
const SleepDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  descriptor.value = () => {
    setTimeout(() => {
      method()
    }, 2000)
  }
}
class User {
  @SleepDecorator
  public response() {
    console.log('houdunren.com')
  }
}

new User().response()
```

自定义延迟的时间

```text
const SleepDecorator =
  (times: number): MethodDecorator =>
  (...args: any[]) => {
    const [, , descriptor] = args
    const method = descriptor.value
    descriptor.value = () => {
      setTimeout(() => {
        method()
      }, times)
    }
  }
class User {
  @SleepDecorator(0)
  public response() {
    console.log('houdunren.com')
  }
}

new User().response()
```

#### 自定义错误

下面是使用方法装饰器实现自定义错误

下面是使用方法装饰器实现自定义错误

- 任何方法使用 @LogErrorDecorator 装饰器都可以实现自定义错误输出
- 任何方法使用 @LogErrorDecorator 装饰器都可以实现自定义错误输出

```text
const ErrorDecorator: MethodDecorator = (target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void => {
    const method = descriptor.value;
    descriptor.value = () => {
        try {
            method()
        } catch (error: any) {
            //$c 表示 css 样式
            console.log(`%c后盾人 houdunren.com，向军大叔`, "color:green; font-size:20px;");
            console.log(`%c${error.message}`, "color:red;font-size:16px;");
            console.log(`%c${error.stack}`, `color:blue;font-size:12px;`);

        }
    }
}

class Hd {
    @ErrorDecorator
    show() {
        throw new Error('运行失败')
    }
}

const instance = new Hd;
instance.show()
```

对上面的例子使用装饰器工厂来自定义消息内容

对上面的例子使用装饰器工厂来自定义消息内容

```text
const ErrorDecorator = (message: string, title: string = '后盾人') => <MethodDecorator>(target: Object, propertyKey: string | Symbol, descriptor: PropertyDescriptor): void => {
    const method = descriptor.value;
    descriptor.value = () => {
        try {
            method()
        } catch (error: any) {
            console.log(`%c，${title || `后盾人 houdunren.com`}`, "color:green; font-size:20px;");
            console.log(`%c${message || error.message}`, "color:red;font-size:16px;");
        }
    }
}

class Hd {
    @ErrorDecorator('Oh! 出错了', '向军大叔')
    show() {
        throw new Error('运行失败')
    }
}

const instance = new Hd;
instance.show()
```

### 登录验证

#### 登录验证

本例体验装饰器模拟用户登录判断，如果用户的 isLogin 为 false，则跳转到登录页面 `1.login.html`

本例体验装饰器模拟用户登录判断，如果用户的 isLogin 为 false，则跳转到登录页面 `1.login.html`

```text
//用户资料与登录状态
const user = {
    name: '向军',
    isLogin: true
}

const AccessDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor): void => {
    const method = descriptor.value;
    descriptor.value = () => {
        //登录的用户执行方法
        if (user.isLogin === true) {
            return method()
        }
        //未登录用户跳转到登录页面
        alert('你没有访问权限')
        return location.href = '1.login.html'
    }

}

class Article {
    @AccessDecorator
    show() {
        console.log('播放视频');
    }

    @AccessDecorator
    store() {
        console.log('保存视频');
    }
}

new Article().store();
```

#### 权限验证

下面是使用装饰器对用户访问权限的验证

下面是使用装饰器对用户访问权限的验证

```text
//用户类型
type userType = { name: string, isLogin: boolean, permissions: string[] }
//用户数据
const user: userType = {
    name: '向军大叔',
    isLogin: true,
    permissions: ['store', 'manage']
}
//权限验证装饰器工厂
const AccessDecorator = (keys: string[]): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        const method = descriptor.value
        const validate = () => keys.every(k => {
            return user.permissions.includes(k)
        })
        descriptor.value = () => {
            if (user.isLogin === true && validate()) {
                alert('验证通过')
                return method()
            }
            alert('验证失败')
            // location.href = 'login.html'
        }
    }
}

class Article {
    show() {
        console.log('显示文章')
    }
    @AccessDecorator(['store', 'manage'])
    store() {
        console.log('保存文章')
    }
}
new Article().store()
```

#### 网络异步请求

下面是模拟异步请求的示例

下面是模拟异步请求的示例

```text
const RequestDecorator = (url: string): MethodDecorator => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const method = descriptor.value
    // axios.get(url).then()
    new Promise<any[]>(resolve => {
      setTimeout(() => {
        resolve([{ name: '向军大叔' }, { name: '后盾人' }])
      }, 2000)
    }).then(users => {
      method(users)
    })
  }
}
class User {
  @RequestDecorator('https://www.houdunren.com/api/user')
  public all(users: any[]) {
    console.log(users)
  }
}
```

### 属性装饰器

首先介绍装饰器函数参数说明

首先介绍装饰器函数参数说明

| 参数   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数 |
| 参数二 | 属性名称                                                   |

| 参数   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数 |
| 参数二 | 属性名称                                                   |

#### 基本使用

下面是属性装饰器的定义方式

下面是属性装饰器的定义方式

```text
const PropDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol): void => {
    console.log(target, propertyKey);
}

class Hd {
    @PropDecorator
    public name: string | undefined = '后盾人'
    show() {
        console.log(33);
    }
}
```

#### 访问器

下面是定义将属性 name 的值转为小写的装饰器

下面是定义将属性 name 的值转为小写的装饰器

```text
const PropDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol): void => {
    let value: string;
    const getter = () => {
        return value
    }
    const setter = (v: string) => {
        value = v.toLowerCase()
    }

    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    })
}

class Hd {
    @PropDecorator
    public name: string | undefined
    show() {
        console.log(33);
    }
}

const instance = new Hd;
instance.name = 'HouDunRen'
console.log(instance.name);
```

#### 随机色块

我们使用属性访问器定义随机颜色，并绘制色块，下面是 hd.ts 的内容

我们使用属性访问器定义随机颜色，并绘制色块，下面是 hd.ts 的内容

```text
const RandomColorDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol): void => {
    const colors: string[] = ['red', 'green', 'blue', '#333333'];
    Object.defineProperty(target, propertyKey, {
        get: () => {
            return colors[Math.floor(Math.random() * colors.length)]
        }
    })
}

class Hd {
    @RandomColorDecorator
    public color: string | undefined

    public draw() {
        document.body.insertAdjacentHTML('beforeend', `<div style="width:200px;height:200px;background-color:${this.color}">houdunren.com 向军</div>`)
    }
}

new Hd().draw()
```

下面是 hd.html 的模板内容

下面是 hd.html 的模板内容

```text
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="1.js"></script>
    </body>
</html>
```

### 参数装饰器

可以对方法的参数设置装饰器，参数装饰器的返回值被忽略。

可以对方法的参数设置装饰器，参数装饰器的返回值被忽略。

**装饰器函数参数说明**

**装饰器函数参数说明**

| 参数   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数 |
| 参数二 | 方法名称                                                   |
| 参数三 | 参数所在索引位置                                           |

| 参数   | 说明                                                       |
| ------ | ---------------------------------------------------------- |
| 参数一 | 普通方法是构造函数的原型对象 Prototype，静态方法是构造函数 |
| 参数二 | 方法名称                                                   |
| 参数三 | 参数所在索引位置                                           |

#### 基本使用

下面是定义参数装饰器

下面是定义参数装饰器

```text
const ParameterDecorator: ParameterDecorator = (target: any, propertyKey: string | Symbol, parameterIndex: number): void => {
    console.log(target, propertyKey, parameterIndex);
}

class Hd {
    show(name: string, @ParameterDecorator url: string) {
    }
}
```

#### 元数据

元数据指对数据的描述，首先需要安装扩展包 [reflect-metadata(opens new window)](https://github.com/rbuckton/reflect-metadata)

元数据指对数据的描述，首先需要安装扩展包 [reflect-metadata(opens new window)](https://github.com/rbuckton/reflect-metadata)

```text
npm install reflect-metadata
```

下面是使用元数据的示例

下面是使用元数据的示例

```text
//引入支持元数据的扩展名
import "reflect-metadata";

const hd = { name: '向军', city: '北京' }
//在对象 hd 的属性 name 上定义元数据 (元数据指对数据的描述)
Reflect.defineMetadata('xj', 'houdunren.com', hd, 'name')

let value = Reflect.getMetadata('xj', hd, 'name')

console.log(value);
```

#### 参数验证

下面是对方法参数的验证，当参数不存在或为 Undefined 时抛出异常。

下面是对方法参数的验证，当参数不存在或为 Undefined 时抛出异常。

```text
//引入支持元数据的扩展名
import 'reflect-metadata'

const requiredMetadataKey = Symbol('required')
//哪些参数需要验证，记录参数顺序数字
let requiredParameters: number[] = []

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
  //将需要验证的参数索引存入
  requiredParameters.push(parameterIndex)
  //在 target 对象的 propertyKey属性上定义元素数据 ，参数为: 键，值，对象，方法
  Reflect.defineMetadata(requiredMetadataKey, requiredParameters, target, propertyKey)
}

const validate: MethodDecorator = (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
  const method = descriptor.value
  descriptor.value = function () {
    //读取 @required 装饰器定义的元数据
    let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey)

    //如果有值，表示有需要验证的参数
    if (requiredParameters) {
      for (const parameterIndex of requiredParameters) {
        //如果参数不存在或参数值为 undefined 报出错误
        if (requiredParameters.includes(parameterIndex) && arguments[parameterIndex] === undefined) {
          throw new Error('验证失败，参数不能为空.')
        }
      }
    }
    //验证通过后执行类方法
    return method.apply(this, arguments)
  }
}

class Hd {
  @validate
  show(@required name: string, @required id: number) {
    console.log('验证通过，执行方法')
  }
}

const f = new Hd()
f.show('后盾人', 18)

// f.show('后盾人', undefined as any)
```

执行命令测试

执行命令测试

```text
ts-node index.ts
```

## 命名空间与编译

### 单独编译

下面将每个 ts 文件单独进行编译，然后在 html 文件中依次引入

首先创建 tsconfig.js

```text
tsc --init
```

然后执行文件监测

```text
tsc -w
```

下面我们创建`user.ts`模块文件

```text
namespace User {
    export let name: string = '后盾人'
}
namespace Member {
    export let name: string = 'houdunren.com'
}
```

在 index.ts 文件中定义业务内容，即使用 User.ts 中的数据 User.name

```text
console.log(User.name);
```

然后执行编译

```text
tsc -w
```

创建 hd.html 文件引入这两个 JS 文件，注意要将 namespace.js 文件先引入

```text
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>后盾人</title>
        <script src="user.js" defer></script>
        <script src="index.js" defer></script>
    </head>
    <body></body>
</html>
```

### 合并打包

上面的多文件处理方式非常不方便，如果有多个文件要写多个 script 标签来引入。

下面我们来介绍通过命令将多个文件进行打包

```text
tsc --outFile ./dist/app.js user.ts index.ts
```

然后在 hd.html 文件引入打包好的文件

```text
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>后盾人</title>
        <script src="dist/app.js" defer></script>
    </head>
    <body></body>
</html>
```

### reference

如果存在多个文件都像上面一样在命令行填写，显然是很麻烦了。我们可以使用以下方法优化

在 index.ts 中使用 `reference` 引入依赖的文件

```text
/// <reference path="user.ts"/>
console.log(User.name);
```

然后使用下面的命令编译到一个文件中

```text
tsc --outFile ./dist/app.js index.ts
```

然后访问 hd.html

```text
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>后盾人</title>
        <script src="dist/app.js" defer></script>
    </head>
    <body></body>
</html>
```

### amd

使用 amd 模块打包较上面的打包方式方便些，因为我们可以在代码中使用 js 模块的 export/import 语法

> 有关于 JS 的模块已经在[后盾人网站 (opens new window)](https://www.houdunren.com/)发布请登录学习。

首先创建 ts 配置文件 tsconfig.js

```text
tsc --init
```

然后修改配置项

```text
...
"module": "amd"
...
```

然后创建 user.ts，并且只导出 User 类

```text
export namespace User {
    export let name: string = '后盾人'
}
export namespace Member {
    export let name: string = 'houdunren.com'
}
```

在 index.ts 文件中 import 导入 ts 编译后的 User.js 模块

```text
import { User } from './user.js'
```

然后执行命令进行编译

```text
tsc --outFile ./dist/app.js
```

然后修改 hd.html 文件内容

- 因为是 amd 模块所以需要使用 require.js 处理

> 有关 require.js 的工作原理，可以访问后盾人网站上的 js 模块章节内容，向军大叔已经有讲

```tsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.min.js"></script>
  </head>
  <body>
    <script src="dist/app.js"></script>
    <script>
      require(['App'])
      require(['User'], User => {
        console.log(User.title)
      })
    </script>
  </body>
</html>
```

## webpack

使用 webpack 打包 TS 项目是推荐做法，webpack 可以将多个模块文件打包到一个文件中。当然不只处理 TS、也可以处理 sass、less、vue、react 等文件。

### 初始环境

创建 package.json 用于管理项目及扩展包

```text
yarn init -y
```

下面安装安装打包需要的软件

```text
yarn add -D typescript webpack webpack-cli ts-loader webpack-dev-server
```

- webpack 核心文件、webpack-cli 命令行工具，用于实现 webpack 核心功能
- ts-loader 用于处理 typescript 的 ts-loader 软件
- webpack-dev-server 在开发阶段启动访问地址为 localhost:3000 服务，修改时网页自动刷新的热更新效果

接下来创建 typescript 的配置文件 tsconfig.js

```text
tsc --init
```

### 目录结构

首先看一下项目的目录结构

```text
├── public
│   ├── dist
│   │   └── app.js    最终编译文件
│   └── index.html		模板文件
├── package.json			项目配置
├── src								项目源文件
│   └── index.ts			项目入口文件
├── tsconfig.json			typescript 配置文件
├── webpack.config.js	webpack 配置文件
└── yarn.lock					锁定项目安装后的软件包版本，其他人安装我们项目时可以使用相同的版本，保证正常运行
```

### 文件说明

下面介绍项目中的主要文件内容

#### webpack.config.js

webpack.config.js

```text
const path = require('path')

module.exports = {
    //程序打包的起点即入口文件
    entry: './src/index.ts',

    //配置 webpack 如何去输出,webpack 会将打包到一个文件中，从而减少网络请求
    output: {
        //最终编译文件与目录
        filename: 'app.js',
        //输出目录的绝对路径，所以要使用 path 模块的 resolve 方法处理,node.js已经内置了path模块
        //参数一__dirname为当前文件的路径，参数二dist为与参数一组合后的目录
        path: path.resolve(__dirname, 'public/dist'),
        //使用webpack-dev-server运行编译时，即热更新时的静态文件前缀
        //因为编译内容是存在内存中的，不会真正创建文件，设置publicPath值决定以什么路径引用文件
        //值是相对于 public/index.html 的路径，需要以 / 结尾
        //需要安装 webpack-dev-server
        publicPath: '/dist/',
    },

    //项目中的不同类型模块的处理规则
    module: {
        rules: [
            {
                //test定义文件检测，满足后才处理，下面定义文件是否为 ts 或tsx，则满中本规则，然后进行处理
                test: /\.tsx?$/,
                //use定义处理器，下面是使用 ts-loader 将 ts或 tsx 文件编译成 javascript
                use: 'ts-loader',
                //exclude排除node_modules 目录中的文件处理
                exclude: /node_modules/,
            },
        ],
    },

    //配置模块如何解析
    resolve: {
        //在使用 import Hd from Util 等代码时，如果不添加扩展名，webpack 按以下扩展名顺序匹配文件
        extensions: ['.tsx', '.ts', '.js'],
    },
}
```

#### package.json

package.json 项目配置文件

```text
{
    "name": "houdunren.com",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "scripts": {
        "dev": "webpack-dev-server --mode=development",
        "build": "webpack --mode=production"
    },
    "devDependencies": {
        "ts-loader": "^9.2.6",
        "typescript": "^4.4.3",
        "webpack": "^5.56.0",
        "webpack-cli": "^4.8.0",
        "webpack-dev-server": "^4.3.0"
    }
}
```

通过运行以下命令查看不同的执行结果

- development 是开发阶段
- production 是生产环境使用，会对代码进行更好的压缩与优化

```text
yarn run webpack --mode=development
yarn run webpack --mode=production
```

#### tsconfig.json

tsconfig.json 是对 typescript 的配置，TypeScript 中使用 ES6 模块，并编译 js 为 ES6

> 更多有关 TS 的课程已经在[后盾人网站 (opens new window)](https://houdunren.com/)录制了，大家可以去线上学习

```text
...
"target": "ES6",
"module": "ES6"
....
```

#### 编译测试

修改 public/index.html 内容如下

```text
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>后盾人-向军大叔</title>
    </head>
    <body>
        <h2>houdurnen.com</h2>
        <script src="./dist/app.js"></script>
    </body>
</html>
```

然后在命令行执行 `yarn run dev`，会看到以下执行结果

```text
$ webpack-dev-server --mode=development
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.31.156:8080/
<i> [webpack-dev-server] On Your Network (IPv6): http://[fe80::1]:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/Users/hd/test/ts/public' directory
```

在浏览器中访问 `http://localhost:8080/` ，这时修改内容后，浏览器也会同步热更新

项目开发完毕后可以执行 `yarn run build` 生成体积更小的编译文件，文件地址为 public/app.js

### 项目示例

下面来体验一下 typescript 结合 ES6 的模块的开发过程

index.html 项目访问主文件

```text
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>后盾人</title>
        <script src="dist/app.js"></script>
    </head>
    <body></body>
</html>
```

src/user.ts user 模块文件

```text
export namespace User {
    export let name: string = '后盾人'
}
export namespace Member {
    let name: string = 'houdunren.com'
}
```

src/index.ts 项目入口文件

```text
import { User, Member } from './user'
console.log(User.name);
```

最后执行编译命令生成 dist/bundle.js 编译文件，然后再浏览器中访问 index.html

```text
yarn run build
```

## 类型工具

### extends

extends 在 TS 中拥有多个特性，下面我们来分别了解。

#### 类型继承

extends 实现类型的继承

```text
type XIANGJUNDASHU = { name: string }

interface houdunren extends XIANGJUNDASHU {
	age: number
}

const hd: houdunren = { age: 33, name: '后盾人' }
```

extends 可用于泛型的类型限定，下例中 T 必须包含 id、render 属性，即 T 类型可赋予 extends 右侧类型

```text
function houdunren<T extends { id: number; render(n: number): number }>(arr: T[]) {
	arr.map((a) => a.render(a.id))
}

houdunren([{ id: 1, render(n) { return n } }])
```

#### 类型条件判断

extends 用于条件判断来决定返回什么类型，`A extends B ? true:false`。如果 A（狭窄类型） 可以赋予 B（宽泛类型） 类型则为 true。

- 下例的 hd 变量值必须为 false，因为 HOUDUNREN 不包含 XIANGJUNDASHU 类型

```text
type XIANGJUNDASHU = { name: string, age: number }

type HOUDUNREN = { name: string }

type HDCMS = HOUDUNREN extends XIANGJUNDASHU ? true : false

const hd: HDCMS = false
```

下面是联合类型的条件判断

```text
type XIANGJUNDASHU = string

type HOUDUNREN = string | number

const hd: HOUDUNREN extends XIANGJUNDASHU ? string : boolean = false //boolean

const xj: XIANGJUNDASHU extends HOUDUNREN ? string : boolean = '后盾人' //string
```

根据联合类型过滤掉指定索引

```text
type User = { name: string, age: number, get(): void };

type FilterObjectProperty<T, U> = {
  [K in keyof T as Exclude<K, U>]: T[K]
}

type HD = FilterObjectProperty<User, 'name' | 'age'>
```

过滤掉指定的类型，以下代码含有下面几个含义

- 根据类型获取索引组合成的联合类型
- 根据新的联合类型提取出指定的索引，组合成新的类型

```text
type USER = { name: string, age: number, get(a: string): void }

type FilterProperty<T, U> = {
  [K in keyof T]: T[K] extends U ? never : K
}[keyof T]

type UserType = Pick<USER, FilterProperty<USER, Function | number>>
```

#### 泛型条件分配

如果泛型是普通类型，则与上面一样也是判断左侧类型是否可赋予右侧类型

```text
type XIANGJUNDASHU = string

type HDCMS<T> = T extends XIANGJUNDASHU ? string : boolean

const hd: HDCMS<string> = '后盾人' //string
```

如果 extends 是泛型类型，并且传入的类型是联合类型。则分别进行判断，最后得到联合类型。

```text
type XIANGJUNDASHU = string

type HDCMS<T> = T extends XIANGJUNDASHU ? string : boolean

const hd: HDCMS<string | number> = false //string | boolean
```

条件判断也可以嵌套使用

```text
type XIANGJUNDASHU = string

type HOUDUNREN = string | number

type HDCMS<T> =
	T extends XIANGJUNDASHU ? string :
	T extends HOUDUNREN ? symbol : boolean

const hd: HDCMS<string | number> = '后盾人'
```

使用**[]**包裹类型，表示使用泛型的整体进行比较

```text
type XIANGJUNDASHU = string | number

type HOUDUNREN = string | number

type HDCMS<T> = [T] extends [XIANGJUNDASHU] ? string : boolean

const hd: HDCMS<string | number> = '后盾人' //string
```

### exclude

我们利用上面的泛型类型的条件分配，可以创建一个类型用于进行类型的过滤。

- 从 T 泛型类型 中过滤掉 U 的类型
- never 是任何类型的子类型，可以赋值给任何类型，没有类型是 never 的子类型或可以赋值给 never 类型(never 本身除外)

```tsx
type EXCLUDE<T, U> = T extends U ? never : T

type XIANGJUNDASHU = string

type HOUDUNREN = string | number

const hd: EXCLUDE<HOUDUNREN, XIANGJUNDASHU> = 100; //number
事实上 typescript 已经提供了 Exclude 关键字用于完成上面的工作，所以我们不需要单独定义 Exclude 类型了。

type XIANGJUNDASHU = string

type HOUDUNREN = string | number

const hd: Exclude<HOUDUNREN, XIANGJUNDASHU> = 100;
```

### Extract

Extract 与 Exclude 相反，用于获取相交的类型。

```text
type EXTRACT<T, U> = T extends U ? T : never;

type HOUDUNREN = string | number | boolean

const hd: EXTRACT<HOUDUNREN, string | number> = '后盾人';
```

下面是取两个类型相同的属性名

```text
type HOUDUNREN = string | number | boolean

const hd: Extract<HOUDUNREN, string | number> = '后盾人';
```

### pick

提取属性组成新类型

```tsx
import { type } from "os"

type HOUDUNREN={name:string,age:number,skill:string}
type HD=Pick<HOUDUNREN,'age'|'name'>
const xj:HD={name:'qweqw',age:11}
```

### partial

设置属性为可选

```tsx
{
    type HOUDUNREN={name:string,age:number,skill:string}
    const hd:Partial<HOUDUNREN> ={name:'sadsa'}
}
```

### record

批量设置属性的类型

```tsx
{
    type HD=Record<'name'|'age',string|number>
    //设置成什么字符串都可以的话
    type HD=Record<string,string|number>

    const xj:HD={name:'sdas',age:12}
}
```

### Omit

从类型中过滤掉指定属性，这与 Pick 类型工具功能相反

```text
type HD = { name: string, age: number, city: string }

type MyOmit<T, U> = Pick<T, {
  [K in keyof T]: K extends U ? never : K
}[keyof T]>

type XJ = MyOmit<HD, 'name' | 'age'> //{city:string}
```

可以将上面代码使用 Exclude 优化

```text
type HD = { name: string, age: number, city: string }

type MyOmit<T, U> = Pick<T, Exclude<keyof T, U>>

type XJ = MyOmit<HD, 'name' | 'age'> //{city:string}
```

typescript 已经提供了类型工具 Omit

```text
type HD = { name: string, age: number, city: string }

type XJ = Omit<HD, 'name' | 'age'> //{city:string}
```

### infer

- infer 只能在 extends 中使用
- infer 的类型变量，只能在 extends 条件的 true 中使用

下面使用 infer 推断属性值类型

```text
type HD = { name: string, age: number }

type AttrType<T> = T extends { name: infer M, age: infer M } ? M : T

type valueType = AttrType<HD> //string | number
```

下面使用 infer 获取值类型

```text
type USER = { name: string, age: number, get(a: string): void }

type GetType<T> = {
  [K in keyof T]: T[K] extends (infer U) ? U : K
}[keyof T]

type valueType = GetType<USER>;
```

下面是获取函数返回值类型

```text
type HD = (n: string) => number[]

type GetFunctionReturnValue<T> = T extends ((...args: any) => (infer U)[]) ? U : T


type valueType = GetFunctionReturnValue<HD>;
```
