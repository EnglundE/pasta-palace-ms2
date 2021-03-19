
window.onload = function emailJs() {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        let name = document.forms["myForm"]["name"].value;
        if (name == "") {
            document.getElementById("msg").classList.add("errorMsg");
            document.getElementById("msg").innerHTML = "Name cannot be empty";
            return false;
        }
        let email = document.forms["myForm"]["email"].value;
        if (email == "") {
            document.getElementById("msg").classList.add("errorMsg");
            document.getElementById("msg").innerHTML = "Email cannot be empty";
            return false;
        }
        let message = document.forms["myForm"]["message"].value;
        if (message == "") {
            document.getElementById("msg").classList.add("errorMsg");
            document.getElementById("msg").innerHTML = "Message cannot be empty";
            return false;
        }
        emailjs.sendForm('service_m3l5pe2', 'template_0alxi1v', this)
            .then(function () {
                document.getElementById("myContact").style.display = "block";
            }, function (error) {
                console.log('FAILED...', error);
            });
        document.getElementById("contactForm").reset();
    });

    $(".close").click(function () {
        document.getElementById("myContact").style.display = "none";
        document.getElementById("msg").classList.remove("errorMsg");
        document.getElementById("msg").innerHTML = "";
    });
}






