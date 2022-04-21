language_used();

function language_used(){
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr'){
        let translation = {
            Title_Page : "Trois Fils | Tailleur sur mesure en ligne | Notre compagnie",
            Title_Home : "Sur mesure",
            Subtitle_Home : "La tradition du sur mesure se perpétue car elle représente un savoir faire d'exception, transmis de père en fils depuis plusieurs générations. Troisfils est fière de vous proposer ce service d'exception de manière innovante et moderne.",
            Button_About : "Notre histoire",
            Tailoring_Ladies : "Tailleur Femme",
            Tailoring_Gent : "Tailleur Homme",
            Title_Wedding : "Mariage sur mesure",
            Title_Wedding_d : "Mariage sur mesure",
            Subtitle_Wedding : "Nos tailors s'assureront que votre tenue de mariage sera absolument parfaite! Pour une robe de mariée, pour un costume ou un smoking, notre expertise vous garantis le meilleur apparat et une apparence magnifiée aux yeux de votre promis(e)",
            Button_Wedding : "Nos pièces de mariage",
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
            About_footer : "La Boutique Les Thés d'Emilie est située entre les grands magasins, la gare Saint-Lazare et la place de la Madeleine. Spécialisée dans les thés d'exception, la boutique vous accueil du lundi de 15h à 19h, le mardi au samedi de 11h à 19h. Du 1er au 31 août, la boutique sera fermée le lundi et dimanche"
           
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            Title_Page : "Trois Fils | Online tailoring | Our compagny",
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
            Trois_Fils : "Trois-Fils",
            Trois_Fils1 : "Trois-Fils",
            main_subtitle : "Trois-Fils is a french and innovative compagny of tailoring, focusing on the confection of custom pieces all around the world.",
            main_subtitle_long : "Trois-Fils is a french and innovative compagny of tailoring, focusing on the confection of custom pieces all around the world. Because the fashion production is every year more ephemere, we wish to provide our consumers a quality work on which they can rely. Ecological, this alternative to the mass consumption is as well a pledge of quality and will provide you the greatest satisfaction.",
            contact_personnal : "Contact your personal tailor",



        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('Title_Page_Home').innerHTML = translation.Title_Page;
    document.getElementById('Title_Home').innerHTML = translation.Title_Home;
    document.getElementById('Subtitle_Home').innerHTML = translation.Subtitle_Home;
    document.getElementById('Button_About').innerHTML = translation.Button_About;
    document.getElementById('Tailoring_Ladies').innerHTML = translation.Tailoring_Ladies;
    document.getElementById('Tailoring_Gent').innerHTML = translation.Tailoring_Gent;
    document.getElementById('Title_Wedding').innerHTML = translation.Title_Wedding;
    document.getElementById('Title_Wedding_d').innerHTML = translation.Title_Wedding_d;
    document.getElementById('Subtitle_Wedding').innerHTML = translation.Subtitle_Wedding;
    document.getElementById('Button_Wedding').innerHTML = translation.Button_Wedding;
    document.getElementById('Title_Real').innerHTML = translation.Title_Real;
    document.getElementById('Subtitle_Real').innerHTML = translation.Subtitle_Real;
    document.getElementById('Button_Real').innerHTML = translation.Button_Real;
}

