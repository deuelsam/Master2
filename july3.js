// console.log(typeof document);

// let about_me = {
//     "first_name" : "Aaysh",
//     "Last_name": "Sinha",
//     "Country": "India"
// }

// console.log(about_me)


// console.log(about_me["Last_name"]) // dont do this //

// console.log(about_me.Last_name);
// let key = "first_name"
// console.log(about_me[key]); //posible
// console.log(about_me.key)// wont work as .key means it is converted into a string.

// about_me.role = "Educator";
// console.log(about_me);

// let partcipants =['aayush']
// partcipants [1] = "Pawan";
// partcipants.push("Ismael")
// console.log(partcipants)

// console.log(document.body);

//  let session_information = {};

// session_information.date = "Jul - 03,2022";
// session_information.participant_count=5;
// session_information.is_live = true;
// session_information.particaipants = ["Sam","Ahmed", "Ismael","Pawan"]
 
// console.log(session_information)

// session_information.hello = function(){
//     console.log("hello from the session")
// }
// session_information.hello()

// console.log(document.body)

// let doc_keys = Object.keys(session_information);
// console.log(doc_keys)


// let button_2 = document.getElementById("some_btn");
// console.log(button_2);
// button_2.innerText = "Updated button 2";
// button_2.style.backgroundColor = "#00FFFF"
 
// let some_elements = document.getElementsByClassName("text");
// console.log(some_elements)

// let all_buttons = document.getElementsByTagName("button");
// console.log(all_buttons);

// document.getElementsByName() 
// useful for forms



// function check_password() {
//     let pass_inputs = document.getElementsByName("password");
//     // console.log(pass_inputs[0]);
//     let pass = pass_inputs[0].value;
//     console.log(pass);
// }

// let count = 0;
// function buttonClicked(secret_code,e){
//     count = count + 1;
//     console.log(secret_code);
//     console.log("Button clicked");
//     console.log(e);
//     let btn = e.target;
    // btn.innerText = "clicked " +  count +  " times";
    // btn.innerText= "Clicked"
    // btn.remove()
//  btn.style.backgroundColor = "black"
//     if ( btn.style.backgroundColor == "black"){
//         btn.style.backgroundColor = "white";
        
//     } else  {
//        btn.style.backgroundColor = "black";
//     }
// }

// function form_submitted(e) {
// e.preventDefault();  // prevents from execution of default fuctionality
//     console.log(e);
// }

// let count = 0
// function Like(e){
//     count = count +1 
//     // console.log(e);
    
//   text1.innerText = count 
// }

// function Unlike(e){
//     count = count -1
//     // console.log(e);
    
//     text1.innerText = count 
// }

// function Calculate_sum() {
//     let number1 = document.getElementById('ip1').value;
//     let number2 = document.getElementById('ip2').value;
  
//     number1=parseInt(number1)
//     number2=parseInt(number2)
//     let sum = number1+number2;
//     document.getElementById('op').innerText=sum;
//     console.log(number1)
//     console.log(number2)
// }

 
// document.getElementById('btn1').onclick = function() {
//     console.log("Button Clicked");
// }

// let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click', function(){
//     console.log("Button clicked")
// })

let count = 1
let id = setInterval(function(){
    count= count+1
    text1.innerText= count;
},1000);

// let id = setInterval(function(){
//     console.log("Function Called")
//     console.log('Wait a second')
// },1000);
// console.log(id)

let btn2=document.getElementById('stop');
btn2.addEventListener('click',function(){
    clearInterval(id);
})

