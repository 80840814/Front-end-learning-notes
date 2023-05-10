# JavaScript

## 写在最前

### 1.代码的注释

> 单行//
>
> 多行/**/
>
>  `console.**table**(arry);`以表格的形式展示信息

### 2.代码的执行

> 从上往下
> 
> 分号结束

## 一、走进JavaScript

> 弱类型的变量，在 JS 中变量类型由所引用的值决定

### 1.变量的命名

> 1. JS 中的变量是弱类型可以保存所有类型的数据，即变量没有类型而值有类型。变量名以字母、$、_ 开始，后跟字母、数字、_。
> 
> 2. JS 语言关键字不能用来做变量名，比如 `true、if、while、class` 等。

### 2.变量的声明

> 变量提升：
> 
> 解析器会先解析代码，然后把声明的变量的声明提升到最前，这就叫做变量提升。
> 
> > 临时性死区：
> 
> ```javascript
> console.log(des);
> var des="122121";
> /*使用var的时候可以将var=des提前，使得输入的结果为undefined
> 但是如果使用let或者const的时候，在console.log之后书写，则会进行报错
> let或者const不能使整个变量提升*/
> ```
> 
> 使用`let/const` 声明的变量在声明前存在临时性死区（TDZ）使用会发生错误
> 
> ```javascript
> function hd(a = b, b = 3) {}
> hd(); 
> //在函数中也是一样的，没有声明的不能放在前面，不然会进行报错
> ```

#### 1.单个变量的定义

```javascript
var a123="2eeqwewq";
console.log("a123");
```

#### 2.多个变量的定义

- 一个var定义多个变量

```javascript
var a123="weqw",
    qweq="wewqewqewq",
    ooo="wqewq";
```

- 多个变量使用一个内容

```javascript
var ers=(ress=tre="sdasdasd");
        console.log(ers);
        console.log(ress);
        console.log(tre);
```

#### 3.var let const 的相同点

> 1. `var/let/const`共同点是全局作用域中定义的变量，可以在函数中使用
>    
>    ```javascript
>    var hd = 'hdcms';
>    function show() {
>        return hd;
>    }
>    console.log(show());
>    ```
> 
> 2. 函数中声明的变量，只能在函数及其子函数中使用
>    
>    ```javascript
>    function hd() {
>      var web = "后盾人";
>    
>      function show() {
>        console.log(web);
>      }
>      show(); //子函数结果: 后盾人
>      console.log(web); //函数结果: 后盾人
>    }
>    hd();
>    console.log(web); //全局访问: hd is not defined
>    ```
> 
> 3. 函数中声明的变量就像声明了私有领地，外部无法访问
>    
>    ```javascript
>    var a123="wqewqewqe";
>            function run () {
>                var a123=("12321");
>                console.log(a123);
>                function fun (){
>                    console.log("111-"+ a123);
>                }
>                fun();
>            }
>            run();
>            console.log(a123);
>    ```

> **var**: 使用 `var` 声明的变量存在于最近的函数或全局作用域中，没有块级作用域的机制。
> 
>  const定义常量(值不能改变)：在同一个作用域里面不能修改，在函数的作用域里面可以重复定义
> 
> ​    同一个内存空间是可以进行更改
> 
> var设置的变量会作为window的全局变量
> 
> 但是let不会影响window的全局变量

#### 4.重复声明：

> var可以重复声明 let/const在同一作用域里面不能重复声明  

#### 5.变量冻结：

```javascript
"use strict";
        //严格模式，修改后会提示
        const HOST={
            url:"https://baidu.com",
            port:443
        };
        Object.freeze(HOST);
        //锁住不能修改
        HOST.port=80;
        console.log(HOST);
```

#### 6.传值和传址

```javascript
let a=1;
let b=a;
b=4;
console.log(a,b);
//传值

         let e={name:"12321213"};
        let f=e;
        console.log(e,f);
        f.name="45454";
        console.log(e,f);
//传址
```

#### 7.null，undefined，NaN

> null
> 
> > 引用类型，初始是null
> 
> undefined
> 
> > 基本类型，初始是undefined
> 
> NaN
> 
> > 表示非数字，是一个特殊的数值

#### 8.检测数据的类型

typeof 查看变量值的类型

#### 9.数据类型

| 类型名称      | 描述                                                                            |
|:--------- |:----------------------------------------------------------------------------- |
| Number    | 数值类型，所有的数字不分大小、不分整浮、不分正负，都是数值类型                                               |
| String    | 字符串类型，使用双引号或者单引号包裹的值                                                          |
| Boolean   | 布尔类型，true 表示真，false 表示假                                                       |
| Undefined | 1、变量没有赋值，默认为 undefined 2、变量声明提升时，变量的值也为 undefined 3、undefined 的类型也为 undefined |
| Null      | null 表示空，用 typeof 检测 null，结果为 object                                          |

#### 10.严格模式

`"use strict";`对当前作用域及其子作用域

## 二、运算符与流程控制

### 1.算术运算符

| 符号  | 描述                                                                 |
|:--- |:------------------------------------------------------------------ |
| +   | 加法运算符。加号有**两种作用，分别是加法和连字符** 1、加号两边的操作数都是数字，则为加法 2、有一个操作数为字符串，则为连字符 |
| -   | 减法运算符                                                              |
| *   | 乘法运算符                                                              |
| /   | 除法运算符                                                              |
| %   | 取余运算符。例如：a%b 代表 a 除以 b 的余数，8 %5 = 3                                |

>  一元运算符的前置和后置区别
> 
> ++n  n=n+1  先算自己的累加，再计算大的表达式子
> 
> n++  n=n+1   先计算大的，再计算小的
> 
> ```javascript
> let n=1;
> let f=2;
> let d=f+n++;
> console.log(d);   d=3
> let d=f+ ++n;
> console.log(d);   d=4
> ```

### 2.关系运算符

>  let a=1,b=2,c=1;
>  console.log(a==c);
>  console.log(typeof a);
> 
> > ```javascript
> > let span = document.querySelector('#msg');
> >     document
> >     .querySelector('[name="age"]')
> >     .addEventListener("keyup",function () {
> >          // msg="";
> >         // if (this.value>=90) { 
> >         //     msg="年龄不能超过90岁";
> > 
> >         // }
> >         // span.innerHTML=msg;
> >         span.innerHTML = this.value>=90?"年龄不能超过90岁" : "";
> >     })
> > ```

| 符号  | 描述   |
|:--- |:---- |
| >   | 大于   |
| <   | 小于   |
| >=  | 大于等于 |
| <=  | 小于等于 |
| ==  | 等于   |
| !=  | 不等于  |
| === | 全等于  |
| !== | 不全等于 |

### 3.逻辑运算符

> ```html
> <input type="text" name="pwd">
>     <input type="text" name="rpwd">    
>     <br>
>     <span name="msg"></span>
>     <script>
>         function query(name){
>             return document.querySelector(`[name='${name}']`);
>         }
>         console.log(query('pwd'));
>         let inputs = document.querySelectorAll(
>             "[name='pwd'],[name='rpwd']"
>         );
>         // console.log(inputs);
>         [...inputs].map(item=>{
>             item.addEventListener('keyup',function(){
>                 let msg="";
>                if (query('pwd').value!=query('rpwd').value ||query('pwd').value.length<5) 
>                {
>                     msg='俩次密码不一致或者长度小于5位';
>                }
>                query("msg").innerHTML = msg;
>             })
>         })
>     </script>
> ```

| 符号   | 描述  |
|:---- |:--- |
| !    | 非   |
| &&   | 与   |
| \|\| | 或   |

### 4.赋值运算符

| 符号  | 描述                                                                |
|:--- |:----------------------------------------------------------------- |
| =   | 赋值                                                                |
| +=  | 快捷赋值，例如： a+=1 等价与 a=a+1                                           |
| -=  | 快捷赋值，例如： a-=1 等价与 a=a-1                                           |
| *=  | 快捷赋值，例如： a*=1 等价与 a=a*1                                           |
| /=  | 快捷赋值，例如： a/=1 等价与 a=a/1                                           |
| %=  | 快捷赋值，例如： a%=1 等价与 a=a%1                                           |
| ++  | **自增运算** ，例如： var num1 = 3; num1++ console.log(num1) // num 的值为 4 |
| --  | **自减运算**，例如： var num2 = 3; num2-- console.log(num2) // num2 的值为 2 |

### 5.短路的特性

```html
        let a=6,b=0;
        let f=b||a;
        console.log(f);
        let sex=prompt("请输入性别：")||"保密";
        console.log(sex);
        //输入的时候就显示输入的内容，不输入的时候就显示是保密，
        // 谁碰到真，就显示哪个
        function start (num){
            return "*".repeat(num||5);

        }
        console.log(start());
```

> Tips:小案例，判断输入内容是否为空
> 
> ```html
> <form action="http://yixiaomo.top" id="form">
>         用户名：<input type="text" name="user">
>         <hr>
>         <input type="checkbox" name="copyright">接受协议
>         <hr>
>         <button>提交</button>
>     </form>
>     <script>
>         function query(el){
>             return document.querySelector(el);
>         }
>  query("#form").addEventListener("submit",function(event){
>             let user = query("[name='user']")
>             .value.trim();
>             // .value.trim();去除空格
>             let copyright = query("[name='copyright']")
>             .checked;
>             if(!user||copyright===false){
>                 event.preventDefault();
>                 alert("请接受协议并书写用户名")
>             }
>         })
>     </script>
> ```

### 6.流程控制

#### 1.if流程控制

> ```html
> <input type="password" name="password">
>     <span id="msg"></span>
>     <script>
>         document.querySelector("[name='password']")
>         .addEventListener('keyup',function(){
>             let length = this.value.length;
>             let span = document.querySelector('#msg');
>             if (length>10) {
>                 msg='密码很安全';
>             }else if (length>6) {
>                 msg='中级安全';
>             }else {
>                 msg='密码太弱';
>             }
>             span.innerHTML = msg;
>         })
>     </script>
> ```

#### 2.三元表达式

> ​    let hd = true?2:10;
> 
> ​    let hd = true?(3?"后盾人":"hdcms"):10;
> 
> ​    // 结果为真，执行冒号之前的，否则执行冒号之后的
> 
> ​    console.**log**(hd);

> 案例：
> 
> ```html
>   function div(options={}) {
>             let div = document.createElement("div");
>             div.style.width=options.width?
>             options.width:"100px";
> 
>             div.style.height=options.height?
>             options.height:"100px";
> 
>             div.style.backgroundColor=
>             options.bgcolor?options.bgcolor:"red";
>             document.body.appendChild(div);
>         }
>         div({width:'300px',height:'300px',bgcolor:'green'});
> ```

#### 3.switch流程控制

> ```html
>     <script>
>         let name = "视频";
>         switch(name){
>             case '产品':
>                 console.log("11111");
>                 break;
>             case '视频':
>                 console.log("222");
>                 break;
>             default:
>                 console.log(233333);
>         }
>         let error= 'notice';
>  //使用error的值与下面的进行匹配，匹配到了之后因为没有break所以向下执行，直到看到break最后进行输出  提示或者警告消息
>         switch(error){
>             case 'error':
>             case 'warning':
>                 console.log('提示或者警告消息');
>                 break;
>             default:
>                 console.log('错误信息');
>         }
>     </script>
> ```
> 
> ```html
> //年龄判断：
> function message (age){
>             let msg="";
>             switch(true){
>                 case age>60:
>                     msg="老年";
>                     break;
>                 case age>40:
>                     msg="中年";
>                     break;
>                 case age>28:
>                     msg="壮年";
>                     break;
>             }
>             return msg;
>         }
>         console.log(message(90));
> ```

#### 4.while循环

> while循环
> 
> ```html
> <script>
>         function table(options={tr:8,td:10}){
>             document.write(`<table border="1" width="100%">`);
>             let tr=5;
>             while(options.tr-- !=0){
>                 // document.write(`<tr><td>${tr}</td></tr>`);
>                 let td=options.td;
>                 document.write(`<tr>`);
>                     while(td-- !=0){
>                         document.write(`<td>${td}</td>`)
>                     }
>                document.write(`</tr>`)
>             }
>         document.write(`</table>`)    
>         }
>         table();
> 
>     </script>
> ```

> **do while**
> 
> ```html
> <script>
>         function start(row=5){
>             let start= 0;
>         do {
>             let n=0;
>             do {
>                 document.write('*');
>             } while (++n<=start);
>             document.write("<br/>")
>         } while (++start<=row);
>         }
>         start(9);
>     </script>
> ```

#### 5.for循环

> 打印一个三角形
> 
> ```html
> <script>
>      for(let i=0;i<10;i++){
>          for(let n=0;n<i;n++){
>              document.write("*");
>          }
>          document.write("<br/>");
>      }
> </script>
> ```
> 
> ```html
> //for循环
> <script>
>    // for(let i=0;i<10;i++){
>    //     for(let n=0;n<i;n++){
>    //         document.write("*");
>    //     }
>    //     document.write("<br/>");
>    // }
>    function hd(row = 5) {
>      for (let i = 1; i < row; i++) {
>        for (let n = row - i; n > 0; n--) {
>          document.write("<span>*</span>");
>        }
>        for (let m = i * 2 - 1; m > 0; m--) {
>          document.write("*");
>        }
>        document.write("<br/>");
>      }
>    }
>    hd(10);
>  </script>
> ```
> 
> > for-in   for-of
> 
> > - for in 
> 
> ```html
> <script>
>      let hd=[
>          {title:"11111",lesson:3},
>          {title:"22222",lesson:6},
>          {title:"333333",lesson:4},
>      ];
>      document.write(`<table border="1" width="100%">
>          <thead><tr><th>第一列</th><th>第二列</th></tr></thead>`)
>      for(let i in hd){
>          document.write(`
>          <tr><td>${hd[i].title}</td><td>${hd[i].lesson}</td></tr>
>          `)
>      }
>      document.write("</table>")
> 
>  </script>
> ```
> 
> > - for of
> 
> ```html
> <script>
>      let hd=[
>          {title:"11111",lesson:3},
>          {title:"22222",lesson:6},
>          {title:"333333",lesson:4},
>      ];
>      document.write(`<table border="1" width="100%">
>          <thead><tr><th>第一列</th><th>第二列</th></tr></thead>`)
>      for(let video of hd){
>          document.write(`
>          <tr><td>${video.title}</td><td>${video.lesson}</td></tr>
>          `)
>      }
>      document.write("</table>")
> 
>  </script>
> ```
> 
> ```html
> <body>
>  <ul>
>      <li></li>
>      <li></li>
>      <li></li>
>  </ul>
>  <script>
>     let lis= document.querySelectorAll("li");
>     for (const li of lis) {
>          li.addEventListener("click",function(){
>              li.style.backgroundColor="#000";
>          })
>     }
>  </script>
> 
> </body>
> ```

#### 6.break和continue

> 子循环退出外层循环
> 
> ```html
> houdunren:for(let i=1;i<=10;i++){
>             hdcms:for(let n=1;n<=10;n++){
>                 if(n%2==0){
>                     console.log(i,n);
>                 }
>                 if(n+i>10){
>                     break houdunren;
>                 }
> 
>             }
>         }
> ```
> 
> ```html
> for(let i=0;i<10;i++){
>             // console.log(i);
>             if(i%2)continue;
>             console.log(i);
>         }
> //  偶数
>         let count=0;
>         for(let i=0;i<10;i++){
>             // console.log(i);
>             if(i%2){
>                 if(count++==3)break;
>                 console.log(i);
>             } 
>         }
> 前三个奇数
> ```

## 三、JavaScript值类使用

### 1.判断的方法

- >  typeof 判断大体的数据类型，数组和对象显示的一样是object

- > instanceof 判断数据类型，比typeof比较细致
  
  ```html
   <script>
          // let hd = "111";
          // let arr =[1,2,3];
          // let obj= {};
          // function run(){};
          // console.log(typeof run);
          let hd = [];
          let hdcms = {};
          console.log(hd instanceof Array);
          console.log(hdcms instanceof Object);
          function user() {
          }
          let xl= new user;
          console.log(xl instanceof Object);
          console.log(xl instanceof Array);
      </script>
  ```

### 2.字符串的转义

| 名称  | 描述                                                          |
|:--- |:----------------------------------------------------------- |
| 转义符 | 在特殊字符前加，表示下一个字符不是特殊字符，应该按照字面意理解 例如：/^.$/表示匹配任意字符。/^.$/表示匹配点 |

​    最优解法：

```html
<script>
        let hd ="houd\"unren.com";
        console.log(hd);
        let year= '2020';
        let site='后盾人';
        let hd11 =`${site}成立于${year}`;
        console.log(site+"成立于"+year);
        console.log(`${site}成立于${year}`);  
        console.log(hd11);
    </script>
```

### 3.模板字面量嵌套

> ```html
> <script>
>        function show() {  
>        }
>        let hd = `www.${4+6}`;
>        console.log(hd);
>        let lessons=[
>            {title:"媒体响应式布局"},
>            {title:"flex布局"},
>            {title:"grid栅格布局"}
>        ];
>        function template () {
>            return`
>            <ul>${lessons.map(item=>`
>                <li>${item.title}</li>`)
>                .join("")}
>            </ul>`;
>        }
>        document.body.innerHTML= template();
>    </script>
> ```

### 4.标签模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\, initial-scale=1.0">
    <title>Document</title>
    <style>
        ul {
            list-style: none;

        }
        li:nth-child(odd){
            background: skyblue;
            color: #fff;
        }
        li {
            border: 1px solid #000;
            margin-bottom: 10px;
            padding: 10px;
        }
        li>a {
            color: red;
        }
    </style>
</head>

<body>
    <script>
        // let name = "厚度人";
        // let web = 'houdunren.com';
        // console.log(tag`在线教程${name},网址是${web}。`);
        // function tag (strings,name,web){
        //     console.log(web);
        //     console.log(strings); 
        // }
        let lessons=[
            {title:"这个是一个测试信息",author:"hundunren"},
            {title:"这个是2个测试信息",author:"hundunren"},
            {title:"这个3测试信息",author:"hundunren"}
        ];
        function template(){
            return`<ul>
                ${lessons
                    .map(item=>links`<li>作者：${item.author},课程：${item.title}</li>`)
                    .join("")}
                </ul>`;
        }
        // function links (strings,...vars){
        //    return strings
        //    .map((str,key)=>{
        //     return (
        //         str + (vars[key]
        //         ?vars[key].repalce(
        //             "这个",
        //             `<a href="http://yixiaomo.top">这个</a>`
        //         )
        //             : "")   
        //     );
        //    })
        //    .join("");
        // }

        function links(strings,...vars){
            return strings.map((str,key)=>{
                return str+(vars[key]?
                vars[key].replace('这个',`<a href="http://yixiaomo.top">这个</a>`)
                :"");
            })
            .join("");
        }
        document.body.innerHTML+=template();
    </script>
</body>
</html>
```

### 5.基本类型

#### 1.字符串

##### 1.字符串长度的判断

> console.**log**(name.length);

##### 2.字符串转大写

> console.**log**(name.**toUpperCase**());

##### 3.字符串转小写

>  console.**log**(name.**toLowerCase**());

##### 4.字符串去空格的实现

> this.value=this.value.**trim**();

##### 5.获取字符串里的某一个

> ```html
> let hd= "dasdasasas";
> console.log(hd[0]);
> ```

##### 6.字符串的截取

> |       | slice             | substring      | substr      |
> | ----- | ----------------- | -------------- | ----------- |
> | 第一个参数 | 从哪一位开始            | 从哪一位开始         | 从哪一位开始      |
> | 第二个参数 | 第一个参数到第二个参数之间的内容  | 第一个参数到第二个参数的内容 | 第一个参数后的几位数字 |
> | 参数为负数 | 第一个参数到后面那个参数之间的内容 | 不能使用负数         | 第一个参数前的多少位  |

##### 7.字符串的检索

> 检索的几个方法：
> 
> - > console.**log**(hd.**indexOf**("h"));
>   > 
>   > 从前往后查找，找不到显示是-1
> 
> - > console.**log**(hd.**includes**("o",8));
>   > 
>   > 查找的结果通过布尔类型展示
> 
> - > console.**log**(hd.**lastIndexOf**('o',9));
>   > 
>   > 从后往前查找，找不到是-1
> 
> - > console.**log**(hd.**startsWith**("o"));
>   > 
>   > 判断字符是不是在开始出现
> 
> - > console.**log**(hd.**toLowerCase**().**endsWith**("m"));
>   > 
>   > 转小写之后，进行判断是否以某个字符结束
> 
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Document</title>
> </head>
> <body>
>     <script>
>         let hd = "houdunren.com";
> 
>         console.log(hd.indexOf("h"));
>         console.log(hd.includes("o",8));
>         console.log(hd.lastIndexOf('o',9));
>         console.log(hd.startsWith("o"));
>         console.log(hd.toLowerCase().endsWith("m"));
>         let word= ["aaaphp","css"];
>         let string = "我喜欢学习css";
>         //如果第一次为真，后续判断就为真，要是为假，进行判断下一个
>         let status = word.some((word)=>{
>             // console.log(word);
>             return string.includes(word);
>         });
>         if (status) {
>             console.log("找到了关键词");
>         }else{
>             console.log("查找失败");
>         }
>     </script>
> </body>
> </html>
> ```

##### 8.字符串的替换

> 方法replace
> 
> > console.**log**(hd.**replace**("com","top"));
> > 
> > 第一个参与，需要被替换的内容，第二个是需要替换的内容
> 
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Document</title>
> </head>
> <body>
>     <script>
>         let hd = "houdunren.com";
>         console.log(hd.replace("com","top"));
>         let word= ["aaaphp","css"];
>         let string = "我喜欢学习css";
>         let replaceString = word.reduce((pre,word)=>{
>             return pre.replace(word,`<a href="?w=${word}">${word}</a>`)},string)
>         console.log(replaceString);
>         document.body.innerHTML+=replaceString;
>     </script>
> 
> </body>
> </html>
> ```

##### *实例如下所示

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" name="password">
    <span></span>
    <script>
        let name='houdunren';
        console.log(name.length);
        console.log(name.toUpperCase());
        console.log(name.toLowerCase());
        let ps=document.querySelector("[name='password']");
        ps.addEventListener("keyup", function(){
            this.value=this.value.trim();
            // console.log(this.value.length);
            let span=document.getElementsByTagName("span");
            let error="";
            if (this.value.length<5) {
                 error="密码不能少于五位";
            }
            span[0].innerHTML=error;

        });
        let hd= "dasdasasas";
        console.log(hd[0]);
        for(let i=0;i<hd.length;i++){
            let span=document.createElement("span");
            span.style.fontSize=(i+1)*10+"px";
            span.innerHTML=hd[i];
            document.body.append(span);
        }

    </script>
</body>
</html>
```

##### 9.电话号码的模糊处理

> 对重复函数的使用  
> 
> ```html
> console.log("*".repeat(3));
> //打印三个星号
> ```

**对电话号码的模糊**

```html
  <script>
        function phone(mobile,len=3){
           return String(mobile).slice(0,len*-1)+"*".repeat(len);
     //对数据进行截断
     }
        console.log(phone("988888888",4));
    </script>
```

##### 10.字符串的类型转换

对类型的相应的转换

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let string ="99";
        console.log(string);
        console.log(string*1+78);
       // 隐式转换，将字符串改为数字型
        console.log(Number(string)+88);
//将字符串转为数值类型
        let number=66;
        console.log(typeof number);
        let str=number+ ""; 
        console.log(typeof str);
        console.log(typeof String(number));
        let str="aa999s9da";
        console.log(parseFloat(str));
        let cms ="hdcim";
        console.log(cms.split("").length);
//将字符拆分，并取得个数
        let arrys=["hdcms","dsss"];
        console.log(arrys.join("!"));
        let string ="dowdwd";
        console.log(typeof string);
        let cms =new String("hdcms");
        console.log(typeof cms);
        console.log(cms.substr(3));
        let arrys=["hdcms","dsss"];
        console.log(arrys.toString())   ;
        let num=99;
        let newnum=num.toString();
        console.log(typeof num);
        console.log(newnum+78);
    </script>
</body>
</html>
```

#### 2.Boolean

##### 1.Boolean隐式转换原理

> 基于逻辑判断的
> 
> `valueOf`取对象的值
> 
> false 数值类型为0
> 
> ture 数值类型为1
> 
>   // if(num) console.log  ("num");

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // const boolen=new Boolean(false);
        // console.log(typeof boolen);
        // console.log(boolen.valueOf());
        // if (boolen.valueOf()) {
        //     console.log("aaaaaaaa");
        // }
        // let hd=true;
        // console.log(typeof hd);
        // if (hd) {
        //     console.log("aaaaaaa11");
        // }
            // let num=12;
            // if(num) console.log  ("num");
            //false 数值类型为0
            //ture 数值类型为1
            //转为数字类型
            // console.log(num==true);
            // console.log(Boolean(num));
        //    let hd='1';
        //    console.log(Number(hd));
        //    console.log(hd==true);
            let arr=[1,2,3];
            console.log(Number(arr));
            console.log(arr==true);
    </script>
</body>
</html>
```

##### 2.Boolean显式转换原理

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let num=0;
        // console.log(typeof num);
        // num=!!num;
        // console.log(num);
        // 俩个都一样
        console.log(Boolean(num));
        console.log(!!num);
        
        let str="sdasda";
        console.log(Boolean(str));
        
        let arry =[];
        console.log(!![]);
        console.log(Boolean(arry));
        
        let object={};
        console.log(!!{});
        console.log(Boolean(object));
        
        let date = new Date();
        console.log(!!dispatchEvent);
        console.log(Boolean(date));
    </script>
</body>
</html>
```

##### 3.布尔类型的案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let year=prompt('后盾人哪一年成立').trim();
        //输入内容，去除空格
        
        while(true){
            let year=prompt('后盾人哪一年成立').trim();
            if(!year)continue;
            //如果没有输入一直提示输入
            //三元表达式
            console.log(year=='2010'?"输入正确":"输入错误");  
            break;
        }
		//let year=prompt('后盾人哪一年成立').trim();
        // if (year=='2010') {
        //     console.log("输入正确");
        // }else{
        //     console.log("输入错误");
        // }
        // console.log(year);
    </script>
</body>
</html>
```

#### 3.Number

##### 1.数值类型number的声明与基本函数

**声明定义**

> 使用对象的方式：
>
> ```html
> let hd = new Number(3);
> console.log(hd+3); //6
> ```
>
> 使用自变量的方式：
>
> ```html
> let num = 99;
> console.log(typeof num);
> ```

> ```html
> 判断是否为整数
> console.log(Number.isInteger(1.2));
> 
> 指定返回的小数位数可以四舍五入
> console.log((16.556).toFixed(2)); // 16.56
> ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // let num=new Number(99);
        // console.log(num.valueOf()+1);
        //引用类型  使用对象的方式
        
        // let number=99;
        // console.log(typeof number);
        //值类型  自变量的方式
        
        // let hd=number.toString;
        // console.log(number.valueOf());
        let num=99.556;
        // Number.isInteger()
        判断是否为整数
        console.log(Number.isInteger(num));
        // toFixed((2)
        // 四舍五入
        console.log(num.toFixed((2)));
    </script>
</body>
</html>
```

##### 2.数值类型转换技巧与NaN类型

> **表示无效的数值，下例计算将产生 NaN 结果。**
>
> ```html
> console.log(Number("houdunren")); //NaN
> 
> console.log(2 / 'houdunren'); //NaN
> ```

> **NaN 不能使用 `==` 比较，使用以下代码来判断结果是否正确**
>
> ```html
> var res = 2 / 'houdunren';
> if (Number.isNaN(res)) {
> 	console.log('Error');
> }
> ```

> **也可以使用 `Object.is` 方法判断两个值是否完全相同**
>
> ```html
> var res = 2 / 'houdunren';
> console.log(Object.is(res, NaN));
> ```

**Number**

使用 Number 函数基本上可以转换所有类型

```text
console.log(Number('houdunren')); //NaN
console.log(Number(true));	//1
console.log(Number(false));	//0
console.log(Number('9'));	//9
console.log(Number([]));	//0
console.log(Number([5]));	//5
console.log(Number([5, 2]));	//NaN
console.log(Number({}));	//NaN
```

**parseInt**

提取字符串开始去除空白后的数字转为整数。

```text
console.log(parseInt('  99houdunren'));	//99
console.log(parseInt('18.55'));	//18
```

**parseFloat**

转换字符串为浮点数，忽略字符串前面空白字符。

```text
console.log(parseFloat('  99houdunren'));	//99
console.log(parseFloat('18.55'));	//18.55
```

比如从表单获取的数字是字符串类型需要类型转换才可以计算，下面使用乘法进行隐式类型转换。

```text
<input type="text" name="num" value="66">
<script>
  let num = document.querySelector("[name='num']").value;
  console.log(num + 5); //665

  console.log(num * 1 + 5); //71
</script>
```

**舍入操作**

使用 `toFixed` 可对数值舍入操作，参数指定保存的小数位

```text
console.log(1.556.toFixed(2)); //1.56
```

**浮点精度**

大部分编程语言在浮点数计算时都会有精度误差问题，下面来看 JS 中的表现形式

```text
let hd = 0.1 + 0.2
console.log(hd)// 结果：0.30000000000000004
```

这是因为计算机以二进制处理数值类型，上面的 0.1 与 0.2 转为二进制后是无穷的

```text
console.log((0.1).toString(2)) //0.0001100110011001100110011001100110011001100110011001101
console.log((0.2).toString(2)) //0.001100110011001100110011001100110011001100110011001101
```

**处理方式**

一种方式使用 toFixed 方法进行小数截取

```text
console.log((0.1 + 0.2).toFixed(2)) //0.3

console.log(1.0 - 0.9) //0.09999999999999998
console.log((1.0 - 0.9).toFixed(2)) //0.10
```

将小数转为整数进行计算后，再转为小数也可以解决精度问题

```text
Number.prototype.add = function (num) {
	//取两个数值中小数位最大的
  let n1 = this.toString().split('.')[1].length
  let n2 = num.toString().split('.')[1].length

  //得到10的N次幂
  let m = Math.pow(10, Math.max(n1, n2))

  return (this * m + num * m) / m
}
console.log((0.1).add(0.2))
```

**推荐做法**

市面上已经存在很多针对数学计算的库 [mathjs (opens new window)](https://mathjs.org/examples/browser/basic_usage.html.html)、[decimal.js (opens new window)](http://mikemcl.github.io/decimal.js)等，我们就不需要自己构建了。下面来演示使用 [decimal.js (opens new window)](http://mikemcl.github.io/decimal.js)进行浮点计算。

```text
<script src="https://cdn.bootcss.com/decimal.js/10.2.0/decimal.min.js"></script>

<script>
	console.log(Decimal.add(0.1, 0.2).valueOf())
</script>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="number" name="number" value="22">
    <script>
        // NaN
        // 不是一个数字
        console.log(Number("wqq"));
        console.log(2/"aaasa");
        console.log(NaN==NaN);
        console.log(Number.isNaN("ssss"));
        console.log(Object.is("asda",NaN));
        let number=document.querySelector("[name='number").value;
        console.log(typeof number);
        let arry=[1,2,3];
        console.log(Number(arry));

    </script>
</body>
</html>
```

#### 4.Math

##### 1.Math数学计算

> `Math` 对象提供了众多方法用来进行数学计算，下面我们介绍常用的方法，更多方法使用请查看 [MDN 官网 ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)了解。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Math数学的计算
        console.log( Math.max(1,2,33,45,5,6));

        let grade=[12,3,2,43];
        // 取得数组的最大值
        // 调用这个函数，指定用数组传参
        console.log(Math.max.apply(null,grade));
// 向上取整
        console.log(Math.ceil(5.1));
// 向下取整
        console.log(Math.floor(6.333));
//    舍入函数，     
        console.log(Math.round(5.56));
    </script>
</body>
</html>
```

##### 2.随机数

> 取一个区间的计算公式
>
> ```html
> 包含
> min+Math.floor(Math.random()*(Max-min+1))
> 不包含
> min+Math.floor(Math.random()*(Max-min))
> ```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // // 随机数>=0~<1
        // console.log(Math.random());
        // //0~5   0`~0.7
        // Math.floor(Math.random()*(5+1))  
        // // 想取的最大值，向下取整 随机数*（最大值+1）
        // console.log(Math.floor(Math.random()*(5+1)));

        // // 从2~5的随机数
        // //min+Math,floor(Math,random()*(min+1))
        // console.log(2+Math.floor(Math.random()*(3+1)));
        // //随机点名
        // 从0开始
        let std=["arry","alice","mawu","tom","toms"];
        // console.log(std.length);
        // console.log(std);
        // const index=(Math.floor(Math.random()*std.length));
        // console.log(std[index]);
        // 从1~3开始
        // const index2=(2+Math.floor(Math.random()*(std.length-1)));
        // console.log(std[index2]);

        // // 2~3
        // const index3=2+Math.floor(Math.random()*(4-2));
        // console.log(index3);

        function arryrandomval ue(arry,start=1,end) {
            end=end?end:arry.length;
            start--;
            const index=start+Math.floor(Math.random()*(end-start));
            return arry[index];
        }
        console.log(arryrandomvalue(std,1,4));
    </script>
</body>
</html>
```

#### 5.Date

##### 1.日期时间戳的使用与计算脚本执行时间

> 下面是系统提供的日期时间方法，更多方法请查看 [MDN 官网](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)

| 方法                 | 描述                                                     |
| :------------------- | :------------------------------------------------------- |
| Date()               | 返回当日的日期和时间。                                   |
| getDate()            | 从 Date 对象返回一个月中的某一天 (1 ~ 31)。              |
| getDay()             | 从 Date 对象返回一周中的某一天 (0 ~ 6)。                 |
| getMonth()           | 从 Date 对象返回月份 (0 ~ 11)。                          |
| getFullYear()        | 从 Date 对象以四位数字返回年份。                         |
| getYear()            | 请使用 getFullYear() 方法代替。                          |
| getHours()           | 返回 Date 对象的小时 (0 ~ 23)。                          |
| getMinutes()         | 返回 Date 对象的分钟 (0 ~ 59)。                          |
| getSeconds()         | 返回 Date 对象的秒数 (0 ~ 59)。                          |
| getMilliseconds()    | 返回 Date 对象的毫秒(0 ~ 999)。                          |
| getTime()            | 返回 1970 年 1 月 1 日至今的毫秒数。                     |
| getTimezoneOffset()  | 返回本地时间与格林威治标准时间 (GMT) 的分钟差。          |
| getUTCDate()         | 根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。          |
| getUTCDay()          | 根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。           |
| getUTCMonth()        | 根据世界时从 Date 对象返回月份 (0 ~ 11)。                |
| getUTCFullYear()     | 根据世界时从 Date 对象返回四位数的年份。                 |
| getUTCHours()        | 根据世界时返回 Date 对象的小时 (0 ~ 23)。                |
| getUTCMinutes()      | 根据世界时返回 Date 对象的分钟 (0 ~ 59)。                |
| getUTCSeconds()      | 根据世界时返回 Date 对象的秒钟 (0 ~ 59)。                |
| getUTCMilliseconds() | 根据世界时返回 Date 对象的毫秒(0 ~ 999)。                |
| parse()              | 返回 1970 年 1 月 1 日午夜到指定日期（字符串）的毫秒数。 |
| setDate()            | 设置 Date 对象中月的某一天 (1 ~ 31)。                    |
| setMonth()           | 设置 Date 对象中月份 (0 ~ 11)。                          |
| setFullYear()        | 设置 Date 对象中的年份（四位数字）。                     |
| setYear()            | 请使用 setFullYear() 方法代替。                          |
| setHours()           | 设置 Date 对象中的小时 (0 ~ 23)。                        |
| setMinutes()         | 设置 Date 对象中的分钟 (0 ~ 59)。                        |
| setSeconds()         | 设置 Date 对象中的秒钟 (0 ~ 59)。                        |
| setMilliseconds()    | 设置 Date 对象中的毫秒 (0 ~ 999)。                       |
| setTime()            | 以毫秒设置 Date 对象。                                   |
| setUTCDate()         | 根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。          |
| setUTCMonth()        | 根据世界时设置 Date 对象中的月份 (0 ~ 11)。              |
| setUTCFullYear()     | 根据世界时设置 Date 对象中的年份（四位数字）。           |
| setUTCHours()        | 根据世界时设置 Date 对象中的小时 (0 ~ 23)。              |
| setUTCMinutes()      | 根据世界时设置 Date 对象中的分钟 (0 ~ 59)。              |
| setUTCSeconds()      | 根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。              |
| setUTCMilliseconds() | 根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。             |
| toSource()           | 返回该对象的源代码。                                     |
| toString()           | 把 Date 对象转换为字符串。                               |
| toTimeString()       | 把 Date 对象的时间部分转换为字符串。                     |
| toDateString()       | 把 Date 对象的日期部分转换为字符串。                     |
| toGMTString()        | 请使用 toUTCString() 方法代替。                          |
| toUTCString()        | 根据世界时，把 Date 对象转换为字符串。                   |
| toLocaleString()     | 根据本地时间格式，把 Date 对象转换为字符串。             |
| toLocaleTimeString() | 根据本地时间格式，把 Date 对象的时间部分转换为字符串。   |
| toLocaleDateString() | 根据本地时间格式，把 Date 对象的日期部分转换为字符串。   |
| UTC()                | 根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。    |
| valueOf()            | 返回 Date 对象的原始值。                                 |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // let date=new Date();
        // console.log(date);
        // console.log(typeof date);
        // console.log(date*1);
        // let hd=Date();
        // console.log(hd);
        // console.log(typeof hd);
        // console.log(hd*1);

        // let date=Date.now();
        // console.log(date);

        // let start = Date.now();
        // for(let i=0;i<2000000;i++){}
        //     const end =Date.now();
        //     console.log((end-start)/1000+"秒");
        // console.time("for");
        // console.timeEnd("for");

        // let  date=new Date('1996-5-16 2:2:18');
        // console.log(date);
        // console.log(date.getMonth());

        let param =[1990,2,22,13,25,25];
        let date=new Date(...param);
        // 将数组展开成多个独立的个体
        console.log(date);



    </script>
</body>
</html>
```



##### 2.ISO与TIMESTAMP：格式互换

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let date =new Date("1990-2-10 02:35:45");

        // console.log(date*1);
        // console.log(Number(date));
        // console.log(date.valueOf());
        // console.log(date.getTime());

        let timestamp=date.valueOf();
        console.log(timestamp);

        console.log(new Date(timestamp));
    </script>
</body>
</html>
```

##### 3.封装日期格式化函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
         const date= new Date("1999-2-12 10:20:20");
        // console.log(date);
        // console.log(date.getFullYear());
        // console.log(date.getMonth()+1);
        // console.log(date.getDate());
        // console.log(date.getHours());
        // console.log(date.getMinutes());
        // console.log(date.getSeconds());

        // const formatDate =`${date.getFullYear()}年${date.getMonth()+1}月`;
        // console.log(formatDate);
        function dateformat(date,format="YYYY-MM-DD HH:mm:ss") {
            const config ={
                YYYY:date.getFullYear(),
                MM:date.getMonth()+1,
                DD:date.getDate(),
                HH:date.getHours(),
                mm:date.getMinutes(),
                ss:date.getSeconds()
            };
            for (const key in config) {
                format = format.replace(key,config[key]);
            }
            return format;
        }
        console.log(dateformat(date,'YYYY年MM月DD日 HH点mm分'));
    </script>
</body>
</html>
```

##### 4.优秀的日期处理库momentjs

 **moment.js**

Moment.js 是一个轻量级的 JavaScript 时间库，它方便了日常开发中对时间的操作，提高了开发效率。

更多使用方法请访问中文官网 [http://momentjs.cn](http://momentjs.cn/)或 英文官网 [https://momentjs.com](https://momentjs.com/)

听说moment.js已经停止维护了，可以用[dayjs](https://dayjs.fenxianglu.cn/category/#node-js)



> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>Document</title>
>     <script src="./moment.js"></script>
> </head>
> <body>
>     <script>
>         // console.log(moment().format());
>         const date =moment("2000-01-12 10:22:22");
>         console.log(date.format('YYYY MM DD, h:mm:ss'));
>         // console.log(moment().subtract(10, 'days').calendar());
>          console.log(date.add(10,"days").format("YYYY MM DD, h:mm:ss"));
>     </script>
> </body>
> </html>
> ```

## 四、数据挖掘

>  数据挖掘简介

### 1.课程介绍与数组引用类型分析

> 数组是多个变量值的集合，数组是`Array` 对象的实例，所以可以像对象一样调用方法。
>
> 数组是引用类型可以使用`const`声明并修改它的值

**创建数组**

> 对象的方式：
>
> ```html
>  const arry=new Array("11","2222","33333",1,1,2,3);
>  console.log(arry);
> ```
>
> 字面量的方式：
>
> ```html
> 		const arry =[1,12,3,45,67,"2121","12321"];
>         let hd=arry;
>         console.log(arry);
>         console.log(typeof arry); 
> ```

**对数组进行操作**

> 使用原型的 `length`属性可以获取数组元素数量
>
> `console.**log**(arry.**join**("|"));`   // 连接方式

> 相关代码：
>
> ```html
> <script>
>         const arry=new Array("11","2222","33333",1,1,2,3);
>         console.log(arry);
>         console.log(arry.join("|"));
>         // 连接方式
>         const arry =[1,12,3,45,67,"2121","12321"];
>         let hd=arry;
>         console.log(arry);
>         console.log(typeof arry); 
>         // 类型：对象
>         hd[2]="doudunren"
>         console.log(hd);
>         console.log(arry);
>         let a=1;
>         let b=a;
>         b=88;
>         console.log(b);
>         console.log(a);
>         const arry =[1,12,3,45,67,"2121","12321"];
>         console.table(arry);
>     </script>
> ```

### 2.多维数组的操作

> const定以其他类型，不能更改内容
>
> 但是定位数组可以更改

**多维数组的定义**

>  相关代码如下
>
> ```html
>  <script>
>         let arry =["sdas","dsa","dada"];
>         console.log(arry[1]);
>         //数组的嵌套
>         let arry1 =[["sdas","dsa","dada"],["11","22","33"]];
>         console.log(arry1[1][2]);
>         // 多维数组
>         let lessons =[{name:"php",click:33},{name:"js",click:133}];
>         console.log(lessons[1].name);
> //定义其他内容，提示报错
>         // const name=3;
>         // name =5;
>         // console.log(name);
> 
>         const arr=[1,2];
>         arr[1]=3;
>         console.log(arr);
>     </script>
> ```

### 3.Array.of与数组创建细节

**使用`Array.of` 与 `new Array` 不同是设置一个参数时不会创建空元素数组**

> 在使用创建数组的时候
>
> `let arr1=new **Array**(6);`新建的是一个数组里面有6个内容，每个内容是undefined
>
> `let arr=Array.**of**(6)`使用这个新建的时候，一个数组里面有一个内容，内容是6

>  具体的代码如下
>
> ```html
> <script>
>            let arry =  [1,2,34,5,6,677,7,8];
>            console.log(arry);
>            let hd=['hdcms'];
>            hd[3]='qwewqqw';
>            console.log(hd);
>            console.log(hd.length);
>            console.log(hd[2]);
> 
>            let arr=Array.of(6)
>            let arr1=new Array(6);
>            console.log(arr.length);
>            console.table(arr);
>            
>            console.log(arr1);
>            console.log(arr1.length);
>            console.log(arr1[2]);
>     </script>
> ```

### 4.类型检测与转换

> 检测变量是否为数组类型
>
> 大部分数据类型都可以使用`.toString()` 函数转换为字符串。
>
> ```html
> console.log(([1, 2, 3]).toString()); // 1,2,3
> ```
>
> 也可以使用函数 `String` 转换为字符串。
>
> ```html
> console.log(String([1, 2, 3]));
> ```
>
> 或使用`join`连接为字符串
>
> ```html
> console.log([1, 2, 3].join("-"));//1-2-3
> ```
>
> 使用`Array.from`可将类数组转换为数组，类数组指包含 `length` 属性或可迭代的对象。
>
> > - 第一个参数为要转换的数据，第二个参数为类似于`map` 函数的回调方法
> >
> >   ```html
> >   let str = '后盾人';
> >   console.log(Array.from(str)); //["后", "盾", "人"]
> >   ```
> >
> > - 为对象设置`length`属性后也可以转换为数组，但要下标为数值或数值字符串
> >
> >   ```html
> >   let user = {
> >     0: '后盾人',
> >     '1': 18,
> >     length: 2
> >   };
> >   console.log(Array.from(user)); //["后盾人", 18]
> >   ```
> >
> > - DOM 元素转换为数组后来使用数组函数，第二个参数类似于`map` 函数的方法，可对数组元素执行函数处理。
> >
> >   ```html
> >   <body>
> >       <button message="后盾人">button</button>
> >       <button message="hdcms">button</button>
> >   </body>
> >                                                               
> >   <script>
> >       let btns = document.querySelectorAll('button');
> >       console.log(btns); //包含length属性
> >       Array.from(btns, (item) => {
> >           item.style.background = 'red';
> >       });
> >   </script>
> >   ```

> 代码如下：
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta http-equiv="X-UA-Compatible" content="IE=edge">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <title>4.类型检测与转换</title>
> </head>
> <body>
>     <div>hdcms</div>
>     <div>sdasdasas</div>
>     <script>
>         // console.log(Array.isArray([]));
>         // // 检测传入的内容是否是数组
> 
>         // console.log([1,3,5,6,7,8].toString());
> 
>         // let hd=String([1,3,5,6,7,8].join("-"));
>         // console.log(hd);
>         // console.log(typeof hd);
>         // // 连接使用
>         // console.log(location.href+"?id="+hd);
> 
>         // let str="hd,cm,s";
>         // console.log(str.split(","));
>         // console.log(str.length);
>         // // 元素有length属性都是可以使用下面的方法转成数组
>         // console.log(Array.from(str));
> 
>         // let obj={
>         //     name:"sdas",age:"11",length:3
>         // }
>         // console.log(Array.from(obj));
>         // console.log(obj.length);
> let divs=document.querySelectorAll("div");
> console.log(divs);
> console.log(Array.from(divs));
> console.log(
>     // 第二个参数对于每一个宿主元素进行使用
>     Array.from(divs,function(item){
>         item.style.backgroundColor="red";
>         console.log(item.innerHTML);
>         return item;
> 
>     })
> );
>     </script>
>     
> </body>
> </html>
> ```

### 5.展开语法

> 使用展开语法来合并数组相比 `concat` 要更简单，使用`...` 可将数组展开为多个值。

> 未使用展开语法：
>
> ```html
>   let arr=['11','23231312','4534534'];
>         let hd =['asda','sadas'];
>         for(const value of hd){
>             arr.push(value);
>             // push在arr后面追加数据
>         }
>        
>         console.table(arr);
> ```

> 使用展开语法：
>
> ```html
> 	let arr=['11','23231312','4534534'];
>     let hd =['asda','sadas'];
> 	arr=[...arr,...hd];
>     console.table(arr);
> ```

> 对项目进行求和计算
>
> ```html
> function sum(...args) 
> {
>             return args.reduce((s,v)=>{
>                 return (s+=v);
>             },0)
> }
>         console.log(sum(1,3,45,6,7));
> ```

### 6.点语法操作DOM节点元素

> 获取到所有的div，使得单击之后div消失

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>点语法操作DOM节点元素</title>
  </head>
  <body>
    <div>houdunren</div>
    <div>sdemo</div>
  </body>
  <style>
    .hide {
      display: none;
    }
  </style>
  <script>
    const div = document.querySelectorAll("div");
    // // [1, 3].map((item) => console.log(item));
    // Array.from(div).map(function (item) {
    //   console.log(item);
    // });
    //

    [...div].map(function (item) {
      item.addEventListener("click", function () {
        this.classList.toggle("hide");
      });
    });
  </script>
</html>

```

### 7.解构赋值

> 解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构

建议使用`var/let/const`声明

基本语法

```html
//数组使用
let [name, url] = ['后盾人', 'houdunren.com'];
console.log(name);
```

使用解构语法

```html
function hd() {
	return ['houdunren', 'hdcms'];
}
let [a, b] = hd();
console.log(a); //houdunren
```

剩余解构指用一个变量来接收剩余参数

```html
let [a, ...b] = ['后盾人', 'houdunren', 'hdcms'];
console.log(b);
```

如果变量已经初始化过，就要使用`()` 定义赋值表达式，严格模式会报错所以不建议使用。

```html
let web = "后盾人";
[web, url] = ["hdcms.com", "houdunren.com"];
console.log(web);
```

字符串解构

```html
"use strict";
const [...a] = "houdunren.com";
console.log(a); //Array(13)
```

`非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明`

```html
"use strict";
[web, url] = ["hdcms.com", "houdunren.com"];
console.log(web);
```

**简洁定义**

只赋值部分变量

```html
let [,url]=['后盾人','houdunren.com'];
console.log(url);//houdunren.com
```

使用展开语法获得多个值

```html
let [name, ...arr] = ['后盾人', 'hdcms', 'houdunren.com'];
console.log(name, arr); //后盾人 (2) ["hdcms", "houdunren.com"]
```

**默认值**

为变量设置默认值

```html
let [name, site = 'hdcms'] = ['后盾人'];
console.log(site); //hdcms
```

**数组参数的使用**

```html
function hd([a, b]) {
	console.log(a, b);
}
hd(['后盾人', 'hdcms']);
```

### 8.管理元素

#### 基本的用法

**从0开始的索引来改变数组****

```text
let arr = [1, "后盾人", "hdcms"];
arr[1] = '后盾人教程';
console.log(arr); //[1, "后盾人教程", "hdcms"]
```

**向数组追回元素（在数组的长度后面加元素以达到增加元素的目的）**

```text
let arr = [1, "后盾人", "hdcms"];
arr[arr.length] = 'houdunren.com';
console.log(arr); //[1, "后盾人", "hdcms", "houdunren.com"]
```

#### 扩展语法

**用展示语法批量添加元素**

```text
let arr = ["后盾人", "hdcms"];
let hd = ["houdunren"];
hd.push(...arr);
console.log(hd); //["houdunren", "后盾人", "hdcms"]
```

- **push** 压入元素，直接改变元数组，**返回值为数组元素数量**

  ```html
  let arr = ["后盾人", "hdcms"];
  console.log(arr.push('向军大叔', 'houdunren')); //4
  console.log(arr); //["后盾人", "hdcms", "向军大叔", "houdunren"]
  ```

  ```html
  根据区间创建一个新的数组
  function rangeArray(begin, end) {
    const array = [];
    for (let i = begin; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
  console.log(rangeArray(1, 6));
  ```

- **pop** 从末尾弹出元素，直接改变元数组，**返回值为弹出的元素**

  ```html
  let arr = ["后盾人", "hdcms"];
  console.log(arr.pop()); //hdcms
  console.log(arr); //["后盾人"]
  ```

- **shift** 从数组前面取出一个元素

  ```html
  let arr = ["后盾人", "hdcms"];
  console.log(arr.shift()); //后盾人
  console.log(arr); //["hdcms"]
  ```

- **unshift** 从数组前面添加元素

  ```html
  let arr = ["后盾人", "hdcms"];
  console.log(arr.unshift('向军大叔', 'houdunren')); //4
  console.log(arr); //["向军大叔", "houdunren", "后盾人", "hdcms"]
  ```

- **fill** 填充数组元素

  ```html
  let arr = ["后盾人", "hdcms"];
  console.log(arr.unshift('向军大叔', 'houdunren')); //4
  console.log(arr); //["向军大叔", "houdunren", "后盾人", "hdcms"]
  ```

  指定填充的位置

  ```html
  console.log([1, 2, 3, 4].fill("后盾人", 1, 2)); //[1, "后盾人", 3, 4]
  ```

- **slice**  从数组中截取部分元素组合成新数组（并不会改变原数组），不传第二个参数时截取到数组的最后元素。（左闭右开）

  ```html
  let arr = [0, 1, 2, 3, 4, 5, 6];
  console.log(arr.slice(1, 3)); // [1,2]
  ```

  不设置参数获取所有的元素

  ```html
  let arr = [0, 1, 2, 3, 4, 5, 6];
  console.log(arr.slice()); //[0, 1, 2, 3, 4, 5, 6]
  ```

  

- **splice** 可以添加、删除、替换数组中的元素，会对原数组进行改变，返回值为删除的元素。

  删除数组元素第一个参数为从哪开始删除，第二个参数为删除的数量

  ```html
  let arr = [0, 1, 2, 3, 4, 5, 6];
  console.log(arr.splice(1, 3)); //返回删除的元素 [1, 2, 3]
  console.log(arr); //删除数据后的原数组 [0, 4, 5, 6]
  ```

  通过修改`length`删除最后一个元素

  ```text
  let arr = ["后盾人", "hdcms"];
  arr.length = arr.length - 1;
  console.log(arr);
  ```

  通过指定第三个参数来设置在删除位置添加的元素

  ```text
  let arr = [0, 1, 2, 3, 4, 5, 6];
  console.log(arr.splice(1, 3, 'hdcms', '后盾人')); //[1, 2, 3]
  console.log(arr); //[0, "hdcms", "后盾人", 4, 5, 6]
  ```

  向末尾添加元素

  ```html
  let arr = [0, 1, 2, 3, 4, 5, 6];
  console.log(arr.splice(arr.length, 0, 'hdcms', '后盾人')); //[]
  console.log(arr); // [0, 1, 2, 3, 4, 5, 6, "hdcms", "后盾人"]
  ```

  向数组前添加元素

  ```html
  let arr = [0, 1, 2, 3, 4, 5, 6];
  console.log(arr.splice(0, 0, 'hdcms', '后盾人')); //[]
  console.log(arr); //["hdcms", "后盾人", 0, 1, 2, 3, 4, 5, 6]
  ```

  数组元素位置调整函数

  ```text
  function move(array, before, to) {
    if (before < 0 || to >= array.length) {
      console.error("指定位置错误");
      return;
    }
    const newArray = [...array];
    const elem = newArray.splice(before, 1);
    newArray.splice(to, 0, ...elem);
    return newArray;
  }
  const array = [1, 2, 3, 4];
  console.table(move(array, 0, 3));
  ```

- **清空数组**

  将数组值修改为`[]`可以清空数组，如果有多个引用时数组在内存中存在被其他变量引用。

  ```text
  let user = [{ name: "hdcms" }, { name: "后盾人" }];
  let cms = user;
  user = [];
  console.log(user);
  console.log(cms);
  ```

  将数组`length`设置为 0 也可以清空数组

  ```text
  let user = [{ name: "hdcms" }, { name: "后盾人" }];
  user.length = 0;
  console.log(user);
  ```

  使用`splice`方法删除所有数组元素

  ```text
  let user = [{ name: "hdcms" }, { name: "后盾人" }];
  user.splice(0, user.length);
  console.log(user);
  ```

  使用`pop/shift`删除所有元素，来清空数组

  ```text
  let user = [{ name: "hdcms" }, { name: "后盾人" }];
  while (user.pop()) {}
  console.log(user);
  ```

### 9.合并拆分

#### **join**

使用`join`连接成字符串

```text
let arr = [1, "后盾人", "hdcms"];
console.log(arr.join('-')); //1-后盾人-hdcms 使用join可以指定转换的连接方式
```

#### split

`split` 方法用于将字符串分割成数组，类似`join`方法的反函数。

```text
let price = "99,78,68";
console.log(price.split(",")); //["99", "78", "68"]
```

#### concat

`concat`方法用于连接两个或多个数组，元素是值类型的是复制操作，如果是引用类型还是指向同一对象

```text
let array = ["hdcms", "houdunren"];
let hd = [1, 2];
let cms = [3, 4];
console.log(array.concat(hd, cms)); //["hdcms", "houdunren", 1, 2, 3, 4]
```

也可以使用扩展语法实现连接

```text
console.log([...array, ...hd, ...cms]);
```

####  copyWithin

使用 `copyWithin` 从数组中复制一部分到同数组中的另外位置。

语法说明

```text
array.copyWithin(target, start, end)
```

| 参数     | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| *target* | 必需。复制到指定目标索引位置。                               |
| *start*  | 可选。元素复制的起始位置。                                   |
| *end*    | 可选。停止复制的索引位置 (默认为 *array*.length)。如果为负值，表示倒数。 |

```text
const arr = [1, 2, 3, 4];
console.log(arr.copyWithin(2, 0, 2)); //[1, 2, 1, 2]
```

### 10.查找元素

---

数组包含多种查找的函数，需要把这些函数掌握清楚，然后根据不同场景选择合适的函数。

####  indexOf

使用 `indexOf` 从前向后查找元素出现的位置，如果找不到返回 `-1`。

```text
let arr = [7, 3, 2, 8, 2, 6];
console.log(arr.indexOf(2)); // 2 从前面查找2出现的位置
```

如下面代码一下，使用 `indexOf` 查找字符串将找不到，因为`indexOf` 类似于`===`是严格类型约束。

```text
let arr = [7, 3, 2, '8', 2, 6];
console.log(arr.indexOf(8)); // -1
```

第二个参数用于指定查找开始位置

```text
let arr = [7, 3, 2, 8, 2, 6];
//从第二个元素开始向后查找
console.log(arr.indexOf(2, 3)); //4
```

#### lastindexOf

使用 `lastIndexOf` 从后向前查找元素出现的位置，如果找不到返回 `-1`。

```text
let arr = [7, 3, 2, 8, 2, 6];
console.log(arr.lastIndexOf(2)); // 4 从后查找2出现的位置
```

第二个参数用于指定查找开始位置

```text
let arr = [7, 3, 2, 8, 2, 6];
//从第五个元素向前查找
console.log(arr.lastIndexOf(2, 5));

//从最后一个字符向前查找
console.log(arr.lastIndexOf(2, -2));
```

#### includes

使用 `includes` 查找字符串返回值是布尔类型更方便判断

```text
let arr = [7, 3, 2, 6];
console.log(arr.includes(6)); //true
```

我们来实现一个自已经的`includes`函数，来加深对`includes`方法的了解

```text
function includes(array, item) {
  for (const value of array)
    if (item === value) return true;
  return false;
}

console.log(includes([1, 2, 3, 4], 3)); //true
```

#### find

find 方法找到后会把值返回出来

- 如果找不到返回值为`undefined`

返回第一次找到的值，不继续查找

```text
let arr = ["hdcms", "houdunren", "hdcms"];

let find = arr.find(function(item) {
  return item == "hdcms";
});

console.log(find); //hdcms
```

使用`includes`等不能查找引用类型，因为它们的内存地址是不相等的

```text
const user = [{ name: "李四" }, { name: "张三" }, { name: "后盾人" }];
const find = user.includes({ name: "后盾人" });
console.log(find);
```

`find` 可以方便的查找引用类型

```text
const user = [{ name: "李四" }, { name: "张三" }, { name: "后盾人" }];
const find = user.find(user => (user.name = "后盾人"));
console.log(find);
```

#### findIndex

`findIndex` 与 `find` 的区别是返回索引值，参数也是 : 当前值，索引，操作数组。

- 查找不到时返回 `-1`

```text
let arr = [7, 3, 2, '8', 2, 6];

console.log(arr.findIndex(function (v) {
	return v == 8;
})); //3
```

#### find 原理

下面使用自定义函数

```text
let arr = [1, 2, 3, 4, 5];
function find(array, callback) {
  for (const value of array) {
    if (callback(value) === true) return value;
  }
  return undefined;
}
let res = find(arr, function(item) {
  return item == 23;
});
console.log(res);
```

下面添加原型方法实现

```text
Array.prototype.findValue = function(callback) {
  for (const value of this) {
    if (callback(value) === true) return value;
  }
  return undefined;
};

let re = arr.findValue(function(item) {
  return item == 2;
});
console.log(re);
```

### 11.数组排序

#### reverse 反转数组排序

```text
let arr = [1, 4, 2, 9];
console.log(arr.reverse()); //[9, 2, 4, 1]
```

#### sort

```
sort`每次使用两个值进行比较` Array.sort((a,b)=>a-b
```

- 返回负数 a 排在 b 前面，从小到大
- 返回正数 b 排在 a 前面
- 返回 0 时不动

默认从小于大排序数组元素

```text
let arr = [1, 4, 2, 9];
console.log(arr.sort()); //[1, 2, 4, 9]
```

使用排序函数从大到小排序，参数一与参数二比较，返回正数为降序负数为升序

```text
let arr = [1, 4, 2, 9];

console.log(arr.sort(function (v1, v2) {
	return v2 - v1;
})); //[9, 4, 2, 1]
```

下面是按课程点击数由高到低排序

```text
let lessons = [
  { title: "媒体查询响应式布局", click: 78 },
  { title: "FLEX 弹性盒模型", click: 12 },
  { title: "MYSQL多表查询随意操作", click: 99 }
];

let sortLessons = lessons.sort((v1, v2) => v2.click - v1.click);
console.log(sortLessons);
```

#### 排序的原理

```text
let arr = [1, 5, 3, 9, 7];
function sort(array, callback) {	
  for (const n in array) {
    for (const m in array) {
      if (callback(array[n], array[m]) < 0) {
        let temp = array[n];
        array[n] = array[m];
        array[m] = temp;
      }
    }
  }
  return array;
}
arr = sort(arr, function(a, b) {
  return a - b;
});
console.table(arr);
```

### 12.循环遍历

#### for

根据数组长度结合`for` 循环来遍历数组

```text
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (let i = 0; i < lessons.length; i++) {
  lessons[i] = `后盾人: ${lessons[i].title}`;
}
console.log(lessons);
```

#### forEach

`forEach`使函数作用在每个数组元素上，但是没有返回值。

下面例子是截取标签的五个字符。

```text
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

lessons.forEach((item, index, array) => {
    item.title = item.title.substr(0, 5);
});
console.log(lessons);
```

#### for/in

遍历时的 key 值为数组的索引

```text
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const key in lessons) {
    console.log(`标题: ${lessons[key].title}`);
}
```

#### for/of

与 `for/in` 不同的是 `for/of` 每次循环取其中的值而不是索引。

```text
let lessons = [
	{title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
	{title: 'MYSQL多表查询随意操作',category: 'mysql'}
];

for (const item of lessons) {
  console.log(`
    标题: ${item.title}
    栏目: ${item.category == "css" ? "前端" : "数据库"}
  `);
}
```

使用数组的迭代对象遍历获取索引与值（有关迭代器知识后面章节会讲到）

```text
const hd = ['houdunren', 'hdcms'];
const iterator = hd.entries();
console.log(iterator.next()); //value:{0:0,1:'houdunren'}
console.log(iterator.next()); //value:{0:1,1:'hdcms'}
```

这样就可以使用解构特性与 `for/of` 遍历并获取索引与值了

```text
const hd = ["hdcms", "houdunren"];

for (const [key, value] of hd.entries()) {
  console.log(key, value); //这样就可以遍历了
}
```

取数组中的最大值

```text
function arrayMax(array) {
  let max = array[0];
  for (const elem of array) {
    max = max > elem ? max : elem;
  }
  return max;
}

console.log(arrayMax([1, 3, 2, 9]));
```

###  13.迭代器方法

数组中可以使用多种迭代器方法，迭代器后面章节会详解。

#### keys

通过迭代对象获取索引

```text
const hd = ["houdunren", "hdcms"];
const keys = hd.keys();
console.log(keys.next());
console.log(keys.next());
```

获取数组所有键

```text
"use strict";
const arr = ["a", "b", "c", "后盾人"];

for (const key of arr.keys()) {
  console.log(key);
}
```

使用 while 遍历

```text
let arr = ["hdcms", "houdunren"];
while (({ value, done } = values.keys()) && done === false) {
	console.log(value);
}
```

#### values

通过迭代对象获取值

```text
const hd = ["houdunren", "hdcms"];
const values = hd.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
```

获取数组的所有值

```text
"use strict";
const arr = ["a", "b", "c", "后盾人"];

for (const value of arr.values()) {
  console.log(value);
}
```

#### entries

返回数组所有键值对，下面使用解构语法循环

```text
const arr = ["a", "b", "c", "后盾人"];
for (const [key, value] of arr.entries()) {
  console.log(key, value);
}
```

解构获取内容（对象章节会详细讲解）

```text
const hd = ["houdunren", "hdcms"];
const iterator = hd.entries();

let {done,value: [k, v]} = iterator.next();

console.log(v);
```

### 14.扩展方法

#### every

`every` 用于递归的检测元素，要所有元素操作都要返回真结果才为真。

查看班级中同学的 JS 成绩是否都及格

```text
const user = [
  { name: "李四", js: 89 },
  { name: "马六", js: 55 },
  { name: "张三", js: 78 }
];
const resust = user.every(user => user.js >= 60);
console.log(resust);
```

标题的关键词检查

```text
let words = ['后盾', '北京', '培训'];
let title = '后盾人不断分享技术教程';

let state = words.every(function (item, index, array) {
  return title.indexOf(item) >= 0;
});

if (state == false) console.log('标题必须包含所有关键词');
```



#### some

使用 `some` 函数可以递归的检测元素，如果有一个返回 true，表达式结果就是真。第一个参数为元素，第二个参数为索引，第三个参数为原数组。

下面是使用 `some` 检测规则关键词的示例，如果匹配到一个词就提示违规。

```text
let words = ['后盾', '北京', '培训'];
let title = '后盾人不断分享技术教程';

let state = words.every(function (item, index, array) {
  return title.indexOf(item) >= 0;
});

if (state == false) console.log('标题必须包含所有关键词');
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <input type="text" name="title" />
    <span></span> 
  </body>
  <script>
    let keywords = ["php", "js"];
    let title = document.querySelector('[name="title"]');
    title.addEventListener("keyup", function () {
      const res = keywords.some((keyword) => {
        return this.value.indexOf(keyword) != -1;
      });
      if (res == false) {
        document.querySelector("span").innerHTML =
          "必须包含" + keywords.join(",") + "关键词";
      } else {
        document.querySelector("span").innerHTML = "";
      }
    });
  </script>
</html>

```

####  filter过滤元素的使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    // let arr = ["hdcms", "doudunren"];
    // let newArry = arr.filter(function (value, index, arr) {
    //   //   console.log(arr);
    //   return true;
    // });
    // console.log(newArry);

    let lessons = [
      { title: 'flex', category: 'css' },
      { title: '媒体查询', category: 'css' },
      { title: 'mysqlqqq', category: 'mysql' }
    ];
    const csslessons = lessons.filter(function (lesson) {
      return lesson['category'] == 'mysql'
    });
    console.table(csslessons)
  </script>
</html>

```

我们来写一个过滤元素的方法来加深些技术

```text
function except(array, excepts) {
  const newArray = [];
  for (const elem of array)
    if (!excepts.includes(elem)) newArray.push(elem);
  return newArray;
}

const array = [1, 2, 3, 4];
console.log(except(array, [2, 3])); //[1,4]
```

#### map

使用 `map` 映射可以在数组的所有元素上应用函数，用于映射出新的值。

为所有标题添加上 `后盾人`

```text
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    let lessons = [
  {title: '媒体查询响应式布局',category: 'css'},
  {title: 'FLEX 弹性盒模型',category: 'css'},
  {title: 'MYSQL多表查询随意操作',category: 'mysql'}
];
let hd=lessons.map(function(value){
    return{
        title:value.title,
        category:value.category,
        click:100
    };
});
console.table(hd);
console.table(lessons);
</script>
</html>
```

#### reduce

使用 `reduce` 与 `reduceRight` 函数可以迭代数组的所有元素，`reduce` 从前开始 `reduceRight` 从后面开始。下面通过函数计算课程点击数的和。

第一个参数是执行函数，第二个参数为初始值

- 传入第二个参数时将所有元素循环一遍
- 不传第二个参数时从第二个元素开始循环

函数参数说明如下

| 参数  | 说明                       |
| ----- | -------------------------- |
| prev  | 上次调用回调函数返回的结果 |
| cur   | 当前的元素值               |
| index | 当前的索引                 |
| array | 原数组                     |

**统计元素中出现的次数**

```html
let arr=[1,2,3,4,4,56,67,7,7,1];
function arryCount(array,item){
    return array.reduce(function(total,cur){
        total+=item==cur?1:0;
        return total;
    },0); 
}
console.log(arryCount(arr,1));
```

统计元素中的最大值

```html
let arr=[1,2,3,4,4,56,67,7,7,1];
function arrayMax(array){
    return arr.reduce(function(pre,cur){
        return pre>cur?pre:cur;
    });
}
console.log(arrayMax(arr));
```

**查询最贵的商品**

```html
let cart=[
        {name:"iphone",price:10000},
        {name:"imac",price:80000},
        {name:"ipad",price:1000}
    ];
    function Maxprice(goods){
        return cart.reduce(function(pre,cur){
            return pre.price>cur.price?pre:cur;
           
        });
    }
    console.log(Maxprice(cart));
```

**汇总商品**

```html
let cart=[
        {name:"iphone",price:10000},
        {name:"imac",price:80000},
        {name:"ipad",price:1000}
    ];


function sum(goods){
            return goods.reduce(function(total,cur){
                return (total+=cur['price']);
            },0);
        }
        console.log(sum(cart));

```

```html
   //获取价格超过10000的商品的名称
    let cart=[
        {name:"iphone",price:10000},
        {name:"imac",price:80000},
        {name:"ipad",price:1000}
    ];
function getnamebyprice(goods,price){
    return goods
    .reduce(function(arr,cur){
       if (cur.price>price)arr.push(cur);
        return arr;
       
    },[])
    .map(function(item){
        return item.name;
    });
}
console.log(getnamebyprice(cart,10000));
```

**数组去重**

```html
let arr=[1,1,3,4,1,5,1,3,2];
let newArry=arr.reduce(function(arr,cur){
    if (arr.includes(cur)==false) {
        arr.push(cur);
    }
    return arr;
},[]);
console.table(newArry);
```

去重复的商品

```html
    let cart=[
        {name:"iphone",price:10000},
        {name:"imac",price:80000},
        {name:"ipad",price:1000},
        {name:"imac",price:80000},
        {name:"imac",price:80000},
        {name:"imac",price:80000}
    ];
function filterGoods(goods){
    return goods.reduce(function(arr,cur){
        let find=arr.find(function(v){
            return v.name==cur.name;
            });
            if (!find)arr.push(cur);
            return arr;  
    },[]);
}
console.table(filterGoods(cart));

```

**制作一个logo**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    *{
        padding: 0;
        margin: 0;
    }
body{
    width: 100vh;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #34495e;
}
div{
    font-size: 5em;
    font-weight: bold;
    text-transform: uppercase;
    color: blueviolet;
}
div>span{
    position: relative;
    display: inline-block;
}
.color {
    animation-name:color ;
    animation-duration: 1s;
    animation-iteration-count: 2;
    animation-timing-function:linear;
    animation-direction: alternate;
}
    @keyframes color {
        50%{
            color: #f1c40f;
            transform: scale(2);
        }
        to{
            color: brown;
            transform: scale(.5);
        }
    }

</style>
<body>
    <div>houdunren.com</div>
</body>
<script>
const div=document.querySelector("div");
// console.log([...div.textContent]);
[...div.textContent].reduce(function(pre,cur,index){
    pre==index&&(div.innerHTML='');
    // console.log(pre,cur,index);
    let span=document.createElement("span");
    span.innerHTML=cur;
    div.appendChild(span);
    span.addEventListener("mouseover",function(){
        this.classList.add("color");
    });
    span.addEventListener('animationend',function(){
        this.classList.remove("color");
    }); 

},0);
</script>
</html>
```

## 五、**symbol**

#### 1.介绍

> Symbol用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。

>  Symbol 的值是唯一的，独一无二的不会重复的（可以当做一个字符串）

**不能添加属性**

```text
let hd = Symbol();
hd.name = "后盾人";
console.log(hd.name);
```

**可以传入字符串用于描述作用**

```text
let hd = Symbol("is name");
let edu = Symbol("这是一个测试");

console.log(hd); //Symbol(is name)
console.log(edu.toString()); //Symbol(这是一个测试)
```

**传入相同参数Symbol也是独立唯一的，因为参数只是描述而已，但使用 `Symbol.for`则不会**

```text
let hd = Symbol("后盾人");
let edu = Symbol("后盾人");
console.log(hd == edu); //false
```

**使用`description`可以获取传入的描述参数**

```text
let hd = Symbol("后盾人");
console.log(hd.description); //后盾人
```

**symbolFor**

**根据描述获取Symbol，如果不存在则新建一个Symbol**

- 使用Symbol.for会在系统中将Symbol登记
- 使用Symbol则不会登记

```text
let hd = Symbol.for("后盾人");
let edu = Symbol.for("后盾人");
console.log(hd == edu); //true
```

 **Symbol.keyFor**

`Symbol.keyFor` 根据使用`Symbol.for`登记的Symbol返回描述，如果找不到返回undefined 。

```text
let hd = Symbol.for("后盾人");
console.log(Symbol.keyFor(hd)); //后盾人

let edu = Symbol("houdunren");
console.log(Symbol.keyFor(edu)); //undefined
```

#### 2.解决字符串耦合的问题

使用symbol防止数据被替换，取值和定义的时候应使用中括号避免被当成字符串

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    let user = {
      name: "李四",
      key: Symbol(),
    };
    let user2 = {
      name: "李四",
      key: Symbol(),
    };
    let grade = {
      [user.key]: { js: 110, css: 89 },
      [user2.key]: { js: 10, css: 19 },
    };
    console.log(grade[user.key]);
  </script>
</html>

```

Symbol 是独一无二的所以可以保证对象属性的唯一。

- Symbol 声明和访问使用 `[]`（变量）形式操作
- 也不能使用 `.` 语法因为 `.`语法是操作字符串属性的。

下面写法是错误的，会将`symbol` 当成字符串`symbol`处理

```text
let symbol = Symbol("后盾人");
let obj = {
  symbol: "hdcms.com"
};
console.log(obj);
```

正确写法是以`[]` 变量形式声明和访问

```text
let symbol = Symbol("后盾人");
let obj = {
  [symbol]: "houdunren.com"
};
console.log(obj[symbol]); //houdunren.com
```

#### 3.在缓存容器中的使用

使用`Symbol`可以解决在保存数据时由于名称相同造成的耦合覆盖问题。

```text
class Cache {
  static data = {};
  static set(name, value) {
    this.data[name] = value;
  }
  static get(name) {
    return this.data[name];
  }
}

let user = {
  name: "后盾人",
  key: Symbol("缓存")
};

let cart = {
  name: "购物车",
  key: Symbol("购物车")
};

Cache.set(user.key, user);
Cache.set(cart.key, cart);
console.log(Cache.get(user.key));
```

#### 4.遍历属性

Symbol 不能使用 `for/in`、`for/of` 遍历操作

```text
let symbol = Symbol("后盾人");
let obj = {
  name: "hdcms.com",
  [symbol]: "houdunren.com"
};

for (const key in obj) {
  console.log(key); //name
}

for (const key of Object.keys(obj)) {
  console.log(key); //name
}
```

可以使用 `Object.getOwnPropertySymbols` 获取所有`Symbol`属性

```text
...
for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key);
}
```

也可以使用 `Reflect.ownKeys(obj)` 获取所有属性包括`Symbol`

```text
...
for (const key of Reflect.ownKeys(obj)) {
  console.log(key);
}
...
```

如果对象属性不想被遍历，可以使用`Symbol`保护

```text
const site = Symbol("网站名称");
class User {
  constructor(name) {
    this[site] = "后盾人";
    this.name = name;
  }
  getName() {
    return `${this[site]}-${this.name}`;
  }
}
const hd = new User("向军大叔");
console.log(hd.getName());
for (const key in hd) {
  console.log(key);
}
```

## 六、 Set类型

>  与array和object的区别和共性

| set                                    | array            | object                                 |
| -------------------------------------- | ---------------- | -------------------------------------- |
| 不能存放重复的值（但是不受类型的约束） | 可以存放重复的值 | 不能存放重复的值，键名会都转换成字符串 |

用于存储任何类型的唯一值，无论是基本类型还是对象引用。

- 只能保存值没有键名
- 严格类型检测如字符串数字不等于数值型数字
- 值是唯一的
- 遍历顺序是添加的顺序，方便保存回调函数

### 基本使用

对象可以属性最终都会转为字符串

```text
let obj = { 1: "hdcms", "1": "houdunren" };
console.table(obj); //{1:"houdunren"}
```

使用对象做为键名时，会将对象转为字符串后使用

```text
let obj = { 1: "hdcms", "1": "houdunren" };
console.table(obj);

let hd = { [obj]: "后盾人" };
console.table(hd);

console.log(hd[obj.toString()]);
console.log(hd["[object Object]"]);
```

使用数组做初始数据

```text
let hd = new Set(['后盾人', 'hdcms']);
console.log(hd.values()); //{"后盾人", "hdcms"}
```

Set 中是严格类型约束的，下面的数值`1`与字符串`1`属于两个不同的值

```text
let set = new Set();
set.add(1);
set.add("1");
console.log(set); //Set(2) {1, "1"}
```

使用 `add` 添加元素，不允许重复添加`hdcms`值

```text
let hd = new Set();

hd.add('houdunren');
hd.add('hdcms');
hd.add('hdcms')

console.log(hd.values()); //SetIterator {"houdunren", "hdcms"}
```

### Set元素检测与管理

| set               | 操作                                   |
| ----------------- | -------------------------------------- |
| 新建set           | `let set = new Set(["hdcms", "hdr"]);` |
| 查看set的数量     | `console.log(set.size);`               |
| 判断元素是否存在  | `console.log(set.has("hdr"));`         |
| 删除元素(Boolean) | `console.log(set.delete("hdr"));`      |
| 清空元素          | `console.log(set.clear());`            |

### 类型转换

set和数组之间的转换

> set转array

```html
   let set = new Set(["houdunren", "hdcms"]);
    console.log(Array.from(set));
    //转为数组
    console.log(...set);
    let hd = new Set("1321321456");
    console.log(hd);
    let arr = [...hd].filter(function (item) {
      return item < 3;
    });
    hd = new Set(arr);
    console.log(hd);
```

> array转set

```html
let arr = [1, 23, 4, 45, 45, 56, 6];
    console.log(arr);
    console.log(new Set(arr));
    arr = [...new Set(arr)];
    console.log(arr);
```

### 遍历set类型的方法

#### set的迭代对象方法

> `console.**log**(set.**values**());`

> `console.**log**(set.**keys**());`

>`console.**log**(set.**entries**());`

#### 遍历方法：

```html
set.forEach(function (value, key, set) {
      console.log(set);
    });
```

```html
for (const value of set) {
      console.log(value);
    }
```

### 使用set处理网站的关键词

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>使用set处理网站的关键词</title>
  </head>
  <style>
    body {
      padding: 200px;
    }

  </style>
  <body>
    <input type="text" name="hd" id="" />
    <ul></ul>
  </body>
  <script>
    let obj = {
      data: new Set(),
      set keywords(word) {
        this.data.add(word);
      },
      show() {
        let ul = document.querySelector("ul");
        ul.innerHTML = "";
        this.data.forEach(function (value) {
          ul.innerHTML += `<li>${value}</li>`;
        });
      },
    };
    
    let input = document.querySelector("[name='hd");
    input.addEventListener("blur", function () {
      obj.keywords = this.value;
      obj.show();
    });
  </script>
</html>

```

### 并集、交集。差集的实现

并集（利用set的特性，里面不会有重复的值）

```html
let a = new Set([1, 3, 4, 3, 2, 1, 5, 6]);
    let b = new Set([2, 3, 4, 5, 6, 8, 7]);
    //并集
     console.log(new Set([...a, ...b]));
```

交集（俩者共同拥有的数据）

```html
let a = new Set([1, 3, 4, 3, 2, 1, 5, 6]);
let b = new Set([2, 3, 4, 5, 6, 8, 7]);
console.log(
      //交集
      new Set(
        [...a].filter(function (item) {
          return b.has(item);
        })
      )
);
```

差集（a有b没有的值）

```html
let a = new Set([1, 3, 4, 3, 2, 1, 5, 6]);
let b = new Set([2, 3, 4, 5, 6, 8, 7]);
console.log(
      //差集a有的，b没有
      new Set(
        [...a].filter(function (item) {
          return !b.has(item);
        })
      )
    );
```

### weakset语法

和set一样，但是里面的数据是引用类型

**错误方法：**

```html
let set = new WeakSet(["1111", "q1111"]);
```

**正确方法：**

```html
 let set = new WeakSet();
    set.add(["1111", "q1111"]);
    console.log(set);
```

删除或者操作dom

```html
   let nodes = new WeakSet();
    let divs = document.querySelectorAll("div");
    divs.forEach(function (item) {
      nodes.add(item);
    });
    nodes.delete(divs[0]);
    console.log(nodes);
```

#### 引用类型的垃圾回收机制

```html
 let hd = { name: "houren" };
    let edu = hd;
    let arr = [hd];
    hd = null;
    edu = null;
    arr[0]=null;
   
    console.log(arr);
```

#### weakset的弱引用特性

```html
<script>
    let hd = { name: "houren" };
    let set = new WeakSet();
    set.add(hd);
    console.log(set);
    //弱引用：weakset不会让引用次数加1
    // weakset不能使用循环遍历，以及数据的.keys .size
  </script>
```

### Todo任务列表中使用WeakSet

编写思路：

- 编写html以及css代码
- 取出相关的li内容
- 将取出的内容加入到weakset中
- 取得a元素的父标签ls
- 通过对li元素class类的改变，已达到，控制li显示与否

---

相关代码如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo任务列表中使用WeakSet</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    body {
      margin: 200px;
    }
    li {
      list-style: none;
      margin-bottom: 30px;
      border: 1px solid #000;
    }
    .remove {
      background-color: #ccc;
    }
  </style>
  <body>
    <ul>
      <li>demo<a href="javascript:;">x</a></li>
      <li>demo<a href="javascript:;">x</a></li>
      <li>demo<a href="javascript:;">x</a></li>
    </ul>
  </body>
  <script>
    class Todo {
      constructor() {
        this.items = document.querySelectorAll("ul>li");
        // console.log(this.items);
        this.lists = new WeakSet();
        this.items.forEach((item) => this.lists.add(item));
        // console.log(this.lists);
      }
      run() {
        this.addEvent();
      }

      addEvent() {
        this.items.forEach((item) => {
          let a = item.querySelector("a");
          //    console.log(a);
          a.addEventListener("click", (event) => {
            const parentElement = event.target.parentElement;

            if (this.lists.has(parentElement)) {
              parentElement.classList.add("remove");
              this.lists.delete(parentElement);
            } else {
              parentElement.classList.remove("remove");
              this.lists.add(parentElement);
            }
          });
        });
      }
    }
    new Todo().run();
  </script>
</html>

```

## 七、Map与WeakMap类型

### 1.Map类型特点与创建方法

` 对象当中的键只能是字符串  map里面都可以作为键名`

| 字符串                        | 函数                                | 对象                     | 数字                     |
| ----------------------------- | ----------------------------------- | ------------------------ | ------------------------ |
| `map.set("name", "hoududn");` | `map.set(function () {}, "hdcms");` | `map.set({},'sdadasd');` | `map.set(11,'dasdsad');` |



### 2.Map类型增删改查操作

与set类型类似：

| 增                                | 删                                      | 清空                                 | 检测                                    |
| --------------------------------- | --------------------------------------- | ------------------------------------ | --------------------------------------- |
| ` map.**set**('obj', "dsadasd");` | `console.**log**(map.**delete**(obj));` | `console.**log**( map.**clear**());` | `console.**log**(map.**has**("demo"));` |



### 3.遍历Map类型数据

- **取得数据的值或者键**

>```html
>hd.set("name", "alice");
>    console.log(hd.keys());
>    console.log(hd.values());
>    console.log(hd.entries());
>```

- **使用forof遍历**

> ```html
> for (const key of hd.keys()) {
>       console.log(key);
>     }
> 
>     console.log("value--------");
>     for (const value of hd.values()) {
>       console.log(value);
>     }
> 
>     for (const entrie of hd.entries()) {
>       console.log(entrie);
>     }
> ```

- **使用foreach遍历键值对**

> ```html
>   hd.forEach((value, key) => {
>       console.log(value, key);
>     });
> ```

### 4.Map类型转换操作

> 使用点语法可以将map转为数组

tips：将包含某一数据的值取出来，然后在新的数组里面展示

步骤：

-  点语法展开变为数组

- 过滤

- 返回，第一个值包含demo的值

- 将返回值返回到新数组

- 打印出即可

**代码如下：**

```html
 let hd = new Map([
      ["demo", "demo"],
      ["sda", "sda"],
    ]);
let newArr = [...hd].filter((item) => {
      // 返回，第一个值包含demo的值
      return item[1].includes("demo");
    });
    let edu = new Map(newArr);
    console.log(...edu.values());
```



### 5.Map类型管理DOM节点

案例如下：

```html
  <body>
    <div name="后盾人">houdunren.com</div>
    <div name="免费开源">hdcms.com</div>
  </body>
```



```javascript
  <script>
    let map = new Map();
    document.querySelectorAll("div").forEach((item) => {
      map.set(item, {
        content: item.getAttribute("name"),
      });
    });
    map.forEach((config, elem) => {
      elem.addEventListener("click", () => {
        alert(config.content);
      });
    });
  </script>
```



### 6.使用Map类型控制网站表单提交

**通过对是否点选，判断是否提示警告**

![image-20221209114706066](C:\Users\17188\AppData\Roaming\Typora\typora-user-images\image-20221209114706066.png)

```html
  <script>
    function post() {
      let map = new Map();
      let inputs = document.querySelectorAll("[error");
      console.log(inputs);
      inputs.forEach((item) => {
        map.set(item, {
          error: item.getAttribute("error"),
          status: item.checked,
        });
      });
      return [...map].every(([elem, config]) => {
        config.status || alert(config.error);
        return config.status;
      });
      // return false;
    }

  </script>
```



### 7.WeakMap的语法使用

weakmap的键只能是对象

```javascript
  let map = new WeakMap();
    map.set([], "sdadsa");
    console.log(map);
    let divs = document.querySelectorAll("div");
    let map = new WeakMap();
    divs.forEach((item) => map.set(item, item.innerHTML));
    console.log(map);

    let arr = [];
    let map = new WeakMap();
    map.set(arr, "sdas");
    map.delete(arr);
    console.log(map.has(arr));
    console.log(map);
```



### 8.WeakMap弱引用类型体验

和weakset类似，为弱引用类型

```javascript
 <script>
    let hd = { name: "厚度人" };
    cms = hd;
    let map = new WeakMap();
    map.set(hd, "sdasas");
    hd = null;
    cms = null;

    setTimeout(function () {
      console.log(map);
    }, 1000);
  </script>
```



### 9.使用WeakMap开发选课组件

所用到的知识点：

- html与css的布局
- dom的获取
- 函数和点语法
- renduce用法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>9.使用WeakMap开发选课组件</title>
  </head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
    }
    a {
      text-decoration: none;
    }
    .content span {
      border: 0px solid #00ff00;
      background-color: #00ff00;
      border-radius: 5px;
      margin-left: 20px;
      color: #ffffff;
      font-size: larger;
    }
  </style>
  <body>
    <div class="lessons">
      <ul>
        <li><span>php</span><a href="javascript:;">+</a></li>
        <li><span>js</span><a href="javascript:;">+</a></li>
        <li><span>node</span><a href="javascript:;">+</a></li>
      </ul>
    </div>
    <div class="content">
      <strong id="count">一共选了俩门课</strong>
      <p id="lists"><span></span></p>
    </div>
  </body>
  <script>
    class lesson {
      constructor() {
        this.lis = document.querySelectorAll("ul>li");
        // console.log(this.lis);
        this.countElem = document.getElementById("count");
        this.listElem = document.getElementById("lists");
        // console.log(this.listElem);
        this.map = new WeakMap();
      }
      run() {
        this.lis.forEach((li) => {
          li.querySelector("a").addEventListener("click", (event) => {
            const a = event.target;
            // console.log(li);点击加号显示li类
            const state = li.getAttribute("select");
            if (state) {
              li.removeAttribute("select");
              this.map.delete(li);
              a.innerHtml = "+";
              a.style.backgroundColor = "green";
            } else {
              this.map.set(li);
              li.setAttribute("select", true);
              a.innerHtml = "-";
              a.style.backgroundColor = "red";
            }
            this.renderr();
          });
        });
      }
      count() {
        return [...this.lis].reduce((count, li) => {
          return (count += this.map.has(li) ? 1 : 0);
        }, 0);
      }
      lists() {
        return [...this.lis]
          .filter((li) => {
            return this.map.has(li);
          })
          .map((li) => {
            return `<span>${li.querySelector("span").innerHTML}</span>`;
          })
          .join("");
        console.log(lis);
      }

      renderr() {
        // this.countElem.innerHtml = `一共选了${this.count()}门课`;
        this.countElem.innerHTML = `一共选了${this.count()}门课程`;
        this.listElem.innerHTML = this.lists();
        // console.log(countElem);
        // console.log(this.count);
        // this.countElem.innerHtml = "sdsa";
      }
    }
    new lesson().run();
  </script>
</html>

```

## 八、函数的奥秘

### 1.函数声明的多种方式

1.字面量形式

> ```html
>  function hd(title){
>       console.log(title);
>     }
>     hd("daasas");
> ```

2.使用对象的形式定义

> ```html
> let func = new Function("title", "console.log(title)");
> 参数函数体
>     func("dasdasdasds");
> ```

3.函数作为表达式赋值

> ```html
> let cms = function (title) {
>       console.log(title);
>     };
> cms("daas")
> ```

4.需要多个函数：

```html
  let user ={
      name:null,
      setUsername:function(name){
        this.name=name;
      },
      getUsername:function(){
        return this.name;
      }
    }
    user.setUsername("sdssa")
    console.log(user.getUsername());
```

### 2.全局函数定义特点

>  全局函数

匿名函数赋值给变量的时候，根据声明的关键词不同，体现出的形式不一样，使用`let/const`时不会压入 window

```javascript
let hd = function() {
  console.log("后盾人");
};
window.hd(); //window.hd is not a function
```

### 3.匿名函数与函数提升

> 匿名函数：**没有声明函数的名字**

 有命名的函数，在执行的时候会将函数体提升到前面，函数可以正常的运行

```javascript
show();
function show(){
        console.log("11111");
    }
    
```

但是匿名函数不会提升

```javascript
 hd();
    var hd = function () {
      console.log("sdasda");
    };
```

函数是一个对象类型

```javascript
  function sum(...args) {
      // console.log(args);
      //箭头函数
      //   return args.reduce((a, b) => a + b);
    //   普通函数
      return args.reduce(function (a, b) {
        return a + b;
      });
    }
    console.log(sum(0, 1, 12, 321, 1, 21323, 1, 3));
```

### 4.立即执行函数与块作用域解决冲突

老方法：

​	**立即执行函数：**

```javascript
 (function (window) {
      function hd(){
          console.log("asa");
      }
        function show(){
          console.log("show");
      }
     window.j1s={hd.show};
    })(window);
怎么调用：
 js1.hd();
```

​	**块级作用域**

```javascript
{
    function hd(){
          console.log("asa");
      }
       function show(){
          console.log("show");
      }
    window.j1s={hd.show};
}
调用方法：
 js1.hd();
```

**推荐：模块化类的方式**

### 5.形参与实参

形参：a和b

实参：1和3

```javascript
 function sum(a, b) {
      return a + b;
    }
    console.log(sum(1,3));
```

> 将1和3传给a和b，
>
> 一般形参和实参位数对应
>
> 实参比形参多不影响
>
> 形参比实参多不行

### 6.默认参数的使用技巧

**有默认参数的放后面**

```javascript
   function avg(total, year = 1) {
      return Math.round(total / year);
    }
    console.log(avg(2000,2));
```

传值就替换1，不传值默认就是1

排序的小案例:

```javascript
    function sortArray(array,type="asc"){
        return array.sort(function(a,b){
            return type=="asc"?a-b:b-a;
        })
         // 箭头函数
        return array.sort((a,b)=>(type=="asc"?a-b:b-a));
    }
    console.log(sortArray([1,4,5,7,2,4,3],"aaa"));

```

### 7.函数参数与arguments

```javascript
  function sum(){
        return [...arguments].reduce((a,b)=>a+b);
    }
    console.log(sum(1,1,34,1,45,545,1));
```

最新：

把变量汇集到args

```html
    function sum(...args){
        return args.reduce((a,b)=>a+b);
    }
    console.log(sum(1,1,34,1,45,545,1));
```

### 8.箭头函数使用语法

```javascript
     let hd = [1, 23, 2, 2, 4, 54, 5].filter(function (value, index) {
       return value <= 5;
     });
     初步优化
     let hd = [1, 23, 2, 2, 4, 54, 5].filter( (value, index) =>{
       return value <= 5;
     });
     二步优化
     let hd = [1, 23, 2, 2, 4, 54, 5].filter((value) => value <= 5);
```



### 9.使用函数完成递归算法

>  阶乘案例：

```javascript
    function factorial(num) {
      // 正常书写
      //   if (num == 1) {
      //     return 1;
      //   }
      //   return num * factorial(num - 1);
      // 简写
      return num == 1 ? 1 : num * factorial(--num);
    }
    // ；流程
//     return 3*factorial(2-1);
//     return 2*factorial(2-1);
//     return 1;
// //为1之后进行返回
//     return 3*2*1;
//     // 第二次的返回的结果放在第一次的factorial(2-1);
//     return 2*1;
//     // 把第三次返回的结果放在第二次的factorial(2-1);
//     return 1;


    console.log(factorial(4));
```



### 10.递归求合与点语法注意事项



```javascript
 function sum(...args) {
      console.log(args);
      if (args.length == 0) {
        return 0;
      }
      //弹出后面的一个数字
      return args.pop() + sum(...args);
//简写
return args==0?0:args.pop()+sum(...args);
    }
    console.log(sum(1, 23, 21, 32, 4));
```



### 11.递归实现倒三角

```html
function start(sum) {
//常规写法
      // if (sum == 0) {
      //   return "";
      // }
      // document.write("*".repeat(sum) + "<br/>");
      // start(--sum);
      // document.write("*".repeat(sum) + "<br/>")||start(--sum);
	//简写
      return sum == 0
        ? ""
        : document.write("*".repeat(sum) + "<br/>") || start(--sum);
    }
    start(6);
```



### 12.递归附加参数使用技巧

使用递归使得每一个点击数+100

```html
   let lessons = [
      { title: "php", click: 89 },
      {
        title: "js",
        click: 99,
      },
      {
        title: "web",
        click: 111,
      },
      { title: "sda", click: 111 },
      {
        title: "asd",
        click: 11,
      },
    ];
    function change(lessons,num=100,i=0){
        if (i==lessons.length) {
            return lessons;
        }
        lessons[i].click+=num;
        return change(lessons,num,++i)
    }

    console.table(change(lessons,40));
```

使用map使得点击数+100

```html
 lessons=lessons.map(function(item){
            console.log(item);
            item.click+=100;
            return item;
        })
        console.table(lessons);
```



 

### 13.什么是回调函数

> 在某个时刻被其他函数调用的函数称为回调函数，比如处理键盘、鼠标事件的函数。

使用回调函数递增计算

```text
let hd = ([1, 2, 3]).map(item => item + 10);
console.log(hd)


```

### 14.展开语法（点语法）正确使用方式

展示语法或称点语法体现的就是`收/放`特性，做为值时是`放`，做为接收变量时是`收`。

```text
let hd = [1, 2, 3];
let [a, b, c] = [...hd];
console.log(a); //1
console.log(b); //2
console.log(c); //3
[...hd] = [1, 2, 3];
console.log(hd); //[1, 2, 3]
```

使用展示语法可以替代 `arguments` 来接收任意数量的参数

```text
function hd(...args) {
  console.log(args);
}
hd(1, 2, 3, "后盾人"); //[1, 2, 3, "后盾人"]
```

也可以用于接收部分参数

```text
function hd(site, ...args) {
  console.log(site, args); //后盾人 (3) [1, 2, 3]
}
hd("后盾人", 1, 2, 3);
```

使用 `...` 可以接受传入的多个参数合并为数组，下面是使用点语法进行求合计算。

```text
function sum(...params) {
	console.log(params);
	return params.reduce((pre, cur) => pre + cur);
}
console.log(sum(1, 3, 2, 4));
```

多个参数时`...参数`必须放后面，下面计算购物车商品折扣

```text
function sum(discount = 0, ...prices) {
  let total = prices.reduce((pre, cur) => pre + cur);
  return total * (1 - discount);
}
console.log(sum(0.1, 100, 300, 299));
```

### 15.函数与方法中this的不同

调用函数时 `this` 会隐式传递给函数指函数调用时的关联对象，也称之为函数的上下文。

全局环境下`this`就是 window 对象的引用

```text
<script>
  console.log(this == window); //true
</script>
```

使用严格模式时在全局函数内`this`为`undefined`

```text
var hd = '后盾人';
function get() {
  "use strict"
  return this.hd;
}
console.log(get());
//严格模式将产生错误 Cannot read property 'name' of undefined
```

函数为对象的方法时`this` 指向该对象

可以使用多种方式创建对象，下面是使用构造函数创建对象

**构造函数**

函数当被 `new` 时即为构造函数，一般构造函数中包含属性与方法。函数中的上下文指向到实例对象。

- 构造函数主要用来生成对象，里面的 this 默认就是指当前对象

```text
function User() {
  this.name = "后盾人";
  this.say = function() {
    console.log(this); //User {name: "后盾人", say: ƒ}
    return this.name;
  };
}
let hd = new User();
console.log(hd.say()); //后盾人
```

**对象字面量**

- 下例中的 hd 函数不属于对象方法所以指向`window`
- show 属于对象方法执向 `obj`对象

```text
let obj = {
  site: "后盾人",
  show() {
    console.log(this.site); //后盾人
    console.log(`this in show method: ${this}`); //this in show method: [object Object]
    function hd() {
      console.log(typeof this.site); //undefined
      console.log(`this in hd function: ${this}`); //this in hd function: [object Window]
    }
    hd();
  }
};
obj.show();
```

在方法中使用函数时有些函数可以改变 this 如`forEach`，当然也可以使用后面介绍的`apply/call/bind`

```text
let Lesson = {
  site: "后盾人",
  lists: ["js", "css", "mysql"],
  show() {
    return this.lists.map(function(title) {
      return `${this.site}-${title}`;
    }, this);
  }
};
console.log(Lesson.show());
```

也可以在父作用域中定义引用`this`的变量

```text
let Lesson = {
    site: "后盾人",
    lists: ["js", "css", "mysql"],
    show() {
      const self = this;
      return this.lists.map(function(title) {
        return `${self.site}-${title}`;
      });
    }
  };
  console.log(Lesson.show());
```

### 16.apply/call/bind

> 改变 this 指针，也可以理解为对象借用方法，就现像生活中向邻居借东西一样的事情

**原理**

---

构造函数中的`this`默认是一个空对象，然后构造函数处理后把这个空对象变得有值。

```javascript
function User(name) {
  this.name = name;
}

let hdcms = {};
User.call(hdcms, "HDCMS");
console.log(hdcms.name); //HDCMS
```

#### apply和call

call 与 apply 用于显示的设置函数的上下文，两个方法作用一样都是将对象绑定到 this，只是在传递参数上有所不同。

- apply 用数组传参
- call 需要分别传参
- 与 bind 不同 call/apply 会立即执行函数

```javascript
function show(title) {
    alert(`${title+this.name}`);
}
let lisi = {
    name: '李四'
};
let wangwu = {
    name: '王五'
};
show.call(lisi, '后盾人');
show.apply(wangwu, ['HDCMS']);
```

使用 `call` 设置函数上下文

```html
<body>
    <button message="后盾人">button</button>
    <button message="hdcms">button</button>
</body>
<script>
    function show() {
        alert(this.getAttribute('message'));
    }
    let bts = document.getElementsByTagName('button');
    for (let i = 0; i < bts.length; i++) {
        bts[i].addEventListener('click', () => show.call(bts[i]));
    }
</script>
```

##### 案例-找数组中的数值最大值

```html
let arr = [1, 3, 2, 8];
console.log(Math.max(arr)); //NaN
console.log(Math.max.apply(Math, arr)); //8
 console.log(Math.max(...arr)); //8
```

##### 实现构造函数属性继承

```html
"use strict";
function Request() {
  this.get = function(params = {}) {
    //组合请求参数
    let option = Object.keys(params)
      .map(i => i + "=" + params[i])
      .join("&");

    return `获取数据 API:${this.url}?${option}`;
  };
}
//文章控制器
function Article() {
  this.url = "article/index";
  Request.apply(this, []);
}
let hd = new Article();
console.log(
  hd.get({
    row: 10,
    start: 3
  })
);
//课程控制器
function Lesson() {
  this.url = "lesson/index";
  Request.call(this);
}
let js = new Lesson();
console.log(
  js.get({
    row: 20
  })
);
```

##### 制作显示隐藏面板

```html
<style>
    * {
        padding: 0;
        margin: 0;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    dl {
        width: 400px;
        display: flex;
        flex-direction: column;
    }

    dt {
        background: #e67e22;
        border-bottom: solid 2px #333;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    dd {
        height: 200px;
        background: #bdc3c7;
        font-size: 5em;
        text-align: center;
        line-height: 200px;
    }
</style>

<body>
    <dl>
        <dt>后盾人</dt>
        <dd>1</dd>
        <dt>hdcms</dt>
        <dd hidden="hidden">2</dd>
    </dl>
</body>
<script>
  function panel(i) {
    let dds = document.querySelectorAll("dd");
    dds.forEach(item => item.setAttribute("hidden", "hidden"));
    dds[i].removeAttribute("hidden");
  }
  document.querySelectorAll("dt").forEach((dt, i) => {
    dt.addEventListener("click", () => panel.call(null, i));
  });
</script>
```

#### bind()

**bind()是将函数绑定到某个对象，比如 a.bind(hd) 可以理解为将 a 函数绑定到 hd 对象上即 hd.a()。**

- 与 call/apply 不同 bind 不会立即执行
- bind 是复制函数形为会返回新函数

bind 是复制函数行为

```html
let a = function() {};
let b = a;
console.log(a === b); //true
//bind是新复制函数
let c = a.bind();
console.log(a == c); //false
```

绑定参数注意事项

```html
function hd(a, b) {
  return this.f + a + b;
}

//使用bind会生成新函数
let newFunc = hd.bind({ f: 1 }, 3);

//1+3+2 参数2赋值给b即 a=3,b=2
console.log(newFunc(2));
```

##### **案例-动态改变元素背景颜色，当然下面的例子也可以使用箭头函数处理**

```html
<style>
  * {
    padding: 0;
    margin: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-size: 3em;
    padding: 30px;
    transition: 2s;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #34495e;
    color: #34495e;
  }
</style>
<body>
  houdunren.com
</body>
<script>
  function Color(elem) {
    this.elem = elem;
    this.colors = ["#74b9ff", "#ffeaa7", "#fab1a0", "#fd79a8"];
    this.run = function() {
      setInterval(
        function() {
          let pos = Math.floor(Math.random() * this.colors.length);
          this.elem.style.background = this.colors[pos];
        }.bind(this),
        1000
      );
    };
  }
  let obj = new Color(document.body);
  obj.run();
</script>
```

## 九、闭包与作用域

### 1.什么是环境与作用域

- **全局环境不会被回收**
- **全局变量可以渗透到函数里面**

```html
<script>
      let hd = "aaa";
      function hdc() {
        console.log(hd);
      }
      hdc();
    </script>
```



- **函数被执行后其环境变量将从内存中删除。下面函数在每次执行后将删除函数内部的变量。**

  > 函数定义好之后：每一次调用执行都会重新生成一个新的内存地址，不进行共享，函数定义的范围是该函数内以及该函数内的子函数，不会向父级传递。

- **函数每次调用都会创建一个新作用域**

- **如果子函数被使用时父级环境将被保留**

```html
function User() {
  let a = 1;
  this.show = function() {
    console.log(a++);
  };
}
let a = new User();
a.show(); //1
a.show(); //2
let b = new User();
b.show(); //1
```

### 2.块级作用域

使用 `let/const` 可以将变量声明在块作用域中（放在新的环境中，而不是全局中）

```html
{
	let a = 9;
}
console.log(a); //ReferenceError: a is not defined
if (true) {
	var i = 1;
}
console.log(i);//1
```

```html
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);
}
```

使用var的时候没有块级作用域，使用立即执行函数模拟一个块级作用域

```html
   for (var i = 1; i <= 3; i++) {
        (function (a) {
          setTimeout(function () {
            console.log(a);
          }, 1000);
        })(i);
      }
```

### 3.闭包

闭包指子函数可以访问外部作用域变量的函数特性，即使在子函数作用域外也可以访问。如果没有闭包那么在处理事件绑定，异步请求时都会变得困难

- JS 中的所有函数都是闭包
- 闭包一般在子函数本身作用域以外执行，即延伸作用域

案例-取价格的区间：

```html
    // 利用闭包获取价格的区间：
        let b = [1, 23, 4, 5, 6, 7, 78, 6, 34, 1];
        function between(a, b) {
          return function (v) {
            return v >= a && v <= b;
          };
        }
        console.log(b.filter(between(3, 8)));
```

取课程价格的区间：

```html
 let sub = [
        {
          title: "盒子10",
          click: 111,
          price: 200,
        },
        {
          title: "盒子11",
          click: 111,
          price: 10,
        },
        {
          title: "盒子01",
          click: 111,
          price: 30,
        },
        {
          title: "盒子03",
          click: 111,
          price: 680,
        },
      ];
      function between(a, b) {
        return function (v) {
          return v.price >= a && v.price <= b;
        };
      }
      console.table(sub.filter(between(0, 100)));
```

### 3.闭包案例按钮移动

```html
let bts = document.querySelectorAll("button");
    // console.log(bts.innerHtml);
    bts.forEach(function (item) {
      item.addEventListener("click", function () {
        let left = 1;
        setInterval(function () {
          item.style.left = left++ + "px";
        }, 100);
      });
    });
```

**tips：出现的问题动画会进行抖动**

**抖动的原因：**

因为计时器函数，每使用一次，都会从left=1开始，所以会抖动

**抖动的解决方法：**

将left=1放到父级函数里面，解决这个问题，

```html
let bts = document.querySelectorAll("button");
    // console.log(bts.innerHtml);
    bts.forEach(function (item) {
        let left = 1;
      item.addEventListener("click", function () {
        setInterval(function () {
          item.style.left = left++ + "px";
        }, 100);
      });
    });
```

**新的问题：**

后续出现新的问题，点击的次数多了之后这个滑块的速度越来越快

出现的原因：多次点击之后，增加了计时器的调用，导致本来100ms调用一次，比如点击了10次之后，10ms调用一次

**解决办法：**

给整个函数的父级给一个false，整个函数添加一个if判断，如果为假的时候就不再执行偏移或者是重复定时器的使用，具体的代码如下：

```html
  let bts = document.querySelectorAll("button");
    // console.log(bts.innerHtml);
    bts.forEach(function (item) {
      let bind = false;
      item.addEventListener("click", function () {
        if (!bind) {
          bind = true;
          let left = 1;
          setInterval(function () {
            item.style.left = left++ + "px";
          }, 100);
        }
      });
    });
```

### 4.闭包使用字段排序商品

升序排序：

```html
 function order(field) {
      return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
      };
    }
    let hd = sub.sort(order("click"));
    console.table(hd);
```

使用降序的话，故进行下面的优化：

```html
function order(field, type = "asc") {
      return function (a, b) {
        if (type == "asc") return a[field] > b[field] ? 1 : -1;
        return a[field] > b[field] ? -1 : 1;
      };
    }
    let hd = sub.sort(order("price", "desc"));
    console.table(hd);
```

### 5.闭包导致的内存泄漏的问题

原因打印item的时候会找父级元素，避免耗费内存地址影响打开的速度

解决方法：后面加一个item=null

```html
 <body>
    <button message="后盾人">houdunren</button>
    <button message="hdcms">hdcms</button>
  </body>
  <script>
    let bts = document.querySelectorAll("button");
    bts.forEach(function (item) {
      let mes = item.getAttribute("message");
      item.addEventListener("click", function () {
        console.log(mes);
        // console.log(item);
      });
      item = null;
    });
  </script>
```

### 6.闭包有关this的问题

this 总是指向调用该函数的对象，即函数在搜索 this 时只会搜索到当前活动对象。

```html
let hd = {
  user: "后盾人",
  get: function() {
    return function() {
      return this.user;
    };
  }
};
console.log(hd.get()()); //undefined
```

箭头函数

```text
let hd = {
  user: "后盾人",
  get: function() {
    return () => this.user;
  }
};
console.log(hd.get()()); //undefined
```

## 十、对象

> 引用类型(内存地址一样)

### 基础



#### 属性的基本方法

```html

<script>
    let user = {
      name: "sda",
      "my age": 18,
    };
    console.log(user.name);
    console.log(uesr["name"]);
    console.log(uesr["my age"]);
    for (const key in user) {
      console.log(user[key]);
    }

    // 动态添加
    user.age = 19;
    user.get = function () {
      return `${this.name}的年龄是${this.age}`;
    };
    console.log(user.get());
    //删除
    delete user.age;
    console.log(user.get());    
  </script>
```

展开语法在对象里面的使用

```html
let user = { name: "ww", age: 22 };
    let hd = { ...user, lang: "zh" };
    console.log(hd);
    function upload(params) {
      let config = {
        type: "*.jpg,*png",
        size: 1000,
      };
      config = { ...config, ...params };
      console.log(config);
    }
    console.log(upload({ size: 99 ,type:'*gif'}));
```

#### 对象的转换

对象直接参与计算时，系统会根据计算的场景在 `string/number/default` 间转换。

- 如果声明需要字符串类型，调用顺序为 `toString > valueOf`
- 如果场景需要数值类型，调用顺序为 `valueOf > toString`
- 声明不确定时使用 `default` ，大部分对象的 `default` 会当数值使用

下面的数值对象会在数学运算时转换为 `number`

```text
let houdunren = new Number(1);
console.log(houdunren + 3); //4
```

如果参数字符串运长时会转换为 `string`

```text
let houdunren = new Number(1);
console.log(houdunren + "3"); //13
```

下面当不确定转换声明时使用 `default` ，大部分`default`转换使用 `number` 转换。

```text
let houdunren = new Number(1);
console.log(houdunren == "1"); //true
```

##### Symbol.toPrimitive

内部自定义`Symbol.toPrimitive`方法用来处理所有的转换场景

```text
let hd = {
  num: 1,
  [Symbol.toPrimitive]: function() {
    return this.num;
  }
};
console.log(hd + 3); //4
```

##### valueOf/toString

可以自定义`valueOf` 与 `toString` 方法用来转换，转换并不限制返回类型。

```text
let hd = {
  name: "后盾人",
  num: 1,
  valueOf: function() {
    console.log("valueOf");
    return this.num;
  },
  toString: function() {
    console.log("toString");
    return this.name;
  }
};
console.log(hd + 3); //valueOf 4
console.log(`${hd}向军`); //toString 后盾人向军
```

#### 解构赋值操作

##### 解构语法

> 解构是一种更简洁的赋值特性，可以理解为分解一个数据的结构，在数组章节已经介绍过

- 建议使用`var/let/const`

基本语法：

```text
//对象使用
let info = {name:'后盾人',url:'houdunren.com'};
let {name:n,url:u} = info
console.log(n); // 后盾人

//如果属性名与变量相同可以省略属性定义
let {name,url} = {name:'后盾人',url:'houdunren.com'};
console.log(name); // 后盾人
```

函数返回值直接解构到变量

```text
function hd() {
  return {
    name: '后盾人',
    url: 'houdunren.com'
  };
}
let {name: n,url: u} = hd();
console.log(n);
```

函数传参

```text
"use strict";
function hd({ name, age }) {
  console.log(name, age); //向军大叔 18
}
hd({ name: "向军", age: 18 });
```

系统函数解构练习，这没有什么意义只是加深解构印象

```text
const {random} =Math;
console.log(random());
```

##### 严格模式

非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明。

```text
// "use strict";
({name,url} = {name:'后盾人',url:'houdunren.com'});
console.log(name, url);
```

还是建议使用`let`等赋值声明

```text
"use strict";
let { name, url } = { name: "后盾人", url: "houdunren.com" };
console.log(name, url);
```

##### 简洁定义

> 如果属性名与赋值的变量名相同可以更简洁

```text
let web = { name: "后盾人",url: "houdunren.com" };
let { name, url } = web;
console.log(name); //后盾人
```

只赋值部分变量

```text
let [,url]=['后盾人','houdunren.com'];
console.log(url);//houdunren.com

let {name}= {name:'后盾人',url:'houdunren.com'};
console.log(name); //后盾人
```

可以直接使用变量赋值对象属性

```text
let name = "后盾人",url = "houdunren.com";
//标准写法如下
let hd = { name: name, url: url };
console.log(hd);  //{name: "后盾人", url: "houdunren.com"}

//如果属性和值变量同名可以写成以下简写形式
let opt = { name, url };
console.log(opt); //{name: "后盾人", url: "houdunren.com"}
```

##### 嵌套解构

可以操作多层复杂数据结构

```text
const hd = {
  name:'后盾人',
  lessons:{
    title:'JS'
  }
}
const {name,lessons:{title}}  = hd;
console.log(name,title); //后盾人 JS
```

##### 默认值

为变量设置默认值

```text
let [name, site = 'hdcms'] = ['后盾人'];
console.log(site); //hdcms

let {name,url,user='向军大叔'}= {name:'后盾人',url:'houdunren.com'};
console.log(name,user);//向军大叔
```

使用默认值特性可以方便的对参数预设

```text
function createElement(options) {
  let {
    width = '200px',
    height = '100px',
    backgroundColor = 'red'
  } = options;

  const h2 = document.createElement('h2');
  h2.style.width = width;
  h2.style.height = height;
  h2.style.backgroundColor = backgroundColor;
  document.body.appendChild(h2);
}
createElement({
	backgroundColor: 'green'
});
```

##### 函数参数

数组参数的使用

```text
function hd([a, b]) {
	console.log(a, b);
}
hd(['后盾人', 'hdcms']);
```

对象参数使用方法

```text
function hd({name,url,user='向军大叔'}) {
	console.log(name,url,user);
}
hd({name:'后盾人','url':'houdunren.com'}); //后盾人 houdunren.com
```

对象解构传参

```text
function user(name, { sex, age } = {}) {
  console.log(name, sex, age); //向军大叔 男 18
}
user("向军大叔", { sex: "男", age: 18 });
```

#### 属性管理

##### 增加属性

可以为对象添加属性

```text
let obj = {name: "后盾人"};
obj.site = "houdunren.com";
console.log(obj);
```

##### 删除属性

使用`delete` 可以删除属性（后面介绍的属性特性章节可以保护属性不被删除）

```text
let obj = { name: "后盾人" };
delete obj.name;
console.log(obj.name); //undefined
```

##### 检测属性

`hasOwnProperty`检测对象自身是否包含指定的属性，不检测原型链上继承的属性。

```text
let obj = { name: '后盾人'};
console.log(obj.hasOwnProperty('name')); //true
```

下面通过数组查看

```text
let arr = ["后盾人"];
console.log(arr);
console.log(arr.hasOwnProperty("length")); //true
console.log(arr.hasOwnProperty("concat")); //false
console.log("concat" in arr); //true
```

使用 `in` 可以在原型对象上检测

```text
let obj = {name: "后盾人"};
let hd = {
  web: "houdunren.com"
};

//设置hd为obj的新原型
Object.setPrototypeOf(obj, hd);
console.log(obj);

console.log("web" in obj); //true
console.log(obj.hasOwnProperty("web")); //false
```

##### 获取属性名

使用 `Object.getOwnPropertyNames` 可以获取对象的属性名集合

```text
let hd = { name: '后盾人', year: 2010 }
const names = Object.getOwnPropertyNames(hd)
console.log(names)
// ["name", "year"]
```

##### assign

以往我们使用类似`jQuery.extend` 等方法设置属性，现在可以使用 `Object.assign` 静态方法

从一个或多个对象复制属性

```text
"use strict";
let hd = { a: 1, b: 2 };
hd = Object.assign(hd, { f: 1 }, { m: 9 });
console.log(hd); //{a: 1, b: 2, f: 1, m: 9}
```

##### 计算属性

对象属性可以通过表达式计算定义，这在动态设置属性或执行属性方法时很好用。

```text
let id = 0;
const user = {
  [`id-${id++}`]: id,
  [`id-${id++}`]: id,
  [`id-${id++}`]: id
};
console.log(user);
```

使用计算属性为文章定义键名

```text
const lessons = [
  {
    title: "媒体查询响应式布局",
    category: "css"
  },
  {
    title: "FLEX 弹性盒模型",
    category: "css"
  },
  {
    title: "MYSQL多表查询随意操作",
    category: "mysql"
  }
];
let lessonObj = lessons.reduce((obj, cur, index) => {
  obj[`${cur["category"]}-${index}`] = cur;
  return obj;
}, {});
console.log(lessonObj); //{css-0: {…}, css-1: {…}, mysql-2: {…}}
console.log(lessonObj["css-0"]); //{title: "媒体查询响应式布局", category: "css"}
```

##### 传值操作

对象是引用类型赋值是传址操作，后面会介绍对象的深、浅拷贝操作

```text
let user = {
	name: '后盾人'
};
let hd = {
	stu: user
};
hd.stu.name = 'hdcms';
console.log(user.name);//hdcms
```

#### 遍历对象

##### 获取内容

使用系统提供的 API 可以方便获取对象属性与值

```text
const hd = {
  name: "后盾人",
  age: 10
};
console.log(Object.keys(hd)); //["name", "age"]
console.log(Object.values(hd)); //["后盾人", 10]
console.table(Object.entries(hd)); //[["name","后盾人"],["age",10]]
```

##### for/in

使用`for/in`遍历对象属性

```text
const hd = {
  name: "后盾人",
  age: 10
};
for (let key in hd) {
  console.log(key, hd[key]);
}
```

##### for/of

`for/of`用于遍历迭代对象，不能直接操作对象。但`Object`对象的`keys/`方法返回的是迭代对象。

```text
const hd = {
  name: "后盾人",
  age: 10
};
for (const key of Object.keys(hd)) {
  console.log(key);
}
```

获取所有对象属性

```text
const hd = {
  name: "后盾人",
  age: 10
};
for (const key of Object.values(hd)) {
  console.log(key);
}
```

同时获取属性名与值

```text
for (const array of Object.entries(hd)) {
  console.log(array);
}
```

使用扩展语法同时获取属性名与值

```text
for (const [key, value] of Object.entries(hd)) {
  console.log(key, value);
}
```

添加元素 DOM 练习

```text
let lessons = [
  { name: "js", click: 23 },
  { name: "node", click: 192 }
];
let ul = document.createElement("ul");
for (const val of lessons) {
  let li = document.createElement("li");
  li.innerHTML = `课程:${val.name},点击数:${val.click}`;
  ul.appendChild(li);
}
document.body.appendChild(ul);
```

#### 对象拷贝

对象赋值时复制的内存地址，所以一个对象的改变直接影响另一个

```text
let obj = {
  name: '后盾人',
  user: {
  	name: 'hdcms'
  }
}
let a = obj;
let b = obj;
a.name = 'lisi';
console.log(b.name); //lisi
```

##### 浅拷贝

使用`for/in`执行对象拷贝

```text
let obj = {name: "后盾人"};

let hd = {};
for (const key in obj) {
  hd[key] = obj[key];
}

hd.name = "hdcms";
console.log(hd);
console.log(obj);
```

`Object.assign` 函数可简单的实现浅拷贝，它是将两个对象的属性叠加后面对象属性会覆盖前面对象同名属性。

```text
let user = {
	name: '后盾人'
};
let hd = {
	stu: Object.assign({}, user)
};
hd.stu.name = 'hdcms';
console.log(user.name);//后盾人
```

使用展示语法也可以实现浅拷贝

```text
let obj = {
  name: "后盾人"
};
let hd = { ...obj };
hd.name = "hdcms";
console.log(hd);
console.log(obj);
```

##### 深拷贝

浅拷贝不会将深层的数据复制

```text
let obj = {
    name: '后盾人',
    user: {
        name: 'hdcms'
    }
}
let a = obj;
let b = obj;

function copy(object) {
    let obj = {}
    for (const key in object) {
        obj[key] = object[key];
    }
    return obj;
}
let newObj = copy(obj);
newObj.name = 'hdcms';
newObj.user.name = 'houdunren.com';
console.log(newObj);
console.log(obj);
```

是完全的复制一个对象，两个对象是完全独立的对象

```text
let obj = {
  name: "后盾人",
  user: {
    name: "hdcms"
  },
  data: []
};

function copy(object) {
  let obj = object instanceof Array ? [] : {};
  for (const [k, v] of Object.entries(object)) {
    obj[k] = typeof v == "object" ? copy(v) : v;
  }
  return obj;
}

let hd = copy(obj);
hd.data.push("向军");
console.log(JSON.stringify(hd, null, 2));
console.log(JSON.stringify(obj, null, 2));
```

#### 构建函数

##### 工厂函数

在函数中返回对象的函数称为工厂函数，工厂函数有以下优点

- 减少重复创建相同类型对象的代码
- 修改工厂函数的方法影响所有同类对象

使用字面量创建对象需要复制属性与方法结构

```text
const xj = {
  name: "向军",
  show() {
    console.log(this.name);
  }
};
const hd = {
  name: "后盾人",
  show() {
    console.log(this.name);
  }
};
```

使用工厂函数可以简化这个过程

```text
<script>
    function user(name, age) {
      return {
        name,
        age,
        show() {
          console.log(this.name + `-hpoudunren.com`);
        },
        info() {
          console.log(`${this.name}的年龄是${this.age}`);
        },
      };
    }
    let xj = user("湘军", 18);
    xj.show();
    xj.info();
  </script>
```

##### 构造函数

和工厂函数相似构造函数也用于创建对象，它的上下文为新的对象实例。

- 构造函数名每个单词首字母大写即`Pascal` 命名规范
- `this`指当前创建的对象
- 不需要返回`this`系统会自动完成
- 需要使用`new`关键词生成对象

```text
function Student(name) {
  this.name = name;
  this.show = function() {
    console.log(this.name);
  };
  //不需要返回，系统会自动返回
  // return this;
}
const lisi = new Student("李四");
lisi.show();
const xj = new Student("向军");
xj.show();
```

如果构造函数返回对象，实例化后的对象将是此对象

```text
function ArrayObject(...values) {
  const arr = new Array();
  arr.push.apply(arr, values);
  arr.string = function(sym = "|") {
    return this.join(sym);
  };
  return arr;
}
const array = new ArrayObject(1, 2, 3);
console.log(array);
console.log(array.string("-"));
```

##### 严格模式

在严格模式下方法中的`this`值为 undefined，这是为了防止无意的修改 window 对象

```text
"use strict";
function User() {
  this.show = function() {
    console.log(this);
  };
}
let hd = new User();
hd.show(); //User

let xj = hd.show;
xj(); //undefined
```

##### 内置构造

JS 中大部分数据类型都是通过构造函数创建的。

```text
const num = new Number(99);
console.log(num.valueOf());

const string = new String("后盾人");
console.log(string.valueOf());

const boolean = new Boolean(true);
console.log(boolean.valueOf());

const date = new Date();
console.log(date.valueOf() * 1);

const regexp = new RegExp("\\d+");
console.log(regexp.test(99));

let hd = new Object();
hd.name = "后盾人";
console.log(hd);
```

字面量创建的对象，内部也是调用了`Object`构造函数

```text
const hd = {
  name: "后盾人"
};
console.log(hd.constructor); //ƒ Object() { [native code] }

//下面是使用构造函数创建对象
const hdcms = new Object();
hdcms.title = "开源内容管理系统";
console.log(hdcms);
```

##### 对象函数

在`JS`中函数也是一个对象

```text
function hd(name) {}

console.log(hd.toString());
console.log(hd.length);
```

函数是由系统内置的 `Function` 构造函数创建的

```text
function hd(name) {}

console.log(hd.constructor);
```

下面是使用内置构造函数创建的函数

```text
const User = new Function(`name`,`
  this.name = name;
  this.show = function() {
    return this.name;
  };
`
);

const lisi = new User("李四");
console.log(lisi.show());
```

#### 抽象的特征

> 将复杂功能隐藏在内部，只开放给外部少量方法，更改对象内部的复杂逻辑不会对外部调用造成影响即抽象。

下面的手机就是抽象的好例子，只开放几个按钮给用户，复杂的工作封装在手机内部，程序也应该如此。

##### 问题分析

下例将对象属性封装到构造函数内部

```text
function User(name, age) {
  this.name = name;
  this.age = age;
  this.info = function() {
    return this.age > 50 ? "中年人" : "年轻人";
  };
  this.about = function() {
    return `${this.name}是${this.info()}`;
  };
}
let lisi = new User("李四", 22);
console.log(lisi.about());
```

##### 抽象的封装

上例中的方法和属性仍然可以在外部访问到，比如 `info`方法只是在内部使用，不需要被外部访问到这会破坏程序的内部逻辑。

下面使用闭包特性将对象进行抽象处理

```text
function User(name, age) {
  let data = { name, age };
  let info = function() {
    return data.age > 50 ? "中年人" : "年轻人";
  };
  this.message = function() {
    return `${data.name}是${info()}`;
  };
}
let lisi = new User("后盾人", 22);
console.log(lisi.message());
```

#### 属性的特征

>  JS 中可以对属性的访问特性进行控制。

#####  查看特征

使用 `Object.getOwnPropertyDescriptor`查看对象属性的描述。

```text
"use strict";
const user = {
  name: "向军",
  age: 18
};
let desc = Object.getOwnPropertyDescriptor(user, "name"`);
console.log(JSON.stringify(desc, null, 2));
```

使用 `Object.getOwnPropertyDescriptors`查看对象所有属性的描述

```text
"use strict";
const user = {
  name: "向军",
  age: 18
};
let desc = Object.getOwnPropertyDescriptors(user);
console.log(JSON.stringify(desc, null, 2));
```

属性包括以下四种特性

| 特性         | 说明                                                    | 默认值    |
| ------------ | ------------------------------------------------------- | --------- |
| configurable | 能否使用 delete、能否需改属性特性、或能否修改访问器属性 | true      |
| enumerable   | 对象属性是否可通过 for-in 循环，或 Object.keys() 读取   | true      |
| writable     | 对象属性是否可修改                                      | true      |
| value        | 对象属性的默认值                                        | undefined |

##### 设置特征

使用`Object.defineProperty` 方法修改属性特性，通过下面的设置属性 name 将不能被遍历、删除、修改。

```text
"use strict";
const user = {
  name: "向军"
};
Object.defineProperty(user, "name", {
  value: "后盾人",
  writable: false,
  enumerable: false,
  configurable: false
});
```

通过执行以下代码对上面配置进行测试，请分别打开注释进行测试

```text
// 不允许修改
// user.name = "向军"; //Error

// 不能遍历
// console.log(Object.keys(user));

//不允许删除
// delete user.name;
// console.log(user);

//不允许配置
// Object.defineProperty(user, "name", {
//   value: "后盾人",
//   writable: true,
//   enumerable: false,
//   configurable: false
// });
```

使用 `Object.defineProperties` 可以一次设置多个属性，具体参数和上面介绍的一样。

```text
"use strict";
let user = {};
Object.defineProperties(user, {
  name: { value: "向军", writable: false },
  age: { value: 18 }
});
console.log(user);
user.name = "后盾人"; //TypeError
```

##### 禁止添加

`Object.preventExtensions` 禁止向对象添加属性

```text
"use strict";
const user = {
  name: "向军"
};
Object.preventExtensions(user);
user.age = 18; //Error
```

`Object.isExtensible` 判断是否能向对象中添加属性

```text
"use strict";
const user = {
  name: "向军"
};
Object.preventExtensions(user);
console.log(Object.isExtensible(user)); //false
```

##### 封闭对象

> `Object.seal()`方法封闭一个对象，阻止添加新属性并将所有现有属性标记为 `configurable: false

```text
"use strict";
const user = {
  name: "后盾人",
  age: 18
};

Object.seal(user);
console.log(
  JSON.stringify(Object.getOwnPropertyDescriptors(user), null, 2)
);

Object.seal(user);
console.log(Object.isSealed(user));
delete user.name; //Error
```

> `Object.isSealed` 如果对象是密封的则返回 `true`，属性都具有 `configurable: false`。

```text
"use strict";
const user = {
  name: "向军"
};
Object.seal(user);
console.log(Object.isSealed(user)); //true
```

##### 冻结对象

`Object.freeze` 冻结对象后不允许添加、删除、修改属性，writable、configurable 都标记为`false

```
"use strict";
const user = {
  name: "向军"
};
Object.freeze(user);
user.name = "后盾人"; //Error
```

`Object.isFrozen()`方法判断一个对象是否被冻结

```text
"use strict";
const user = {
  name: "向军"
};
Object.freeze(user);
console.log(Object.isFrozen(user));
```

#### 属性访问器

getter 方法用于获得属性值，setter 方法用于设置属性，这是 JS 提供的存取器特性即使用函数来管理属性。

- 用于避免错误的赋值
- 需要动态监测值的改变
- 属性只能在访问器和普通属性任选其一，不能共同存在
- 访问器的优先级高于普通的设置属性

##### getter/setter

向对是地用户的年龄数据使用访问器监控控制

```text
"use strict";
const user = {
  data: { name: '后盾人', age: null },
  set age(value) {
    if (typeof value != "number" || value > 100 || value < 10) {
      throw new Error("年龄格式错误");
    }
    this.data.age = value;
  },
  get age() {
    return `年龄是: ${this.data.age}`;
  }
};
user.age = 99;
console.log(user.age);
```

下面使用 getter 设置只读的课程总价

```text
let Lesson = {
  lists: [
    { name: "js", price: 100 },
    { name: "mysql", price: 212 },
    { name: "vue.js", price: 98 }
  ],
  get total() {
    return this.lists.reduce((t, b) => t + b.price, 0);
  }
};
console.log(Lesson.total); //410
Lesson.total = 30; //无效
console.log(Lesson.total); //410
```

下面通过设置站网站名称与网址体验`getter/setter`批量设置属性的使用

```text
//使用访问器批量设置属性
    let web = {
      name: "dunren",
      url: "www.baidu.com",
      get site() {
        return `${this.name}的网址是${this.url}`;
      },
      set site(value) {
        [this.name, this.url] = value.split(",");
      },
    };
    web.site = "kaiyuan,www.hao123.com";
    console.log(web.site);
```

下面是设置 token 储取的示例，将业务逻辑使用`getter/setter`处理更方便，也方便其他业务的复用。

```text
let Request = {
  get token() {
    let con = localStorage.getItem('token');
    if (!con) {
    	alert('请登录后获取token')
    } else {
    	return con;
    }
  },
  set token(con) {
  	localStorage.setItem('token', con);
  }
};
// Request.token = 'houdunren'
console.log(Request.token);
```

定义内部私有属性

```text
"use strict";
const user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length <= 3) {
      throw new Error("用户名不能小于三位");
    }
    this._name = value;
  }
};
user.name = "后盾人教程";
console.log(user.name);
```

##### 访问器的描述符

使用 `defineProperty` 可以模拟定义私有属性，从而使用面向对象的抽象特性。

```text
function User(name, age) {
  let data = { name, age };
  Object.defineProperties(this, {
    name: {
      get() {
        return data.name;
      },
      set(value) {
        if (value.trim() == "") throw new Error("无效的用户名");
        data.name = value;
      }
    },
    age: {
      get() {
        return data.name;
      },
      set(value) {
        if (value.trim() == "") throw new Error("无效的用户名");
        data.name = value;
      }
    }
  });
}
let hd = new User("后盾人", 33);
console.log(hd.name);
hd.name = "向军1";
console.log(hd.name);
```

上面的代码也可以使用语法糖 `class`定义

```text
"use strict";
const DATA = Symbol();
class User {
  constructor(name, age) {
    this[DATA] = { name, age };
  }
  get name() {
    return this[DATA].name;
  }
  set name(value) {
    if (value.trim() == "") throw new Error("无效的用户名");
    this[DATA].name = value;
  }
  get age() {
    return this[DATA].name;
  }
  set age(value) {
    if (value.trim() == "") throw new Error("无效的用户名");
    this[DATA].name = value;
  }
}
let hd = new User("后盾人", 33);
console.log(hd.name);
hd.name = "向军1";
console.log(hd.name);
console.log(hd);
```

##### 闭包访问器

下面结合闭包特性对属性进行访问控制

- 下例中访问器定义在函数中，并接收参数 v
- 在 get() 中通过闭包返回 v
- 在 set() 中修改了 v，这会影响 get()访问的闭包数据 v

```text
let data = {
  name: 'houdunren.com',
}
for (const [key, value] of Object.entries(data)) {
  observer(data, key, value)
}

function observer(data, key, v) {
  Object.defineProperty(data, key, {
    get() {
      return v
    },
    set(newValue) {
      v = newValue
    },
  })
}
data.name = '后盾人'
console.dir(data.name) //后盾人
```

#### 代理拦截

代理（拦截器）是对象的访问控制，`setter/getter` 是对单个对象属性的控制，而代理是对整个对象的控制。

- 读写属性时代码更简洁
- 对象的多个属性控制统一交给代理完成
- 严格模式下 `set` 必须返回布尔值

##### 方法

```text
"use strict";
const hd = { name: "后盾人" };
const proxy = new Proxy(hd, {
  get(obj, property) {
    return obj[property];
  },
  set(obj, property, value) {
    obj[property] = value;
    return true;
  }
});
proxy.age = 10;
console.log(hd);
```

##### 代理函数

如果代理以函数方式执行时，会执行代理中定义 `apply` 方法。

- 参数说明：函数，上下文对象，参数

下面使用 `apply` 计算函数执行时间

```text
function factorial(num) {
  return num == 1 ? 1 : num * factorial(num - 1);
}
let proxy = new Proxy(factorial, {
  apply(func, obj, args) {
    console.time("run");
    func.apply(obj, args);
    console.timeEnd("run");
  }
});
proxy.apply(this, [1, 2, 3]);
```

##### 截取字符

下例中对数组进行代理，用于截取标题操作

```text
const stringDot = {
  get(target, key) {
    const title = target[key].title;
    const len = 5;
    return title.length > len
      ? title.substr(0, len) + ".".repeat(3)
      : title;
  }
};
const lessons = [
  {
    title: "媒体查询响应式布局",
    category: "css"
  },
  {
    title: "FLEX 弹性盒模型",
    category: "css"
  },
  {
    title: "MYSQL多表查询随意操作",
    category: "mysql"
  }
];
const stringDotProxy = new Proxy(lessons, stringDot);
console.log(stringDotProxy[0]);
```

##### 双向绑定

下面通过代理实现`vue` 等前端框架的数据绑定特性特性。

![Untitled](https://doc.houdunren.com/assets/img/Untitled-5190245.5087f5bc.gif)

```text
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>双向数据绑定</title>
  </head>
  <body>
    <input type="text" v-model="content" />
    <input type="text" v-model="title" />
    <br /><br />
    <input type="text" v-model="title" />
    <h4 v-bind="title">这里也会发生更新</h4>
  </body>
  <script>
    function View() {
      let proxy = new Proxy(
        {},
        {
          get(obj, property) {},
          set(obj, property, value) {
            // console.log(value);
            document
              .querySelectorAll(`[v-model="${property}"]`)
              .forEach((item) => {
                item.value = value;
              });
            document
              .querySelectorAll(`[v-bind="${property}"]`)
              .forEach((item) => {
                item.innerHTML = value;
              });
          },
        }
      );
      this.init = function () {
        const els = document.querySelectorAll("[v-model]");
        els.forEach((item) => {
          item.addEventListener("keyup", function () {
            proxy[this.getAttribute("v-model")] = this.value;
          });
        });
      };
    }
    new View().init();
  </script>
</html>

```

##### 表单验证

![Untitled](https://doc.houdunren.com/assets/img/Untitled-1059910.07b17933.gif)

```text
<style>
  body {
    padding: 50px;
    background: #34495e;
  }
  input {
    border: solid 10px #ddd;
    height: 30px;
  }
  .error {
    border: solid 10px red;
  }
</style>
<body>
  <input type="text" validate rule="max:12,min:3" />
  <input type="text" validate rule="max:3,isNumber" />
</body>
<script>
  "use strict";
  //验证处理类
  class Validate {
    max(value, len) {
      return value.length <= len;
    }
    min(value, len) {
      return value.length >= len;
    }
    isNumber(value) {
      return /^\d+$/.test(value);
    }
  }

  //代理工厂
  function makeProxy(target) {
    return new Proxy(target, {
      get(target, key) {
        return target[key];
      },
      set(target, key, el) {
        const rule = el.getAttribute("rule");
        const validate = new Validate();
        let state = rule.split(",").every(rule => {
          const info = rule.split(":");
          return validate[info[0]](el.value, info[1]);
        });
        el.classList[state ? "remove":"add"]("error");
        return true;
      }
    });
  }

  const nodes = makeProxy(document.querySelectorAll("[validate]"));
  nodes.forEach((item, i) => {
    item.addEventListener("keyup", function() {
      nodes[i] = this;
    });
  });
</script>
```

#### JSON

- json 是一种轻量级的数据交换格式，易于人阅读和编写。
- 使用`json` 数据格式是替换 `xml` 的最佳方式，主流语言都很好的支持`json` 格式。所以 `json` 也是前后台传输数据的主要格式。
- json 标准中要求使用双引号包裹属性，虽然有些语言不强制，但使用双引号可避免多程序间传输发生错误语言错误的发生。

##### 声明定义

**基本结构**

```text
let hd = {
  "title": "后盾人",
  "url": "houdunren.com",
  "teacher": {
  	"name": "向军大叔",
  }
}
console.log(hd.teacher.name);
```

**数组结构**

```text
let lessons = [
  {
    "title": '媒体查询响应式布局',
    "category": 'css',
    "click": 199
  },
  {
    "title": 'FLEX 弹性盒模型',
    "category": 'css',
    "click": 12
  },
  {
    "title": 'MYSQL多表查询随意操作',
    "category": 'mysql',
    "click": 89
  }
];

console.log(lessons[0].title);
```

##### 序列化

序列化是将 `json` 转换为字符串，一般用来向其他语言传输使用。

```text
let hd = {
  "title": "后盾人",
  "url": "houdunren.com",
  "teacher": {
  	"name": "向军大叔",
  }
}
console.log(JSON.stringify(hd));
//{"title":"后盾人","url":"houdunren.com","teacher":{"name":"向军大叔"}}
```

根据第二个参数指定保存的属性

```text
console.log(JSON.stringify(hd, ['title', 'url']));
//{"title":"后盾人","url":"houdunren.com"}
```

第三个是参数用来控制 TAB 数量，如果字符串则为前导字符。

```text
let hd = {
  "title": "后盾人",
  "url": "houdunren.com",
  "teacher": {
  	"name": "向军大叔",
  }
}
console.log(JSON.stringify(hd, null, 4));
```

为数据添加 `toJSON` 方法来自定义返回格式

```text
let hd = {
    "title": "后盾人",
    "url": "houdunren.com",
    "teacher": {
        "name": "向军大叔",
    },
    "toJSON": function () {
        return {
            "title": this.url,
            "name": this.teacher.name
        };
    }
}
console.log(JSON.stringify(hd)); //{"title":"houdunren.com","name":"向军大叔"}
```

##### 反序列化

使用 `JSON.parse` 将字符串 `json` 解析成对象

```text
let hd = {
  "title": "后盾人",
  "url": "houdunren.com",
  "teacher": {
  	"name": "向军大叔",
  }
}
let jsonStr = JSON.stringify(hd);
console.log(JSON.parse(jsonStr));
```

使用第二个参数函数来对返回的数据二次处理

```text
let hd = {
  title: "后盾人",
  url: "houdunren.com",
  teacher: {
    name: "向军大叔"
  }
};
let jsonStr = JSON.stringify(hd);
console.log(
  JSON.parse(jsonStr, (key, value) => {
    if (key == "title") {
      return `[推荐] ${value}`;
    }
    return value;
  })
);
```

##### Reflect

**Reflect** 是一个内置的对象，它提供拦截 JavaScript 操作的方法

- `Reflect`并非一个构造函数，所以不能通过 new 运算符对其进行调用

## 原型与继承

---

### 原型基础

每个对象都有一个原型`prototype`对象，通过函数创建的对象也将拥有这个原型对象。原型是一个指向对象的指针。

- 可以将原型理解为对象的父亲，对象从原型对象继承来属性
- 原型就是对象除了是某个对象的父母外没有什么特别之处
- 所有函数的原型默认是 `Object`的实例，所以可以使用`toString/toValues/isPrototypeOf` 等方法的原因
- 使用原型对象为多个对象共享属性或方法
- 如果对象本身不存在属性或方法将到原型上查找
- 使用原型可以解决，通过构建函数创建对象时复制多个函数造成的内存占用问题
- 原型包含 `constructor` 属性，指向构造函数
- 对象包含 `__proto__` 指向他的原型对象

下例使用的就是数组原型对象的 `concat` 方法完成的连接操作

```text
let hd = ["a"];
console.log(hd.concat("b"));
console.log(hd);
```

默认情况下创建的对象都有原型

![image-20191205163626698](https://doc.houdunren.com/assets/img/image-20191205163626698.7576e2ba.png)

```text
let hd = { name: "后盾人" };
console.log(hd);
```

以下 x、y 的原型都为元对象 Object，即 JS 中的根对象

```text
let x = {};
let y = {};
console.log(Object.getPrototypeOf(x) == Object.getPrototypeOf(y)); //true
```

我们也可以创建一个极简对象（纯数据字典对象）没有原型（原型为 null)

![image-20191205163809670](https://doc.houdunren.com/assets/img/image-20191205163809670.f473ca14.png)

```text
let hd = { name: 3 };
console.log(hd.hasOwnProperty("name"));

let xj = Object.create(null, {
  name: {
    value: "向军"
  }
});
console.log(xj.hasOwnProperty("name")); //Error

//Object.keys是静态方法，不是原型方法所以是可以使用的
console.log(Object.keys(xj));
```

函数拥有多个原型，`prototype` 用于实例对象使用，`__proto__`用于函数对象使用

```text
function User() {}
User.__proto__.view = f
unction() {
  console.log("User function view method");
};
User.view();

User.prototype.show = function() {
  console.log("后盾人");
};
let hd = new User();
hd.show();
console.log(User.prototype == hd.__proto__);
```

下面是原型关系分析，与方法继承的示例

![image-20191208003927158](https://doc.houdunren.com/assets/img/image-20191208003927158.2f7f84ab.png)

```text
let hd = new Object();
hd.name = "后盾人";
Object.prototype.show = function() {
  console.log("hodunren.com");
};
hd.show();

function User() {}
let xj = new User();
xj.show();
User.show();
```

下面是使用构造函数创建对象的原型体现

- 构造函数拥有原型
- 创建对象时构造函数把原型赋予对象

![image-20191010023843179](https://doc.houdunren.com/assets/img/image-20191010023843179.58edd59f.png)

```text
function User() {}
let xj = new User();
console.log(xj.__proto__ == User.prototype);
```

下面使用数组会产生多级继承即原型链

![image-20191120174145258](https://doc.houdunren.com/assets/img/image-20191120174145258.aec2cd6d.png)

```text
let hd = [];
console.log(hd);
console.log(hd.__proto__ == Array.prototype);

let str = "";
console.log(str.__proto__ == String.prototype);
```

下面使用 `setPrototypeOf` 与 `getPrototypeOf` 获取与设置原型

```text
let hd = {};
let parent = { name: "parent" };
Object.setPrototypeOf(hd, parent);
console.log(hd);
console.log(Object.getPrototypeOf(hd));
```

使用自定义构造函数创建的对象的原型体现

![image-20191120174956195](https://doc.houdunren.com/assets/img/image-20191120174956195.700031e6.png)

```text
function User() {}
let hd = new User();
console.log(hd);
```

constructor 存在于 prototype 原型中，用于指向构建函数的引用。

```text
function hd() {
  this.show = function() {
    return "show method";
  };
}
const obj = new hd(); //true
console.log(obj instanceof hd);

const obj2 = new obj.constructor();
console.dir(obj2.show()); //show method
```

使用对象的 `constructor` 创建对象

```text
function User(name, age) {
  this.name = name;
  this.age = age;
}

function createByObject(obj, ...args) {
  const constructor = Object.getPrototypeOf(obj).constructor;
  return new constructor(...args);
}

let hd = new User("后盾人");
let xj = createByObject(hd, "向军", 12);
console.log(xj);

```

##### 原型的检测

instanceof 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

```text
function A() {}
function B() {}
function C() {}

const c = new C();
B.prototype = c;
const b = new B();
A.prototype = b;
const a = new A();

console.dir(a instanceof A); //true
console.dir(a instanceof B); //true
console.dir(a instanceof C); //true
console.dir(b instanceof C); //true
console.dir(c instanceof B); //false
```

使用`isPrototypeOf`检测一个对象是否是另一个对象的原型链中

```text
const a = {};
const b = {};
const c = {};

Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);

console.log(b.isPrototypeOf(a)); //true
console.log(c.isPrototypeOf(a)); //true
console.log(c.isPrototypeOf(b)); //true
```

##### 属性的遍历

使用`in` 检测原型链上是否存在属性，使用 `hasOwnProperty` 只检测当前对象

```text
let a = { url: "houdunren" };
let b = { name: "后盾人" };
Object.setPrototypeOf(a, b);
console.log("name" in a);
console.log(a.hasOwnProperty("name"));
console.log(a.hasOwnProperty("url"));
```

使用 `for/in` 遍历时同时会遍历原型上的属性如下例

```text
let hd = { name: "后盾人" };
let xj = Object.create(hd, {
  url: {
    value: "houdunren.com",
    enumerable: true
  }
});
for (const key in xj) {
  console.log(key);
}
```

`hasOwnProperty` 方法判断对象是否存在属性，而不会查找原型。所以如果只想遍历对象属性使用以下代码

```text
let hd = { name: "后盾人" };
let xj = Object.create(hd, {
  url: {
    value: "houdunren.com",
    enumerable: true
  }
});
for (const key in xj) {
  if (xj.hasOwnProperty(key)) {
    console.log(key);
  }
}
```

##### 借用原型

使用 `call` 或 `apply` 可以借用其他原型方法完成功能。

下面的 xj 对象不能使用`max`方法，但可以借用 hd 对象的原型方法

```text
let hd = {
  data: [1, 2, 3, 4, 5]
};
Object.setPrototypeOf(hd, {
  max: function() {
    return this.data.sort((a, b) => b - a)[0];
  }
});
console.log(hd.max());

let xj = {
  lessons: { js: 100, php: 78, node: 78, linux: 125 },
  get data() {
    return Object.values(this.lessons);
  }
};
console.log(hd.__proto__.max.apply(xj));
```

上例中如果方法可以传参，那就可以不在 `xj` 对象中定义 `getter` 方法了

```text
let hd = {
  data: [1, 2, 3, 4, 5]
};
Object.setPrototypeOf(hd, {
  max: function(data) {
    return data.sort((a, b) => b - a)[0];
  }
});
console.log(hd.max(hd.data));

let xj = {
  lessons: { js: 100, php: 78, node: 78, linux: 125 }
};
console.log(hd.__proto__.max.call(xj, Object.values(xj.lessons)));
```

因为 `Math.max` 就是获取最大值的方法，所以代码可以再次优化

```text
let hd = {
  data: [1, 2, 3, 4, 5]
};
console.log(Math.max.apply(null, Object.values(hd.data)));

let xj = {
  lessons: { js: 100, php: 78, node: 78, linux: 125 }
};
console.log(Math.max.apply(xj, Object.values(xj.lessons)));
```

下面是获取设置了 `class` 属性的按钮，但 DOM 节点不能直接使用数组的`filter` 等方法，但借用数组的原型方法就可以操作了。

```text
<body>
  <button message="后盾人" class="red">后盾人</button>
  <button message="hdcms">hdcms</button>
</body>
<script>
  let btns = document.querySelectorAll("button");
    // console.log(btns);
    btns = [].filter.call(btns, (item) => {
      return item.hasAttribute("class");
    });
    console.log(btns[0].innerHTML);
</script>
```



### 原型总结

#### prototype

函数也是对象也有原型，函数有 `prototype` 属性指向他的原型

为构造函数设置的原型指，当使用构造函数创建对象时把这个原型赋予给这个对象

```text
function User(name) {
  this.name = name;
}
User.prototype = {
  show() {
    return this.name;
  }
};
let xj = new User("向军");
console.log(xj.show());
```

函数默认`prototype` 指包含一个属性 `constructor` 的对象，`constructor` 指向当前构造函数

```text
function User(name) {
  this.name = name;
}
let xj = new User("向军");
console.log(xj);
console.log(User.prototype.constructor == User); //true
console.log(xj.__proto__ == User.prototype); //true

let lisi = new xj.constructor("李四");
console.log(lisi.__proto__ == xj.__proto__); //true
```

原型中保存引用类型会造成对象共享属性，所以一般只会在原型中定义方法。

```text
function User() {}
User.prototype = {
  lessons: ["JS", "VUE"]
};
const lisi = new User();
const wangwu = new User();

lisi.lessons.push("CSS");

console.log(lisi.lessons); //["JS", "VUE", "CSS"]
console.log(wangwu.lessons); //["JS", "VUE", "CSS"]
```

为 Object 原型对象添加方法，将影响所有函数

```text
<body>
  <button onclick="this.hide()">后盾人</button>
</body>
<script>
  Object.prototype.hide = function() {
    this.style.display = "none";
  };
</script>
```

了解了原型后可以为系统对象添加方法，比如为字符串添加了一截断函数。

- 不能将系统对象的原型直接赋值

```text
String.prototype.truncate = function (len = 5) {
	return this.length <= len ? this : this.substr(0, len) + '...';
}
console.log('后盾人每天不断视频教程'.truncate(3)); //后盾人...
```

#### Object.create

使用`Object.create`创建一个新对象时使用现有对象做为新对象的原型对象

![image-20191205153548377](https://doc.houdunren.com/assets/img/image-20191205153548377.2d54d9db.png)

使用`Object.create` 设置对象原型

```text
let user = {
  show() {
    return this.name;
  }
};

let hd = Object.create(user);
hd.name = "向军";
console.log(hd.show());
```

强以在设置时使用第二个参数设置新对象的属性

```text
let user = {
  show() {
    return this.name;
  }
};
let hd = Object.create(user, {
  name: {
    value: "后盾人"
  }
});
console.log(hd);
```

#### `__proto__`

在实例化对象上存在 __proto__ 记录了原型，所以可以通过对象访问到原型的属性或方法。

- `__proto__` 不是对象属性，理解为`prototype` 的 `getter/setter` 实现，他是一个非标准定义
- `__proto__` 内部使用`getter/setter` 控制值，所以只允许对象或 null
- 建议使用 `Object.setPrototypeOf` 与`Object.getProttoeypOf` 替代 `__proto__`

下面修改对象的 `__proto__` 是不会成功的，因为`_proto__` 内部使用`getter/setter` 控制值，所以只允许对象或 null

```text
let xj = {};
xj.__proto__ = "向军";
console.log(xj);
```

下面定义的`__proto__` 就会成功，因为这是一个极简对象，没有原型对象所以不会影响`__proto__`赋值。

```text
let hd = Object.create(null);
hd.__proto__ = "向军";
console.log(hd); //{__proto__: "向军"}
```

下面通过改变对象的 `__proto__` 原型对象来实现继承，继承可以实现多层,

![image-20191205121620242](https://doc.houdunren.com/assets/img/image-20191205121620242.d709e234.png)

```text
let hd = {
  name: "后盾人"
};
let houdunren = {
  show() {
    return this.name;
  }
};
let xj = {
  handle() {
    return `用户: ${this.name}`;
  }
};
houdunren.__proto__ = xj;
hd.__proto__ = houdunren;
console.log(hd.show());
console.log(hd.handle());
console.log(hd);
```

构造函数中的 `__proto__` 使用

```text
function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.show = function () {
	return `姓名:${this.name}，年龄:${this.age}`;
};
let lisi = new User('李四', 12);
let xiaoming = new User('小明', 32);
console.log(lisi.__proto__ == User.prototype); //true
```

可以使用 `__proto__` 或 `Object.setPrototypeOf` 设置对象的原型，使用`Object.getProttoeypOf` 获取对象原型。

```text
function Person() {
  this.getName = function() {
    return this.name;
  };
}
function User(name, age) {
  this.name = name;
  this.age = age;
}
let lisi = new User("李四", 12);
Object.setPrototypeOf(lisi, new Person());
console.log(lisi.getName()); //李四
```

对象设置属性，只是修改对象属性并不会修改原型属性，使用`hasOwnProperty` 判断对象本身是否含有属性并不会检测原型。

使用 `in` 会检测原型与对象，而 `hasOwnProperty` 只检测对象，所以结合后可判断属性是否在原型中

```text
<script>
    let a = { url: "houdunren" };
    let b = { name: "demo" };
    Object.prototype.web = "hundunren";
    // in不止检测对象还检测原型链
    // console.log("web" in a);
    Object.setPrototypeOf(a, b);
    console.log("name" in a);
    // hasOwnProperty只遍历对象
    console.log(a.hasOwnProperty("url"));
  </script>
```

#### 使用建议

通过前介绍我们知道可以使用多种方式设置原型，下面是按时间顺序的排列

1. `prototype` 构造函数的原型属性
2. `Object.create` 创建对象时指定原型
3. `__proto__` 声明自定义的非标准属性设置原型，解决之前通过 `Object.create` 定义原型，而没提供获取方法
4. `Object.setPrototypeOf` 设置对象原型

> 这几种方式都可以管理原型，一般以我个人情况来讲使用 `prototype` 更改构造函数原型，使用 `Object.setPrototypeOf` 与 `Object.getPrototypeOf` 获取或设置原型。



### 构造函数

#### 原型属性

构造函数在被`new` 时把构造函数的原型（prototype）赋值给新对象。如果对象中存在属性将使用对象属性，不再原型上查找方法。

- 构造函数只会产生一个原型对象

```text
function hd() {
  this.show = function() {
    return "show in object";
  };
}
hd.prototype.show = function() {
  return "show in prototype";
};
const obj = new hd();
console.log(obj.show());
```

对象的原型引用构造函数的原型对象，是在创建对象时确定的，当构造函数原型对象改变时会影响后面的实例对象。

```text
function hd() {}
hd.prototype.name = "hdcms";
const obj1 = new hd();
console.log(obj1.name); //hdcms

hd.prototype = {
  name: "后盾人"
};
const obj2 = new hd();
console.dir(obj2.name); //后盾人
```

#### constructor

构造函数的原型中包含属性 `constructor` 指向该构造函数，以下代码说明了这一点

```text
function User(name) {
  this.name = name;
}
let hd = new User("后盾人");
let xj = new hd.constructor("向军");
console.log(xj);
```

以下代码直接设置了构造函数的原型将造成 `constructor` 丢失

```text
function User(name) {
  this.name = name;
}
User.prototype = {
  show: function() {}
};

let hd = new User("后盾人");
let xj = new hd.constructor("向军");
console.log(xj); //String {"向军"}
```

正确的做法是要保证原型中的 `constructor`指向构造函数

```text
   function User(name) {
      this.name = name;
    }
    User.prototype = {
      constructor: User,
      show() {
        console.log(this.name);
      },
      get() {
        console.log("get..");
      },
    };
    let lisi = new User("李四");
    lisi.show();
    lisi.get();
```

#### this

>  this指向调用属性的对象，和原型没有关系

#### 使用优化

使用构造函数会产生函数复制造成内存占用，及函数不能共享的问题。

```text
function User(name) {
  this.name = name;
  this.get = function() {
    return this.name;
  };
}
let lisi = new User("小明");
let wangwu = new User("王五");
console.log(lisi.get == wangwu.get); //false
```

体验通过原型定义方法不会产生函数复制

```text
function User(name) {
  this.name = name;
}
User.prototype.get = function() {
  return "后盾人" + this.name;
};
let lisi = new User("小明");

let wangwu = new User("王五");
console.log(lisi.get == wangwu.get); //true
//通过修改原型方法会影响所有对象调用，因为方法是共用的
lisi.__proto__.get = function() {
  return "后盾人" + this.name;
};
console.log(lisi.get());
console.log(wangwu.get());
```

下面演示使用原型为多个实例共享属性

```text
function User(name, age) {
  this.name = name;
  this.age = age;
  this.show = () => {
  	return `你在${this.site}的姓名:${this.name}，年龄:${this.age}`;
  }
}
User.prototype.site = '后盾人';
let lisi = new User('李四', 12);
let xiaoming = new User('小明', 32);

console.log(lisi.show()); //你在后盾人的姓名:李四，年龄:12
console.log(xiaoming.show()); //你在后盾人的姓名:小明，年龄:32
```

将方法定义在原型上为对象共享，解决通过构造函数创建对象函数复制的内存占用问题

```text
function User(name) {
    this.name = name;
}
User.prototype.get = function () {
    return '后盾人' + this.name;
}
let lisi = new User('小明');

let wangwu = new User('王五');
console.log(lisi.get == wangwu.get); //true
//通过修改原型方法会影响所有对象调用，因为方法是共用的
lisi.__proto__.get = function () {
    return '后盾人' + this.name;
}
console.log(lisi.get());
console.log(lisi.get());
console.log(wangwu.get());
```

使用`Object.assign`一次设置原型方法来复用，后面会使用这个功能实现 Mixin 模式

```text
function User(name, age) {
  this.name = name;
  this.age = age;
}
Object.assign(User.prototype, {
  getName() {
      return this.name;
  },
  getAge() {
      return this.age;
  }
});
let lisi = new User('李四', 12);
let xiaoming = new User('小明', 32);
console.log(lisi.getName()); //李四
console.log(lisi.__proto__)
```

### 继承与多态

> 继承是原型的继承，不是改变构造函数的原型

#### 继承的实现

下面使用`Object.create` 创建对象，做为`Admin、Member`的原型对象来实现继承。

![image-20191120214826701](https://doc.houdunren.com/assets/img/image-20191120214826701.a67be927.png)

```text
function User() {}
User.prototype.getUserName = function() {};

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.role = function() {};

function Member() {}
Member.prototype = Object.create(User.prototype);
Member.prototype.email = function() {};
console.log(new Admin());
console.log(new Member());
```

不能使用以下方式操作，因为这样会改变 User 的原型方法，这不是继承，这是改变原型

```text
...
function User() {}
User.prototype.getUserName = function() {};

function Admin() {}
Admin.prototype = User.prototype;
Admin.prototype.role = function() {};
...
```

继承的实现方法：

1. `Member.prototype.__proto__ = User.prototype;`与顺序无关

   ```html
   function User() {}
       User.prototype.name = function () {
         console.log("user.name");
       };
   
       function Member() {}
       Member.prototype.__proto__ = User.prototype;
       Member.prototype.role = function () {
         console.log("member.name");
       };
       function Admin() {}
       Admin.prototype.__proto__ = User.prototype;
       Admin.prototype.role = function () {
         console.log("admin.name");
       };
       let a = new Admin();
       a.role();
   ```

2. 正确写法`Admin.prototype = Object.create(User.prototype);`

   ```html
   function Admin() {}
   Admin.prototype = Object.create(User.prototype);
       Admin.prototype.role = function () {
         console.log("admin.name");
       };
       let a = new Admin();
       a.role();
   
   ```

使用方法二进行继承的时候，原型的constructor会消失，在新建之后需要将这个constructor进行补上

代码如下：

```html
   function Admin() {}
    Admin.prototype.role = function () {
      console.log("admin.name");
    };
    Admin.prototype.constructor=Admin;
    Admin.prototype = Object.create(User.prototype);
    let a = new Admin();
	a.role();
```

存在的问题是constructor可以被遍历，使用下面的方法可以解决：

```html
  Object.defineProperty(Admin.prototype, "constructor", {
      value: Admin,
      enumerable: false,
    });
```

#### 方法的重写

不用的时候进行重写

```html
<script>
    function User() {}
    User.prototype.show = function () {
      console.log("user.name");
    };
    User.prototype.site = function () {
      return "houdunren";
    };
    function Admin() {}
    Admin.prototype = Object.create(User.prototype);
    Admin.prototype.constructor = Admin;
    Admin.prototype.show = function () {
        //重写父级以及子类
      console.log(User.prototype.site() + ":" + "admin.show");
    };
    let hd = new Admin();
    hd.show();
  </script>
```

#### 多态

根据多种不同的形态产生不同的结果，下而会根据不同形态的对象得到了不同的结果。

```text
function User() {}
User.prototype.show = function() {
  console.log(this.description());
};

function Admin() {}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.description = function() {
  return "管理员在此";
};

function Member() {}
Member.prototype = Object.create(User.prototype);
Member.prototype.description = function() {
  return "我是会员";
};

function Enterprise() {}
Enterprise.prototype = Object.create(User.prototype);
Enterprise.prototype.description = function() {
  return "企业帐户";
};

for (const obj of [new Admin(), new Member(), new Enterprise()]) {
  obj.show();
}
```

### 深挖继承

> 继承是为了复用代码，继承的本质是将原型指向到另一个对象

将继承的过程进行封装：

```html
function extend(sub, sup) {
      sub.prototype = Object.create(sup.prototype);
      Object.defineProperty(sub.prototype, "constructor", {
        value: sub,
        enumerable: false,
      });
    }
```

案例如下：

```html
 function extend(sub, sup) {
      sub.prototype = Object.create(sup.prototype);
      Object.defineProperty(sub.prototype, "constructor", {
        value: sub,
        enumerable: false,
      });
    }
function User(name, age) {
      this.name = name;
      this.age = age;
    }
    function Admin(...args) {
      User.apply(this, args);
    }
    User.prototype.show = function () {
      console.log(this.name, this.age);
    };
    extend(Admin, User);
    let admin = new Admin("demo", 11);
    admin.show();
```

#### 对象工厂

```html
function User(name, age) {
      this.name = name;
      this.age = age;
    }

    User.prototype.show = function () {
      console.log(this.name, this.age);
    };

    function admin(name, age) {
      const instance = Object.create(User.prototype);
      User.call(instance, name, age);
      return instance;
    }
    let hd = admin("lis", 14);
    hd.show();
```

#### 多继承

>  js本身没有多继承的方法

mixin方法实现多继承

```html
function extend(sub, sup) {
      sub.prototype = Object.create(sup.prototype);
      Object.defineProperty(sub.prototype, "constructor", {
        value: sub,
        enumerable: false,
      });
    }
    const address = {
      getAddress() {
        console.log("address");
      },
    };
    const Credit = {
      total() {
        console.log("Credit");
      },
    };
    function User(name, age) {
      this.name = name;
      this.age = age;
    }

    User.prototype.show = function () {
      console.log(this.name, this.age);
    };
    function Admin(name, age) {
      User.call(this.name, this.age);
    }
    extend(Admin, User);
    Admin.prototype = Object.assign(Admin.prototype, address, Credit);
    let admin = new Admin("demo", 19);
    admin.show();
    admin.total();
    admin.getAddress();
```

里面的功能类的继承可以继续继承别的功能，比如：

```html
 const Credit = {
        __proto__:address,
      total() {
        console.log(super.getAddress()+"Credit");
      },
    };
```

#### 选项卡案例

使用 `call/apply` 制作选项卡

![Untitled](https://doc.houdunren.com/assets/img/Untitled.71754c70.gif)

```text
<style>
  * {
    padding: 0;
    margin: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  main {
    width: 400px;
    flex-direction: column;
    position: relative;
    margin-right: 20px;
  }

  main nav {
    display: flex;
    height: 50px;
    align-items: center;
  }

  main nav a {
    background: #95a5a6;
    margin-right: px;
    padding: 10px 20px;
    border: solid 1px #333;
    color: #fff;
    text-decoration: none;
  }

  main nav a:first-of-type {
    background: #e67e22;
  }

  section {
    height: 200px;
    width: 100%;
    background: #f1c40f;
    position: absolute;
    font-size: 5em;
    display: none;
  }

  .hd-tab section:first-of-type {
    display: block;
  }

  section:nth-child(even) {
    background: #27ae60;
  }
</style>

<body>
  <main class="tab1">
    <nav>
      <a href="javascript:;">后盾人</a>
      <a href="javascript:;">hdcms</a>
    </nav>
    <section>1</section>
    <section>2</section>
  </main>
  <main class="tab2">
    <nav>
      <a href="javascript:;">后盾人</a>
      <a href="javascript:;">hdcms</a>
    </nav>
    <section>1</section>
    <section>2</section>
  </main>
</body>

<script>
	//继承工厂
  function extend(sub, sup) {
    sub.prototype = Object.create(sup.prototype);
    sub.prototype.constructor = sub;
  }

  //动作类
  function Animation() {}
  Animation.prototype.show = function() {
    this.style.display = "block";
  };
  //隐藏所有元素
  Animation.prototype.hide = function() {
    this.style.display = "none";
  };
  //必变元素集合背景
  Animation.prototype.background = function(color) {
    this.style.background = color;
  };

	//选项卡类
  function Tab(tab) {
    this.tab = tab;
    this.links = null;
    this.sections = null;
  }
  extend(Tab, Animation);
  Tab.prototype.run = function() {
    this.links = this.tab.querySelectorAll("a");
    this.sections = this.tab.querySelectorAll("section");
    this.bindEvent();
    this.action(0);
  };
  //绑定事件
  Tab.prototype.bindEvent = function() {
    this.links.forEach((el, i) => {
      el.addEventListener("click", () => {
        this.reset();
        this.action(i);
      });
    });
  };
  //点击后触发动作
  Tab.prototype.action = function(i) {
    this.background.call(this.links[i], "#e67e22");
    this.show.call(this.sections[i]);
  };
  //重置link与section
  Tab.prototype.reset = function() {
    this.links.forEach((el, i) => {
      this.background.call(el, "#95a5a6");
      this.hide.call(this.sections[i]);
    });
  };

  new Tab(document.querySelector(".tab1")).run();
  new Tab(document.querySelector(".tab2")).run();
</script>
```

## 类的使用

### 基础知识

#### 定义方法

```html
class User {
      show() {}
      get() {
        console.log("后盾人");
      }
    }
    let hd = new User();
    hd.get();
```

#### 构造函数

使用 `constructor` 构造函数传递参数，下例中`show`为构造函数方法，`getName`为原型方法

- `constructor` 会在 new 时自动执行

```text
class User {
  constructor(name) {
    this.name = name;
    this.show = function() {};
  }
  getName() {
    return this.name;
  }
}
const xj = new User("向军大叔");
console.log(xj);
```

构造函数用于传递对象的初始参数，但不是必须定义的，如果不设置系统会设置如下类型

- 子构造器中调用完`super` 后才可以使用 `this`
- 至于 `super` 的概念会在后面讲到

```text
constructor(...args) {
  super(...args);
}
```

#### 原理

> 类其实是函数
>
> 在类中定义的方法也保存在函数原型中

#### 属性的定义

在 `class` 中定义的属性为每个`new` 出的对象独立创建，下面定义了 `site` 与 `name` 两个对象属性

```text
class User {
  site = "后盾人";
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.site + ":" + this.name);
  }
}
let hd = new User("向军");
hd.show();
```

#### class与funaction的差异

`class` 是使用函数声明类的语法糖，但也有些区别

`class` 中定义的方法不能被遍历。新建class类的时候。默认将原型中的可遍历属性设置为false

```text
class User {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}
let xj = new User("向军");
//不会枚举出show属性
for (const key in xj) {
  console.log(key);
}

function Hd(name) {
  this.name = name;
}
Hd.prototype.show = function() {
  console.log(this.name);
};
let obj = new Hd("后盾人");
for (const key in obj) {
  console.log(key);
}
```

> class声明一个类相比于函数声明更好一点，默认是在严格模式下生成

### 静态访问

#### 静态属性

- 静态属性即为类设置属性，而不是为生成的对象设置

- 如果一个值要给所有的对象都要使用，就定义成一个静态属性

- 在 `class` 中为属性添加 `static` 关键字即声明为静态属性

```text
class Request {
  static HOST = "https://www.houdunren.com";
  
  query(api) {
    return Request.HOST + "/" + api;
  }
}
let request = new Request();
```

#### 静态方法

指通过类访问不能使用对象访问的方法，比如系统的`Math.round()`就是静态方法

- 一般来讲方法不需要对象属性参与计算就可以定义为静态方法

下面是静态方法实现原理

```text
  class User {
      show() {
        console.log("prototype.show");
      }
      static show = function () {
        console.log("static.show");
      };
    }
    User.show();
    let hd = new User();
    hd.show();
    
```

> 类调用的时候显示的静态方法，对象调用的时候使用原型的方法

在 `class` 内声明的方法前使用 `static` 定义的方法即是静态方法

```text
class User {
  constructor(name) {
    this.name = name;
  }
  static create(name) {
    return new User(name);
  }
}
const xj = User.create("向军大叔");
console.log(xj);
```

```html
class Member {
      constructor(name,age,sex) {
        this.name = name;
        this.age=age;
        this.sex=sex;
      }
      //静态方法，创建一个对象
      static create(...args) {
        return new this(...args);
      }
    }
    let xj = Member.create("xiangjuy",11,'nv');
    console.log(xj);
```

下面使用静态方法在课程类中的使用

```text
const data = [
  { name: "js", price: 100 },
  { name: "mysql", price: 212 },
  { name: "vue.js", price: 98 }
];
class Lesson {
  constructor(data) {
    this.model = data;
  }
  get price() {
    return this.model.price;
  }
  get name() {
    return this.model.name;
  }
  //批量生成对象
  static createBatch(data) {
    return data.map(item => new Lesson(item));
  }
  //最贵的课程
  static MaxPrice(collection) {
    return collection.sort((a, b) => b.price() - a.price())[0];
  }
}
const lessons = Lesson.createBatch(data);
console.log(lessons);
console.log(Lesson.MaxPrice(lessons).name);
```

#### 访问器

使用访问器可以对对象的属性进行访问控制，下面是使用访问器对私有属性进行管理。

##### 语法介绍

- 使用访问器可以管控属性，有效的防止属性随意修改
- 访问器就是在函数前加上 `get/set`修饰，操作属性时不需要加函数的扩号，直接用函数名

```text
class User {
  constructor(name) {
    this.data = { name };
  }
  get name() {
    return this.data.name;
  }
  set name(value) {
    if (value.trim() == "") throw new Error("invalid params");
    this.data.name = value;
  }
}
let hd = new User("向军大叔");
hd.name = "后盾人";
console.log(hd.name);
```

##### 访问控制

设置对象的私有属性有多种方式，包括后面章节介绍的模块封装。

##### public

`public` 指不受保护的属性，在类的内部与外部都可以访问到

```text
class User {
  url = "houdunren.com";
  constructor(name) {
    this.name = name;
  }
}
let hd = new User("后盾人");
console.log(hd.name, hd.url);
```

#### 命名保护

> 命名保护可以刻意的进行修改

将属性定义为以 `_` 开始，来告诉使用者这是一个私有属性，请不要在外部使用。

- 外部修改私有属性时可以使用访问器 `setter` 操作
- 但这只是提示，就像吸烟时烟盒上的吸烟有害健康，但还是可以抽的

```text
class Article {
  _host = "https://houdunren.com";

  set host(url) {
    if (!/^https:\/\//i.test(url)) {
      throw new Error("网址错误");
    }
    this._host = url;
  }
  
  lists() {
    return `${this._host}/article`;
  }
}
let article = new Article();
console.log(article.lists()); //https://houdunren.com/article
article.host = "https://hdcms.com";
console.log(article.lists()); //https://hdcms.com/article
```

继承时是可以使用的

```text
class Common {
  _host = "https://houdunren.com";
  set host(url) {
    if (!/^https:\/\//i.test(url)) {
      throw new Error("网址错误");
    }
    this._host = url;
  }
}
class Article extends Common {
  lists() {
    return `${this._host}/article`;
  }
}
let article = new Article();
console.log(article.lists()); //https://houdunren.com/article
article.host = "https://hdcms.com";
console.log(article.lists()); //https://hdcms.com/article
```

##### Symbol

下面使用 `Symbol`定义私有访问属性，即在外部通过查看对象结构无法获取的属性

```text
const protecteds = Symbol();
class Common {
  constructor() {
    this[protecteds] = {};
    this[protecteds].host = "https://houdunren.com";
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error("非常网址");
    }
    this[protecteds].host = url;
  }
  get host() {
    return this[protecteds].host;
  }
}
class User extends Common {
  constructor(name) {
    super();
    this[protecteds].name = name;
  }
  get name() {
    return this[protecteds].name;
  }
}
let hd = new User("后盾人");
hd.host = "https://www.hdcms.com";
// console.log(hd[Symbol()]);
console.log(hd.name);
```

##### WeakMap

**WeakMap** 是一组键/值对的集，下面利用`WeakMap`类型特性定义私有属性

```text
const _host = new WeakMap();
class Common {
  constructor() {
    _host.set(this, "https://houdunren.com");
  }
  set host(url) {
    if (!/^https:\/\//i.test(url)) {
      throw new Error("网址错误");
    }
    _host.set(this, url);
  }
}
class Article extends Common {
  constructor() {
    super();
  }
  lists() {
    return `${_host.get(this)}/article`;
  }
}
let article = new Article();
console.log(article.lists()); //https://houdunren.com/article
article.host = "https://hdcms.com";
console.log(article.lists()); //https://hdcms.com/article
```

也可以统一定义私有属性

```text
const protecteds = new WeakMap();
class Common {
  constructor() {
    protecteds.set(this, {
      host: "https://houdunren.com",
      port: "80"
    });
  }
  set host(url) {
    if (!/^https:\/\//i.test(url)) {
      throw new Error("网址错误");
    }
    protecteds.set(this, { ...protecteds.get(this), host: url });
  }
}
class Article extends Common {
  constructor() {
    super();
  }
  lists() {
    return `${protecteds.get(this).host}/article`;
  }
}
let article = new Article();
console.log(article.lists()); //https://houdunren.com/article
article.host = "https://hdcms.com";
console.log(article.lists()); //https://hdcms.com/article
```

##### private

`private` 指私有属性，只在当前类可以访问到，并且不允许继承使用

- 为属性或方法名前加 `#` 为声明为私有属性
- 私有属性只能在声明的类中使用

下面声明私有属性 `#host` 与私有方法 `check` 用于检测用户名

```text
class User {
  //private
  #host = "https://houdunren.com";
  constructor(name) {
    this.name = name ;
    this.#check(name);
  }
  set host(url) {
    if (!/^https?:/i.test(url)) {
      throw new Error("非常网址");
    }
    this.#host = url;
  }
  get host() {
    return this.#host;
  }
  #check = () => {
    if (this.name.length <= 5) {
      throw new Error("用户名长度不能小于五位");
    }
    return true;
  };
}
let hd = new User("后盾人在线教程");
hd.host = "https://www.hdcms.com";
console.log(hd.host);
```

#### 属性的继承

属性继承的原型如下

```text
function User(name) {
  this.name = name;
}
function Admin(name) {
  User.call(this, name); 
}
let hd = new Admin("后盾人");
console.log(hd);
```

这就解释了为什么在子类构造函数中要先执行`super`

```text
class User {
  constructor(name) {
    this.name = name;
  }
}
class Admin extends User {
  constructor(name) {
    super(name);
  }
}
let hd = new Admin("后盾人");
console.log(hd);
```

原生的继承主要是操作原型链，实现起来比较麻烦，使用 `class` 就要简单的多了。

- 继承时必须在子类构造函数中调用 super() 执行父类构造函数
- super.show() 执行父类方法

下面是子类继承了父类的方法`show`

```text
class Person {
  constructor(name) {
    this.name = name;
  }
  show() {
    return `后盾人会员: ${this.name}`;
  }
}
class User extends Person {
  constructor(name) {
    super(name);
  }
  run() {
    return super.show();
  }
}
const xj = new User("向军");
console.dir(xj.run());
```

可以使用 `extends` 继承表达式返回的类

```text
function controller() {
  return class {
    show() {
      console.log("user.show");
    }
  };
}
class Admin extends controller() {
  info() {
    this.show();
  }
}
let hd = new Admin();
console.dir(hd);
```

##### super

表示从当前原型中执行方法，

- super 一直指向当前对象

下面是使用 `this` 模拟`super`，会有以下问题

- 但`this`指向当前对象，结果并不是 `admin`的`name`值

```text
let user = {
  name: "user",
  show() {
    return this.name;
  }
};
let admin = {
  __proto__: user,
  name: "admin",
  show() {
    return this.__proto__.show();
  }
};
console.log(admin.show());
```

为了解决以上问题，需要调用父类方法时传递`this`

```text
let user = {
  name: "user",
  show() {
    return this.name;
  }
};
let admin = {
  __proto__: user,
  name: "admin",
  show() {
    return this.__proto__.show.call(this);
  }
};
console.log(admin.show());
```

上面看似结果正常，但如果是多层继承时，会出现新的问题

- 因为始终传递的是当前对象`this` ，造成从 `this` 原型循环调用

```text
let common = {
  show() {
    console.log("common.init");
  }
};
let user = {
  __proto__: common,
  name: "user",
  show() {
    return this.__proto__.show.call(this);
  }
};
let admin = {
  __proto__: user,
  name: "admin",
  get() {
    return this.__proto__.show.call(this);
  }
};
console.log(admin.get());
```

为了解决以上问题 `js` 提供了 `super` 关键字

- 使用 `super` 调用时，在所有继承中 `this` 始终为调用对象
- `super` 是用来查找当前对象的原型，而不像上面使用 `this` 查找原型造成死循环
- 也就是说把查询原型方法的事情交给了 `super`，`this` 只是单纯的调用对象在各个继承中使用

```text
let common = {
  show() {
    return this.name;
  }
};
let user = {
  __proto__: common,
  name: "user",
  show() {
    return super.show(this);
  }
};
let admin = {
  __proto__: user,
  name: "admin",
  get() {
    return super.show();
  }
};
console.log(admin.get());
```

`super` 只能在类或对象的方法中使用，而不能在函数中使用，下面将产生错误

```text
let user = {
  name: "user",
  show() {
    return this.name;
  }
};
let admin = {
  __proto__: user,
  name: "admin",
  get: function() {
    return super.show();
  }
};
console.log(admin.get()); //Uncaught SyntaxError: 'super' keyword unexpected here
```

##### 多重继承

如果子类里面定义了构造函数，一定要定义super，this一定在super下面

##### 父类方法

使用`super` 可以执行父类方法

- 不添加方法名是执调用父类构造函数

```text
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Admin extends User {
  constructor(name) {
    super(name);
  }
}
const hd = new Admin("后盾人");
console.log(hd.getName());
```

下面是通过父类方法获取课程总价

```text
class Controller {
  sum() {
    return this.data.reduce((t, c) => t + c.price, 0);
  }
} 
class Lesson extends Controller {
  constructor(lessons) {
    super();
    this.data = lessons;
  }
  info() {
    return {
      totalPrice: super.sum(),
      data: this.data
    };
  }
}
let data = [
  { name: "js", price: 100 },
  { name: "mysql", price: 212 },
  { name: "vue.js", price: 98 }
];
const hd = new Lesson(data);
console.log(hd.info());
```

##### 方法覆盖

子类存在父类同名方法时使用子类方法

```text
class User {
  constructor(name) {
    this.name = name;
  }
  say() {
    return this.name;
  }
}
class Admin extends User {
  constructor(name) {
    super(name);
  }
  say() {
    return "后盾人：" + super.say();
  }
}
const xj = new Admin("向军");
console.log(xj.say());
```

下面是覆盖父类方法，只获取课程名称

```text
class Controller {
  say() {
    return this.name;
  }
  total() {
    return this.data.reduce((t, c) => t + c.price, 0);
  }
  getByKey(key) {
    return this.data.filter(item => item.name.includes(key));
  }
}
class Lesson extends Controller {
  constructor(lessons) {
    super();
    this.data = lessons;
  }
  getByKey(key) {
    return super.getByKey(key).map(item => item.name);
  }
}
let data = [
  { name: "js", price: 100 },
  { name: "mysql", price: 212 },
  { name: "vue.js", price: 98 }
];
const hd = new Lesson(data);
console.log(hd.getByKey("js"));
```

##### 静态继承

静态的属性和方法也是可以被继承使用的，下面是原理分析

```text
function User() {}
User.site = "后盾人";
User.url = function() {
  return "houdunren.com";
};
function Admin() {}
Admin.__proto__ = User;
console.dir(Admin);
console.log(Admin.url());
```

下面使用 `class` 来演示静态继承

```text
class User {
  static site = "后盾人";
  static host() {
    return "houdunren.com";
  }
}
class Admin extends User {}
console.dir(Admin);
```

##### 对象检测

###### instanceof

使用 `instanceof` 用于检测，下面是在原型中的分析（已经在原型与继承中讲过）

```text
function User() {}
function Admin() {}
Admin.prototype = Object.create(User.prototype);
let hd = new Admin();
console.log(hd instanceof Admin); //true
console.log(hd instanceof User); //true

console.log(hd.__proto__ == Admin.prototype);
console.log(hd.__proto__.__proto__ == User.prototype);
```

下面是递归检测原型的代码，帮助你分析 `instanceof` 的原理

```text
function checkPrototype(obj, constructor) {
  if (!obj.__proto__) return false;
  if (obj.__proto__ == constructor.prototype) return true;
  return checkPrototype(obj.__proto__, constructor);
}
```

`class` 内部实现就是基于原型，所以使用`instanceof` 判断和上面原型是一样的

```text
class User {}
class Admin extends User {}
let hd = new Admin();
console.log(hd instanceof Admin);
console.log(hd instanceof User);
```

###### isPrototypeOf

使用 `isPrototypeOf` 判断一个对象是否在另一个对象的原型链中，下面是原理分析

```text
const a = {};
const b = {
  __proto__: a
};
const c = {
  __proto__: b
};
console.log(a.isPrototypeOf(b)); //true
console.log(a.isPrototypeOf(c)); //true
```

下面在使用 `class` 语法中使用

```text
class User {}
class Admin extends User {}
let hd = new Admin();
console.log(Admin.prototype.isPrototypeOf(hd));
console.log(User.prototype.isPrototypeOf(hd));
```

##### 继承内置类

<script>
    class Arr extends Array {
      constructor(...args) {
        super(...args);
      }
      first() {
        return this[0];
      }
      max() {
        return this.sort((a, b) => b - a)[0];
      }
      add(item) {
        this.push(item);
      }
      remove(value) {
        let pos = this.findIndex((item) => item == value);
        this.splice(pos, 1);
      }
    }
    let hd = new Arr(1, 2, 323, 432, 4, 4, 554, 65464, 561, 11);
    console.log(hd.push(1111));
    console.log(hd);
    hd.remove(544);
    console.log(hd);
  </script>

##### 多继承mixin

关于`mixin` 的使用在原型章节已经讨论过，在`class` 使用也是相同的原理

`JS`不能实现多继承，如果要使用多个类的方法时可以使用`mixin`混合模式来完成。

- `mixin` 类是一个包含许多供其它类使用的方法的类
- `mixin` 类不用来继承做为其它类的父类

> 其他语言也有类似的操作比如`php` 语言中可以使用 `trait` 完成类似操作

```text
const Tool = {
  max(key) {
    return this.data.sort((a, b) => b[key] - a[key])[0];
  }
};

class Lesson {
  constructor(lessons) {
    this.lessons = lessons;
  }
  get data() {
    return this.lessons;
  }
}

Object.assign(Lesson.prototype, Tool);
const data = [
  { name: "js", price: 100 },
  { name: "mysql", price: 212 },
  { name: "vue.js", price: 98 }
];
let hd = new Lesson(data);
console.log(hd.max("price"));
```

##### 实例操作

![Untitled](https://doc.houdunren.com/assets/img/Untitled-6121570.ae02deb6.gif)

```text
<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
  }
  body {
    padding: 30px;
  }
  .slide {
    width: 300px;
    display: flex;
    flex-direction: column;
    /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); */
  }
  .slide dt {
    height: 30px;
    background: #34495e;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 10px;
    cursor: pointer;
  }
  .slide dt:first-of-type {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .slide dd {
    height: 100px;
    background: #f1c40f;
    overflow: hidden;
  }
  .slide dd div {
    padding: 10px;
  }
  .slide dd:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>
<body>
  <div class="slide s1">
    <dt>后盾人</dt>
    <dd>
      <div>houdunren.com</div>
    </dd>
    <dt>后盾人</dt>
    <dd>
      <div>hdcms.com</div>
    </dd>
    <dt>后盾人</dt>
    <dd>
      <div>hdcms.com</div>
    </dd>
  </div>
</body>

<script>
  class Animation {
    constructor(el) {
      this.el = el;
      this.timeout = 5;
      this.isShow = true;
      this.defaultHeight = this.height;
    }
    hide(callback) {
      this.isShow = false;
      let id = setInterval(() => {
        if (this.height <= 0) {
          clearInterval(id);
          callback && callback();
          return;
        }
        this.height = this.height - 1;
      }, this.timeout);
    }
    show(callback) {
      this.isShow = false;
      let id = setInterval(() => {
        if (this.height >= this.defaultHeight) {
          clearInterval(id);
          callback && callback();
          return;
        }
        this.height = this.height + 1;
      }, this.timeout);
    }
    get height() {
      return window.getComputedStyle(this.el).height.slice(0, -2) * 1;
    }
    set height(height) {
      this.el.style.height = height + "px";
    }
  }
  class Slide {
    constructor(el) {
      this.el = document.querySelector(el);
      this.links = this.el.querySelectorAll("dt");
      this.panels = [...this.el.querySelectorAll("dd")].map(
        item => new Panel(item)
      );
      this.bind();
    }
    bind() {
      this.links.forEach((item, i) => {
        item.addEventListener("click", () => {
          this.action(i);
        });
      });
    }
    action(i) {
      Panel.hideAll(Panel.filter(this.panels, i), () => {
        this.panels[i].show();
      });
    }
  }
  class Panel extends Animation {
    static num = 0;
    static hideAll(items, callback) {
      if (Panel.num > 0) return;
      items.forEach(item => {
        Panel.num++;
        item.hide(() => {
          Panel.num--;
        });
      });
      callback && callback();
    }
    static filter(items, i) {
      return items.filter((item, index) => index != i);
    }
  }
  let hd = new Slide(".s1");
</script>
```

## 模块化编程

把不同的功能拆分成独立的文件，开放部分的接口

生产环境中一般使用打包工具如 `webpack` 构建，他提供更多的功能。但学习完本章节后会再学习打包工具会变得简单。

- 模块就是一个独立的文件，里面是函数或者类库
- 虽然 JS 没有命名空间的概念，使用模块可以解决全局变量冲突
- 模块需要隐藏内部实现，只对外开发接口
- 模块可以避免滥用全局变量，造成代码不可控
- 模块可以被不同的应用使用，提高编码效率

### 实现的原理

在过去 JS 不支持模块时我们使用`AMD/CMD（浏览器端使用）`、`CommonJS（Node.js使用）`、`UMD(两者都支持)`等形式定义模块。

AMD 代表性的是 `require.js`，CMD 代表是淘宝的 `seaJS` 框架。

下面通过定义一个类似 `require.js` 的 `AMD` 模块管理引擎，来体验模块的工作原理。

> 向军大叔写的`hdjs` 使用的是 AMD 规范构建

```text
let module = (function() {
  //模块列表集合
  const moduleLists = {};
  function define(name, modules, action) {
    modules.map((m, i) => {
      modules[i] = moduleLists[m];
    });
    //执行并保存模块
    moduleLists[name] = action.apply(null, modules);
  }

  return { define };
})();

//声明模块不依赖其它模块
module.define("hd", [], function() {
  return {
    show() {
      console.log("hd module show");
    }
  };
});

//声明模块时依赖其它模块
module.define("xj", ["hd"], function(hd) {
  hd.show();
});
```

### 模块的基本使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>基础知识</title>
  </head>
  <body></body>
  <script type="module">
    import { hd, arr, show } from "./1.js";
    show();
    console.log(arr);
  </script>
</html>

```

```js
let hd="hdcms";
let arr=[1,123,12,312,22,321];
function show(){
    console.log("show,method");
}
export{hd,arr,show}
```

### 延迟解析和严格模式

模块总是会在所有 html 解析后才执行，下面的模块代码可以看到后加载的 `button` 按钮元素。

- 建议为用户提供加载动画提示，当模块运行时再去掉动画

```text
<body>
  <script type="module">
    console.log(document.querySelector("button")); //Button
  </script>
  <script>
    console.log(document.querySelector("button")); //undefined
  </script>
  <button>后盾人</button>
</body>
```

#### 严格模式

模块默认运行在严格模式，以下代码没有使用声明语句将报错

```text
<script type="module">
	hd = "houdunren"; // Error
</script>
```

下面的 `this` 也会是 `undefined`

```text
<script>
  console.log(this); //Window
</script>
<script type="module">
  console.log(this); //undefiend
</script>
```

### 模块的作用域

模块都有独立的顶级作用域，下面的模块不能互相访问

```text
<script type="module">
  let hd = "houdunren.com";
</script>

<script type="module">
  alert(hd); // Error
</script>
```

单独文件作用域也是独立的，下面的模块 `1.2.js` 不能访问模块 `1.1.js` 中的数据

```text
<script type="module" src="1.1.js"></script>
<script type="module" src="1.2.js"></script>

文件内容如下
# 1.1.js
let hd = "houdunren";

# 1.2.js
console.log(hd)
```

### 模块欲解析

模块在导入时只执行一次解析，之后的导入不会再执行模块代码，而使用第一次解析结果，并共享数据。

- 可以在首次导入时完成一些初始化工作
- 如果模块内有后台请求，也只执行一次即可

引入多入`hd.js` 脚本时只执行一次

```text
<script type="module" src="hd.js"></script>
<script type="module" src="hd.js"></script>

#hd.js内容如下
console.log("houdunren.com");
```

下面在导入多次 `hd.js` 时只解析一次

```text
<script type="module">
  import "./hd.js";
  import "./hd.js";
</script>

# hd.js内容如下
console.log("houdunren.com");
```

### 导入导出

ES6 使用基于文件的模块，即一个文件一个模块。

- 使用`export` 将开发的接口导出
- 使用`import` 导入模块接口
- 使用`*`可以导入全部模块接口
- 导出是以引用方式导出，无论是标量还是对象，即模块内部变量发生变化将影响已经导入的变量

> 有关于模块打包知识请在 后盾人搜索 `webpack`

#### 导出模块

下面定义模块 `modules/houdunren.js` ，使用 `export` 导出模块接口，没有导出的变量都是模块私有的。

下面是对定义的 `hd.js` 模块，分别导出内容

```text
export const site = "后盾人";
export const func = function() {
  return "is a module function";
};
export class User {
  show() {
    console.log("user.show");
  }
}
```

下面定义了`hd.js` 模块，并使用指量导出

```text
const site = "后盾人";
const func = function() {
  return "is a module function";
};
class User {
  show() {
    console.log("user.show");
  }
}
export { site, func, User };
```

#### 具名导入

下面导入上面定义的 `hd.js` 模块，分别导入模块导出的内容

```text
<script type="module">
  import { User, site, func } from "./hd.js";
  console.log(site);
  console.log(User);
</script>
```

像下面这样在 `{}` 中导入是错误的，模块默认是在顶层静态导入，这是为了分析使用的模块方便打包

```text
if (true) {
  import { site, func } from "./hd.js"; // Error
}
```

#### 批量导入

如果要导入的内容比较多，可以使用 `*` 来批量导入。

```text
<script type="module">
  import * as api from "./hd.js";
  console.log(api.site);
  console.log(api.User);
</script>
```

#### 导入建议

因为以下几点，我们更建议使用明确导入方式

- 使用`webpack` 构建工具时，没有导入的功能会删除节省文件大小
- 可以更清晰知道都使用了其他模块的哪些功能

#### 别名

导入的别名

```html
import { hd as hdd } from "./1.js";
```

导出的别名：

```html
export{hd as hdd,arr,show}
```

#### 默认导出

很多时候模块只是一个类，也就是说只需要导入一个内容，这地可以使用默认导入。

使用`default` 定义默认导出的接口，导入时不需要使用 `{}`

- 可以为默认导出自定义别名
- 只能有一个默认导出
- 默认导出可以没有命名

##### 单个导出

下面是`hd.js` 模块内容，默认只导出一个类。并且没有对类命名，这是可以的

```text
export default class {
  static show() {
    console.log("User.method");
  }
}
```

从程序来讲如果将一个导出命名为 `default` 也算默认导出

```text
class User {
  static show() {
    console.log("User.method");
  }
}
export { User as default };
```

导入时就不需要使用 `{}` 来导入了

```text
<script type="module">
  import User from "./hd.js";
  User.show();
</script>
```

默认导出的功能可以使用任意变量接收

```text
<script type="module">
  import hd from "./hd.js";
  hd.show();
</script>
```

##### 混合导出

模块可以存在默认导出与命名导出。

使用`export default` 导出默认接口，使用 `export {}` 导入普通接口

```text
const site = "后盾人";
const func = function() {
  console.log("is a module function");
};
export default class {
  static show() {
    console.log("user.show");
  }
}
export { site, func };
```

也可以使用以下方式导出模块

```text
const site = "后盾人";
const func = function() {
  console.log("is a module function");
};
class User {
  static show() {
    console.log("user.show");
  }
}
export { site, func, User as default };
```

导入默认接口时不需要使用 `{}` ，普通接口还用 `{}` 导入

```text
<script type="module">
	//可以将 hd 替换为任何变量
  import hd from "./hd.js";
  import { site } from "./hd.js";
  console.log(site);
  hd.show();
</script>
```

可以使用一条语句导入默认接口与常规接口

```text
import show, { name } from "/modules/houdunren.js";
```

也可以使用别名导入默认导出

```text
import { site, default as hd } from "./hd.js";
console.log(site);
hd.show();
```

如果是批量导入时，使用 `default` 获得默认导出

```text
<script type="module">
  import * as api from "./hd.js";
  console.log(api.site);
  api.default.show();
</script>
```

#### 导出合并

可以将导入的模块重新导出使用，比如项目模块比较多如下所示，这时可以将所有模块合并到一个入口文件中。

这样只需要使用一个模块入口文件，而不用关注多个模块文件

```text
|--hd.js
|--houdunren.js
...
```

#### 实际使用

下面是 `hd.js` 模块内容

```text
const site = "后盾人";
const func = function() {
  console.log("is a module function");
};
export { site, func };
```

下面是 `houdunren.js` 模块内容

```text
export default class {
  static get() {
    console.log("houdunren.js.get");
  }
}
```

下面是 `index.js` 模块内容，使用 `*` 会将默认模块以 `default` 导出

```text
export * as hd from "./hd.js";
// 默认模块需要单独导出
export { default as houdunren } from "./houdunren.js";
// 以下方式导出默认模块是错误的
// export houdunren from "./houdunren.js";
```

使用方法如下

```text
<script type="module">
  import * as api from "./index.js";
  console.log(api);
  api.houdunren.get();
  console.log(api.hd.site);
</script>
```

### 动态加载

使用 `import` 必须在顶层静态导入模块，而使用`import()` 函数可以动态导入模块，它返回一个 `promise` 对象。

#### 静态导入

使用 `import` 顶层静态导入，像下面这样在 `{}` 中导入是错误的，这是为了分析使用的模块方便打包，所以系统禁止这种行为

```text
if (true) {
  import { site, func } from "./hd.js"; // Error
}
```

#### 动态使用

测试用的 `hd.js` 模块内容如下

```text
const site = "后盾人";
const func = function() {
  console.log("is a module function");
};
export { site, func };
```

使用 `import()` 函数可以动态导入，实现按需加载

```text
<script>
  if (true) {
    let hd = import("./hd.js").then(module => {
      console.log(module.site);
    });
  }
</script>
```

下面是在点击事件发生后按需要加载模块

```text
<button>后盾人</button>
<script>
  document.querySelector("button").addEventListener("click", () => {
    let hd = import("./hd.js").then(module => {
      console.log(module.site);
    });
  });
</script>
```

因为是返回的对象可以使用解构语法

```text
<button>后盾人</button>
<script>
  document.querySelector("button").addEventListener("click", () => {
    let hd = import("./hd.js").then(({ site, func }) => {
      console.log(site);
    });
  });
</script>
```

| export function show(){}                         | 导出函数         |
| ------------------------------------------------ | ---------------- |
| export const name='后盾人'                       | 导出变量         |
| export class User{}                              | 导出类           |
| export default show                              | 默认导出         |
| const name = '后盾人' export {name}              | 导出已经存在变量 |
| export {name as hd_name}                         | 别名导出         |
| import defaultVar from 'houdunren.js'            | 导入默认导出     |
| import {name,show} from 'a.j'                    | 导入命名导出     |
| Import {name as hdName,show} from 'houdunren.js' | 别名导入         |
| Import * as api from 'houdunren.js'              | 导入全部接口     |

### 编译打包

编译指将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

首先登录 `https://nodejs.org/en/` 官网下载安装`Node.js`，我们将使用其他的 npm 命令，npm 用来安装第三方类库。

在命令行输入 `node -v` 显示版本信息表示安装成功。

> 有关详细 webpack 视频教程，请登录后盾人网站检索

#### 安装配置

使用以下命令生成配置文件 `package.json`

```text
npm init -y
```

修改`package.json`添加打包命令

```text
...
"main": "index.js",
"scripts": {
	"dev": "webpack --mode development --watch"
},
...
```

安装 webpack 工具包，如果安装慢可以使用淘宝 [cnpm (opens new window)](https://npm.taobao.org/)命令

```text
npm i webpack webpack-cli --save-dev
```

#### 目录结构

```text
index.html
--dist #压缩打包后的文件
--src
----index.js  #入口
----style.js //模块
```

index.html 内容如下

```text
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <script src="dist/main.js"></script>
  </body>
</html>
```

index.js 内容如下

```text
import style from "./style";
new style().init();
```

style.js

```text
export default class User {
  constructor() {}
  init() {
    document.body.style.backgroundColor = "green";
  }
}
```

#### 执行打包

运行以下命令将生成打包文件到 `dist`目录，因为在命令中添加了 `--watch`参数，所以源文件编辑后自动生成打包文件。

```text
npm run dev
```

## 正则表达式

### 基础知识

#### 创建方法

##### 字面量创建

使用`//`包裹的字面量创建方式是推荐的作法，但它不能在其中使用变量

```text
let hd = "houdunren.com";
console.log(/u/.test(hd));//true
```

下面尝试使用 `a` 变量时将不可以查询

```text
let hd = "houdunren.com";
let a = "u";
console.log(/a/.test(hd)); //false
```

虽然可以使用 `eval` 转换为 js 语法来实现将变量解析到正则中，但是比较麻烦，所以有变量时建议使用下面的对象创建方式

```text
let hd = "houdunren.com";
let a = "u";
console.log(eval(`/${a}/`).test(hd)); //true
```

##### 对象创建

当正则需要动态创建时使用对象方式

```text
let hd = "houdunren.com";
let web = "houdunren";
let reg = new RegExp(web);
console.log(reg.test(hd)); //true
```

根据用户输入高亮显示内容，支持用户输入正则表达式

```text
<body>
  <div id="content">houdunren.com</div>
</body>
<script>
  const content = prompt("请输入要搜索的内容，支持正则表达式");
  const reg = new RegExp(content, "g");
  let body = document
    .querySelector("#content")
    .innerHTML.replace(reg, str => {
      return `<span style="color:red">${str}</span>`;
    });
  document.body.innerHTML = body;
</script>
```

通过对象创建正则提取标签

```text
<body>
  <h1>houdunren.com</h1>
  <h1>hdcms.com</h1>
</body>

<script>
function element(tag) {
  const html = document.body.innerHTML;
  let reg = new RegExp("<(" + tag + ")>.+</\\1>", "g");
  return html.match(reg);
}
console.table(element("h1"));
```

#### 选择符

`|` 这个符号带表选择修释符，也就是 `|` 左右两侧有一个匹配到就可以

检测电话是否是上海或北京的坐机

```text
let tel = "010-12345678";
//错误结果：只匹配 | 左右两边任一结果
console.log(tel.match(/010|020\-\d{7,8}/));

//正确结果：所以需要放在原子组中使用
console.log(tel.match(/(010|020)\-\d{7,8}/));
```

匹配字符是否包含`houdunren` 或 `hdcms`

```text
const hd = "houdunren";
console.log(/houdunren|hdcms/.test(hd)); //true

```

#### 字符转义

转义用于改变字符的含义，用来对某个字符有多种语义时的处理。

假如有这样的场景，如果我们想通过正则查找`/`符号，但是 `/`在正则中有特殊的意义。如果写成`///`这会造成解析错误，所以要使用转义语法 `/\//`来匹配。

```text
const url = "https://www.houdunren.com";
console.log(/https:\/\//.test(url)); //true
```

使用 `RegExp` 构建正则时在转义上会有些区别，下面是对象与字面量定义正则时区别

```text
let price = 12.23;
//含义1: . 除换行外任何字符 	含义2: .普通点
//含义1: d 字母d   					含义2: \d 数字 0~9
console.log(/\d+\.\d+/.test(price));

//字符串中 \d 与 d 是一样的，所以在 new RegExp 时\d 即为 d
console.log("\d" == "d");

//使用对象定义正则时，可以先把字符串打印一样，结果是字面量一样的定义就对了
console.log("\\d+\\.\\d+");
let reg = new RegExp("\\d+\\.\\d+");
console.log(reg.test(price));
```

下面是网址检测中转义符使用

```text
let url = "https://www.houdunren.com";
console.log(/https?:\/\/\w+\.\w+\.\w+/.test(url));
```

#### 边界约束

使用字符边界符用于控制匹配内容的开始与结束约定。

| 边界符 | 说明                         |
| ------ | ---------------------------- |
| ^      | 匹配字符串的开始             |
| $      | 匹配字符串的结束，忽略换行符 |

匹配内容必须以`www`开始

```text
const hd = "www.houdunren.com";
console.log(/^www/.test(hd)); //true
```

匹配内容必须以`.com`结束

```text
const hd = "www.houdunren.com";
console.log(/\.com$/.test(hd)); //true
```

检测用户名长度为 3~6 位，且只能为字母。如果不使用 `^与$` 限制将得不到正确结果

```text
<body>
  <input type="text" name="username" />
</body>

<script>
  document
    .querySelector(`[name="username"]`)
    .addEventListener("keyup", function() {
      let res = this.value.match(/^[a-z]{3,6}$/i);
      console.log(res);
      console.log(res ? "正确" : "失败");
    });
</script>
```

#### 字符的格式使用

> `+ ` 表示一个或者多个字符
>
> `*` 表示0个或者多个
>
> \d 匹配数值
>
> \D 匹配除了数值
>
> \s 空白
>
> \S除了空白
>
> \w 字母数字下划线（包含\d）
>
> \W除了字母数字下划线之外的
>
> . 表示除了换行符之外的任意字符
>
> 空格可以手动加也可使用\s添加
>
> 匹配任何字符[\d\D]  [\S\s]
>
> ？表示0个或者多个
>
> ？：表示不记录这个数据的组编号

```js
    let hd = "houdnren1231221";
    // 匹配数值
    console.log(hd.match(/\d+/g));
    // 匹配非数值
    console.log(hd.match(/\D+/g));
    // 匹配空白
    console.log(/\s/.test("h d"));
	 //字母数字下划线
    console.log(hd.match(/\w+/));
	//匹配邮箱
    let email="123@qq.com"
    console.log(email.match(/^\w+@\w+\.\w+$/));
  	//空格可以手动加也可使用\s添加
  	let tel = "010 - 11111111";
    console.log(tel.match(/\d+ - \d{8}/));
	console.log(tel.match(/\d+\s-\s\d{8}/));
    // 匹配任何字符[\d\D]  [\S\s]
    let hd=`
    <span>
      dsadsadsa@##!!@#$$#%#$@#$%$#%!!@
      WEQWWEWQ!@$#Q
      QW！@#！@！@@！@！123213

    </span>
    `
    console.log(hd.match(/<span>[\s\S]+<\/span>/));
```

案例：以字母开始后跟数字字母下划线，5-10位

```html
	//案例：以字母开始后跟数字字母下划线，5-10位
    let username = prompt("请输入用户名");
    console.log(/^[a-z]\w{4,9}$/.test(username));
```

#### 模式切换

| i    | 不区分大小写字母的匹配                       |
| ---- | -------------------------------------------- |
| g    | 全局搜索所有匹配内容                         |
| m    | 视为多行                                     |
| s    | 视为单行忽略换行符，使用`.` 可以匹配所有字符 |
| y    | 从 `regexp.lastIndex` 开始匹配               |
| u    | 正确处理四个字符的 UTF-16 编码               |

```html
      // 模式问题，i不区分大小写，g全部检测
      let hd="hoiuduUnre.com"
      console.log(hd.replace(/u/gi,"#"));
```

#### 多行匹配

> m模式修正符

```html
 let hd = `
  #1 js,200元 #
   #2132 js,200元 #
  #12 js,200元 #sadas
     #12312 des,200元 #
  `;
    let lesson = hd.match(/^\s*#\d+.+\s+#$/gm).map((v) => {
      v = v.replace(/\s*#\d+\s*/, "").replace(/\s+#/, "");
      // console.log(v);
      [name, price] = v.split(",");
      return { name, price };
    });
    console.log(JSON.stringify(lesson, null, 2));
 
```

### 字符属性



```html
 let hd="sadas12321.,,.,.萨达阿斯顿撒"
    //只匹配标点
    console.log(hd.match(/\p{P}/gu));
    //只匹配字母
    console.log(hd.match(/\p{L}/gu));
    //匹配汉字
    console.log(hd.match(/\p{sc=Han}/gu));
```

#### lastIndex

lastIndex开始搜索的位置

RegExp 对象`lastIndex` 属性可以返回或者设置正则表达式开始匹配的位置

- 必须结合 `g` 修饰符使用
- 对 `exec` 方法有效
- 匹配完成时，`lastIndex` 会被重置为 0

```text
let hd = `后盾人不断分享视频教程，后盾人网址是 houdunren.com`;
let reg = /后盾人(.{2})/g;
reg.lastIndex = 10; //从索引10开始搜索
console.log(reg.exec(hd));
console.log(reg.lastIndex);

reg = /\p{sc=Han}/gu;
while ((res = reg.exec(hd))) {
  console.log(res[0]);
}
```

#### y模式和g模式的区别：

y模式可以在检测不到的时候停止，而g模式会跳过后再次进行检索

案例如下：

```html
    let hd = `撒大声地:123123213,213,1321,213,21321啥大大所`;
    let reg = /(\d+),?/y;
    reg.lastIndex = 5;
    let qq = [];
    while ((res = reg.exec(hd))) qq.push(res[1]);
    console.log(qq);
```

### 原子表

在一组字符中匹配某个元字符，在正则表达式中通过元字符表来完成，就是放到`[]` (方括号)中。

#### 使用语法

| 原子表 | 说明                               |
| ------ | ---------------------------------- |
| []     | 只匹配其中的一个原子               |
| [^]    | 只匹配"除了"其中字符的任意一个原子 |
| [0-9]  | 匹配 0-9 任何一个数字              |
| [a-z]  | 匹配小写 a-z 任何一个字母          |
| [A-Z]  | 匹配大写 A-Z 任何一个字母          |

```html
    let hd = "2022/11/21";
    let reg = /^\d{4}([/-])\d{2}\1\d{2}$/;
    console.log(hd.match(reg));
```

#### 区间匹配

```html
 <body>
    <input type="text" name="username" />
  </body>
  <script>
    let username = document.querySelector(`[name="username"]`);
    // console.log(username);
    username.addEventListener("keyup", function () {
      console.log(this.value.match(/^[a-z]\w{4,8}$/i));
    });
  </script>
```

#### 排除匹配

排除里面的字符

```html
   let hd="dasdasaweqweqw"
    console.log(hd.match(/[^as]/ig));
```

#### 特殊字符

> 使用原子表[]的时候将().+放进去之后，是单纯的字符形式，没有特殊的含义

```html
    let hd="dasdasaweqweqw.+()"
    console.log(hd.match(/[.+()]/ig));
```

#### 使用原子表操作dom元素

```html
<body>
    <h1>sdasd</h1>
    <H4>sdsadadas</H4>
    <h3>dsaasdas</h3>
  </body>
  <script>
    let body = document.body;
    let reg = /<(h[1-6])>[\s\S]*<\/\1>/gi;
    body.innerHTML = body.innerHTML.replace(reg, "");
  </script>
```

### 原子组

- 如果一次要匹配多个元子，可以通过元子组完成
- 原子组与原子表的差别在于原子组一次匹配多个元子，而原子表则是匹配任意一个字符
- 元字符组用 `()` 包裹

下面使用原子组匹配 `h1` 标签，如果想匹配 `h2` 只需要把前面原子组改为 `h2` 即可。

```text
const hd = `<h1>houdunren.com</h1>`;
console.log(/<(h1)>.+<\/\1>/.test(hd)); //true
```

#### 使用方法

没有添加 `g` 模式修正符时只匹配到第一个，匹配到的信息包含以下数据

| 变量    | 说明             |
| ------- | ---------------- |
| 0       | 匹配到的完整内容 |
| 1,2.... | 匹配到的原子组   |
| index   | 原字符串中的位置 |
| input   | 原字符串         |
| groups  | 命名分组         |

在`match`中使用原子组匹配，会将每个组数据返回到结果中

- 0 为匹配到的完成内容
- 1/2 等 为原子级内容
- index 匹配的开始位置
- input 原始数据
- groups 组别名

#### 邮箱验证案例：

```html
<body>
    <input type="text" name="mail" value="123@qq.com" />
    <span></span>
  </body>
  <script>
    let mail = document
      .querySelector(`[name="mail"]`)
      .addEventListener("keyup", function () {
        reg = /^[\w-]+@([\w-]+\.)+(com|cn|top|net|cc)$/i;
        document.querySelector("span").innerHTML = reg.test(this.value)
          ? "正确"
          : "错误";
      });
  </script>
```

#### 原子组的替换

```js
let hd = `
    <h1>asdas</h1>
    <span>asdas</span>
    <h2>sadasd</h2>
    `;
    let reg = /<(h[1-6])>([\s\S]+)<\/\1>/gi
     console.log(hd.replace(reg, `<span>$2</span>`));
//使用函数的方法，p0是指正则获取到的全部内容p1p2指的是原子组的括号从大到小
    let res=hd.replace(reg,(p0,p1,p2)=>{
        return `<p>${p2}</p>`
    })
    console.log(res);
```

#### 嵌套分组与不记录组

取中间的一些值并进行验证

```js
  let hd = `
    http://sadsa.com
    https://www.qwe.com
    https://1212.cn
    `;
    let reg = /https?:\/\/((?:\w+\.)?\w+\.(?:com|cn|top))/gi;
    let urls = [];
    while ((res = reg.exec(hd))) {
      urls.push(res[1]);
    }
    console.log(urls);
```

### 重复匹配

如果要重复匹配一些内容时我们要使用重复匹配修饰符，包括以下几种。有加号的时候影响一个组，不是单个的

| 符号  | 说明              |
| ----- | ----------------- |
| *     | 重复零次或更多次  |
| +     | 重复一次或更多次  |
| ?     | 重复零次或一次    |
| {n}   | 重复 n 次         |
| {n,}  | 重复 n 次或更多次 |
| {n,m} | 重复 n 到 m 次    |

> 因为正则最小单位是元字符，而我们很少只匹配一个元字符如 a、b 所以基本上重复匹配在每条正则语句中都是必用到的内容

#### 验证电话号码

```text
//验证电话号码的位数
let hd = "010-12345678";
console.log(/0\d{2,3}-\d{7,8}/.exec(hd));
//加号影响一个组
let hd='qweqwqwewqq'
console.log(hd.match(/(qw)+/gi));
```

#### 验证网站用户名

```js
<body>
    <input type="text" name="username" id="" />
  </body>
  <script>
    //对用户名的验证
    document
      .querySelector(`[name="username"]`)
      .addEventListener("keyup", e=> {
        const value = e.target.value;
        let reg = /^[a-z][\w-\.]{3,7}$/gi;
        console.log(reg.test(value));
      });
  </script>
```

#### 使用多个正则验证密码

```js 
<body>
    <input type="text" name="username" id="" />
  </body>
<script>
const input = document.querySelector(`[name="username"]`);
    input.addEventListener("keyup", (e) => {
      const value = e.target.value;
      const regs = [/^[a-z0-9]{5,10}$/i, /[A-Z]/, /[0-9]/];
      let state = regs.every((e) => e.test(value));
      console.log(state ? "true" : "false");
    });
  </script>
```

### 禁止贪婪

正则表达式在进行重复匹配时，默认是贪婪匹配模式，也就是说会尽量匹配更多内容，但是有的时候我们并不希望他匹配更多内容，这时可以通过?进行修饰来禁止重复匹配

| 使用   | 说明                              |
| ------ | --------------------------------- |
| *?     | 重复任意次，但尽可能少重复        |
| +?     | 重复 1 次或更多次，但尽可能少重复 |
| ??     | 重复 0 次或 1 次，但尽可能少重复  |
| {n,m}? | 重复 n 到 m 次，但尽可能少重复    |
| {n,}?  | 重复 n 次以上，但尽可能少重复     |

```text
<body>
  <main>
    <span>houdunwang</span>
    <span>hdcms.com</span>
    <span>houdunren.com</span>
  </main>
</body>
<script>
  const main = document.querySelector("main");
  const reg = /<span>([\s\S]+?)<\/span>/gi;
  main.innerHTML = main.innerHTML.replace(reg, (v, p1) => {
    console.log(p1);
    return `<h4 style="color:red">后盾人-${p1}</h4>`;
  });
</script>
```

### 全局匹配

#### 高版本浏览器

```html
    //高版本浏览器
    let reg = /<(h[1-6])>([\s\S]+?)<\/\1>/gi;
    const body = document.body;
    const hd = body.innerHTML.matchAll(reg);
    let constents = [];
    for (const iterator of hd) {
      constents.push(iterator[2]);
    }
    console.table(constents);
```

#### 低版本浏览器

```js
String.prototype.matchAll = function(reg) {
  let res = this.match(reg);
  if (res) {
    let str = this.replace(res[0], "^".repeat(res[0].length));
    let match = str.matchAll(reg) || [];
    return [res, ...match];
  }
};
let str = "houdunren";
console.dir(str.matchAll(/(U)/i));
```

#### exec

使用 `g` 模式修正符并结合 `exec` 循环操作可以获取结果和匹配细节

```text
<body>
  <h1>houdunren.com</h1>
  <h2>hdcms.com</h2>
  <h1>后盾人</h1>
</body>
<script>
  function search(string, reg) {
    const matchs = [];
    while ((data = reg.exec( string))) {
      matchs.push(data);
    }
    return matchs;
  }
  console.log(search(document.body.innerHTML, /<(h[1-6])>[\s\S]+?<\/\1>/gi));
</script>
```

### 原子组的别名

> 别名?<>

```js
  <script>
    let hd = `
    <h1>asdas</h1>
    <span>asdas</span>
    <h2>sadasd</h2>
    `;
    const reg = /<(h[1-6])>(?<con>.*?)<\/\1>/gi;
    console.log(hd.replace(reg, "<h4>$<con></h4>"));
  </script>
```

**取出a标签的链接和内容进行重新组合为新数组**

```js
  <body>
    <a id="" href="asdas">dsaaaa</a>
    <a href="asaaadas">dsaa</a>
    <a href="asdasaa">dsaaaaaaa</a>
  </body>

const main = document.querySelector("body");
    const reg = /<a.*?href=(['"])(?<links>.*?)>(?<title>.*?)<\/a>/gi;
    const links = [];
    for (const iterator of main.innerHTML.matchAll(reg)) {
      links.push(iterator["groups"]);
    }
    console.log(links);
```

### 字符方法

search() 方法用于检索字符串中指定的子字符串，也可以使用正则表达式搜索，返回值为索引位置

```text
let str = "houdunren.com";
console.log(str.search("com"));
```

使用正则表达式搜索

```text
console.log(str.search(/\.com/i));
```

#### match

直接使用字符串搜索

```text
let str = "houdunren.com";
console.log(str.match("com"));
```

使用正则获取内容，下面是简单的搜索字符串

```text
let hd = "houdunren";
let res = hd.match(/u/);
console.log(res);
console.log(res[0]); //匹配的结果
console.log(res[index]); //出现的位置
```

如果使用 `g` 修饰符时，就不会有结果的详细信息了（可以使用 exec），下面是获取所有 h1~6 的标题元素

```text
let body = document.body.innerHTML;
let result = body.match(/<(h[1-6])>[\s\S]+?<\/\1>/g);
console.table(result);
```

#### matchAll

在新浏览器中支持使用 `matchAll` 操作，并返回迭代对象

```text
let str = "houdunren";
let reg = /[a-z]/ig;
for (const iterator of str.matchAll(reg)) {
  console.log(iterator);
}
```

#### split

用于使用字符串或正则表达式分隔字符串，下面是使用字符串分隔日期

```text
let str = "2023-02-12";
console.log(str.split("-")); //["2023", "02", "12"]
```

如果日期的连接符不确定，那就要使用正则操作了

```text
let str = "2023/02-12";
console.log(str.split(/-|\//));
```

#### replace

`replace` 方法不仅可以执行基本字符替换，也可以进行正则替换，下面替换日期连接符

```text
let str = "2023/02/12";
console.log(str.replace(/\//g, "-")); //2023-02-12
```

替换字符串可以插入下面的特殊变量名：

| 变量 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| `$$` | 插入一个 "$"。                                               |
| `$&` | 插入匹配的子串。                                             |
| $`   | 插入当前匹配的子串左边的内容。                               |
| `$'` | 插入当前匹配的子串右边的内容。                               |
| `$n` | 假如第一个参数是 `RegExp` 对象，并且 n 是个小于 100 的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从 1 开始 |

在后盾人前后添加三个`=`

```text
let hd = "=后盾人=";
console.log(hd.replace(/后盾人/g, "$`$`$&$'$'"));
```

把电话号用 `-` 连接

```text
let hd = "(010)99999999 (020)8888888";
console.log(hd.replace(/\((\d{3,4})\)(\d{7,8})/g, "$1-$2"));
```

把所有`教育`汉字加上链接 `https://www.houdunren.com`

```text
<body>
  在线教育是一种高效的学习方式，教育是一生的事业
</body>
<script>
  const body = document.body;
  body.innerHTML = body.innerHTML.replace(
    /教育/g,
    `<a href="https://www.houdunren.com">$&</a>`
  );
</script>
```

为链接添加上`https` ，并补全 `www.`

```text
<body>
  <main>
    <a style="color:red" href="http://www.hdcms.com">
      开源系统
    </a>
    <a id="l1" href="http://houdunren.com">后盾人</a>
    <a href="http://yahoo.com">雅虎</a>
    <h4>http://www.hdcms.com</h4>
  </main>
</body>
<script>
  const main = document.querySelector("body main");
  const reg = /(<a.*href=['"])(http)(:\/\/)(www\.)?(hdcms|houdunren)/gi;
  main.innerHTML = main.innerHTML.replace(reg, (v, ...args) => {
    args[1] += "s";
    args[3] = args[3] || "www.";
    return args.splice(0, 5).join("");
  });
</script>
```

将标题标签全部替换为 `p` 标签

```text
<body>
  <h1>houdunren.com</h1>
  <h2>hdcms.com</h2>
  <h1>后盾人</h1>
</body>

<script>
  const reg = /<(h[1-6])>(.*?)<\/\1>/g;
  const body = document.body.innerHTML;
  const html = body.replace(reg, function(str, tag, content) {
    return `<p>${content}</p>`;
  });
  document.body.innerHTML = html;
</script>
```

删除页面中的 `h1~h6` 标签

```text
<body>
  <h1>houdunren.com</h1>
  <h2>hdcms.com</h2>
  <h1>后盾人</h1>
</body>
<script>
  const reg = /<(h[1-6])>(.*?)<\/\1>/g;
  const body = document.body.innerHTML;
  const html = body.replace(reg, "");
  document.body.innerHTML = html;
</script>
```

**回调函数**

replace 支持回调函数操作，用于处理复杂的替换逻辑

| 变量名            | 代表的值                                                     |
| ----------------- | ------------------------------------------------------------ |
| `match`           | 匹配的子串。（对应于上述的$&。）                             |
| `p1,p2, ...`      | 假如 replace()方法的第一个参数是一个 `RegExp` 对象，则代表第 n 个括号匹配的字符串。（对应于上述的$1，$2 等。）例如，如果是用 `/(\a+)(\b+)/` 这个来匹配，`p1` 就是匹配的 `\a+`，`p2` 就是匹配的 `\b+`。 |
| `offset`          | 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 `'abcd'`，匹配到的子字符串是 `'bc'`，那么这个参数将会是 1） |
| `string`          | 被匹配的原字符串。                                           |
| NamedCaptureGroup | 命名捕获组匹配的对象                                         |

使用回调函数将 `后盾人` 添加上链接

```text
<body>
  <div class="content">
    后盾人不断更新优质视频教程
  </div>
</body>

<script>
  let content = document.querySelector(".content");
  content.innerHTML = content.innerHTML.replace("后盾人", function(
    search,
    pos,
    source
  ) {
    return `<a href="https://www.houdunren.com">${search}</a>`;
  });
</script>
```

为所有标题添加上 `hot` 类

```text
<body>
  <div class="content">
    <h1>后盾人</h1>
    <h2>houdunren.com</h2>
    <h1>后盾人</h1>
  </div>
</body>
<script>
  let content = document.querySelector(".content");
  let reg = /<(h[1-6])>([\s\S]*?)<\/\1>/gi;
  content.innerHTML = content.innerHTML.replace(
    reg,
    (
      search, //匹配到的字符
      p1, //第一个原子组
      p2, //第二个原子组
      index, //索引位置
      source //原字符
    ) => {
      return `
    <${p1} class="hot">${p2}</${p1}>
    `;
    }
  );
</script>
```

```js
  <body>
    <a id="" href="asdas">dsaaaa</a>
    <a href="asaaadas">dsaa</a>
    <a href="asdasaa">dsaaaaaaa</a>
  </body>

const main = document.querySelector("body");
    const reg = /<a.*?href=(['"])(?<links>.*?)>(?<title>.*?)<\/a>/gi;
    const links = [];
    for (const iterator of main.innerHTML.matchAll(reg)) {
      links.push(iterator["groups"]);
    }
    console.log(links);
```

### 正则方法

下面是 `RegExp` 正则对象提供的操作方法

#### test

检测输入的邮箱是否合法

```text
<body>
  <input type="text" name="email" />
</body>

<script>
  let email = document.querySelector(`[name="email"]`);
  email.addEventListener("keyup", e => {
    console.log(/^\w+@\w+\.\w+$/.test(e.target.value));
  });
</script>
```

#### exec

不使用 `g` 修饰符时与 `match` 方法使用相似，使用 `g` 修饰符后可以循环调用直到全部匹配完。

- 使用 `g` 修饰符多次操作时使用同一个正则，即把正则定义为变量使用
- 使用 `g` 修饰符最后匹配不到时返回 `null`

计算内容中后盾人出现的次数

```text
<body>
  <div class="content">
    后盾人不断分享视频教程，后盾人网址是 houdunren.com
  </div>
</body>

<script>
  let content = document.querySelector(".content");
  let reg = /(?<tag>后盾)人/g;
  let num = 0;
  while ((result = reg.exec(content.innerHTML))) {
    num++;
  }
  console.log(`后盾人共出现${num}次`);
</script>
```

### 断言匹配

#### 零宽先行断言

> 在后盾人后面是教程的这个后盾人上加超链接

```html
  <body>
    <main>后盾人不断分享视频教程，学习后盾人教程提升编程能力。</main>
  </body>
  <script>
    let main = document.querySelector("main");
    let reg = /后盾人(?=教程)/g;
    main.innerHTML = main.innerHTML.replace(
      reg,
      `<a href="https://www.baidu.com">$&</a>`
    );
  </script>
</html>
```

使用断言规范价格

`给没有.00的价格加上.00`

```js
  let lessons = `
    js,200元,300次
    css,150元,300次
    nodejs,200.00元,300次
    `;
    let reg = /(\d+)(.00)?(?=元)/gi;
    lessons=lessons.replace(reg, (v, ...args) => {
        // console.log(args[]);
      args[1] = args[1] || ".00";
      return args.splice(0, 2).join("");
    });
    console.log(lessons);
```

#### 零宽后行断言

> 在后盾人前面是教程的这个后盾人上加超链接
>
> 作为条件不是原子组
>
> `(?<=xxx)`

```js
    let hd="qw1111eqwwqewewqeq1111"
    const reg=/(?<=qw)\d+/ig;
    console.log(hd.match(reg));
```

**电话号码的隐藏**

```js
 let users=`
    demo:13222220098
    demo:13211120098
    `
    let reg=/(?<=\d{7})\d{4}/ig
    users=users.replace(reg,v=>{
        return "*".repeat(4)
    })
    console.log(users);
```

#### 零宽负向先行断言

后面不是...的

`(?!)`

取后面不是数字的字母

```js
    let hd='sadasd11xsdaa'
    let reg=/[a-z]+(?!\d)$/i
    console.log(hd.match(reg));
  </script>
```

限制用户名有关键词、

```js
 const input = 		document.querySelector(`[name="username"]`);
input.addEventListener("keyup", function () {
const reg = /^(?!.*向军.*)[a-z]{5,6}$/gi;
console.log(this.value.match(reg));
    });
```

#### 零宽负向后行断言

前面不是...的

例如钱面不是数字的

`（?<!）`

```text
<body>
  <main>
    <a href="https://www.houdunren.com/1.jpg">1.jpg</a>
    <a href="https://oss.houdunren.com/2.jpg">2.jpg</a>
    <a href="https://cdn.houdunren.com/2.jpg">3.jpg</a>
    <a href="https://houdunren.com/2.jpg">3.jpg</a>
  </main>
</body>
<script>
  const main = document.querySelector("main");
  const reg = /https:\/\/(\w+)?(?<!oss)\..+?(?=\/)/gi;
  main.innerHTML = main.innerHTML.replace(reg, v => {
    console.log(v);
    return "https://oss.houdunren.com";
  });
</script>
```

##  异步编程之PROMISE/ASYNC/AWAIT

### promise微任务

```js
new Promise((resolve,reject)=>{
      
      resolve('成功')
      reject('拒绝')
    })
    .then(
      value=>{
        console.log('成功业务');
      },
      reason=>{
        console.log('拒绝业务');
      }
    ).then(
      value=>{
        console.log('成功业务1');
      },
      reason=>{
        console.log('拒绝业务2');
      }
    )
```

### 宏任务与微任务执行的顺序

> 同步任务>微任务>宏任务

```js
   let promise=new Promise(resolve=>{
      setTimeout(() => {
        resolve()
        console.log('steTimeout');
      }, 0);
      console.log("promise");
    }).then(value=>console.log("成功"))
    console.log('houdunren');
```

1. 先执行同步任务promise和houdunren
2. 然后进入计时器里面执行里面的同步任务settimeout
3. 然后进入到promise里面执行成功

自定义错误处理：

### **实现异步加载图片**

```html
   function loadImage(src) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.onload = () => {
          resolve(image);
        };
        image.onerror = reject;
        document.body.appendChild(image);
      });
    }
    loadImage("images/demo.png").then((image) => {
      image.style.border = "solid 8px red";
```

### **定时器的封装**

```html
//定时器的封装
    function timeout(delay = 1000) {
      return new Promise((reslove) => setTimeout(reslove, delay));
    }
    timeout(2000)
      .then(() => {
        console.log("houdunren.com");
        return timeout(2000);
      })
      .then((value) => {
        console.log("hdcms");
      });
```

### promise.resolve

```html
HD.resolve(
  new HD((_, reject) => {
    reject("reacted");
  })
).then(
  value => {
    console.log(value);
  },
  reason => {
    console.log(reason);
  }
);
```

### promise.reject 

把错误的状态直接更改

```html
static reject(reason) {
  return new HD((_, reject) => {
    reject(reason);
  });
}
```

全部返回都是已解决状态才可以进行下一步

### promise.all

```html
 const hdcms = new Promise((resolve, reject) => {
      setTimeout(() => {
        // console.log("第一个异步");
        reject("fail");
      }, 1000);
    });
    const houdunren = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("第二个异步");
      }, 1000);
    });
    Promise.all([hdcms, houdunren])
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
```

### promise.race 

哪个快取哪一个

```html
let p1 = HD.resolve("后盾人");
let p2 = HD.resolve("houdunren.com");
let promises = HD.race([p1, p2]).then(
  promises => {
    console.log(promises);
  },
  reason => {
    console.log(reason);
  }
);
```

语法糖：

**await相当于then**

**async相当于new promise**

```js
async function hd() {
      let name=await 'houdunren.com'
      console.log(name);
      // return new Promise((reslove) => {
      //   setTimeout(() => {
      //     reslove("houdunren");
      //   }, 2000);
      // });
    }
    hd();
```

### saync延迟函数

```js
  //async延迟函数
    async function sleep(delay = 2000) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
    }
    async function show() {
      for (const user of ["后盾人", "向军"]) {
        await sleep();
        console.log(user);
      }
    }
    show();
```



await并行

async

```js
    async function hd(){
      let res=await Promise.all([p1,p2]);
      console.log(res);
    }
```

## 宏任务与微任务

JavaScript 语言的一大特点就是单线程，也就是说同一个时间只能处理一个任务。为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程的不阻塞，（事件循环）Event Loop 的方案应用而生。

JavaScript 处理任务是在等待任务、执行任务 、休眠等待新任务中不断循环中，也称这种机制为事件循环。

- 主线程中的任务执行完后，才执行任务队列中的任务
- 有新任务到来时会将其放入队列，采取先进先执行的策略执行队列中的任务
- 比如多个 `setTimeout` 同时到时间了，就要依次执行

任务包括 script(整体代码)、 setTimeout、setInterval、DOM 渲染、DOM 事件、Promise、XMLHTTPREQUEST 等

### 原理

下面通过一个例子来详细分析宏任务与微任务

```text
console.log("后盾人");
setTimeout(function() {
  console.log("定时器");
}, 0);
Promise.resolve()
  .then(function() {
    console.log("promise1");
  })
  .then(function() {
    console.log("promise2");
  });
console.log("houdunren.com");

#输出结果为
后盾人
houdunren.com
promise1
promise2
定时器
```

1. 先执最前面的宏任务 script，然后输出

   ```text
   script start
   ```

2. 然后执行到 setTimeout 异步宏任务，并将其放入宏任务队列，等待执行

3. 之后执行到 Promise.then 微任务，并将其放入微任务队列，等待执行

4. 然后执行到主代码输出

   ```text
   script end
   ```

5. 主线程所有任务处理完成

6. 通过事件循环遍历微任务队列，将刚才放入的 Promise.then 微任务读取到主线程执行，然后输出

   ```text
   promise1
   ```

7. 之后又执行 promse.then 产生新的微任务，并放入微任务队列

8. 主线程任务执行完毕

9. 现次事件循环遍历微任务队列，读取到 promise2 微任务放入主线程执行，然后输出

   ```text
   promise2
   ```

10. 主线程任务执行完毕

11. 此时微任务队列已经无任务，然后从宏任务队列中读取到 setTimeout 任务并加入主线程，然后输出

    ```text
    setTimeout
    ```

![image-20191227151316924](https://doc.houdunren.com/assets/img/image-20191227151316924.65fe4da0.png)

### 定时器

定时器会放入异步任务队列，也需要等待同步任务执行完成后执行。

下面设置了 6 毫秒执行，如果主线程代码执行 10 毫秒，定时器要等主线程执行完才执行。

HTML 标准规定最小时间不能低于 4 毫秒，有些异步操作如 DOM 操作最低是 16 毫秒，总之把时间设置大些对性能更好。



### 微任务

微任务一般由用户代码产生，微任务较宏任务执行优先级更高，`Promise.then` 是典型的微任务，实例化 Promise 时执行的代码是同步的，便 then 注册的回调函数是异步微任务的。

任务的执行顺序是同步任务、微任务、宏任务所以下面执行结果是 `1、2、3、4`

```text
setTimeout(() => console.log(4));

new Promise(resolve => {
  resolve();
  console.log(1);
}).then(_ => {
  console.log(3);
});

console.log(2);
```

我们再来看下面稍复杂的任务代码

```text
setTimeout(() => {
  console.log("定时器");
  setTimeout(() => {
    console.log("timeout timeout");
  }, 0);
  new Promise(resolve => {
    console.log("settimeout Promise");
    resolve();
  }).then(() => {
    console.log("settimeout then");
  });
}, 0);
new Promise(resolve => {
  console.log("Promise");
  resolve();
}).then(() => {
  console.log("then");
});
console.log("后盾人");
```

以上代码执行结果为

```text
Promise
后盾人
then
定时器
settimeout Promise
settimeout then
timeout timeout
```

### 进度条

```js
<style>
    #hd {
      width: 0%;
      height: 30px;
      background-color: aqua;
    }
  </style>
  <body>
    <div id="hd"></div>
  </body>
  <script>
    function handle() {
      let i = 0;
      (function run() {
        hd.innerHTML = i;
        hd.style.width = i + "%";
        if (++i <= 100) {
          setTimeout(run, 20);
        }
      })();
    }
    handle();
  </script>
```

### 任务拆分

```js
function hd() {
      for (let i = 0; i < 1000000; i++) {
        if (num <= 0) break;
        count += num--;
      }
      if (num > 0) {
        console.log(num);
        setTimeout(hd);
      } else {
        console.log(count);
      }
    }
    let num = 45645654;
    let count = 0;
    hd();
    console.log("sadas");
```

### 微任务进行任务拆分

```js
async function hd(num) {
      let res = await Promise.resolve().then((_) => {
        let count = 0;
        for (let i = 0; i < num; i++) {
          count += num--;
        }
        return count;
      });
      console.log(res);
    }
    hd(1232344234);
    console.log("sada");
```

## 手写promise核心

## Dom操作

### 基础

#### 脚本渲染

> 要是获取不到元素，检测脚本是否放在bom元素下面

> 脚本需要在head里面书写的话，需要在script里面加上defer属性

#### 节点对象

JS 中操作 DOM 的内容称为节点对象（node)，即然是对象就包括操作 NODE 的属性和方法

- 包括 12 种类型的节点对象
- 常用了节点为 document、标签元素节点、文本节点、注释节点
- 节点均继承自 Node 类型，所以拥有相同的属性或方法
- document 是 DOM 操作的起始节点

#### 原型链

在浏览器渲染过程中会将文档内容生成为不同的对象，我伙来对下例中的 h1 标签进行讨论，其他节点情况相似

- 不同类型节点由专有的构造函数创建对象
- 使用 console.dir 可以打印出 DOM 节点对象结构
- 节点也是对象所以也具有 JS 对象的特征

```text
<h1 id="houdunwang">houdunren.com</h1>
<script>
  function prototype(el) {
    console.dir(el.__proto__)
    el.__proto__ ? prototype(el.__proto__) : ''
  }
  const node = document.getElementById('houdunwang')
  prototype(node)
</script>
```

最终得到的节点的原型链为

| 原型               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| Object             | 根对象，提供 hasOwnProperty 等基本对象操作支持               |
| EventTarget        | 提供 addEventListener、removeEventListener 等事件支持方法    |
| Node               | 提供 firstChild、parentNode 等节点操作方法                   |
| Element            | 提供 getElementsByTagName、querySelector 等方法              |
| HTMLElement        | 所有元素的基础类，提供 childNodes、nodeType、nodeName、className、nodeName 等方法 |
| HTMLHeadingElement | Head 标题元素类                                              |

我们将上面的方法优化一下，实现提取节点原型链的数组

```text
<h2 id="h2 value">houdunren.com</h2>
<input type="text" id="inputId" value="后盾人" />
<script>
    function prototype(el) {
        const prototypes = []
        prototypes.push(el.__proto__)
        prototypes.push(...(el.__proto__ ? prototype(el.__proto__) : []))
        return prototypes
    }
    const h2 = document.querySelector('h2')
    const input = document.querySelector('input')

    console.log(prototype(input))
</script>
```

下面为标题元素增加两个原型方法，改变颜色与隐藏元素

```text
<h2 onclick="this.color('red')">houdunren.com</h2>
<script>
  const h2 = document.querySelector('h2')
  HTMLHeadingElement.prototype = Object.assign(HTMLHeadingElement.prototype, {
    color(color) {
      this.style.color = color
    },
    hide() {
      this.style.display = 'none'
    },
  })
</script>
```

#### 对象特征

即然 DOM 与我们其他 JS 创建的对象特征相仿，所以也可以为 DOM 对象添加属性或方法。

对于系统应用的属性，应该明确含义不应该随意使用，比如 ID 是用于标识元素唯一属性，不能用于其他目地

- 后面会讲到其他解决方案，来自定义属性，ID 属性可以直接修改但是不建议这么做

```text
let hd = document.getElementById('hd')
hd.id = 'houdunren.com'
console.log(hd)
```

title 用于显示提示文档也不应该用于其他目地

```text
<div id="hd">houdunren.com</div>
<script>
  let hd = document.getElementById('hd')
  hd.title = 'houdunren.com'
  console.log(hd)
</script>
```

下面是为对象合并属性的示例

```text
<div id="hd">houdunren.com</div>
<script>
  let hd = document.getElementById('hd')

  Object.assign(hd, {
    //设置标签内容
    innerHTML: '向军大叔',
    color: 'red',
    change() {
      this.innerHTML = '后盾人'
      this.style.color = this.color
    },
    onclick() {
      this.change()
    },
  })
</script>
```

使用对象特性更改样式属性

```text
<div id="hd">houdunren.com</div>
<script>
  let hd = document.getElementById('hd')
  Object.assign(hd.style, {
    color: 'white',
    backgroundColor: 'red',
  })
</script>
```

### 常用节点

> JS 提供了访问常用节点的 api

| 方法                     | 说明                           |
| ------------------------ | ------------------------------ |
| document                 | document 是 DOM 操作的起始节点 |
| document.documentElement | 文档节点即 html 标签节点       |
| document.body            | body 标签节点                  |
| document.head            | head 标签节点                  |
| document.links           | 超链接集合                     |
| document.anchors         | 所有锚点集合                   |
| document.forms           | form 表单集合                  |
| document.images          | 图片集合                       |

### DOCUMENT

document 是 window 对象的属性，是由 HTMLDocument 类实现的实例。

- document 包含 DocumentType（唯一）或 html 元素（唯一）或 comment 等元素

原型链中也包含 Node，所以可以使用有关节点操作的方法如 nodeType/NodeName 等

```text
console.dir(document.nodeType)
console.dir(document.nodeName)
```

> 有关使用 Document 操作 cookie 与本地储存将会在相应章节中介绍

使用 title 获取和设置文档标题

```text
//获取文档标题
console.log(document.title)

//设置文档标签
document.title = '后盾人-houdunren.com'
```

获取当前 URL

```text
console.log(document.URL)
```

获取域名

```text
document.domain
```

获取来源地址

```text
console.log(document.referrer)
```

系统针对特定标签提供了快速选择的方式

#### ID

下面是直接使用 ID 获取元素（这是非标准操作，对浏览器有挑剔）

```text
<div id="app">后盾人</div>
<script>
  // 直接通过 ID 获取元素（非标准操作）
  console.dir(app)
</script>
```

#### links

下面展示的是获取所有 a 标签

```text
<div name="app">
  <a href="">houdunren.com</a>
  <a href="">houdunwang.com</a>
</div>
<script>
  const nodes = document.links
  console.dir(nodes)
</script>
```

#### anchors

下例是获取锚点集合后能过 锚点 name 属性获取元素

```text
<div>
  <a href="" name="n1">houdunren.com</a>
  <a href="" name="n2">houdunwang.com</a>
</div>
<script>
  // 通过锚点获取元素
  console.dir(document.anchors.n2)
</script>
```

#### images

下面是获取所有图片节点

```text
<img src="" alt="" />
<img src="" alt="" />
<img src="" alt="" />
<script>
  // 获取所有图片节点
  console.dir(document.images)
</script>
```

### 节点属性

不同类型的节点拥有不同属性，下面是节点属性的说明与示例

#### nodeType

nodeType 指以数值返回节点类型

| nodeType | 说明          |
| -------- | ------------- |
| 1        | 元素节点      |
| 2        | 属性节点      |
| 3        | 文本节点      |
| 8        | 注释节点      |
| 9        | document 对象 |

下面是节点 nodeType 的示例

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <div class="xiangjun"><!-- 向军大叔 --></div>
</div>
<script>
  const node = document.querySelector(`#app`)
  console.log(node.nodeType) //1
  console.log(node.firstChild.nodeType) //3
  console.log(node.attributes.id.nodeType) //2

  const xj = document.querySelector('.xiangjun')
  console.log(xj.childNodes[0].nodeType) //8
</script>
```

下面是根据指定的 nodeType 递归获取节点元素的示例

- 可获取文本、注释、标签等节点元素

```text
<!-- 后盾人 -->
后盾人 houdunren.com
<div id="app">
  <ul>
    <li>
      <span></span>
      <span>
        <!-- 向军 -->
      </span>
    </li>
    <li><span></span><span></span></li>
    <li><span></span><span></span></li>
  </ul>
</div>

<script>
  function all(el, nodeType = 1) {
    const nodes = []

    Array.from(el.childNodes).map(node => {
      if (node.nodeType == nodeType) nodes.push(node)

      if (node.nodeType == 1) nodes.push(...all(node, nodeType))
    })
    return nodes
  }
  console.log(all(document.body))
</script>
```

#### Prototype

当然也可以使用对象的原型进行检测

- section 、main、aslide 标签的原型对象为 HTMLElement
- 其他非系统标签的原型对象为 HTMLUnknownElement

```text
let h1 = document.querySelector('h1')
let p = document.querySelector('p')
console.log(h1 instanceof HTMLHeadingElement) //true
console.log(p instanceof HTMLHeadingElement) //false
console.log(p instanceof Element) //true
```

下例是通过构建函数获取节点的示例

```text
<!-- 后盾人 -->
后盾人 houdunren.com
<div id="app">
  <ul>
    <li>
      <span></span>
      <span>
        <!-- 向军 -->
      </span>
    </li>
    <li><span></span><span></span></li>
    <li><span></span><span></span></li>
  </ul>
</div>

<script>
  function all(el, prototype) {
    const nodes = []

    Array.from(el.childNodes).map(node => {
      if (node instanceof prototype) nodes.push(node)

      if (node.nodeType == 1) nodes.push(...all(node, prototype))
    })
    return nodes
  }

  console.log(all(document.body, HTMLSpanElement))
</script>
```

#### nodeName

nodeName 指定节点的名称

- 获取值为大写形式

| nodeType | nodeName       |
| -------- | -------------- |
| 1        | 元素名称如 DIV |
| 2        | 属性名称       |
| 3        | #text          |
| 8        | #comment       |

下面来操作 nodeName

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <div class="xiangjun"><!-- 向军大叔 --></div>
  <span> 后盾人</span>
</div>
<script>
  const div = document.querySelector(`#app`)
  const span = document.querySelector('span')

  // 标签节点为大写的标签名DIV
  console.log(div.nodeName)
  console.log(span.nodeName)

  // 文本节点为 #text
  console.log(div.firstChild.nodeName)

  //属性节点为属性名
  console.log(div.attributes.id.nodeName)

  // 注释节点为#comment
  const xj = document.querySelector('.xiangjun')
  console.log(xj.childNodes[0].nodeName)
</script>
```

#### tagName

nodeName 可以获取不限于元素的节点名，tagName 仅能用于获取标签节点的名称

- tagName 存在于 Element 类的原型中
- 文本、注释节点值为 undefined
- 获取的值为大写的标签名

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <div class="xiangjun"><!-- 向军大叔 --></div>
  <span> 后盾人</span>
</div>
<script>
  const div = document.querySelector(`#app`)
  const span = document.querySelector('span')

  // 标签节点为大写的标签名 如DIV、SPAN
  console.log(div.tagName)
  console.log(span.tagName)

  // 文本节点为undefined
  console.log(div.firstChild.tagName)

  //属性节点为undefined
  console.log(div.attributes.id.tagName)

  // 注释节点为 undefined
  const xj = document.querySelector('.xiangjun')
  console.log(xj.childNodes[0].tagName)
</script>
```

#### nodeValue

使用 nodeValue 或 data 函数获取节点值，也可以使用节点的 data 属性获取节点内容

| nodeType | nodeValue |
| -------- | --------- |
| 1        | null      |
| 2        | 属性值    |
| 3        | 文本内容  |
| 8        | 注释内容  |

下面来看 nodeValue 的示例

```text
<div id="app">
  <div class="houdunren">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <div class="xiangjun"><!-- 向军大叔 --></div>
</div>
<script>
  const node = document.querySelector(`#app`)
  //标签的 nodeValue 值为 null
  console.log(node.nodeValue)

  //属性的 nodeVale 值为属性值
  console.log(node.attributes.id.nodeValue)

  //文本的 nodeValue 值为文本内容
  const houdunwang = document.querySelector('.houdunwang')
  console.log(houdunwang.firstChild.nodeValue)

  //注释的 nodeValue 值为注释内容
  const xj = document.querySelector('.xiangjun')
  console.log(xj.childNodes[0].nodeValue)
</script>
```

使用 data 属性可以获取文本与注释内容

```text
<div id="app">
  houdunren.com
  <!-- 后盾人 注释内容-->
</div>

<script>
  const app = document.querySelector('#app')
  console.log(app.childNodes[0].data)
  console.log(app.childNodes[1].data)
</script>
```

#### 树状节点

下面获取标签树状结构即多级标签结构，来加深一下节点的使用

```text
<div id="app">
  <ul>
    <li><span></span><span></span></li>
    <li><span></span><span></span></li>
    <li><span></span><span></span></li>
  </ul>
</div>

<script>
function tree(el) {
  return Array.from(el.childNodes)
    .filter(node =>node.tagName)
    .map(node => ({
      name: node.nodeName,
      children: tree(node),
    }))
}
console.log(tree(document.getElementById('app')))
```

上例结果如下

```text
Array(2)
0: {name: 'HEAD', children: Array(4)}
1: {name: 'BODY', children: Array(2)}
```

### 节点集合

Nodelist 与 HTMLCollection 都是包含多个节点标签的集合，大部分功能也是相同的。

- getElementsBy...等方法返回的是 HTMLCollection
- querySelectorAll 返回的是 NodeList
- NodeList 节点列表是动态的，即内容添加后会动态更新

```text
<div></div>
<div></div>
<script>
  //结果为NodeList
  console.log(document.querySelectorAll('div'))

  //结果为HTMLCollection
  console.log(document.getElementsByTagName('div'))
</script>
```

#### length

Nodelist 与 HTMLCollection 包含 length 属性，记录了节点元素的数量

```text
<div name="app">
  <div id="houdunren">houdunren.com</div>
  <div name="houdunwang">houdunwang.com</div>
</div>
<script>
  const nodes = document.getElementsByTagName('div')
  for (let i = 0; i < nodes.length; i++) {
    console.log(nodes[i])
  }
</script>
```

#### item

Nodelist 与 HTMLCollection 提供了 item()方法来根据索引获取元素

```text
<div name="app">
  <div id="houdunren">houdunren.com</div>
  <div name="houdunwang">houdunwang.com</div>
</div>

<script>
  const nodes = document.getElementsByTagName('div')
  console.dir(nodes.item(0))
</script>
```

使用数组索引获取更方便

```text
<div name="app">
  <div id="houdunren">houdunren.com</div>
  <div name="houdunwang">houdunwang.com</div>
</div>

<script>
  const nodes = document.getElementsByTagName('div')
  console.dir(nodes[0])
</script>
```

#### namedItem

HTMLCollection 具有 namedItem 方法可以按 name 或 id 属性来获取元素

```text
<div name="app">
  <div id="houdunren">houdunren.com</div>
  <div name="houdunwang">houdunwang.com</div>
</div>

<script>
  const nodes = document.getElementsByTagName('div')
  console.dir(nodes.namedItem('houdunwang'))
   console.dir(nodes.namedItem('houdunren'))
</script>
```

也可以使用数组或属性方式获取

```text
<div name="app">
  <div id="houdunren">houdunren.com</div>
  <div name="houdunwang">houdunwang.com</div>
</div>

<script>
  const nodes = document.getElementsByTagName('div')
  console.dir(nodes['houdunwang']);
  console.dir(nodes.houdunren)
</script>
```

数字索引时使用 item 方法，字符串索引时使用 namedItem 或 items 方法

```text
<h1 id="hd">houdunren.com</h1>
<h1 name="xj">向军大叔</h1>
<script>
  let items = document.getElementsByTagName('h1')
  console.log(items[0])
  console.log(items['xj'])
</script>
```

### 动态与静态

通过 getElementsByTagname 等 getElementsBy... 函数获取的 Nodelist 与 HTMLCollection 集合是动态的，即有元素添加或移动操作将实时反映最新状态。

- 使用 getElement...返回的都是动态的集合
- 使用 querySelectorAll 返回的是静态集合

#### 动态特性

下例中通过按钮动态添加元素后，获取的元素集合是动态的，而不是上次获取的固定快照。

```text
<h1>houdunren.com</h1>
<h1>houdunwang.com</h1>
<button id="add">添加元素</button>

<script>
  let elements = document.getElementsByTagName('h1')
  console.log(elements)
  let button = document.querySelector('#add')
  button.addEventListener('click', () => {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<h1>向军大叔</h1>')
    console.log(elements)
  })
</script>
```

document.querySelectorAll 获取的集合是静态的

```text
<h1>houdunren.com</h1>
<h1>houdunwang.com</h1>
<button id="add">添加元素</button>

<script>
  let elements = document.querySelectorAll('h1')
  console.log(elements.length)
  let button = document.querySelector('#add')
  button.addEventListener('click', () => {
    document.querySelector('body').insertAdjacentHTML('beforeend', '<h1>向军大叔</h1>')
    console.log(elements.length)
  })
</script>
```

#### 使用静态

如果需要保存静态集合，则需要对集合进行复制

```text
<div id="houdunren">houdunren.com</div>
<div name="houdunwang">houdunwang.com</div>
<script>
  const nodes = document.getElementsByTagName('div')
  const clone = Array.prototype.slice.call(nodes)
  console.log(nodes.length);//2
  document.body.appendChild(document.createElement('div'))
  console.log(nodes.length);//3
  console.log(clone.length);//2
</script>
```

### 遍历节点

#### forOf

Nodelist 与 HTMLCollection 是类数组的可迭代对象所以可以使用 for...of 进行遍历

```text
<div id="houdunren">houdunren.com</div>
<div name="houdunwang">houdunwang.com</div>
<script>
  const nodes = document.getElementsByTagName('div')
  for (const item of nodes) {
    console.log(item)
  }
</script>
```

#### forEach

Nodelist 节点列表也可以使用 forEach 来进行遍历，但 HTMLCollection 则不可以

```text
<div id="houdunren">houdunren.com</div>
<div name="houdunwang">houdunwang.com</div>
<script>
  const nodes = document.querySelectorAll('div')
  nodes.forEach((node, key) => {
    console.log(node)
  })
</script>
```

#### call/apply

节点集合对象原型中不存在 map 方法，但可以借用 Array 的原型 map 方法实现遍历

```text
<div id="houdunren">houdunren.com</div>
<div name="houdunwang">houdunwang.com</div>

<script>
  const nodes = document.querySelectorAll('div')
  Array.prototype.map.call(nodes, (node, index) => {
    console.log(node, index)
  })
</script>
```

当然也可以使用以下方式操作

```text
;[].filter.call(nodes, node => {
	console.log(node)
})
```

#### Array.from

Array.from 用于将类数组转为组件，并提供第二个迭代函数。所以可以借用 Array.from 实现遍历

```text
<div id="houdunren">houdunren.com</div>
<div name="houdunwang">houdunwang.com</div>

<script>
  const nodes = document.getElementsByTagName('div')
  Array.from(nodes, (node, index) => {
    console.log(node, index)
  })
</script>
```

#### 展开语法

下面使用点语法转换节点为数组

```text
<h1>houdunren.com</h1>
<h1>houdunwang.com</h1>
<script>
  let elements = document.getElementsByTagName('h1')
  console.log(elements)
  ;[...elements].map((item) => {
    item.addEventListener('click', function () {
      this.style.textTransform = 'uppercase'
    })
  })
</script>
```

### 节点关系

节点是父子级嵌套与前后兄弟关系，使用 DOM 提供的 API 可以获取这种关系的元素。

- 文本和注释也是节点，所以也在匹配结果中

#### 基础知识

节点是根据 HTML 内容产生的，所以也存在父子、兄弟、祖先、后代等节点关系，下例中的代码就会产生这种多重关系

- h1 与 ul 是兄弟关系
- span 与 li 是父子关系
- ul 与 span 是后代关系
- span 与 ul 是祖先关系

```text
<h1>后盾人</h1>
<ul>
  <li>
    <span>houdunren</span>
    <strong>houdunwang</strong>
  </li>
</ul>
```

下面是通过节点关系获取相应元素的方法

| 节点属性        | 说明           |
| --------------- | -------------- |
| childNodes      | 获取所有子节点 |
| parentNode      | 获取父节点     |
| firstChild      | 第一个子节点   |
| lastChild       | 最后一个子节点 |
| nextSibling     | 下一个兄弟节点 |
| previousSibling | 上一个兄弟节点 |

子节点集合与首、尾节点获取

- 文本也是 node 所以也会在匹配当中

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <div class="xiangjun">向军大叔</div>
</div>
<script>
  const node = document.querySelector(`#app`)
  console.log(node.childNodes) //所有子节点
  console.log(node.firstChild) //第一个子节点是文本节点
  console.log(node.lastChild) //最后一个子节点也是文本节点
</script>
```

下面通过示例操作节点关联

- 文本也是 node 所以也会在匹配当中

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <div class="xiangjun">向军大叔</div>
</div>
<script>
  const node = app.querySelector(`.houdunwang`)
  console.log(node.parentNode) //div#app
  console.log(node.childNodes) //文本节点
  console.log(node.nextSibling) //下一个兄弟节点是文本节点
  console.log(node.previousSibling) //上一个节点也是文本节点
</script>
```

document 是顶级节点 html 标签的父节点是 document

```text
<script>
  console.log(document.documentElement.parentNode === document)
</script>
```

#### 父节点集合

下例是查找元素的所有父节点

```text
<div id="houdunren">houdunren.com</div>

<script>
  function parentNodes(node) {
    let nodes = []
    while ((node = node.parentNode)) nodes.push(node)
    return nodes
  }
  const el = document.getElementById('houdunren')
  const nodes = parentNodes(el)
  console.log(nodes)
</script>
```

使用递归获取所有父级节点

```text
<div>
  <ul>
    <li><span></span></li>
  </ul>
</div>
<script>
  const span = document.querySelector('span')

  function parentNodes(node) {
    const nodes = new Array(node.parentNode)
    if (node.parentNode) nodes.push(...parentNodes(node.parentNode))
    return nodes
  }

  const nodes = parentNodes(document.querySelector('span'))
  console.log(nodes)
</script>
```

#### 后代节点集合

获取所有的后代元素 SPAN 的内容

```text
<div id="app">
  <span>houdunren.com</span>
  <h2>
    <span>houdunwang.com</span>
  </h2>
</div>

<script>
  function getChildNodeByName(el, name) {
    const items = []
    Array.from(el.children).forEach(node => {
      if (node.tagName == name.toUpperCase()) items.push(node)
      items.push(...getChildNodeByName(node, name))
    })

    return items
  }
  const nodes = getChildNodeByName(document, 'span')
  console.log(nodes)
</script>
```

### 标签关系

使用 childNodes 等获取的节点包括文本与注释，但这不是我们常用的，为此系统也提供了只操作元素的关系方法。

#### 基础知识

下面是处理标签关系的常用 API

| 节点属性               | 说明                                             |
| ---------------------- | ------------------------------------------------ |
| parentElement          | 获取父元素                                       |
| children               | 获取所有子元素                                   |
| childElementCount      | 子标签元素的数量                                 |
| firstElementChild      | 第一个子标签                                     |
| lastElementChild       | 最后一个子标签                                   |
| previousElementSibling | 上一个兄弟标签                                   |
| nextElementSibling     | 下一个兄弟标签                                   |
| contains               | 返回布尔值，判断传入的节点是否为该节点的后代节点 |

以下实例展示怎样通过元素关系获取元素

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <div class="xiangjun"><!-- 向军大叔 --></div>
</div>

<script>
  const app = document.querySelector(`#app`)
  console.log(app.children) //所有子元素
  console.log(app.firstElementChild) //第一个子元素 div.houdunren
  console.log(app.lastElementChild) //最后一个子元素 div.xiangjun

  const houdunwang = document.querySelector('.houdunwang')
  console.log(houdunwang.parentElement) //父元素 div#app

  console.log(houdunwang.previousElementSibling) //上一个兄弟元素 div.houdunren
  console.log(houdunwang.nextElementSibling) //下一个兄弟元素 div.xiangjun
</script>
```

html 标签的父节点是 document，但父标签节点不存在

```text
<script>
  console.log(document.documentElement.parentNode === document) //true
  console.log(document.documentElement.parentElement) //null
</script>
```

#### 按类名获取标签

下例是按 className 来获取标签

```text
<div>
  <ul>
    <li class="hd item">houdunren.com</li>
    <li class="item">后盾人</li>
    <li class="hd">向军</li>
  </ul>
</div>
<script>
  function getTagByClassName(className, tag = document) {
    const items = []
    Array.from(tag.children).map(el => {
      if (el.className.includes(className)) items.push(el)
      items.push(...getTagByClassName(className, el))
    })
    return items
  }

  console.log(getTagByClassName('hd'))
</script>
```

### 标签获取

系统提供了丰富的选择节点（NODE）的操作方法，下面我们来一一说明。

#### getElementById

使用 ID 选择是非常方便的选择具有 ID 值的节点元素，但注意 ID 应该是唯一的

> 只能通过 document 对象上使用

```text
<div id="houdunren">houdunren.com</div>
<script>
  const node = document.getElementById('houdunren')
  console.dir(node)
</script>
```

getElementById 只能通过 document 访问，不能通过元素读取拥有 ID 的子元素，下面的操作将产生错误

```text
<div id="app">
  houdunren.com
  <div id="houdunwang">houdunwang.com</div>
</div>
<script>
  const app = document.getElementById('app')
  const node = app.getElementById('houdunwang') //app.getElementById is not a function
  console.log(node)
</script>
```

下面自定义函数来支持批量按 ID 选择元素

```text
<div id="houdunren">houdunren.com</div>
<div id="app"></div>
<script>
  function getByElementIds(ids) {
    return ids.map((id) => document.getElementById(id))
  }
  let nodes = getByElementIds(['houdunren', 'app'])
  console.dir(nodes)
</script>
```

拥有 ID 的元素可做为 WINDOW 的属性进行访问

```text
<div id="app">
  houdunren.com
</div>
<script>
  console.log(app.innerHTML)
</script>
```

如果声明了变量这种访问方式将无效，所以并不建议使用这种方式访问对象

```text
<div id="app">
  houdunren.com
</div>
<script>
  let app = 'houdunwang'
  console.log(app.innerHTML)
</script>
```

#### getElementsByName

使用 getElementByName 获取设置了 name 属性的元素，虽然在 DIV 等元素上同样有效，但一般用来对表单元素进行操作时使用。

- 返回 NodeList 节点列表对象
- NodeList 顺序为元素在文档中的顺序
- 需要在 document 对象上使用

```text
<div name="houdunren">houdunren.com</div>
<input type="text" name="username" />

<script>
  const div = document.getElementsByName('houdunren')
  console.dir(div)
  const input = document.getElementsByName('username')
  console.dir(input)
</script>
```

#### getElementsByTagName

使用 getElementsByTagName 用于按标签名获取元素

- 返回 HTMLCollection 节点列表对象
- 是不区分大小的获取

```text
<div name="houdunren">houdunren.com</div>
<div id="app"></div>
<script>
  const divs = document.getElementsByTagName('div')
  console.dir(divs)
</script>
```

**通配符**

可以使用通配符 ***** 获取所有元素

```text
<div name="houdunren">houdunren.com</div>
<div id="app"></div>

<script>
  const nodes = document.getElementsByTagName('*')
  console.dir(nodes)
</script>
```

某个元素也可以使用通配置符 ***** 获取后代元素，下面获取 id 为 houdunren 的所有后代元素

```text
<div id="houdunren">
  <span>houdunren.com</span>
  <span>houdunwang.com</span>
</div>

<script>
  const nodes = document.getElementsByTagName('*').namedItem('houdunren').getElementsByTagName('*')
  console.dir(nodes)
</script>
```

#### getElementsByClassName

getElementsByClassName 用于按 class 样式属性值获取元素集合

- 设置多个值时顺序无关，指包含这些 class 属性的元素

```text
<div class="houdunren houdunwang xiangjun">houdunren.com</div>
<div class="houdunwang">houdunwang.com</div>

<script>
  const nodes = document.getElementsByClassName('houdunwang')
  console.log(nodes.length) //2

  //查找同时具有 houdunwang 与 houdunren 两个class属性的元素
  const tags = document.body.getElementsByClassName('houdunwang houdunren ')
  console.log(tags.length) //1
</script>
```

下面我们来自己开发一个与 getElementsByClassName 相同的功能函数

```text
<div class="houdunren houdunwang xiangjun">houdunren.com</div>
<div class="houdunwang">houdunwang.com</div>
<script>
  function getByClassName(names) {
    //将用户参数转为数组，并过滤掉空值
    const classNames = names.split(/\s+/).filter(t => t)

    return Array.from(document.getElementsByTagName('*')).filter(tag => {
      // 提取标签的所有 class 值为数组
      return classNames.every(className => {
        const names = tag.className
          .toUpperCase()
          .split(/\s+/)
          .filter(t => t)

        //检索标签是否存在class
        return names.some(name => name == className.toUpperCase())
      })
    })
  }

  console.log(getByClassName('houdunwang houdunren '))
</script>
```

### 样式选择器

在 CSS 中可以通过样式选择器修饰元素样式，在 DOM 操作中也可以使用这种方式查找元素。使用过 jQuery 库的朋友，应该对这种选择方式印象深刻。

使用 getElementsByTagName 等方式选择元素不够灵活，建议使用下面的样式选择器操作，更加方便灵活

#### querySelectorAll

使用 querySelectorAll 根据 CSS 选择器获取 Nodelist 节点列表

- 获取的 NodeList 节点列表是静态的，添加或删除元素后不变

获取所有 div 元素

```text
<div class="xiangjun">向军大叔</div>
<div id="app">
  <div class="houdunren houdunwang">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>

<script>
  const app = document.getElementById('app')
  const nodes = app.querySelectorAll('div')
  console.log(nodes.length) //2
</script>
```

获取 id 为 app 元素的，class 为 houdunren 的后代元素

```text
<div class="xiangjun">向军大叔</div>
<div id="app">
  <div class="houdunren houdunwang">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  const nodes = document.querySelectorAll('#app .houdunren')
  console.log(nodes.length) //2
</script>
```

根据元素属性值获取元素集合

```text
<div id="app">
  <div class="houdunren houdunwang" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  const nodes = document.querySelectorAll(`#app .houdunren[data='hd']`)
  console.log(nodes.length) //2
</script>
```

再来看一些通过样式选择器查找元素

```text
<div id="app">
  <div class="houdunren">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
  <span>后盾人</span>
</div>

<script>
  //查找紧临兄弟元素
  console.log(document.querySelectorAll('.houdunren+div.houdunwang'))

  //查找最后一个 div 子元素
  console.log(document.querySelector('#app div:last-of-type'))

  //查找第二个 div 元素
  console.log(document.querySelector('#app div:nth-of-type(2)').innerHTML)
</script>
```

#### querySelector

querySelector 使用 CSS 选择器获取一个元素，下面是根据属性获取单个元素

```text
<div id="app">
  <div class="houdunren houdunwang" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  const node = app.querySelector(`#app .houdunren[data='hd']`)
  console.log(node)
</script>
```

#### matches

用于检测元素是否是指定的样式选择器匹配，下面过滤掉所有 name 属性的 LI 元素

```text
<div id="app">
  <li>houdunren</li>
  <li>向军大叔</li>
  <li name="houdunwang">houdunwang.com</li>
</div>
<script>
  const nodes = [...document.querySelectorAll('li')].filter(node => {
    return !node.matches(`[name]`)
  })
  console.log(nodes)
</script>
```

#### closest

查找最近的符合选择器的祖先元素（包括自身），下例查找父级拥有 `.comment`类的元素

```text
<div class="comment">
  <ul class="comment">
    <li>houdunren.com</li>
  </ul>
</div>

<script>
  const li = document.getElementsByTagName('li')[0]
  const node = li.closest(`.comment`)
  //结果为 ul.comment
  console.log(node)
</script>
```

### 标准属性

元素的标准属性具有相对应的 DOM 对象属性

- 操作属性区分大小写
- 多个单词属性命名规则为第一个单词小写，其他单词大写
- 属性值是多类型并不全是字符串，也可能是对象等
- 事件处理程序属性值为函数
- style 属性为 CSSStyleDeclaration 对象
- DOM 对象不同生成的属性也不同

#### 属性别名

有些属性名与 JS 关键词冲突，系统已经起了别名

| 属性  | 别名      |
| ----- | --------- |
| class | className |
| for   | htmlFor   |

#### 操作属性

元素的标准属性可以直接进行操作，下面是直接设置元素的 className

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  const app = document.querySelector(`#app`)
  app.className = 'houdunren houdunwang'
</script>
```

下面设置图像元素的标准属性

```text
<img src="" alt="" />
<script>
  let img = document.images[0]
  img.src = 'https://www.houdurnen.com/avatar.jpg'
  img.alt = '后盾人'
</script>
```

使用 hidden 隐藏元素

```text
<div id="app">houdunren.com</div>
<script>
  const app = document.querySelector('#app')
  app.addEventListener('click', function () {
    this.hidden = true
  })
</script>
```

#### 多类型

大部分属性值是都是字符串，但并不是全部，下例中需要转换为数值后进行数据运算

```text
<input type="number" name="age" value="88" />

<script>
  let input = document.getElementsByName('age').item(0)
  input.value = parseInt(input.value) + 100
</script>
```

下面表单 checked 属性值为 Boolean 类型

```text
<label for="hot"> <input id="hot" type="checkbox" name="hot" />热门 </label>
<script>
  const node = document.querySelector(`[name='hot']`)
  node.addEventListener('change', function () {
    console.log(this.checked)
  })
</script>
```

属性值并都与 HTML 定义的值一样，下面返回的 href 属性值是完整链接

```text
<a href="#houdunren" id="home">后盾人</a>
<script>
  const node = document.querySelector(`#home`)
  console.log(node.href)
</script>
```

### 元素特征

对于标准的属性可以使用 DOM 属性的方式进行操作，但对于标签的非标准的定制属性则不可以。但 JS 提供了方法来控制标准或非标准的属性

可以理解为元素的属性分两个地方保存，DOM 属性中记录标准属性，特征中记录标准和定制属性

- 使用特征操作时属性名称不区分大小写
- 特征值都为字符串类型

| 方法            | 说明     |
| --------------- | -------- |
| getAttribute    | 获取属性 |
| setAttribute    | 设置属性 |
| removeAttribute | 删除属性 |
| hasAttribute    | 属性检测 |

特征是可迭代对象，下面使用 for...of 来进行遍历操作

```text
<div id="app" content="后盾人" color="red">houdunwang.com</div>
<script>
  const app = document.querySelector('#app')
  for (const { name, value } of app.attributes) {
    console.log(name, value)
  }
</script>
```

属性值都为字符串，所以数值类型需要进行转换

```text
<input type="number" name="age" value="88" />
<script>
  let input = document.getElementsByName('age').item(0)
  let value = input.getAttribute('value') * 1 + 100
  input.setAttribute('value', value)
</script>
```

使用 removeAttribute 删除元素的 class 属性，并通过 hasAttribute 进行检测删除结果

```text
<div class="houdunwang">houdunwang.com</div>
<script>
  let houdunwang = document.querySelector('.houdunwang')
  houdunwang.removeAttribute('class')
  console.log(houdunwang.hasAttribute('class')) //false
</script>
```

特征值与 HTML 定义是一致的，这和属性值是不同的

```text
<a href="#houdunren" id="home">后盾人</a>
<script>
  const node = document.querySelector(`#home`)

  // http://127.0.0.1:5500/test.html#houdunren
  console.log(node.href)

  // #houdunren
  console.log(node.getAttribute('href'))
</script>
```

#### attributes

元素提供了 attributes 属性可以只读的获取元素的属性

```text
<div class="houdunwang" data-content="后盾人">houdunwang.com</div>
<script>
  let houdunwang = document.querySelector('.houdunwang')
  console.dir(houdunwang.attributes['class'].nodeValue) //houdunwang
  console.dir(houdunwang.attributes['data-content'].nodeValue) //后盾人
</script>
```

#### 自定义特征

虽然可以随意定义特征并使用 getAttribute 等方法管理，但很容易造成与标签的现在或未来属性重名。建议使用以 data-为前缀的自定义特征处理，针对这种定义方式 JS 也提供了接口方便操作。

- 元素中以 data-为前缀的属性会添加到属性集中
- 使用元素的 dataset 可获取属性集中的属性
- 改变 dataset 的值也会影响到元素上

下面演示使用属性集设置 DIV 标签内容

```text
<div class="houdunwang" data-content="后盾人" data-color="red">houdunwang.com</div>

<script>
  let houdunwang = document.querySelector('.houdunwang')
  let content = houdunwang.dataset.content
  console.log(content) //后盾人
  houdunwang.innerHTML = `<span style="color:${houdunwang.dataset.color}">${content}</span>`
</script>
```

多个单词的特征使用驼峰命名方式读取

```text
<div class="houdunwang" data-title-color="red">houdunwang.com</div>
<script>
  let houdunwang = document.querySelector('.houdunwang')
  houdunwang.innerHTML = `
    <span style="color:${houdunwang.dataset.titleColor}">${houdunwang.innerHTML}</span>
  `
</script>
```

改变 dataset 值也会影响到页面元素上

```text
<div class="houdunwang" data-title-color="red">houdunwang.com</div>
<script>
  let houdunwang = document.querySelector('.houdunwang')
  houdunwang.addEventListener('click', function () {
    this.dataset.titleColor = ['red', 'green', 'blue'][Math.floor(Math.random() * 3)]
    this.style.color = this.dataset.titleColor
  })
</script>
```

#### 属性同步

特征和属性是记录元素属性的两个不同场所，大部分更改会进行同步操作。

下面使用属性更改了 className，会自动同步到了特征集中，反之亦然

```text
<div id="app" class="red">houdunren.com</div>
<script>
  const app = document.querySelector('#app')
  app.className = 'houdunwang'
  console.log(app.getAttribute('class')) //houdunwang
  app.setAttribute('class', 'blue')
  console.log(app.className) //blue
</script>
```

下面对 input 值使用属性设置，但并没有同步到特征

```text
<input type="text" name="package" value="houdunren.com" />
<script>
  const package = document.querySelector(`[name='package']`)
  package.value = 'houdunwang.com'
  console.log(package.getAttribute('value'))//houdunren.com
</script>
```

但改变 input 的特征 value 会同步到 DOM 对象属性

```text
<input type="text" name="package" value="houdunren.com" />
<script>
  const package = document.querySelector(`[name='package']`)
  package.setAttribute('value', 'houdunwang.com')
  console.log(package.value) //houdunwang.com
</script>
```

### 创建节点

创建节点的就是构建出 DOM 对象，然后根据需要添加到其他节点中

#### append

append 也是用于添加元素，同时他也可以直接添加文本等内容。

```text
<script>
    document.body.append((document.createElement('div').innerText = '向军'))
    document.body.append('houdunren.com')
</script>
```

#### createTextNode

创建文本对象并添加到元素中

```text
<div id="app"></div>
<script>
  let app = document.querySelector('#app')
  let text = document.createTextNode('houdunren')
  app.append(text)
</script>
```

#### createElement

使用 createElement 方法可以标签节点对象，创建 span 标签新节点并添加到 div#app

```text
<div id="app"></div>
<script>
  let app = document.querySelector('#app')
  let span = document.createElement('span')
  span.innerHTML = 'houdunren'
  app.append(span)
</script>
```

使用 PROMISE 结合节点操作来加载外部 JAVASCRIPT 文件

```text
function js(file) {
  return new Promise((resolve, reject) => {
    let js = document.createElement('script')
    js.type = 'text/javascript'
    js.src = file
    js.onload = resolve
    js.onerror = reject
    document.head.appendChild(js)
  })
}

js('11.js')
  .then(() => console.log('加载成功'))
  .catch((error) => console.log(`${error.target.src} 加载失败`))
```

使用同样的逻辑来实现加载 CSS 文件

```text
function css(file) {
  return new Promise((resolve, reject) => {
    let css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = file
    css.onload = resolve
    css.onerror = reject
    document.head.appendChild(css)
  })
}
css('1.css').then(() => {
  console.log('加载成功')
})
```

#### cloneNode&importNode

使用 cloneNode 和 document.importNode 用于复制节点对象操作

- cloneNode 是节点方法
- cloneNode 参数为 true 时递归复制子节点即深拷贝
- importNode 是 documet 对象方法

复制 div#app 节点并添加到 body 元素中

```text
<div id="app">houdunren</div>
<script>
  let app = document.querySelector('#app')
  let newApp = app.cloneNode(true)
  document.body.appendChild(newApp)
</script>
```

document.importNode 方法是部分 IE 浏览器不支持的，也是复制节点对象的方法

- 第一个参数为节点对象
- 第二个参数为 true 时递归复制

```text
<div id="app">houdunren</div>
<script>
  let app = document.querySelector('#app')
  let newApp = document.importNode(app, true)
  document.body.appendChild(newApp)
</script>
```

### 节点内容

#### innerHTML

inneHTML 用于向标签中添加 html 内容，同时触发浏览器的解析器重绘 DOM。

下例使用 innerHTML 获取和设置 div 内容

- innerHTML 中只解析 HTML 标签语法，所以其中的 script 不会做为 JS 处理

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  let app = document.querySelector('#app')
  console.log(app.innerHTML)

  app.innerHTML = '<h1>后盾人</h1>'
</script>
```

**重绘节点**

使用 innertHTML 操作会重绘元素，下面在点击第二次就没有效果了

- 因为对#app 内容进行了重绘，即删除原内容然后设置新内容
- 重绘后产生的 button 对象没有事件
- 重绘后又产生了新 img 对象，所以在控制台中可看到新图片在加载

```text
<div id="app">
  <button>houdunren.com</button>
  <img src="1.jpg" alt="" />
</div>
<script>
  const app = document.querySelector('#app')
  app.querySelector('button').addEventListener('click', function () {
    alert(this.innerHTML)
    this.parentElement.innerHTML += '<hr/>向军大叔'
  })
</script>
```

#### outerHTML

outerHTML 与 innerHTML 的区别是包含父标签

- outerHTML 不会删除原来的旧元素
- 只是用新内容替换替换旧内容，旧内容（元素）依然存在

下面将 div#app 替换为新内容

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  let app = document.querySelector('#app')
  console.log(app.outerHTML)

  app.outerHTML = '<h1>后盾人</h1>'
</script>
```

使用 innerHTML 内容是被删除然后使用新内容

```text
<div id="app">
  houdunren.com
</div>
<script>
  const app = document.querySelector('#app')
  console.log(app)
  app.innerHTML = 'houdunwang.com'
  console.log(app)
</script>
```

而使用 outerHTML 是保留旧内容，页面中使用新内容

```text
<div id="app">
  houdunren.com
</div>
<script>
  const app = document.querySelector('#app')
  console.log(app)
  app.outerHTML = 'houdunwang.com'
  console.log(app)
</script>
```

#### textContent 与 innerText

textContent 与 innerText 是访问或添加文本内容到元素中

- textContentb 部分 IE 浏览器版本不支持
- innerText 部分 FireFox 浏览器版本不支持
- 获取时忽略所有标签,只获取文本内容
- 设置时将内容中的标签当文本对待不进行标签解析

获取时忽略内容中的所有标签

```text
<div id="app">
  <h1>houdunren.com</h1>
</div>
<script>
  let app = document.querySelector('#app')
  console.log(app.textContent)
</script>
```

设置时将标签当文本对待，即转为 HTML 实体内容

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  let app = document.querySelector('#app')
  app.textContent="<h1>后盾人</h1>"
</script>
```

#### outerText

与 innerText 差别是会影响所操作的标签

```text
<h1>houdunren.com</h1>
<script>
  let h1 = document.querySelector('h1')
  h1.outerText = '后盾人'
</script>
```

#### insertAdjacentText

将文本插入到元素指定位置，不会对文本中的标签进行解析，包括以下位置

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

添加文本内容到 div#app 前面

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  let app = document.querySelector('#app')
  let span = document.createElement('span')
  app.insertAdjacentText('beforebegin', '<h1>后盾人</h1>')
</script>
```

### 节点管理

现在我们来讨论下节点元素的管理，包括添加、删除、替换等操作

#### 推荐方法

| 方法        | 说明                       |
| ----------- | -------------------------- |
| append      | 节点尾部添加新节点或字符串 |
| prepend     | 节点开始添加新节点或字符串 |
| before      | 节点前面添加新节点或字符串 |
| after       | 节点后面添加新节点或字符串 |
| replaceWith | 将节点替换为新节点或字符串 |

在标签内容后面添加新内容

```text
<div id="app">
  houdunren.com
</div>
<script>
  let app = document.querySelector('#app')
  app.append('-houdunwang.com')
</script>
```

同时添加多个内容，包括字符串与元素标签

```text
<div id="app">
  houdunren.com
</div>
<script>
  let app = document.querySelector('#app')
  let h1 = document.createElement('h1')
  h1.append('后盾人')
  app.append('@', h1)
</script>
```

将标签替换为新内容

```text
<div id="app">
  houdunren.com
</div>
<script>
  let app = document.querySelector('#app')
  let h1 = document.createElement('h1')
  h1.append('houdunwang.com')
  app.replaceWith(h1)
</script>
```

添加新元素 h1 到目标元素 div#app 里面

```text
<div id="app"></div>
<script>
  let app = document.querySelector('#app')
  let h1 = document.createElement('h1')
  h1.innerHTML = 'houdunren'
  app.append(h1)
</script>
```

将 h2 移动到 h1 之前

```text
<h1>houdunren.com@h1</h1>
<h2>houdunwang@h2</h2>
<script>
  let h1 = document.querySelector('h1')
  let h2 = document.querySelector('h2')
  h1.before(h2)
</script>
```

使用 remove 方法可以删除节点

```text
<div id="app">
  houdunren.com
</div>
<script>
  let app = document.querySelector('#app')
  app.remove()
</script>
```

#### insertAdjacentHTML

将 html 文本插入到元素指定位置，浏览器会对文本进行标签解析，包括以下位置

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

在 div#app 前添加 HTML 文本

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  let app = document.querySelector('#app')
  let span = document.createElement('span')
  app.insertAdjacentHTML('beforebegin', '<h1>后盾人</h1>')
</script>
```

#### insertAdjacentElement

insertAdjacentElement() 方法将指定元素插入到元素的指定位置，包括以下位置

- 第一个参数是位置
- 第二个参数为新元素节点

| 选项        | 说明         |
| ----------- | ------------ |
| beforebegin | 元素本身前面 |
| afterend    | 元素本身后面 |
| afterbegin  | 元素内部前面 |
| beforeend   | 元素内部后面 |

在 div#app 前插入 span 标签

```text
<div id="app">
  <div class="houdunren" data="hd">houdunren.com</div>
  <div class="houdunwang">houdunwang.com</div>
</div>
<script>
  let app = document.querySelector('#app')
  let span = document.createElement('span')
  span.innerHTML = '后盾人'
  app.insertAdjacentElement('beforebegin', span)
</script>
```

#### 古老方法

下面列表过去使用的操作节点的方法，现在不建议使用了。但在阅读老代码时可来此查看语法

| 方法         | 说明                           |
| ------------ | ------------------------------ |
| appendChild  | 添加节点                       |
| insertBefore | 用于插入元素到另一个元素的前面 |
| removeChild  | 删除节点                       |
| replaceChild | 进行节点的替换操作             |

#### DocumentFragment

当对节点进行添加、删除等操作时，都会引起页面回流来重新渲染页面,即重新渲染颜色，尺寸，大小、位置等等。所以会带来对性能的影响。

**解决以上问题可以使用以下几种方式**

1. 可以将 DOM 写成 html 字符串，然后使用 innerHTML 添加到页面中，但这种操作会比较麻烦，且不方便使用节点操作的相关方法。
2. 使用 createDocumentFragment 来管理节点时，此时节点都在内存中，而不是 DOM 树中。对节点的操作不会引发页面回流,带来比较好的性能体验。

**DocumentFragment 特点**

- createDocumentFragment 父节点为 null
- 继承自 node 所以可以使用 NODE 的属性和方法
- createDocumentFragment 创建的是文档碎片，节点类型 nodeType 为 11。因为不在 DOM 树中所以只能通过 JS 进行操作
- 添加 createDocumentFragment 添加到 DOM 后,就不可以再操作 createDocumentFragment 元素了,这与 DOM 操作是不同的
- 将文档 DOM 添加到 createDocumentFragment 时,会移除文档中的 DOM 元素
- createDocumentFragment 创建的节点添加到其他节点上时，会将子节点一并添加
- createDocumentFragment 是虚拟节点对象，不直接操作 DOM 所以性能更好
- 在排序/移动等大量 DOM 操作时建议使用 createDocumentFragment

### 表单控制

表单是高频操作的元素，下面来掌握表单项的 DOM 操作

#### 表单查找

JS 为表单的操作提供了单独的集合控制

- 使用 document.forms 获取表单集合
- 使用 form 的 name 属性获取指定 form 元素
- 根据表单项的 name 属性使用 form.elements.title 获取表单项，
- 也可以直接写成 form.name 形式，不需要 form.elements.title
- 针对 radio/checkbox 获取的表单项是一个集合

```text
<form action="" name="hd">
  <input type="text" name="title" />
</form>
<script>
  const form = document.forms.hd
  console.log(form.elements.title)
</script>
```

通过表单项可以反向查找 FORM

```text
<form action="" name="hd">
  <input type="text" name="title" />
</form>
<script>
  const form = document.forms.hd
  console.log(form.title.form === form) //true
</script>
```

### 样式管理

通过 DOM 修改样式可以通过更改元素的 class 属性或通过 style 对象设置行样式来完成。

- 建议使用 class 控制样式，将任务交给 CSS 处理，更简单高效

#### 批量设置

使用 JS 的 className 可以批量设置样式

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.className = 'houdunwang'
</script>
```

也可以通过特征的方式来更改

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.setAttribute('class', 'houdunwang')
</script>
```

#### classList

如果对类单独进行控制使用 classList 属性操作

| 方法                    | 说明     |
| ----------------------- | -------- |
| node.classList.add      | 添加类名 |
| node.classList.remove   | 删除类名 |
| node.classList.toggle   | 切换类名 |
| node.classList.contains | 类名检测 |

在元素的原有 class 上添加新 class

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.classList.add('houdunwang')
</script>
```

使用 classList 也可以移除 class 列表中的部分 class

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.classList.remove('container')
</script>
```

使用 toggle 切换类，即类已经存在时删除，不存在时添加

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.addEventListener('click', function () {
    this.classList.toggle('houdunwang')
  })
</script>
```

使用 contains 检查 class 是否存在

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  console.log(app.classList.contains('container')) //true
  console.log(app.classList.contains('houdunwang')) //false
</script>
```

#### 设置行样式

使用 style 对象可以对样式属性单独设置，使用 cssText 可以批量设置行样式

**样式属性设置**

使用节点的 style 对象来设置行样式

- 多个单词的属性使用驼峰进行命名

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.style.backgroundColor = 'red'
  app.style.color = 'yellow'
</script>
```

**批量设置行样式**

使用 cssText 属性可以批量设置行样式，属性名和写 CSS 一样不需要考虑驼峰命名

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.style.cssText = `background-color:red;color:yellow`
</script>
```

也可以通过 setAttribute 改变 style 特征来批量设置样式

```text
<div id="app" class="d-flex container">后盾人</div>
<script>
  let app = document.getElementById('app')
  app.setAttribute('style', `background-color:red;color:yellow;`)
</script>
```

#### 获取样式

可以通过 style 对象，window.window.getComputedStyle 对象获取样式属性，下面进行说明

**style**

可以使用 DOM 对象的 style 属性读取行样式

- style 对象不能获取行样式外定义的样式

```text
<style>
  div {
    color: yellow;
  }
</style>
<div id="app" style="background-color: red; margin: 20px;">后盾人</div>
<script>
  let app = document.getElementById('app')
  console.log(app.style.backgroundColor)
  console.log(app.style.margin)
  console.log(app.style.marginTop)
  console.log(app.style.color)
```

**getComputedStyle**

使用 window.getComputedStyle 可获取所有应用在元素上的样式属性

- 函数第一个参数为元素
- 第二个参数为伪类
- 这是计算后的样式属性，所以取得的单位和定义时的可能会有不同

```text
<style>
  div {
    font-size: 35px;
    color: yellow;
  }
</style>
<div id="app" style="background-color: red; margin: 20px;">后盾人</div>
<script>
  let app = document.getElementById('app')
  let fontSize = window.getComputedStyle(app).fontSize
  console.log(fontSize.slice(0, -2))
  console.log(parseInt(fontSize))
</script>
```
