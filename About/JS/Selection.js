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

            Order_Product : "Commander un produit",
            Vrac_Title : "Thés noirs classiques en vrac",
            Vrac_TitleA : "Thés de Chine non-fumés",
            Vrac_TitleC : "Les cocktails",
            Vrac_TitleV : "Les thés verts en vrac",

            Vrac_Title_classic : "Thés verts classiques",
            Vrac_Title1V : "Sencha",
            Vrac_Title2V : "Genmaïcha",
            Expl_Vrac1V : "Thé vert du Japon à grandes feuilles. Saveur très douce",
            Expl_Vrac2V : "Thé vert du Japon agrémenté de riz grillé et de maïs soufflé",

            Vrac_Title_classic1 : "Thés verts aromatisés",
            Vrac_Title3V : "Gin Fizz",
            Vrac_Title4V : "J'aimerais tant voir Syracuse",
            Vrac_Title5V : "Réte de la Martinique",
            Vrac_Title6V : "Thé vert à la cannelle",
            Vrac_Title7V : "Symphonie Pastorale",
            Vrac_Title8V : "Thé vert à la menthe",
            Expl_Vrac3V : "Mélange de thé vert, de gingembre, de réglisse, de citron, de citronnelle et de menthe verte. A la fois poivré et acidulé. Très rafraichissant",
            Expl_Vrac4V : "Thé vert accompagné de fruits de la passion, d'orange, de citron, de pamplemousse et de mandarine. Très frais pour l'après-midi.",
            Expl_Vrac5V : "Thé vert avec des morceaux d'ananas, du fruit de la passion et des pétales de tournesol. Délicieux l'été glacé",
            Expl_Vrac6V : "Mélange de thé vert à longue feuille de cannelle et d'orange",
            Expl_Vrac7V : "Thé vert accompagné de fruits des bois. Très aromatique et agréable l'après-midi",
            Expl_Vrac8V : "",

            Vrac_Title_classic2 : "Les exceptions",
            Vrac_Title9V : "Perle de Jade",
            Vrac_Title10V : "Yin Zhen",
            Vrac_Title11V : "Puerh",
            Vrac_Title12V : "Oolong",
            Vrac_Title13V : "Milky Oolong",
            Vrac_Title14V : "Darjeeling Hakaibari - Grand Darjeeling",
            Vrac_Title15V : "Thé déthéiné Earl Grey",
            Vrac_Title16V : "Thé déthéiné Nature",
            Expl_Vrac9V : "Infusion 5 minutes - Thé vert de Chine à feuilles roulées avec des fleurs de jasmin.",
            Expl_Vrac10V : "Infusion 5 minutes - Thé blanc: bourgeons recouverts d'un duvet blanc accompagnés de fleurs de jasmin. Goût fleuri, léger.",
            Expl_Vrac11V : "Infusion 4/5 minutes - Thé rouge de Chine de la région de YUNNAN. Faible en théine. Ideal pour les régimes.",
            Expl_Vrac12V : "Infusion 4/5 minutes - Thé semi-fermenté à longues feuilles, provenance Formose Taïwan. Goût de Châtaigne. Peut se prendre le soir.",
            Expl_Vrac13V : "A infuser 5 minutes dans de l'eau frémissante - Thé semi-fermenté avec un goût de lait délicieux, à déguster l'après-midi, origine Chine.",
            Expl_Vrac14V : "Infusion 3 minutes - L'un des meilleurs jardins de Darjeeling, arôme subtil, à déguster l'après-midi.",
            Expl_Vrac15V : "Infusion 5 minutes - Thé noir sans caféïne aromatisé à la bergamote.",
            Expl_Vrac16V : "Infusion 5 minutes - Thé noir sans caféïne nature",

            Aroma1 : "Cannelle - Caramel",
            Aroma2 : "Amandes",
            Aroma3 : "Mangue - Abricot - Pêche",
            Aroma4 : "Cassis - Mûre",
            Aroma5 : "Framboise",
            Aroma6 : "Fraise Gariguette",
            Aroma7 : "Orange douce",
            Aroma8 : "Citron",
            Aroma9 : "Violette - Rose",
            Aroma10 : "Chataîgne Grillée",
            Aroma11 : "Rhubarbe",
            Aroma12 : "Noix de coco",
            Aroma13 : "Vanille - Cerise",
            Aroma14 : "Ginseng",
            Aroma15 : "Chocolat avec morceaux",
            Aroma16 : "Orange amère",

            Vrac_Title1C : "Chaï",
            Vrac_Title2C : "Estival",
            Vrac_Title3C : "Thé de Noël",
            Vrac_Title4C : "Goût Russe",
            Vrac_Title5C : "Roméo et Juliette",
            Vrac_Title6C : "Jardin Bleu",
            Vrac_Title7C : "Thés des vieux garçons",
            Vrac_Title8C : "Quatre fruits rouges",
            Vrac_Title9C : "Fruits des bois",

            Expl_Vrac1C : "Thé de Chine non-fumé avec des épices et des écorces",
            Expl_Vrac2C : "Cocktail 'maison': thé de Chine non-fumé avec abricot,mangue, pêche",
            Expl_Vrac3C : "Mélange 'maison' de saison: orange, cannelle, clous de girofle, vanille, 4 fruits rouge",
            Expl_Vrac4C : "Thé de Chine non-fumé, avec de la bergamote et de l'orange",
            Expl_Vrac5C : "Mélange de fleurs et de thé de Chine on-fumé (rose, Ylang Ylang, jasmin, mauve).",
            Expl_Vrac6C : "Thé de Chine avec fraise, mangue, rhubarbe, bleuet",
            Expl_Vrac7C : "Pomme caramélisée, marasoquin et thé de Chine non-fumé",
            Expl_Vrac8C : "Mélange de thé de Chine non-fumé avec framboise, fraise, cerise et groseille",
            Expl_Vrac9C : "Thé de Chine non-fumé avec cassis et mûre (mélange maison)",

            Vrac_Title1 : "Assam",
            Vrac_Title2 : "Keemun",
            Vrac_Title3 : "Yunnan",
            Vrac_Title4 : "Scotland",
            Vrac_Title5 : "Irish Breakfast",
            Vrac_Title6 : "English Breakfast",
            Vrac_Title7 : "Fanning",
            Vrac_Title8 : "Royal lapsang",
            Vrac_Title9 : "Lapsang special",
            Vrac_Title10 : "Tarry Lapsang",
            Vrac_Title11 : "Earl Grey",
            Vrac_Title12 : "Russian Caravan",
            Vrac_Title13 : "Bois Chéri",
            Vrac_Title14 : "Orange Pekoe",
            Vrac_Title15 : "Darjeeling",
            Vrac_Title16 : "Kenya High Grown",
            Vrac_Title17 : "Lady Grey",

            Expl_Vrac1 : "Thé d'Inde",
            Expl_Vrac2 : "Thé de Chine noir fumé pour le soir",
            Expl_Vrac3 : "Thé de Chine noir fumé pour le matin",
            Expl_Vrac4 : "Thé de Ceylan fort pour le petit déjeuner",
            Expl_Vrac5 : "Blend Ceylan & Assam pour le matin",
            Expl_Vrac6 : "Blend Ceylan & Darjeeling pour le matin",
            Expl_Vrac7 : "Pur Ceylan très corsé pour le petit déjeuner",
            Expl_Vrac8 : "Thé de Chine légèrement fumé",
            Expl_Vrac9 : "Thé de Chine moyennement fumé",
            Expl_Vrac10 : "Thé de Chine très fumé",
            Expl_Vrac11 : "Thé de Chine avec de la bergamote",
            Expl_Vrac12 : "Blend de thés de Chine, pour le matin",
            Expl_Vrac13 : "Thé de l'Ile Maurice légèrement vanillé",
            Expl_Vrac14 : "Thé de Ceylan à feuilles longues pour toute la journée",
            Expl_Vrac15 : "Thé d'Inde, doux pour l'après-midi",
            Expl_Vrac16 : "Thé du Kenya corsé, très aromatique pour le petit déjeuner",
            Expl_Vrac17 : "Un rafraîchissant thé noir léger exhalant la saveur distincte d'agrumes de la bergamote pour offrir un thé ravivant avec un arome vibrant et des saveurs pétillantes d'orange et de citron. Lady Mary Elizabeth Grey était l'épouse du deuxième comte Grey (Earl Grey)",

            Welcome: "Notre sélection de thé en vrac",
            Welcome2: "Thés noirs aromatisés en vrac",
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
            Vrac_Title:"Classic loose black teas",
            Vrac_TitleA:"Non-smoked Chinese teas",
            Vrac_TitleC:"Cocktails",
            Vrac_TitleV:"Loose green teas",
            Vrac_Title_classic:"Classic green teas",
            Vrac_Title1V:"Sencha",
            Vrac_Title2V:"Genmaïcha",
            Expl_Vrac1V:"Japanese green tea with large leaves. Very sweet flavor",
            Expl_Vrac2V:"Japanese green tea topped with grilled rice and popcorn",
            Vrac_Title_classic1:"Flavored green teas",
            Vrac_Title3V:"Gin Fizz",
            Vrac_Title4V:"I would love to see Syracuse",
            Vrac_Title5V:"Rete of Martinique",
            Vrac_Title6V:"Green tea with cinnamon",
            Vrac_Title7V:"Pastoral Symphony",
            Vrac_Title8V:"Mint green tea",
            Expl_Vrac3V:"Blend of green tea, ginger, licorice, lemon, lemongrass and spearmint. Both peppery and tangy. Very refreshing",
            Expl_Vrac4V:"Green tea accompanied by passion fruit, orange, lemon, grapefruit and tangerine. Very cool for the afternoon.",
            Expl_Vrac5V:"Green tea with pieces of pineapple, passion fruit and sunflower petals. Delicious frozen summer",
            Expl_Vrac6V:"Green tea blend with cinnamon and orange leaves",
            Expl_Vrac7V:"Green tea accompanied by forest fruits. Very aromatic and pleasant in the afternoon",
            Expl_Vrac8V:"",
            Vrac_Title_classic2:"The exceptions",
            Vrac_Title9V:"Jade Pearl",
            Vrac_Title10V:"Yin Zhen",
            Vrac_Title11V:"Puerh",
            Vrac_Title12V:"Oolong",
            Vrac_Title13V:"Milky Oolong",
            Vrac_Title14V:"Darjeeling Hakaibari - Greater Darjeeling",
            Vrac_Title15V:"Earl Gray decaffeinated tea",
            Vrac_Title16V:"Nature tea",
            Expl_Vrac9V:"Infusion 5 minutes - Green tea from China with rolled leaves with jasmine flowers.",
            Expl_Vrac10V:"Infusion 5 minutes - White tea: buds covered with white fuzz accompanied by jasmine flowers. Flowery, light taste.",
            Expl_Vrac11V:"Infusion 4/5 minutes - Chinese red tea from the YUNNAN region. Low in theine. Ideal for diets.",
            Expl_Vrac12V:"Infusion 4/5 minutes - Semi-fermented tea with long leaves, from Formosa Taiwan. Taste of Chestnut. Can be taken in the evening.",
            Expl_Vrac13V:"To infuse for 5 minutes in simmering water - Semi-fermented tea with a delicious milk taste, to be enjoyed in the afternoon, origin China.",
            Expl_Vrac14V:"3-minute infusion - One of the best gardens in Darjeeling, subtle aroma, to be enjoyed in the afternoon.",
            Expl_Vrac15V:"Infusion 5 minutes - Black tea without caffeine flavored with bergamot.",
            Expl_Vrac16V:"5-minute infusion - Black tea without natural caffeine",
            Aroma1:"Cinnamon - Caramel",
            Aroma2:"Almonds",
            Aroma3:"Mango - Apricot - Peach",
            Aroma4:"Blackcurrant - Blackberry",
            Aroma5:"Raspberry",
            Aroma6:"Gariguette strawberry",
            Aroma7:"Sweet orange",
            Aroma8:"Lemon",
            Aroma9:"Violet - Pink",
            Aroma10:"Grilled Chestnut",
            Aroma11:"Rhubarb",
            Aroma12:"Coconut",
            Aroma13:"Vanilla - Cherry",
            Aroma14:"Ginseng",
            Aroma15:"Chocolate with pieces",
            Aroma16:"bitter orange",
            Vrac_Title1C:"Chai",
            Vrac_Title2C:"Summer",
            Vrac_Title3C:"Christmas tea",
            Vrac_Title4C:"Russian taste",
            Vrac_Title5C:"Romeo and Juliet",
            Vrac_Title6C:"Blue Garden",
            Vrac_Title7C:"Old boys teas",
            Vrac_Title8C:"Four red fruits",
            Vrac_Title9C:"Forest fruits",
            Expl_Vrac1C:"Unsmoked Chinese tea with spices and peel",
            Expl_Vrac2C:"House' cocktail: unsmoked Chinese tea with apricot, mango, peach",
            Expl_Vrac3C:"Seasonal 'house' mix: orange, cinnamon, cloves, vanilla, 4 red fruits",
            Expl_Vrac4C:"Unsmoked Chinese tea, with bergamot and orange",
            Expl_Vrac5C:"Blend of flowers and smoked Chinese tea (rose, Ylang Ylang, jasmine, mauve).",
            Expl_Vrac6C:"Chinese tea with strawberry, mango, rhubarb, blueberry",
            Expl_Vrac7C:"Caramelized apple, marasoquin and unsmoked Chinese tea",
            Expl_Vrac8C:"Unsmoked Chinese tea blend with raspberry, strawberry, cherry and currant",
            Expl_Vrac9C:"Unsmoked Chinese tea with blackcurrant and blackberry (house blend)",
            Vrac_Title1:"Assam",
            Vrac_Title2:"Keemun",
            Vrac_Title3:"Yunnan",
            Vrac_Title4:"Scotland",
            Vrac_Title5:"Irish Breakfast",
            Vrac_Title6:"English Breakfast",
            Vrac_Title7:"Fanning",
            Vrac_Title8:"Royal lapsang",
            Vrac_Title9:"Lapsang special",
            Vrac_Title10:"Tarry lapsang",
            Vrac_Title11:"Earl Gray",
            Vrac_Title12:"Russian Caravan",
            Vrac_Title13:"Bois Cheri",
            Vrac_Title14:"Orange Pekoe",
            Vrac_Title15:"Darjeeling",
            Vrac_Title16:"Kenya High Grown",
            Vrac_Title17:"Lady Gray",
            
            Expl_Vrac1:"Tea from India",
            Expl_Vrac2:"Smoked black Chinese tea for the evening",
            Expl_Vrac3:"Smoked black Chinese tea for the morning",
            Expl_Vrac4:"Strong Ceylon tea for breakfast",
            Expl_Vrac5:"Blend Ceylon & Assam for the morning",
            Expl_Vrac6:"Blend Ceylan & Darjeeling for the morning",
            Expl_Vrac7:"Very full-bodied pure Ceylon for breakfast",
            Expl_Vrac8:"Lightly smoked China tea",
            Expl_Vrac9:"Medium smoked Chinese tea",
            Expl_Vrac10:"Very smoky Chinese tea",
            Expl_Vrac11:"Chinese tea with bergamot",
            Expl_Vrac12:"Blend of Chinese teas, for the morning",
            Expl_Vrac13:"Mauritius tea lightly vanilla",
            Expl_Vrac14:"All day long leaf Ceylon tea",
            Expl_Vrac15:"Tea from India, sweet for the afternoon",
            Expl_Vrac16:"Strong Kenyan tea, very aromatic for breakfast",
            Expl_Vrac17:"A refreshing light black tea exhaling the distinct citrus flavor of bergamot to deliver an uplifting tea with a vibrant aroma and sparkling flavors of orange and lemon. Lady Mary Elizabeth Gray was the wife of the second",
            
            Welcome:"Our selection of loose tea",
            Welcome2:"Bulk flavored black teas",

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
    document.getElementById('Order_Product').innerHTML = translation.Order_Product;
    document.getElementById('Title_Page').innerHTML = translation.Title_Page;
    document.getElementById('Welcome').innerHTML = translation.Welcome;
    document.getElementById('Welcome2').innerHTML = translation.Welcome2;

    document.getElementById('Vrac_Title1').innerHTML = translation.Vrac_Title1;
    document.getElementById('Vrac_Title2').innerHTML = translation.Vrac_Title2;
    document.getElementById('Vrac_Title3').innerHTML = translation.Vrac_Title3;
    document.getElementById('Vrac_Title4').innerHTML = translation.Vrac_Title4;
    document.getElementById('Vrac_Title5').innerHTML = translation.Vrac_Title5;
    document.getElementById('Vrac_Title6').innerHTML = translation.Vrac_Title6;
    document.getElementById('Vrac_Title7').innerHTML = translation.Vrac_Title7;
    document.getElementById('Vrac_Title8').innerHTML = translation.Vrac_Title8;
    document.getElementById('Vrac_Title9').innerHTML = translation.Vrac_Title9;
    document.getElementById('Vrac_Title10').innerHTML = translation.Vrac_Title10;
    document.getElementById('Vrac_Title11').innerHTML = translation.Vrac_Title11;
    document.getElementById('Vrac_Title12').innerHTML = translation.Vrac_Title12;
    document.getElementById('Vrac_Title13').innerHTML = translation.Vrac_Title13;
    document.getElementById('Vrac_Title14').innerHTML = translation.Vrac_Title14;
    document.getElementById('Vrac_Title15').innerHTML = translation.Vrac_Title15;
    document.getElementById('Vrac_Title16').innerHTML = translation.Vrac_Title16;
    document.getElementById('Vrac_Title17').innerHTML = translation.Vrac_Title17;

    document.getElementById('Expl_Vrac1').innerHTML = translation.Expl_Vrac1;
    document.getElementById('Expl_Vrac2').innerHTML = translation.Expl_Vrac2;
    document.getElementById('Expl_Vrac3').innerHTML = translation.Expl_Vrac3;
    document.getElementById('Expl_Vrac4').innerHTML = translation.Expl_Vrac4;
    document.getElementById('Expl_Vrac5').innerHTML = translation.Expl_Vrac5;
    document.getElementById('Expl_Vrac6').innerHTML = translation.Expl_Vrac6;
    document.getElementById('Expl_Vrac7').innerHTML = translation.Expl_Vrac7;
    document.getElementById('Expl_Vrac8').innerHTML = translation.Expl_Vrac8;
    document.getElementById('Expl_Vrac9').innerHTML = translation.Expl_Vrac9;
    document.getElementById('Expl_Vrac10').innerHTML = translation.Expl_Vrac10;
    document.getElementById('Expl_Vrac11').innerHTML = translation.Expl_Vrac11;
    document.getElementById('Expl_Vrac12').innerHTML = translation.Expl_Vrac12;
    document.getElementById('Expl_Vrac13').innerHTML = translation.Expl_Vrac13;
    document.getElementById('Expl_Vrac14').innerHTML = translation.Expl_Vrac14;
    document.getElementById('Expl_Vrac15').innerHTML = translation.Expl_Vrac15;
    document.getElementById('Expl_Vrac16').innerHTML = translation.Expl_Vrac16;
    document.getElementById('Expl_Vrac17').innerHTML = translation.Expl_Vrac17;

    document.getElementById('Vrac_Title').innerHTML = translation.Vrac_Title;
    document.getElementById('Vrac_TitleA').innerHTML = translation.Vrac_TitleA;
    document.getElementById('Vrac_TitleC').innerHTML = translation.Vrac_TitleC;
    document.getElementById('Vrac_TitleV').innerHTML = translation.Vrac_TitleV;

    document.getElementById('Aroma1').innerHTML = translation.Aroma1;
    document.getElementById('Aroma2').innerHTML = translation.Aroma2;
    document.getElementById('Aroma3').innerHTML = translation.Aroma3;
    document.getElementById('Aroma4').innerHTML = translation.Aroma4;
    document.getElementById('Aroma5').innerHTML = translation.Aroma5;
    document.getElementById('Aroma6').innerHTML = translation.Aroma6;
    document.getElementById('Aroma7').innerHTML = translation.Aroma7;
    document.getElementById('Aroma8').innerHTML = translation.Aroma8;
    document.getElementById('Aroma9').innerHTML = translation.Aroma9;
    document.getElementById('Aroma10').innerHTML = translation.Aroma10;
    document.getElementById('Aroma11').innerHTML = translation.Aroma11;
    document.getElementById('Aroma12').innerHTML = translation.Aroma12;
    document.getElementById('Aroma13').innerHTML = translation.Aroma13;
    document.getElementById('Aroma14').innerHTML = translation.Aroma14;
    document.getElementById('Aroma15').innerHTML = translation.Aroma15;
    document.getElementById('Aroma16').innerHTML = translation.Aroma16;

    document.getElementById('Vrac_Title1C').innerHTML = translation.Vrac_Title1C;
    document.getElementById('Vrac_Title2C').innerHTML = translation.Vrac_Title2C;
    document.getElementById('Vrac_Title3C').innerHTML = translation.Vrac_Title3C;
    document.getElementById('Vrac_Title4C').innerHTML = translation.Vrac_Title4C;
    document.getElementById('Vrac_Title5C').innerHTML = translation.Vrac_Title5C;
    document.getElementById('Vrac_Title6C').innerHTML = translation.Vrac_Title6C;
    document.getElementById('Vrac_Title7C').innerHTML = translation.Vrac_Title7C;
    document.getElementById('Vrac_Title8C').innerHTML = translation.Vrac_Title8C;
    document.getElementById('Vrac_Title9C').innerHTML = translation.Vrac_Title9C;

    document.getElementById('Expl_Vrac1C').innerHTML = translation.Expl_Vrac1C;
    document.getElementById('Expl_Vrac2C').innerHTML = translation.Expl_Vrac2C;
    document.getElementById('Expl_Vrac3C').innerHTML = translation.Expl_Vrac3C;
    document.getElementById('Expl_Vrac4C').innerHTML = translation.Expl_Vrac4C;
    document.getElementById('Expl_Vrac5C').innerHTML = translation.Expl_Vrac5C;
    document.getElementById('Expl_Vrac6C').innerHTML = translation.Expl_Vrac6C;
    document.getElementById('Expl_Vrac7C').innerHTML = translation.Expl_Vrac7C;
    document.getElementById('Expl_Vrac8C').innerHTML = translation.Expl_Vrac8C;
    document.getElementById('Expl_Vrac9C').innerHTML = translation.Expl_Vrac9C;

    document.getElementById('Vrac_Title1V').innerHTML = translation.Vrac_Title1V;
    document.getElementById('Vrac_Title2V').innerHTML = translation.Vrac_Title2V;
    document.getElementById('Vrac_Title3V').innerHTML = translation.Vrac_Title3V;
    document.getElementById('Vrac_Title4V').innerHTML = translation.Vrac_Title4V;
    document.getElementById('Vrac_Title5V').innerHTML = translation.Vrac_Title5V;
    document.getElementById('Vrac_Title6V').innerHTML = translation.Vrac_Title6V;
    document.getElementById('Vrac_Title7V').innerHTML = translation.Vrac_Title7V;
    document.getElementById('Vrac_Title8V').innerHTML = translation.Vrac_Title8V;
    document.getElementById('Vrac_Title9V').innerHTML = translation.Vrac_Title9V;
    document.getElementById('Vrac_Title10V').innerHTML = translation.Vrac_Title10V;
    document.getElementById('Vrac_Title11V').innerHTML = translation.Vrac_Title11V;
    document.getElementById('Vrac_Title12V').innerHTML = translation.Vrac_Title12V;
    document.getElementById('Vrac_Title13V').innerHTML = translation.Vrac_Title13V;
    document.getElementById('Vrac_Title14V').innerHTML = translation.Vrac_Title14V;
    document.getElementById('Vrac_Title15V').innerHTML = translation.Vrac_Title15V;
    document.getElementById('Vrac_Title16V').innerHTML = translation.Vrac_Title16V;
    document.getElementById('Expl_Vrac1V').innerHTML = translation.Expl_Vrac1V;
    document.getElementById('Expl_Vrac2V').innerHTML = translation.Expl_Vrac2V;
    document.getElementById('Expl_Vrac3V').innerHTML = translation.Expl_Vrac3V;
    document.getElementById('Expl_Vrac4V').innerHTML = translation.Expl_Vrac4V;
    document.getElementById('Expl_Vrac5V').innerHTML = translation.Expl_Vrac5V;
    document.getElementById('Expl_Vrac6V').innerHTML = translation.Expl_Vrac6V;
    document.getElementById('Expl_Vrac7V').innerHTML = translation.Expl_Vrac7V;
    document.getElementById('Expl_Vrac8V').innerHTML = translation.Expl_Vrac8V;
    document.getElementById('Expl_Vrac9V').innerHTML = translation.Expl_Vrac9V;
    document.getElementById('Expl_Vrac10V').innerHTML = translation.Expl_Vrac10V;
    document.getElementById('Expl_Vrac11V').innerHTML = translation.Expl_Vrac11V;
    document.getElementById('Expl_Vrac12V').innerHTML = translation.Expl_Vrac12V;
    document.getElementById('Expl_Vrac13V').innerHTML = translation.Expl_Vrac13V;
    document.getElementById('Expl_Vrac14V').innerHTML = translation.Expl_Vrac14V;
    document.getElementById('Expl_Vrac15V').innerHTML = translation.Expl_Vrac15V;
    document.getElementById('Expl_Vrac16V').innerHTML = translation.Expl_Vrac16V;

    document.getElementById('Vrac_Title_classic').innerHTML = translation.Vrac_Title_classic;
    document.getElementById('Vrac_Title_classic2').innerHTML = translation.Vrac_Title_classic2;
    document.getElementById('Vrac_Title_classic1').innerHTML = translation.Vrac_Title_classic1;
}