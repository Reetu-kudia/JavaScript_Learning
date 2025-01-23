// For Of Loop  (not used in Object mostly used in array)(vales) 

//Syntax : for(const iterator of Object){ .... code ....  }   //here object is not {} this object , here object means kis pe loop lagana hai woh.

/*
//e.g 1
const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i);
} */

/*
//e.g 2 
const greeting="Hello World"
for(const greet of greeting){
    console.log(greet);
}
*/

/*
//e.g 3 
const greeting="Hello Divya Shetty"
for(const greet of greeting){
    console.log(`Each char is ${greet}`);
}
*/

/*
//e.g 4 
const greeting="Hey Reetu"
for(const greet of greeting){
    if(greet==" "){
        console.log("Blank Space");
        continue
    }
    console.log(`Each char is ${greet}`);
}
*/

//Maps - it is Object that hold key value pair.It remember the order of Key. 
// Used for unique value (it does not print same value)
//the Order you enter value, the output is also in that same Order.


/*
//e.g 1  //It print all value , except last (india) bcoz it is repeated
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
console.log(map);
*/

/*
//e.g 2  For Of loop
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
for(const [key] of map){
    console.log(key);
}
*/

//e.g 3   this is proper output
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
for(const [key,value] of map){
    console.log(key,':',value);
}

//e.g 4 for Of Loop in Object  //This give error bcoz Object is not iterable.
const myObj={
    gameName1:'SpiderMan',
    gameName2:"IronMan"
}
for(const[key,value] of myObj){
    console.log(key,":",value);
}