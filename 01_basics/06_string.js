const name="Reetu"
const age=21
//Normal way
console.log(name+age)
//String as Object
console.log(`Hello my name is ${name} and my age is ${age}.`)

const gameName=new String("Chota-Bheem")
console.log(gameName)

//Index
console.log(gameName[0]);

//Object
console.log(gameName.__proto__);


// Methods in String
// 1. Length
console.log(gameName.length);
//2. to Upper case
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
//3. to see the position of charaters
console.log(gameName.charAt(4));
//4. to fing position of characters
console.log(gameName.indexOf('t'))
//5. Substring 
const newString=gameName.substring(0,7)
console.log(newString);
//6. slice ..cut the string
const anotherString=gameName.slice(0,7)
console.log(anotherString)
const anotherString2=gameName.slice(-15,3)  // this will reverse the string
console.log(anotherString2)
//7. trim
const newString2 = "   Reetukudia   "
console.log(newString2.trim())
// 8. replace
const url = "reetu//amzn.n/d/20%/youtube.com"
console.log(url.replace('20%','-'))

//9.includes

console.log(url.includes('reetu'))

//10. split // Convert string into array
const name1 = "Divya-Balakrishna-Shetty"
console.log(name1.split('-'))