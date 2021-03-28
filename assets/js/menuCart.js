// Menu Section
// Browsing between Starters, Main Courses, Dessert and Drinks
$("#main-button").click(function () {
    document.getElementById("main-button").classList.add("btn-success");
    const starters = document.getElementById("starters-button");
    starters.classList.remove("btn-success");
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    document.getElementById("shop-thing").innerHTML = `
    <div class="shop-item">
        <span class="shop-item-title">Saltimbocca</span>
        <div class="shop-item-details">
            <p>Chicken Breast topped with Parma Ham, Mushrooms and White Wine Sauce</p>
            <span class="shop-item-price">£14</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Panchetta</span>
        <div class="shop-item-details">
            <p>Roasted Pork Belly with Roasted Beetroot, Lentils and Apple Sauce</p>
            <span class="shop-item-price">£17</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Paccheri</span>
        <div class="shop-item-details">
            <p>Large, Flat Pasta Tubes with Rabbit Ragû, servied with white wine saus</p>
            <span class="shop-item-price">£15</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Merluzzo</span>
        <div class="shop-item-details">
            <p>Cod Fillet Wrapped in Parma Ham on a Bed of Mild Salsa</p>
            <span class="shop-item-price">£19</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>`;
    ready();
});

$("#dessert-button").click(function () {
    document.getElementById("dessert-button").classList.add("btn-success");
    const starters = document.getElementById("starters-button");
    starters.classList.remove("btn-success");
    const main = document.getElementById("main-button");
    main.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    document.getElementById("shop-thing").innerHTML = `
    <div class="shop-item">
        <span class="shop-item-title">Nutella Bella</span>
        <div class="shop-item-details">
            <p>Buttery Nutella Filled Dough, Topped with Strawberries</p>
            <span class="shop-item-price">£5</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Warm Salted Caramel Apple</span>
        <div class="shop-item-details">
            <p>Warm Strudel Served With Vanilla Ice Cream</p>
            <span class="shop-item-price">£4</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Nutella Donuts</span>
        <div class="shop-item-details">
            <p>Four Donuts Filled With warm Hazelnut Nutella</p>
            <span class="shop-item-price">£8</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Key Lime Pie</span>
        <div class="shop-item-details">
            <p>Our Famous homemade Key Lime Pie</p>
            <span class="shop-item-price">£9</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Cheesecake</span>
        <div class="shop-item-details">
            <p>Rich and heavenly</p>
            <span class="shop-item-price">£7</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Choclate Cake</span>
        <div class="shop-item-details">
            <p>Served with wipped cream and berries</p>
            <span class="shop-item-price">£8</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>`;
    ready();
});

$("#drinks-button").click(function () {
    document.getElementById("drinks-button").classList.add("btn-success");
    const starters = document.getElementById("starters-button");
    starters.classList.remove("btn-success");
    const main = document.getElementById("main-button");
    main.classList.remove("btn-success");
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-success");
    document.getElementById("shop-thing").innerHTML = `
    <div class="shop-item">
        <span class="shop-item-title">Coca Cola 33cl</span>
        <div class="shop-item-details">                
            <span class="shop-item-price">£1</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Pepsi 33cl</span>
        <div class="shop-item-details">                    
            <span class="shop-item-price">£1</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Fanta 33cl</span>
        <div class="shop-item-details">                   
            <span class="shop-item-price">£1</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Coca Cola Zero 33cl</span>
        <div class="shop-item-details">                
            <span class="shop-item-price">£1</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Pepsi Max</span>
        <div class="shop-item-details">               
            <span class="shop-item-price">£1</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Coca Cola 1.5L</span>
        <div class="shop-item-details">               
            <span class="shop-item-price">£2</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Coca Cola Zero 1.5L</span>
        <div class="shop-item-details">               
            <span class="shop-item-price">£2</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Pepsi Max 1.5L</span>
        <div class="shop-item-details">           
            <span class="shop-item-price">£2</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Fanta 1.5L</span>
        <div class="shop-item-details">                
            <span class="shop-item-price">£2</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>`;
    ready();
});

$("#starters-button").click(function () {
    document.getElementById("starters-button").classList.add("btn-success");
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-success");
    const main = document.getElementById("main-button");
    main.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    document.getElementById("shop-thing").innerHTML = `
    <div class="shop-item">
        <span class="shop-item-title">Tuna Tartare</span>
        <div class="shop-item-details">
            <p>Avocado, Cucumber Sorbet, Mango & Pane Carasau</p>
            <span class="shop-item-price">£5</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Scallop Gratin</span>
        <div class="shop-item-details">
            <p>Carrot, Ginger & Smoked Mackerel... Yummmy</p>
            <span class="shop-item-price">£4</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Spicy Willy</span>
        <div class="shop-item-details">
            <p>Spicy Sausages Grilled And Served with Mint Mayo</p>
            <span class="shop-item-price">£8</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Cheesy Willy's</span>
        <div class="shop-item-details">
            <p>Sausages Stuffed With Cheese & Onion served with toppings</p>
            <span class="shop-item-price">£9</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Loli...pop</span>
        <div class="shop-item-details">
            <p>Chicken Lollipops Marinated in Asian Spices</p>
            <span class="shop-item-price">£7</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>
    <div class="shop-item">
        <span class="shop-item-title">Schrimp Chips</span>
        <div class="shop-item-details">
            <p>A large Basked of Scrimp Chips for up to four people</p>
            <span class="shop-item-price">£5</span>
            <button class="btn btn-primary shop-item-button" type="button">Add to cart</button>
        </div>
    </div>`;
    ready();
});
// Menu Section //
// Browsing between Starters, Main Courses, Dessert and Drinks //

// Credit to Web Dev Simplified for below shopping functions: https://www.youtube.com/watch?v=YeFzkC2awTM&ab_channel=WebDevSimplified
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked() {
    document.getElementById("myPurchase").style.display = "block";
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

$(".close").click(function () {
    document.getElementById("myPurchase").style.display = "none";
});

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    addItemToCart(title, price);
    updateCartTotal();
}

function addItemToCart(title, price) {
    let cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            document.getElementById("cart-msg").classList.add("errorMsg-cart");
            document.getElementById("cart-msg").innerHTML = "This item is already added to the cart";
            setTimeout(function () {
                document.getElementById("cart-msg").classList.remove("errorMsg-cart");
                document.getElementById("cart-msg").innerHTML = "";
            }, 2500);
            return;
        }
    }
    let cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" id="removeBtn" type="button">Remove</button>
        </div>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText.replace('£', ''));
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total;
}
