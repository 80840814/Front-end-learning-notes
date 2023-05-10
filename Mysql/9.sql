SHOW ENGINES;
BEGIN ;
INSERT INTO stu (sname,age,class_id,sex) VALUES('alice',16,2,2);
INSERT INTO class (cname)VALUES ('高中');
COMMIT;
START TRANSACTION ;
INSERT INTO class (cname)VALUES ('大学');
SELECT *FROM class ;
ROLLBACK ;


SELECT *FROM class ;

SET autocommit=0;

INSERT INTO class (cname)VALUES ('研究生');
INSERT INTO class (cname)VALUES ('初中');
INSERT INTO class (cname)VALUES ('小学');

COMMIT;
SET autocommit=0;
SELECT *FROM class c WHERE id =1 FOR UPDATE ;
UPDATE class SET descripton  ='asdasd' WHERE id =1;
COMMIT;

LOCK TABLE class READ ;
UNLOCK tables;


CREATE TABLE st3(
	id int PRIMARY KEY AUTO_INCREMENT,
	sname varchar(30) NOT NULL,
	class_id int  DEFAULT NULL,
	CONSTRAINT stu3_class
	FOREIGN KEY (class_id)
	REFERENCES class(id)
	ON DELETE CASCADE 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE stu1 ADD 
CONSTRAINT stu1_class
FOREIGN KEY (class_id)
REFERENCES class(id)
ON DELETE CASCADE
ON DELETE NO ACTION 
;

ALTER TABLE stu1 DROP FOREIGN KEY stu1_class;
