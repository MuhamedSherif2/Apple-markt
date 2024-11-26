let cart = document.getElementById('listCart')
let openCart = document.getElementById('cart')
let closeCart = document.getElementById('close')
let boxs = document.getElementById('boxs')


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

function initApp() {
    products.forEach((value) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('box')
        newDiv.innerHTML = `
            <img src="${value.image}" class="img">
            <h3>${value.name}</h3>
            <h5>${value.price}</h5>
            <br>
            <button class="btn btn-primary">Add to Cart</button>
        `;
        boxs.appendChild(newDiv);
    });
}
initApp();

function search(value){
    let div = '';
    for(let i = 0 ; i<products.length ; i++){
        if(products[i].name.includes(value)){
            div += `
            <img src="${value.image}" class="img">
            <h3>${value.name}</h3>
            <h5>${value.price}</h5>
            <br>
            <button class="btn btn-primary">Add to Cart</button>
        `;
        }
    }
    document.getElementById('boxs').innerHTML = div;
}