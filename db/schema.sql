create DATABASE ontrack;

USE ontrack;

create TABLE login (
    id INTEGER (10) NOT NULL AUTO_INCREMENT,
    email VARCHAR (50) NOT NULL,
    pword VARCHAR (30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
)