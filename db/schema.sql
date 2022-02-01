-- drops table if it already exists when trying to repopulate table.
DROP TABLE IF EXISTS department;

DROP TABLE IF EXISTS roles;

DROP TABLE IF EXISTS employee;

-- blue prints for tables 
-- crates table overall department
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- creates table for overall roles
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- creates table for overall employee
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);