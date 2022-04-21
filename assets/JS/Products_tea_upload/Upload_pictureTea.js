filter_subcategories();

language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Our_tea : "Nos thés",
            Accessoires : "Le coins des accessoires",
            Souvenirs : "Un petit souvenir",
            Title_Page : "Les thés d'Emilie | Nos thés",
            More : "En savoir plus",
            Social_media : "Réseaux sociaux",
            Quick_links : "Liens Rapides",
            Navigate_easily : "Navigation",
            Homepage : "Accueil",
            About : "A propos",
            CGU : "Conditions d'utilisation",
            PPolicy : "Politique de confidentialité",
            Copyright : "Copyright 2020 - VN",
            Home : "Accueil",
            About : "A propos",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Contact_us : "Contact",
            Contact : "Contacter la boutique",
            Login : "Connexion",
            Signup : "Inscription",
            Dashboard : "Mon espace",
            Signout : "Déconnexion",
            Welcome_Login : "Bienvenue sur votre espace!",
            Email : "Email",
            Password : "Mot de passe",
            Continue_without : "Continuer sans session",
            About_footer : "La Boutique Les Thés d'Emilie est située entre les grands magasins, la gare Saint-Lazare et la place de la Madeleine. Spécialisée dans les thés d'exception, la boutique vous accueil du lundi de 15h à 19h, le mardi au samedi de 11h à 19h. Du 1er au 31 août, la boutique sera fermée le lundi et dimanche",
            download : "Téléchargez votre image: ",
            comment : "Un commentaire pour votre tailleur?",
            comment_label : "Votre commentaire",
            name_label : "Votre nom",
            email_label : "votre Email",
            submit_picture : "Enregistrer",
            boite : "Thés en boite",
            sachet : "Les thés en sachet",
            infusion : "Les infusions",
            vrac : "Les thés en vrac",
            selection_exception : "Notre sélection de thés d'exception",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        display_Admin_functions();
        display_all_products()
    } else {
        let translation = {
            Our_tea : "Our teas",
            Accessoires : "All our accessories",
            Souvenirs : "A little 'souvenir'",
            Title_Page : "Les thés d'Emilie | Our teas",
            More : "About TroisFils",
            Social_media : "Social media",
            Quick_links : "Quck links",
            Navigate_easily : "Navigate easily",
            Homepage : "TroisFils | Home",
            About : "Abous us",
            All_products : "Tailored pieces",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Wedding : "Wedding",
            Blog : "Blog",
            Appointments : "Appointments",
            Excellence : "Excellence & Tailoring",
            Around_globe : "International",
            CGU : "General Conditions of use",
            PPolicy : "Privacy Policy",
            Copyright : " | Copyright 2020 - VN",
            About_tailoring : "About Tailoring",
            How_to_take : "Some advices from your tailor",
            Measure : "measure test en",
            Home : "Home",
            About : "About us",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Contact_us : "Contact",
            Login : "Login",
            Signup : "Signup",
            Dashboard : "Dashboard",
            Signout : "Signout",
            Welcome_Login : "Welcome to your account portail",
            Email : "Email",
            Password : "Password",
            Contact : "Contact the shop",
            Continue_without : "Continue without session",
            About_footer : "The Boutique Les Thés d'Emilie is located between the department stores, the Saint-Lazare train station and the Place de la Madeleine. Specializing in exceptional teas, the shop welcomes you Monday from 3 p.m. to 7 p.m., Tuesday to Saturday from 11 a.m. to 7 p.m. From August 1 to August 31, the boutique will be closed on Monday and Sunday",
            title_upload : "Upload a picture for your tailor",
            subtitle_upload : "Our tailors will discuss with you about the picture uploaded to design your perfect outfit!",
            download : "Upload your picture: ",
            comment : "Any comment to share with the tailor?",
            comment_label : "Your comment",
            name_label : "Your name",
            email_label : "Your Email",
            submit_picture : "Save",
            Needed_name : "This field is mandatory",
            Needed_comment : "This field is mandatory",
            Needed_email : "This field is mandatory",
            boite : "Canned teas",
            sachet : "Tea bags",
            infusion : "Infusion",
            vrac : "bulk purchase",
            selection_exception : "Our selection of tea of exception",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        display_Admin_functions();
        display_all_products()
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('boite').innerHTML = translation.boite;
    document.getElementById('sachet').innerHTML = translation.sachet;
    document.getElementById('infusion').innerHTML = translation.infusion;
    document.getElementById('vrac').innerHTML = translation.vrac;
    document.getElementById('selection_exception').innerHTML = translation.selection_exception;

}

function display_Admin_functions(){
    let token = JSON.parse(window.localStorage.getItem('token'));
    let userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token !== null && userId !== null) {
        fetch('https://api.lesthesdemilie.net/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_user_priviledges(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    } else {
        document.getElementById('post_product_div').style.display = "none";
    }
}

function display_user_priviledges(response) {
    console.log(response.admin);
    if (response.admin === "no"){
        document.getElementById('post_product_div').style.display = "none";
    } else if (response.admin === "yes") {
        document.getElementById('post_product_div').style.display = "block";
    }
}

function display_all_products() {

    let token = JSON.parse(window.localStorage.getItem('token'));
    let userId = JSON.parse(window.localStorage.getItem('userId'));

        fetch('https://api.lesthesdemilie.net/api/pictures/picturesGetTea', { method: "GET" }).then(response => response.json()).then(response => display_all_products_onpage(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
}

function display_all_products_onpage(response){
    if (response.length !== 0){
        let productlist = [];
        class Product {
            constructor(_id, userId, price, picture, category, subcategory, name, comment, name_en, comment_en) {
                this.__id = _id;
                this._userId = userId;
                this._price = price;
                this._picture = picture;
                this._category = category;
                this._subcategory = subcategory;
                this._name = name;
                this._comment = comment;
                this._name_en = name_en;
                this._comment_en = comment_en;
            }

            get userId() {
                return this._userId
            }

            set userId(_userId) {
                this._userId = this.userId
            }

            get price() {
                return this._price
            }

            set price(_price) {
                this._price = this.price
            }
            get picture() {
                return this._picture
            }
            set picture(_picture) {
                this._picture = this.picture
            }
            get category() {
                return this._category
            }
            set category(_category) {
                this._category = this.category
            }
            get subcategory() {
                return this._subcategory
            }
            set subcategory(_subcategory) {
                this._subcategory = this.subcategory
            }
            get name() {
                return this._name
            }
            set name(_name) {
                this._name = this.name
            }
            get comment() {
                return this._comment
            }
            set comment(_comment) {
                this._comment = this.comment
            }
            get name_en() {
                return this._name
            }
            set name_en(_name_en) {
                this._name_en = this.name_en
            }
            get comment_en() {
                return this._comment_en
            }
            set comment_en(_comment_en) {
                this._comment_en = this.comment_en
            }
        }

        for (let i = 0; i < response.length; i++) {

            productlist.push(new Product(response[i]._id, response[i].email, response[i].price, response[i].picture, response[i].category, response[i].subcategory, response[i].name, response[i].comment, response[i].name_en, response[i].comment_en));
        }
        console.log(productlist);

        let listProducts = "";
        let language = localStorage.getItem("language");
        if (language === 'fr'){
            productlist.forEach(Product => {
                let file = Product.picture.split('/images');
                listProducts += `

                            <div class="col-lg-3 pt-4 pb-4 mb-4 mr-4 Product_present text-center ${Product._subcategory}">
                                <a href="#" onclick="view_Product('${Product.__id}')" class="Product_present_a">
                                    <h2>${Product._name}</h2>
                                    <img src="../../../backend/images${file[1]}" class="w-60 pt-2 pb-4">
                                    <p class="text-justify">${Product._comment}</p>
                                    <p>${Product._price} euros</p>
                                </a>
                            </div>
                `
            })

        document.getElementById('display_products').innerHTML = listProducts;
        
        } else if (language === 'en') {
            productlist.forEach(Product => {
                let file = Product.picture.split('/images');
                listProducts += `

                            <div class="col-lg-3 pt-4 pb-4 mb-4 mr-4 Product_present text-center ${Product._subcategory}">
                                <a href="#" onclick="view_Product('${Product.__id}')" class="Product_present_a">
                                    <h2>${Product._name_en}</h2>
                                    <img src="../../../backend/images${file[1]}" class="w-60 pt-2 pb-4">
                                    <p class="text-justify">${Product._comment_en}</p>
                                    <p>${Product._price} euros</p>
                                </a>
                            </div>
                `
            })

        document.getElementById('display_products').innerHTML = listProducts;
        }
    }
}

function filter_subcategories(){
    document.getElementById('boite').addEventListener("click", function hide_other_categories(){
        event.preventDefault();
        let sachet = document.getElementsByClassName('sachet');
            for(var i=0; i<sachet.length; i++) { 
            sachet[i].style.display= "none";
        }
        let infusion = document.getElementsByClassName('infusion');
            for(var i=0; i<infusion.length; i++) { 
            infusion[i].style.display= "none";
        }
        let vrac = document.getElementsByClassName('vrac');
            for(var i=0; i<vrac.length; i++) { 
            vrac[i].style.display= "none";
        }
        let boite = document.getElementsByClassName('boite');
        for(var i=0; i<boite.length; i++) { 
        boite[i].style.display= "block";
    }
    })

    document.getElementById('sachet').addEventListener("click", function hide_other_categories(){
        event.preventDefault();
        let boite = document.getElementsByClassName('boite');
            for(var i=0; i<boite.length; i++) { 
            boite[i].style.display= "none";
        }
        let infusion = document.getElementsByClassName('infusion');
            for(var i=0; i<infusion.length; i++) { 
            infusion[i].style.display= "none";
        }
        let vrac = document.getElementsByClassName('vrac');
            for(var i=0; i<vrac.length; i++) { 
            vrac[i].style.display= "none";
        }
        let sachet = document.getElementsByClassName('sachet');
        for(var i=0; i<sachet.length; i++) { 
        sachet[i].style.display= "block";
    }
    })

    document.getElementById('infusion').addEventListener("click", function hide_other_categories(){
        event.preventDefault();
        let sachet = document.getElementsByClassName('sachet');
        for(var i=0; i<sachet.length; i++) { 
        sachet[i].style.display= "none";
    }
    let boite = document.getElementsByClassName('boite');
        for(var i=0; i<boite.length; i++) { 
        boite[i].style.display= "none";
    }
    let vrac = document.getElementsByClassName('vrac');
        for(var i=0; i<vrac.length; i++) { 
        vrac[i].style.display= "none";
    }
    let infusion = document.getElementsByClassName('infusion');
    for(var i=0; i<infusion.length; i++) { 
    infusion[i].style.display= "block";
}
    })
    document.getElementById('vrac').addEventListener("click", function hide_other_categories(){
        event.preventDefault();
        let sachet = document.getElementsByClassName('sachet');
        for(var i=0; i<sachet.length; i++) { 
        sachet[i].style.display= "none";
    }
    let infusion = document.getElementsByClassName('infusion');
        for(var i=0; i<infusion.length; i++) { 
        infusion[i].style.display= "none";
    }
    let vrac = document.getElementsByClassName('vrac');
        for(var i=0; i<vrac.length; i++) { 
        vrac[i].style.display= "block";
    }
    let boite = document.getElementsByClassName('infusion');
    for(var i=0; i<boite.length; i++) { 
    boite[i].style.display= "none";
}
    })
}


function view_Product(_id){
    event.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("ProductId", _id);
        window.setTimeout(window.location.replace("../Products/Preview_product.html" + "?" + queryParams.toString()), 5000);
}