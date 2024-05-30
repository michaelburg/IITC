export class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  introduce() {
    return `${this.name}-${this.age}-${this.height}`;
  }
}
let michael = new Person("Michael", 22, 1.78);
console.log(michael.introduce());
