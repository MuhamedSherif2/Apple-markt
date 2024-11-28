let cart = document.getElementById('listCart')
let openCart = document.getElementById('cart')
let closeCart = document.getElementById('close')
let boxs = document.getElementById('boxs')
let showCart = document.querySelector('.showCart')
let quantity = document.querySelector('.quantity')
let price = document.querySelector('.total')


openCart.addEventListener('click', () => {
    cart.classList.add('active')
})
closeCart.addEventListener('click', () => {
    cart.classList.remove('active')
})

let products = [
    {
        id: 1,
        image: "./img/11.png",
        name: "Iphone 11",
        price: 900
    },
    {
        id: 3,
        image: "./img/12.png",
        name: "Iphone 12",
        price: 950
    },
    {
        id: 4,
        image: "./img/12max.png",
        name: "Iphone 12 pro max",
        price: 1200
    },
    {
        id: 5,
        image: "./img/13.png",
        name: "Iphone 13",
        price: 1000
    },
    {
        id: 6,
        image: "./img/13max.png",
        name: "Iphone 13 pro max",
        price: 1300
    },
    {
        id: 7,
        image: "./img/14.png",
        name: "Iphone 14",
        price: 1050
    },
    {
        id: 8,
        image: "./img/14plus.png",
        name: "Iphone 14 plus",
        price: 1200
    },
    {
        id: 9,
        image: "./img/14pro.png",
        name: "Iphone 14 pro",
        price: 1350
    },
    {
        id: 10,
        image: "./img/14max.png",
        name: "Iphone 14 pro max",
        price: 1500
    },
    {
        id: 11,
        image: "./img/15.png",
        name: "Iphone 15",
        price: 1150
    },
    {
        id: 12,
        image: "./img/15plus.png",
        name: "Iphone 15 plus",
        price: 1250
    },
    {
        id: 13,
        image: "./img/15max.png",
        name: "Iphone 15 pro max",
        price: 1600
    },
]


let listCards = [];
if (localStorage.product != null) {
    listCards = JSON.parse(localStorage.product)
}
getProductLocal();
function getProductLocal() {
    localStorage.getItem("product");
    reloadCard();
}

function initApp() {
    products.forEach((value) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('box')
        newDiv.innerHTML = `
            <img src="${value.image}" class="img">
            <h3>${value.name}</h3>
            <h5>${value.price}</h5>
            <br>
            <button class="btn btn-primary" onclick="addToCart(${value.id})">Add to Cart</button>
        `;
        boxs.appendChild(newDiv);
    });
}
initApp();

function search(query) {
    let div = '';
    for (let i = 0; i < products.length; i++) {
        if (products[i].name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
            div += `
                <div class="box">
                    <img src="${products[i].image}" class="img">
                    <h3>${products[i].name}</h3>
                    <h5>${products[i].price}</h5>
                    <br>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
        `;
        }
    }
    if (div === '') {
        div = `<p>No products found</p>`;
    }
    document.getElementById('boxs').innerHTML = div;
}

function addToCart(id) {
    let product = products.find((a) => a.id === id)
    let productIndex = listCards.findIndex((a) => a.id === id)
    if (productIndex > -1) {
        listCards[productIndex].quantity += 1
    } else {
        listCards.push({ ...product, quantity: 1 })
    }
    reloadCard();
}

function reloadCard() {
    showCart.innerHTML = '';
    let totalPrice = 0;
    let count = 0;
    listCards.forEach((value) => {
        totalPrice += value.price * value.quantity;
        count += value.quantity
        let newList = document.createElement('div')
        newList.classList.add('cart-box')
        newList.innerHTML = `
            <img src="${value.image}">
            <h3>${value.name}</h3>
            <h5>${value.price}</h5>
            <div class="d-flex justify-content-center gap-3">
            <button onclick="changeQuantity(${value.id}, ${value.quantity + 1})" class="btn btn-primary">+</button>
            <div class="fs-3">${value.quantity}</div>
            <button onclick="changeQuantity(${value.id}, ${value.quantity - 1})" class="btn btn-danger">-</button>
            </div>
        `;
        showCart.appendChild(newList)
    })
    price.innerHTML = totalPrice + "EG";
    quantity.innerHTML = count;
    localStorage.setItem("product", JSON.stringify(listCards));
}
function changeQuantity(id, newQuantity) {
    let productIndex = listCards.findIndex((a) => a.id === id);
    if (newQuantity === 0) {
        listCards.slice(productIndex, 1);
    }
    else {
        listCards[productIndex].quantity = newQuantity;
    }
    reloadCard();
}



function sendMessage() {
    let params = {
        message: document.getElementById('message').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
    }
    emailjs.send("service_pnzuub9", "template_m8avtcf", params).then(alert("Message Sent!!"))
}