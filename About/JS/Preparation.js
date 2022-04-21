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

            Paragraph1 : "1 - Ebouillanter la théière et n’utiliser, si possible, qu’une théière par type de thé.",
            Paragraph2 : "2 - Mettre dans la théière un sachet ou une cuillerée de thé en vrac par personne, plus une pour la théière; replacer le couvercle et laisser les feuilles de thé se développer de quelques secondes à quelques minutes.",
            Paragraph3 : "3 - Mettre de l’eau fraîche et pure (de préférence de l’eau minérale ou filtrée) à chauffer et la verser à température adéquate sur le thé; la température de l’eau dépend toujours du type de thé à préparer.",
            Paragraph4 : "4 - Laisser infuser de 30 secondes à 5 minutes, suivant le thé.",
            Paragraph5 : "5 - Retirer le thé (sachet ou filtre); remuer doucement et servir chaud.",
            NotaB : "N.B. Certains thés verts ou blancs, de même que les thés de la cérémonie du thé (Chine, Corée, Maroc), ou le thé du Samovar (Russie) nécessitent une préparation spécifique. On ne fait infuser un thé qu’une seule fois et en un temps limité, -en-dehors de quelques très grands Oolongs et de la plupart des thés verts et blancs (souvent préparés dans les «zhongs»).",
            legend1 : "Cérémonie du thé, Japon",
            legend2 : "La pratique du thé infusé en Chine est apparue sous la dynastie Ming",
            Advises : "Quelques conseils pour déguster votre thé:",
            Advises1 : "N’utilisez pas de théière en aluminium, car cela effacerait le goût du thé; préférez plutôt la porcelaine ou la terre cuite.",
            Advises2 : "N’utilisez, si possible, qu’une théière par type de thé. Ne lavez jamais votre théière avec des détergents; rincez-la simplement à l’eau claire et laissez-la sécher.",
            Advises3 : "Ne laissez pas bouillir l’eau, l’oxygène s’évaporerait et affadirait votre thé; laissez l’eau frémir un court instant, puis adaptez en fonction du thé: eau frémissante pour les thés noirs, oolongs, parfumés et certains thés verts; entre 60 et 80° pour quelques thés verts ou blancs d’exception. La force d’un thé ne dépend pas du temps d’infusion, mais de la quantité de thé que vous mettez dans la théière; le temps d’infusion est aussi fonction de la taille de la feuille. Adaptez donc le nombre de cuillères à votre goût. Conservez votre thé dans un endroit frais, à l’abri de la lumière et de toutes les odeurs, dans un emballage hermétique.",
            Advises4 : "Bon thé… Bonne dégustation.",

            Welcome: "Les cinq règles d’or de la préparation d’un bon thé",
            Finalize : "Finaliser",
            No_order : "Vous n'avez pas de commande confirmée pour le moment.",
            Title_dashboard : "Naviguez facilement au sein de votre espace!",
            Profile : "Mon profile",
            Measures : "Mes mesures",
            Orders : "Mes commandes",
            Contact : "contacter la boutique",
            Title_Page : "Les Thés d'Emilie | Une sélection des meilleurs thés de Twinings | Histoire du thé",
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
            Paragraph1 : "1 - Boil the teapot and, if possible, use only one teapot per type of tea.",
Paragraph2 :  "2 - Put in the teapot a bag or a spoonful of loose tea per person, plus one for the teapot; replace the lid and let the tea leaves develop from a few seconds to a few minutes.",
Paragraph3 :  "3 - Put fresh and pure water (preferably mineral or filtered water) to heat and pour it to the appropriate temperature over the tea; the water temperature always depends on the type of tea to be prepared." ,
Paragraph4 :  "4 - Let infuse for 30 seconds to 5 minutes, depending on the tea.",
Paragraph5 :  "5 - Remove the tea (bag or filter); stir gently and serve hot.",
NotaB :  "NB Some green or white teas, as well as tea ceremony teas (China, Korea, Morocco), or tea from Samovar (Russia) require specific preparation. A tea is infused only once and in a limited time, - apart from a few very large Oolongs and most green and white teas (often prepared in 'zhongs'). ",
legend1 :  "Tea ceremony, Japan",
legend2 :  "The practice of brewed tea in China appeared in the Ming Dynasty",
Advises :  "Some tips for enjoying your tea",
Advises1 :  "Do not use an aluminum teapot, as this will erase the taste of the tea; prefer porcelain or terracotta.",
Advises2 :  "If possible, use only one teapot per type of tea. Never wash your teapot with detergents; just rinse it with clean water and let it dry.",
Advises3 :  "Do not let the water boil, the oxygen will evaporate and weaken your tea; let the water simmer for a short time, then adjust according to the tea",
Advises4 :  "Good tea ... Good tasting.",
Welcome:  "The five golden rules of making good tea",

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
    document.getElementById('Welcome').innerHTML = translation.Welcome;
    document.getElementById('Paragraph1').innerHTML = translation.Paragraph1;
    document.getElementById('Paragraph2').innerHTML = translation.Paragraph2;
    document.getElementById('Paragraph3').innerHTML = translation.Paragraph3;
    document.getElementById('Paragraph4').innerHTML = translation.Paragraph4;
    document.getElementById('Paragraph5').innerHTML = translation.Paragraph5;   
    document.getElementById('NotaB').innerHTML = translation.NotaB;   
    document.getElementById('legend1').innerHTML = translation.legend1;   
    document.getElementById('legend2').innerHTML = translation.legend2;
    document.getElementById('Advises').innerHTML = translation.Advises;
    document.getElementById('Advises1').innerHTML = translation.Advises1;
    document.getElementById('Advises2').innerHTML = translation.Advises2;
    document.getElementById('Advises3').innerHTML = translation.Advises3;
    document.getElementById('Advises4').innerHTML = translation.Advises4;

}