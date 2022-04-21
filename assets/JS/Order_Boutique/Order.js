language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Our_tea : "Nos thés",
            Accessoires : "Le coins des accessoires",
            Souvenirs : "Un petit souvenir",
            Title_Page : "Les thés d'Emilie | Nos accessoires",
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
            Contact : "Contacter la boutique",
            Password : "Mot de passe",
            Continue_without : "Continuer sans session",
            About_footer : "La Boutique Les Thés d'Emilie est située entre les grands magasins, la gare Saint-Lazare et la place de la Madeleine. Spécialisée dans les thés d'exception, la boutique vous accueil du lundi de 15h à 19h, le mardi au samedi de 11h à 19h. Du 1er au 31 août, la boutique sera fermée le lundi et dimanche",
            title_upload : "Partagez une photo pour votre tailleur!",
            subtitle_upload : "Nos tailleurs vous recontacteront pour discuter de vos attentes pour créer la tenue idéale!",
            download : "Téléchargez votre image: ",
            comment : "Un commentaire pour votre tailleur?",
            comment_label : "Votre commentaire",
            name_label : "Votre nom",
            email_label : "votre Email",
            submit_picture : "Enregistrer",
            theiere : "Les théières",
            tasse : "Les tasses",
            boite : "Les boites",
            autre : "Articles divers",
            selection_exception : "Notre sélection de produits 'Souvenirs'",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        display_Admin_functions();
        display_all_orders()
    } else {
        let translation = {
            Contact : "Contact the shop",
            Our_tea : "Our teas",
            Accessoires : "All our accessories",
            Souvenirs : "A little 'souvenir'",
            Title_Page : "Les thés d'Emilie | Our accessories",
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
            theiere : "The tea-pot",
            tasse : "The cups",
            boite : "The boxes",
            autre : "Other accessories",
            selection_exception : "Our selection of products 'souvenirs'",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        display_Admin_functions();
        display_all_orders()
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
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
        document.getElementById('order_list').style.display = "none";
    }
}

function display_user_priviledges(response) {
    console.log(response.admin);
    if (response.admin === "no"){
        document.getElementById('order_list').style.display = "none";
    } else if (response.admin === "yes") {
        document.getElementById('order_list').style.display = "block";
    }
}

function display_all_orders() {

    let token = JSON.parse(window.localStorage.getItem('token'));
    let userId = JSON.parse(window.localStorage.getItem('userId'));

        fetch('https://api.lesthesdemilie.net/api/orders/displayOrderPaid', { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_all_orders_onpage(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
}

function display_all_orders_onpage(response){
    console.log("this is the list received from server");
    let response_reverse = response.reverse();
    console.log(response_reverse);


    if (response_reverse.length !== 0){
        let productlist = [];
        class Product {
            constructor(datenow, delivery, quantity, _id, productId, userId, price, picture, category, subcategory, name, comment, name_en, comment_en) {
                this._datenow = datenow;
                this._delivery = delivery;
                this._quantity = quantity;
                this.__id = _id;
                this._userId = userId;
                this._productId = productId;
                this._price = price;
                this._picture = picture;
                this._category = category;
                this._subcategory = subcategory;
                this._name = name;
                this._comment = comment;
                this._name_en = name_en;
                this._comment_en = comment_en;
            }
            get datenow() {
                return this._datenow
            }

            set datenow(_datenow) {
                this._datenow = this.datenow
            }
            get delivery() {
                return this._delivery
            }

            set delivery(_delivery) {
                this._delivery = this.delivery
            }

            get quantity() {
                return this._quantity
            }

            set quantity(_quantity) {
                this._quantity = this.quantity
            }

            get userId() {
                return this._userId
            }

            set userId(_userId) {
                this._userId = this.userId
            }

            get productId() {
                return this._productId
            }

            set productId(_productId) {
                this._productId = this.productId
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

        for (let i = 0; i < response_reverse.length; i++) {                                                                                      
            productlist.push(new Product(response_reverse[i].datenow, response_reverse[i].delivery, response_reverse[i].quantity, response_reverse[i]._id, response_reverse[i].productId, response_reverse[i].userId, response_reverse[i].price, response_reverse[i].picture, response_reverse[i].category, response_reverse[i].subcategory, response_reverse[i].name, response_reverse[i].comment, response_reverse[i].name_en, response_reverse[i].comment_en));
        }
        console.log(productlist);

        let listProducts = "";
        
            productlist.forEach(Product => {
                let file = Product.picture.split('/images');
                let d = new Date(Product._datenow);
                result = d.toString();
                listProducts += `

                            <div class="col-md-5 pt-4 pb-4 mb-4 mr-4 Product_present text-center ${Product._subcategory}">
                                    <h2>${Product._name}</h2>
                                    <img src="../../../backend/images${file[1]}" class="w-60 pt-2 pb-4">
                                    <p class="text-justify">${Product._comment}</p>
                                    <p><b>${Product._price} euros</b></p>
                                    <p>Le client a payé pour <b> ${Product._quantity} pièces</b></p>
                                    <p>Livraison du produit <b> ${Product._delivery}</b></p>
                                    <p>Commande enregistrée le <b>${result}</b></p>
                                    <div id="information_client_${Product.__id}"></div>
                                    <div class="mb-5">
                                        <a href="#" class="button mb-5" onclick="DisplayTheUser('${Product._userId}','${Product.__id}')">Détail client</a>
                                    </div>
                                    <div>
                                        <a href="#" class="button" onclick="ThisProductDelivered('${Product.__id}')">A été livré</a>
                                    </div>
                            </div>
                `
                
            })

        document.getElementById('order_list').innerHTML = listProducts;
    }
}

function DisplayTheUser(userId, OrderId) {
        event.preventDefault();
        let token = JSON.parse(window.localStorage.getItem('token'));

        if (token !== null && userId !== null) {
            fetch('https://api.lesthesdemilie.net/api/auth/userGet' + '/' + userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_user_details(response, OrderId))
            .catch(function (error) {
                console.log('GET ' + error.message)
            })
        } else {
            alert('Le token est expiré. Veuillez vous déconnecter puis vous reconnecter pour sécuriser votre session.');
        }
}

function display_user_details(response, OrderId){
    console.log(response);
    let content_user = `
    <p class="text-justify">Le nom du client est ${response.name}</p>
    <p class="text-justify">Le mail du client est ${response.email}</p>
    <p class="text-justify">L'adresse du client est <b>${response.adress}</b></p>
    `

    document.getElementById('information_client_' + OrderId).innerHTML = content_user;
}


function ThisProductDelivered(OrderId) {
    let userId = JSON.parse(window.localStorage.getItem('userId'));
    let token = JSON.parse(window.localStorage.getItem('token'));

    fetch('https://api.lesthesdemilie.net/api/orders/orderGetOne' + '/' + OrderId, { method: "GET", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }})

                .then(response => Change_to_Delivered(response, OrderId))
                .catch(function (error) {
                    alert('TOKEN ERROR ' + error.message)
                })
    
}

function Change_to_Delivered(response, OrderId) {
    console.log(response);
    let datenow = Date.now();
    let userId = JSON.parse(window.localStorage.getItem('userId'));
    let token = JSON.parse(window.localStorage.getItem('token'));
    var neworder = {
        picture : response.picture,
        userId : userId.userId,
        productId : response._id,
        datenow : datenow,
        category : response.category,
        subcategory : response.subcategory,
        name : response.name,
        price : response.price,
        comment : response.comment,
        name_en : response.name_en,
        comment_en : response.comment_en,
        quantity : response.quantity,
        status : "delivered",
        delivery : response.delivery,
    }

        fetch('https://api.lesthesdemilie.net/api/orders/orderUpdateOne' + '/' + OrderId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access } , body: JSON.stringify(neworder) })

                .then(response => display_response_delivered(response))
                .catch(function (error) {
                    alert('TOKEN ERROR ' + error.message)
                })
}

function display_response_delivered(response){
    console.log(response);
    window.location.reload();
}

