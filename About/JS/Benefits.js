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

            greentea : "Le thé vert",
            meditation : "Méditation",
            Presentation1 : "Les bienfaits du thé vert",
            Presentation2 : "Boire du thé vert est de plus en plus recommandé en raison de sa forte teneur en cathéchines, polyphénols présents en grandes quantités dans le thé vert.",
            Presentation3: "Ces composants, puissants anti oxydants qui s'opposent aux effets des radicaux libres, diminueraient les risques cardio vasculaires en raison de leurs effets cardio protecteurs.",
            Selectionbtn : "Nos thés et sélections",
            Welcome: "Restez en bonne santé en buvant du thé",
            Description: "Le thé augmente la vivacité de l’esprit, affine les perceptions, accroît la résistance physique et intellectuelle, élimine la fatigue. Le thé peut faciliter la digestion, activer l’élimination des matières grasses, favoriser la circulation rénale. De même, il peut exercer une action bénéfique sur le système circulatoire, et grâce à sa richesse en fluor, une action préventive de la carie dentaire, notamment chez les enfants.",
            Description1 : "«Le thé éveille les humeurs et les pensées sages. Il rafraîchit le corps et apaise l’esprit. Si tu es abattu, le thé te rendra la force». Empereur Chen-Nung.",
            Description2 : "Le thé est une boisson saine, stimulante et diuétique.",
            Description6 : "Saine: Les feuilles de thé contiennent des vitamines A, B, C (surtout le thé vert), K, P et PP et de la chlorophylle. Elles sont riches en fluor qui prévient les caries dentaires.",
            Description7 : "Stimulante : Elles contiennent deux composants principaux : la théine et les tannins dont les effets stimulants sont appréciables. La théine a une action plus marquée sur le cerveau et sur le système nerveux central. Le thé stimule, il n’excite pas.",
            Description8 : "Diurétique : le thé est une infusion sans calories et sans sodium, il dissout les graisses alimentaires et aide la digestion. Le thé convient donc parfaitement aux régimes sans sel.",
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

            History : "History of tea",
            Benefits : "Tea & health ",
            Selection : "Our tea & Selection ",
            Preparation : "Préparation of tea ",
            Boutique : "Our shop",

            greentea : "Green tea",
            meditation : "Meditation",
            Presentation1 : "Benefits of green tea",
            Presentation2 : "Drinking green tea is more and more recommended because of its high content of cathechins, polyphenols found in large quantities in green tea.",
            Presentation3: "These components, powerful antioxidants which oppose the effects of free radicals, would reduce cardiovascular risks due to their cardio protective effects.",
            Selectionbtn : "Our tea and selection",
            Welcome: "Stay healthy drinking tea!",
            Description: "Tea increases alertness of the mind, refines perceptions, increases physical and intellectual stamina, eliminates fatigue. Tea can aid digestion, activate the elimination of fat, promote kidney circulation. Likewise, it can exert a beneficial action on the circulatory system, and thanks to its richness in fluorine, a preventive action of dental caries, especially in children.",
            Description1 : "«Tea awakens moods and wise thoughts. It refreshes the body and calms the mind. If you are downcast, the tea will restore your strength ”. Emperor Chen-Nung.",
            Description2 : "Tea is a healthy, stimulating and diuetic drink.",
            Description6 : "Healthy: Tea leaves contain vitamins A, B, C (especially green tea), K, P and PP and chlorophyll. They are rich in fluoride which prevents dental caries",
            Description7 : "Stimulant: They contain two main components: theine and tannins, the stimulating effects of which are appreciable. Theine has a more marked action on the brain and on the central nervous system. Tea stimulates, it does not excite.",
            Description8 : "Diuretic: tea is an infusion without calories and sodium, it dissolves dietary fat and helps digestion. The tea is therefore ideal for diets without salt.",
            
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
    document.getElementById('greentea').innerHTML = translation.greentea;
    document.getElementById('meditation').innerHTML = translation.meditation;
    document.getElementById('Description').innerHTML = translation.Description;
    document.getElementById('Description1').innerHTML = translation.Description1;
    document.getElementById('Description2').innerHTML = translation.Description2;
    document.getElementById('Description6').innerHTML = translation.Description6;
    document.getElementById('Description7').innerHTML = translation.Description7;
    document.getElementById('Description8').innerHTML = translation.Description8;
    document.getElementById('Welcome').innerHTML = translation.Welcome;
    document.getElementById('Presentation1').innerHTML = translation.Presentation1;
    document.getElementById('Presentationsub2').innerHTML = translation.Presentation2;
    document.getElementById('Presentationsub3').innerHTML = translation.Presentation3;
    document.getElementById('Selectionbtn').innerHTML = translation.Selectionbtn;
}