//e.g 1  //The output will be undefine bcoz for Each not return the value. //it give output as undefine
const coding=["js","java","cpp","python","ruby"]
const values=coding.forEach((item)=>{
    //console.log(item);
    return item
})
//console.log(values);  


//e.g 2 Fliter will return value
const myNums=[1,2,3,4,5,6,7,8,9]

/*const newNum=myNums.filter((num)=> num>4)   //filter also have callback function
console.log(newNum); */


/*const newNum=myNums.filter((num)=>{   //give empty array bcoz of Scope
    num>4
})
console.log(newNum);   */

/*const newNum=myNums.filter((num)=>{   //If you use Scope then you need to use return keyword.  Scope is {}
    return num>4
})
console.log(newNum);   */


//e.g 3 Using For Each Loop  //this give proper output
const newNum=[]
myNums.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum);

//Now its depend on you what you wanted to use whether filter or forEach