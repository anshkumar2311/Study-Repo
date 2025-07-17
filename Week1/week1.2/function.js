//Functions 

//Q1 find sum of 2 numbers 
// function findSum(a,b){
//   return a+b;
// }
// console.log(findSum(3,7))




//Callbacks  =>  passing function as a arguments
//Q2
// function sum(a,b, fnToCall){
//   let result = a+b;
//   // return result; 
//   fnToCall(result);
// }
//
// function displayResult(data){
//   console.log(`Result of sum  is : ${data}`);
// }
//
// function displayResultPassive(data){
//   console.log(`Sum result is : ${data}`);
// }
//
// //now you are only allowed to call one function after this 
// //how will you displayResult of sum
//
// // let ans = sum(1,3);
// // console.log(displayResult(ans))   // this is our approch but we have to call only one function
//
// let ans = sum(1,5,displayResult) 




//Q3 Normal calculate Arithmetic with 3 arguments named type 
function calArith(a, b, type){
  if (type == "sum"){
    return sum(a, b);
  }
  if(type == "minus"){
    return sub(a, b);
  }
}
function sum(a, b){
  return a + b;
}
function sub(a, b){
  return a - b;
}

const value = calArith(1, 6, "sum");
console.log(value);  // ✅ prints: 7

