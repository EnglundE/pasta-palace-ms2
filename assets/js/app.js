

$("#main-button").click(function menu() {
    let main = document.getElementById("main-button");
    main.classList.remove("btn-light");
    main.classList.add("btn-success");
    document.getElementById("menu-cat").innerHTML = `<ol id="main-courses">
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
