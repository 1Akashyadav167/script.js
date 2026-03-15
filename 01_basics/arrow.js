// const user={
//     username:"Bruce",
//     price:11,
//     usermessage:function(){
//         console.log(`${this.username}, is welcomed to website`)
//     }
// }
// user.usermessage()
// user.username="Wyne"
// user.usermessage()



// function one(){
//     let usename:"Bruce";
//     console.log(this.usename) /// resultant is undefined it work in object not at the function

// }
// one()

//**********arrow ********* */

const one=()=>{
    let username= "Bruce";
    console.log(this.username)  // Arrow function do not have their own this
                                 // Arrow function can not be use as constructor
}
one()


// syntax           ()=>{}

const add=(num1,num2)=>{
    return num1+num2
}
 let add2=add(4,5)
 console.log(add2)



 // 2 nd method implicit return   .... agar {} ispe likha hai toh return likhna padega aur agar() hai toh nahi likhna hai

 const mul=(a,b)=> a*b
 console.log(mul(5,7));
 



