// console.log("ABCD")//console.log("Hey Everyone" );
// console.log("Another one")

// let number1=10;
// let number2=20;
// let sum = number1 +number2 ;
// console.log(sum);


// let num1=2
// let num2=3
// let num3=4
// if(num1 > num2 && num1 > num3) {
//    console.log(num1);
//  } else if(num2 > num1 && num2 > num3) {
//    console.log(num2);
//   } else if(num3 > num2 && num3 > num1) {
//    console.log(num3);
//   }



// let blahblah = [2,5,10,15,"something",24]
// console.log(blahblah[3]);

// let number_array=[2,5,6,10,12,15];
// let index=0

// while(index<6){
//     let single_number = number_array[index];
//     if  (single_number % 2==0){
//         console.log(single_number);

//      }
//      index=index+1
//}

//  let number_array=[2,5,6,10,12,15];
// let sum=0
//  for( let index=0; index < number_array.length;index=index+1) {
//      let single_number=number_array[index];
//  sum=sum+number_array[index];
//  }
// console.log(sum)



// Task 3 - Assume an array of names(string) and print the name with most number of vowels.

// let grade = "B"
// switch (grade) {
//     case "A":
//         console.log("Marks between 90 and 100");
//         break
//     case "B":
//         console.log("marks between 80 and 90");
//         break
//     case "C":
//         console.log("Marks between 70 and 80");
//         break
//     case "D":
//         console.log("Marks betwen 60 and 70");
//         break
//     case "F":
//         console.log("Marks between 50 and 60")
//         break
//     default:
//         console.log("Invalid")

// }

// let my_name = "Aayush";
// alert(my_name);

// let my_name = prompt()
// console.log(my_name)

// let num = prompt("Enter a number to check");
// let reminder = num % 2;
// if (reminder == 0) {
//     alert("Number is Even");
// } else {
//     alert("Number is odd");
// }

// let answer = prompt("Do you want to check for odd or even");
// while (answer == "y" || answer== "Yes" ) {
//     let num = prompt("Do you want to enter a number")
//     let reminder = num % 2;
//     if (reminder == 0) {
//         alert("Number is Even");
//     } else {
//         alert("Number is odd");
//     }
//     answer = prompt("Do you want to enter a number again?")
// }


// function add_2numbers(num1,num2) {
// let sum=num1+num2;
// return sum;
// }


// let num1=prompt("Enter a number");
// let num2=prompt("Enter second number");

// num1 = Number(num1) 
// num2 = Number(num2)


// let addition = add_2numbers(num1, num2);
// console.log(addition);

//wrong
// let item1= prompt("Do you want to order a sandwich ?.. type 1..  1. Sandwich $1.5 " )
// let item2= prompt("Do you want to order a Burger? type 2..  2. Burger $1.7 " )
// let item3= prompt("Do you want to order fries?  type 3 ..   3.Fries $ 8 " )
// switch (item1) {
//      case "1":
//      console.log("Sandwich");}
// switch (item2) {
//         case "2":
//         console.log("Burger");}
// switch (item3){
//      case "3":
//         console.log("Fries");
     
// let item1=Number(1.5)
// let item2=Number(1.7)
// let item3=Number(8)

//         function add_numbers(item1,item2,item3) {
//             let sum=item1+item2+item3;
//             return sum;
//             }
// let addition=add_numbers(item1,item2,item3)
// console.log(addition);

// alert(addition)
//     }


// console.log(typeof document);

// let participants =["Aayush"]
// participants[1] = "pawan"
// participants[2] = "sam"
// participants.push("Amal")
// console.log(participants)

// console.log(document.body);

// let button_2 = document.getElementById("some_btn")
// button_2.innerText=("Updated button 2");
// button_2.style.backgroundColor = "#00FFFF";


// alert("Hey");

let totalPrice = 0;
let items = []

function reset() {
  totalPrice = 0;
  //TODO: Clear the list of order items;
  updateBill();
}

function orderDosa() {
totalPrice = totalPrice + 1;
items.push("Dosa");
updateBill();
}

function orderRice() {
totalPrice = totalPrice + 1.2;
items.push("Rice");
updateBill();
}

function orderCurry() {
totalPrice = totalPrice + 1.5;
items.push("curry");
updateBill();
}

function orderBread() {
totalPrice = totalPrice + 0.75;
items.push("Bread");
updateBill();
}

function OrderDrink() {
totalPrice = totalPrice + 1.10;
items.push("cold Drink");
updateBill();

} 
function updateBill(){
  
    let price_element = document.getElementById('amount')
    let parent_ul = document.getElementById('item_list')
    parent_ul.innerText = "";
    


    for(let i = 0; i < items.length; i  += 1){ 
    let new_li = document.createElement('li');
    new_li.innerText = items[i];
    parent_ul.appendChild(new_li);

    
}
price_element.innerText = totalPrice;
}