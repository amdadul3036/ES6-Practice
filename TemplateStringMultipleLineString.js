//TemplateStringMultipleLineString.js

const firstName = "Amdadul";
const lastName = "Islam";
const result = firstName + lastName; //It will print without space
console.log(result);
const result1 = firstName + " " + lastName;//It will print with space but we need to add extra " " here.
console.log(result1);

//Using ES6 we can add this space without adding " ";such as-- 
const result2 = `${firstName} ${lastName}`; //` ` er moddhe space count kora hoy.
console.log(result2);