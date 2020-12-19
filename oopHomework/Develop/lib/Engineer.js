// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Will add github link
class Engineer extends Employee {
  constructor(name, id, email, github) {
    //Will build a constructor that will provide information for new Engineer.
    super(name, id, email);
    //getGithub();
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
