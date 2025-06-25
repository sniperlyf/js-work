// 1. var let const

testScope(); // will work here too because of hoisting
function testScope() {
    console.log(a); // undefined, because 'a' is hoisted    ****{learn hoisting}****   let and const me hoist kaam krta h? 
    if(true){
    var a = 10;
    let b = 20;
    const c = 30;
    }
    console.log(a); // 10, because 'a' is function-scoped and hoisted
    // console.log(b); // This will throw an error (not defined) because b is block-scoped
    // console.log(c); // This will throw an error because c is block-scoped
}
testScope();

console.log("----------------");


//2. Hoisting me ek orr question
//hello(); // This will not work because function declarations are not hoisted
const hello = () => {console.log(true);};
hello(); // This will work because hello is defined as a constant function expression

console.log("----------------");

// 3. comparision of == & ===
function check(){
    console.log(([] == true)); //false
    console.log("1" == true); //true
    console.log(1 == true); // true
    console.log(null == true); // false as null is falsy-val
    console.log("" == true); // false as empty string is falsy-val
    console.log(0 == true); // false as 0 is falsy-val
    console.log(1 == "1"); // true, because == does type coercion
}
check();

console.log("----------------");

function isEmpty(val){
    return val == null;
}
console.log(isEmpty(null)); // true, null is empty
console.log(isEmpty(undefined)); // true, undefined is empty

console.log("----------------");

// 4. undefined/ null/ NaN
const test = function test1(){
    console.log("");
}
console.log(test()); // undefined, because function does not return anything

let obj = null;
//console.log(obj.name); //Cannot read properties of null (reading 'name')
console.log(0/0); // NaN, because 0 divided by 0 is not a number
console.log("a"/4); // NaN, because "a" is a string and cannot be divided by a number
console.log("2" * 4); // 8, because "1" is a string converted to number and multiplied by a number
console.log(typeof NaN); // "number", because NaN is a special value in JavaScript that represents "Not a Number"
console.log(typeof null); // "object", because null is a special value in JavaScript that represents "no value"
console.log(typeof undefined); // "undefined", because undefined is a special value in JavaScript that
console.log(NaN!=NaN); // true, because NaN is not equal to itself


console.log("----------------");


// 5. value vs reference types
//this is copy by value as string is a primitive type
let name = "krishna";
let copyName = name; //value copy hui yaha
name = "sita"; // Changing name does not affect copyName, ye 'name' change kia naki 'Copyname'
console.log(copyName); // "krishna", because copyName is a shallow copy of name
console.log(name); // "sita", because name is changed

//this is reference type copy as object is a non-primitive type
let original = {name: "krishna"}; //'name' is a object here 
let copy = original;
original.name = "sita"; //object ki value change krdi
console.log(original);
console.log(copy);

console.log("----------------");