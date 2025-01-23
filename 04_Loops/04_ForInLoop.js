// For In Loop  (Mostly used in Object) (Key)

//Syntax: for(const key in Object){ .....Code.......}

//e.g 1 
const MyObj={
    js:"JavaScript",
    py:'Python',
    c:"C++",
    rb:'rubby',
    swift:'swift by apple'
}

for(const key in MyObj){  //this give key
    console.log(key);
}

for(const i in MyObj){    // this give values
    console.log(MyObj[i]);
}

for(const j in MyObj){
    console.log(`${j} Shortcut is for ${MyObj[j]}`);
}


//e.g 2   //Array 
const programming=["Java","Python","C++","React"]
for(const k in programming){
    console.log(programming[k]);
}

//e.g 3  // It print nothing bcoz map is not iterable.
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('IN',"India")
for(const m in map){
    console.log("Map Example");
    console.log(map[m]);
}