DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;
   
Create table `burgers`(
    id int NOT NULL AUTO_increment,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

