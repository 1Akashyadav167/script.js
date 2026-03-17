// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}


//**array loop */

let heros=["ironman","captain america","Thor"]
console.log(heros.length);
for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    console.log(element);
    
}


// break and continue

for (let index = 0; index <10; index++) {
    if(index==5)break;
    console.log(`the print number is ${index}`)
    
}


for (let index = 0; index <10; index++) {
    if(index==5)continue;
    console.log(`the print number is ${index}`)
    
}


// do-while loop

let myArray=["iron man","Captain America","Thor"]
let arr=0;
while (arr<myArray.length) {
    console.log(`The value is ${myArray[arr]}`);
    arr++
    
}


// for-of loop
let arra=[1,2,3,4];
for (const val of arra) {
    console.log(val);
    
    
}



let greeting="Bruce Wyne"
for (const greet of greeting) {
    console.log(`The value is ${greet}`)
    
}


// Map

const map=new Map()
map.set("In","India")
map.set("UK","UNITED KINGDOM")
map.set("AUS","AUSTRALIA")
map.set("Fr","FRANCE")
console.log(map);

for(const [key,value]of map){
    console.log(key, ":->", value)
}



// for of in objects

// const user = {
//   name: "Akash",
//   age: 22,
//   city: "Delhi"
// };

// for (const key of Object.keys(user)) {
//   console.log(key, user[key]);
// }

