sCREATE DATABASE arry;
SHOW DATABASES;
USE arry;
DROP DATABASE IF EXISTS	 arry;
SHOW DATABASES	;
CREATE DATABASE	arry;
SHOW DATABASES;
USE arry;
CREATE TABLE class(id int PRIMARY KEY AUTO_INCREMENT,cname varchar(100),descripton varchar(100) ) charset utf8;
DESC class ;
CREATE TABLE room(id int PRIMARY KEY AUTO_INCREMENT,cname varchar(100),descripton varchar(100) ) charset utf8;
DESC	room ;
DROP TABLE IF	EXISTS	room;
DROP TABLE	IF EXISTS class;

INSERT INTO	class SET	cname="php",descripton ="this is a desriton";
INSERT INTO	class (cname,descripton) VALUES ("linux","demo"),('css',"stylesheet"),('js','javascript');
CREATE TABLE test LIKE class;
INSERT INTO	test SELECT	* FROM class ;

INSERT INTO	test (cname) SELECT cname FROM class ;
CREATE TABLE a SELECT	* FROM class;


CREATE TABLE b (id int PRIMARY KEY AUTO_INCREMENT	,cname varchar(100) )SELECT	cname FROM class ;
CREATE TABLE c (id int PRIMARY KEY AUTO_INCREMENT	,name varchar(100) )SELECT	cname AS name FROM class ;
SELECT * FROM class ;
SELECT cname,id AS ids FROM class c ;
SELECT * FROM  class  WHERE id>2 AND descripton LIKE '%s%';

SELECT concat  (cname,descripton) AS class_info FROM	class;

CREATE TABLE stu (id int PRIMARY KEY AUTO_INCREMENT ,sname varchar(10),class_id int  DEFAULT NULL ,age SMALLINT	NOT null	);

INSERT INTO stu (sname,class_id,age) values ('alice',1,12),('boy',2,15),('mary',3,22),('ted',null,11);

INSERT INTO	stu (sname,class_id,age) values('dede',1,34),('ddd',1,4);

SELECT DISTINCT  class_id FROM	stu s ;

SELECT * FROM  stu WHERE age >=10 AND age<=20;	

SELECT * FROM  stu WHERE age BETWEEN 1 AND 20;

SELECT *FROM stu WHERE class_id =1 OR  class_id =2;
SELECT * FROM  stu s WHERE class_id IN (1,3);


SELECT * FROM stu s WHERE class_id IS NULL ;
SELECT *FROM stu s WHERE class_id IS NOT NULL ;

SELECT sname,if(class_id,class_id,"未分配") FROM stu;

SELECT sname,ifnull(class_id,'未分配')FROM stu s ; 

SELECT sname,age FROM stu s  ORDER BY age ASC ;
SELECT  sname,age FROM stu s ORDER BY age DESC  ;

SELECT * FROM stu s ORDER BY class_id ASC ,age ASC ;

SELECT *FROM stu s ORDER BY id DESC LIMIT 2;
SELECT  * FROM  stu s ORDER BY id ASC LIMIT 1,2;

SELECT *FROM stu WHERE age =(SELECT age FROM stu WHERE  class_id=2 AND age IS NOT NULL ORDER BY age ASC LIMIT 1);


 
SELECT *FROM stu WHERE age =(SELECT age FROM stu WHERE class_id =1 AND age IS NOT NULL ORDER BY  age DESC LIMIT 1);







SELECT *FROM stu WHERE  age=(SELECT age FROM stu WHERE class_id =1 AND age IS NOT NULL ORDER BY age ASC LIMIT 1);




UPDATE stu SET class_id=2 WHERE class_id IS NULL ;

UPDATE stu SET class_id=1 WHERE age <20;

UPDATE stu SET age=age+10 WHERE class_id =1 AND age <20;
DESC stu ;

DELETE FROM stu WHERE age <30 AND class_id  IS NULL ;

DELETE FROM stu  ORDER BY id DESC  LIMIT 2;

ALTER TABLE stu RENAME stus;
RENAME TABLE stus TO stu;

CREATE TABLE demo1 SELECT * FROM stu s ;
ALTER  TABLE	demo1  charset	 gbk;
DELETE FROM demo1;
truncate demo1; 
DROP TABLE IF EXISTS	demo1; 

CREATE TABLE demo2 SELECT * FROM stu s ;

ALTER TABLE demo2 MODIFY sname varchar(50)  NOT NULL ;
ALTER TABLE demo2 CHANGE sname name char(20) NOT NULL ;
ALTER  TABLE demo2 ADD sex SMALLINT DEFAULT NULL ;

ALTER  TABLE demo2 ADD	 email char(50) DEFAULT NULL AFTER id;
 
ALTER TABLE demo2  ADD QQ varchar(20) DEFAULT NULL FIRST;
ALTER TABLE demo2  DROP QQ;

ALTER TABLE demo2 DROP PRIMARY KEY ;
ALTER  TABLE demo2  MODIFY id int NOT NULL ; 

ALTER TABLE demo2  ADD PRIMARY KEY (id);

ALTER TABLE demo2  MODIFY id int  NOT NULL AUTO_INCREMENT  ; 
 CREATE  TABLE st3 SELECT *FROM stu s ;
ALTER TABLE st3 MODIFY id int NOT NULL AUTO_INCREMENT ,ADD  PRIMARY KEY(id);


USE arry;
SELECT LEFT (cname,2),RIGHT (cname,3) ,mid(cname,2,1),mid(cname,2)  FROM class ;
ALTER TABLE class MODIFY cname varchar(100) NOT NULL ;


UPDATE class SET cname=concat('https://yixiaomo.top',mid(cname,8))WHERE id>=5; 

SELECT substring(cname,2) FROM class c ; 
SELECT char_length(cname)FROM class c ; 

SELECT IF (char_length(cname)>8,concat(LEFT(cname,8),'...'),cname)AS cname FROM class c ;







 