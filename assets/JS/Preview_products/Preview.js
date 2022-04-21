language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Centimeter: "Centimètres",
            Inches: "Pouces",
            Modify_Gender_btn : "Modifier mon choix - Lady ou Gentlemen",
            Gender_choice : "Êtes-vous un Homme ou une femme?",
            Gender_modify : "Modifiez votre choix - Lady ou Gentlemen",
            Title_not_taken : "Il est temps de prendre vos mesures!",
            Subtitle_not_taken : "Nos tailleurs vous ont préparé ce formulaire pour vous accompagner au cours de votre séance de mesure. Suivez les étapes et n'hésitez pas à nous contacter pour toute question!",
            Title_taken : "Vous avez correctement pris vos mesures!",
            Subtitle_taken : "Vous pouvez modifier vos mesures à tout moment, et nos tailleurs restent à votre disposition pour toute question!",
            Title_page : "Les Thés d'Emilie | Detail du produit",
            Title_dashboard : "Votre espace tailleur",
            Profile : "Mon profile",
            Measures : "Mes mesures",
            Orders : "Mes commandes",
            Contact : "contacter la boutique",
            About_footer : "La Boutique Les Thés d'Emilie est située entre les grands magasins, la gare Saint-Lazare et la place de la Madeleine. Spécialisée dans les thés d'exception, la boutique vous accueil du lundi de 15h à 19h, le mardi au samedi de 11h à 19h. Du 1er au 31 août, la boutique sera fermée le lundi et dimanche",
            Not_connected : "Vous n'êtes pas connectés. Veuillez vous connecter pour accéder à votre espace",
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
            title_order : "Votre commande",
            No_order : "Vous n'avez pas de commande pour le moment... Il est temps de contacter votre tailleur!",
            Realisations : "Notre travail",
            Selection : "Découvrez notre sélection couture du monde! La diversité et la passion sont des trésors que nous retrouvons au sein de notre travail. Rejoignez nous pour un tour du monde de nos plus belles créations!",
            Join : "Découvrir",
            Order_id : "Votre numéro de commande : ",
            Order_Email : "Votre Email : ",
            Order_Price : "Prix total de la commande : ",
            Order_Status : "Status de la commande : ",
            Finalize : "Finaliser ma commande",
            Follow_order : "Suivre ma commande",
            delivery : "Bienvenue dans votre boutique Les Thés d'Emilie!",
            quantity : "Quantité souhaitée",
            global_price : "Prix total :",
            Our_tea : "Nos thés",
            Accessoires : "Le coins des accessoires",
            Souvenirs : "Un petit souvenir",
            Detail_Product : "Detail du produit",
            delete_this_product : "Supprimer ce produit",
            delivery_choices : "Comment souhaitez vous être livrés?",
            pickup : "Passer à la boutique",
            deliveryParis : "Livraison à Paris",
            deliveryMail : "Livraison en dehors de Paris",
        } 
        
        display_footer(translation);
        User_logged(translation);
        Get_specific_product(translation);
        delivery_content(translation);
        choose_quantity_product(translation);
    } else {
        let translation = {
            Our_tea : "Our teas",
            Accessoires : "All our accessories",
            Souvenirs : "A little 'souvenir'",
            Centimeter: "Centimeters",
            Inches: "Inches",
            Modify_Gender_btn : "Edit my choice - Lady or Gentlemen",
            Gender_choice : "Are you a Lady or a Gentlemen?",
            Gender_modify : "Edit your choice - Lady or Gentlemen",
            Title_not_taken : "It's time to take your measures!",
            Subtitle_not_taken : "In order to ease the measurment process, our tailors designed the following form. Follow-up the steps and create your own custom piece.",
            Title_taken : "You already took your measures!",
            Subtitle_taken : "You can of course modify your measures anytime, and our tailors remain at your disposal for any question.",
            Title_page : "Les Thés d'Emilie | Product Detail",
            Title_dashboard : "Your tailoring dashboard",
            Profile : "My profile",
            Measures : "My measures",
            Orders : "My orders",
            Contact : "Contact the shop",
            About_footer : "The Boutique Les Thés d'Emilie is located between the department stores, the Saint-Lazare train station and the Place de la Madeleine. Specializing in exceptional teas, the shop welcomes you Monday from 3 p.m. to 7 p.m., Tuesday to Saturday from 11 a.m. to 7 p.m. From August 1 to August 31, the boutique will be closed on Monday and Sunday",
            Not_connected : "You are not connected yet. Please login to access your dashboard",
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
            title_order : "Your order",
            No_order : "You don't have any order at the moment... It's time to contact a tailor!",
            Realisations : "Our realisations",
            Selection : "Discover our selection of tailored pieces from all over the world! The diversity and the passion are two treasures we value in our art! Join us for our journe around the world!",
            Join : "Discover",
            Order_id : "Your order n°",
            Order_Email : "Email of the client : ",
            Order_Price : "Price of the order : ",
            Order_Status : "Order's status : ",
            Finalize : "Finalize this order",
            Follow_order : "Follow my order",
            delivery : "Welcome to your digital shop - Les Thés d'Emilie !!",
            quantity : "Quantity needed",
            global_price : "Global price :",
            Detail_Product : "Detail of the product",
            delete_this_product : "Delete this product",
            delivery_choices : "Please select your delivery preference",
            pickup : "Pickup at the shop",
            deliveryParis : "Delivery in Paris",
            deliveryMail : "Delivery outside Paris",
        }

        
        display_footer(translation);
        User_logged(translation);
        Get_specific_product(translation);
        delivery_content(translation);
        choose_quantity_product(translation);
        
    }
}



//DISPLAYING THE PRODUCT

//The product is displayed along with the informations of the product
//The product details are translated fully
//The quantity can be changed
//Changing the quality changes as well the total price

function choose_quantity_product(translation){
    document.getElementById('Detail_Product').innerHTML = translation.Detail_Product;
    document.getElementById('delivery_choices').innerHTML = translation.delivery_choices;

    document.getElementById('quantity_choice_section').innerHTML = `
    <label for="quantity">${translation.quantity}</label>
    <input type="number" id="quantity" name="quantity" min="1" max="20"  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="400">`;

    save_quantity_params();
}

function save_quantity_params(){
    document.getElementById('quantity').addEventListener('change', function save_query_params(){
        let inputOrder = document.getElementById('quantity');
        let quantity = inputOrder.value;
        console.log(quantity);
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("quantity", quantity);
        history.replaceState(null, null, "?"+queryParams.toString());
    })
}





//find the product we need to display

function Get_specific_product(translation){
    let queryParams = new URLSearchParams(window.location.search);
    let ProductId = queryParams.get('ProductId');

            fetch('https://api.lesthesdemilie.net/api/pictures/ProductGetOne' + '/' + ProductId, { method: "GET" }).then(response => response.json()).then(response => display_specific_product(translation, response))
            .catch(function (error) {
                console.log('GET ' + error.message)
            })
}

//The product is displayed and translated

function display_specific_product(translation, response){
    console.log(response);
    let picture = response[0].picture.split('images/')
    let language = localStorage.getItem("language");

    if (language === 'fr') {
    let content = `
            <h2>${response[0].name}</h2>
            <img src="https://api.lesthesdemilie.net/images/${picture[1]}" class="w-60 w-max-100 pt-2 pb-4">
            <p class="text-justify">${response[0].comment}</p>
            <p>${response[0].price} euros</p>
    `
    document.getElementById('Product_Summarize').innerHTML = content;
    } else if (language === 'en') {
    let content = `
            <h2  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">${response[0].name_en}</h2>
            <img  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600"src="https://api.lesthesdemilie.net/images/${picture[1]}" class="w-60 w-max-100 pt-2 pb-4">
            <p  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600"class="text-justify">${response[0].comment_en}</p>
            <p data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">${response[0].price} euros</p>
        `
    document.getElementById('Product_Summarize').innerHTML = content;
    }

    display_payment_buttons(response, translation);
    display_total_price(translation, response)
    Is_user_logged_options(language, response);
}

function display_payment_buttons(response, translation){
    
    document.getElementById('delivery').innerHTML = 
    `<div class="button_div"><a href="#" class="button" id="pickup">${translation.pickup}</a></div>
     <div class="button_div"><a href="#" class="button" id="deliveryParis">${translation.deliveryParis}</a></div>
     <div class="button_div"><a href="#" class="button" id="deliveryMail">${translation.deliveryMail}</a></div>`

    save_delivery_queryParams(response, translation);
}

//The quantity and pickup are choosen.

function save_delivery_queryParams(response, translation) {
    let queryParams = new URLSearchParams(window.location.search);
    let quantity = queryParams.get("quantity");

    if (!quantity){
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("quantity", 1);
        history.replaceState(null, null, "?"+queryParams.toString());
        
    } else if (quantity){
        let queryParams = new URLSearchParams(window.location.search);
        let quantity = queryParams.get("quantity");
        let totalPrice = quantity*response[0].price;

        document.getElementById('total_price_quantity').innerHTML = `<p>${translation.global_price} ${totalPrice} euros</p>`
    }

    document.getElementById('pickup').addEventListener('click', function save_pickup_queryParams(response){
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("delivery", "pickup");
        history.replaceState(null, null, "?"+queryParams.toString());
        setTimeout(window.location.reload(), 5000);
    })

    document.getElementById('deliveryParis').addEventListener('click', function save_deliveryParis_queryParams(response){
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("delivery", "deliveryParis");
        history.replaceState(null, null, "?"+queryParams.toString());
        setTimeout(window.location.reload(), 5000);
    })

    document.getElementById('deliveryMail').addEventListener('click', function save_deliveryMail_queryParams(response){
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("delivery", "deliveryMail");
        history.replaceState(null, null, "?"+queryParams.toString());
        setTimeout(window.location.reload(), 5000);
    })
}

//The total price is displayed once the quantity is choosen

function display_total_price(translation, response){
    document.getElementById('quantity').addEventListener('change', function save_query_params(){
        let queryParams = new URLSearchParams(window.location.search);
        let quantity = queryParams.get("quantity");
        let totalPrice = quantity*response[0].price;

        document.getElementById('total_price_quantity').innerHTML = `<p>${translation.global_price} ${totalPrice} euros</p>`

     if (delivery && delivery !== "pickup" && quantity <= 2 &&  ( response[0].subcategory === 'infusion' || response[0].subcategory === 'sachet' || response[0].subcategory === 'vrac' )) {
        let FinalPrice = quantity*response[0].price + 2;
        console.log('+2');
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity <= 5 &&  ( response[0].subcategory === 'infusion' || response[0].subcategory === 'sachet' || response[0].subcategory === 'vrac' )) {
        let FinalPrice = quantity*response[0].price + 5;
        console.log('+5 infusion 5boxes');
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity > 5 && ( response[0].subcategory === 'infusion' || response[0].subcategory === 'sachet' || response[0].subcategory === 'vrac' )) {
        let FinalPrice = quantity*response[0].price + 8;
        console.log('+8');
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity <= 3 && ( response[0].subcategory === 'boite' || response[0].category === 'accessoires' || response[0].category === 'souvenirs' )) {
        let FinalPrice = quantity*response[0].price + 5;
        console.log('+3 accessoires');
	console.log(response[0].category);
	console.log(quantity > 3);
	console.log(quantity <= 3);
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity > 3 && ( response[0].subcategory === 'boite' || response[0].category === 'accessoires' || response[0].category === 'souvenirs' )) {
        let FinalPrice = quantity*response[0].price + 8;
        console.log('+8 accessoires');
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    }
    })
}








//The order of a product is only accessible if the user is logged in and with a VALID TOKEN
//To display the correct button, the user is logged in?
//Check and displaying correct button according the result.

// CHECK IF THE USER IS LOGGED IN TO DISPLAY THE CORRECT BUTTON

function Is_user_logged_options(language, product) {

    let userId = JSON.parse(window.localStorage.getItem('userId'));
    let token = JSON.parse(window.localStorage.getItem('token'));

    if (token && userId) {
        fetch('https://api.lesthesdemilie.net/api/auth/verifAuth', { method: "POST", headers: { 'Authorization': 'bearer ' + token.token_access } , body: "Tokenverification" })

                .then(response => verify_token(response, language, product))
                .catch(function (error) {
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('userId');
                    alert("Le token d'authentification est invalide. Pour votre sécurité, veuillez vous reconnecter " + error.message)
                })
    } else {        
        
        document.getElementById('delivery_choices').style.display = "none";
        document.getElementById('delivery').style.display = "none";

        if (language === 'fr') {
            let option_content = `
            <div class="mb-5 mt-5">
                <a href="#" class="button mt-4" id="Order_login">Commander</a>
            </div>`
    
        document.getElementById('payment_choice').innerHTML = option_content;
        } else if (language === 'en') {
            let option_content = `
            <div class="mb-5 mt-5">
                <a href="#" class="button mt-4" id="Order_login">Order</a>
            </div>`
    
        document.getElementById('payment_choice').innerHTML = option_content;
        }

        listen_event_login_order();

    }
}

function verify_token(response, language, product) {
    if (language === 'fr') {
        let option_content = `
        <h3>Excellent choix!</h3>
        <div class="mb-5 mt-5">
            <a href="#" class="button mt-4" id="cart_choice">Ajouter au panier</a>
        </div>
        <div>
            <a href="#" class="button mt-4" id="paypal_choice_btn">Commander ce produit</a>
        </div>`

    document.getElementById('payment_choice').innerHTML = option_content;

    } else if (language === 'en') {
        let option_content = `
        <h3>Excellent choice!</h3>
        <div class="mb-5 mt-5">
            <a href="#" class="button mt-4" id="cart_choice">Add to my cart</a>
        </div>
        <div>
            <a href="#" class="button mt-4" id="paypal_choice_btn">Order this product</a>
        </div>`

    document.getElementById('payment_choice').innerHTML = option_content;
    }

    document.getElementById('payment_choice').style.display = "none";
    document.getElementById('delivery_choices').style.display = "block";
    document.getElementById('delivery').style.display = "block";

    let queryParams = new URLSearchParams(window.location.search);
    let delivery = queryParams.get("delivery");

    if (delivery){
        document.getElementById('payment_choice').style.display = "block";
        document.getElementById('delivery_choices').style.display = "none";
        document.getElementById('delivery').style.display = "none";
        Add_to_cart(product);
        save_quantity_choice(product);
    }
}

function listen_event_login_order(){
    let login_button = document.getElementById('Order_login');
    if (login_button){
        login_button.addEventListener('click', Login_Menu );
    }
    
}

function delivery_content(translation) {
    let delivery_content = `
<div class="text-center">
    <div class="announce__banner text-center mt-4 pt-4 pb-4" id="paypal_delivery">
        <img id="gift" src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/gift.png">
        <div class="d-flex justify-content-around">
            <p class="mt-2 pt-2 w-100 text-center">${translation.delivery}</p>
        </div>
        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/CarteVisite.png" id="carteVisite">
        
    </div>
</div>
    `

document.getElementById('sales_delivery').innerHTML = delivery_content;
}















//Adding to cart or paying depending of the users wish.
//The quantity and total price need to be done according the real values

//IF THE USER IS LOGGED IN, ADDING TO CART ADD AN ORDER WITH STATUS PENDING TO DATABASE

function Add_to_cart(response){

    document.getElementById('cart_choice').addEventListener('click', function save_cart(){
    event.preventDefault();
    let userId = JSON.parse(window.localStorage.getItem('userId'));
    let token = JSON.parse(window.localStorage.getItem('token'));
    let product = response;

    fetch('https://api.lesthesdemilie.net/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => continue_Second_Cart(response, product))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })   
})
}

function continue_Second_Cart(response, product) {
    console.log(response);
    if (response.adress === "..."){
        document.getElementById('Popup_adress').style.display = "block";
        Add_Update_Adress();

    } else if (response.adress !== "...") {
        continue_with_cart(product);
    }
}

function Add_Update_Adress(){
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        let translation = { title_adress : "Veuillez renseigner votre adresse", Adress : "Votre adresse", Required : "Ce champs est requis", CP : "Code postal", City : "Ville", Country : "Pays", save : "Enregistrer" };
        Add_Field_adress(translation);
    } else if (language === 'en'){
        let translation = { title_adress : "Please, let us know where to send your order", Adress : "Your adress", Required : "This field is required", CP : "Postal code", City : "City", Country : "Country", save : "Save" };
        Add_Field_adress(translation);
    }
}

function Add_Field_adress(translation) {
    let adress = `
    <div class="mt-5" data-aos="fade" data-aos-easing="ease-out" data-aos-duration="500">
        <div class="mt-5 mb-5 text-center">
        <div class="w-100 text-center m-auto separation"></div>
        <h3 class="mt-5 mb-5">${translation.title_adress}</h3>
                    <form class="mb-5 adress_form">
                        <label for="Adress">Adress</label>
                        <input name="Adress" id="Adress" type="text" placeholder="${translation.Adress}"><br>
                        <p class="required_message" id="adress_warn_empty">${translation.Required}</p>
                        <label for="CP">CP</label>
                        <input type="number" name="CP" id="CP" placeholder="${translation.CP}"><br>
                        <p class="required_message" id="cp_warn_empty">${translation.Required}</p>
                        <label for="City">City</label>
                        <input type="text" name="City" id="City" placeholder="${translation.City}"><br><br>
                        <p class="required_message" id="city_warn_empty">${translation.Required}</p>
                        <label for="City">Country</label>
                        <input type="text" name="Country" id="Country" placeholder="${translation.Country}"><br><br>
                        <p class="required_message" id="country_warn_empty">${translation.Required}</p>
                        <a href="#" class="button" onclick="Save_adress()">${translation.save}</a>
                    </form>
        </div>
    </div>`
        document.getElementById('Popup_adress').innerHTML = adress;
}

function continue_with_cart(response){
        console.log(response);
        let queryParams = new URLSearchParams(window.location.search);
        let quantity = queryParams.get("quantity");

        if (!quantity) {
            let quantity = 1;
            save_this_item(response, quantity);
        } else if (quantity) {
            save_this_item(response, quantity);
        }
}

function Save_noerase() {
    let queryParams = new URLSearchParams(window.location.search);
    let confirmation = queryParams.get("confirmCart");
    console.log(confirmation);
    if (confirmation === "Confirm") {
        console.log('confirmation');
        document.getElementById('cart_choice').style.display = "none";
    }
}




function save_this_item(response, quantity) {

    console.log(response[0].comment_en);
    console.log(response[0].name_en);
    let datenow = Date.now();
    let userId = JSON.parse(window.localStorage.getItem('userId'));
    let token = JSON.parse(window.localStorage.getItem('token'));
    var neworder = {
        picture : response[0].picture,
        userId : userId.userId,
        productId : response[0]._id,
        datenow : datenow,
        category : response[0].category,
        subcategory : response[0].subcategory,
        name : response[0].name,
        price : response[0].price,
        comment : response[0].comment,
        name_en : response[0].name_en,
        comment_en : response[0].comment_en,
        quantity : quantity,
        status : "pending",
        delivery : "pending",
    }
            
            console.log(neworder);

            fetch('https://api.lesthesdemilie.net/api/orders/orderPost', { method: "POST", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access } , body: JSON.stringify(neworder) })

                .then(response => order_saved_successfully(response))
                .catch(function (error) {
                    alert('TOKEN ERROR ' + error.message)
                })
}

function order_saved_successfully(response) {
    console.log(response);
    setTimeout(window.location.replace("https://decommissionvn.github.io/lesThesEmilieBackup/Dashboard/Cart.html"), 5000);
}

//IF HE PREFERS TO PAY DIRECTLY, THE ORDER IS CREATED WITH STATUS PAID




function save_quantity_choice(response){
    let queryParams = new URLSearchParams(window.location.search);
    let quantity = queryParams.get("quantity");
    if (quantity){
        choose_delivery_option(response, quantity);
    } else {
        choose_delivery_option(response, 1);
    }
}

function choose_delivery_option(response, quantity) {
    let queryParams = new URLSearchParams(window.location.search);
    let delivery = queryParams.get("delivery");
    let totalPrice = quantity*response[0].price;

    if (delivery === "pickup" || !delivery ){
        let FinalPrice = quantity*response[0].price;
        console.log('Sec pickup');
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity <= 2 && (response[0].subcategory === 'infusion' || response[0].subcategory === 'sachet' || response[0].subcategory === 'vrac')  ) {
        let FinalPrice = quantity*response[0].price + 2;
        console.log(FinalPrice);
        display_fraisPort('Sec 2');
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity <= 5 && (response[0].subcategory === 'infusion' || response[0].subcategory === 'sachet' || response[0].subcategory === 'vrac')  ) {
        let FinalPrice = quantity*response[0].price + 5;
        console.log(FinalPrice);
        display_fraisPort('Sec 5 tea');
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity > 5 && (response[0].subcategory === 'infusion' || response[0].subcategory === 'sachet' || response[0].subcategory === 'vrac')  ) {
        let FinalPrice = quantity*response[0].price + 8;
        console.log(FinalPrice);
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity <= 3 && (response[0].subcategory === 'boite' || response[0].category === 'accessoires' || response[0].category === 'souvenirs')  ) {
        let FinalPrice = quantity*response[0].price + 5;
        console.log('Sec 5 accessoires');
	console.log(response[0].category);
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    } else if (delivery !== "pickup" && quantity > 3 && (response[0].subcategory === 'boite' || response[0].category === 'accessoires' || response[0].category === 'souvenirs')  ) {
        let FinalPrice = quantity*response[0].price + 8;
        console.log(FinalPrice);
        display_fraisPort(FinalPrice);
        finalize_payment(response, FinalPrice);
    }
}

function display_fraisPort(FinalPrice){
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        document.getElementById('total_price_quantity').innerHTML = `<p  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">Le prix incluant les frais de port est de : ${FinalPrice} euros</p>
                                                                     <p  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">Les frais de port ne seront pas appliqués si vous choisissez un retrais en magasin.</p>`
    } else if (language === 'en'){
        document.getElementById('total_price_quantity').innerHTML = `<p data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">The price including delivery fees is : ${FinalPrice} euros</p>
                                                                     <p data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">The delivery fees for this order will  not apply if you choose a pickup at the shop.</p>`
    }
    
}


function finalize_payment(response, price) {
        document.getElementById('paypal_choice_btn').addEventListener('click', function display_paypal(){

            event.preventDefault();
            let userId = JSON.parse(window.localStorage.getItem('userId'));
            let token = JSON.parse(window.localStorage.getItem('token'));
            let product = response;

            fetch('https://api.lesthesdemilie.net/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => continue_Second_paypal(response, product, price))
                .catch(function (error) {
                    console.log('GET ' + error.message)
                })   
        })
}

function continue_Second_paypal(response, product, price) {
    console.log(response);
    if (response.adress === "..."){
        document.getElementById('Popup_adress').style.display = "block";
        Add_Update_Adress();

    } else if (response.adress !== "...") {
        continue_with_paypal(product, price);
    }
}

function continue_with_paypal(response, price){
        document.getElementById('cart_choice').style.backgroundColor = "#dedede";
        let paypal_exists_already = document.getElementsByClassName('paypal-buttons');
        let number_Paypal = paypal_exists_already.length;

            if (number_Paypal === 0){
            display_price_recap_ont_top(response, price);
            modifiy_order_button();

                paypal.Buttons({
                            style: {
                                shape: 'rect',
                                color: 'white',
                                layout: 'vertical',
                                label: 'pay',
                            },
                    
                            createOrder: function(data, actions) {
                            return actions.order.create({
                                purchase_units: [{
                                amount: {
                                    currency: "EUR",
                                    value: price
                                }
                                }]
                            });
                            },
                            
                            onApprove: function(data, actions) {
                                return actions.order.capture().then(function(details) {
                                save_this_item_paid(response);
                                });
                            },
                        }).render('#paypal-button-container'); // Display payment options on your web page
            } else {
                let queryParams = new URLSearchParams(window.location.search);
                queryParams.delete("delivery");
                history.replaceState(null, null, "?"+queryParams.toString());
                window.location.reload();
            }
}

function display_price_recap_ont_top(response, price){
    let language = localStorage.getItem("language");
    let queryParams = new URLSearchParams(window.location.search);
    let quantity = queryParams.get("quantity");
    console.log(response);
    if (language === 'fr'){
        document.getElementById('Recap').innerHTML = `<p data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">Vous allez acheter ${quantity} unités de ${response[0].name} pour un prix total de ${price} euros</p>`;
    } else if (language === 'en'){
        document.getElementById('Recap').innerHTML = `<p data-aos="fade" data-aos-easing="ease-out" data-aos-duration="600">You are buying ${quantity} units of ${response[0].name_en} for a total price of ${price} euros</p>`;
    }
}


function modifiy_order_button() {
    let language = localStorage.getItem("language");
    if (language === 'fr'){
        document.getElementById('paypal_choice_btn').innerHTML = 'Modifier mes choix';
    } else if (language === 'en'){
        document.getElementById('paypal_choice_btn').innerHTML = 'Modify mu choices';
    } 
}


function save_this_item_paid(response) {
    let queryParams = new URLSearchParams(window.location.search);
    let quantity = queryParams.get("quantity");

    console.log('The quantity is ' + quantity);
        if (!quantity) {
            let quantity = 1;
            console.log('quantity undefined' + quantity)
            save_delivery(response, quantity);
        } else if (quantity) {
            save_delivery(response, quantity);
        }
}

function save_delivery(response, quantity){
    let queryParams = new URLSearchParams(window.location.search);
    let delivery = queryParams.get("delivery");
    save_this_item_paid_quantity(response, quantity, delivery);
}

function save_this_item_paid_quantity(response, quantity, delivery){
    console.log(response[0].comment_en);
    console.log(response[0].name_en);
    let datenow = Date.now();
    let userId = JSON.parse(window.localStorage.getItem('userId'));
    let token = JSON.parse(window.localStorage.getItem('token'));
    var neworder = {
        picture : response[0].picture,
        userId : userId.userId,
        productId : response[0]._id,
        datenow : datenow,
        category : response[0].category,
        subcategory : response[0].subcategory,
        name : response[0].name,
        price : response[0].price,
        comment : response[0].comment,
        name_en : response[0].name_en,
        comment_en : response[0].comment_en,
        quantity : quantity,
        status : "paid",
        delivery : delivery,
    }
            
            console.log(neworder);

            fetch('https://api.lesthesdemilie.net/api/orders/orderPost', { method: "POST", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access } , body: JSON.stringify(neworder) })

                .then(response => order_payed_successfully(response))
                .catch(function (error) {
                    alert('TOKEN ERROR ' + error.message)
                })
}

function order_payed_successfully(response) {
    console.log(response);
    document.getElementById('payment_choice').innerHTML = `<h2 data-aos="fade" data-aos-easing="ease-out" data-aos-delay="600" data-aos-duration="1100">Payment effectué avec succès!</h2>`;
    

    let queryParams = new URLSearchParams(window.location.search);
    let confirmation = queryParams.get("confirmCart");
    console.log(confirmation);
    if (confirmation === "Confirm") {
        let token = JSON.parse(window.localStorage.getItem('token'));
        let queryParams = new URLSearchParams(window.location.search);
        let OrderId = queryParams.get('OrderId');
        console.log(OrderId);

        let request = {
            order : "delete the order",
            token : token.token,
        }

            fetch('https://api.lesthesdemilie.net/api/orders/OrderDeleteOne' + '/' + OrderId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(request) }).then(response => response.json()).then(response => Display_response_preview(response))
            .catch(function (error) {
                console.log('GET ' + error.message)
            })
    }
}

function Display_response_preview(response) {
    console.log(response);
}








//The admins are able to delete the product
//we then first need to check if the user logged is an admin.
//then we allow a function to remove this product of the database if needed.

display_Admin_functions();

function display_Admin_functions(){
    let token = JSON.parse(window.localStorage.getItem('token'));
    let userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token && userId ) {
        fetch('https://api.lesthesdemilie.net/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_user_priviledges(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    } else {
        document.getElementById('delete_product').style.display = "none";
    }

    delete_this_product_now();
}

function display_user_priviledges(response) {
    console.log(response.admin);
    if (response.admin === "no"){
        document.getElementById('delete_product').style.display = "none";
    } else if (response.admin === "yes") {
        document.getElementById('delete_product').style.display = "block";
    }
}

function delete_this_product_now(){
    console.log('admin function is listening');

    document.getElementById('delete_this_product').addEventListener("click", function delete_instantaneous() {
        let userId = JSON.parse(window.localStorage.getItem('userId'));
        let token = JSON.parse(window.localStorage.getItem('token'));
        let queryParams = new URLSearchParams(window.location.search);
        let ProductId = queryParams.get('ProductId');

        let request = {
            order : "delete the product",
            token : token.token,
        }

            fetch('https://api.lesthesdemilie.net/api/pictures/ProductDeleteOne' + '/' + ProductId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(request) }).then(response => response.json()).then(response => Redirect_after_deletion(response))
            .catch(function (error) {
                console.log('GET ' + error.message)
            })
    })
}

function Redirect_after_deletion(response) {
    console.log(response);
    setTimeout(window.location.replace("Our_tea.html"), 5000);
}