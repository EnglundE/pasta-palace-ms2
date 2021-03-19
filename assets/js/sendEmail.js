


window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_m3l5pe2', 'template_0alxi1v', this)
            .then(function () {

            }, function (error) {
                console.log('FAILED...', error);
            });
        document.getElementById("contactForm").reset();
    });

}



function alertDisplay(text) {
    let alert = document.getElementsByClassName("alert");
    alert.textContent = text;
    alert.classList.add(`alert`);

    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert`);
    }, 1000);
}



