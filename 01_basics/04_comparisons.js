console.log(2==2);
console.log(2>=2);
console.log(2>2);
console.log(2!=2);
console.log(2<2);
console.log(2<=2);
//above is the simple comparisons

//comparisons of two dataTypes  //avoid this type of comparisons
console.log("............comparison example...........")
console.log("2"==2);
console.log("2">=2);
console.log("02">2);

console.log("........Example 1.........")
console.log(null==2);
console.log(null>2);
console.log(null>=2);
console.log(null==0);
console.log(null>0);
console.log(null>=0);

console.log("........Example 2.........")
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined>=0);


console.log("........Example 3.........")
//strict check(===) : strict check also check the dataType not only the value.
console.log("2"==2); //this will directly do comparison
console.log("2"===2);// this will check dataTypes