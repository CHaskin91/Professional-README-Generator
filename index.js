const inquirer = require('inquirer');
const fs = require('fs');

// questions for user input
const questions = [
    // Project Name/Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue!');
                return false;
            }
        }
    },
    // Project Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the Project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a project description to continue!');
                return false;
            }
        }
    },
    // Installation Instructions
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide Installation Instructions to continue!');
                return false;
            }
        }
    },
    // Usage Information
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how to use the project!');
                return false;
            }
        }
    },
    // Contribution Guidelines
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to the project? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide information for how to contribute to the project!');
                return false;
            }
        }
    },
    // Test Instructions
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project? (Required)',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Please describe how to test the project!');
                return false;
            }
        }
    },
    // License Options
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
