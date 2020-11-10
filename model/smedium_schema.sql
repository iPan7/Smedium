DROP DATABASE IF EXISTS smedium_db;

CREATE DATABASE smedium_db;

USE smedium_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(16) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    post VARCHAR(255) NOT NULL,
    postId INT references posts(id)
);