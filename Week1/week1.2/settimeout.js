// setTimeout(() => { 
// }, timeout);
//
// setTimeout(function, delayTime)   // 1000 => 1Sec
// setInterval(function, delayTime)
// diff is interval is continously do that task at given time and setTimeout done that task one time after given time

// setTimeout(()=>{
//   console.log("This is setTimeout")
// },1000)
//
// setInterval(() => {
//   console.log(`This is setInterval`)
// }, 500);
//

// clearTimeout() & clearInterval() 
// const timerId = setTimeout(() => {
//   console.log("You won't see this");
// }, 3000);
//
// clearTimeout(timerId);  // cancels it

const timerId = setInterval(() => {
  console.log("You won't see this");
}, 3000);

clearInterval(timerId);  // cancels it



// function displayResult(a,b,fn){
//   return fn(a,b);
// }
// function mul(a,b){
//   return a*b;
// }
// // let ans = displayResult(8,5,mul)
// setTimeout(function () {
//    console.log(displayResult(8, 5, mul));
// }, 1000);
