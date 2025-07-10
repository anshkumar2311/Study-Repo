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
// const num = [10,20,10,42,52,42,63,85,85]
// const lenNum = num.length;
// const dupNum = [];
// for(let i = 0; i<lenNum;i++){
//   if(!dupNum.includes(num[i])){          //includes used for checking whether no is present in that array or not..
//     dupNum.push(num[i])
//   }
// }
// console.log(dupNum)




//Q6 sort in assending order
const num = [25,63,12,98,65,45,50,69,36,2,6]
const lenNum = num.length
const ascNum = num.slice().sort((a,b)=>a-b)   //slice use kr rhe hai num ko ascNum mai duplicate copy krne ke liye     sort agar ham sort() khali use krte hai to vo normal sort krte hai [10,3,2] => [10,2,3] yeh hoga yeh hme string mai islia hme sort((a,b)=>a-b) use krna chaiye integer ke liye
console.log(ascNum)
