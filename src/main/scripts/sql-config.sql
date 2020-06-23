## Use to run mysql db docker image, optional if you're not using a local mysqldb
# docker run --name mysqldb -p 3306:3306 -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -d mysql

# connect to mysql and run as root user
#Create Databases
CREATE DATABASE db;

#Create database service accounts
CREATE USER 'db_user'@'localhost' IDENTIFIED BY 'password';
CREATE USER 'db_user'@'%' IDENTIFIED BY 'password';


#Database grants
GRANT SELECT ON db.* to 'db_user'@'localhost';
GRANT INSERT ON db.* to 'db_user'@'localhost';
GRANT DELETE ON db.* to 'db_user'@'localhost';
GRANT UPDATE ON db.* to 'db_user'@'localhost';

GRANT SELECT ON db.* to 'db_user'@'%';
GRANT INSERT ON db.* to 'db_user'@'%';
GRANT DELETE ON db.* to 'db_user'@'%';
GRANT UPDATE ON db.* to 'db_user'@'%';

#Create table
use db;
create table input (id bigint not null auto_increment, name varchar(255),  primary key (id));

#Example Stored Procedure
DELIMITER $$

DROP PROCEDURE IF EXISTS `db`.`getRecord` $$
CREATE PROCEDURE `db`.`getRecord` (
    IN in_id INTEGER,
    OUT out_name VARCHAR(255))
BEGIN
    SELECT name
    INTO out_name
    FROM input where id = in_id;
END $$

DELIMITER ;