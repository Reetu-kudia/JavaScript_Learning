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

