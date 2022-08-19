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
        const id = single_data.id;

        const avatar = single_data.avatar;
        
        const img = new Image(100,100); 
        img.src = avatar;
        parent.appendChild(img);

      
       const first_name = single_data.first_name;
const last_name = single_data.last_name;

new_li.innerText =id +  first_name +" " + last_name + " " + "(" + email +")" 
        parent.appendChild(new_li)
        
        
        
    }
    
}