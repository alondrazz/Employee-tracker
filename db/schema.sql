DROP DATABASE IF EXISTS employee_info_db;
CREATE DATABASE employee_info_db;

USE employee_info_db;

CREATE TABLE Department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE Role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

CREATE TABLE Employee (
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);