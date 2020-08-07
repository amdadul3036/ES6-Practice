const wife = "Keu ekjon samne dekha hoile bolbone";
// wife = "Biyai kormu na huh";
console.log(wife);


//Array In const
const numbers = [3,64,19];
console.log(numbers);
//You can add or replace new element in Array with const
numbers[1]=45;
console.log(numbers);
numbers.push(16);
console.log(numbers);
//Similarly we can use pop(),shift(),unshift().
//But we cannot replace the whole array in const.Such as--
// numbers = [59,35,24,67,354]; //Eta dile error asbe




//LET
let wife1 = "Keu ekjon samne dekha hoile bolbone";
wife1 = "Biyai kormu na huh";
console.log(wife1);

//var vs let
//var
var sum = 0;
for(var i=0;i<10;i++){
    sum = sum + i;
}
console.log(i);//Eta baire paoya jabe jodi dei but let er khetre paoya jabe na.Such as--

//Const
// var sum1 = 0;
// for(let j=0;j<10;j++){
//     sum1 = sum1 + i;
// }
// console.log(j);