quantity = document.querySelector('#quantity');
color = document.querySelector('#color');
price = document.querySelector('#price');
amount_p = document.querySelector('#amount-p span');
quantity_p = document.querySelector('#quantity-p span');
circle_c = document.querySelector('#circle-color');
let productPrice = 240000;
price.innerHTML = new Intl.NumberFormat({ style: "currency"}).format(productPrice);

function total(){                   
    let total = Number(quantity.value) * productPrice;
    amount_p.innerHTML = new Intl.NumberFormat({ style: "currency"}).format(total);
    quantity_p.innerHTML = quantity.value;
    circle_c.style.backgroundColor = color.value;
}

