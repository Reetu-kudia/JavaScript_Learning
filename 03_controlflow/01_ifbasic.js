//Conrol flow is also known as Logic Flow or Logic Control.
//When we write code and run it the hole code gets run and exceute that should not happen, only the needed code should run,conrol flow is used to run the code that is needed.

//Control Flow 
//Topic 1 - If 

//e.g 1 
/*
if(true){
    console.log("My name is Reetu")  //get execute
}
if(false){
    console.log("My name is reetu") //not execute
}
if(2==2){  //using comparisons Operators 
console.log("Equals")
}

//List of Comparison Operators
// < ,> ,<= ,>= ,== , != , === (it check type also) , !== 

//e.g 2 
if(2!=3){
    console.log("Not equal");
}else{
    console.log("Equal");
}
 
if(2!=2){
    console.log("Not Equal");
}else{
    console.log("Equal");
}

if(2===2){
    console.log("Equal");  //get execute
}

if(2==="2"){ //not get Execute //here it also check type 
    console.log("Equal ===");
}
if(2=="2"){   //get execute
    console.log("Equal ==");
} 
*/  

/*
//e.g 3 
temp=41
if(temp===41){
    console.log("Less than 50");
}else{
    console.log("Greater than 50");
}
console.log("Code get Execute Successfully");  //execute by default
*/
/*
//e.g 4
score=210
if(score>100){
    let power="Fly"
    console.log(`User power : ${power} `);
}
console.log(`User power : ${power} `);  // This line will give error bcoz it is out of scope.

*/

/*
//e.g 5 //Checking Multiple Conditions

balance=1000;
if(balance<500){
    console.log("Less than 500");
}else if(balance <750){
    console.log("Less than 750");
}else if(balance<900){
    console.log("Less than 900");
}else{
    console.log("Less than 1200");
}
*/

//e.g 6 Logical AND Operator  // All the condition should be true

const userLogin=true
const debitCard=true
if(userLogin && debitCard && 2==2){
    console.log("Allow to Buy");
}
else{
    console.log("Not Allow");
}

//E.g 7 Logical OR Operator  //Any One condition should be true

const loginFromGoogle=false
const loginFromEmail=true
if(loginFromGoogle || loginFromEmail){
    console.log("user logged In Successfully");
}
else{
    console.log("Unscuessfull Login");
}