const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require("mysql2");

console.log("it work!");

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vanderbilt',
  database: 'employee_info_db'
});

db.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the employee_info_db database.');

  init();
});

const mainMenuQuestion = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'menu',
    choices: [
      'View All Employee',
      'Add Employee',
      'View All Roles',
      'Add Role',
      'View All Departments',
      'Add Department'
    ]
  }
];

function init() {
    inquirer
      .prompt(mainMenuQuestion)
      .then((answer) => {
        switch (answer.menu) {
          case 'View All Employee':
            viewAllEmployee();
            //function to Add Employee
            break;
          case 'Add Employee': 
          promptForEmployeeDetails()
          .then((employeeData) => {
            addEmployeeToDatabase(employeeData);
          })
          .catch((err) => {
            console.error('Error', err);
          })
            break;
          case 'View All Roles':
            viewAllRoles();
            // Function to add Role
            break;
            case 'Add Role': 
            promptForRoleDetails()
            .then((roleData) => {
              addRoleToDatabase(roleData);
            })
            .catch((err) => {
              console.error('Error', err);
            })
              break;
          case 'View All Departments':
            viewAllDepartments();
            // Function to add department
            break;
            case 'Add Department': 
            promptForDepartmentDetails()
            .then((departmentData) => {
              addDepartmentToDatabase(departmentData);
            })
            .catch((err) => {
              console.error('Error', err);
            });
            break;
          default:
            console.log('Invalid choice');
            break;
        }
      });
  }
  function promptForEmployeeDetails() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter the employee first name',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'Enter employee last name',
            name: 'last_name',
        },
        {
            type: 'input',
            message: 'What is their role ID?',
            name: 'role_id',
        },
        {
            type: 'input',
            message: 'What is their manager Id?',
            name: 'manager_id',
        }
    ])
  }
  function addEmployeeToDatabase(employeeData) {  
    const sql = 'INSERT INTO Employee SET ?';
    db.query(sql, employeeData, function (err, results) {
      if (err) {
        console.error('Error adding employee:', err);
        return;
      }
      console.log('Employee added successfully:', results);
    });
  }
  function addRoleToDatabase(roleData) {  
    const sql = 'INSERT INTO Role SET ?';
    db.query(sql, roleData, function (err, results) {
      if (err) {
        console.error('Error adding role:', err);
        return;
      }
      console.log('Role added successfully:', results);
    });
  }

  function promptForRoleDetails() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the role ID?',
            name: 'id',
        },
        {
          type: 'input',
          message: 'What is the title of the role?',
          name: 'title',  
        },
        {
            type: 'input',
            message: 'What is the salary?',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'What is the department Id?',
            name: 'department_id',
        }
        
    ])
  }
  function promptForDepartmentDetails() {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'nameDepartment',
        },
    ])
    .then((departmentData) => {
    Department.create({
        name: departmentData.nameDepartment,
    })
    .then((results) => {
        console.log('Department added successfully:', results);
    });
  })
  .catch((err) => {
    console.error('Error getting department details:', err);
  });
  }
function viewAllEmployee() {
  db.query('SELECT * FROM Employee', function (err, results) {
    if (err) {
      console.error('Error querying employees:', err);
      return;
    }
    console.table(results);
    db.end();
  });
}

function viewAllRoles() {
  db.query('SELECT * FROM Role', function (err, results) {
    if (err) {
      console.error('Error querying roles:', err);
      return;
    }
    console.table(results);
    db.end();
  });
}

function viewAllDepartments() {
  db.query('SELECT * FROM Department', function (err, results) {
    if (err) {
      console.error('Error querying departments:', err);
      return;
    }
    console.table(results);
    db.end();
  });
}
