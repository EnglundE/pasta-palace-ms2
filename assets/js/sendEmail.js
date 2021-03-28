// Book a table form

window.onload = function () {
    document.getElementById('booking-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let date = document.forms["booking-form"]["trip-start"].value;
        if (date === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "date cannot be empty";
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }
        let name = document.forms["booking-form"]["name"].value;
        if (name === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Name cannot be empty";
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }
        let email = document.forms["booking-form"]["email"].value;
        if (email === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Email cannot be empty";
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }
        let phone = document.forms["booking-form"]["phone"].value;
        if (phone === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Phone Number cannot be empty";
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }
        let tableFor = document.forms["booking-form"]["tableFor"].value;
        if (tableFor === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Table for cannot be empty";
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }
        let time = document.forms["booking-form"]["time"].value;
        if (time === "") {
            document.getElementById("booking-msg").classList.add("errorMsg-booking");
            document.getElementById("booking-msg").innerHTML = "Time cannot be empty";
            setTimeout(function () {
                document.getElementById("booking-msg").classList.remove("errorMsg-booking");
                document.getElementById("booking-msg").innerHTML = "";
            }, 2500);
            return false;
        }
        emailjs.sendForm('service_ozpd38n', 'template_n6jlbls', this)
            .then(function () {
                document.getElementById("myPopUp").style.display = "block";
            }, function (error) {
                console.log('FAILED...', error);
            });
        document.getElementById("booking-form").reset();
    });

    $(".close").click(function () {
        document.getElementById("myPopUp").style.display = "none";
    });
};

// Book a table form //

// Contact form


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.forms["myForm"]["contact-name"].value;
    if (name == "") {
        document.getElementById("msg").classList.add("errorMsg");
        document.getElementById("msg").innerHTML = "Name cannot be empty";
        setTimeout(function () {
            document.getElementById("msg").classList.remove("errorMsg");
            document.getElementById("msg").innerHTML = "";
        }, 2500);
        return false;
    }
    let email = document.forms["myForm"]["contact-email"].value;
    if (email == "") {
        document.getElementById("msg").classList.add("errorMsg");
        document.getElementById("msg").innerHTML = "Email cannot be empty";
        setTimeout(function () {
            document.getElementById("msg").classList.remove("errorMsg");
            document.getElementById("msg").innerHTML = "";
        }, 2500);
        return false;
    }
    let message = document.forms["myForm"]["message"].value;
    if (message == "") {
        document.getElementById("msg").classList.add("errorMsg");
        document.getElementById("msg").innerHTML = "Message cannot be empty";
        setTimeout(function () {
            document.getElementById("msg").classList.remove("errorMsg");
            document.getElementById("msg").innerHTML = "";
        }, 2500);
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
});





// Contact form // 






