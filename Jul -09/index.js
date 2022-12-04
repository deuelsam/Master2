// let count = 0;

// function buttonClicked(secret_code, e) {
//     count = count + 1
//     console.log(secret_code)
//     console.log("Button Clicked")
//     console.log(e);

//     let btn = e.target;

//     e.innerText = "Clicked " + count + " times";
//     btn.remove()



// }

// function form_submitted(e) {

//     e.preventDefault();
//     console.log(e);
// }

// function calculate_sum() {
//     let number1 = document.getElementById('ip1').value;
//     let number2 = document.getElementById('ip2').value;

//     number1 = Number(number1);
//     number2 = Number(number2);

//     let sum = number1 + number2;

//     console.log(number1);
//     console.log(number2);
//     document.getElementById('op').innerText = sum
// }



// document.getElementById('btn1').onclick = function(){
//     console.log("Button Clicked");
// }

// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click',function(){
//     console.log("Button clicked")
// })

// btn1.addEventListener('click', () => {
//     console.log("Button Clicked by using arrow fuction")
// })

// Arrow Function + anonymous Function

// const sum = (a,b) => {
//     const result = a+b;
//     return result;
// }

// console.log(sum(10,15));


// const add10 = a => {
//    const result = a +10;
//    return result 
// }
// console.log(add10(10))


const sayHello = _ => {
    console.log("Hello World ")
}

sayHello()
