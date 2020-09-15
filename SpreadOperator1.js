const friendList1 = ["Dhrubo" , "Amdadul" , "Momin" , "Arun" , "Taufik"];
const friendAgeList1 = [20 , 20 , 22 , 22 , 21];

const togetherWrong = [friendList1 , friendAgeList1];
console.log(togetherWrong);

const togetherRight = [...friendList1 , ...friendAgeList1];
console.log(togetherRight);
