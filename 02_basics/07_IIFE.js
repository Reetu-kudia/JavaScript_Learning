//IIFE - 1) To execute function immediatly
//       2) To Remove the Global Scope Pollution

/*
//e.g 1 normal function
function chai(){
    console.log(`DB Connected normal function`);
}
chai()
*/
/*

//e.g 2  Function to execute immediately    

( function chai2(){
    console.log(`DB Connected`);
})()   // ()-this is execution call . this is used for immmediate execution.
chai2()
*/

/*
//e.g 3 
( function chai3(){    //named IIFE
    console.log(`DB Connected`);
}) (); //Use to end the code,it is imp neither it will give error.
( ()=>{       //arrow function
    console.log(`DB Connected Two`);
})()
*/


//e.g 4 
( (name)=>{    //unnamed IIFE
    console.log(`DB Connected ${name}`);
})('Reetu')

