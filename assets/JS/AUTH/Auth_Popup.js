//FUNCTION TO CHECK IF THE USER IS LOGGED IN


User_is_logged();

function User_is_logged() {
    let queryParams = new URLSearchParams(window.location.search);
    let _model = queryParams.get('model');
    let token = JSON.parse(window.localStorage.getItem('token'));

    if (token === null && _model === null) {
        console.log('user not logged_in at model step')
        document.getElementById('Popup__background').style.display = 'block';
    } else {
        document.getElementById('Popup__background').style.display = 'none';
        console.log('no login need');
    }
}

//FUNCTION LOGIN CONTENT

function Login_content() {
    let form_login = `<p>Welcome to your account portail</p>
                       <form method="post" id="contact" autocomplete="on">
                            <label for="Email">Email</label>
                            <input type="text" name="Email" id="Email" placeholder="Email" required>
                            <div id="Email_warn">Enter your Email adress</div>
                            <div id="Email_warn_notfound">No account was created with this Email</div>
                            
                            <label for="Password">nom</label>
                            <input type="text" name="Password" id="Password" placeholder="Password" required>
                            <div id="Password_warn">Please enter your password</div>
                            <div id="Password_warn_nomatch">The Password is incorrect</div>
                        
                            <div class="mt-5">
                                <a href="#" class="button" id="submitorder" onclick="Login()">Login</a>
                            </div>
                    </form>`;

    document.getElementById('Auth__Form').innerHTML = form_login;
}

//FUNCTION SIGNUP CONTENT

function Signup_content() {
    let form_signup = `<p>Create your profile!</p>
                       <form method="post" id="contact" autocomplete="on">
                            <label for="Name">Name</label>
                            <input type="text" name="Name" id="Name" placeholder="Name Surname" required>
                            <div id="Name_warn">Please let us know your name!</div>

                            <label for="Email">Email</label>
                            <input type="text" name="Email" id="Email" placeholder="Email" required>
                            <div id="Email_warn">Enter your Email adress</div>
                            <div id="Email_warn_unique">This Email is already used!</div>
                            
                            <label for="Password">nom</label>
                            <input type="text" name="Password" id="Password" placeholder="Password" required>
                            <div id="Password_warn">Please choose a password</div>

                            <label for="CGU">General conditions of Use</label>
                            <p class="m-0"><input type="checkbox" name="CGU" id="CGU" placeholder="CGU" required>I read and accept the <a id="CGU_link" href="https://decomissionvn.github.io/lesThesEmilieBackup/CGU/Cgu.html" alt="CGU Trois-Fils">CGU<a/></p>
                            <div id="CGU_warn">Please agree with our CGU</div>

                            <div class="mt-5">
                                <a href="#" class="button" id="submitorder" onclick="Signup()">Signup</a>
                            </div>
                    </form>`;

    document.getElementById('Auth__Form').innerHTML = form_signup;

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
        Clear_Style_Signup_Form();
        fetch('https://api.troisfils.com/api/auth/signup', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(user) }).then(response => response.json()).then(response => user_saved_signup(response))
            .catch(function (error) {
                alert('Please try again - ' + error.message)
            })
    } else {
        Clear_Style_Signup_Form();
        document.getElementById('CGU_warn').style.display = 'block';
    }
}

function Clear_Style_Signup_Form() {
    document.getElementById('Name_warn').style.display = 'none';
    document.getElementById('Email_warn').style.display = 'none';
    document.getElementById('Password_warn').style.display = 'none';
    document.getElementById('Email_warn_unique').style.display = 'none';
    document.getElementById('CGU_warn').style.display = 'none';
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
            alert('ERROR: ' + error.message)
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
        console.log('undefined response')
        let token = {
            token_access: response.token
        }
        let userId = {
            userId: response.userId
        }

        window.localStorage.setItem('token', JSON.stringify(token));
        window.localStorage.setItem('userId', JSON.stringify(userId));
        document.getElementById('Popup__background').style.display = 'none';
        window.setTimeout(window.location.reload(), 5000);

        document.getElementById('Welcome_Dashboard').style.display = 'block';

        

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



