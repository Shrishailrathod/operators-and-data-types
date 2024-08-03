


// Data types
// 8:-objects    :-- objects are technically not a primitive data types, and objects are fundamental to the javascript are used to store more collection of data an and more entities 

const person={
    Fullname:"Shrishail Rathod",
    age:22
};





// 5: Undefined:-- it respresents a variable that has been declared but not yet assigned any value ,

let x;
console.log(x,typeof(x));


// 4:-It respresents logical entity and also true, OR false 
let x = 4;
let y = 4;
let z = 8;
if(x==y){
    console.log("True");
}
else{
    console.log("false",typeof(x,y));
}




// 3:-BigInt:-Represents integers with arbitrary precision. Useful for very large integers.
let x ="489879799795465945198"
 console.log(x,typeof(x));











// 2 numbers:It represents both integer and floating point numbers 

let x = 5;
let y = 7;
let z =3.14
// z = x+y;
console.log(z,typeof(z));








// 1:- STRING:- It represents  the sequence of characters: it can enclosed by Single quatos(' '),double quatos("")

let x = "7"+"Rathod"+"2"
console.log(x);






















if(5!==5){
    console.log("hello");
}
else{
    console.log("Rathod");
}


// using let variable
let x =5;
let y=7;
let z=x+y;
console.log(z);

// using var variable
// in this case a,y,z are var (variable)
var x = 5;
var y =6;
var z = x+y;
console.log("the value of z is:"+z);




// Automatically varibale 
// they are automatically declared when first used 
x=5;
y=5;
z=x+y;
console.log("The value of z is:" +z);