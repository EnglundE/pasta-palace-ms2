

$('a[href^="#menu"]').click(function () {
    let findPage = document.getElementById("menu-section");
    findPage.scrollIntoView();
});




$("#main-button").click(function () {
    const main = document.getElementById("main-button");
    main.classList.remove("btn-light");
    main.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
<li><b>Saltimbocca</b><i class="fas fa-euro-sign">14</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
    Chicken Breast topped with Parma Ham, Mushrooms and White Wine Sauce
</li>
<li><b>Panchetta</b><i class="fas fa-euro-sign">17</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
    Roasted Pork Belly with Roasted Beetroot, Lentils and Apple Sauce
</li>
<li><b>Paccheri</b><i class="fas fa-euro-sign">15</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
    Large, Flat Pasta Tubes with Rabbit Ragû
</li>
<li><b>Merluzzo</b><i class="fas fa-euro-sign">19</i>
<button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
    Cod Fillet Wrapped in Parma Ham on a Bed of Mild Salsa
</li>
</ol>`
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
                            <br>
        Buttery Nutella Filled Dough, Topped with Strawberries
    </li>
    <li><b>Warm Salted Caramel Apple</b><i class="fas fa-euro-sign">4</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
        Warm Strudel Served With Vanilla Ice Cream
    </li>
    <li><b>Nutella Donuts</b><i class="fas fa-euro-sign">8</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
        Four Donuts Filled With Nutella
    </li>
    <li><b>Key Lime Pie</b><i class="fas fa-euro-sign">9</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
        Our Famous homemade Key Lime Pie
    </li>
    <li><b>Cheesecake</b><i class="fas fa-euro-sign">7</i>
    <button type="button" class="btn-secondary">-</button> <span>0</span>
                            <button type="button" class="btn-secondary">+</button>
                            <br>
        Rich and heavenly
    </li>
</ol>`
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
</ol>`
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
        <br>
        Avocado, Cucumber Sorbet, Mango & Pane Carasau
    </li>
    <li><b>Scallop Gratin</b><i class="fas fa-euro-sign">4</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        <br>
        Carrot, Ginger & Smoked Mackerel
    </li>
    <li><b>Spicy Willy</b><i class="fas fa-euro-sign">8</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        <br>
        Spicy Sausages Grilled And Served with Mint Mayo
    </li>
    <li><b>Cheesy Willy's</b><i class="fas fa-euro-sign">9</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        <br>
        Sausages Stuffed With Cheese & Onion
    </li>
    <li><b>Loli...pop</b><i class="fas fa-euro-sign">7</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        <br>
        Chicken Lollipops Marinated in Asian Spices
    </li>
    <li><b>Schrimp Chips</b><i class="fas fa-euro-sign">5</i>
        <button type="button" class="btn-secondary">-</button> <span>0</span>
        <button type="button" class="btn-secondary">+</button>
        <br>
        large Basked of Scrimp Chips
    </li>
</ol>`
    const main = document.getElementById("main-button");
    main.classList.remove("btn-success");
    const drinks = document.getElementById("drinks-button");
    drinks.classList.remove("btn-success");
    const dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-success");

});