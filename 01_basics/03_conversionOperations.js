/* // Example 1
let score2="33"
console.log(typeof score2);  //way 1 
console.log(typeof (score2));  // way 2 as method

let valueInNumber=Number (score2) //to convert and type First letter should be capital
console.log(valueInNumber);
console.log(typeof valueInNumber); */

/* //Example 2
let score="33abc"
console.log(score);
console.log(typeof score);

let valueInNumber2=Number(score)
console.log(typeof valueInNumber2); //output is number
console.log(valueInNumber2);  //output is NaN (Not an Number)
//"33abc" is not a pure number , JS will convert it in number but will give value as NaN */

/* //Example 3
let score1=null
console.log(typeof score1) // output object

let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1); //output number
console.log(valueInNumber1); //output 0  */


/* //Example 4
let score3=undefined
console.log(typeof score) //output undefined

let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3); //output number
console.log(valueInNumber3);  //output NaN
//it convert the score3 type but the value is NaN */


/*// Example 5
let score4=true
console.log(typeof score4);

let valueInNumber4=Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4); */


/*//Example 6
let isLoggedin=""
console.log(isLoggedin);
console.log(typeof isLoggedin);

let booleanLoggedIn=Boolean(isLoggedin)
console.log(booleanLoggedIn);
console.log(typeof booleanLoggedIn);
// if isLoggedin=1 (true) , if isLoggedin=0(false) , if isLoggedin="" (false) ,if isLoggedin="Reetu" (true)
*/


/*//Example 7
let isLoggedin=1
console.log(isLoggedin);
console.log(typeof isLoggedin);

let booleanLoggedIn=Boolean(isLoggedin)
console.log(booleanLoggedIn);
console.log(typeof booleanLoggedIn);

let booleanLoggedIn1=String(isLoggedin)
console.log(booleanLoggedIn1);
console.log(typeof booleanLoggedIn1);

let booleanLoggedIn2=Number(isLoggedin)
console.log(booleanLoggedIn2);
console.log(typeof booleanLoggedIn2);
*/


//Example 8
let someNumber=33
let StringNumber=String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);











