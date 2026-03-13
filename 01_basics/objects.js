// Object literals


const jsUser={
    name:"Bruce",
    
    age:32,
    email:"batman@google.com",
    City:"Gotham"
}
console.log(jsUser.email)
console.log(jsUser["email"])


// to use Symbol as Object key
const mySym = Symbol("key1");

const jsUser1 = {
    name: "Bruce",
    [mySym]: "Key1",
    age: 32
};

console.log(jsUser1[mySym]);
