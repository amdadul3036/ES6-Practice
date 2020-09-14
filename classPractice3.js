class Me{
    constructor(name,age,collage,university,roll){
        this.name = name;
        this.age = age;
        this.collage = collage;
        this.university = university;
        this.roll = roll;
    }
}

const MeDhrubo = new Me("Dhrubo" , 20 , "Notre Dame Collage, Dhaka" , "University of Dhaka" , 11803036);
const MeToufik = new Me("Toufik" , 22 , "Notre Dame Collage , Dhaka" , "Khulna University of Engineering and Technology" , 11803065);

console.log(MeDhrubo , MeToufik);