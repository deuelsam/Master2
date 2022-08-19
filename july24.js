// class Human {
//     constructor(person_name, birth_year) {
//         this.my_name = person_name;
//         this.year_of_birth = birth_year;
//     }



//     sayHello() {
//         const age = 2022 - this.year_of_birth;
//         console.log(`Hi, iam  ${this.my_name} and i am ${this.#getage()} years old`);

//     }
//     #getage() {
//         return 2022 - this.year_of_birth;
//     // }
//     // consoleMyself() {
//     //     console.log(this);

//     }
// }
// class Students extends Human {
//     constructor(name, birth_year, batch) {
//         super(name, birth_year)
//         this.my_batch = batch;
//     }
//     attendsession() {
//         console.log(`i will attent session for ${this.my_batch}`)

//         class educator extends Human{
//             sayHello(){
//                 console.log("Hi, I am an educator");
//             }
//         }
//     }

// }


// const me = new Human("Aayush", 1990);
// me.sayHello();
// console.log(me.#getAge());
// console.log(me);
// const me = new Students("Deuel",1990,"fsdi-09");
// me.sayHello()
// me.attendsession()
// me.educator()

// const fetch_promise = fetch("https://reqres.in/api/users");
// fetch_promise.then(response => {
//     console.log(response);
//     const json_promise = response.json();
//     json_promise.then(json_data => {
//         console.log(json_data)
//         display(json_data)
//     })
// });


// const display = data => {
//     const parent = document.getElementById("user_list");
//     for (let i = 0; i < data.data.length; i = i + 1) {
//         const single_data = data.data[i];
//         const email = single_data.email;
//         const first_name = single_data.first_name;
//         const last_name = single_data.last_name;
//         const new_li = document.createElement("li");
//         new_li.innerText = first_name +" " + last_name + " " + "(" + email +")" 
//         parent.appendChild(new_li)
       

//     }
// };

const fetch_promise =  fetch("https://reqres.in/api/users");
fetch_promise.then((response) => {
    // console.log(response);
const json_promise = response.json();
json_promise.then(json_data=> {
    display(json_data);
    console.log(json_data);
})
});
 

const display = data => {
    const parent = document.getElementById("user_list")
    for (let i = 0; i < data.data.length; i = i+1){
        const single_data = data.data[i]
        console.log(single_data);
        const email = single_data.email;
        const new_li = document.createElement("li");
        new_li.innerText = email;
       
       const first_name = single_data.first_name;
const last_name = single_data.last_name;

new_li.innerText = first_name +" " + last_name + " " + "(" + email +")" 
        parent.appendChild(new_li)
        
    }
    
}


// const fetch_promise =  fetch("https://fakestoreapi.com/products");
// fetch_promise.then((response)=> {
//     const json_promise = response.json();
//     console.log(json_promise)
//     json_promise.then(json_data=> {
//         console.log(json_data);
//         display(json_data)
//     })
// })


// const display = data => { 
//     const parent = document.getElementById("user_list")
//     for (let i = 0; i < data.length; i = i+1) {
//         const single_data = data[i]
//         console.log(single_data);
//         const title = single_data.title;
//         const price = single_data.price
//         const image = single_data.image
      


//         const img = new Image(100,100); 
//         img.src = image
//        parent.appendChild(img);

//         const new_li = document.createElement("li");
//         new_li.innerText = title + "   "+ price ; 
//         parent.appendChild(new_li);

   
//     }
// }


// const fetch_promise = fetch("https://jsonplaceholder.typicode.com/photos")
// fetch_promise.then((response) => {
//     const json_promise = response.json()
//     json_promise.then(json_data=> {
//            display(json_data)
// })
// })

// const display = data => { 
//     const parent = document.getElementById("user_list")
//     for (let i = 0; i < data.length; i = i+1) {
//         const single_data = data[i]
//         console.log(single_data);
//         const image =  single_data.thumbnailUrl
//        const image2 = single_data.url

//         const img = new Image(100,100); 
//         img.src = single_data.thumbnailUrl
//         img.src = single_data.url
//        parent.appendChild(img);





//     }}