// Parent class Person
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }
}

// Subclass Student extends Person
class Student extends Person {
  constructor(name, age) {
    // Call the constructor of the parent class (Person)
    super(name, age);
  }

  // Method specific to Student: study
  study() {
    console.log(`${this._name} is studying.`);
  }
}

// Subclass Teacher extends Person
class Teacher extends Person {
  constructor(name, age) {
    // Call the constructor of the parent class (Person)
    super(name, age);
  }

  // Method specific to Teacher: teach
  teach() {
    console.log(`${this._name} is teaching.`);
  }
}

// Example usage:
const student = new Student("Alice", 20);
const teacher = new Teacher("Mr. Smith", 35);

console.log(student.name); // Output: "Alice"
student.study(); // Output: "Alice is studying."

console.log(teacher.name); // Output: "Mr. Smith"
teacher.teach(); // Output: "Mr. Smith is teaching."
