//For Single Parameter(num);
const flow = num => num*2;

console.log(flow(50));

//It's same as--
// function flow(num){
//     return num*2;
// }
// console.log(flow(50));







//For multiple Function just add the parameters into a round bracket that is called parenthesis.such as--
const multipleParameter = (num1, num2)=>num1*num2;
console.log(multipleParameter(2,4));


//If there is no parameter then just use a null round bracket.
const NullParameter = () => 5;
console.log(NullParameter());



//If you have multiple statement then just use a curly bracket. Such as --
const MultipleStatement = (num1 , num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    return (sum - diff); //In this case value will not be returned by default. You have to return by ownself.
}
console.log(MultipleStatement(2,3));