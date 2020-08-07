const numbers = [650,456,126,789];
// const maximum = Math.max(numbers);
// console.log(maximum); //It will say undifined.

//But if we want to get the maximum value from an array we can use the spread operator.Such as --
const maximum1 = Math.max(... numbers);
console.log(maximum1);