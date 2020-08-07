class Student  {
    constructor(sAge,sName,sSchool){
        this.age = sAge;
        this.Name = sName;
        this.School = sSchool;
    }
}

const student1 = new Student(20,"MD Amdadul Islam","Swarupkaty Collegiate Academy");
const student2 = new Student(20,"Nibedita Roy Nitu","Swarupkaty Collegiate Academy");
console.log(student1,student2);