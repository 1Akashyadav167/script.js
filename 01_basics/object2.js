const singletonObj=new Object()  // Singleton object
singletonObj.name="Bruce";
singletonObj.age=33;
singletonObj.city="Gotham"
console.log(singletonObj);

// Nested Object
const dc={
    email:"batman@gmail.com",
    fullName:{
        firstname:"bruce",
        lastname:"Wyne"
    }

}
console.log(dc.fullName)



// Merge  Objects
const obj1={9:"a",12:"b",13:"c"}
const obj2={1:"d",2:"e",3:"v"}
// const Obj3=Object.assign({},obj1,obj2)
const Obj3={...obj1,...obj2}
console.log(Obj3);


console.log(Object.keys(dc)) // it will give in array data type
console.log(Object.values(dc))
