import { Person } from "./person.js";
class Employee extends Person {
  constructor(name, age, height, jobPosition, jobDescription) {
    super(name, age, height); // Call the parent's constructor
    this.jobDescription = jobDescription;
    this.jobPosition = jobPosition;
  }
  introduce() {
    return `${super.introduce()}-${this.jobPosition}-${this.jobDescription}`;
  }
}
let michael = new Employee(
  "Michael",
  22,
  1.78,
  "manager",
  "manage the company"
);
console.log(michael.introduce());
