class Parent{
    constructor(){
        this.FatherName = "MD Shahidul Islam";
        this.FatherAge = 65;
    }
}

class Boy extends Parent {
    constructor(name , age , study){
        super();
        this.boyName = name;
        this.boyAge = age;
        this.boyStudy = study;
    }
}

const elderBoy = new Boy("Dhrubo" , 20 , "Physics");
console.log(elderBoy);