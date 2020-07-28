// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// this will be extending the employee class from the js file
const Employee = require("./Employee");

// grabbing the extension of the employee js file
class Intern extends Employee {
  // utilizing the constructors for name, email and id
  constructor(name, id, email, school) {
    // Super syntax is to ultimately grab whatever the other elements of the constructor was utilized from and will be cascaded down
    super(name, id, email);

    // this keword ultimately refers to the object it belongs to, which in terms is school in the constructor
    this.school = school;
  }

  // grabbing and returning the school
  getSchool() {
    return this.school;
  }

  // Grabbing the role for the specific user
  getRole() {
    return "Intern";
  }
}
// this allows the page to be exported or used somewhere else
module.exports = Intern;
