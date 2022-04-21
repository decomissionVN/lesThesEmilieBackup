//FUNCTION TO CHECK IF THE USER IS LOGGED IN


User_is_logged();

function User_is_logged() {
    let queryParams = new URLSearchParams(window.location.search);
    let _model = queryParams.get('model');
    let token = JSON.parse(window.localStorage.getItem('token'));

    if (token === null && _model === null) {
        console.log('user not logged_in at model step')
        document.getElementById('Popup__background').style.display = 'block';
        document.getElementById('Explications_general').innerHTML = '<h2>Welcome to your simulator!</h2>';
    } else {
        document.getElementById('Popup__background').style.display = 'none';
        console.log('no login need');
    }
}

//FUNCTION LOGIN CONTENT

function Login_content() {
    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation = { Welcome_Login : "Bienvenue sur votre espace tailleur", Signup : "Inscription", Password_Wrong : "Mot de passe incorrect", Password_Empty : "Veuillez renseigner un mot de passe", Login : "Connexion", Email : "Email", Warn_Email_Empty : "Veuillez renseigner votre Email", Warn_W_Email : "Aucun compte ne correspond à cette adresse", Password : "Mot de Passe" 
        }
        Login_content_translated(translation)
    } else {
        let translation = { Welcome_Login : "Welcome to your tailoring account", Signup : "Signup", Password_Wrong : "The password is incorrect", Password_Empty : "Please enter a password", Login : "Login", Email : "Email", Warn_Email_Empty : "Please enter your Email", Warn_W_Email : "No account was created with this Email", Password : "Password" 
        }
        Login_content_translated(translation)
    }

    function Login_content_translated(translation){
        let form_login = `<p>${translation.Welcome_Login}</p>
                        <form method="post" id="contact" autocomplete="on">
                                <label for="Email">${translation.Email}</label>
                                <input type="text" name="Email" id="Email" placeholder="${translation.Email}" required>
                                <div id="Email_warn">${translation.Warn_Email_Empty}</div>
                                <div id="Email_warn_notfound">${translation.Warn_W_Email}</div>
                                
                                <label for="Password">${translation.Password}</label>
                                <input type="text" name="Password" id="Password" placeholder="${translation.Password}" required>
                                <div id="Password_warn">${translation.Password_Empty}</div>
                                <div id="Password_warn_nomatch">${translation.Password_Wrong}</div>
                            
                                <div class="mt-5">
                                    <a href="#" class="button" id="submitorder" onclick="Login()">${translation.Login}</a>
                                </div>
                        </form>`;

        document.getElementById('Auth__Form').innerHTML = form_login;
        document.getElementById('Popup__Login').innerHTML = `<b>${translation.Login}</b>`
        document.getElementById('Popup__Signup').innerHTML = `${translation.Signup}`
    }
}

//FUNCTION SIGNUP CONTENT

function Signup_content() {
    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation = { Warn_Email_Valid : "Cet Email n'est pas valide", Password_Strong : "Pour votre sécurité, le mot de passe doit contenir 6 à 20 caractères dont un nombre, une majuscule et une minuscule", Signup : "Inscription", Agree_CGU : "Veuillez accepter les CGU", Read : "J'ai lu et j'accepte les ", CGU_Small : "CGU", CGU : "Conditions générales d'utilisation", Name_Warn : "Veuillez renseigner votre nom", Name : "Votre nom", Welcome_Signup : "Créez votre espace tailleur", Password_Empty : "Veuillez renseigner un mot de passe", Login : "Connexion", Email : "Email", Warn_Email_Empty : "Veuillez renseigner votre Email", Warn_W_Email : "Aucun compte ne correspond à cette adresse", Password : "Mot de Passe" 
        }
        Signup_content_translated(translation)
    } else {
        let translation = { Warn_Email_Valid : "This Email is not valid", Password_Strong : "For your security, your password must be 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter", Signup : "Signup", Agree_CGU : "Please agree with the CGU", Read : "I read and accept the ", CGU_Small : "CGU", CGU : "General Conditions of Use", Name_Warn : "Please let us know your name", Name : "Your name", Welcome_Signup : "Create your tailoring account",Password_Empty : "Please choose a password", Login : "Login", Email : "Email", Warn_Email_Empty : "Please enter your Email", Warn_Email_Used : "This Email is already used for another account", Password : "Password" 
        }
        Signup_content_translated(translation)
    }

    function Signup_content_translated(translation){

    let form_signup = `<p>${translation.Welcome_Signup}</p>
                       <form method="post" id="contact" autocomplete="on">
                            <label for="Name">${translation.Name}</label>
                            <input type="text" name="Name" id="Name" placeholder="${translation.Name}" required>
                            <div id="Name_warn">${translation.Name_Warn}</div>

                            <label for="Email">${translation.Email}</label>
                            <input type="text" name="Email" id="Email" placeholder="${translation.Email}" required>
                            <div id="Email_warn">${translation.Warn_Email_Empty}</div>
                            <div id="Email_warn_unique">${translation.Warn_Email_Used}</div>
                            <div id="Email_warn_Valid">${translation.Warn_Email_Valid}</div>
                            
                            <label for="Password">${translation.Password}</label>
                            <input type="text" name="Password" id="Password" placeholder="${translation.Password}" required>
                            <div id="Password_warn">${translation.Password_Empty}</div>
                            <div id="Password_warn_strong">${translation.Password_Strong}</div>


                            <label for="CGU">${translation.CGU}</label>
                            <p class="m-0"><input type="checkbox" name="CGU" id="CGU" placeholder="CGU" required>${translation.Read}<a id="CGU_link" href="https://decommissionvn.github.io/lesThesEmilieBackup/CGU/Cgu.html" alt="CGU Trois-Fils">${translation.CGU_Small}<a/></p>
                            <div id="CGU_warn">${translation.Agree_CGU}</div>

                            <div class="mt-5">
                                <a href="#" class="button" id="submitorder" onclick="Signup()">${translation.Signup}</a>
                            </div>
                    </form>`;

    document.getElementById('Auth__Form').innerHTML = form_signup;
    document.getElementById('Popup__Signup').innerHTML = `<b>${translation.Signup}</b>`
    document.getElementById('Popup__Login').innerHTML = `${translation.Login}`
    }
}

//FUNCTION TO CLOSE THE POPUP

function Close_Popup() {
    event.preventDefault();
    document.getElementById('Popup__background').style.display = 'none';
}

//FUNCTION TO DISPLAY THE POPUP WHEN CLICKING ON LOGIN

function Login_Menu() {
    document.getElementById('Popup__background').style.display = 'block';
    Login_content();
    }

//FUNCTION TO DISPLAY THE POPUP WHEN CLICKING ON SIGNUP

function Signup_Menu() {
    document.getElementById('Popup__background').style.display = 'block';
    Signup_content();
    }

//FUNCTION SIGNOUT

function Signout_Menu() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    console.log('Token removed');
    window.location.reload();
}


//FUNCTION SAVE NEW USER IN THE DATABASE




function Signup() {
    event.preventDefault();
    var inputOrder = document.getElementsByTagName("input");
    
    var user = {
        name: inputOrder[0].value,
        email: inputOrder[1].value,
        password: inputOrder[2].value,
        adress : "...",
    }
    console.log(user);

    if (user.name === "") {
        Clear_Style_Signup_Form();
        document.getElementById('Name_warn').style.display = 'block';
    } else if (user.email === "") {
        Clear_Style_Signup_Form();
        document.getElementById('Email_warn').style.display = 'block';
    } else if (user.password === "") {
        Clear_Style_Signup_Form();
        document.getElementById('Password_warn').style.display = 'block';
    } else if (document.getElementById('CGU').checked) {
        ValidateEmail(user);
    } else {
        Clear_Style_Signup_Form();
        document.getElementById('CGU_warn').style.display = 'block';
    }
}

function ValidateEmail(user) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.email)) {
    verify_stength_password(user)
  } else {
    Clear_Style_Signup_Form();
    document.getElementById('Email_warn_Valid').style.display = 'block';
  }   
}

function verify_stength_password(user) {
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(user.password.match(passw)) { 
        Clear_Style_Signup_Form();
        fetch('https://api.troisfils.com/api/auth/signup', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(user) }).then(response => response.json()).then(response => user_saved_signup(response))
            .catch(function (error) {
                alert('Please try again - ' + error.message)
            })
    } else {
        Clear_Style_Signup_Form();
        document.getElementById('Password_warn_strong').style.display = 'block';
    }
}

function Clear_Style_Signup_Form() {
    document.getElementById('Name_warn').style.display = 'none';
    document.getElementById('Email_warn').style.display = 'none';
    document.getElementById('Password_warn').style.display = 'none';
    document.getElementById('Email_warn_unique').style.display = 'none';
    document.getElementById('CGU_warn').style.display = 'none';
    document.getElementById('Password_warn_strong').style.display = 'none';
    document.getElementById('Email_warn_Valid').style.display = 'none';
}

function user_saved_signup(response) {

    console.log(response);

    if (response.error === undefined) {

        let token = {
            token_access: response.token
        }

        let userId = {
            userId: response.userId
        }

        Clear_Style_Signup_Form();
        window.localStorage.setItem('token', JSON.stringify(token));
        window.localStorage.setItem('userId', JSON.stringify(userId));
        document.getElementById('Popup__background').style.display = 'none';
        window.setTimeout(window.location.reload(), 5000);

    } else if (response.error.errors.email.kind !== null) {
        Clear_Style_Signup_Form();
        document.getElementById('Email_warn_unique').style.display = 'block';
    } else {
        alert('An error occured while you were signing up - Make sure to check your network connection and try again!')
    }
}


//LOGIN AN USER

function Login() {
    event.preventDefault();
    var inputOrder = document.getElementsByTagName("input");
    var user = {
        email: inputOrder[0].value,
        password: inputOrder[1].value,
    }
    console.log(user);

    if (user.email === "") {
        Clear_Style_Login_Form();
        document.getElementById('Email_warn').style.display = 'block';
    } else if (user.password === "") {
        Clear_Style_Login_Form();
        document.getElementById('Password_warn').style.display = 'block';
    } else {
    fetch('https://api.troisfils.com/api/auth/login', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(user) }).then(response => response.json()).then(response => user_saved_login(response))
        .catch(function (error) {
            console.log('ALERT: ' + error.message)
        })
    }
}

function Clear_Style_Login_Form() {
    document.getElementById('Email_warn').style.display = 'none';
    document.getElementById('Password_warn').style.display = 'none';
    document.getElementById('Email_warn_notfound').style.display = 'none';
    document.getElementById('Password_warn_nomatch').style.display = 'none';
}



function user_saved_login(response) {
    console.log(response);

    if (response.error === undefined) {
        let token = {
            token_access: response.token
        }
        let userId = {
            userId: response.userId
        }

        window.localStorage.setItem('token', JSON.stringify(token));
        window.localStorage.setItem('userId', JSON.stringify(userId));
        document.getElementById('Popup__background').style.display = 'none';
        
        let queryParams = new URLSearchParams(window.location.search);
        let _color = queryParams.get('color');
        console.log(_color);
        if (_color !== null) {
            let queryParams = new URLSearchParams(window.location.search);
            window.setTimeout(window.location.replace("https://decommissionvn.github.io/lesThesEmilieBackup/LADIES/Measures.html" + "?" + queryParams.toString()), 5000);
        }

        if (document.getElementById('Welcome_Dashboard') !== null) {
            document.getElementById('Welcome_Dashboard').style.display = 'block';
        }

        
        

    } else if (response.error === "Utilisateur non trouvé !") {
        Clear_Style_Login_Form();
        document.getElementById('Email_warn_notfound').style.display = 'block';
    } else if (response.error === "Mot de passe incorrect !") {
        Clear_Style_Login_Form();
        document.getElementById('Password_warn_nomatch').style.display = 'block';
    } else {
        alert('Something unexpected came up! Check your network connection and try again!')
    }
}



