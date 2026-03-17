const lang=["java","python","ruby","javascript"];

lang.forEach( function(val){
    console.log(val);
});
    

// using arrow function
const numbers = [10, 20, 30];

numbers.forEach((num) => {
  console.log(num);
});


// Using Object

const users = [
  {name: "Akash", age: 22},
  {name: "Rahul", age: 25}
];

users.forEach((user) => {
  console.log(user.name);
});
    
