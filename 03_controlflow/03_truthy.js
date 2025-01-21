//Falsy Values 
// false , 0 , -0  , BigInt 0n ,"" , null , undefine , NaN

//Truthy Values
// "0" , 'false' , " " , [] , {} , function(){}  

//e.g 1
const userEmail="Reetu@reet.com" 
if(userEmail){   //No condition check it only check values
    console.log("Got Email");
}else{
    console.log("Don't have user email");
}

//e.g 2
const userEmail2=""    //Empty String
if(userEmail2){
    console.log("Got Email");
}else{
    console.log("Dont have user email");
}

//e.g 3
const userEmail3=[]  //Empty array
if(userEmail3){
    console.log("Got Email");
}else{
    console.log("Not a user");
}

//e.g 4
const userEmail4=[]
if(userEmail4.length===0){
    console.log("Empty Array");
}else{
    console.log("No Array");
}

//e.g 5 
const userEmail5={}
if(Object.keys(userEmail5).length===0){     // .length check array is empty or not  // before code give empty array
    console.log("Object is Empty");
}else{
    console.log("Object is not Empty");
}


//Go to Console 
 //false=0 // false=='' // 0==''

//Nullish Coalescing Operator( ?? )  :    null/undefiened   //mostly used in database
//e.g 
let val1;
val1=5 ?? 10
val1=null ?? 10
val1=undefined ?? 20
val1=null ?? 15 ?? 25
console.log(val1);



//Terniary Operator (?:)
// Syntax   
// condition ? true : false

//e.g 
const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("Less than 80") : console.log("More than 80");