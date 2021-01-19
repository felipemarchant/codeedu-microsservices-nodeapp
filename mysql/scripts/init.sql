USE mysql;

CREATE TABLE IF NOT EXISTS peoples (
    id int(11) NOT NULL AUTO_INCREMENT,
    name varchar(70) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO peoples(name) VALUES ('Alipio');
INSERT INTO peoples(name) VALUES ('Afonso');
INSERT INTO peoples(name) VALUES ('Alonso');