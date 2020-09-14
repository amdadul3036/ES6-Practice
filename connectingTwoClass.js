//connectingTwoClass.js

class Parent {
  constructor(name) {
    this.FatherName = "Jamal";
  }
}

class Child extends Parent {
  constructor(sName, sAge, sClass) {
    super();
    this.StudentName = sName;
    this.StudentAge = sAge;
    this.StudentClass = sClass;
  }
}

const student1 = new Child("Rohim", 13, 7);
const student2 = new Child("Karim", 15, 9);
console.log(student1, student2);
