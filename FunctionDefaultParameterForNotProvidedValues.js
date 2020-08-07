//FunctionDefaultParameterForNotProvidedValues.js

function add(num1, num2=20){  //num2 will take 20 by default if you do not provide it's value when calling .
         return num1+num2;
}
console.log(add(20));
console.log(add(20,1)); //num2 er value provide korle default value ar nibe na