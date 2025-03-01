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
//console.log(newNum);

//Now its depend on you what you wanted to use whether filter or forEach

//...............................................................................................

//e.g 4 
const book=[
    {
        title:'Book One',
        genre:'Fiction',
        publish:1980,
        edition:2000
    },
    {
        title:'Book Two',
        genre:'History',
        publish:1978,
        edition:2012
    },
    {
        title:'Book Three',
        genre:'Non Fiction',
        publish:1990,
        edition:2008
    },
    {
        title:'Book Four',
        genre:'History',
        publish:1997,
        edition:2005
    },
]
let userbook

//userbook=book.filter((bk)=>bk.genre==='History')
//userbook=book.filter((bk)=>{bk.publish>=2000})
//userbook=book.filter((bk)=>{return bk.publish>=2000})
userbook=book.filter((bk)=>{
    return bk.publish>=1900 && bk.genre==='History'
})
// console.log(userbook);

//e.g 5 
const myNum=[1,2,3,4,5,6,7,8,9,10]
//const newNum1=myNum.map((num)=>num+10)
const  newNum1=myNum.map((num)=>{return num+10})
//console.log(newNum1);

//e.g 6 Chaining-using 2-3 methods/things together
const myNum1=[1,2,3,4,5,6,7,8,9,10]
const newNum2=myNum1
                .map((num)=>num*10)
                .map((num)=>num+10)
// console.log(newNum2);   

const myNum2=[1,2,3,4,5,6,7,8,9,10]
const newNum3=myNum2
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
//console.log(newNum3);                

//
//e.g 7
const myNum4=[1,2,3]
const myTotal=myNum4.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval
},0)
//console.log(myTotal);

//e.g 8 using arrow function in reduce
const myNum5=[1,2,3]
const myTotal5=myNum5.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal5);

//e.g 9 
const shoppingCart=[
    {
        itemName:"Java Course",
        price:1999
    },
    {
        itemName:"Python Course",
        price:999
    },
    {
        itemName:"React JS Course",
        price:4999
    }
]
const amttopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(amttopay);