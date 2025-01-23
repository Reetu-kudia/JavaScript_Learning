//For Each Loop  (mostly used)
//Callback function is needed.
//Callback funtion don't have name


/*
//Syntax - arrayname.forEach(funtion(){}) //here there is no Function name and we don't need bcoz it is callback function.
//e.g 1
const coding=["js","rb","java","python","cpp"]
coding.forEach(function(i){
    console.log(i);
})
*/

/*
//Arrow Function 
//Syntax basic- arrayname.forEach(greet=()=>{})  //greet=  is function name that we don't need bcoz it is callback funtion.
//Syntax main(correct)- arrayname.forEach(()=>{})
//e.g 2 
const coding=["Java","C++","Python","Rubby","Reactjs","Angular","JavaScript","Figma"]   
coding.forEach((item)=>{
console.log(item);
})
*/

//e.g 3 
const coding=["Java","C++","Python","Rubby","Reactjs","Angular","JavaScript","Figma"]
function printme(item){
    //console.log(item);
}
coding.forEach((printme)=>{
    //console.log(`The items are ${printme}`);
})

coding.forEach((item,index,arr)=>{
 //console.log(item,index,arr);
})

const mycoding=[
    {
        languageName:"JavaScript",
        FileName:"js"
    },
    {
        languageName:"Python",
        FileName:"py"
    },{
        languageName:"c++",
        FileName:"c"
    },
]
mycoding.forEach((i)=>{
    console.log(i)
    console.log(i.languageName)
    console.log(i.FileName)
})
