// class HelloWorld {
//     consoleHello() {
//         console.log("hello World")
//     }
//     alertHello() {
//         alert("Hello World")
//     }
// }

// const hello_obj = new HelloWorld();
// console.log(hello_obj);

// hello_obj.consoleHello();
// hello_obj.alertHello()

// const another_hello = new HelloWorld();
// another_hello.consoleHello()
// consoleHello()


// class Human {
//     constructor(name) {
//         this.name = name
//     }
//     sayhello() {
//         console.log("Hello my name is " + this.name)
//     }

// }

// const name1 = new Human("deuel")
// name1.sayhello()

// const obj = {
//     k: "Value",
//     k2: "Value 2",
//     fn: function () {
//         console.log(this);
//     }
// }

// obj.fn()

// class Human {
//     constructor(person_name, birth_year) {
//         this.my_name = person_name;
//         this.year_of_birth = birth_year;
//     }

//     sayHello() {
//         const age = 2022 - this.year_of_birth;
//         console.log(`Hi, iam  ${this.my_name} and i am ${age} years old`);

//     }

//     consoleMyself() {
//         console.log(this);

//     }
// }
// const me = new Human("Deuel", 1990);
// me.sayHello();
// console.log(me)
// me.consoleMyself()




// const num = 24;
// num.__proto__.isEven = function(){
//    if(this % 2 == 0){
//     return true;
//    }else {
//     return false;
//    }
// } 
// console.log(num.isEven());


// const another_num = 40;
// console.log(another_num.isEven());


// const arr = [1, 2, 3, 4];
// // const input = 5
// arr.__proto__.numin = function (input) {
//     for (let i = 0; i < this.length;i = i + 1) {
//         if (input == this[i]) {
//             return true
//         }
//     }
//     return false
// }
// console.log(arr.numin(4))
