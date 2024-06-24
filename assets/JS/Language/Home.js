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
            Title_Page : "Les thés d'Emilie | Tea in Paris",
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
            Contact : "Contactez la boutique",
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
            Title_Shop : "Une coupe de thé?",
            Subtitle_shop : "Située au centre de Paris, à un pas de l'Opera Garnier, la boutique 'Les thés d'Emilie' vous emportera dans un univers extraordinaire. Vous y trouverez des thés d'exception qui ravirons vos sens. Rejoinez nous vite et découvrez notre sélection.",
            Button_shop : "Découvrir nos sélections",
            Title_bienfaits : "Bienfaits du thé",
            Subtitle_bienfaits : "Boire du thé vert est de plus en plus recommandé en raison de sa forte teneur en cathéchines, polyphénols présents en grandes quantités dans le thé vert. Ces composants, puissants anti oxydants qui s'opposent aux effets des radicaux libres, diminueraient les risques cardio vasculaires en raison de leurs effets cardio protecteurs.",
            Button_bienfaits : "En savoir plus",
            Title_Real : "Découvrez l'art du thé",
            Subtitle_Real : "'Ne laissez pas bouillir l’eau, l’oxygène s’évaporerait et affadirait votre thé; laissez l’eau frémir un court instant, puis adaptez en fonction du thé: eau frémissante pour les thés noirs, oolongs, parfumés et certains thés verts; entre 60 et 80° pour quelques thés verts ou blancs d’exception.'",
            Button_Real : "Read more",
            Slogan : "Bienvenue chez Les Thés d'Emilie",
            OurShop : "Notre boutique",
            OurShop1 : "La boutique Twinings a été créée en 1910 par un descendant de la famille Twining.",
            OurShop2 : "Elle s'appelle désormais Les thés d'Emilie et propose en premier lieu les thés Twinings, une variété de produits exclusifs importés d'Angleterre en sachets et en boîtes, théières, tasses et gourmandises.",
            history : "L'histoire du thé a contribué au développement économique de l'Angleterre. Elle est liée à une ambiance et une manière de vivre.",
            history1 : "Notre boutique s'inspire de cette histoire, de cette recherche qui à mené au cours du temps la production et l'essort de thés d'exception.",
            selectionProduits : "Notre sélection de produits",
            selectionProduits1 : "Le thé des connaisseurs depuis 1706 vous propose une sélection de ses meilleurs thés!",
            selectionProduits2 : "Vous trouverez également dans notre boutique des accessoires de qualité pour la préparatio du thé, des souvenirs de votre passage à Paris!",
            Tea1_title : "Thé Darjeeling Grand Cru",
            Tea2_title : "Thé Earl Grey",
            Tea3_title : "Thé English Breakfast",
            Tea1_description : "Sélection des plus grands jardins des contreforts del'Himalaya. D'une saveur douce et fruitée, il convient à tous moments de la journée. A apprécier nature.",
            Tea2_description : "A la saveur unique et fruitée, grande spécialité de Twinings, préparé à partir des meilleurs thés d'Orient et parfumé à la bergamote. A déguster nature ou avec du citron.",
            Tea3_description : "Corsé et tonique grâce à son mélange de thés indiens (Assam) et de thés de Ceylan. Idéal le matin, avec du lait ou du citron.",
            TraditionTitle : "La tradition du thé",
            TraditionSub1 : "L'histoire du thé a contribué au développement économique de l'Angleterre. Elle est liée à une ambiance et une manière de vivre.",
            TraditionSub2 : "Notre boutique s'inspire de cette histoire, de cette recherche qui à mené au cours du temps la production et l'essort de thés d'exception.",
            see_all : "Voir tous nos produits",
            history_button : "L'histoire du thé",
            more_button : "En savoir plus",
        } 
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    } else {
        let translation = {
            History : "History of tea",
            Benefits : "Tea & health ",
            Selection : "Our tea & Selection ",
            Preparation : "Préparation of tea",
            Title_Page : "Les thés d'Emilie | Thés à Paris",
            Title_Home : "Tailoring",
            Contact : "Contact the shop",
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
            More : "About us",
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
            Our_tea : "Our teas",
            Accessoires : "All our accessories",
            Souvenirs : "A little 'souvenir'",
            Title_Shop : "A cup of tea at home",
            Subtitle_shop : "Located in paris, few streat from the Opera Garnier, the shop of 'Les thés d'Emilie' will charm you with its singular atmosphere. In this shop, you will find a tea of exception that will challenge your senses. Join us and discover our selection of tea.",
            Button_shop : "Discover the tea",
            Title_bienfaits : "Benefits of tea",
            Subtitle_bienfaits : "Drinking green tea is increasingly recommended due to its high content of cathechins, polyphenols found in large quantities in green tea. These components, powerful antioxidants that oppose the effects of free radicals, and would reduce cardiovascular risks because of their cardio protective effects.",
            Button_bienfaits : "Read more",
            Title_Real : "Discover the art of tea",
            Subtitle_Real : "Do not let the water boil, the oxygen will evaporate and make your tea weak; let the water simmer for a short time, then adapt according to the tea: simmering water for black teas, oolongs, flavored teas and certain green teas; between 60 and 80 ° for some exceptional green or white teas.",
            Button_Real : "Read more",
            Slogan : "Welcome to 'Les Thés d'Emilie'",
            OurShop : "Our shop",
            OurShop1 : "The Twinings boutique was established in 1910 by a descendant of the Twining family.",
            OurShop2 : "It is now called Les thés d'Emilie and primarily offers Twinings teas, a variety of exclusive products imported from England in bags and boxes, teapots, cups and delicacies.",
            history : "The history of tea has contributed to the economic development of England. It is linked to an atmosphere and a way of life.",
            history1 : "Our shop is inspired by this history, this research leading over time to the production and development of exceptional teas.",
            selectionProduits : "Our selection of products",
            selectionProduits1 : "The tea of initiates offers you since 1706 a selection of its best teas!",
            selectionProduits2 : "You will also find in our shop quality accessories for the preparation of tea, and souvenirs of your stay in Paris!",
            Tea1_title : "Tea Darjeeling Grand Cru",
            Tea2_title : "Tea Earl Grey",
            Tea3_title : "Tea English Breakfast",
            Tea1_description : "Selection of the greatest gardens in the Himalayan foothills. With a sweet and fruity flavor, it is suitable for all times of the day. To appreciate plain.",
            Tea2_description : "With a unique and fruity flavor, a great specialty of Twinings, prepared from the best teas from the Orient and flavored with bergamot. To be enjoyed plain or with lemon.",
            Tea3_description : "Full-bodied and tonic thanks to its blend of Indian teas (Assam) and Ceylon teas. Ideal in the morning, with milk or lemon.",
            TraditionTitle : "The tradition of tea",
            TraditionSub1 : "The history of tea has contributed to the economic development of England. It is associated to an atmosphere and a way of living.",
            TraditionSub2 : "Our shop is inspired by this history, this research leading over time to the production and development of exceptional teas.",
            see_all : "See all our products",
            history_button : "The history of tea",
            more_button : "Read more",
        }
        display_footer(translation);
        insert_the_HTML(translation);
        User_logged(translation);
    }

}

function insert_the_HTML(translation){
    document.getElementById('see_all').innerHTML = translation.see_all;
    document.getElementById('history_button').innerHTML = translation.history_button;
    document.getElementById('more_button').innerHTML = translation.more_button;
    document.getElementById('Title_Page_Home').innerHTML = translation.Title_Page;
    document.getElementById('Title_bienfaits').innerHTML = translation.Title_bienfaits;
    document.getElementById('Subtitle_bienfaits').innerHTML = translation.Subtitle_bienfaits;
    document.getElementById('Button_bienfaits').innerHTML = translation.Button_bienfaits;
    document.getElementById('Slogan').innerHTML = translation.Slogan;
    document.getElementById('OurShop').innerHTML = translation.OurShop;
    document.getElementById('OurShop1').innerHTML = translation.OurShop1;
    document.getElementById('OurShop2').innerHTML = translation.OurShop2;
    document.getElementById('history').innerHTML = translation.history;
    document.getElementById('history1').innerHTML = translation.history1;
    document.getElementById('selectionProduits').innerHTML = translation.selectionProduits;
    document.getElementById('selectionProduits1').innerHTML = translation.selectionProduits1;
    document.getElementById('selectionProduits2').innerHTML = translation.selectionProduits2;
    document.getElementById('Tea1_title').innerHTML = translation.Tea1_title;
    document.getElementById('Tea2_title').innerHTML = translation.Tea2_title;
    document.getElementById('Tea3_title').innerHTML = translation.Tea3_title;
    document.getElementById('Tea1_description').innerHTML = translation.Tea1_description;
    document.getElementById('Tea2_description').innerHTML = translation.Tea2_description;
    document.getElementById('Tea3_description').innerHTML = translation.Tea3_description;
    document.getElementById('TraditionTitle').innerHTML = translation.TraditionTitle;
    document.getElementById('TraditionSub1').innerHTML = translation.TraditionSub1;
    document.getElementById('TraditionSub2').innerHTML = translation.TraditionSub2;



}

