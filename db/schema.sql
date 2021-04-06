DROP DATABASE IF EXISTS burgers_db;
CREATE database burgers_db;

USE burgers_db;
   
Create table `burgers`
    id auto INT primary key.
    burger_name VARCHAR(30),
    devoured BOOLEAN,
); 

