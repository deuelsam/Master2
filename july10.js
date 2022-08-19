// let btn1 = document.getElementById('btn1');
// let fn1 = function(){
//     console.log("button 1 clicked");
// }
// let fn2 = function(){
//     console.log("Button 1 is clicked, I am second tracker");
// }

// btn1.addEventListener('click',fn1);
// btn1.addEventListener('click',fn2);


// btn1.removeEventListener('click',fn1)



// const button = document.getElementById("btn1");
// button.addEventListener('click',function(){
//  console.log("Button Clicked");
// })
// button.addEventListener('click', ()=> {
//     alert("Button clicked uding arrow function")
// })


// // Regular function
// function() {
//     console.log("Button Clicked");
// }

// // Arrow function
// () => {
//     console.log("Button Clicked")
// }


const sum = (a,b)=> {

    const result = a+b
    return result
}
console.log(sum(2,10));