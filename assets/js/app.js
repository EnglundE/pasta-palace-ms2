// Scroll to nav function

$('a[href^="#menu"]').click(function () {
    let findPage = document.getElementById("menu-section");
    findPage.scrollIntoView();
});
$('a[href^="#gallery"]').click(function () {
    let findPage = document.getElementById("gallery-section");
    findPage.scrollIntoView();
});

// Scroll to nav function //


// Nav icon on smaller screens collapse when clicking a link

// credit to Marta Szymanska at Mdbootstrap for hamburger collapse code: https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});
// Nav icon on smaller screens collapse when clicking a link //


// menu choice section

$("#main-button").click(function () {
    const main = document.getElementById("main-button");
    main.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
<li><b>Saltimbocca</b><i class="fas fa-euro-sign">14</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
    <p>Chicken Breast topped with Parma Ham, Mushrooms and White Wine Sauce</p>
</li>
<li><b>Panchetta</b><i class="fas fa-euro-sign">17</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
    <p>Roasted Pork Belly with Roasted Beetroot, Lentils and Apple Sauce</p>
</li>
<li><b>Paccheri</b><i class="fas fa-euro-sign">15</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
    <p>Large, Flat Pasta Tubes with Rabbit Ragû</p>
</li>
<li><b>Merluzzo</b><i class="fas fa-euro-sign">19</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
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
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
        <p>Buttery Nutella Filled Dough, Topped with Strawberries</p>
    </li>
    <li><b>Warm Salted Caramel Apple</b><i class="fas fa-euro-sign">4</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
        <p>Warm Strudel Served With Vanilla Ice Cream</p>
    </li>
    <li><b>Nutella Donuts</b><i class="fas fa-euro-sign">8</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
        <p>Four Donuts Filled With Nutella</p>
    </li>
    <li><b>Key Lime Pie</b><i class="fas fa-euro-sign">9</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
        <p>Our Famous homemade Key Lime Pie</p>
    </li>
    <li><b>Cheesecake</b><i class="fas fa-euro-sign">7</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            
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
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
    </li>
    <li><b>Pepsi 33cl</b><i class="fas fa-euro-sign">1</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
    </li>
    <li><b>Fanta 33cl</b><i class="fas fa-euro-sign">1</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
    </li>
    <li><b>Coca Cola Zero 33cl</b><i class="fas fa-euro-sign">1</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
    </li>
    <li><b>Pepsi Max 33cl</b><i class="fas fa-euro-sign">1</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
    </li>
    <li><b>Coca Cola 1.5L</b><i class="fas fa-euro-sign">2.5</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
    </li>
    <li><b>Pepsi Max 1.5L</b><i class="fas fa-euro-sign">2.5</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
    </li>
    <li><b>Fanta 1.5L</b><i class="fas fa-euro-sign">2.5</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
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
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        
        <p>Avocado, Cucumber Sorbet, Mango & Pane Carasau</p>
    </li>
    <li><b>Scallop Gratin</b><i class="fas fa-euro-sign">4</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        
        <p>Carrot, Ginger & Smoked Mackerel</p>
    </li>
    <li><b>Spicy Willy</b><i class="fas fa-euro-sign">8</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        
        <p>Spicy Sausages Grilled And Served with Mint Mayo</p>
    </li>
    <li><b>Cheesy Willy's</b><i class="fas fa-euro-sign">9</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        
        <p>Sausages Stuffed With Cheese & Onion</p>
    </li>
    <li><b>Loli...pop</b><i class="fas fa-euro-sign">7</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        
        <p>Chicken Lollipops Marinated in Asian Spices</p>
    </li>
    <li><b>Schrimp Chips</b><i class="fas fa-euro-sign">5</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        
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


// menu choice section //

