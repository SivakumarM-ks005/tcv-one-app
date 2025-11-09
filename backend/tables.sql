create table user (
    userId int primary key AUTO_INCREMENT,
    userName varchar(250),
    password varchar(250),
    email varchar(100),
    firstName varchar(100),
    lastName varchar(100),
    dateRegistered date 
    lastLogin DATETIME 
    role  varchar(20),
    Status varchar(20),
    UNIQUE(email)
)

create table user (
    userId int primary key AUTO_INCREMENT,
    userName varchar(250),
    password varchar(250),
    email varchar(100),
    firstName varchar(100),
    lastName varchar(100),
    dateRegistered date 
    lastLogin DATETIME 
    role  varchar(20),
    Status varchar(20),
    UNIQUE(email)
)