// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// this will be extending the employee class from the js file
const Employee = require("./employee");
class Manager extends Employee {
  // utilizing the constructors for name, email and id, bascially a blue
  constructor(name, id, email, officeNumber) {
    // Super syntax is to ultimately grab whatever the other elements of the constructor was utilized from and will be cascaded down
    super(name, id, email);

    // this keword ultimately refers to the object it belongs to, which in terms is manager in the constructor
    this.officeNumber = officeNumber;
  }

  // grabbing and returning the officenumber
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Grabbing the role for the specific user
  getRole() {
    return "Manager";
  }
}

// this allow the page to be exported or used somewhere else
module.exports = Manager;
