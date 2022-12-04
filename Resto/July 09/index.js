// let count = 0
// function buttonClicked(secret_code, e) {
//     count = count + 1;
//     console.log(secret_code);
//     console.log("button Clicked");
//     console.log(e);
//     let btn = e.target;
//     // btn.innerText = "Clicked"
//     // btn.innerText = "Clicked" + count + "times";
//     // btn.remove();
//     btn.style.backgroundColor ="black"


// }

// function Changecolor(e) {
//     let btn = e.target;
//     if (btn.style.backgroundColor =="black"){
//         btn.style.backgroundColor ="white";
//     }
//     else {
//         btn.style.backgroundColor ="black";
//     }
// }

// let count = 0
// function like(e) {
// count = count + 1;
// let x = document.getElementById("text1");
// x.innerText = count
// }

// function Unlike(e){
//     count = count - 1;
//     let y = document.getElementById("text1");
//  y.innerText = count;
//     }


function calculate_sum(){
   let number1 = document.getElementById('ip1').value;
   let number2 = document.getElementById('ip2').value;

   number1 = Number(number1);
   number2 = Number(number2);

   let sum = number1+number2;
   document.getElementById('op').innerText = sum;
}

// let btn1= document.getElementById('btn1');
// btn1.onclick= function(){
//   console.log("Button Clicked") 
// }

// let btn1= document.getElementById('btn1');
// btn1.addEventListener('click', function() { 
//    console.log("Button Clicked") 
// })
// let count = 0

// setInterval(function () {
//    count = count + 1
//    let x = document.getElementById("text2")
//    x.innerText = count
// }, 1236);
