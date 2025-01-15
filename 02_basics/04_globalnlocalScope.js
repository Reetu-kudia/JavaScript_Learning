//The story of local and global Scope start from these 3 keywords - let,const,var

//e.g 1 //This will print value of all three a,b,c.The question arise is why to use 3 different variables to declare,we can use anyone of these?
/*let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c); */


//{} this is scope in all programming languages.You can see the use of {} in functions,objects & if else, but in object it use for object declaration , but in funtion and if else it use for scope.




//e.g 2
/*
if(true){
let a=10  // this will not get print give error bcoz we have print it outside the scope(funtion)
const b=20  // this will not get print give error bcoz we have print it outside the scope(funtion)
var c=30  //But var get print that's why we avoid using var.
}
console.log(a);
console.log(b);
console.log(c); */

/*//e.g 3 //This code will print 30 as output
//there may be chances that we are importing code from other file,that file may contain same variable name,so that time problem may arise.
//so it suggect not  to use var , use let.
var c=300
if(true){
    var c=30
}
console.log(c) */

//e.g 4 //it will print both 300 and 30  
//The code inside {} this have Block Scope
let a=300  // Global Scope
if(true){
    let a=30   //Block Scope
    console.log("Result :",a); //Block Scope
}
console.log(a);  // Global Scope

/*
//Scope in Window
//There is a keyword for scope in window
//go to browser and inspect page (The Scope over here is different) and (the code in code environment different)

*/
