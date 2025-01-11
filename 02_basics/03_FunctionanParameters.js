// Functions help in resuability of code.
//e.g 1
function sayMyName(){
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("T");
    console.log("U");
}

sayMyName  // this is reference
sayMyName()  // this is Execute


//e.g 2
function addTwoNumbers(num1,num2){  // create function and passess parameter
    console.log(num1+num2);
}
addTwoNumbers(3,5)

//below one give answer as undefine
const result=addTwoNumbers(3,2)  //passess argument
console.log("Result:",result);
