DROP DATABASE IF EXISTS smedium_db;

CREATE DATABASE smedium_db;

USE smedium_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    username VARCHAR(16) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    post LONGTEXT NOT NULL,
    postId INT references posts(id),
    date_posted DATETIME default current_timestamp
);


CREATE TABLE friends (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    friendId INT references users(id),
    friendPost INT references posts(id)
);