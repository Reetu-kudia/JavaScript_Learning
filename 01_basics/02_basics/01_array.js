/*
Array is a object.In simple language we can say array is a datatype that where you can keep multiple items in single array/element.

1.In JS size of array can change after decralation also.It is resizeable.
2.In JS array start from 0
3.In JS array can have mix different datatypes.
4.There are 2 types of Copy in Array 
4.1 Shallow copy- properties share same refernce point.
4.2 Deep copy- properties does not share same refernce point.

*/

//Diclaration/define of Array
const myArray=[0,1,2,3,4,5]
const MyArray=["Reetu","Divya","Priti"]
const myarray=new Array(1,2,3,4)

//Methods in Array

/* 
Method 1
myArray.push(9)    add value at the end of array.
console.log(myArray);

Method 2
myArray.pop()   //remove value from last of array.
console.log(myArray);

myArray.unshift(9)  // suggest not to use it shift all other elements/values
console.log(myArray);

myArray.shift()  //remove the first value from array
console.log(myArray);


console.log(myArray.includes(5));  // find whether the value present in array or not
console.log(myArray.indexOf(9));  // find index of value
console.log(myArray.join()); // convert all values in string separated by ,(coma).

*/

/*Slice and Splice
const mynewArray1=myArray.slice(1,3)   //it does not change/manupulate original value.
console.log(mynewArray1);

const mynewArray2=myArray.splice(1,3)   // it change/manupulate original value.
console.log(mynewArray2);
*/


//To Add/Concate 2 arrays
const marvel_heros=["thor","Ironman","spiderman"]
const fruits=["apple","mango"]
/*method 1 it add array in array
marvel_heros.push(fruits);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);
*/

/* Method 2
marvel_heros.concat(fruits);
console.log(marvel_heros); */

/*Method 3   // this method will give you output but not mostly used
MarvelandFruits=marvel_heros.concat(fruits)
console.log(MarvelandFruits);
*/

/* Method 4    Spread Method 
This method is mostly used 
const allnewherosandfruits=[...marvel_heros,...fruits]
console.log(allnewherosandfruits);
*/


/*//Flat method  to convert multiple array in single.
const anotherarray=[1,2,3,4,[5,6],7,9,[1,4,[7,7]]]
const realanotherarray=anotherarray.flat(Infinity)
console.log(realanotherarray);
*/


//below examples are mostly used in Data Scraping
console.log(Array.isArray("Reetu"))

// to create array
console.log(Array.from("Reetu"))

//Ask in interview mostly
console.log(Array.from({name:"hitesh"}))

//to convert into array
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score3,score2));

