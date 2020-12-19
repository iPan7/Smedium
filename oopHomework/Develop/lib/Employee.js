// TODO: Write code to define and export the Employee class
class Employee {
  //build a constructor. Basic footprint for onboarding employee. Will follow template of .html.
  constructor(name, id, email) {
    if (typeof name !== 'string' || !name.trim().length) {
      throw new Error("Expected 'name' is non-empty string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }
  //get name, id, email
  getName() {
    //console.log(`Employee Name: $(this.name} `));
    return this.name;
  }

  getId() {
    //console.log(`Employee Id: ${this.id}`);
    return this.id;
  }

  getEmail() {
    //console.log (`Employee Email: $this.email}`)
    return this.email;
  }

  getRole() {
    //will return object and its functionality to string "employee"
    //console.log(`employee Role: ${this.getRole}`);
    return 'Employee';
  }
}

module.exports = Employee;
