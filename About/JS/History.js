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

            tradition5 : "La manufacture du thé",
            tradition4 : "La cueillette",
            tradition3 : "Les grands pays producteurs",
            tradition2 : "La culture du théier",
            tradition1 : "La route du thé",
            tradition: "Légende d'un breuvage millénaire",
            Paragraph1 : "Selon la légende chinoise, l’empereur Chen-Nung, connu sous le nom de «Divin Moissonneur», très strict sur le point de l’hygiène, ne buvait que de l’eau bouillie. Un jour de l’an 2737 avant J.C., l’empereur s’était assis pour prendre repos à l’ombre d’un théier sauvage que le vent caressait; quelques feuilles s’égarèrent dans la tasse impériale. Il la but et il se sentit envahir par un bien-être indicible. Le thé venait de naître.",
            Paragraph2 : "Au quatrième siècle de notre ère, le thé était en Chine une boisson populaire, et huitième siècle, devint boisson royale. La noblesse l’adopta comme l’une des distractions élégantes du moment; le poète Lu Yu, à la grande époque de la Dynastie Tang, a écrit le premier livre sur le thé: «Ch’a King» ou «Code du thé».",
            Paragraph3 : "Au Japon, c’est surtout à partir du neuvième siècle que le thé fut introduit, par un moine bouddhiste, Saicho. Pour les Japonais, le thé est plus qu’une boisson. La cérémonie du thé ayant pour but d’amener l’esprit à trouver la paix a fort heureusement franchi les siècles et les frontières.",
            Paragraph4 : "Le thé gagné, par la route des caravanes, tout le pays mongol, l’Iran, le monde musulman et la Russie avant que l’Europe apprît à le connaître. Ce n’est guère qu’en 1610 que le thé marqua le début d’une expansion remarquable dans tout le monde occidental. La Compagnie des Indes Orientales, engageant des relations régulières avec l’Extrême-Orient, introduisit le thé en Hollande en 1610, en France en 1636, puis en Angleterre en 1650. En France, le thé acquit très vite un degré de popularité très élevé. Déjà le chancelier Séguier, Racine, Madame de Genlis, ainsi que le cardinal Mazarin étaient de fidèles adeptes du thé. D’après les lettres de Madame de Sévigné, l’habitude d’ajouter du lait au thé vint de France, où la marquise de la Sablière inaugura cette mode répandue dans le monde. Au dix-huitième siècle, le thé devint en Angleterre boisson nationale. Ce serait la reine Victoria qui aurait introduit l’usage de boire le thé à cinq heures. Le thé se mêle aussi à l’histoire par la fameuse «Boston Tea Party», le 16 décembre 1773, qui fut le premier acte de la guerre d’indépendance des Etats-Unis. Au début du dix-neuvième siècle, la Chine était encore pratiquement le seul pays fournisseur de thé au monde.",
            Paragraph5 : "Ce n’est qu’en 1834 que la culture du thé fut introduite en Inde par la Compagnie anglaise des Indes Orientales, dans la région d’ASSAM, située au nord-est du pays, et plus tard à Ceylan, en 1857, puis d’autres pays en Asie, en Afrique et en Amérique du Sud. La concurrence entre les armateurs pour le transport rapide du thé entraîna de véritables courses de vitesse sur les routes maritimes de l’Extrême-Orient. Ainsi naquirent les fameuses courses de «Tea-Clippers» ou «China Clippers».",
            Paragraph6 : "Au vingtième siècle, le thé devint la boisson la plus consommée au monde: au moins 700 milliards de tasses par an. L’histoire du thé fut toujours étroitement liée à celle du monde, sa diffusion ayant eu pour conséquence de rapprocher des peuples aux philosophies et religions très diverses.",
            Paragraph7 : "Le théier, Thea Sinensis (théier chinois en latin), originaire de l’Asie, est du genre Camellia de la famille des Théacées, Camellia Sinenis. En son état sauvage, le théier revêt la forme d’un arbre qui, grâce à des tailles constantes pour faciliter la cueillette, se transforme en un arbrisseau muni de jeunes bourgeons pointus. Ce sont les jeunes bourgeons qui produiront le thé. Le théier, dont l’aire d’extension est assez large, puisqu’elle est comprise entre 42° de latitude Nord et 31° de latitude Sud, se plaît dans les régions au climat chaud et humide, avec une bonne alternance de soleil et de pluies régulières. La culture du théier se pratique en plaine ou jusqu’à 3000 m d’altitude. Les sols les plus producteurs sont meubles, riches en humus ou volcaniques.",
            Paragraph8 : "Le principal pays producteur est la Chine, suivie de l’Inde, le Sri Lanka, Le Kenya et la Turquie, représentant plus de 75% de la production mondiale.",
            Paragraph9 : "Pays de grande tradition de thé et, historiquement, le plus ancien producteur et exportateur. Les principales régions de production sont dans le sud : le Yunnan, Anhui, Fujian (grande région productrice de multiples thés verts, de wulongs, de thés au jasmin et du fameux Souchong, qui, une fois fumé au bois d’épicéas, devientCarte_the le LAPSANG SOUCHONG fumé), le Zhejiang (région productrice essentiellement de thés verts, Guangxi (on y trouve surtout le thé noir utilisé pour la fabrication des thés parfumés), le Hunan, Sichuan et Hubei (régions connues plus particulièrement pour la confection des briques de thé, ainsi que pour le célèbre thé jaune YIN ZHEN), Guandong (région productrice de OOLONGS et de quelques thés de Chine aromatisés.",
            Paragraph10 : "Les premiers jardins datent du début du XIXe siècle. Très rapidement l’Inde est devenue le premier producteur mondial. On dénombre trois principales régions productrice : ASSAM: Région de plaines situées au nord-est de l’Inde, les thés offrent une liqueur forte, riche vivifiante, pleine de flaveurs. DARJEELING : Région située au nord-est de l’Inde, sur les flancs de l’Himalaya, elle offre des thés aux bouquets exquis. NILGIRI : Région située sur les montagnes du sud du pays, dont les thés offrent une flaveur délicate. D’autres régions telles que le Cachar, l’Orissa, le Kangra, le Dooars, le Terai, l’Arunachal Pradesh… produisent également du thé.",
            Paragraph11 : "Le développement de la culture du thé date de 1825, avec quatre districts principaux: Dimbula, Nuwara Eliya, Uva et Kandy.",
            Paragraph12: "Avec son sol particulièrement riche, le Kenya a entrepris la culture du thé en 1925, bénéficiant de l’influence anglaise, sa progression spectaculaire en quantité et en qualité en fait un important exportateur mondial. KERICHO et LIMURU sont les districts principaux, où les récoltes sont essentiellement axées sur des thés noirs à feuille brisée.",
            Paragraph13 : "Pays de grandes traditions du thé et de céramiques pour le thé, d’où les fameuses cérémonies du thé.",
            Paragraph14 : "",
            Paragraph15 : "Fameuse pour ses Oolongs très variés",
            Paragraph16 : "Avec le Burundi, le Cameroun, le Mozambique, le Malawi, l’Ouganda, le Rwanda, la Tanzanie.",
            Paragraph17 : "Avec l’Argentine, le Brésil, le Pérou",
            Paragraph18 : "Avec l'Australie et la Papouasie",
            Paragraph19 : "La cueillette s’effectue le plus souvent par des femmes à la main et plusieurs fois par an, le temps que le théier se renouvelle (flush). Les feuilles les plus jeunes sont vert clair. Ce sont les plus riches en substance et celles qui fournissent la boisson la plus goûteuse et la plus raffinée. A l’extrémité des branches se trouve un bourgeon recouvert d’un duvet blanchâtre, le PEKOE (du chinois PAK-HO). Ce bourgeons est particulièrement recherché. Plus on redescend sur la branche, plus les feuilles sont larges et moins la boisson sera savoureuse. La cueillette impériale consiste à ne cueillir que le bourgeon terminal, ainsi que la feuille la plus proche, la cueillette fine le Pekoe et les deux feuilles qui lui sont le plus proche, et la cueillette classique le bourgeon terminal arrivé à maturité et les trois ou quatre feuilles qui lui sont le plus proche.",
            Paragraph20 : "Les différentes sortes de thés sont obtenues en traitant différemment les feuilles récoltées. Les thés sont classés selon qu’il s’agit de feuilles entières (Leaf), les feuilles brisées (Broken), les feuilles broyées (Fannings o",
            Paragraph21 : "On distingue les grades suivants: FOP: Flowery Orange Pekoe ; GFOP: Golden Flowery Orange Pekoe (avec plus de feuilles dorées) ; TGFOP: Tippy Golden Flowery Orange Pekoe, dont toutes les feuilles sont dorées. ; OP: Orange Pekoe: feuilles matures et noires; SOUCHONG: Grandes feuilles roulées dans le sens de la longueur ; FP: Flowery Pekoe, avec des feuilles entières et le bourgeon terminal. ; P: Pekoe, grade obtenu avec des feuilles «matures».",
            Paragraph22 : "Si le thé noir est fermenté, le thé vert, lui ne l’est pas. Les thés semi-fermentés, appelés aussi Oolong ou Wulong, ou thé Bleu-Vert, ces thés subissent une préparation orthodoxe avec une fermentation allant de 15% à 60% selon les thés.",
            Paragraph23 : "Les feuilles bénéficient d’un traitement «d’étouffée» ou d’entassement qui va favoriser une courte fermentation, cette étape simple donne aux feuilles cet aspect argenté aux reflets parfois dorés et ce goût unique et incomparable.",
            Paragraph24 : "Le thé subit deux opérations; flétrissage et séchage immédiat, ces deux opérations se faisant la plupart du temps en plein air.",
            Paragraph25 : "Les thés parfumés représentent plus du tiers de la consommation mondiale ; leur origine est chinoise, avec les thés aux fleurs (jasmin, rose, chrysanthèmes). En Europe, l’idée a été prolongée avec les thés aux fruits, au premier rang desquels le fameux Earl Grey (thé noir à l’huile essentielle de Bergamote).",

            Paragraphtitle9 : "La Chine",
            Paragraphtitle10 : "L'Inde",
            Paragraphtitle11 : "L’ile de Ceylan - «SRI LANKA»",
            Paragraphtitle12 : "Le Kenya",
            Paragraphtitle13 : "La Corée et le Japon",
            Paragraphtitle14 : "L'indonésie (Java et Sumatra)",
            Paragraphtitle15 : "L’ile de Formose (TAIWAN)",
            Paragraphtitle16 : "L'Afrique",
            Paragraphtitle17 : "L'amérique du sud",
            Paragraphtitle18 : "L'Océanie",
            Paragraphtitle19 : "Les thés noirs",
            Paragraphtitle20 : "Les thés verts",
            Paragraphtitle21 : "Les thés jaunes",
            Paragraphtitle22 : "Les thés blancs",
            Paragraphtitle23 : "Les thés parfumés",

            legend1 : "La manufacture du thé ASSAM",
            legend2 : "Boston Tea Party",
            legend3 : "Tea Clipper",
            legend4 : "Plantation de thé au Sri Lanka",
            Welcome: "La petite histoire du thé",
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
            History : "Histoire du thé",
            Benefits : "Thé et santé",
            Selection : "Nos thés & Séléctions",
            Preparation : "Préparation du thé",
            Boutique : "Notre boutique",

            tradition5 : "The tea factory",
tradition4 :  "Gathering",
tradition3 :  "The major producing countries",
tradition2 :  "The culture of the tea tree",
tradition1 :  "The tea route",
tradition:  "Legend of a thousand-year-old beverage",
Paragraph1 :  "According to Chinese legend, Emperor Chen-Nung, known as the 'Divine Harvester', was very strict about hygiene, and drank only boiled water. One day in 2737 BC, the emperor sat down to take a rest under the shade of a wild tea tree caressed by the wind; a few leaves got lost in the imperial cup. He drank it and he felt himself overcome by an indescribable well-being. Tea had just been born.",
Paragraph2 :  "In the fourth century AD, tea was a popular drink in China, and the eighth century became a royal drink. The nobility adopted it as one of the elegant distractions of the day; the poet Lu Yu, in the heyday of the Tang Dynasty, wrote the first book on tea: 'Ch’a King' or 'Code of tea'. ",
Paragraph3: "In Japan, it was especially from the ninth century that tea was introduced by a Buddhist monk, Saicho. For the Japanese, tea is more than a drink. The tea ceremony aimed at luckily, bringing the spirit to find peace has crossed centuries and borders. ",
Paragraph4: "The tea gained, by the caravan route, all the Mongolian country, Iran, the Moslem world and Russia before Europe learned to know it. It was not until 1610 that tea marked the beginning of a remarkable expansion throughout the Western world.The East India Company, entering into regular relations with the Far East, introduced tea to Holland in 1610, to France in 1636, and then to England in 1650. In France, tea very quickly acquired a very high degree of popularity. Chancellor Séguier, Racine, Madame de Genlis, as well as Cardinal Mazarin were already faithful followers of tea. According to the letters of Madame de Sévigné, the The habit of adding milk to tea came from France, where the Marquise de la Sablière inaugurated this worldwide fashion. In the eighteenth century, tea became the national drink in England. It would be Queen Victoria who introduced it. custom of drinking tea at five o'clock Tea is also part of the story by the famous 'Boston Tea Party' on December 16, 1773, which was the first act of the American Revolutionary War. At the start of the nineteenth century, China was still virtually the only tea supplier country in the world. ",
Paragraph5: "It was not until 1834 that tea cultivation was introduced in India by the English East India Company, in the region of ASSAM, located in the northeast of the country, and later in Ceylon, in 1857, followed by other countries in Asia, Africa and South America.Competition between shipowners for the rapid transport of tea led to real speed races on the sea routes of the Far East. Thus were born the famous 'Tea-Clippers' or 'China Clippers' races. ",
Paragraph6: "In the twentieth century, tea became the most widely consumed drink in the world: at least 700 billion cups per year. The history of tea has always been closely linked to that of the world, its diffusion having resulted in bringing people closer together. peoples with very diverse philosophies and religions. ",
Paragraph7: "The tea plant, Thea Sinensis (Chinese tea plant in Latin), native to Asia, is of the Camellia genus of the Teaaceae family, Camellia Sinenis. In its wild state, the tea plant takes the form of a tree which, thanks to constant pruning to facilitate picking, turns into a shrub with young pointed buds. It is the young buds that will produce the tea. The tea plant, whose area of ​​extension is quite wide, since it is included between 42 ° North latitude and 31 ° South latitude, thrives in areas with a hot and humid climate, with a good alternation of sun and regular rains. The cultivation of the tea plant is practiced in plain or up to 3000 m d 'altitude. The most productive soils are loose, rich in humus or volcanic. ",
Paragraph8: "The main producing country is China, followed by India, Sri Lanka, Kenya and Turkey, accounting for over 75% of world production.",
Paragraph9: "Country with a great tradition of tea and, historically, the oldest producer and exporter. The main production regions are in the south: Yunnan, Anhui, Fujian (large region producing multiple green teas, wulongs, with jasmine and the famous Souchong, which, once smoked with spruce wood, becomes Carte_the the smoked LAPSANG SOUCHONG), Zhejiang (region mainly producing green teas, Guangxi (there is mainly black tea used for making teas) flavored), Hunan, Sichuan and Hubei (regions known more particularly for making tea bricks, as well as for the famous yellow tea YIN ZHEN), Guandong (producing region of OOLONGS and some flavored Chinese teas. ",
Paragraph10: "The first gardens date from the beginning of the 19th century. Very quickly India became the world's largest producer. There are three main producing regions: ASSAM: Plains region located in the northeast of India, teas offer a strong liquor, rich invigorating, full of flavors DARJEELING: Region located in the north-east of India, on the flanks of the Himalayas, it offers teas with exquisite bouquets. NILGIRI: Region located on the mountains of southern countries, whose teas offer a delicate flavor. Other regions such as Cachar, Orissa, Kangra, Dooars, Terai, Arunachal Pradesh… also produce tea. ",
Paragraph11: "The development of tea cultivation dates back to 1825, with four main districts: Dimbula, Nuwara Eliya, Uva and Kandy.",
Paragraph12: "With its particularly rich soil, Kenya began cultivating tea in 1925, benefiting from English influence, its spectacular increase in quantity and quality makes it a major world exporter. KERICHO and LIMURU are the main districts, where the crops are mainly focused on black teas with broken leaves. ",
Paragraph13 :  "Land of great traditions of tea and ceramics for tea, hence the famous tea ceremonies.",
Paragraph14 :  "",
Paragraph15 :  "Famous for its very varied Oolongs",
Paragraph16 :  "With Burundi, Cameroon, Mozambique, Malawi, Uganda, Rwanda, Tanzania.",
Paragraph17 :  "With Argentina, Brazil, Peru",
Paragraph18 :  "With Australia and Papua",
Paragraph19: "The picking is done most often by women by hand and several times a year, while the tea plant is renewed (flush). The youngest leaves are light green. They are the richest in substance. and those which provide the tastiest and most refined drink. At the end of the branches is a bud covered with a whitish down, PEKOE (from the Chinese PAK-HO). This bud is particularly sought after. on the branch, the wider the leaves and the less flavorful the drink. Imperial picking consists of picking only the terminal bud, as well as the closest leaf, the fine picking the Pekoe and the two leaves that are most important to it. close, and the classic picking the terminal bud that has reached maturity and the three or four leaves which are closest to it. ",
            Paragraph20: "The different kinds of teas are obtained by treating the harvested leaves differently. Teas are classified according to whether they are whole leaves (Leaf), broken leaves (Broken), crushed leaves (Fannings o",
            Paragraph21: "The following grades are distinguished: FOP: Flowery Orange Pekoe; GFOP: Golden Flowery Orange Pekoe (with more golden leaves); TGFOP: Tippy Golden Flowery Orange Pekoe, all of the leaves are golden.; OP: Orange Pekoe: mature, black leaves; SOUCHONG: Large leaves rolled lengthwise; FP: Flowery Pekoe, with whole leaves and terminal bud.; P: Pekoe, grade obtained with 'mature' leaves. ",
            Paragraph22: "If black tea is fermented, green tea is not. Semi-fermented teas, also called Oolong or Wulong, or Blue-Green tea, these teas undergo an orthodox preparation with a fermentation ranging from 15% to 60% depending on the tea. ",
            Paragraph23: "The leaves benefit from a 'smothered' or piling treatment which will promote a short fermentation, this simple step gives the leaves that silvery appearance with sometimes golden reflections and this unique and incomparable taste.",
            Paragraph24: "The tea undergoes two operations; withering and immediate drying, these two operations being carried out most of the time in the open air.",
            Paragraph25: "Scented teas represent more than a third of world consumption; their origin is Chinese, with flower teas (jasmine, rose, chrysanthemums). In Europe, the idea has been extended with fruit teas, at the first rank of which the famous Earl Gray (black tea with essential oil of Bergamot). ",
Paragraphtitle9 :  "China",
Paragraphtitle10 :  "India",
Paragraphtitle11 :  "Ceylon Island - 'SRI LANKA'",
Paragraphtitle12 :  "Kenya",
Paragraphtitle13 :  "Korea and Japan",
Paragraphtitle14 :  "Indonesia (Java and Sumatra)",
Paragraphtitle15 :  "Formosa Island (TAIWAN)",
Paragraphtitle16 :  "Africa",
Paragraphtitle17 :  "South America",
Paragraphtitle18 :  "Oceania",
Paragraphtitle19 :  "Black teas",
Paragraphtitle20 :  "Green teas",
Paragraphtitle21 :  "Yellow teas",
Paragraphtitle22 :  "White teas",
Paragraphtitle23 :  "Flavored teas",
 
legend1 :  "The ASSAM tea factory",
legend2 :  "Boston Tea Party",
legend3 :  "Tea Clipper",
legend4 :  "Tea plantation in Sri Lanka",
Welcome:  "The little history of tea",

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
    document.getElementById('Paragraph6').innerHTML = translation.Paragraph6;
    document.getElementById('Paragraph7').innerHTML = translation.Paragraph7;
    document.getElementById('Paragraph8').innerHTML = translation.Paragraph8;
    document.getElementById('Paragraph9').innerHTML = translation.Paragraph9;
    document.getElementById('Paragraph10').innerHTML = translation.Paragraph10;
    document.getElementById('Paragraph11').innerHTML = translation.Paragraph11;
    document.getElementById('Paragraph12').innerHTML = translation.Paragraph12;
    document.getElementById('Paragraph13').innerHTML = translation.Paragraph13;
    document.getElementById('Paragraph14').innerHTML = translation.Paragraph14;
    document.getElementById('Paragraph15').innerHTML = translation.Paragraph15;
    document.getElementById('Paragraph16').innerHTML = translation.Paragraph16;
    document.getElementById('Paragraph17').innerHTML = translation.Paragraph17;
    document.getElementById('Paragraph18').innerHTML = translation.Paragraph18;
    document.getElementById('Paragraph19').innerHTML = translation.Paragraph19;
    document.getElementById('Paragraph20').innerHTML = translation.Paragraph20;
    document.getElementById('Paragraph21').innerHTML = translation.Paragraph21;
    document.getElementById('Paragraph22').innerHTML = translation.Paragraph22;
    document.getElementById('Paragraph23').innerHTML = translation.Paragraph23;
    document.getElementById('Paragraph24').innerHTML = translation.Paragraph24;
    document.getElementById('Paragraph25').innerHTML = translation.Paragraph25;
    

    document.getElementById('tradition').innerHTML = translation.tradition;
    document.getElementById('tradition1').innerHTML = translation.tradition1;
    document.getElementById('tradition2').innerHTML = translation.tradition2;
    document.getElementById('tradition3').innerHTML = translation.tradition3;
    document.getElementById('tradition4').innerHTML = translation.tradition4;
    document.getElementById('tradition5').innerHTML = translation.tradition5;
    document.getElementById('legend1').innerHTML = translation.legend1;
    document.getElementById('legend2').innerHTML = translation.legend2;
    document.getElementById('legend3').innerHTML = translation.legend3;
    document.getElementById('legend4').innerHTML = translation.legend4;
    document.getElementById('Paragraphtitle9').innerHTML = translation.Paragraphtitle9;
    document.getElementById('Paragraphtitle10').innerHTML = translation.Paragraphtitle10;
    document.getElementById('Paragraphtitle11').innerHTML = translation.Paragraphtitle11;
    document.getElementById('Paragraphtitle12').innerHTML = translation.Paragraphtitle12;
    document.getElementById('Paragraphtitle13').innerHTML = translation.Paragraphtitle13;
    document.getElementById('Paragraphtitle14').innerHTML = translation.Paragraphtitle14;
    document.getElementById('Paragraphtitle15').innerHTML = translation.Paragraphtitle15;
    document.getElementById('Paragraphtitle16').innerHTML = translation.Paragraphtitle16;
    document.getElementById('Paragraphtitle17').innerHTML = translation.Paragraphtitle17;
    document.getElementById('Paragraphtitle18').innerHTML = translation.Paragraphtitle18;
    document.getElementById('Paragraphtitle19').innerHTML = translation.Paragraphtitle19;
    document.getElementById('Paragraphtitle20').innerHTML = translation.Paragraphtitle20;
    document.getElementById('Paragraphtitle21').innerHTML = translation.Paragraphtitle21;
    document.getElementById('Paragraphtitle22').innerHTML = translation.Paragraphtitle22;
    document.getElementById('Paragraphtitle23').innerHTML = translation.Paragraphtitle23;
    
}