// TODO: Write code to define and export the Employee class

// constructor for implementing name, email and id for employee
class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.email = email;
    this.id = id;
  }
  // returning the name
  getName() {
    return this.name;
  }

  // returning the email
  getEmail() {
    return this.email;
  }

  // returning the id
  getId() {
    return this.id;
  }

  // Grabbing the role for the specfici user
  getRole() {
    return "Employee";
  }
}
// this allows the page to be exported or used somewhere else
module.exports = Employee;
