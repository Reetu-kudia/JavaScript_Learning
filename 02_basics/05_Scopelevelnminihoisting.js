//Nested Scope 
/*//e.g 1
function one(){
    const username="Reetu"
    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);   //Give error
    two();
}
one();
*/

/*
//e.g 2
if(true){
    const username="Reetu"
    if(username==="Reetu"){
        const website="Youtube"
        console.log(username+website);
    }
    // console.log(website); // give error bcoz out of scope 
}
// console.log(username);  // give error bcoz out of scope 

*/
//........................................................................................................

//Both the example below are function , but e.g2 is also known as expression.
/*
//e.g 1 
function addone(num){
    return num+1
}
console.log(addone(4))

//e.g 2  //Here we have declare the function and hold it in variable name as addtwo
const addtwo=function (num){
    return num+2
}
console.log(addtwo(4))
*/

//e.g 1.2 
console.log(addone(2))
function addone(num){
    return num+1
}
/*
//e.g 2.1  //give error 
adddtwo(6)
const adddtwo=function(num){
    return num +2
}
*/


//hoisting is concept in js that is based on function,how function declare,extension context,how variable are trited,How it make tree.
