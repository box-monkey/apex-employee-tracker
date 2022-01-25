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
          // delete an employee
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      let choice = response.options;
      console.log(choice);
      switch (choice) {
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



appInit().then();
