// Simple primitives 
// normal syntax if-else loop

// Q1 Write the program to greet a person given their rst and last name

//let fname = `Ansh`;
//let lname = `Kumar`;
//console.log(`Hei I am ${fname} ${lname} call me ${fname[0]}${lname[0]}`)



//Q2 Write a program that greets a person based on their gender. (If else)

//let fname = `Ansh`;
//let lname = `Kumar`;
//let isMale = true;
//if (isMale){
//  console.log(`Hei boy ${fname}`)
//}
//else{
//  console.log(`Hei girl ${fname}`)
//}


//Q3 Write a program that counts from 0 - 100 and prints (for loop)

//let count = 0;
//let sum = 0;
//let mulFive = 0;
//let allNum = '';
//for (let i = 0; i<=100;i++){
//  allNum += i + ', ';
//  count++;
//  sum+=i;
//  if (i%5==0){
//    mulFive++;
//  }
//}
//console.log(allNum);
//console.log(count);
//console.log(sum);
//console.log(mulFive);






//Complex primitives
//Array and Object

//Q1 Write a program prints all the even numbers in an array
// const num = [2,10,52,55,87,69,96,100];
// const evenNum = []
// const lenNum = num.length;
// for (let i=0;i<=lenNum;i++){
//   if(num[i]%2==0){
//     evenNum.push(num[i])
//   }
// }
// console.log(evenNum.join(","));
// console.log(evenNum.length);




//Q2 Write a program to print the biggest number in an array
// const num = [3,56,87,52,45,96,14];
// let bigNum = num[0];
// const lenNum = num.length;
// for(let i =0;i<=lenNum;i++){
//   if(num[i]>bigNum){
//     bigNum=num[i];
//   }
// }
// console.log(bigNum);




//Q3 Write a program that prints all the male people’s rst name given a complex Object
// const userObj=[{
//   "fname":"Ansh",
//   "gender":"male"
// },{
//   "fname":"Pinki",
//   "gender":"female"
// },{
//   "fname":"Vansh",
//   "gender":"male"
// }];
// const objLen = userObj.length;
// for(let i=0;i<objLen;i++){
//   if(userObj[i]["gender"] == "male"){
//     console.log(userObj[i].fname);
//   }
// }




//Q4 Write a program that reverses all the elements of an array
// const num = [10,20,30,40,50,60];
// let lenNum = num.length;
// const revNum = [];
// for (let i=lenNum-1;i>=0;i--){
//   revNum.push(num[i])
// }
// console.log(revNum);



//Q5 Write a program to remove duplicacy from array
const num = [10,20,10,42,52,42,63,85,85]
const lenNum = num.length;
const dupNum = [];
for(let i = 0; i<lenNum;i++){
  if(!dupNum.includes(num[i])){
    dupNum.push(num[i])
  }
}
console.log(dupNum)

