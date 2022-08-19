
const button= document.getElementById("btn1")
button.addEventListener('click',_=> {
  const btn2 =  document.getElementById("btn2");
  btn2.innerText="hello world"
})


const fn = () => {
    return"Hello world"
}
console.log(fn());