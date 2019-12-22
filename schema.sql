-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY "password";
DROP DATABASE IF EXISTS devour_db;
CREATE DATABASE devour_db;
USE devour_db;

CREATE TABLE meals(
	id INT NOT NULL auto_increment,
    txt VARCHAR(150) NOT NULL,
    devoured BOOLEAN
		DEFAULT false,
    PRIMARY KEY(id)
);