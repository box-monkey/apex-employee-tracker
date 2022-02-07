const inquirer = require("inquirer");
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ninjas",
  database: "employeeTracker",
});
dbConnection.connect((err) => {
  if (err) throw err;
  appInit();
});

const appInit = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View All",
          "View departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          // bonus --- delete an employee ---
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      let userInput = response.options;
      console.log(userInput);
      switch (userInput) {
        case "View All":
          viewAll();
          break;
        case "View departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Add a role":
          addRole();
          break;
        case "Update an employee role":
          updateRole();
          break;
      }
    });
};

function viewAll() {
  dbConnection.query(
    "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;",
    (err, res) => {
      if (err) throw err;
      console.table(res);
      appInit();
    }
  );
}

function viewAllDepartments() {
  dbConnection.query("SELECT * FROM department;", (err, res) => {
    if (err) throw err;
    console.table(res);
    appInit();
  });
}

function viewRoles() {
  dbConnection.query("SELECT * FROM role;", (err, res) => {
    if (err) throw err;
    console.table(res);
    appInit();
  });
}

function viewEmployees() {
  dbConnection.query("SELECT * FROM employee;", (err, res) => {
    if (err) throw err;
    console.table(res);
    appInit();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your new department?",
      },
    ])
    .then((res) => {
      dbConnection.query("INSERT INTO department SET ?", {
        name: res.name,
      });
      viewAllDepartments();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter employees first name.",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter employees last name.",
      },
      {
        type: "input",
        name: "employeeRole",
        message: "Enter employee role ID",
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter manager ID",
      },
    ])
    .then((res) => {
      dbConnection.query("INSERT INTO employee SET ?", {
        first_name: res.firstName,
        last_name: res.lastName,
        role_id: res.employeeRole,
        manager_id: res.managerId,
      });
      viewEmployees();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter role title.",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter role salary.",
      },
      {
        type: "input",
        name: "departmentId",
        message: "Enter department ID",
      },
    ])
    .then((answer) => {
      dbConnection.query("INSERT INTO role SET ?", {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.departmentId,
      });
      viewRoles();
    });
}

function updateRole() {
  dbConnection.query("SELECT * FROM employee;", (err, res) => {
    let employees = res.map((id, first_name) => ({ id: id, name: first_name + 1 }));
    

    dbConnection.query("SELECT * FROM role;", (err, res) => {
      let roles = res.map((role) => role.id);

      inquirer
        .prompt([
          {
            type: "list",
            name: "update_employee",
            message: "What is the employees id number who would you like to update?",
            choices: employees,
          },
          {
            type: "list",
            name: "update_role",
            message: "What is the new role id number?",
            choices: roles,
          },
        ])
        .then((res) => {
          console.log(res);
          dbConnection.query("UPDATE employee SET ? WHERE ?;", [
            {role_id: res.update_role},
            {id: res.update_employee}
          ]
          );
        });
    });
  });
}
