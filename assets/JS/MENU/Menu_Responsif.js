set_preferred_language();

function set_preferred_language(){
    let language = localStorage.getItem("language");
    if (!language){
        var userLang = navigator.language || navigator.userLanguage;
        let language_preferred = userLang.split('-');
        let language = language_preferred[0];
        save_preferred_language(language);
    }
}

function save_preferred_language(language){
    window.localStorage.setItem('language', language);
    window.location.reload();
}

function User_logged(translation) {
    let token = JSON.parse(window.localStorage.getItem('token'));
    if (token === null || token === {}) {
        console.log('Signedout');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        Add_Menu_responsif(translation);
    } else {
        console.log('loggedin');
        Add_Menu_responsif_logged(translation);
    }
    Display_cookies();
}

function Display_cookies() {
    let arecceptedCookies = window.localStorage.getItem('acceptedCookies');
    console.log(arecceptedCookies);
    if (!arecceptedCookies) {
        let language = localStorage.getItem("language");
        Display_cookies_translated(language);
    } else {
        document.getElementById('popup_cookies').style.display = "none";
    }
}

function Display_cookies_translated(language) {
    if (language === 'fr'){
        let content = `
        <p class="pr-5">Les cookies sont utilisés pour votre confort à des fins de statistiques</p>
        <div class="row w-100 text-center">
        <div class="col-12 mt-4">
            <a href="#" onclick="acceptCookies()" class="button mt-4">J'accepte</a>
        </div>
        <div class="col-12 mb-4 mt-4">
            <a href="https://decommissionvn.github.io/lesThesEmilieBackup/CGU/CGU.html" class="button mt-4">Nos CGUs</a>
        </div>
        </div>`

        document.getElementById('CookiesMessage').innerHTML = content;
    } else if (language === 'en'){
        `<p class="pr-5">The cookies are used for statistics purposes</p>
        <div class="row w-100 text-center">
        <div class="col-12 mt-4">
            <a href="#" onclick="acceptCookies()" class="button mt-4">I accept</a>
        </div>
        <div class="col-12 mt-4 mb-4">
            <a href="https://decommissionvn.github.io/lesThesEmilieBackup/CGU/CGU.html" class="button mt-4">Privacy Policy</a>
        </div>
        </div>`

        document.getElementById('CookiesMessage').innerHTML = content;
    }
}

function acceptCookies() {

    
    event.preventDefault();
    window.localStorage.setItem('acceptedCookies', 'yes');
    document.getElementById('popup_cookies').style.display = "none";
}

function Close_Popup_cookies() {
    document.getElementById('popup_cookies').style.display = "none";
    event.preventDefault();
    window.localStorage.setItem('acceptedCookies', 'no');
    document.getElementById('popup_cookies').style.display = "none";
}

//NOT LOGGED IN !!!!

function Add_Menu_responsif(translation) {
    let menu_responsif = `
<div id="popup_cookies">
    <a href="#" onclick="Close_Popup_cookies()"><img class="close_icon" src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
    <div id="CookiesMessage">
    </div>
</div>

<!--Popup Login / Signup or Later -->
    <div class="Popup__background" id="Popup__background" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
<div class="Popup__background_dark" id="Popup__background_dark" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000"></div>
        <div id="Popup__Auth" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
        <a href="#" onclick="Close_Popup()"><img class="close_icon" src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
            <div class="row">
                <div class="col-sm-8 offset-sm-2">
                <div id="Explications_general"></div>
                    <div class="d-flex justify-content-around pt-5 pb-1 Menu_Auth">

                        <a href="#Popup__Auth" onclick="Login_content()" id="Popup__Login"><b>${translation.Login}</b></a>

                        <h3>|</h3>

                        <a href="#Popup__Auth" onclick="Signup_content()" id="Popup__Signup">${translation.Signup}</a>

                    </div>
                    <div id="Auth__Form" class="pb-5 pt-4">
                        <h2>Login</h2>
                        <p>${translation.Welcome_Login}</p>
                        <form method="post" id="contact" autocomplete="on">
                            <label for="Email">${translation.Email}</label>
                            <input type="text" name="Email" id="Email" placeholder="Email" required>

                            <label for="Password">${translation.Password}</label>
                            <input type="text" name="Password" id="Password" placeholder="Password" required>

                            <div class="mt-5">
                                <a href="#" class="button" id="submitorder" onclick="Login()">${translation.Login}</a>
                            </div>
                            <div class="mt-5" id="submitorder_div">
                                <a href="#" class="button" id="submitorder" onclick="Close_Popup()">${translation.Continue_without}</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


<!-- The languages are diplayed in the top -->
<header class="d-block justify-content-between d-lg-none hover__background row" id="menu__top-pages">
    <!-- Button to drop the languages-->

    <!-- The menu appears in the Desktop view-->
    <div class="menu d-block col-12 d-lg-none">
        <div class="d-flex d-lg-none justify-content-around hover__background" id="header__language-background">
            <a href="#" onclick="choose_language('en')" class="header__language-choice" id="header__english">English</a><div>|</div>
            <a href="#" onclick="choose_language('fr')" class="header__language-choice" id="header__french">Français</a>
        </div>

        <div class="d-flex justify-content-between d-lg-none wrapp__large hover__background">

            <!-- Button to drop the main menu -->
            <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/menu.png"/>
            </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="https://lesthesdemilie.com">${translation.Home}</a>
                    <a class="dropdown-item" href="https://lesthesdemilie.com/About/Benefits.html">${translation.Our_tea}</a>
                    <a class="dropdown-item" href="https://lesthesdemilie.com/About/History.html">${translation.history}</a>
                    <a class="dropdown-item" href="https://lesthesdemilie.com/About/Preparation.html">${translation.preparation}</a>
                    <a class="dropdown-item" href="https://lesthesdemilie.com/About/Selection.html">${translation.selection}</a>
                </div>
            </div>
        </div>
    </div>
</header>





    <!-- HEADER AND LANGUAGES FOR DESKTOP VIEW -->
    <header class="d-none justify-content-between d-lg-flex hover__background row" id="menu__top-pages">
        <!-- Button to drop the languages-->

        <!-- The menu appears in the Desktop view-->
        <div class="menu d-none col-12 d-lg-flex">
            <div class="btn-group mr-4">
                <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/language.png"/>
                </button>
                    <div class="dropdown-menu dropdown-menu-right header__language-choice">
                    <ul>
                        <li><a href="#" onclick="choose_language('en')" id="header__english">English</a></li>
                        <li><a href="#" onclick="choose_language('fr')" id="header__french">Français</a></li>
                    </ul>
                    </div>
            </div>

            <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Logo.png" id="Logo_home"/>
            <div class="menu"><a class="dropdown-item" href="https://lesthesdemilie.com">${translation.Home}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://lesthesdemilie.com/About/Benefits.html">${translation.Our_tea}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://lesthesdemilie.com/About/History.html">${translation.history}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://lesthesdemilie.com/About/Preparation.html">${translation.preparation}</a></div>
            <div class="menu"><a class="dropdown-item" href="https://lesthesdemilie.com/About/Selection.html">${translation.selection}</a></div>
        </div>
        
    </header>
    <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Header_bottom.png" id="Header_separator">`

    document.getElementById('Menu_top_general_responsive').innerHTML = menu_responsif;
        
}





function Add_Menu_responsif_logged(translation) {
    let menu_responsif = `
<div id="popup_cookies">
    <a href="#" onclick="Close_Popup_cookies()"><img class="close_icon" src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
    <div id="CookiesMessage">
    </div>
</div>

<!--Popup Explications -->
    <div class="Popup__background" id="Popup__background" data-aos="fade" data-aos-easing="ease-in" data-aos-duration="1000">
        <div id="Popup__Auth" class="text-center" data-aos="fade-down" data-aos-easing="ease-out" data-aos-duration="1400" data-aos-delay="700">
        <a href="#" onclick="Close_Popup()"><img class="close_icon" src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/Close_black.png" alt="Close"/></a>
            <div class="row">
                <div class="col-sm-8 offset-sm-2" id="Explications_general">
                    
                </div>
            </div>


        </div>
    </div>


<!-- The languages are diplayed in the top -->
<header class="d-block justify-content-between d-lg-none hover__background row" id="menu__top-pages">
    <!-- Button to drop the languages-->

    <!-- The menu appears in the Desktop view-->
    <div class="menu d-block col-12 d-lg-none">
        <div class="d-flex d-lg-none justify-content-around hover__background" id="header__language-background">
            <a href="#" onclick="choose_language('en')" class="header__language-choice" id="header__english">English</a><div>|</div>
            <a href="#" onclick="choose_language('fr')" class="header__language-choice" id="header__french">Français</a>
        </div>

        <div class="d-flex justify-content-between d-lg-none wrapp__large hover__background">

            <!-- Button to drop the main menu -->
            <div class="btn-group">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/menu.png"/>
            </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/HOME/index.html">${translation.Home}</a>
                    <a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/HOME/About.html">${translation.Our_tea}</a>
                    <a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/LADIES/Ladies.html">${translation.Accessoires}</a>
                    <a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/GENTLEMENS/Gentlemens.html">${translation.Souvenirs}</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/HOME/Contact.html">${translation.Contact_us}</a>
                </div>
            </div>

            <!-- Button to sign-in or sign out -->
            <div class="btn-group">
                <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/profile.png"/>
                </button>
                <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item Signout_Menu" onclick="Signout_Menu()" id="Signout_Menu_Mobile" href="#">${translation.Signout}</a>
                </div>
            </div>
        </div>
</header>
<img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Header_bottom.png" id="Header_separator">
<div class="menu_Dashboard"><a href="https://decommissionvn.github.io/lesThesEmilieBackup/DASHBOARD/Dashboard.html">${translation.Dashboard}</a></div>



    <!-- HEADER AND LANGUAGES FOR DESKTOP VIEW -->
    <header class="d-none justify-content-between d-lg-flex hover__background row" id="menu__top-pages">
    <!-- Button to drop the languages-->

    <!-- The menu appears in the Desktop view-->
    <div class="menu d-none col-12 d-lg-flex">
        <div class="btn-group mr-4">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/language.png"/>
            </button>
                <div class="dropdown-menu dropdown-menu-right header__language-choice">
                <ul>
                    <li><a href="#" onclick="choose_language('en')" id="header__english">English</a></li>
                    <li><a href="#" onclick="choose_language('fr')" id="header__french">Français</a></li>
                </ul>
                </div>
        </div>

        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Logo.png" id="Logo_home"/>
        <div class="menu"><a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/Home/index.html">${translation.Home}</a></div>
        <div class="menu"><a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/Products/Our_tea.html">${translation.Our_tea}</a></div>
        <div class="menu"><a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/Products/Our_accessoires.html">${translation.Accessoires}</a></div>
        <div class="menu"><a class="dropdown-item" href="https://decommissionvn.github.io/lesThesEmilieBackup/Products/Souvenirs.html">${translation.Souvenirs}</a></div>

        <!-- Button to sign-in or sign out -->
        <div class="btn-group mr-4">
            <button type="button" class="btn btn-secondary dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/profile.png" id="profile_icon"/>
            </button>
            <div id="header__identification-button" class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item Signout_Menu" onclick="Signout_Menu()" id="Signout_Menu_Desktop" href="#">${translation.Signout}</a>
            </div>
        </div>
    </div>
    
    </header>
<img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Header_bottom.png" id="Header_separator">
<div class="menu_Dashboard"><a href="https://decommissionvn.github.io/lesThesEmilieBackup/DASHBOARD/Dashboard.html">${translation.Dashboard}</a></div>`

    document.getElementById('Menu_top_general_responsive').innerHTML = menu_responsif;
}

function choose_language(language){
    event.preventDefault();
    console.log(language);
    window.localStorage.setItem('language', language);
    window.location.reload();
}