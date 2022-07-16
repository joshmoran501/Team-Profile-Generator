const inquirer = require('inquirer')
const jest = require('jest')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const generateHTML = require('./src/generateHTML')

let teamArray = []

const managerQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: `What is the manager's name`,
            default: 'Karen',
            validate: answer => {
                if (answer) {
                    return true
                } else console.log(`Please type the manager's name, Karen would like to speak to them.`)
                return false
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please enter the employee's ID",
            default: 42,
            validate: answer => {
                if (answer > 0 && Number.isInteger(answer)) {
                    return true
                } else console.log(`Valid ID required`) 
                return false
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email",
            default: 'karen@manager.com',
            validate: answer => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                if (valid === true) {
                    return true
                } else console.log(`Please enter a valid email`)
            } 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            default: 42,
            validate: answer => {
                if (isNaN(answer)) {
                    console.log(`Please enter a valid phone number`)
                    return false
                } else return true
            }
        }
    ])
    .then(managerInput => {
        const {name, ID, email, officeNumber} = managerInput
        const manager = new Manager (name, ID, email, officeNumber)
        teamArray.push(manager)
        console.log(teamArray)
        console.log(manager)
    })
}

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            default: 'Dog',
            validate: answer => {
                if (answer) {
                    return true;
                } else {
                    console.log ("Please enter a valid employee name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "Please enter the employee's ID",
            default: 7,
            validate: answer => {
                if (answer > 0 && Number.isInteger(answer)) {
                    return true
                } else console.log(`Valid ID required`) 
                return false
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email",
            default: 'dog@employee.com',
            validate: answer => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer)
                if (valid === true) {
                    return true
                } else console.log(`Please enter a valid email`)
            } 
        },
        {
            type: `input`,
            message: `What is your github username? (Do not include @)`,
            name: `github`,
            default: `joshmoran501`,
            when: (answer) => answer.role === 'Engineer',
            // validates that github user exists. Since any tests would likely be a made up person, I have made my profile the default to make it progress.
            validate: async function makeRequest (answer) {  
                let GitHubUsername = await fetch(`https://api.github.com/users/${answer}`);
                    if(GitHubUsername.statusText === `Not Found`) 
                    {console.log(`valid username required`);
                    return false} 
                    else return true;
                    }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern attending?",
            default: "Hogwarts School of Techcraft and IT Wizardry",
            when: (answer) => answer.role === 'Intern',
            validate: answer => {
                if (answer.length < 1) {
                    console.log(`Please enter a valid school name`)
                    return false
                } else return true
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to add more employees?',
            default: true
        }
    ])
    .then(employeeInput => {
        let {name, ID, email, role, github, school, confirmEmployee} = employeeInput
        let employee
            if(role === 'Engineer') {
                employee = new Engineer (name, ID, email, github)
                console.log(employee)
            } else (
                employee = new Intern (name, ID, email, school),
                console.log(employee)
            )
        
        teamArray.push(employee)
        console.log(teamArray)

        if (confirmEmployee === true) {
            return employeeQuestions(teamArray)
        } else return teamArray
    })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err)
            return
        } else console.log('Team profile generated in index.html')
    }
    )
}

managerQuestions()
    .then(employeeQuestions)
    .then(teamArray => {
        return generateHTML(teamArray)
    })
    .then(generatedPage => {
        return writeFile(generatedPage)
    })
    .catch(err => {
        console.log(err)
    })