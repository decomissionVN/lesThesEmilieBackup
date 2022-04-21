eventListenerFunction()
is_logged_in();

function is_logged_in() {
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    if (token && userId) {
        fetch('https://api.lesthesdemilie.net/api/auth/verifAuth', { method: "POST", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access } }).then(response => response.json()).then(response => display_button_correct(response))
            .catch(function (error) {
                alert('TOKEN ERROR ' + error.message)
            })
    } else {
        document.getElementById("button_contact_login").innerHTML = `
                    <a href="#" onclick="Login_Menu()" id="Login_contact" alt="Contact your personal tailor" class="button" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-duration="1600">Login to contact your personal tailor</a>
                `;
    }
}

function display_button_correct(response) {

    if (response.message == 'Token is valid') {
        console.log(response + 'OK');
        document.getElementById("button_contact_login").innerHTML = `
                    <a href="../DASHBOARD/Contact.html" id="Login_contact" alt="Contact your personal tailor" class="button" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-duration="1600">Contact my personal tailor</a>
                `;
    }
}

function eventListenerFunction() {
    document.getElementById("contact_whatsapp-link").addEventListener('click', displayWhattsapp);
    document.getElementById("contact_messenger-link").addEventListener('click', displayMessenger);
    document.getElementById("contact_email-link").addEventListener('click', displayEmail);
    document.getElementById("contact_phone-link").addEventListener('click', displayPhone);
}

function displayWhattsapp() {
    event.preventDefault();

    let contentWhattsapp = `
        <div class="color_radial_w pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
            <h2>You wish to contact your tailor via Whattsapp</h2>
            <p>Your personnal tailor being located in france, it might be a good idea to use whattsapp to contact him.</p>
            <p>You can already add your tailors in your contact list (+336 49 34 96 11)</p>
            <p class="mb-5">Or directly</p>
            <a href="https://api.whatsapp.com/send?phone=33649349611" target="_blank" alt="contact my tailor on whattsapp" class="button mt-4">Contact my tailor on whattsapp</a>
       </div>`

    document.getElementById("message_contact_form").innerHTML = contentWhattsapp;
}

function displayMessenger() {
    event.preventDefault();

    let contentMessenger = `
        <div class="color_radial_w pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
            <h2>You wish to contact your tailor via Messenger</h2>
            <p>Another great way to contact your personal tailor from abroad!</p>
            <p>Send him a message via our facebook page, and you will hear from s very soon!</p>
            <p class="mb-5">Or directly</p>
            <a href="https://www.facebook.com" target="_blank" alt="contact my tailor on messenger" class="button mt-4">Contact my tailor by messenger</a>
       </div>`

    document.getElementById("message_contact_form").innerHTML = contentMessenger;
}

function displayEmail() {
    event.preventDefault();

    let contentEmail = `
        <div class="color_radial_w pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
            <h2>You wish to contact your tailor via Email</h2>
            <p>If you prefer using Email to discuss with your tailor, you are at the good place!</p>
            <p>We will forward your Email to your personal tailor and he will answer you within the next hours!</p>
            <p class="mb-5">Our Email : contact@troisfils.com</p>
            <a href="mailto:contact@troisfils.com" target="_blank" alt="contact my tailor on messenger" class="button mt-4">Contact my tailor by Email</a>
       </div>`

    document.getElementById("message_contact_form").innerHTML = contentEmail;
}

function displayPhone() {
    event.preventDefault();

    let contentPhone = `
        <div class="color_radial_w pt-5 pb-5" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1900">
            <h2>You wish to contact your tailor via Email</h2>
            <p>If you are located in france and prefer to use the phone to discuss with your tailor, you are at the good place!it's also possile!</p>
            <p>From France : 06 49 34 96 11</p>
            <p>From abroad : +336 49 34 96 11</p>
        </div>`

    document.getElementById("message_contact_form").innerHTML = contentPhone;
}
