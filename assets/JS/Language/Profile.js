language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_profile_section : "Bienvenue dans votre profil",
            cart_choice : "Mon panier",
            tea_choice : "Découvrez notre sélection de thés",
            Profile_detail : "Les details de mon profil",
            Delete : "Supprimer mon profile",
            Modify : "Modifier mon adresse de livraison",
            Info : "Informations du compte",
            Title_dashboard : "Bienvenue sur votre espace personnel",
            Profile : "Mon profil",
            Measures : "Mes mesures",
            Orders : "Mes commandes",
            Contact : "contacter la boutique",
            Not_connected : "Vous n'êtes pas connecté. Veuillez vous connecter pour accéder à votre profile",
            Title_Page : "Les thés d'Emilie | Profil personnel",
            Title_Profile : "Vos Informations Personnelles",
            Subtitle_Profile : "Vous avez créé un compte sur notre site. Nous vous en remercions et nos tailleurs s'assureront que votre expérience vous apporte la plus complète satisfaction. Les informations réunies sont strictement confidentielles et respectent les RGPD (Régulation Européenne en matière de protection des données).",
            Subtitle_Profile2 : "Vous pouvez à tout moment demander la suppression de vos données personnelles en contactant notre service client.",
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
            Our_tea : "Nos thés",
            Accessoires : "Le coins des accessoires",
            Souvenirs : "Un petit souvenir",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation);
    } else {
        let translation = {
            
            Our_tea : "Our teas",
            Accessoires : "All our accessories",
            Souvenirs : "A little 'souvenir'",
            Delete : "Delete my profile",
            Not_connected : "you are not connected. Please login to connect your profile",
            Modify : "Modify my delivery adress",
            Info : "Information of the account",
            Title_dashboard : "Welcome to your Dashboard",
            Profile : "My profil",
            Measures : "My measures",
            Orders : "My orders",
            Contact : "Contact the shop",
            Title_Page : "Les thés d'Emilie | Profile",
            Title_Profile : "Your Profile Informations",
            Subtitle_Profile : "You have created an account on our website. Our tailors will make sure your experience with us brings you full satisfaction. The informations gathered are strictly confidential and respect the RGPD (European regulation about Privacy Policy).",
            Subtitle_Profile2 : "You can at any moment ask for the deletion of your personal information by contacting our constumer service.",
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
            cart_choice : "My cart",
            tea_choice : "Discover our selection of teas",
            Profile_detail : "My profile's details",
            Title_profile_section : "welcome to your profile",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
        User_exists(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('cart_choice').innerHTML = translation.cart_choice;
    document.getElementById('tea_choice').innerHTML = translation.tea_choice;
    document.getElementById('Profile_detail').innerHTML = translation.Profile_detail;
    document.getElementById('Title_profile_section').innerHTML = translation.Title_profile_section;
    document.getElementById('Title_Page_Profile').innerHTML = translation.Title_Page;
    document.getElementById('Title_Profile').innerHTML = translation.Title_Profile;
    document.getElementById('Subtitle_Profile').innerHTML = translation.Subtitle_Profile;
    document.getElementById('Subtitle_Profile2').innerHTML = translation.Subtitle_Profile2;
    document.getElementById('Title_Dashboard').innerHTML = translation.Title_dashboard;
    document.getElementById('contact_tailor').innerHTML = translation.Contact;
    document.getElementById('Orders').innerHTML = translation.Orders;
    document.getElementById('Profile').innerHTML = translation.Profile;
    document.getElementById('Info').innerHTML = translation.Info;
    document.getElementById('Modify').innerHTML = translation.Modify;
    document.getElementById('Delete').innerHTML = translation.Delete;
}


