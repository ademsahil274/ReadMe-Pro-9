// TODO: Include packages needed for this application
const fs = require('fs');
const path = require ('path');
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "ISC", "GNUPLv3"],
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    
];

    async function runInit() {
        inquirer.prompt(questions)
        .then((data) => {
            console.log(data)
           return fs.writeFileSync("./utils/README.md", generateMarkdown(data))
        })
        .catch((err) => {
            console.log(err)
        })
    }

    runInit()