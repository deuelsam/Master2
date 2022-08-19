

const fetch_promise =  fetch("https://fakestoreapi.com/products");
fetch_promise.then((response)=> {
    const json_promise = response.json();
    console.log(json_promise)
    json_promise.then(json_data=> {
        console.log(json_data);
        display(json_data)
    })
})


const display = data => { 
    const parent = document.getElementById("user_list")
    for (let i = 0; i < data.length; i = i+1) {
        const single_data = data[i]
        console.log(single_data);
        const title = single_data.title;
        const price = single_data.price
        const image = single_data.image
        
        const img = new Image(100,100); 
        img.src = image
        parent.appendChild(img);

        const new_li = document.createElement("li");
        new_li.innerText = title + "   "+ price  ; 
        parent.appendChild(new_li);


    }
}