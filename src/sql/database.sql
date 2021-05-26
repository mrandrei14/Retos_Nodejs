CREATE DATABASE db_example;

USE db_example;

CREATE TABLE datos(

    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    apellido1 VARCHAR(50),
    apellido2 VARCHAR(50),
    cedula VARCHAR(50),
    correo VARCHAR(50)
);

INSERT INTO datos(nombre, apellido1, apellido2, cedula, correo)
VALUES ('Anthony','Quesada','Brenes','305230197', 'Tony@gmail.com');

SELECT * FROM datos;