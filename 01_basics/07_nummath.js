// const balance=new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const anotherNum=123.243
// console.log(anotherNum.toPrecision(3))
// console.log(anotherNum.toPrecision(4))

// const num=1000000
//console.log(num.toLocaleString('en-IN'))

//............................Math.....................................................
// console.log(Math)
// console.log(Math.abs(-3))
// console.log(Math.round(4.3))
// console.log(Math.ceil(2.3))
// console.log(Math.floor(5.3))
// console.log(Math.min(2,6,9,12,5,24))
// console.log(Math.max(12,3,7,9,34,23,65))

console.log(Math.random())  //random will always give value between 0 and 1
console.log((Math.random()*10)+1) // multiple 10 so that value will that come will greater than 0......but there are chances that value come as 0 so we have add 1 so that value will be greater than 0 in every case.
console.log(Math.floor(Math.random()*10)+1)

// below is the example of above only...we have added min that atleast we get min value.
const min=10
const max=20
console.log(Math.floor(Math.random() * (max-min + 1)) + min)

