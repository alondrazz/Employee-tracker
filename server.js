const fs = require('fs');
const inquirer = require('inquirer');
console.log("it work!");

const mainMenuQuestion = [
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'menu',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department'
        ]
    },
    {
        type: 'input',
        message: 'What is the name of the department',
        name: 'Add department'
    },
    {
        type: 'input',
        message:'What is the name of the role?',
        name: 'Add role'
    },
    {
        type: 'input',
        message: 'What is the salary of the role?',
        name: 'add salary'
    },
    {
        type: 'checkbox',
        message: 'Which department does the role belong to?',
        name: 'Choose department',
        choices: [
            'Engineering',
            'Finance',
            'Legal',
            'Sales',
            'Service'
        ]
    }

];

function init() {
    inquirer.prompt(mainMenuQuestion)
    .then((answer)=>{
        switch (answer.menu) {
            case 'View All Employees':
                break;
            case 'Add Employee':
                break;
            case 'Update Employee Role':
                break;
            case 'View All Roles':
                break;
            case 'Add Role':
                break;
            case 'View All Departments':
                break;
            case 'Add Department':
                break;
            default:
                console.log('Invalid choice');
                break;
        }
    })
}

init();