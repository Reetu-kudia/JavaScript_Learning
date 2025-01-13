// Functions help in resuability of code.
/*//e.g 1
function sayMyName(){
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("T");
    console.log("U");
}

sayMyName  // this is reference
sayMyName()  // this is Execute
*/

/*//e.g 2
function addTwoNumbers(num1,num2){  // create function and passess parameter
    console.log(num1+num2);
}
addTwoNumbers(3,5)

//below one give answer as undefine
const result=addTwoNumbers(3,2)  //passess argument
console.log("Result:",result);
*/

/* //e.g 3
function addTwoNumbers2(n1,n2){
    let result2=n1+n2
    console.log("Reetu"); // this will get print bcoz it is before return.
    return result2
    console.log("Hitesh")  // this will not get print bcoz its below return and any code below not work.
}
const result2=addTwoNumbers2(3,5);
console.log("Result:",result2);
*/

/*//e.g 4 
function addTwoNumbers3(no1,no2){
    return no1+no2
}
const result3=addTwoNumbers3(2,4)
console.log("Result:",result3);
*/

/*//e.g 5
function loginUser(username){
    return `${username} just logged in`
}
console.log(loginUser("Reetu")); // return name
console.log(loginUser());  //  return undefine
*/

//e.g 6 
function loginUser2(username){
    if(username===undefined){
        console.log("Please enter username");
    }
    return`${username} just logged in`
}
console.log(loginUser2());

//e.g 7
function loginUser3(username){
    if(!username){
        console.log("Please enter username");
    }
    return`${username} just logged in`
}
console.log(loginUser3());

//e.g 8  // in this example the value will never get undefine it will show sam atleast
function loginUser4(username="sam"){
    if(!username){
        console.log("Please enter username");
    }
    return`${username} just logged in`
}
console.log(loginUser4());


//e.g 8  // in this example sam is replaceed by Divya
function loginUser5(username="sam"){
    if(!username){
        console.log("Please enter username");
    }
    return`${username} just logged in`
}
console.log(loginUser5("Divya"));