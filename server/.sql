create database mern_stack;
use mern_stack;

create table users (
    id int primary key auto_increment,
    name char(20) not null,
    email char(50) not null,
    password char(70) not null,
);
