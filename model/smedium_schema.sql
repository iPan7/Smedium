DROP DATABASE IF EXISTS smedium_db;

CREATE DATABASE smedium_db;

USE smedium_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);
CREATE TABLE posts (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(200) NULL,
    content MEDIUMTEXT NOT NULL,
    image VARCHAR(400) NULL,
    userId INT NULL,
    datetime_created DATETIME default current_timestamp
);

CREATE TABLE friends (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    friendId INT references users(id),
    friendPost INT references posts(id)
);
