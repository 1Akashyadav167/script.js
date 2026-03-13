// function userName(username="Bruce"){
//     if(!username){
//         console.log("Please enter username");
//         return
        
//     }
//     return `${username} is logged in `
// }
// console.log(userName())


function addCart(item1,item2,...items){  // ... is rest operator it return in array
    return items
}
console.log(addCart(44,33,22,11,4444,555,))