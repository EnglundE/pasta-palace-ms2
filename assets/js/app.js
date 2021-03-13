
$("#main-button").click(function () {
    let main = document.getElementById("main-button");
    main.classList.remove("btn-light");
    main.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
<li><b>Saltimbocca</b><i class="fas fa-euro-sign">14</i>
    <i class="fas fa-cart-plus"></i><br>
    Chicken Breast topped with Parma Ham, Mushrooms and White Wine Sauce
</li>
<li><b>Panchetta</b><i class="fas fa-euro-sign">17</i>
    <i class="fas fa-cart-plus"></i><br>
    Roasted Pork Belly with Roasted Beetroot, Lentils and Apple Sauce
</li>
<li><b>Paccheri</b><i class="fas fa-euro-sign">15</i>
    <i class="fas fa-cart-plus"></i><br>
    Large, Flat Pasta Tubes with Rabbit Ragû
</li>
<li><b>Merluzzo</b><i class="fas fa-euro-sign">19</i>
    <i class="fas fa-cart-plus"></i><br>
    Cod Fillet Wrapped in Parma Ham on a Bed of Mild Salsa
</li>
</ol>`
    let starters = document.getElementById("starters-button");
    starters.classList.remove("btn-success")
});

$("#dessert-button").click(function () {
    let dessert = document.getElementById("dessert-button");
    dessert.classList.remove("btn-light");
    dessert.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol class="menu-list">
    <li><b>Nutella Bella</b><i class="fas fa-euro-sign">5</i>
        <i class="fas fa-cart-plus"></i><br>
        Buttery Nutella Filled Dough, Topped with Strawberries
    </li>
    <li><b>Warm Salted Caramel Apple Tart</b><i class="fas fa-euro-sign">4</i>
        <i class="fas fa-cart-plus"></i><br>
        Warm Strudel Served With Vanilla Ice Cream
    </li>
    <li><b>Nutella Donuts</b><i class="fas fa-euro-sign">8</i>
        <i class="fas fa-cart-plus"></i><br>
        Four Donuts Filled With Nutella
    </li>
    <li><b>Key Lime Pie</b><i class="fas fa-euro-sign">9</i>
        <i class="fas fa-cart-plus"></i><br>
        Our Famous homemade Key Lime Pie
    </li>
    <li><b>Cheesecake</b><i class="fas fa-euro-sign">7</i>
        <i class="fas fa-cart-plus"></i><br>
        Rich and heavenly
    </li>
</ol>`
    let successbutton = document.getElementById("main-button")
    successbutton.classList.remove("btn-success")
});