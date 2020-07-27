// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// exporting the class employee js file
const Employee = require("./Employee");
// this will be extending the employee class from the js file
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Super syntax does is to ultimately grab whatever the other elements of the constructor was utilized from and will be cascaded down
    super(name, id, email);

    // this keword ultimately refers to the object it belongs to, which in terms is github in the constructor
    this.github = github;
  }

  // grabbing and returning the Github
  getGithub() {
    return this.github;
  }

  // returning the role
  getRole() {
    return "Engineer";
  }
}

// this allow the page to be exported or used somewhere else
module.exports = Engineer;
