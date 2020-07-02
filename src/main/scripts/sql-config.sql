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
create table input (pan varchar(255), card_id varchar(255), company_name varchar(255), address varchar(255), city varchar(255), state varchar(255), country varchar(255),
                    phone varchar(255), email varchar(255), amount_loaned decimal(12, 2), payment_plan varchar(255), issue_date TIMESTAMP, expected_end_date TIMESTAMP,
                    next_inspection_date TIMESTAMP, loan_officer varchar(255), primary key (pan));

# Insert dummy data
INSERT INTO input (pan, card_id, company_name, address, city, state, country, phone, email, amount_loaned, payment_plan, issue_date, expected_end_date, next_inspection_date, loan_officer)
VALUES ("4883836336860016","8d212293-c6bc-4738-afaf-bc0ae5456df5","Azure Source Capital", "Calle Arture Ambrogi #19-303", "San Salvador", "", "El Salvador", "50325666555","info@azure.com.sv","60000", "one-time", "2018-05-06", "2021-05-06", "2020-10-05", "John Doe"),
       ("4169334953890037","7a353971-l4uo-9877-algd-lz1fe25349i9","Tridi Oasis", "Jl. Industri No.22", "Bojong Jaya, Karawaci, Kota Tangerang", "Banten", "Indonesia", "47183927382", "dinda.ishlad@tridi-oasis.com", "40000", "one-time", "2016-12-20", "2023-12-20", "2020-11-5", "Jane Doe"),
       ("4105837613490022","7a353971-l4uo-9877-algd-bp0df3321ly2", "Quadria Capital", "11-A, Stanley Street", "Telok Ayer", "Chinatown", "Singapore", "6568059699", "contact@quadria.com", "14000", "monthly", "2019-02-28", "2021-02-28", "2020-08-19", "John Doe"),
       ("4386624808860046","7a353971-l4uo-9877-algd-bd3zl43218j9", "Islamabad Diagnostics", "13-A, Kohistan Road", "Islamabad", "Islamabad Capital Territory", "Pakistan", "92512263737", "info@idc.net.pk", "100000", "one-time", "2020-01-18", "2022-01-18", "2020-09-06", "John Doe");

# #Example Stored Procedure
# DELIMITER $$
#
# DROP PROCEDURE IF EXISTS `db`.`getRecord` $$
# CREATE PROCEDURE `db`.`getRecord` (
#     IN in_id INTEGER,
#     OUT out_name VARCHAR(255))
# BEGIN
#     SELECT name
#     INTO out_name
#     FROM input where id = in_id;
# END $$
#
# DELIMITER ;