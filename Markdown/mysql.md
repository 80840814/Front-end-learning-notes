# 	数据库的学习

## 环境配置

> 1. 下载安装mysql之后，配置好系统的变量（地址进入到bin目录下）
> 2. 使用的软件Navicat（收费）/开源项目dbeaver

---

## 基础操作

### 连接数据库

#### 	命令行连接

​    `mysql  -u[用户名] -p[密码] -P[端口] -h[主机地址]`

- 输入命令  结尾需要加分号
- 书写错误之后，在命令后面加`\c `表示放弃这个指令
- 结束之后输入`exit`退出`mysql`

##### 创建数据库

`create database 数据库名称 charset utf8;`

>  指定字符集 

##### 查看数据库

`show databases;`

##### 使用/进入数据库

`use 数据库名;`

##### 删除数据表

`drop database  数据表名;`

`drop database if exists  数据表名称;`**推荐**

##### 导入外部的sql文件

 `mysql -u[用户名] -p <sql.sql`

> 输入密码之后会自动执行

`source 数据库文件 `

#### 图形化连接

>  使用dbeaver操作

#### 基础操作

##### 新建数据表

```mysql
CREATE  TABLE	class (id int PRIMARY KEY AUTO_INCREMENT	,cname varchar(20) NOT NULL	,descripton varchar(100) null ) charset utf8;
DESC	class ;
```

##### 查看数据表

`desc 表名`

##### 添加数据

###### 单条添加

```mysql
INSERT INTO	class SET	cname="php",descripton ="this is a desriton";
```

###### 多条添加

```mysql
INSERT INTO	class (cname,descripton) VALUES ("linux","demo"),('css',"stylesheet"),('js','javascript');
```

![截图_20230307171508](C:\Users\17188\AppData\Local\Temp\tianruoocr\截图_20230307171508.png)

##### 复制表

> 新建一个表test来源于class(没有数据)

```mysql
CREATE TABLE test LIKE class;
```

**想要表的数据，插入即可**

```mysql
INSERT INTO	test SELECT	* FROM class ;
```

**只想要cname的话**

```mysql
INSERT INTO	test (cname) SELECT cname FROM class ;
```

**a表想要所有的数据**

```mysql
CREATE TABLE a SELECT	* FROM class;
```

**新建一个b表，只取class里面的cname数据**

```mysql
CREATE TABLE b (id int PRIMARY KEY AUTO_INCREMENT	,cname varchar(100) )SELECT	cname FROM class ;
```

**新建表c   让表里面的name使用class表里cname的数据**

**起别名**

```mysql
CREATE TABLE c (id int PRIMARY KEY AUTO_INCREMENT	,name varchar(100) )SELECT	cname AS name FROM class ;
```

##### 查询表

###### **查询所有**

`SELECT * FROM 表名;`

###### **查询特定的字段**

`SELECT id as ids,cname from 表名`

###### 条件查询

**单个条件查询**

```mysql
SELECT * FROM  class  WHERE id>2 ;
```

**多个条件查询**

> like %xx%  包含xx关键词  不包含就是not like

```mysql
SELECT * FROM  class  WHERE id>2 AND descripton LIKE '%s%';
```

**连接字符串函数的使用**

```mysql
SELECT concat  (cname,descripton) AS class_info FROM class;
```

新建一个stu的数据表

```mysql
//创建表
CREATE TABLE stu (id int PRIMARY KEY AUTO_INCREMENT ,sname varchar(10),class_id int  DEFAULT NULL ,age SMALLINT	NOT null	);
//插入数据
INSERT INTO stu (sname,class_id,age) values ('alice',1,12),('boy',2,15),('mary',3,22),('ted',1,11);
//查询二班的学生并且名字里面包含a  去掉前面百分号以a开头，反之是以a结尾 任何位置就是俩%
SELECT * FROM stu WHERE  class_id =2 OR sname LIKE '%a%';
//查询所在的班级  distinct是去重复
SELECT DISTINCT  class_id FROM	stu s ;
//查询年龄在一个区间内的数据
SELECT * FROM  stu WHERE age >=10 AND age<=20;	
SELECT * FROM  stu WHERE age BETWEEN 1 AND 20;
//查询不在区间里面的
SELECT * FROM  stu WHERE age not BETWEEN 1 AND 20;
//查询学生在教室的ID是2或者3
SELECT * FROM stu WHERE class_id =1 OR  class_id =2;
SELECT * FROM  stu s WHERE class_id IN (1,3);
//查询学生在教室的ID不是2或者3
SELECT * FROM  stu s WHERE class_id NOT IN (1,3);
//查询班级为空的学生/不为空
SELECT * FROM stu s WHERE class_id IS NULL ;
SELECT *FROM stu s WHERE class_id IS NOT NULL ;
//将班级为空的学生那一个位置改为未分配
SELECT sname,if(class_id,class_id,"未分配") FROM stu;
SELECT sname,ifnull(class_id,'未分配')FROM stu s ; 
//按照年龄的升序/降序进行排序
SELECT sname,age FROM stu s  ORDER BY age ASC ; //升序
SELECT  sname,age FROM stu s ORDER BY age DESC  ;//降序
//按照班级从小到大，班级一样，按照年龄从小到大
SELECT * FROM stu s ORDER BY class_id ASC ,age ASC ;
//取最后俩个报名的学生
SELECT *FROM stu s ORDER BY id DESC LIMIT 2;
//排序  limit   从哪里开始,取几个
SELECT  * FROM  stu s ORDER BY id ASC LIMIT 1,2;
//排序，取2班里最小年龄的学生，如果有一样年龄的都进行显示
SELECT *FROM stu WHERE age =(SELECT age FROM stu WHERE  class_id=2 AND age IS NOT NULL ORDER BY age ASC LIMIT 1);
//将班级编号为空的数据，设置成2班
UPDATE stu SET class_id=2 WHERE class_id IS NULL ;
//将年龄西小于20的改为班级一
UPDATE stu SET class_id=1 WHERE age <20;
//将年龄小于20且班级是1班的，年龄加10岁
UPDATE stu SET age=age+10 WHERE class_id =1 AND age <20;
//删除年龄小于30并且班级为null的数值
DELETE FROM stu WHERE age <30 AND class_id  IS NULL ;
//删除最后报名的俩个学生
DELETE FROM stu  ORDER BY id DESC  LIMIT 2;
```

## 表维护 

### 基本维护

#### 修改表名

```mysql
方法1：
ALTER TABLE stu RENAME stus;
方法2：
RENAME TABLE stus TO stu;
```

#### 修改表的字符集

```mysql
ALTER  TABLE	demo1  charset	 gbk;
```

#### 删除表数据

```mysql
- DELETE FROM demo1;
- truncate demo1; 
- DROP TABLE IF EXISTS  demo1; 
```

### 字段的维护

#### 修改字段

修改`demo2`里面`sname`的类型为`varchar（50）`非空

```mysql
ALTER TABLE demo2 MODIFY sname varchar(50)  NOT NULL ;
```

修改`demo2`里的`sname`为`name char（20）`非空

```mysql
ALTER TABLE demo2 CHANGE sname name char(20) NOT NULL ;
```

#### 添加字段

添加字段为`sex`类型为`smallint `默认为空

```mysql
ALTER  TABLE demo2 ADD sex SMALLINT DEFAULT NULL ;
```

在`id`的后面加`email`的字段

```mysql
ALTER  TABLE demo2 ADD	 email char(50) DEFAULT NULL AFTER id;
```

在最开始加一个`QQ`字段

```mysql
ALTER TABLE demo2  ADD QQ varchar(20) DEFAULT NULL FIRST;
```

#### 删除字段

```mysql
ALTER TABLE demo2  DROP QQ;
```

### 表的主键维护

#### 添加自增列

```mysql
ALTER TABLE demo2  MODIFY id int  NOT NULL AUTO_INCREMENT  ; 
```

#### 删除自增列

```mysql
ALTER  TABLE demo2  MODIFY id int NOT NULL ; 
```

#### 添加主键

```mysql
ALTER TABLE demo2  ADD PRIMARY KEY (id);
```

#### 删除主键

1. 先需要删除自增列  

   ```mysql
   ALTER  TABLE demo2  MODIFY id int NOT NULL ; 
   ```

   

2. 再删主键

   ```mysql
   ALTER TABLE demo2 DROP PRIMARY KEY ;
   ```

**tips:新建一个表，设置主键以及自增**

```mysql
CREATE  TABLE st3 SELECT *FROM stu s ;
ALTER TABLE st3 MODIFY id int NOT NULL AUTO_INCREMENT ,ADD  PRIMARY KEY(id);
```



## 数据类型

> 继承关系

| 数据库 |  表  | 字段 |
| :----: | :--: | :--: |
|        |      |      |

> 改变表的字符集之后，字段的字符集不会直接改变，新增字段之后会更改成最新的字符集

**校对规则是影响字符之间的比较以及排序的**

### 处理函数的技巧

```mysql
SELECT LEFT (cname,2),RIGHT (cname,3) ,mid(cname,2,1),mid(cname,2)  FROM class ;
//从左边开始取俩位，右边开始取俩位，从第2个开始取一位，从第2个数据开始取完
```

截取一部分数据，和另外一部分进行组合

```mysql
UPDATE class SET cname=concat('https://yixiaomo.top',mid(cname,8))WHERE id>=5; 
```

从第二位开始获取数据

```mysql
SELECT substring(cname,2) FROM class c ; 
```

获取字符的长度 

```mysql
SELECT char_length(cname)FROM class c ; 
```

如果字符超8位之后使用...代替后面的否则全部展示 

```mysql
SELECT IF (char_length(cname)>8,concat(LEFT(cname,8),'...'),cname)AS cname FROM class c ;
```

### 数值类型

| MySQL 数据类型 | 范围（有符号）                        | 范围（无符号）                  |
| -------------- | ------------------------------------- | ------------------------------- |
| tinyint(m)     | 1 个字节 范围(-128~127)               | (0，255)                        |
| smallint(m)    | 2 个字节 范围(-32768~32767)           | (0，65 535)                     |
| mediumint(m)   | 3 个字节 范围(-8388608~8388607)       | (0，16 777 215)                 |
| int(m)         | 4 个字节 范围(-2147483648~2147483647) | (0，4 294 967 295)              |
| bigint(m)      | 8 个字节 范围(+-9.22*10 的 18 次方)   | (0，18 446 744 073 709 551 615) |

- 取值范围如果加了 unsigned，则最大值翻倍，如 tinyint unsigned 的取值范围为(0~256)。
- m 的含义不是允许字段的长度，而是显示长度，在为字段设置 `zerofill` 时有效。

```mysql
ALTER TABLE class ADD stat TINYINT; 
//(-128,127)
ALTER TABLE class ADD stat TINYINT unsigned;  
//(0,255)
```

**`**ZEROFILL**`前导零**

> 不够五位的前面补零，凑够五位

```mysql
ALTER TABLE class ADD status int(5) ZEROFILL;
```

### 浮点数

| 类型    | 大小                               | 范围（有符号）                                               | 范围（无符号）                                               |
| :------ | :--------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| FLOAT   | 4 字节                             | (-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38) | 0，(1.175 494 351 E-38，3.402 823 466 E+38)                  |
| DOUBLE  | 8 字节                             | (-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) | 0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308) |
| DECIMAL | DECIMAL(M,D) ，m<65 是总个数，d<30 | 依赖于 M 和 D 的值                                           | 依赖于 M 和 D 的值                                           |

- float：2^23 = 8388608，一共七位，这意味着最多能有 7 位有效数字，但绝对能保证的为 6 位，即 float 的精度为 6~7 位有效数字
- double：2^52 = 4503599627370496，一共 16 位，double 的精度为 15~16 位
- 浮点型在数据库中存放的是近似值，而定点类型在数据库中存放的是精确值
- decimal(m,d) 参数 m<65 是总个数，d<30 且 d<m 是小数位
- 对货币等对精度敏感的数据，应该用定点数 decimal 存储

### ENUM

ENUM 类型因为只允许在集合中取得一个值，有点类似于单选项。在处理相互排拆的数据时容易让人理解，比如人类的性别。换个枚举最大可以有 65535 个成员值

```text
ALTER TABLE stu ADD sex ENUM('男','女') DEFAULT NULL;
```

可以使用索引或值添加 enum 数据

```text
INSERT INTO stu (sname,class_id,sex) VALUES('李岗',1,'男');
INSERT INTO stu (sname,class_id,sex) VALUES('李玉',1,2);
```

可以使用值与索引检索 ENUM

```text
SELECT * from stu WHERE sex='女';
SELECT * from stu WHERE sex=2;
```

### set

SET 类型与 ENUM 类型相似但不相同。SET 类型可以从预定义的集合中取得任意数量的值。一个 SET 类型最多可以包含 64 项元素。

```mysql
ALTER TABLE test ADD flag set('推荐','置顶','热门','图文');

INSERT  INTO test (cname,descripton,flag)VALUES ('nodejs','nodejs12321','推荐,热门');
INSERT  INTO test (cname,descripton,flag)VALUES ('xiaomo','xiaomo','图文,热门');


SELECT *FROM test t WHERE find_in_set('推荐',flag) ;
SELECT * FROM test WHERE flag LIKE '%热门%';

```

### 二进制的比较

可以使用二进制方式对 SET 类型进行模糊筛选。

| SET 成员 | 十进制值 | 二进制值 |
| -------- | -------- | -------- |
| 推荐     | 1        | 0001     |
| 置顶     | 2        | 0010     |
| 图文     | 4        | 0100     |
| 热门     | 8        | 1000     |

获取包含图文与推荐的文章

```text
SELECT * FROM article WHERE flag & 5;
```



## 日期时间

先在dbheaver里面设置时区：

> 1. ![截图_20230327161313](D:\demo\30day\Markdown\mysql.assets\截图_20230327161313.png)
> 2. ![截图_20230327161351](D:\demo\30day\Markdown\mysql.assets\截图_20230327161351.png)

### 日期类型

| 日期时间类型 | 占用空间 | 日期格式            | 最小值              | 最大值              | 零值表示            |
| ------------ | -------- | ------------------- | ------------------- | ------------------- | ------------------- |
| DATETIME     | 8 bytes  | YYYY-MM-DD HH:MM:SS | 1000-01-01 00:00:00 | 9999-12-31 23:59:59 | 0000-00-00 00:00:00 |
| TIMESTAMP    | 4 bytes  | YYYY-MM-DD HH:MM:SS | 1970-01-01 08:00:01 | 2038-01-19 03:14:07 | 00000000000000      |
| DATE         | 4 bytes  | YYYY-MM-DD          | 1000-01-01          | 9999-12-31          | 0000-00-00          |
| TIME         | 3 bytes  | HH:MM:SS            | -838:59:59          | 838:59:59           | 00:00:00            |
| YEAR         | 1 bytes  | YYYY                | 1901                | 2155                | 0000                |

### 格式化参数

| 格式 | 描述                                           |
| :--- | :--------------------------------------------- |
| %a   | 缩写星期名                                     |
| %b   | 缩写月名                                       |
| %c   | 月，数值                                       |
| %D   | 带有英文前缀的月中的天                         |
| %d   | 月的天，数值(00-31)                            |
| %e   | 月的天，数值(0-31)                             |
| %f   | 微秒                                           |
| %H   | 小时 (00-23)                                   |
| %h   | 小时 (01-12)                                   |
| %I   | 小时 (01-12)                                   |
| %i   | 分钟，数值(00-59)                              |
| %j   | 年的天 (001-366)                               |
| %k   | 小时 (0-23)                                    |
| %l   | 小时 (1-12)                                    |
| %M   | 月名                                           |
| %m   | 月，数值(00-12)                                |
| %p   | AM 或 PM                                       |
| %r   | 时间，12-小时（hh:mm:ss AM 或 PM）             |
| %S   | 秒(00-59)                                      |
| %s   | 秒(00-59)                                      |
| %T   | 时间, 24-小时 (hh:mm:ss)                       |
| %U   | 周 (00-53) 星期日是一周的第一天                |
| %u   | 周 (00-53) 星期一是一周的第一天                |
| %V   | 周 (01-53) 星期日是一周的第一天，与 %X 使用    |
| %v   | 周 (01-53) 星期一是一周的第一天，与 %x 使用    |
| %W   | 星期名                                         |
| %w   | 周的天 （0=星期日, 6=星期六）                  |
| %X   | 年，其中的星期日是周的第一天，4 位，与 %V 使用 |
| %x   | 年，其中的星期一是周的第一天，4 位，与 %v 使用 |
| %Y   | 年，4 位                                       |
| %y   | 年，2 位                                       |

```mysql
DESC stu ;
SELECT *FROM stu s ;
SELECT sname,date_format(birthday,'%y-%m-%d')FROM stu; 
SELECT sname,time_format(birthday,'%h:%i:%s')FROM stu;

```

![截图_20230327170054](D:\demo\30day\Markdown\mysql.assets\截图_20230327170054.png)

### Timestamp

> 当表数据被修改之后，时间发生变化

```mysql
ALTER TABLE stu ADD update_time timestamp DEFAULT current_timestamp;
ALTER TABLE stu DROP update_time;
ALTER TABLE stu ADD update_time timestamp DEFAULT current_timestamp ON UPDATE current_timestamp ;
UPDATE stu SET sname='校历' WHERE id =3;

```

![截图_20230327171211](D:\demo\30day\Markdown\mysql.assets\截图_20230327171211.png)

### 时间处理函数

> -- 输出单独的年月日时分秒

```mysql
SELECT YEAR (birthday),MONTH (birthday),DAY (birthday),HOUR (birthday),MINUTE (birthday),SECOND (birthday) FROM stu s ;
```

> -- 输出当前的时间,日期

```mysql
SELECT now(),current_date(),current_time(),current_timestamp()  ; 
```

> -- 输出一年中的第几天

```mysql
SELECT dayofyear(now()) ;
SELECT dayofmonth(now());
-- 1-7周天是1
SELECT dayofweek(now()); 
-- 0-6 周一是0
SELECT weekday(now()); 
```

> 新建一个表，字段有id(自增，主键)，title，更新时间

```mysql
CREATE TABLE article(id int PRIMARY KEY AUTO_INCREMENT,title varchar(100) NOT NULL ,publish_time datetime DEFAULT NULL ,status TINYINT DEFAULT 1 );
```

> 查询status=0且时间小于当前时间的数据

```mysql
INSERT INTO article (title,publish_time,status )values('cen','2010-02-12 12:09:09',1);
SELECT *FROM article WHERE status =0 AND publish_time <now();
```

> 将status=0且时间小于当前时间的数据的status改为1

```mysql
UPDATE article SET status=1 WHERE status =0 AND publish_time <now();
```

### 日期差值计算

```mysql
-- 定义一个变量
SET @time =time(now());
```

**时间转换成秒，秒转成时间**

```MYSQL
SELECT time_to_sec(@time),sec_to_time(@time) ; 
```

**时间转成天，天转成时间**

```mysql
SELECT to_days(now()),from_days(to_days(now()))  ;
```

**当前日期距离生日多少天**

```mysql
SELECT datediff(now(),birthday)FROM stu s ;
```

**当前时间距离生日多少时间**

```mysql
SELECT timediff(time(now()),time(birthday)) FROM stu s ; 
```

**当前时间距离生日多少秒/分钟/小时/年/月/日/周**

```mysql
SELECT timestampdiff(MINUTE,birthday,now())FROM stu; 
```

### 日期查询

**从。。。。到。。。。。**

```mysql
SELECT *FROM stu1 WHERE birthday BETWEEN '1990-01-01'AND '1999-01-01';
```

**降序从小到大，取最小的**

```mysql
SELECT *FROM stu1 ORDER BY birthday DESC LIMIT 1;
```

> 子查询
>
> ```mysql
> SELECT  *FROM stu1 WHERE birthday=(SELECT birthday stu1 ORDER BY birthday DESC LIMIT 1);
> ```

**查询生日在1998年的**

```mysql
SELECT *FROM stu1 WHERE class_id IN (1,2)AND YEAR (birthday)='1998';

 SELECT *FROM stu1 WHERE class_id IN (1,2)AND left (birthday,4)='1998';
```

> 大于20岁的女生最喜欢上的班级
>
> ```mysql
> SELECT class_id FROM stu1
> WHERE sex=0
> AND timestampdiff(YEAR,birthday,now())>20
> GROUP BY class_id
> ORDER BY count(id)DESC 
> LIMIT 1;
> ```

### 日期计算

**增加时间**

```mysql
-- 当前时间后加几个小时
SELECT addtime(now(),'08:00:00'); 
SELECT timestamp(now(),'09:00:00');
-- day可以更换  数字可以正可以负
SELECT date_add(now(),INTERVAL -7 DAY ); 
-- 往前推十小时20分钟
SELECT date_add(now(),INTERVAL '-10:20'  HOUR_MINUTE  ); 
-- 往后的三天九小时
SELECT date_add(now(),INTERVAL '3 9'  DAY_HOUR  ); 
-- 往前的三天九小时
SELECT date_sub(now(),INTERVAL '3 9'  DAY_HOUR  ); 
```

**月初**

```mysql
SELECT date_sub(now(),INTERVAL dayofmonth(now())-1 day); 
```

**月末**

```mysql
SELECT  last_day(now());
```

本月/下月第一天/上月最后一天之类

```mysql
-- 本月发表的文章
SELECT * FROM article 
WHERE publish_time <=last_day(now())
AND publish_time >=date_sub(now(),INTERVAL dayofmonth(now())-1 DAY ) ; 
-- 三个月内发表的
SELECT *FROM article 
WHERE publish_time >=date_sub(now(),INTERVAL 3 MONTH); 


-- 前三个月的一号
SELECT *FROM article 
WHERE publish_time >=date_format(date_sub(now(),INTERVAL 3 MONTH),'%y-%m-01') ; 

-- 上个月的最后一天
SELECT last_day( date_sub(now(),INTERVAL 1 MONTH )  );

-- 下月的第一天
SELECT date_add( last_day(now()),INTERVAL 1 DAY ); 
-- 下月最后一天
SELECT last_day(
date_add( last_day(now()),INTERVAL 1 DAY )
);
```

### 星期的计算

```mysql
-- 计算周二是什么时间
SELECT date_add(now(),INTERVAL 1-weekday(now()) day); 
-- 计算三周之前的礼拜二的日期
SELECT date_sub(date_add(now(),INTERVAL 1-weekday(now())DAY ),INTERVAL 21 DAY ); 
SET @week=date_sub(now(),INTERVAL 1 week);
SELECT @week;
-- 计算上周的周一
SELECT date_add(@week,INTERVAL 0-weekday(@week) DAY ); 
```

### 按照月打卡

1. 新建表

   ```mysql
   CREATE TABLE attendance(id int PRIMARY KEY AUTO_INCREMENT ,stu_id int NOT NULL ,create_at datetime DEFAULT '2023-02-23 10:23:29');
   ```

2. 添加数据

   ```mysql
   INSERT INTO  attendance (stu_id,create_at)values('2','2023-03-24 10:23:29'),('3','2023-03-24 10:23:29'),('2','2023-02-14 10:23:29'),('3','2023-03-24 12:23:29'),('1','2023-02-24 08:23:29');
   SELECT *FROM attendance ;
   INSERT INTO  attendance (stu_id,create_at)values('2','2023-03-24 10:23:29'),('3','2023-03-24 10:23:29'),('2','2023-03-14 10:23:29'),('3','2023-03-24 12:23:29'),('1','2023-03-24 08:23:29');
   ```

3. 取本月的第一天

   ```mysql
   SELECT date_sub(now(),INTERVAL dayofmonth(now())-1 DAY ) ;
   ```

4. 使用函数

   ```mysql
   SELECT * FROM attendance 
   WHERE time(create_at)>'08:30:00'
   AND DATe(create_at)>date_sub(now(),INTERVAL dayofmonth(now())-1 DAY );
   ```

5. 使用分组并将大于俩次的学生id获取到

   ```mysql
   SELECT stu_id ,count(id)  FROM attendance 
   WHERE time(create_at)>'08:30:00'
   AND DATe(create_at)>date_sub(now(),INTERVAL dayofmonth(now())-1 DAY )
   GROUP BY stu_id 
   HAVING count(id)>=2 ;
   ```

**运行截图：**

![截图_20230329113138](D:\demo\30day\Markdown\mysql.assets\截图_20230329113138.png)

### 按照周打卡

```mysql
--  本周的迟到人数
SELECT date_add(now(),INTERVAL 0-weekday(now()) DAY ) ;
SELECT stu_id ,count(id)  FROM attendance 
WHERE date(create_at)>=date(date_add(now(),INTERVAL 0- weekday(now()) DAY ))
AND time(create_at)>='08:30:00'
GROUP BY stu_id 
HAVING count(id) ;
-- 上周的迟到的人的ID
SELECT *FROM attendance 
WHERE date(create_at) >=date(date_add(
@week,INTERVAL 0-weekday(@week)DAY ))
AND date(create_at)<=date(date_add(@week,INTERVAL 4-weekday(@week)DAY ))
AND time(create_at)>='08:30:00';
```

## 摘要与排序

### 普通排序

>  使用order by对数据进行排序
>
> - 升序：asc
> - 降序：desc

```mysql
SELECT * FROM stu ORDER BY sex ASC;
```

**从男到女排序年龄从小到大排序**

```mysql
SELECT * FROM stu ORDER BY sex ASC,birthday DESC;
```

随机获取一个学生

```mysql
SELECT *FROM stu1 ORDER BY rand()LIMIT 1; 
```

按照出生月份从小到大排序

```text
SELECT birthday,MONTH(birthday) as m FROM stu ORDER BY m ASC;

# 或使用字符串函数操作
SELECT birthday,mid(birthday,6,2) as m FROM stu ORDER BY m ASC;
```

### 自定义排序

> field 函数用于比较值在集合中的索引，利用这一特性可以自定义排序

```mysql
SELECT FIELD('a','c','a','b');
```

**使用 field 进行自定义排序**

```mysql
SELECT * FROM stu ORDER BY FIELD(left(sname,1),'何','赵');
```

### cont

**统计所有学生的人数**

```mysql
SELECT COUNT(*) FROM stu;
```

所有女生人数

```text
SELECT COUNT(*) FROM stu WHERE sex=2;
```

统计所有分配班级的学生（count(字段)不会统计 null 值，使用 count(*)时会计算 null），所以下面使用具体的字段

```mysql
SELECT COUNT(class_id) FROM stu;
```

### MIN/MAX

**获取最小的学生出生年份**

```text
SELECT year(max(birthday)) from stu;
```

**最大的班级编号**

```text
SELECT max(class_id) FROM stu;
```

**获取点击数最少的文章**

```text
SELECT * FROM article WHERE click = (SELECT MIN(click) FROM article);
```

### SUM/AVG

**获取所有文章总点击数**

```text
SELECT SUM(click) FROM article;
```

**获取平均点击数**

```text
SELECT AVG(click) FROM article;
```

**获取低于平均点击数据的文章**

```text
SELECT * FROM article WHERE click < (SELECT AVG(click) FROM article);
```

**获取学生的平均年龄**

```text
SELECT ROUND(AVG(TIMESTAMPDIFF(YEAR,birthday,now())))  FROM stu ;
```

### DISTINCT

distinct 用于去除结果集中的重复记录

**获取所有班级编号**

```text
SELECT DISTINCT class_id AS class FROM stu WHERE class_id IS NOT NULL;
```

**获取学生数，同班同名的算一个**

```text
SELECT COUNT(DISTINCT class_id,sname) FROM stu WHERE class_id IS NOT NULL;
```

**获取班级平均人数，去掉重复的数值**

```text
SELECT DISTINCT (count(id)) AS c FROM users GROUP BY class_id
```

### GROUP

统计受 ONLY_FULL_GROUP_BY 模式影响，有关 ONLY_FULL_GROUP_BY 的详细讨论请查看 「运行模式」章节。

**统计每个班级的人数**

```text
SELECT COUNT(*),class_id FROM stu WHERE class_id IS NOT NULL GROUP BY class_id ;
```

**每个班年龄最大的同学**

结果中要求出现班级编号和学生姓名，如果 GROUP BY 中只有班级编号字段，默认运行模式下 SELECT 中不能出现学生姓名。

MYSQL 默认使用 ONLY_FULL_GROUP_BY 模式要求 select 中的列要在 group 中使用。有多种方式可以处理这个问题

- 可以通过更改查询模式，允许 select 的列不在 group 中出现
- 使用聚合函数
- 使用 any_value 函数处理
- GROUP BY 中使用 PRIMAY KEY 或 UNIQUE NOT NULL 字段
- 有关 ONLY_FULL_GROUP_BY 模式已经在「运行模式」章节讨论过

直接查询将产生错误，因为 sname 不是 GROUP BY 使用的字段

```text
SELECT min(birthday),sname FROM stu GROUP BY class_id;
```

使用聚合函数解决这个问题

```text
SELECT min(birthday),min(sname) FROM stu GROUP BY class_id;
```

使用 any_value 函数解决

```text
SELECT min(birthday),any_value(sname) FROM stu GROUP BY class_id;
```

也可以使用子查询

```text
SELECT * FROM stu where birthday IN(
SELECT min(birthday) FROM stu GROUP BY class_id);
```

或使用聚合函数

```text
SELECT min(birthday),min(sname) FROM stu GROUP BY class_id;
```

也可以更改查询模式，去掉 ONLY_FULL_GROUP_BY 模式的方式解决。

> 很多后台程序框架提供配置项用于禁止 ONLY_FULL_GROUP_BY 模式

```text
SET sql_mode=''

SELECT min(birthday),sname FROM stu GROUP BY class_id;
```

**统计每班的男、女人数**

```text
SELECT concat(class_id,'班'),if(sex=1,'男','女') as sex,
count(*) FROM stu
WHERE class_id IS NOT NULL
GROUP BY class_id,sex ORDER BY class_id;
```

**查找超过两个同学的班级**

```text
SELECT class_id FROM stu GROUP BY class_id HAVING count(*)>2;
```

**查找本周迟到超过两次的同学**

```text
SELECT stu_id FROM attendance
WHERE date(created_at)>date(DATE_ADD(NOW(),INTERVAL 0-WEEKDAY(NOW()) day))
AND time(created_at)>'08:30:00'
GROUP BY stu_id
HAVING COUNT(*)>2;
```

**本周哪个同学准时到校次数最多**

```text
SELECT count(*) as c,stu_id FROM attendance
WHERE date(created_at)>=date(date_add(now(),interval 0-WEEKDAY(now()) day))
AND time(created_at)<='08:30:00'
GROUP BY stu_id
ORDER by c desc
limit 1;
```

**本周哪一天迟到的人数最少**

```text
SELECT date(created_at) FROM attendance
WHERE date(created_at)>date(DATE_ADD(NOW(),INTERVAL 0-WEEKDAY(NOW()) day))
AND time(created_at)<='08:30:00'
GROUP BY created_at
ORDER BY COUNT(*) DESC
LIMIT 1;
```

**查找哪个姓的同学最多**

```text
SELECT left(sname,1) as s,count(*) AS c FROM stu
GROUP BY s
ORDER BY c DESC
LIMIT 1;
```

**查找超过两个同学的姓氏**

```text
SELECT left(sname,1) as s,count(*) AS c FROM stu
GROUP BY s
HAVING c>=2;
```

## 多表查询随意操作-网站

### 表关联

**一对一**

> 比如说会员表与个人资料（QQ，邮箱）表即为一对一关系。

**一对多**

> 比如学生与班级表间即为一对多关系，一个班级有多个学生，一个学生属于一个班级。

**多对多**

> 粉丝表与用户表关系，一个粉丝可以关注多个用户，一个用户也可以有多个粉丝，像这种关系我们会使用一张中间表来记录关系。

**查询多表**

```mysql
SELECT s.sname ,a.create_at 
FROM stu1 s ,attendance a 
WHERE s.class_id =a.id ;
```

`inner join `

```mysql
SELECT *FROM stu1 s  
INNER JOIN attendance a 
ON s.class_id =a.id ;
```

> 思路：
>
> - 将要的表先组合成一个表
>
> - 然后对新表进行分组
>
> - 用方法对新表进行操作

```mysql
SELECT *FROM stu s  
INNER JOIN class c 
INNER JOIN article a 
ON s.class_id =c.id AND c.id=a.id 
WHERE s.sex='女';
```

### 左连接

左侧表里的数据保留

```mysql
SELECT *FROM stu s 
LEFT JOIN article a 
ON s.id =a.id
WHERE a.id IS NULL ;
```



![截图_20230330143403](D:\demo\30day\Markdown\mysql.assets\截图_20230330143403.png)

### 右连接与左连接相反

>  有班级的话显示班级名称，没有班级设置为无

```mysql
SELECT s.sname ,IF (s.class_id,c.cname,'无')AS cname  FROM class c 
RIGHT JOIN stu s 
ON c.id=s.class_id ;
```

### 自连接

例如，查找与。。在一个班级的同学

```mysql
SELECT  s2.sname  FROM stu s 
INNER JOIN stu s2 
ON s.class_id =s2.class_id
WHERE s.sname ='小雷'
AND s2.sname !='小雷 ';
```

查与小雷在同一年出生的

```mysql
SELECT  s2.sname  FROM stu s 
INNER JOIN stu s2 
ON YEAR (s.birthday)=YEAR (s2.birthday)
WHERE s.sname ='小雷'
AND s2.sname !='小雷';
```

查询比小雷年龄大的人

```mysql
SELECT  s2.sname  FROM stu s 
INNER JOIN stu s2 
ON YEAR (s.birthday)>YEAR (s2.birthday)
WHERE s.sname ='小雷';
```

### 多对多

后盾人学习的课程

```mysql
SELECT sname,l.name FROM stu AS s
INNER JOIN user_lesson AS ul
ON s.id = ul.stu_id
INNER JOIN lesson AS l
ON ul.lesson_id = l.id
WHERE s.sname = '后盾人';
```

哪个班级最喜欢雪php

```mysql
SELECT c.cname,count(*) AS total FROM stu AS s
INNER JOIN user_lesson AS ul
INNER JOIN lesson AS l
ON s.id = ul.stu_id AND ul.lesson_id = l.id
INNER JOIN class AS c
ON c.id = s.class_id
WHERE l.name='php'
GROUP BY c.cname
ORDER by total
LIMIT 1;
```

### UNION

> 用于连接多个查询结果，要保证每个查询返回的列的数量与顺序要一样。

- UNION 会过滤重复的结果
- UNION ALL 不过滤重复结果
- 列表字段由是第一个查询的字段

查年龄最大的和最小的学生：

```mysql
(SELECT sname,birthday  FROM stu ORDER BY birthday DESC LIMIT 1)
UNION 
(SELECT sname ,birthday FROM stu ORDER BY birthday ASC LIMIT 1)
;
```

最新发布的文章，和学习的课程

```mysql
(SELECT CONCAT(s.sname,'发表了文章：',a.title) from article as a
INNER JOIN stu as s
ON s.id = a.stu_id
LIMIT 2)
UNION
(SELECT CONCAT(s.sname,'正在学习：',l.name) FROM stu AS s
INNER JOIN user_lesson as ul
INNER JOIN lesson as l
ON s.id = ul.stu_id AND ul.lesson_id = l.id
LIMIT 2);
```

### 删除数据

删除没有学习课程的学生（多表查询方法）

```mysql
DELETE s FROM stu as s
LEFT JOIN user_lesson as ul
ON s.id = ul.stu_id
WHERE ul.lesson_id IS NULL;
```

子查询操作：

```mysql
DELETE FROM stu WHERE id IN(
  SELECT id FROM
    (SELECT s.id FROM stu as s
    LEFT JOIN user_lesson as ul
    ON s.id = ul.stu_id
    WHERE ul.lesson_id IS NULL)
  AS s
);
```

## 事务处理全面掌握--网站

>  事务：多条sql变成一组

> - 事务是保证多个 SQL 操作的一致性，如果一条失败全部 SQL 也将失效。
> - 实际业务中大多数是对多个表操作，比如当发表文章时需要将文章的基本信息发到文章基础表和文章内容添加到文章内容表，这种情况不使用事务也没有关系，如果出现数据异常重新添加就可以了
> - 但牵涉到货币的情况就必须使用事务了，必须保证货币处理是准确的
> - 当然有些公司要求所有查询都使用事务，这就遵照公司要求完成就可以

**默认引擎：innodb**

### 单独事务开启机制

```mysql
BEGIN ;
INSERT INTO stu (sname,age,class_id,sex) VALUES('alice',16,2,2);
INSERT INTO class (cname)VALUES ('高中');
COMMIT;
```

>  开始之后输入语句，然后进行提交

```mysql
START TRANSACTION ;
INSERT INTO class (cname)VALUES ('大学');
-- SELECT *FROM class ;
ROLLBACK ;
```

**使用`start transaction `也可以开启事务，`rollback`可以进行回滚**

### 全局事务开启机制

使用`set autocommit=0`但是必须需要`commit`结束

```mysql
SET autocommit=0;

INSERT INTO class (cname)VALUES ('研究生');
INSERT INTO class (cname)VALUES ('初中');
INSERT INTO class (cname)VALUES ('小学');

COMMIT;
```

### 隔离机制

#### 查询/设置级别

```mysql
-- mysql8的查询级别
select @@global.transaction_isolation,@@transaction_isolation;
-- mysql 8以下的查询级别
select @@tx_isolation;
-- 影响当前的级别
set session transaction isolation level read uncommitted;
-- 设置全局的级别
set global transaction isolation level read uncommitted;
```

#### 隔离等级

| 事务隔离级别                 | 脏读 | 不可重复读 | 幻读 | 说明                                                         |
| ---------------------------- | ---- | ---------- | ---- | ------------------------------------------------------------ |
| 读未提交（read-uncommitted） | 是   | 是         | 是   | 最低的事务隔离级别，一个事务还没提交时，它做的变更就能被别的事务看到 |
| 不可重复读（read-committed） | 否   | 是         | 是   | 保证一个事物提交后才能被另外一个事务读取。另外一个事务不能读取该事物未提交的数据。 |
| 可重复读（repeatable-read）  | 否   | 否         | 是   | 多次读取同一范围的数据会返回第一次查询的快照，即使其他事务对该数据做了更新修改。事务在执行期间看到的数据前后必须是一致的。 |
| 串行化（serializable）       | 否   | 否         | 否   | 事务 100% 隔离，可避免脏读、不可重复读、幻读的发生。花费最高代价但最可靠的事务隔离级别 |

#### 脏读

> 在隔离等级设置成脏读之后，b事务读取的数据会受到a事务的影响，数据为可变行性

#### 不可重复读

> - 事务 A 在执行过程中更新数据，事务 B 同时读取的数据没有脏数据。
> - 但当事务 A 提交了事务后，事务 B 再读取时得到了最新的数据，这种情况为不可重复读。

将隔离机制设置为 `REPEATABLE READ` 就可以解决这类不可重复读的问题。

#### 可以重复读

> - 事务 A 在执行过程中更新数据，事务 B 同时读取的数据没有脏数据。
> - 但当事务 A 提交了事务后，事务 B 再读取时数据没有变化，事务b提交之后，再获取，才可以得到响应的数据

#### 幻读

> 事务 A 执行查询，假如查询结果是 6 条
>
> 事务 B 执行添加
>
> 事务 A 执行更新，发现更新了 7 条（刚才查询时 6 条，但更新了七条，感觉像出现了幻觉）
>
> 切换隔离级别为 **SERIALIZABLE** 后，在事务 A 没有提交时，事务 B 是不能插入数据的（表现形式为等待）。

**最高事务等级的时候可以屏蔽掉幻读的情况**

## 高并发与锁机机制---网站

### 行锁

>  俩个事务操作同一个数据，优先等第一个事务提交之后，第二个再进行提交，不然会进行堵塞

### 表锁

> 事务 A 执行以下代码，因为`sname`字段没有添加索引，造成锁定整个表
>
> 现在事务 B 更新任何一条记录都会造成阻塞，因为现在是表锁状态
>
> 将 `sname`字段添加索引后，行锁功能就又有效了

### 范围锁

> 事务a设置了范围之后，事务b在这个范围内操作数据，会进行堵塞，
>
> 不在范围内的话，不会进行堵塞

### 悲观锁

```mysql
SET autocommit=0;
SELECT *FROM class c WHERE id =1 FOR UPDATE ;
UPDATE class SET descripton  ='asdasd' WHERE id =1;
COMMIT;
```

俩个事务，第一个先操作，等第一个完成之后，再操作第二个

### 乐观锁

> 事务 A 查询商品库存，获取了商品记录，记录中有 VERSION 字段用于记录版本号（目前为 0）
>
> 事务 B 同时查询，也获取了版本号为 0 的记录
>
> 事务 A 更改库存，并增加版本号
>
> 事务 B 更改数据，但使用的是事务 B 查询到的 0 号版本，因为事务 A 已经提交版本号为 1，造成事务 B 修改失败，保证了数据的完整性。

### 表锁

#### 读锁

```mysql
LOCK TABLE class READ ;
```

#### 解锁

```mysql
UNLOCK tables;
```

#### 写锁

```mysql
LOCK TABLE class WRITE ;
--  只能当前用户使用，别的用户不能查询或者编辑
```

> 会话 A 对表 goods 和 stu 设置写锁，本会话可以正常操作表， 并不能操作其他表
>
> 会话 B 读取/写入表数据都将阻塞
>
> 会话 A 解锁表数据后，其他会话都可以正常操作了

## 外键约束--网站

> 存储类型：innodb
>
> 俩个表之间建立联系的字段要一致（一般与主键进行关联）

### 新增外键约束

**在新表中进行外键约束**

```mysql
CREATE TABLE st3(
	id int PRIMARY KEY AUTO_INCREMENT,
	sname varchar(30) NOT NULL,
	class_id int  DEFAULT NULL,
	CONSTRAINT stu3_class
	FOREIGN KEY (class_id)
	REFERENCES class(id)
	ON DELETE CASCADE 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

**对已有的表进行外键约束**

```mysql
ALTER TABLE stu1 ADD 
CONSTRAINT stu1_class
FOREIGN KEY (class_id)
REFERENCES class(id)
ON DELETE CASCADE ;
```

### 删除外键约束

```mysql
ALTER TABLE stu1 DROP FOREIGN KEY stu1_class;
```

```mysql
ON DELETE CASCADE ;
-- 表示当主表被删除之后，子表也跟着删除
ON DELETE SET NULL;
-- 主表被删除之后，子表为空（前提要允许子表的字段为空）
ON DELETE NO ACTION 
-- 主表被删，子表不做任何操作

```

ON DELETE 指在删除时的处理方式，常用的处理方式包括以下几种。

| 选项                                     | 说明                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| `ON DELETE CASCADE`                      | 删除父表记录时，子表记录同时删除                             |
| `ON DELETE SET NULL`                     | 删除父表记录时，子表记录设置为 NULL（子表字段要允许 NULL）   |
| `ON DELETE NO ACTION ON DELETE RESTRICT` | 删除父表记录时，子表不做任何处理，必须把子表处理完才可以删除主表 |

### 关联更新

ON UPDATE 指在更新时的处理方式，常用的处理方式包括以下几种。

| 选项                                     | 说明                                                         |
| ---------------------------------------- | ------------------------------------------------------------ |
| `ON UPDATE CASCADE`                      | 更新父表记录时，比如更改主表的主键时，子表记录同时更新       |
| `ON UPDATE SET NULL`                     | 更新父表记录时，比如更改主表的主键时，子表记录设置为 NULL    |
| `ON UPDATE NO ACTION ON UPDATE RESTRICT` | 更新父表记录时，子表不做任何处理，必须把子表处理完才可以更新主表 |





