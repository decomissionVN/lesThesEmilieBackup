language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Finalize : "Finaliser",
            No_order : "Vous n'avez pas de commande confirmée pour le moment.",
            Title_dashboard : "Naviguez facilement au sein de votre espace!",
            Profile : "Mon profile",
            Measures : "Mes mesures",
            Orders : "Mes commandes",
            Contact : "contacter la boutique",
            Title_Page : "Les Thés d'Emilie | Une sélection des meilleurs thés de Twinings | Panier",
            Title_Real : "Nos realisations",
            Subtitle_Real : "Découvrez dès maintenant nos réalisations et discuter avec un tailleur en séance privée afin de trouver le produit que vous recherchez.",
            Button_Real : "Nos realisations",
            More : "En savoir plus",
            Social_media : "Réseaux sociaux",
            Quick_links : "Liens Rapides",
            Navigate_easily : "Navigation",
            Homepage : "Accueil",
            About : "A propos",
            All_products : "Nos pièces",
            Ladies : "Femmes",
            Gentlemen : "Hommes",
            Wedding : "Mariage",
            Blog : "Blog",
            Appointments : "Rendez-vous",
            Excellence : "Nos tailleurs",
            Around_globe : "A l'international",
            CGU : "Conditions d'utilisation",
            PPolicy : "Politique de confidentialité",
            Copyright : " | Copyright 2020 - VN",
            About_tailoring : "A propos de Couture",
            How_to_take : "Quelques conseils de votre tailleur",
            Measure : "Measure test fr",
            Home : "Accueil",
            About : "A propos",
            Ladies : "Ladies",
            Gentlemen : "Gentlemen",
            Contact_us : "Contact",
            Login : "Connexion",
            Signup : "Inscription",
            Dashboard : "Mon espace",
            Signout : "Déconnexion",
            Welcome_Login : "Bienvenue sur votre espace!",
            Email : "Email",
            Password : "Mot de passe",
            Continue_without : "Continuer sans session",
            About_footer : "La Boutique Les Thés d'Emilie est située entre les grands magasins, la gare Saint-Lazare et la place de la Madeleine. Spécialisée dans les thés d'exception, la boutique vous accueil du lundi de 15h à 19h, le mardi au samedi de 11h à 19h. Du 1er au 31 août, la boutique sera fermée le lundi et dimanche",
            Title_Cart : "Mon Panier",
            order_choice : "Mes commandes",
            cart_choice : "Mon panier",
            dashboard_presentation : "Bienvenue dans votre panier!",
            Our_tea : "Nos thés",
            Accessoires : "Le coins des accessoires",
            Souvenirs : "Un petit souvenir",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation)
    } else {
        let translation = {
            Our_tea : "Our teas",
            Accessoires : "All our accessories",
            Souvenirs : "A little 'souvenir'",
            Title_Cart : "My cart",
            order_choice : "My orders",
            cart_choice : "My cart",
            dashboard_presentation : "Welcome to your cart!",
            Finalize : "Checkout",
            No_order : "You don't have any order at the moment...",
            Title_dashboard : "Navigate easily in your dashboard!",
            Profile : "My profile",
            Measures : "My measures",
            Orders : "My orders",
            Contact : "Contact the shop",
            Title_Page : "Les Thés d'Emilie | The selection of the best teas of Twinings | Cart",
            Title_Home : "Tailoring",
            Subtitle_Home : "The tradition of tailoring is an ongoing art style, transmitted from father to son since generations. Trois Fils is proud to offer you this level excellence thanks to its innovative concept",
            Button_About : "Our Story",
            Tailoring_Ladies : "Tailoring for ladies",
            Tailoring_Gent : "Tailoring for gentlemens",
            Title_Wedding : "Wedding & Tailoring",
            Title_Wedding_d : "Wedding & Tailoring",
            Subtitle_Wedding : "Our tailors will make sure your special day is absolutely perfect! For a wedding dress, for a suit or smoking, our expertise will provide you the best taloring product and magnify your look to the eyes of your promise.",
            Button_Wedding : "Our wedding tailoring",
            Title_Real : "Our realisations",
            Subtitle_Real : "Discover today a selection of our realisations and discuss with a tailor in a private session in order to determine your needs and expectations.",
            Button_Real : "More realisations",
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
            Continue_without : "Continue without session",
            About_footer : "The Boutique Les Thés d'Emilie is located between the department stores, the Saint-Lazare train station and the Place de la Madeleine. Specializing in exceptional teas, the shop welcomes you Monday from 3 p.m. to 7 p.m., Tuesday to Saturday from 11 a.m. to 7 p.m. From August 1 to August 31, the boutique will be closed on Monday and Sunday",
            Title_Cart : "My Cart",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation)
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('Title_Cart').innerHTML = translation.Title_Cart;
    document.getElementById('Title_Dashboard').innerHTML = translation.Title_dashboard;
    document.getElementById('contact_tailor').innerHTML = translation.Contact;
    document.getElementById('Orders').innerHTML = translation.Orders;
    document.getElementById('Profile').innerHTML = translation.Profile;
    document.getElementById('Title_Cart').innerHTML = translation.Title_Cart;
    document.getElementById('order_choice').innerHTML = translation.order_choice;
    document.getElementById('cart_choice').innerHTML = translation.cart_choice;
    document.getElementById('dashboard_presentation').innerHTML = translation.dashboard_presentation;
}

function User_exists(translation) {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token && userId) {
        fetch('https://api.lesthesdemilie.net/api/orders/orderGetPending' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_order(response, translation))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }
}

function display_order(response, translation) {
console.log(response);

    if (response.length !== 0){
        console.log('no array');
        let orderlist = [];
        class Order {
            constructor(_id, userId, price, picture, status, name, name_en, comment, comment_en, quantity, productId) {
                this.__id = _id;
                this._userId = userId;
                this._price = price;
                this._picture = picture;
                this._status = status;
                this._name = name;
                this._comment = comment;
                this._name_en = name_en;
                this._comment_en = comment_en;
                this._quantity = quantity;
                this._productId = productId;
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
            get status() {
                return this._status
            }
            set status(_status) {
                this._status = this.status
            }
            get name() {
                return this._name
            }
            set name(_name) {
                this._name = this.name
            }
            get comment() {
                return this.c_omment
            }
            set comment(_comment) {
                this._comment = this._comment
            }
            get name_en() {
                return this._name
            }
            set name_en(_name_en) {
                this._name = this.name
            }
            get comment_en() {
                return this._comment_en
            }
            set comment_en(_comment_en) {
                this._comment_en = this._comment_en
            }
            get quantity() {
                return this._quantity
            }
            set quantity(_quantity) {
                this._quantity = this.quantity
            }
            get productId() {
                return this._productId
            }
            set productId(_productId) {
                this._productId = this.productId
            }
        }

        for (let i = 0; i < response.length; i++) {

            orderlist.push(new Order(response[i]._id, response[i].email, response[i].price, response[i].picture, response[i].status, response[i].name, response[i].comment, response[i].name_en, response[i].comment_en, response[i].quantity, response[i].productId));
        }
        console.log(orderlist);

        let HTMLOrderlist = "";
            
        orderlist.forEach(Order => {
            let file = Order.picture.split('/images');
            HTMLOrderlist += `
            <div class="row w-100 grey_bg_white">
                <div class="col-md-6 mb-5">
                    <div id=${Order.__id} class="order_div">
                        <p>${Order.__id}</p>
                        <p><b>${Order._name}</b></p>
                        <p><b>${Order._comment}</b></p>
                        <p><b>${Order._price}</b></p>
                        <p><b>${Order._status}</b></p>
                    </div>
                    <div class="col-12 text-center mb-5">
                        <a class="button ${Order._status}" href="#" onclick="PaymentorderId('${Order._productId}')">${translation.Finalize}</a>
                    </div>
                </div>

                <div class="col-md-6 mb-5">
                    <div class="orderlist text-center">
                        <img src="https://decomissionvn.github.io/lesThesEmilieBackup/backend/images${file[1]}" alt="Tailoring order" class="width70"/>
                    </div>
                </div>
            </div>
            <div class="w-100 m-auto text-center pt-2 mb-5">
                <img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Separation.png" class="pb-3 Separator">
            </div>
            
            `
        })

        document.getElementById('orders').innerHTML = HTMLOrderlist;

        document.getElementById('orders').innerHTML = HTMLOrderlist;

        var elements = document.getElementsByClassName('paid');
            for(var i=0; i<elements.length; i++) { 
            elements[i].style.display = "none";
        }


    } else if (response.length === 0){
        console.log('array');
        document.getElementById('orders').innerHTML = `
        <div class="text-center">
            <h3>${translation.No_order}</h3>
        </div>`;
    }
}

function PaymentorderId(orderId) {
        event.preventDefault();
        let queryParams = new URLSearchParams(window.location.search);
            queryParams.set("ProductId", orderId);
            queryParams.set("confirmCart", "Confirm");
            window.setTimeout(window.location.replace("https://decomissionvn.github.io/lesThesEmilieBackup/Products/Preview_product.html" + "?" + queryParams.toString()), 5000);
}