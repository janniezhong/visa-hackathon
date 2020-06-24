## With MySQL
# mysql -u root -p
## If the previous command gets you "command not found", try
#  alias mysql=/usr/local/mysql/bin/mysql
## and then run the first command again

## With Docker
# For mac
# sudo launchctl unload -F /Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist

## Use to run mysql db docker image
# docker run -p 3306:3306 --name hack_mysql -e MYSQL_ROOT_PASSWORD=password -d mysql
## Open a MySQL editor in command line
# docker exec -it hack_mysql mysql -u root -p
## password should just be "password" (yay security)




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