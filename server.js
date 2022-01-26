const inquirer = require("inquirer");
const mysql = require("mysql2");
const dbConnection = require("./db/connection");

const appInit = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: [
          "View all departments",
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
        case "View all departments":
          viewDepartments();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all Employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add an employee":
          addEmployee();
          break;
        case "Update an employee role":
          addEmployeeRole();
          break;
      }
    });
};

function viewDepartments() {
  dbConnection.query("SELECT * FROM department;", (err, res) => {
    if (err) throw err
    console.table(res);
    appInit();
  })
}

function viewRoles() {
  dbConnection.query("SELECT * FROM roles;", (err, res) => {
    if (err) throw err
    console.table(res);
    appInit();
  })
}

function viewEmployees() {
  dbConnection.query("SELECT * FROM employee;", (err, res) => {
    if (err) throw err
    console.table(res);
    appInit();
  })
}

function viewDepartments() {
  dbConnection.query("SELECT * FROM employee;", (err, res) => {
    if (err) throw err
    console.table(res);
    appInit();
  })
}

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Which role are you adding?',
    },
    {
      type: "input",
      name: "income",
      message: "What is selected roles yearly salary?"
    },
    {
      type: "input",
      name: "department_id",
      message: "What is the roles department ID?"
    }
  ]).then((res) => {
    dbConnection.query('INSERT INTO roles SET ?'),
    {
      title: res.title,
      salary: res.salary,
      department_id: res.department_id
    },
    (err, res) => {
      if (err) throw err
      console.table(res);
      viewRoles();
    }
  })
}

function addEmployees() {
  inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "Enter employees first name."
    },
    {
      type: "input",
      name: "lastName",
      message: "Enter employees last name.",
    },
    {
      type: "input",
      name: "employeeRole",
      message: "Enter employee role",
    },
    {
      type: "input", 
      name: "managerId",
      message: "Enter manager ID",
    },
  ]).then((res) => {
    dbConnection.query("INSERT INTO employee SET ?",
    {
      first_name: res.firstName,
      last_name: res.lastName,
      role_id: res.employeeRole,
      manager_id: res.managerId
    },
    (err, res) => {
      if (err) throw err
      console.table(res)
      addEmployee();
    }
    )
  })
}



appInit().then();
