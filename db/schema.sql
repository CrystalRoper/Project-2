<<<<<<< HEAD
Create database testing;
use testing;

CREATE TABLE IF NOT EXISTS events
(
  id int(11) NOT NULL auto_increment,
  title varchar(255) NOT NULL,
  start datetime NOT NULL,
  end datetime NOT NULL,
  primary key (id)
) ;
=======
-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS ;
-- Creates the database --
CREATE DATABASE ;
create DATABASE ontrack;

USE ontrack;

create TABLE login (
    id INTEGER (10) NOT NULL AUTO_INCREMENT,
    email VARCHAR (50) NOT NULL,
    pword VARCHAR (30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
)
>>>>>>> 0d5210b52d55f668f1c18c25812b0d9073f843c6
