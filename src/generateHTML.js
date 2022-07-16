// generate manager card
const generateManager = function (manager) {
    return `
    <div class="card">
        <div class="cardHead">
            <h3>${manager.name}</h3>
            <h4>Manager</h4>
            <span class="material-icons">assignment</span>
        </div>
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
        <p>Office Number: ${manager.officeNumber}</p>
    </div>
    `
}

// generate engineer cards
const generateEngineer = function (engineer) {
    return `
    <div class="card">
        <div class="cardHead">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4>
            <span class="material-icons">code</span>
        </div>
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
        <p>Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></p>
    </div>
    `
}

// generate intern cards
const generateIntern = function (intern) {
    return `
    <div class="card">
        <div class="cardHead">
            <h3>${intern.name}</h3>
            <h4>Intern</h4>
            <span class="material-icons">school</span>
        </div>
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </div>
    `
}

generateHTML = (data) => {
    employeeArray = []
    // loop through data array
    for (i=0; i < data.length; i++) {
        const person = data[i]
        const role = person.getRole()

        if (role === `Manager`) {
            const managerCard = generateManager(person)

            employeeArray.push(managerCard)
        }

        if (role === `Engineer`) {
            const engineerCard = generateEngineer(person)

            employeeArray.push(engineerCard)
        }

        if (role === `Intern`) {
            const internCard = generateIntern(person)

            employeeArray.push(internCard)
        }}
        
    ;

    const teamCards = employeeArray.join('')
    const generateTeam = generatePage(teamCards)

    return generateTeam
}

const generatePage = function (teamCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
        rel="stylesheet"
        href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    />
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
    />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet">
    <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
    </head>

    <body>
        <header>
            <h1>Team Profile Generator</h1>
        </header>

        <div class="row">
            <div class="col-2"></div>
            <div id="employeeCards" class="col-8">
                ${teamCards}
            </div>
    </div>
    </body>
    `
} 

module.exports = generateHTML