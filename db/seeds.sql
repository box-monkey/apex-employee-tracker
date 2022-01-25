-- reference 

-- INSERT INTO books (id, book_name)
-- VALUES 
--   (1, "Pride and Prejudice"),
--   (2,"Dracula"),
--   (3,"100 Years of Solitude"),
--   (4,"The Epic of Gilgamesh"),
--   (5, "The Waiting Years");

-- INSERT INTO categories (id, category_name) 
-- VALUES
--   (1, "Fiction"),
--   (2, "Non-Fiction");

-- INSERT INTO prices (id, price) VALUES (1, 10.55);

INSERT INTO department (department_id)
VALUES ('Sales'),
INSERT INTO department (department_id)
VALUES ('Finance'),
INSERT INTO department (department_id)
VALUES ('Engineer'),
INSERT INTO department (department_id)
VALUES ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('Salesperson', 80000, 1),
INSERT INTO roles (title, salary, department_id)
VALUES ('Lead Engineer', 150000, 2),
INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', 120000, 2),
INSERT INTO roles (title, salary, department_id)
VALUES ('Account Manager', 160000, 3),
INSERT INTO roles (title, salary, department_id)
VALUES ('Accountant', 125000, 3),
INSERT INTO roles (title, salary, department_id)
VALUES ('Legal Team Lead', 250000, 4),
INSERT INTO roles (title, salary, department_id)
VALUES ('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Douffe', 1, null),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Aaron', 'Stifle', 2, 1),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jeff', 'Hands', 2, null),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jason', 'Antonnio', 3, 1),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Amber', 'Summers', 3, null),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kristin', 'Duarte', 4, 1),
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jessie', 'McRiley', 4, null),
