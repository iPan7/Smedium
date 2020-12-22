const fs = require('fs');
const inquirer = require("inquirer");

//template based on employee type.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employee = require("./lib/Intern");

//Welcome to the Team Generator Information Page

//Array that fills in Employee Data. Employee member array empty to grab member info.
const teamMembers = [];

//Manager will change based on company const cant be changed. Let can be changed. Will use let.
let manager;

//HTML information. Var to understand that information will be sent to HTML.
var teamTitle;

//Prompt user for project info from manager

const managerData = () => {
  inquirer
    .prompt([
      {
        //teamName
        type: 'input',
        message: 'Name of Team/Project?',
        name: 'teamTitle',
      },

      {
        type: 'input',
        message: 'Who is the Project Manager?',
        name: 'managerName',
      },

      {
        type: 'input',
        message: "What is Project Manager's ID?",
        name: 'managerID',
      },
      {
        type: 'input',
        message: "What is Project Manager's Email?",
        name: 'managerEmail',
      },

      {
        type: 'input',
        message: "Manager's office number?",
        name: 'officeNumber',
      },
    ])
    .then((managerAnswers) => {
      manager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.officeNumber
      );
      teamTitle = managerAnswers.teamTitle;
      console.log("Onboarding Employee's information.");
      lowerEmployeeData();
    });
};

//Repeated if there are more employees that have to be added

const lowerEmployeeData = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What is role of employee',
        name: 'employeeRole',
        choices: ['Intern', 'Engineer'],
      },

      //Questions that are based on employeeRole.

      {
        type: 'input',
        message: 'what is Employee name?',
        name: 'employeeName',
      },

      {
        type: 'input',
        message: "What is employee's ID?",
        name: 'employeeId',
      },

      {
        type: 'input',
        message: "What is employee's email?",
        name: 'employeeEmail',
      },

      {
        type: 'input',
        message: 'What is Github account of Engineer?',
        name: 'github',
        when: (userInput) => userInput.employeeRole === 'Engineer',
      },

      {
        type: 'input',
        message: 'What school did intern attend?',
        name: 'school',
        when: (userInput) => userInput.employeeRole === 'Intern',
      },

      {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Add another member of the team?', //yes: start over all questions. No. will render all HTML elements.
      },
    ])
    .then((answers) => {
      //Will push new intern into array from team member

      if (answers.employeeRole === 'Intern') {
        const employee = new Intern(
          answers.employeeName,
          answers.employeeId,
          answers.employeeEmail,
          answers.school
        );
        teamMembers.push(employee);
      } else if (answers.employeeRole === 'Engineer') {
        teamMembers.push(
          new Engineer(
            answers.employeeName,
            answers.employeeId,
            answers.employeeEmail,
            answers.github
          )
        );
      }

      if (answers.newEmployee === true) {
        lowerEmployeeData();
      } else {
        //HTML rendering. Use of 'var' to correlate with grabbing info from HTML

        var main = fs.readFileSync('./templates/main.html', 'utf8');
        //use of /g modifier from reg ex is a global match to find all matches rather than stopping from first match according to w3 schools.
        main = main.replace(/{{teamTitle}}/g);

        var managerCard = fs.readFileSync('./templates/Manager.html', 'utf8');
        managerCard = managerCard.replace('{{name}}', manager.getName());
        managerCard = managerCard.replace('{{role}}', manager.getRole());
        managerCard = managerCard.replace('{{id}}', manager.getId());
        managerCard = managerCard.replace('{{email}}', manager.getEmail());
        managerCard = managerCard.replace(
          '{{officeNumber}}',
          manager.getOfficeNumber()
        );

        //Append al team members

        //again...using var to show where js will be communicating with html
        var cards = managerCard;
        for (var i = 0; i < teamMembers.length; i++) {
          var employee = teamMembers[i];
          cards += renderEmployee(employee);
        }

        //Add cards to main.html and will submit data to team.html
        main = main.replace('{{cards}}', cards);

        fs.writeFileSync('./output/team.html', main);

        //console.log generated HTML information
        console.log('team.html has been generated in output folder');
      }
    });
};

//renders functions that is called renderEmployee

const renderEmployee = () => {
  if (employee.getRole() === 'Intern') {
    var internCard = fs.readFileSync('./templates/Intern.html', 'utf8');
    internCard = internCard.replace('{{name}}', employee.getName());
    internCard = internCard.replace('{{role}}', employee.getRole());
    internCard = internCard.replace('{{id}}', employee.getId());
    internCard = internCard.replace('{{email}}', employee.getEmail());
    internCard = internCard.replace('{{school}}', employee.getSchool());
    return internCard;
  } else if (employee.getRole() === 'Engineer') {
    var engineerCard = fs.readFileSync('./templates/Engineer.html', 'utf8');
    engineerCard = engineerCard.replace('{{name}}', employee.getName());
    engineerCard = engineerCard.replace('{{role}}', employee.getRole());
    engineerCard = engineerCard.replace('{{id}}', employee.getId());
    engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
    engineerCard = engineerCard.replace('{{github}}', employee.getGithub());
    return engineerCard;
  }
};

managerData();

// const path = require('path');
// const fs = require('fs');

// const OUTPUT_DIR = path.resolve(__dirname, 'output');
// const outputPath = path.join(OUTPUT_DIR, 'team.html');

// const render = require('./lib/htmlRenderer');

// // Write code to use inquirer to gather information about the development team members,
// // and to create objects for each team member (using the correct classes as blueprints!)

// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!

// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.

// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.

// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work!
