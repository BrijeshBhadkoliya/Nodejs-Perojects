create database try;

USE try;

CREATE TABLE try(
    Id int,
    UserName varchar(50),
    UserPassword varchar(22),
    UserEmail varchar(150),
    UserMobail int
);

INSERT INTO try (Id, UserName, UserPassword, UserEmail, UserMobail)
VALUES (1,'Nikhil', 'bobibhai&%8', 'NikhilBhai@gmail.com', 7878809065);

select * from try;