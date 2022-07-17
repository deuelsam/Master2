// Task 1 - Assume a number and check whether it is a prime number or not.
// let num1 = 5;
// let reminder1= num1 % 1;
// let reminder2= num1 % 5;
// if (reminder1==0  && reminder2==0){
//    console.log("prime");
// }else { 
//   console.log("not prime");
//   }

// Task 5 - Print the FizzBuzz Series from 1 to 100.

// let number = 1;
// while (number <= 100){
// if(number % 3 == 0 && number % 5 == 0) {
//   console.log("FizzBuzz");
// } else if(number % 3 == 0) {
//   console.log("Fizz");
// } else if (number % 5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log(number);
// }
// number=number+1
// }

// Task 4 - Assume a number and print the factorial of that number.
// Example: 10 -> 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 => 3628800

// function factorial(n){

//     if(n == 0 || n == 1){
//         return 1;

//     }else{
//         return n * factorial(n-1);
//     }
// }
// let n = 4;
// answer = factorial(n)
// console.log( answer);

// Task 2 - Assume an array of numbers and print the SECOND LARGEST number of that array.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8,9];

// let max = nums[0]
// let second_max = nums[1];

// for(let i = 0; i < nums.length; i = i + 1) {
//   if(nums[i] > max) {
//     second_max = max
//     max = nums[i];
//   } 
// }
// console.log(max);
// console.log(second_max)

// let str   = "kfksdkjfkjsdhfkjhooaoirunxebl1234saue" 
// let count = 0;

// for(let i = 0; i < str.length; i = i +1) {
//   let single_character = str[i]; //str.charAt(i);

//   if(single_character == 'a') {
//     count = count + 1;
//   } else if(single_character == 'e') {
//     count = count + 1;
//   } else if (single_character == 'i') {
//     count = count + 1;
//   } else if (single_character == 'o') {
//     count = count + 1;
//   } else if (single_character == 'u') {
//     count = count + 1;
//   }

// switch(single_character){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
// count=count+1;
// break;
// }
// }
// console.log(count)


