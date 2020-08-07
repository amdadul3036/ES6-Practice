//We can add multiple array by using spread Operator.
const ages1 = [16, 24, 64, 32];
const ages2 = [45,78,98,3];
const ages3 = [32,12,6,46,86,34];

const allAgesWrong = [ages1,ages2,ages3]; //It will make a multidimensional array. It will never add all elements of the arrays in one array.
console.log("It's not adding all Elements in one array -- ",allAgesWrong);
const allAges1 = ages1.concat(ages2).concat(ages3);
console.log("It's adding all elements in one single array -- ", allAges1);


//This same thing that is adding all elements in single array we can do by Spread Operator. Such as --
const usingSpreadOperator = [...ages1,...ages2,...ages3];
console.log("This is for spread operator -- " , usingSpreadOperator);