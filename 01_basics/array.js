let myArray=["Tony Stark","Captain America","thor","Hulk"]
console.log(myArray[3]);
console.log(myArray.push("Batman"));

// Array Method
//.push()
//.pop()
//.unshift()
//.shift()
//.includes()
//.indexOf()

// slice and splice

//slice ... original array  not modified
let arr = [10, 20, 30, 40, 50];

let result = arr.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(arr);    // [10, 20, 30, 40, 50]


//splice .... original array modified

let arr2 = [10, 20, 30, 40, 50];

arr2.splice(1, 2);   // (start index,deletecount,add(optional))

console.log(arr2); // [10, 40, 50]


const iplTeam=["CSk","RCB","SRH","MI","KKR"]
const iccTeam=["INDIA","ENGLAND","SOUTH AFRICA","NEWZEALAND"]
const combineTeam=[...iplTeam,...iccTeam,]
console.log(combineTeam);


console.log(Array.from("Bruce Wyne"))  // it give the array
console.log(Array.from({name:"Bruce Wyne"}))// intresting