//GET THE MEASURES FOR THE USER ID

function User_exists(translation) {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token !== null && userId !== null) {
        fetch('https://api.lesthesdemilie.net/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_user_saved(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    } else {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');
        document.getElementById('article_profile').innerHTML = `<div class="w-100 mt-5 mb-5 text-center">
                                                                    <h2>${translation.Not_connected}</h2>
                                                                 </div>`
    }
}

function display_user_saved(response) {
    let language = localStorage.getItem("language");
    console.log(language);
    if (language === 'fr') {
        let translation = {
            Required : "Ce champs est requis", Name_is : "Votre nom :", save : "Enregistrer", title_formeasures : "Vos mesures", title_adress : "Nous avons besoin de votre adresse pour envoyer vos créations", Your_Adress : "Votre commande sera envoyée à : ", Country : "Pays",  City : "Ville", CP : "Code postal" ,Adress : "Votre adresse", Your_Email : "Votre Email sauvegardé est ", Take_now : "Prendre mes mesures", Modify_now : "Modifier mes mesures", Complete_now : "Completer mes mesures", Your_Measures : "Vos mesures", Missing :"doivent être prises", Taken : "sont bien enregistrées", Incomplete : "sont incomplètes"
        }
        Display_User_Translated(translation);
    } else {
        let translation = {
            Required : "This field is required", Name_is : "Your name is : ", save : "Save", title_formeasures : "Your measures", title_adress : "We need your adress to ship your products", Your_Adress : "Your orders will be mailed to : ", Country : "Country", City : "City", CP : "Postal code" ,Adress : "Your address", Your_Email : "Your Email saved is : ", Take_now : "Take my measures now", Modify_now : "Modify my measures now", Complete_now : "Complete my measures now", Your_Measures : "Your measures", Missing :"are missing", Taken : "are sucessfully taken", Incomplete : "Are incomplete"
        }
        Display_User_Translated(translation);
    }

    function Display_User_Translated(translation) {
    let content = `
                    <p class="mt-5">${translation.Name_is} <b>${response.name}</b></p>
                    <p>${translation.Your_Email} <b>${response.email}</b></p>
                    <div class="w-100 separation"></div>
                    <div id="Adress_display"></div>
                `;

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    document.getElementById('profile_infos').innerHTML = content;

    Display_adress(response, translation);
    }
}


function Display_adress(response, translation){
        
        document.getElementById('Modify').addEventListener('click', function modify_my_adress(){
            event.preventDefault();
            let language = localStorage.getItem("language");
            if (language === 'fr'){let translation = {title_adress : "Votre nouvelle adresse", Adress : "Adresse postale", CP : "Code Postal", City : "Ville", Country : "Pays", save : "Enregistrer"}}
            else if (language === 'en'){let translation = {title_adress : "Your new adress", Adress : "Your adress", CP : "Postal code", City : "City", Country : "Country", save : "Save"}}
            let adress = `
            <div class="w-100 separation"></div>
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
                        </form>`
            document.getElementById('Adress_display').innerHTML = adress;
        })

    if (response.adress === "..." || !response.adress ) {
        console.log('enter adress');
        let adress = `
        <div class="w-100 separation"></div>
        <h3 class="mt-5 mb-5">${translation.title_adress}</h3>
                    <form class="mb-5 adress_form">
                        <label for="Adress">Adress</label>
                        <input name="Adress" id="Adress" type="text" placeholder="${translation.Adress}"><br>
                        <p class="required_message" id="adress_warn_empty">${translation.Required}</p>
                        <label for="CP">CP</label>
                        <input type="number" name="CP" id="CP" placeholder="${translation.CP}"><br>
                        <p class="required_message" id="cp_warn_empty">${translation.Required}</p>
                        <label for="City">City</label>
                        <input type="text" name="City" id="City" placeholder="${translation.City}"><br>
                        <p class="required_message" id="city_warn_empty">${translation.Required}</p>
                        <label for="City">Country</label>
                        <input type="text" name="Country" id="Country" placeholder="${translation.Country}"><br>
                        <p class="required_message" id="country_warn_empty">${translation.Required}</p>
                        <a href="#" class="button" onclick="Save_adress()">${translation.save}</a>
                    </form>`
        document.getElementById('Adress_display').innerHTML = adress;
    } else if (response.adress !== "...") {
        let adress = `<p>${translation.Your_Adress} <b>${response.adress}</b></p>`;
        document.getElementById('Adress_display').innerHTML = adress;
    }
}

function clear_styles_form(){
    document.getElementById('adress_warn_empty').style.display = "none";
    document.getElementById('cp_warn_empty').style.display = "none";
    document.getElementById('city_warn_empty').style.display = "none";
    document.getElementById('country_warn_empty').style.display = "none";
}

function Save_adress() {
    event.preventDefault();
    let Adress = document.getElementById("Adress").value;
    let CP = document.getElementById("CP").value;
    let City = document.getElementById("City").value;
    let Country = document.getElementById("Country").value;

    clear_styles_form();

    if (Adress === ""){
        document.getElementById('adress_warn_empty').style.display = "block";
    } else if (CP === ""){
        document.getElementById('cp_warn_empty').style.display = "block";
    } else if (City === ""){
        document.getElementById('city_warn_empty').style.display = "block";
    } else if (Country === ""){
        document.getElementById('country_warn_empty').style.display = "block";
    } else {
        let token = JSON.parse(window.localStorage.getItem('token'));
    let userId = JSON.parse(window.localStorage.getItem('userId'));

    fetch('https://api.lesthesdemilie.net/api/auth/userGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => update_profile(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })

        function update_profile(response){
            console.log('saving...2');
            let Adress = document.getElementById("Adress").value;
            let CP = document.getElementById("CP").value;
            let City = document.getElementById("City").value;
            let Country = document.getElementById("Country").value;

            adress_value = Adress + ',' + CP + ',' + City + ',' + Country;
            console.log(response);

            let profile = {
                userId: userId.userId,
                name: response.name,
                email: response.email,
                password: response.password,
                adress : adress_value
            }

            console.log(profile);

            fetch('https://api.lesthesdemilie.net/api/auth/userUptate' + '/' + userId.userId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(profile) }).then(response => response.json()).then(response => Display_response(response))
            .catch(function (error) {
                console.log('TOKEN ERROR ' + error.message)
            })
        }
    }
}

function Display_response(response){
    window.location.reload();
}

