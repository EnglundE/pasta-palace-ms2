// function sendMail() {
//     emailjs.send("service_m3l5pe2", "template_0alxi1v", {
//         "from_name": contactForm.name.value,
//         "from_email": contactForm.email.value,
//         "message": contactForm.message.value
//     })
//         .then(
//             function (response) {
//                 console.log("SUCCESS", response.status, response.text);
//             },
//             function (error) {
//                 console.log("FAILED", error);
//             }
//         );

// };


window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_m3l5pe2', 'template_0alxi1v', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}







