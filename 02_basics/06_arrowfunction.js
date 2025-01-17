/* 
//e.g 1
const user={
    username:"Reetu",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this); //give details
    }
}
user.welcomeMessage()
user.username="Priya"
user.welcomeMessage()
//console.log(this); //print {}
*/

/*
//e.g 2 
function chai(){
    console.log(this);
}
chai()
*/
/*
//e.g 3
function chai(){
    let  username="Reetu"
    console.log(this);
}
*/

/*
//e.g 4  //undefined
function chai(){
    let username="Reetu"
    console.log(this.username);
}
chai()
*/

//this cannot be used in funtion

/*
//e.g 5 
const chai=function(){
    let username="Reetu"
    console.log(this.username);
}
chai()
*/

/*
//e.g 6
const chai=()=>{
    let username="Reetu"
    console.log(this.username);
    console.log(this);
}
chai()
*/

//Syntax for arrow funtions
/*
//e.g 1
()=>{}
//e.g 2
const addTwo=()=>{
}
*/

//e.g 3
const addTwo=(n1,n2)=>{
    return n1+n2
}
console.log(addTwo(3,4))

// e.g 4 implicit return
const addone=(n1,n2)=>n1+n2
console.log(addone(3,4));

//e.g 5 
const addnum=(n1,n2)=>(n1+n2)
console.log(addnum(1,3));


//e.g 6 To return an object
const addno=(n1,n2)=>{username:"Reetu"}

//e.g 7 To return an object
const addnm=(n1,n2)=>({username:"Divya"})
