INSERT INTO Department ( id, name)
VALUES (2, 'Engineering'),
       (3, 'Finance'),
       (4, 'Legal'),
       (1, 'Sales');
    

INSERT INTO Role ( id, title, salary, department_id)
VALUES (1, 'Sales Lead', 100000, 1),
       (2, 'Salesperson', 80000, 1),
       (3, 'Lead Engineer', 150000, 2),
       (4, 'Software Engineer', 120000, 2),
       (5, 'Account Manager', 160000, 3),
       (6, 'Accountant', 125000, 3),
       (7, 'Legal Team Lead', 250000, 4),
       (8, 'Lawyer', 190000, 4);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, NULL),
       ('Mike', 'Chan', 2, 1 ),
       ('Ashley','Rodriguez', 3, NULl),
       ('Kevin', 'Tupik', 4, 3),
       ('Kunal', 'Singh', 5, NULL),
       ('Malia', 'Brown', 6, 5),
       ('Sarah', 'Lourd', 7, NULL),
       ('Tom', 'Allen', 8, 7);
       