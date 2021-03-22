// Scroll to nav function


$('a[href^="#menu"]').click(function () {
    let findPage = document.getElementById("menu-section");
    findPage.scrollIntoView();
});
$('a[href^="#gallery"]').click(function () {
    let findPage = document.getElementById("gallery-section");
    findPage.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});

$('a[href^="#bookatable"]').click(function () {
    let findPage = document.getElementById("book-section");
    findPage.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
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


// Menu Section

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
                            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Panchetta</span>
                        <div class="shop-item-details">
                            <p>Roasted Pork Belly with Roasted Beetroot, Lentils and Apple Sauce</p>
                            <span class="shop-item-price">£17</span>
                            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Paccheri</span>
                        <div class="shop-item-details">
                            <p>Large, Flat Pasta Tubes with Rabbit Ragû</p>
                            <span class="shop-item-price">£15</span>
                            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Merluzzo</span>
                        <div class="shop-item-details">
                        <p>Cod Fillet Wrapped in Parma Ham on a Bed of Mild Salsa</p>
                            <span class="shop-item-price">£19</span>
                            <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
                        </div>
                    </div>
                    `
    ready();
});






// Credit to Web Dev Simplified for below shopping functions: https://www.youtube.com/watch?v=YeFzkC2awTM&ab_channel=WebDevSimplified
// add item to cart

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('£', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '£' + total
}



// Add Item to Cart //
// Menu Section //



// Gallery section

// Credit to freeCodeCamp for gallery section slideshow: https://www.youtube.com/watch?v=3PHXvlpOkf4&ab_channel=freeCodeCamp.org
// https://github.com/john-smilga/javascript-basic-projects/tree/master/15-slider

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




