create database crud_node;
use crud_node;

create table books (
    id int primary key auto_increment,
    name char(30) not null,
    number_pages int not null,
    name_creator char(30) not null
);
