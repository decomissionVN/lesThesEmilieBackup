language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            History : "Histoire du thé",
            Benefits : "Thé et santé",
            Selection : "Nos thés & Séléctions",
            Preparation : "Préparation du thé",
            Boutique : "Notre boutique",

            Presentation1 : "La boutique Twinings a été créée en 1910 par un descendant de la famille Twining.",
            Presentation2 : "Elle s'appelle désormais Les thés d'Emilie et propose en premier lieu les thés Twinings, une variété de produits exclusifs importés d'Angleterre en sachets et en boîtes, théières, tasses et gourmandises.",
            Selectionbtn : "Nos thés et sélections",
            Welcome: "Bienvenue chez Les Thés d'Emilie",
            Description: "La Boutique Les Thés d'Emilie est située entre les grands magasins, la gare Saint-Lazare et la place de la Madeleine.",
            Description1 : "Ouvert le lundi de 15h à 19h Ouvert du mardi au samedi de 11h à 19h Fermeture le dimanche",
            Description2 : "Du 1er au 31 août: Fermeture le lundi et dimanche",
            Description3 : "76 bd Haussmann 75008 Paris.",
            Description4 : "Téléphone 01 43 87 39 84",
            Description5 : "E-Mail: LTEA@hotmail.fr",
            Finalize : "Finaliser",
            No_order : "Vous n'avez pas de commande confirmée pour le moment.",
            Title_dashboard : "Naviguez facilement au sein de votre espace!",
            Profile : "Mon profile",
            Measures : "Mes mesures",
            Orders : "Mes commandes",
            Contact : "contacter la boutique",
            Title_Page : "Les Thés d'Emilie | Une sélection des meilleurs thés de Twinings | Boutique",
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
            Accessoires : "Le coin des accessoires",
            Souvenirs : "Un petit souvenir",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Presentation1: "The Twinings store was founded in 1910 by a descendant of the Twining family.",
            Presentation2: "It is now called Les thés d'Emilie and primarily offers Twinings teas, a variety of exclusive products imported from England in bags and boxes, teapots, cups and delicacies.",
            Selectionbtn: "Our teas and selections",
            Welcome: "Welcome to Les Thés d'Emilie",
            Description: "The Boutique Les Thés d'Emilie is located between the department stores, the Saint-Lazare train station and the Place de la Madeleine.",
            Description1: "Open Monday from 3 p.m. to 7 p.m. Open Tuesday to Saturday from 11 a.m. to 7 p.m. Closed on Sunday",
            Description2: "From August 1st to 31st: Closed on Monday and Sunday",
            Description3: "76 bd Haussmann 75008 Paris.",
            Description4: "Telephone 01 43 87 39 84",
            Description5: "E-Mail: LTEA@hotmail.fr",

            History : "History of tea",
            Benefits : "Tea & health ",
            Selection : "Our tea & Selection ",
            Preparation : "Préparation of tea ",
            Boutique : "Our shop",
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
            Title_Page : "Les Thés d'Emilie | The selection of the best teas of Twinings | Shop",
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
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('Description').innerHTML = translation.Description;
    document.getElementById('Description1').innerHTML = translation.Description1;
    document.getElementById('Description2').innerHTML = translation.Description2;
    document.getElementById('Description3').innerHTML = translation.Description3;
    document.getElementById('Description4').innerHTML = translation.Description4;
    document.getElementById('Description5').innerHTML = translation.Description5;
    document.getElementById('Welcome').innerHTML = translation.Welcome;
    document.getElementById('Presentation1').innerHTML = translation.Presentation1;
    document.getElementById('Presentation2').innerHTML = translation.Presentation2;
    document.getElementById('Selectionbtn').innerHTML = translation.Selectionbtn;
}