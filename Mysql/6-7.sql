DESC stu ;
SELECT *FROM stu s ;
SELECT sname,date_format(birthday,'%y-%m-%d')FROM stu; 
SELECT sname,time_format(birthday,'%h:%i:%s')FROM stu;
-- 时间戳
ALTER TABLE stu ADD update_time timestamp DEFAULT current_timestamp;
ALTER TABLE stu DROP update_time;
ALTER TABLE stu ADD update_time timestamp DEFAULT current_timestamp ON UPDATE current_timestamp ;
UPDATE stu SET sname='校历' WHERE id =3;

DESC stu ;
-- 输出单独的年月日时分秒
SELECT YEAR (birthday),MONTH (birthday),DAY (birthday),HOUR (birthday),MINUTE (birthday),SECOND (birthday) FROM stu s ;
-- 输出当前的时间,日期
SELECT now(),current_date(),current_time(),current_timestamp()  ; 
-- 输出一年中的第几天
SELECT dayofyear(now()) ;
SELECT dayofmonth(now());
-- 1-7周天是1
SELECT dayofweek(now()); 
-- 0-6 周一是0
SELECT weekday(now()); 


CREATE TABLE article(id int PRIMARY KEY AUTO_INCREMENT,title varchar(100) NOT NULL ,publish_time datetime DEFAULT NULL ,status TINYINT DEFAULT 1 );
INSERT INTO article (title,status )values('php',1);
SELECT * FROM article a ;

INSERT INTO article (title,publish_time,status )values('cen','2010-02-12 12:09:09',1);
SELECT *FROM article WHERE status =0 AND publish_time <now();

UPDATE article SET status=1 WHERE status =0 AND publish_time <now();

SELECT * FROM article a ;
-- 定义一个变量
SET @time =time(now());
SELECT @time;
SELECT time_to_sec(@time),sec_to_time(@time) ; 
SELECT to_days(now()),from_days(to_days(now()))  ;

SELECT datediff(now(),birthday)FROM stu s ; 

SELECT timediff(time(now()),time(birthday)) FROM stu s ; 

SELECT timestampdiff(MINUTE,birthday,now())FROM stu; 
SELECT timestampdiff(YEAR ,birthday,now())FROM stu; 

SELECT timestampdiff(SECOND ,birthday,now())FROM stu; 

CREATE TABLE stu1(id int PRIMARY KEY AUTO_INCREMENT ,sname varchar(20)NOT NULL ,class_id int DEFAULT 1,birthday datetime DEFAULT '2021-01-11 09:09:56' NOT NULL ,update_at datetime DEFAULT now(),sex TINYINT  NOT NULL   );
DESC stu1;
INSERT INTO stu1(sname,update_at,sex)values('arry','2020-01-02 08:54:34','1');
INSERT INTO stu1(sname,class_id,birthday,update_at,sex)values('arry',2,'1998-01-12 09:26:27','2020-01-02 08:54:34','0');
UPDATE stu1 set sname='marry'WHERE id=2; 
SELECT * FROM stu1;

SELECT *FROM stu1 WHERE birthday BETWEEN '1990-01-01'AND '1999-01-01';
-- 降序从小到大
SELECT *FROM stu1 ORDER BY birthday DESC LIMIT 1;
-- 子查询
SELECT  *FROM stu1 WHERE birthday=(SELECT birthday stu1 ORDER BY birthday DESC LIMIT 1);

SELECT *FROM stu1 WHERE class_id IN (1,2)AND YEAR (birthday)='1998';

 SELECT *FROM stu1 WHERE class_id IN (1,2)AND left (birthday,4)='1998';

-- 大于20岁的女生最喜欢上的班级

-- SELECT timestampdiff(YEAR,birthday,now()) FROM stu1;


SELECT class_id FROM stu1
WHERE sex=0
AND timestampdiff(YEAR,birthday,now())>20
GROUP BY class_id
ORDER BY count(id)DESC 
LIMIT 1;

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


SELECT  last_day(now());

SELECT date_sub(now(),INTERVAL dayofmonth(now())-1 day); 
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

DESC stu1 ;
-- 计算周二是什么时间
SELECT date_add(now(),INTERVAL 1-weekday(now()) day); 
-- 三周之前的礼拜二的日期

SELECT date_sub(date_add(now(),INTERVAL 1-weekday(now())DAY ),INTERVAL 21 DAY ); 
SET @week=date_sub(now(),INTERVAL 1 week);
SELECT @week;
-- 上周的周一
SELECT date_add(@week,INTERVAL 0-weekday(@week) DAY ); 

CREATE TABLE attendance(id int PRIMARY KEY AUTO_INCREMENT ,stu_id int NOT NULL ,create_at datetime DEFAULT '2023-02-23 10:23:29');
DESC attendance ;
INSERT INTO  attendance (stu_id,create_at)values('2','2023-02-24 10:23:29'),('3','2023-01-24 10:23:29'),('2','2023-02-14 10:23:29'),('3','2023-02-24 12:23:29'),('1','2023-02-24 08:23:29');
SELECT *FROM attendance ;
INSERT INTO  attendance (stu_id,create_at)values('2','2023-03-24 10:23:29'),('3','2023-03-24 10:23:29'),('2','2023-03-14 10:23:29'),('3','2023-03-24 12:23:29'),('1','2023-03-24 08:23:29');

SELECT date_sub(now(),INTERVAL dayofmonth(now())-1 DAY ) ;

SELECT * FROM attendance 
WHERE time(create_at)>'08:30:00'
AND DATe(create_at)>date_sub(now(),INTERVAL dayofmonth(now())-1 DAY );


SELECT stu_id ,count(id)  FROM attendance 
WHERE time(create_at)>'08:30:00'
AND DATe(create_at)>date_sub(now(),INTERVAL dayofmonth(now())-1 DAY )
GROUP BY stu_id 
HAVING count(id)>=2 ;

SELECT date_add(now(),INTERVAL 0-weekday(now()) DAY ) ;
SELECT stu_id ,count(id)  FROM attendance 
WHERE date(create_at)>=date(date_add(now(),INTERVAL 0- weekday(now()) DAY ))
AND time(create_at)>='08:30:00'
GROUP BY stu_id 
HAVING count(id) ;

SET @week =date_sub(now(),INTERVAL 1 week);
SELECT @week;


SELECT *FROM attendance 
WHERE date(create_at) >=date(date_add(
@week,INTERVAL 0-weekday(@week)DAY ))
AND date(create_at)<=date(date_add(@week,INTERVAL 4-weekday(@week)DAY ))
AND time(create_at)>='08:30:00';

SELECT * FROM stu1 ORDER BY sex ASC,birthday DESC;

SELECT *FROM stu1 ORDER BY rand()LIMIT 1; 
SELECT *FROM stu1,attendance WHERE stu1.id=attendance.id  ;
SELECT s.sname ,a.create_at 
FROM stu1 s ,attendance a 
WHERE s.class_id =a.id ;


SELECT *FROM stu1 s  
INNER JOIN attendance a 
ON s.class_id =a.id ;

SELECT *FROM stu s  
INNER JOIN class c 
INNER JOIN article a 
ON s.class_id =c.id AND c.id=a.id 
WHERE s.sex='女';

SELECT *FROM stu s 
LEFT JOIN article a 
ON s.id =a.id
WHERE a.id IS NULL ;

SELECT s.sname ,IF (s.class_id,c.cname,'无')AS cname  FROM class c 
RIGHT JOIN stu s 
ON c.id=s.class_id ;

SELECT  s2.sname  FROM stu s 
INNER JOIN stu s2 
ON s.class_id =s2.class_id
WHERE s.sname ='小雷'
AND s2.sname !='小雷 ';

(SELECT sname,birthday  FROM stu ORDER BY birthday DESC LIMIT 1)
UNION 
(SELECT sname ,birthday FROM stu ORDER BY birthday ASC LIMIT 1)
;


 











