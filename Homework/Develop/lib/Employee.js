const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

// TODO: Write code to define and export the Employee class
module.exports ={
    employeeQuestions: function() {
        console.log('working')
        const questions = [
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your employee ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your employee email?'
            }
        ];

        inquirer
            .prompt(questions).then(answers => {
                answers.name = name;
                answers.id = id;
                answers.email = email;

                (name, id, email) => {
                    return render_template('./lib/Employee.js', name = name, id = id, email = email);
                }
            })
    }
};