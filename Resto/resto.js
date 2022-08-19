// alert("hey");
let totalprice = 0;
let items = [];


function reset() {
    totalprice = 0;
    items = [];
    updateBill();
}


function orderDosa() {
    totalprice = totalprice + 1;
    items.push("Dosa")
    updateBill();
}

function orderRice() {
    totalprice += 1.2;
    items.push("Rice")
    updateBill();
}

function orderCurry() {
    totalprice += 1.5;
    items.push("curry")
    updateBill();

}

function orderBread() {
    totalprice += 0.75;
    items.push("Bread")
    updateBill();
}

function orderDrink() {
    totalprice += 1.10;
    items.push("Drinks")
    updateBill();

}

function updateBill() {
    let price_element = document.getElementById('amount');
    let parent_ul = document.getElementById('item_list');
    parent_ul.innerText = "";
    for (let i = 0; i < items.length; i += 1) {
        let new_li = document.createElement("li")
        new_li.innerText = items[i]
        parent_ul.appendChild(new_li);

    }

    price_element.innerText = totalprice;



    // document.getElementById('amount').innerText = totalprice;

}