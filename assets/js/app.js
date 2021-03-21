// Scroll to nav function

$('a[href^="#menu"]').click(function () {
    let findPage = document.getElementById("menu-section");
    findPage.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
$('a[href^="#gallery"]').click(function () {
    let findPage = document.getElementById("gallery-section");
    findPage.scrollIntoView();
});

$('a[href^="#bookatable"]').click(function () {
    let findPage = document.getElementById("book-section");
    findPage.scrollIntoView();
});

$('a[href^="#contact"]').click(function () {
    let findPage = document.getElementById("contact-section");
    findPage.scrollIntoView();
});

// Scroll to nav function //


// Nav icon on smaller screens collapse when clicking a link
// credit to Marta Szymanska at Mdbootstrap for hamburger collapse code: https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});
// Nav icon on smaller screens collapse when clicking a link //


// menu choice section replacing innerhtml

$("#main-button").click(function () {
    const main = document.getElementById("main-button");
    main.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
<li><b>Saltimbocca</b><i class="fas fa-euro-sign">14</i>
<button type="button" class="btn-secondary">Add to cart</button>                     
    <p>Chicken Breast topped with Parma Ham, Mushrooms and White Wine Sauce</p>
</li>
<li><b>Panchetta</b><i class="fas fa-euro-sign">17</i>
<button type="button" class="btn-secondary">Add to cart</button>                    
    <p>Roasted Pork Belly with Roasted Beetroot, Lentils and Apple Sauce</p>
</li>
<li><b>Paccheri</b><i class="fas fa-euro-sign">15</i>
<button type="button" class="btn-secondary">Add to cart</button>                   
    <p>Large, Flat Pasta Tubes with Rabbit Ragû</p>
</li>
<li><b>Merluzzo</b><i class="fas fa-euro-sign">19</i>
<button type="button" class="btn-secondary">Add to cart</button>                   
    <p>Cod Fillet Wrapped in Parma Ham on a Bed of Mild Salsa</p>
</li>
</ol>`;
    const starters = document.getElementById("starters-button");
    starters.classList.remove("btn-success");
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
});

$("#dessert-button").click(function () {
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-light");
    dessert.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
    <li><b>Nutella Bella</b><i class="fas fa-euro-sign">5</i>
    <button type="button" class="btn-secondary">Add to cart</button>             
        <p>Buttery Nutella Filled Dough, Topped with Strawberries</p>
    </li>
    <li><b>Warm Salted Caramel Apple</b><i class="fas fa-euro-sign">4</i>
    <button type="button" class="btn-secondary">Add to cart</button>               
        <p>Warm Strudel Served With Vanilla Ice Cream</p>
    </li>
    <li><b>Nutella Donuts</b><i class="fas fa-euro-sign">8</i>
    <button type="button" class="btn-secondary">Add to cart</button>                    
        <p>Four Donuts Filled With Nutella</p>
    </li>
    <li><b>Key Lime Pie</b><i class="fas fa-euro-sign">9</i>
    <button type="button" class="btn-secondary">Add to cart</button>                    
        <p>Our Famous homemade Key Lime Pie</p>
    </li>
    <li><b>Cheesecake</b><i class="fas fa-euro-sign">7</i>
    <button type="button" class="btn-secondary">Add to cart</button>              
        <p>Rich and heavenly</p>
    </li>
</ol>`;
    const main = document.getElementById("main-button");
    main.classList.remove("btn-success");
    const starters = document.getElementById("starters-button");
    starters.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");

});

$("#drinks-button").click(function () {
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-light");
    drinks.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
    <li><b>Coca Cola 33cl</b><i class="fas fa-euro-sign">1</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
    <li><b>Pepsi 33cl</b><i class="fas fa-euro-sign">1</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
    <li><b>Fanta 33cl</b><i class="fas fa-euro-sign">1</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
    <li><b>Coca Cola Zero 33cl</b><i class="fas fa-euro-sign">1</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
    <li><b>Pepsi Max 33cl</b><i class="fas fa-euro-sign">1</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
    <li><b>Coca Cola 1.5L</b><i class="fas fa-euro-sign">2.5</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
    <li><b>Pepsi Max 1.5L</b><i class="fas fa-euro-sign">2.5</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
    <li><b>Fanta 1.5L</b><i class="fas fa-euro-sign">2.5</i>
    <button type="button" class="btn-secondary">Add to cart</button>
    </li>
</ol>`;
    const main = document.getElementById("main-button");
    main.classList.remove("btn-success");
    const starters = document.getElementById("starters-button");
    starters.classList.remove("btn-success");
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-success");
});

$("#starters-button").click(function () {
    const starters = document.getElementById("starters-button");
    starters.classList.remove("btn-light");
    starters.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
    <li><b>Tuna Tartare</b><i class="fas fa-euro-sign">5</i>
        <button type="button" class="btn-secondary">Add to cart</button>
        <p>Avocado, Cucumber Sorbet, Mango & Pane Carasau</p>
    </li>
    <li><b>Scallop Gratin</b><i class="fas fa-euro-sign">4</i>
        <button type="button" class="btn-secondary">Add to cart</button>
        <p>Carrot, Ginger & Smoked Mackerel</p>
    </li>
    <li><b>Spicy Willy</b><i class="fas fa-euro-sign">8</i>
        <button type="button" class="btn-secondary">Add to cart</button>
        <p>Spicy Sausages Grilled And Served with Mint Mayo</p>
    </li>
    <li><b>Cheesy Willy's</b><i class="fas fa-euro-sign">9</i>
        <button type="button" class="btn-secondary">Add to cart</button>
        <p>Sausages Stuffed With Cheese & Onion</p>
    </li>
    <li><b>Loli...pop</b><i class="fas fa-euro-sign">7</i>
        <button type="button" class="btn-secondary">Add to cart</button>
        <p>Chicken Lollipops Marinated in Asian Spices</p>
    </li>
    <li><b>Schrimp Chips</b><i class="fas fa-euro-sign">5</i>
        <button type="button" class="btn-secondary">Add to cart</button>
        <p>large Basked of Scrimp Chips</p>
    </li>
</ol>`;
    const main = document.getElementById("main-button");
    main.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-success");

});


// menu choice section replacing innerHTML //

// add item to cart and local storage
// Credit to Telmo Sampaio: https://www.youtube.com/watch?v=B20Getj_Zk4&ab_channel=TelmoSampaio 
// https://www.youtube.com/watch?v=PoTGs38DR9E&ab_channel=TelmoSampaio 
// https://www.youtube.com/watch?v=tEAl7L62GEw&ab_channel=TelmoSampaio 
// https://www.youtube.com/watch?v=QNXQfdgIXLw&ab_channel=TelmoSampaio
// https://www.youtube.com/watch?v=IY5UN82FZ2Q&ab_channel=TelmoSampaio 

let products = [
    {
        name: "Tuna Tartare",
        price: 5,
        inCart: 0
    },
    {
        name: "Scallop Gratin",
        price: 4,
        inCart: 0
    },
    {
        name: "Spicy Willy",
        price: 8,
        inCart: 0
    },
    {
        name: "Cheesy Willy's",
        price: 9,
        inCart: 0
    },
    {
        name: "Loli...pop",
        price: 7,
        inCart: 0
    },
    {
        name: "Schrimp Chips",
        price: 5,
        inCart: 0
    },
    {
        name: "Saltimbocca",
        price: 14,
        inCart: 0
    },
    {
        name: "Panchetta",
        price: 17,
        inCart: 0
    },
    {
        name: "Paccheri",
        price: 15,
        inCart: 0
    },
    {
        name: "Merluzzo",
        price: 19,
        inCart: 0
    },
    {
        name: "Nutella Bella",
        price: 5,
        inCart: 0
    },
    {
        name: "Warm Salted Caramel Apple",
        price: 4,
        inCart: 0
    },
    {
        name: "Nutella Donuts",
        price: 8,
        inCart: 0
    },
    {
        name: "Key Lime Pie",
        price: 9,
        inCart: 0
    },
    {
        name: "Cheesecake",
        price: 7,
        inCart: 0
    },
    {
        name: "Coca Cola 33cl",
        price: 1,
        inCart: 0
    },
    {
        name: "Pepsi 33cl",
        price: 1,
        inCart: 0
    },
    {
        name: "Fanta 33cl",
        price: 1,
        inCart: 0
    },
    {
        name: "Coca Cola Zero 33cl",
        price: 1,
        inCart: 0
    },
    {
        name: "Pepsi Max 33cl",
        price: 1,
        inCart: 0
    },
    {
        name: "Coca Coal 1.5L",
        price: 2.5,
        inCart: 0
    },
    {
        name: "Pepsi Max 1.5L",
        price: 2.5,
        inCart: 0
    },
    {
        name: "Fanta 1.5L",
        price: 2.5,
        inCart: 0
    },
];

let carts = document.querySelectorAll(".btn-secondary");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function () {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function loadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    if (productNumbers) {
        document.querySelector(".cart span").textContent = productNumbers;
    }
}



function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector(".cart span").textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }
    setItems(product);
}


function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            };
        }
        cartItems[product.name].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        };
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {

    let cartCost = localStorage.getItem("totalCost");

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    if (cartItems && productContainer) {
        productContainer.innerHTML = "";
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class="product">
        <i class="fas fa-times-circle"></i>
        <span>${item.name}</span>
    <div class="price">£${item.price},00
    </div>
    <div class="quantity">
        <i class="fas fa-minus-circle"></i>
        <span>${item.inCart}</span>
        <i class="fas fa-plus-circle"></i>
    </div>
    <div class="total">
       <span>£${item.inCart * item.price},00</span>
    </div>
    </div>`

        });
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Basket Total
        </h4>
        <h4 class="basketTotal">
        £${cartCost},00
        </h4>
        </div>
        `
    }
}


// Gallery section
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {
    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

prevBtn.style.display = "none";
// Gallery section //



// Book a table section

// Book a table section //




