//Objects
//There are 2 ways to declare object Literal and constructor.
//Literal has no singleton
//Constructor have singleton

/* //Object Literal    
const myobj={   //decralation of object
    name:"Reetu",
    age:"21",
    "fullname":"Reetu Kudia",
    email:"reetu@gmail.com",
    isLoggedIn:false,
    lastLogginnDays:["Monday","Saturday"]
}
                            //mostly Values are access by . in objects
console.log(myobj.email);  //accessing object value ....not suggested to use this method
console.log(myobj["email"]);// accessing object value ....suggested to use this
console.log(myobj.fullname);
console.log(myobj["fullname"]); //used this

*/

/* //Declaration of Symbol and add symbol in object as a key.

//e.g 1 it give symbol as string which is wrong 
const mysym=Symbol("key1");  //declare symbol
const user1={
    name:"Divya",
    age:"40",
    mysym:"mykey1"
}
console.log(user1.mysym);
console.log(typeof user1.mysym);

//e.g 2 it is right example of symbol

const mysym2 = Symbol("key2");
const user2 = {
    name: "Reetu",
    age: "21",
    [mysym2]: Symbol("Mykey2right") // Store a Symbol as the value
}
console.log(user2[mysym2]); // Outputs the Symbol value
console.log(typeof user2[mysym2]); // Outputs "symbol"

*/

/*

//How to change value in Object

const myuser1={
    name:"Vimla",
    age:"23",
    email:"vimla@gmail.com"
}
//console.log(myuser1["email"]);
myuser1.email="vim@gmail.com"
//console.log(myuser1["email"]);

//If you dont want to change value then used freeze method
Object.freeze(myuser1);
myuser1.email="vimla1234@gmail.com"
//console.log(myuser1);
//console.log(myuser1.email);
//console.log(myuser1["email"]);

//Adding Functions in Objects
const user3={
    name:"Reetu",
    age:"21",
    email:"reetu@gmail.com"
}

//Method 1
user3.greetings=function(){
   //console.log("Hello Reetu") // nothing get print
}
//console.log(user3.greetings);  //anonymous function
//console.log(user3.greetings()); //undefined

//Method 2
user.greetingstwo=function(){
 console.log('Hello Reetu,${this.email}');
}
console.log(user3.greetingstwo());
*/
//............................................Constructor...............................................
//e.g 1
const tinderuser=new Object()
//console.log(tinderuser);

//e.g 2
const tinderuser1={}
//console.log(tinderuser1);

//e.g 3
const tinderuser2={}
tinderuser2.name="Sammy"
tinderuser2.id="123abc"
tinderuser2.isLoggedIn=false
//console.log(tinderuser2);

//e.g 4 object ke under object
const tinderuser3={
    email:"reetu@gmail.com",
    fullname:{
        userfullname:{
            fristname:"Reetu",
            lastname:"Kudia"
        }
    },
    Address:"Chembur"
}
//console.log(tinderuser3);
//console.log(tinderuser3.fullname);
//console.log(tinderuser3.fullname.userfullname);
//console.log(tinderuser3.fullname.userfullname.fristname);
//console.log(tinderuser3.fullname?.userfullname.fristname);   // ? this is known as optional chaining // suppose full name does not exist in object ..then this help as to find that it exist or not. // Mostly used in API//if you dont used this you have to do it by using If else.

//e.g 5 Combining and merging 

const obj1={1:"a" ,2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}
//console.log(obj3);

const obj4=Object.assign(obj1,obj2);
//console.log(obj4);

const obj5=Object.assign({},obj1,obj2)  // above obj 4 is also same //better to used these .
//console.log(obj5);

const obj6={...obj1,...obj2}  // mostly this is used
//console.log(obj6);

//e.g values coming from that database

const user=[ // array  // this is a example of array that consist many objects
{
    id:1,
    email:"reetu@gmail.com"
},
{
    id:2,
    email:"divya@gmail.com"
},
{
    id:3,
    email:"priti@gmail.com"
},
]
//console.log(user[1].email);  // way to access value // this is a array that why user[1] give value of user who's id is 2 and email is divya@gmail.com
//console.log(tinderuser3);
//console.log(Object.keys(tinderuser3));  // this will give you all keys and the datatype is array ... which help to used this keys, you can also apply loop.
//console.log(Object.values(tinderuser3));
//console.log(Object.entries(tinderuser3)); // rarely used //this give array inside array//
//console.log(tinderuser3.hasOwnProperty('isLoggedIn')); // sometimes we do looping is objects and there may be chances that value is not present in object ...that there is a high chance that it get Crashed.
//console.log(tinderuser3.hasOwnProperty('Address')); // Above also same example// if the value is present it give true else false 


//..................................De-Structure and JSON API.......................................................

// We can do de structuring in array and object.
//We can use de structuring to take values from object , even we can direct accees values in object using . and "" , but de structuring is mostly used.

//e.g 1
const course={
    coursename:"JavaScript",
    price:"999",
    courseinstructor:"Reetu"
}

//console.log(course.courseinstructor); // to directly access 
/*using de=structure to access values 
const {courseinstructor}=course
console.log(courseinstructor);
const {courseinstructor:instructor}=course  //you can change the name if you WakeLockSentinel.
console.log(instructor);*/

//Example of De-Structure in ReactJs
const navbar=({comapny})=>{
//you want to de structure company
}
navbar(comapny="Deepu Kudia")


//................JSON and API..................

// API is the values that you get from backend(database)
//Earlier API gives values in xml formate which is very complex to understand.
//Now it give values in JSON formate.
//JSON is same as object and array. Mostly Json is like Object only.

//e.g 1 JSON in object fromate. This give error
/*{
    name:"Reetu",
    course:"ReactJS"  
} */

//e.g 2 this may give error but this is the correct JSON syntax
{
    "name"="Reetu",
    "course"="ReactJS"
}

//e.g 3 Sometimes you get API in array formate.
[
{},
{},
{}
]

