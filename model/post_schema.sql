DROP DATABASE IF EXISTS post_db;

CREATE DATABASE post_db;

USE post_db;

CREATE TABLE posts (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    post VARCHAR(255) NOT NULL,
    postId INT references posts(id)
);