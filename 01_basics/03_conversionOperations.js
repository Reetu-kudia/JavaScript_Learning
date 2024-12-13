//****************************** Conversion ************************************* */
// Example 1
let score2="33"
console.log(typeof score2);  //way 1 
console.log(typeof (score2));  // way 2 as method

let valueInNumber=Number (score2) //to convert type First letter should be capital
console.log(valueInNumber);
console.log(typeof valueInNumber); 

 //Example 2
let score="33abc"
console.log(score);
console.log(typeof score);

let valueInNumber2=Number(score)
console.log(typeof valueInNumber2); //output is number
console.log(valueInNumber2);  //output is NaN (Not an Number)
//"33abc" is not a pure number , JS will convert it in number but will give value as NaN 

 //Example 3
let score1=null
console.log(typeof score1) // output object

let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1); //output number
console.log(valueInNumber1); //output 0  


//Example 4
let score3=undefined
console.log(typeof score) //output undefined

let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3); //output number
console.log(valueInNumber3);  //output NaN
//it convert the score3 type but the value is NaN 


// Example 5
console.log("............EXample 5..........")
let score4=true
console.log(typeof score4);

let valueInNumber4=Number(score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4); 


//Example 6
console.log("........Example 6.........")
let isLoggedin=""
console.log(isLoggedin);
console.log(typeof isLoggedin);

let booleanLoggedIn=Boolean(isLoggedin)
console.log(booleanLoggedIn);
console.log(typeof booleanLoggedIn);
// if isLoggedin=1 (true) , if isLoggedin=0(false) , if isLoggedin="" (false) ,if isLoggedin="Reetu" (true)



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
console.log("........Example 8.......")
let someNumber=33
let StringNumber=String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber); 


//**************************************Operations****************************************/
console.log("**************************************Operations****************************************")
let value=3
let negvalue = -(value)
// console.log(negvalue);

// console.log(2+2);
// console.log(3-2);
// console.log(2*2);
// console.log(2**4);
// console.log(4/2);
// console.log(2%2);


let str1 ="hello"
let str2 = " Reetu"
let str3 = str1+str2
console.log(str3);
console.log(str1+str2);

// console.log("1"+2);
// console.log("2"+1);
// console.log("2"*2);
// console.log(2*"2");
// console.log("2"-2);
// console.log(2-"2");
// console.log("4"/2);
// console.log(4/"2");
// console.log("1"+2+2); //if string is first then all others are also consider as string //avoid using this type of code
// console.log(1+2+"2"); // if string is in last then it will perform the task first then take string //avoid using this type of code
// console.log("1"+(2+2)); 
// console.log((1+2)+"2");
// console.log(3*4+1-2+5/2+4%2);//avoid using this type of code
// console.log((3*4)+1-(2+5)/(2+(4%2))); //brackets 

// console.log(true); //avoid using this type of code
// console.log(+true);//avoid using this type of code
// console.log(+"");//avoid using this type of code

// let num1,num2,num3 //avoid using this type of code
// num1=num2=num3=2+2 //avoid using this type of code
// console.table([num1,num2,num3])

let gameCounter=100
gameCounter++; //postfix operator //values are increase after usage
console.log(gameCounter);
++gameCounter; //prefix operator //values are increase first
console.log(gameCounter);














