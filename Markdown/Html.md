# Html

> 学习网页开发的框架

**什么是html**

> HTML 是用来描述网页的一种语言
>     - HTML 指的是超文本标记语言 (**H**yper **T**ext **M**arkup **L**anguage)
>         -   HTML 不是一种编程语言，而是一种`标记语言` (markup language)
>         -   标记语言是一套`标记标签` (markup tag)
>         -   HTML 使用标记标签来描述网页
>         **注：超文本有两层含义**
>         -   它可以加入图片、声音、动画、多媒体等内容（超越了文本限制）
>         -   它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接（超级链接文本）

# 常见的结构

> 下面是一个网站最常见的骨架结构：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>这是我的第一个HTML网页</title>
  </head>
  <body>
    Hello,world!
  </body>
</html>
```

## Head

---

### 文档申明

> 定义和用法
>
> - `<!DOCTYPE>` 声明必须是 HTML 文档的第一行，位于 `<html>` 标签之前。`
> - `<!DOCTYPE>` 声明不是 HTML 标签，它是指示 web 浏览器关于页面使用哪个 HTML 版本进行编写的指令。
> - 在 HTML 4.01 中，`<!DOCTYPE>` 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

#### W3C 组织

> - W3C 指万维网联盟（World Wide Web Consortium）是万维网的主要国际标准组织
>   - W3C 创建于 1994 年 10 月主要负责制定 WEB 标准
>   - W3C 由 _Tim Berners-Lee_（蒂姆·伯纳斯·李） 创建 ，被誉为 "互联网之父"
>   - W3C 是一个_会员组织_
>   - W3C 的工作是_对 web 进行标准化_
>   - W3C 创建并维护 _WWW 标准_
>   - W3C 标准也被称为 _W3C 规范_
>   - 主要是 HTML 和 CSS

#### 网页组成

> 结构（Structure）、表现（Presentation）和行为（Behavior）
> html、css、JavaScript

#### html标签

```html
<!--文档类型声明-->
<!DOCTYPE html>
<!--
    <html></html>标签
    lang 表示网页的语言，en表示英语，zh表示中文 ,不修改也行
    什么时候修改呢：如果网站有多国语言时修改，中文版、英语版、日语版、法语版等等，具体案例可参考 小米官网源码
-->
<html lang="en">
  <!-- <head></head>标签对，是网页的配置，不要认为是网页的头部 -->
  <head> </head>
  <!-- <body></body>标签对中书写网页的内容，包括网页的头部、主要内容、页脚等各个部分 -->
  <body></body>
</html>
```

#### 字符集

> TIP
>     -   meta 元标签，表示网页的基础配置
>     -   charset 字符集
>     -   UTF-8 是一种字符集

```html
<meta charset="UTF-8" />
```

#### 网页三要素

> TIP
>     -   title：网页的标题（30 字以内）
>     -   文字会显示在浏览器的标题栏上
>     -   title 也是搜索引擎收录网站时显示的标题，为了吸引用户点击，合理的标题设置有利于 SEO 优化
>     -   keywords：网页的关键词（关键词之间用英文状态下的逗号 "," 分隔）
>     -   description：网页的描述（150 字以内）
>     -    [点击查看详细版，网页三要素企业优化规范 👆](https://www.arryblog.com/guide/standard/seo.html#_1%E3%80%81%E7%BD%91%E9%A1%B5%E4%B8%89%E8%A6%81%E7%B4%A0%E7%9A%84%E5%9F%BA%E7%A1%80%E4%BC%98%E5%8C%96%E8%A7%84%E8%8C%83)

### 常见的标签

#### 标题标签

| 标签 | 属性     |
| ---- | -------- |
| h1   | 一级标题 |
| h2   | 二级标题 |
| h3   | 三级标题 |
| h4   | 四级标题 |
| h5   | 五级标题 |
| h6   | 六级标题 |

```html
<h1>我是h1标题标签</h1>
<h2>我是h2标题标签</h2>
<h3>我是h3标题标签</h3>
<h4>我是h4标题标签</h4>
<h5>我是h5标题标签</h5>
<h6>我是h6标题标签</h6>
```

#### 段落标签

> p标签
>
> - `<p></p>`标签表示`段落标签`，p 是英语 `Paragraph`的意思
> - 任何段落都要放到 p 标签中，因为 HTML 代码中即使代码换行了，页面显示效果也不会换行，必须写在 `<p></p>`中
> - `<p></p>`标签中`不能嵌套` h 标签、其他 p 标签和其他块级元素

#### div标签

> 关于 div 标签详细解读
> -`<div></div>`标签 是英语 `division` “分隔” 的缩写
>
> - div 标签对是用来将相关内容组合到一起，以和其他内容分隔，使文档结构更清晰
>   **比如：一般网页布局 头部，内容区，底部 都会通过 div 进行分隔**
> - `<div></div>` 是最常见的 HTML 标签，因为它会结合 CSS 来使用，实现网页的布局，这种布局形式叫做 `DIV+CSS`
>   -`<div></div>` 像一个容器，什么都可以容纳，因此工程师们习惯称呼 div 为 `盒子`

#### HTML5 特性

##### 1.空白折叠现象

> TIP
>
> - 文字和文字之间的多个空格、换行会被折叠成一个空格
> - 标签 `内壁` 和 文字之间的空格会被忽略

##### 2. 常用的转义符号

| 显示结果 | 描述       | 实体名称 |
| :------- | :--------- | :------- |
|          | 空格       | ` `      |
| <        | 小于号     | `<`      |
| >        | 大于号     | `>`      |
| &        | &符号      | `&`      |
| "        | 双引号     | `"`      |
| ©        | 版权       | `©`      |
| ®        | 已注册商标 | `®`      |

##### 3. HTML 的注释

> 对于 程序开发人员最讨厌的两件事：
>
> - 讨厌自己加注释
> - 讨厌别人的代码不加注释
>
> **添加注释的重要性：**
>
> - 提高代码的可阅读性，方便自己阅读或他人阅读
> - 增强代码的可维护性
>
> **注：**
>
> - 注释在网页中是不显示的，只有自己能看到
>
> **HTML 注释的语法：**
>
> ```html
> <!--注释内容-->
> ```

#### 列表标签

| 标签        | 语义                        |
| :---------- | :-------------------------- |
| `<ul></ul>` | 无序列表 （没有刻意的顺序） |
| `<ol></ol>` | 有序列表                    |
| `<dl></dl>` | 定义列表                    |

##### 1. 有序列表

> 语法
>
> - 无序列表使用 `<ul></ul>`标签，是英文单词`unordered list（不排序列表）` 缩写
> - 每个列表项都是 `<li></li>`标签，是英文单词 `list item（列表项目）`缩写
> - 无序列表是一个父子组合标签，上阵父子兵，不能单独出现
> - `<ul>` 父标签，`li` 子标签

```html
<h1>无序列表</h1>
<ul>
  <li>小炒肉</li>
</ul>
```

##### 2. 无序列表 - 列表嵌套

```html
<h1>无序列表-嵌套</h1>

<ul>
  <li>
    <h2>北京市</h2>
    <ul>
      <li>海淀区</li>
    </ul>
  </li>
  <li>
    <h2>上海市</h2>
    <ul>
      <li>黄浦区</li>
    </ul>
  </li>
</ul>
```

##### 3. 无序列表的 type 属性

| 属性 | 值     | 描述           |
| :--- | :----- | :------------- |
| type | disc   | 默认值，实心圆 |
| type | square | 实心正方形     |
| type | circle | 空心圆         |

```html
<h1>无序列表标签</h1>
<p>ul的type属性在HTML5中已经废弃，使用CSS替代</p>

<h2>style="list-style-type:disc" 实心圆</h2>
<ul style="list-style-type:disc">
  <li>小炒肉</li>
</ul>

<h2>style="list-style-type:square" 实心正方形</h2>
<ul style="list-style-type:square">
  <li>小炒肉</li>
</ul>

<h2>style="list-style-type:circle" 空心圆</h2>
<ul style="list-style-type:circle">
  <li>小炒肉</li>
</ul>
```

##### 4. 有序列表ol的type属性

| type 属性值 | 描述               |
| :---------- | :----------------- |
| 1           | 数字编号（默认值） |
| A           | 大写英文字母编号   |
| a           | 小写英文字母编号   |
| I           | 大写罗马数字编号   |
| i           | 小写罗马数字编号   |

##### 5 序列表 ol 的 start 属性

```html
<ol type="1" start="3">
  <li>JavaScript</li>
  <li>Python</li>
  <li>C/C++</li>
  <li>Java</li>
</ol>
```

##### 6. 有序列表 ol 的 reversed 属性

> reversed 属性
>
> - reversed 属性是 HTML5 中的新属性
> - reversed 属性是一个布尔属性
> - reversed 属性指定列表中的条目是否是倒序排列的
> - reversed 属性不需要值，只需要写 reversed 单词即可

```html
<h1>有序列表 ol的reversed属性（倒序排列）</h1>
<ol type="1" reversed>
  <li>JavaScript</li>
  <li>Python</li>
  <li>C/C++</li>
  <li>Java</li>
</ol>
```

##### 7. 定义列表

> 需要逐条给出定义描述的列表，就是定义列表
>
> - 定义列表使用 `<dl></dl>`标签，是英文单词`definition list（定义列表）` 缩写
> - `<dt></dt>`标签，是英文单词 `data term（数据项）`缩写
> - `<dd></dd>`标签，是英文单词 `data definition (数据定义)`缩写
> - `dd 标签`内容是对`dt 标签`的解释说明
> - 案例以`小米官网`首页 底部

```html
<h1>定义列表 - dt dd标签交替出现</h1>
<dl>
  <dt>服务支持</dt>
  <dd>售后政策</dd>
  <dd>关注我们</dd>
  <dd>自助服务</dd>

  <dt>关注我们</dt>
  <dd>新浪微博</dd>
  <dd>官方微信</dd>
  <dd>关于我们</dd>
</dl>
```

#### 多媒体标签

##### 1. 图片标签img

> ```html
> （1）语法和基础
> <img src="images/logo.png" />
> （2）img 标签的 alt 属性
>     - alt 属性是英语 alternate（代替者）缩写，对图像的文本描述，不强制
>     - 若由于某种原因无法加载图像，浏览器会在页面上显示 alt 属性中的备用文本
>     - 供视力不方便的用户使用的网页朗读器，也会朗读 alt 中的文本
>     - 对于搜索引擎优化友好，告诉搜索引擎图片的含义，利于搜索引擎爬虫抓取
> （3）img 标签的 width、height 属性
>     - width、height 属性设置图片宽度和高度，单位是 PX（像素），可不写
>     - 如果省略其中一个属性，则表示按原始比例缩放图片
> ```

##### 2. 支持图片的格式

| 支持格式        | 描述                                                    |
| :-------------- | :------------------------------------------------------ |
| `.bmp`          | Windows 画图软件默认保存的格式，位图                    |
| `.jpeg（.jpg）` | 有损压缩图片，通常用于照片显示                          |
| `.png`          | 便携式网络图像，用于 logo，背景图形等。支持透明和半透明 |
| `.gif`          | 动画 ，如：表情包                                       |
| `.svg`          | 矢量图片                                                |
| `.webp`         | 最新的压缩算法，非常优秀的图片格式                      |

##### 3. 路径的问题

> 相对路径
>
> 从当前网页出发，要找到图片的路径就叫 相对路径
>
> ```html
> <img src="images/logo.png" />
> <img src="../images/logo.png" />
> <img src="../../images/logo.png" />
> ```

> 绝对路径：
>
> - 描述文件或文件夹的精准完整地址
>
>   ```html
>   <img src="D:\web\icoding-web\images\logo.png" />
>   <img
>     src="https://www.icodingedu.com/files/system/2019/09-25/22132557f330499313.png"/>
>   ```

##### 4. 超链接a标签

###### 1.语法和基础

> 超级链接是网页与网页之间链接跳转的方法
>
> - `<a></a>`标签是英语 anchor 锚的首字母
> - `href` 属性是英语 `hypertext reference （超文本引用）`缩写

###### 2.a 标签的 href 属性

​        href 属性支持相对路径和绝对路径

```html
    <a href="./index.html">进入首页</a>
    <a href="../index.html">进入首页</a>
    <a href="D:\web\icoding-web\index.html">进入首页</a>
    <a href="https://www.icodingedu.com">艾编程</a>
```

###### 3.a 标签的 title 属性

a 标签的 title 属性用户设置鼠标的悬停文本

```html
    <a href="https://www.baidu.com" title="点击，进入百度官网"  >百度一下，你就知道</a>
```

###### 4.a 标签的 target 属性

> TIP

| target 属性值  | 描述               |
| :------------- | :----------------- |
| _blank / blank | 在新窗口中打开网页 |
| _self          | 默认，当前页面跳转 |

注：HTML4 中 blank 之前有个下划线 `_blank` 都可使用

```html
<h1>超级链接 - a标签</h1>

<a href="https://www.baidu.com">百度一下，你就知道</a>

<h2>a 标签的 target 属性</h2>

<a href="https://www.baidu.com" target="blank">_blank：新窗口打开</a
><br /><br />
<a href="https://www.baidu.com" target="_self">_self：默认，当前页面跳转</a>
```

给图片添加超级链接：点击图片标签跳转连接

```html
<a href="https://www.baidu.com" target="blank">
  <img src="images/logo.png" />
</a>
```

###### 5.页面锚点

> TIP
>
> - 对于很长的页面，可以对应的标签添加 `id属性`，将它变成页面的 "锚点"
> - 当点击锚点连接时，浏览器地址栏就会出现 `#id属性名称` 页面就会自动滚动到锚点处
> - 从其他页面页面点击带#号的链接，就可以直接定位到锚点位置

```html
<h1>页面锚点链接</h1>

<p>
  <a href="#phone">小米手机</a>    
  <a href="#zn">智能穿戴</a>    
  <a href="#jd">家电</a>    
  <a href="#sh">生活电器</a>    
  <a href="#cf">厨房电器</a>    
  <a href="#jj">智能家居</a>    
  <a href="#cx">出行搭配</a>    
  <a href="#bh">日用百货</a>
</p>

<h2 id="phone">小米手机</h2>
<img src="images/1.webp" alt="" />

<h2 id="zn">智能穿戴</h2>
<img src="images/2.webp" alt="" />

<h2 id="jd">家电</h2>
<img src="images/3.webp" alt="" />

<h2 id="sh">生活电器</h2>
<img src="images/4.webp" alt="" />

<h2 id="cf">厨房电器</h2>
<img src="images/5.webp" alt="" />

<h2 id="jj">智能家居</h2>
<img src="images/6.webp" alt="" />

<h2 id="cx">出行搭配</h2>
<img src="images/7.webp" alt="" />

<h2 id="bh">日用百货</h2>
<img src="images/8.webp" alt="" />

<p>
  <a href="#top">回到顶部</a>
</p>
```

 （6）特殊链接（下载、邮件、电话）

> 下载链接
>
> 指向 exe、zip、rar、word、excel 等文件格式的链接，将自动成为下载链接

```html
<h1>特殊链接</h1>

<h2>下载链接</h2>

<a href="doc/1.zip">web前端学习资料zip下载地址</a>

<br /><br />

<a href="doc/1.doc">学习资料doc文档</a>
```

##### 5. 音频和视频

> TIP
>
> - 早年在网页中插入音视频需要使用 Flash 技术，当下基本已经淘汰
> - 可直接使用 HTML5 标签轻松在网页中像插入图片一样插入音频和视频即可=

###### 1. 音频标签

> TIP
>
> - `<audio>`标签可直接在网页中插入音频，并自动生成默认的编辑器
> - `controls` 属性 ，显示播放空间
> - `src` 音频路径
> - `标签对中`对不兼容 audio 标签的浏览器所显示的文字
> - 浏览器中常用的音频格式：mp3 和 ogg 格式

```html
<audio controls src="mp3/不错哟.mp3">
  亲爱的，您的浏览器不支持audio标签，请升级您的浏览器哟 ^_^
</audio>
```

###### 2.音频标签 `audio` 的子标签

> TIP
>
> source 标签为媒体元素定义媒体资源，该标签允许定义多个格式的音视频文件，供浏览器选择自己支持的媒体类型进行播放

| Format | MIME-type  | 描述                                                       |
| :----- | :--------- | :--------------------------------------------------------- |
| MP3    | audio/mpeg | 一种音频压缩技术，用来大幅度的降低音频数据量               |
| Ogg    | audio/ogg  | 一种新的音频压缩格式，是完全免费、开发和没有专利限制的     |
| Wav    | audio/wav  | 微软公司开发的一种声音文件格式，声音文件质量和 CD 相差无几 |

- 浏览器需要选择它支持格式的源文件进行播放，如果都支持则任选一个（默认选择第一个）

###### 3.视频标签 `video` 的子标签

> TIP:

| Format | MIME-type  | 描述                                                         |
| :----- | :--------- | :----------------------------------------------------------- |
| mp4    | video/mp4  | MP4 = MPEG 4 文件使用 H264 视频编解码器和 AAC 音频编解码器   |
| webm   | video/webm | WebM 文件使用 VP8 视频编解码器和 Vorbis 音频编解码器         |
| avi    | video/avi  | avi 文件支持 256 色和 RLE 压缩，他对视频文件采用了一种有损压缩方式 |
| ogv    | video/ogv  | Ogg 文件使用 Theora 视频编解码器和 Vorbis 音频编解码器       |

- 浏览器需要选择它支持格式的源文件进行播放，如果都支持则任选一个（默认选择第一个）

  相关的属性标签

  | 属性         | 作用                                                         |
  | ------------ | ------------------------------------------------------------ |
  | control      | 进度条                                                       |
  | muted        | 静音                                                         |
  | autoplay     | 自动播放                                                     |
  | width/height | 宽度高度                                                     |
  | poster       | 播放的封面    用法：poster="路径"                            |
  | preload      | 预加载方式<br />auto----自动什么都进行加载<br />meeadata--加载元数据<br />none----什么都不加载 |
  | loop         | 循环                                                         |
  | soure        | 视频/音频的来源    source src="" type="video/mp4"            |
  |              |                                                              |

#### 表单标签

##### 1.form标签

> - 所有的 HTML 表单都是以一个 `<form>`元素包裹
> - `action`属性：提交表单时向何处发送表单数据
> - `method`属性：规定用于发送表单数据的 HTTP 方法

```html
<form action="/user/login" method="get">......</form>
```

##### 2.单行文本框

| 标签      | 属性                           | 描述                                                 |
| :-------- | :----------------------------- | :--------------------------------------------------- |
| `<input>` | type="text"                    | 单行文本框，单标签                                   |
| `<input>` | value="艾编程"                 | 文本框的值                                           |
| `<input>` | placeholder="请输入用户名 ..." | 提示文本，以浅灰色显示在文本框中，并不是文本框中的值 |
| `<input>` | disabled                       | 表示用户不能与元素交互，即：禁用                     |

```html
<form action="/user" method="POST">
  <p>用户名：<input type="text" /></p>
  <p>真实姓名：<input type="text" placeholder="请输入您的真实姓名 ..." /></p>
  <p>所在城市：<input type="text" value="北京市海淀区" disabled /></p>
</form>
```

##### 3.密码框

> - 与单行文本框类似，其属性为 `type="password"` 显示内容为 隐藏

##### 4.单选按钮

> | 标签      | 属性              | 描述                                       |
> | :-------- | :---------------- | :----------------------------------------- |
> | `<input>` | type="radio"      | 单选按钮                                   |
> | `<input>` | name="自定义名称" | 设置 `互斥` ，需将多个 name 属性为相同的值 |
> | `<input>` | value=""          | 向服务器提交的值                           |
> | `<input>` | checked           | 表示默认被选中                             |

```html
性别： <input type="radio" name="sex" /> 男 <input type="radio" name="sex" /> 女
<input type="radio" name="sex" checked /> 保密
```

##### 5.lable标签

> 当用户单击文字时，等于点击了单选按钮 ，`在HTML5中直接使用 label 标签包裹 单选按钮和文字 即可`

```html
性别：
<label> <input type="radio" name="sex" /> 男 </label>
<label> <input type="radio" name="sex" /> 女 </label>
<label> <input type="radio" name="sex" checked /> 保密 </label>
```

##### 6.复选框

| 标签      | 属性              | 描述                             |
| :-------- | :---------------- | :------------------------------- |
| `<input>` | type="checkbox"   | 复选框                           |
| `<input>` | name="自定义名称" | 同组复选框应该设置 name 为相同值 |
| `<input>` | value=""          | 向服务器提交的值                 |
| `<input>` | checked           | 表示默认被选中                   |

```html
<label>
  <input type="checkbox" name="hobby" checked value="篮球" /> 篮球
</label>
<label> <input type="checkbox" name="hobby" value="乒乓球" /> 乒乓球 </label>
<label> <input type="checkbox" name="hobby" value="书法" /> 书法 </label>
<label>
  <input type="checkbox" name="hobby" value="跑步健身" /> 跑步健身
</label>
```

##### 7.下拉菜单

> - `<select>`标签，即 下拉菜单
> - `<option>`是内部选项

```html
请选择 省：
<select>
  <option value="湖北省">湖北省</option>
  <option value="湖南省">湖南省</option>
  <option value="安徽省">安徽省</option>
  <option value="陕西省">陕西省</option>
</select>
市：
<select>
  <option value="西安市">西安市</option>
</select>
区：
<select>
  <option value="雁塔区">高新区</option>
</select>
```

##### 8.多行文本框

> - `<textarea>` 表示多行文本框
> - 有 `rows`和`cols`属性，用于定义多行文本框的行数和列数

```html
用户评论： <textarea cols="100" rows="10"></textarea>
```

##### 9.按钮

| 标签      | 属性          | 描述                                       |
| :-------- | :------------ | :----------------------------------------- |
| `<input>` | type="button" | 普通按钮，也可以简写为 `<button></button>` |
| `<input>` | type="submit" | 提交按钮                                   |
| `<input>` | type="reset"  | 重置按钮                                   |

```html
<button>我是一个button标签，是一个普通按钮</button>
<input type="button" value="我是一个普通按钮" />
<input type="submit" value="提交表单信息" />
<input type="reset" value="重 置" />
```

##### 10.常用的表单标签

| 标签      | type 属性 | 描述                                       |
| :-------- | :-------- | :----------------------------------------- |
| `<input>` | text      | 单行文本框                                 |
| `<input>` | radio     | 单选按钮                                   |
| `<input>` | checkbox  | 复选框                                     |
| `<input>` | password  | 密码框                                     |
| `<input>` | button    | 普通按钮，也可以简写为 `<button></button>` |
| `<input>` | submit    | 提交按钮                                   |
| `<input>` | reset     | 重置按钮                                   |

##### 11.HTML5新增的标签

| 标签      | type 属性  | 描述               |
| :-------- | :--------- | :----------------- |
| `<input>` | color      | 颜色选择控件       |
| `<input>` | date、time | 日期、时间选择控件 |
| `<input>` | email      | 电子邮件输入控件   |
| `<input>` | file       | 文件选择控件       |
| `<input>` | number     | 数字输入控件       |
| `<input>` | range      | 拖拽条控件         |
| `<input>` | search     | 搜索框             |
| `<input>` | url        | 网址输入控件       |

#### 表格标签

##### 1.html表格标签

| 标签        | 描述                                          |
| :---------- | :-------------------------------------------- |
| `<table>`   | 定义表格                                      |
| `<th>`      | 定义表格的表头                                |
| `<tr>`      | 定义表格的行                                  |
| `<td>`      | 定义表格单元                                  |
| `<caption>` | 定义表格标题（作为 table 的第一个子元素出现） |
| `<thead>`   | 定义表格的页眉                                |
| `<tbody>`   | 定义表格的主体                                |
| `<tfoot>`   | 定义表格的页脚                                |

##### 2.table 标签属性

| 属性          | 描述                                       |
| :------------ | :----------------------------------------- |
| `border`      | 表格的边框                                 |
| `width`       | 表格的宽度（HTML5 不支持）                 |
| `cellpadding` | 单元边沿与其内容之间的空白（HTML5 不支持） |
| `cellspacing` | 单元格之间的空白（HTML5 不支持）           |

##### 3.table的跨行跨列

| 属性      | 值     | 描述                   |
| :-------- | :----- | :--------------------- |
| `colspan` | number | 规定单元格可横跨的列数 |
| `rowspan` | number | 设置单元格可纵跨的行   |

##### 4.thead，tbody，tfoot 标签

```html
<h2>表格：thead、tbody、tfoot标签</h2>

<table border="1" width="500">
  <thead>
    <caption>
      同学通讯录
    </caption>
    <tr>
      <th>专业</th>
      <th>姓名</th>
      <th>性别</th>
      <th>年龄</th>
      <th>所在城市</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>计算机</th>
      <td>arry</td>
      <td>男</td>
      <td>18</td>
      <td>北京</td>
    </tr>
    <tr>
      <th>外语</th>
      <td>豆豆</td>
      <td>女</td>
      <td>21</td>
      <td>上海</td>
    </tr>
    <tr>
      <th>市场营销</th>
      <td>翠花</td>
      <td>19</td>
      <td>男</td>
      <td>深圳</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th>备注</th>
      <td colspan="4"></td>
    </tr>
  </tfoot>
</table>
```

![image-20220723235409237](C:\Users\xiaojiu\AppData\Roaming\Typora\typora-user-images\image-20220723235409237.png)

#### 知识总结

##### 1.文档声明、文档结构、功能标签

| 分类         | 标签名称                | 描述                                                         |
| :----------- | :---------------------- | :----------------------------------------------------------- |
| 文档声明     | **`<!DOCTYPE>`**        | 用于告诉浏览器此文档的类型是什么 处于`<html>`**标签之前。用于告诉浏览器此文档的类型是什么。目前开发中常用的声明是**`<!DOCTYPE html>`，表示声明一个 HTML5 文档。 它不属于 HTML 标签，而是一条指令 |
| 文档结构标签 | html，head，title，body | （1）html 标签：每创建一个 HTML 文件，都需要创建 html 标签对。除了声明文档类型的代码，其他的所有内容都存放在 html 标签对中； （2） head 标签：定义文档的头部，用来包含网页的配置（例如网页的标题 title，网页的基础配置 meta 都放在 head 中）； （3）title 标签：定义网页的标题，标题内容会显示在浏览器的标签栏上 （4）body 标签：定义网页的主体，例如：网页中的图片、文字等 |
| 功能标签     | meta                    | 元标签，用来表示网页的基础配置                               |

##### 2.块级元素

| 标签名称      | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| h1 ~ h6       | 一级标题 ~ 六级标题                                          |
| p             | 段落标签，用来描述网页中的段落内容                           |
| div           | 用于页面区域的划分。它就像一个容器，用来放某一个区域的内容   |
| ul，ol        | 定义无序列表，定义有序列表                                   |
| li            | 定义列表项，与 ul 或者 ol 配合使用                           |
| dt，dd        | 定义列表中的项目， 描述列表中的项目                          |
| figure        | 定义一段独立的内容（不常用，了解即可）                       |
| figcaption    | 定义 figure 元素的标题（不常用，了解即可）                   |
| form          | 表单标签，里面包含很多搜集信息的表单元素，如输入框，复选框等 |
| table，canvas | 定义 HTML 表格，通过脚本（通常是 JavaScript）来绘制图形      |
| pre           | 预格式化的文本                                               |

##### 3.区块标签

| 标签名称 | 描述                           |
| :------- | :----------------------------- |
| header   | 定义页头                       |
| nav      | 定义导航                       |
| main     | 定义页面的主体区域             |
| aside    | 可用作文章的侧栏               |
| article  | 可用作文章的内容               |
| section  | 可用作文档的区域块，类似于 div |
| footer   | 定义页脚                       |

##### 4.内联元素

| 标签名称  | 描述                                                         |
| :-------- | :----------------------------------------------------------- |
| a         | 超链接标签，用于从一张页面链接到另一张页面                   |
| span      | 用来组合文档中的行内元素，一般用来包裹文字                   |
| label     | 为 input 元素定义标注（标记）label 可设置 for 属性           |
| b，u      | 字体加粗标签，下划线文本标签（不常用，了解即可）             |
| i，strong | 斜体文本标签，用于强调文本的标签字体会加粗（不常用，了解即可） |
| em        | 用于强调文本的标签，字体变成斜体（不常用，了解即可）         |
| mark      | 突出显示文本的标签，字体会有背景颜色，默认的是黄色（不常用，了解即可） |
| datalist  | 标签/控件，需要结合 option 标签使用（不常用，了解即可）      |

##### 5.特殊内联元素

| 标签名称 | 描述                                                         |
| :------- | :----------------------------------------------------------- |
| img      | 图片标签，用于在网页中嵌入图片                               |
| audio    | 音频标签，用于在页面中引入音频                               |
| video    | 视频标签，用于在页面中引入视频                               |
| input    | 定义用户可输入数据的输入字段。例如登录页面的用户名和密码框，都是使用 input 标签 |
| select   | 定义下拉列表                                                 |
| option   | 定义下拉列表项，需要与 select 配合使用（块元素，写在这里是因为它需要跟 select 标签一起使用） |
| textarea | 定义多行文本框，常用于留言框、备注框等                       |

##### 6.转义字符

| 标签名  | 描述            |
| :------ | :-------------- |
| **` `** | 表示空格符号    |
| **`<`** | 表示小于号“<”   |
| **`>`** | 表示大于号“>”   |
| **`©`** | 表示版权符号“©” |

##### 7.表格标签

| 标签名  | 描述                                     |
| :------ | :--------------------------------------- |
| table   | 表格标签                                 |
| tr      | 表格行                                   |
| td      | 表格列                                   |
| th      | 标签，可替代 td 标签，用来设置表格的标题 |
| thead   | 定义表格头部                             |
| tbody   | 定义表格主体内容                         |
| tfoot   | 定义表格尾部                             |
| caption | 设置表格的标题                           |

##### 8.标签中的属性

| 属性名          | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| lang            | html 标签的属性，用来标记网页的语言； 常见属性值有："en"和"zh"；en 代表英语, zh 代表中文 |
| charset         | meta 标签的属性，声明页面文档使用的字符编码类型。 常用的属性值有：UTF-8 和 GB2312 |
| type            | 修改无序列表与有序列表默认的前导样式（已被废弃，了解即可） 1、type 属性写在无序列表中，属性值有： （1）disc：默认值，实心圆样式 （2）circle： 空心圆样式 （3）square：实心方块样式 2、type 属性写在有序列表中，属性值有： （1）1：默认值，数字编号 （2）A：大写英文编号 （3）i：小写罗马数字编号 （4）I：大写罗马数字编号 （5）a：小写英文编号 |
| start           | 有序列表的属性，指定列表编号的起始值，能修改有序列表标签默认的前导样式（不常用，了解即可） |
| reversed        | 有序列表的属性，指定列表中的条目是否倒序排列的（不常用，了解即可） |
| src             | （1）img 标签的属性，指定图片的路径 （2）audio 标签和 video 标签也可以设置 src 属性，指定音频、视频的路径 |
| alt             | img 标签的属性，用来对引入的图片进行文本描述                 |
| width           | 规定元素的宽度。此属性不常用，了解即可。后续学习 css，会使用 css 样式设置元素宽度 |
| height          | 规定元素的高度。此属性不常用，了解即可。后续学习 css，会使用 css 样式设置元素高度。 注意，height 或者 width 如果省略其中一个属性，则按照图片原始比例缩放图片 |
| href            | a 标签属性，规定该链接要跳转到目标页面的地址                 |
| title           | a 标签属性，设置鼠标悬停的文本                               |
| target          | a 标签属性，规定在何处打开链接文档； 如果属性值为 blank 或_blank，会打开新的标签页 |
| controls        | audio/video 的属性，用于显示播放控件                         |
| autoplay        | audio/video 的属性，设置音频/视频自动播放                    |
| loop            | audio/video 的属性，设置音频/视频可以循环播放                |
| class           | 所有标签都可以使用这个属性，用来定义元素的类名（后续学习 css，会有详细的讲解） |
| action          | form 标签的属性，用来设置 form 表单的数据要提交到哪个地址。提交到哪个地址，后端开发会告诉我们（不常用，了解一下。提交数据常用 ajax，后面会学习到的） |
| method          | form 标签的属性，用来设置表单的提交方式，常用的方式有 get 或 post（不常用，了解即可） |
| rows            | textarea 标签属性，设置多行文本框有多少列                    |
| cols            | textarea 标签属性，设置多行文本框有多少行                    |
| list            | datalist 控件的属性，二者结合，可以与输入框绑定，为输入框设置备选项（不常用，了解即可） |
| border          | 边框属性，可为 table 添加边框                                |
| border-collapse | css 样式，通常给表格设置 border-collapse：collapse；让表格边框合并，成为单线表格; |
| colspan         | 表格标签的属性，实现跨列合并的效果，用来设置 td 或 th 跨列合并 |
| rowspan         | 表格标签的属性，实现跨行合并的效果，用来设置 td 或 th 跨行合并 |
| cellspacing     | 设置表格单元格内容与边框之间的间隙（不常用，了解即可）       |
| cellpadding     | 设置两个单元格之间的间隙（不常用，了解即可）                 |

##### 9.input 元素中的属性

| 属性名称    | 描述                                                         |
| :---------- | :----------------------------------------------------------- |
| type        | 用来定义表单元素的类型。属性值如下： （1）text：单行文本输入框 （2）radio：单选按钮 （3）checkbox：复选框 （4）password：密码框 （5）button：普通按钮，也可以直接写成 button 按钮，例如：`<button>按钮标签</button>` （6）submit：提交按钮 （7）reset：重置按钮 （8）color：颜色控件（不常用，了解即可） （9）date：日期控件 （10）time：时间控件 （11）email：电子邮件输入控件 （12）file：文件选择控件，需要上传本地文件时，可以使用它 （13）number：表示数字输入控件 （14）range：表示拖拽条（不常用，了解即可） （15）search：t 表示搜索框（不常用，了解即可） （16）url：表示网址输入控件 |
| value       | 用于为 input 元素设定值，value 值一般是给后端发送数据时使用，后续学习了相关课程就会了解 |
| name        | 规定 input 元素的名称                                        |
| checked     | 用来设置单选按钮、多选按钮的默认选中项                       |
| placeholder | 表示提示文本，用来设置输入框的提示信息，告诉用户该输入框需要输入什么内容 |
| disabled    | 用于禁用 input 元素，表示只读                                |
| max         | max 表示最大值，表示数字输入控件（即 type="number"的 input 元素）允许输入的最大值 |
| min         | min 表示最小值，最小值，表示数字输入控件（即 type="number"的 input 元素）允许输入的最小值 |
| require     | 表示必填字段，约束某项内容是必填项，比如规定”用户名“项，是必填项 |