class Student{
    constructor(sName,sId,sClass,sAge){
    this.name=sName;
    this.Id=sId;
    this.Class=sClass;
    this.Age=sAge;
    }
}

const student1=new Student("MD Amdadul Islam",11803036,11,20);
const student2=new Student("Mominul Islam",11803046,11,21);
console.log(student1,student2);