//GET THE MEASURES FOR THE USER ID

function User_already_measured(translation) {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token !== null && userId !== null) {
        fetch('https://api.lesthesdemilie.net/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.text()).then(response => display_measure_saved(response, translation))
            .catch(function (error) {
                console.log('GET ' + error.message)
            })
    } else {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userId');

        document.getElementById('article_measures').innerHTML = `<div class="w-100 mt-5 mb-5 text-center">
                                                                    <h2>${translation.Not_connected}</h2>
                                                                 </div>`
    }
}

//CHECK IF THE MEASURE OF THE USER HAVE BEEN TAKEN

function display_measure_saved(response, translation) {
    let response_json = JSON.parse(response);
    console.log(response_json);
    
    if (response_json.message === 'measures not taken') {
        document.getElementById('Measures_article').innerHTML = `<h2 class="pb-3 pt-3">${translation.Title_not_taken}</h2>
                                                             <p>${translation.Subtitle_not_taken}</p>
                                                             `;

        document.getElementById('Lady_Gent').innerHTML = `
            <div class="w-100 text-center mt-5"><p>${translation.Gender_choice}</p></div>
            <div class="d-flex justify-content-around pr-4 pl-4"  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="1000">
                <a href="#" id="Lady"><img class="Choice_gender"  src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Lady.png" alt="Lady"></a>
                <a href="#" id="Gentlemen"><img class="Choice_gender"  src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Gentlemen.png" alt="Lady"></a>
            </div>`;

        Take_Measures_units(translation);
        decide_gender();


    } else if (response_json.measure14 === "...") {
        
        document.getElementById('Lady_Gent').style.display = "none";
        document.getElementById('Lady_gent_put').innerHTML = `<div class="w-100 text-center mt-5"><p>${translation.Gender_modify}</p></div>
                                                            <div class="d-flex justify-content-around pr-4 pl-4"  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="1000">
                                                                <a href="#" id="Lady_put"><img class="Choice_gender" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Lady.png" alt="Lady"></a>
                                                                <a href="#" id="Gentlemen_put"><img class="Choice_gender" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Gentlemen.png" alt="Gentlemen"></a>
                                                              </div>`;
        Take_Measures(response_json, translation);
        Display_smaller_gender(response_json);
        decide_gender();

    } else if (response_json.measure14 !== "...") {
        document.getElementById('Lady_Gent').style.display = "none";
        document.getElementById('Lady_gent_put').innerHTML = `<div class="w-100 text-center mt-5"><p>${translation.Gender_modify}</p></div>
                                                            <div class="d-flex justify-content-around pr-4 pl-4"  data-aos="fade" data-aos-easing="ease-out" data-aos-duration="1000">
                                                                <a href="#" id="Lady_put"><img class="Choice_gender" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Lady.png" alt="Lady"></a>
                                                                <a href="#" id="Gentlemen_put"><img class="Choice_gender" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Gentlemen.png" alt="Gentlemen"></a>
                                                              </div>`;
        document.getElementById('Measures_article').innerHTML = `<h2 class="pb-3 pt-3">${translation.Title_taken}</h2>
                                                                 <p>${translation.Subtitle_taken}</p>
                                                                `;
        Display_smaller_gender(response_json);
        Display_Measures(response, translation);
        decide_gender();
    }
}

function Display_smaller_gender(response_json) {
    if (response_json.gender === 'Gentlemen') {
        if (document.getElementById('Lady_put')) {document.getElementById('Lady_put').style.width = "20%";document.getElementById('Lady_put').style.height = "20%";document.getElementById('Lady_put').style.margin = "auto";} 
        else if (document.getElementById('Lady')) {document.getElementById('Lady').style.width = "20%";document.getElementById('Lady').style.height = "20%";document.getElementById('Lady').style.height = "auto";}
    } else if (response_json.gender === 'Lady') {
        if (document.getElementById('Gentlemen_put')) {document.getElementById('Gentlemen_put').style.width = "20%";document.getElementById('Gentlemen_put').style.height = "20%";document.getElementById('Gentlemen_put').style.margin = "auto";} 
        else if (document.getElementById('Gentlemen')) {document.getElementById('Gentlemen').style.width = "20%";document.getElementById('Gentlemen').style.height = "20%";document.getElementById('Gentlemen').style.margin = "auto";}
    }
}

//FUNCTION TO HIDE UNUSED SECTIONS

function Hide_Other_Categories() {
    document.getElementById('Measures_form_units').style.display = 'none';
    document.getElementById('Measures_form_1').style.display = 'none';
    document.getElementById('Measures_form_2').style.display = 'none';
    document.getElementById('Measures_form_3').style.display = 'none';
    document.getElementById('Measures_form_4').style.display = 'none';
    document.getElementById('Measures_form_5').style.display = 'none';
    document.getElementById('Measures_form_6').style.display = 'none';
    document.getElementById('Measures_form_7').style.display = 'none';
    document.getElementById('Measures_form_8').style.display = 'none';
    document.getElementById('Measures_form_9').style.display = 'none';
    document.getElementById('Measures_form_10').style.display = 'none';
    document.getElementById('Measures_form_11').style.display = 'none';
    document.getElementById('Measures_form_12').style.display = 'none';
    document.getElementById('Measures_form_13').style.display = 'none';
    document.getElementById('Measures_form_14').style.display = 'none';
    document.getElementById('Measures_form_15').style.display = 'none';
}

//SAVE THE UNITY USED FOR MEASURES

function save_param(category, choice) {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set(category, choice);
    history.pushState(null, null, "?" + queryParams.toString());
    let gender = queryParams.get('gender');

    let userId = JSON.parse(window.localStorage.getItem('userId'));
    let token = JSON.parse(window.localStorage.getItem('token'));
    let datenow = Date.now();
    let unity = choice;

    let measures = {
        userId: userId.userId,
        datenow: datenow,
        gender : gender,
        unity: unity,
        measure1: "...",
        measure2: "...",
        measure3: "...",
        measure4: "...",
        measure5: "...",
        measure6: "...",
        measure7: "...",
        measure8: "...",
        measure9: "...",
        measure10: "...",
        measure11: "...",
        measure12: "...",
        measure13: "...",
        measure14: "...",
        measure15: "...",
    }

    console.log(measures);
    console.log(token.token_access);

    fetch('https://api.lesthesdemilie.net/api/auth/measures', { method: "POST", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(measures) }).then(response => response.json()).then(response => display_response(response))
        .catch(function (error) {
            console.log('TOKEN ERROR ' + error.message)
        })

    window.location.reload();
}

//FUNCTION TO SHOW FETCH RESULT ON CONSOLE

function display_response(response) {
    console.log(response);
}

//SAVE PICTURES MEASURES

function save_param_measures_pictures(measurenb, measurenb_input) {
    event.preventDefault();
    let frontPicture = document.getElementById('pictureFront_input').value;
    let backPicture = document.getElementById('pictureBack_input').value;
    let sidePicture = document.getElementById('pictureSide_input').value;

    console.log(frontPicture);
    console.log(backPicture);
    console.log(sidePicture);

    if (frontPicture === '') {
        document.getElementById('alert_empty_front').innerHTML = 'Please download a front picture';
    } else if (backPicture === '') {
        document.getElementById('alert_empty_back').innerHTML = 'Please download a back picture';
    } else if (sidePicture === '') {
        document.getElementById('alert_empty_side').innerHTML = 'Please download a side picture';
    } else {
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set(measurenb, measurenb_input);
        history.pushState(null, null, "?" + queryParams.toString());
        save_measures_database();
        //window.location.reload();
    }
}


//FUNCTION TO DISPLAY CURRENT STEP

function display_current_step(step, name) {
    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation_title = [
            "Unité", "Epaules", "Poitrine", "Epaules", "Poitrine", "Epaules", "Poitrine", "Epaules", "Poitrine",
        ]
        let translation_explanation = [
            "Explication1", "Explication2", "Explication3", "Explication4", "Explication5", "Explication6", "Explication7", "Explication8", "Explication9"
        ]
        let translation = {
            Measure_of : "Mesure n°", New_measure : "Nouvelles mesures", Confirm : "Confirmer"
        }
        Display_translated_current(step, name, translation_title, translation_explanation, translation)
    } else {
        let translation_title = [
            "Unity", "Shoulders", "Chest", "Measure3", "Measure4", "Shoulders", "Chest", "Measure3", "Measure4"
        ]
        let translation_explanation = [
            "Explication1", "Explication2", "Explication3", "Explication4", "Explication5", "Explication6", "Explication7", "Explication8", "Explication9"
        ]
        let translation = {
            Measure_of : "Measure n°", New_measure : "New measure", Confirm : "Confirm"
        }
        Display_translated_current(step, name, translation_title, translation_explanation, translation)
    }

    function Display_translated_current(step, name, translation_title, translation_explanation, translation){

    let queryParams = new URLSearchParams(window.location.search);
    let unity = queryParams.get('unity');
    document.getElementById('Measures_form_' + step).innerHTML = `<div class="col-md-6 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                              <h2>${translation_title[step]}</h2>
                                                              <p class="text-justify">${translation_explanation[step]}</p>
                                                              <label for="male">${translation.Measure_of} ${step} : ${translation_title[step]}</label>
                                                              <input class="text-center mb-5" type="number" name="measure${step}" id="measure${step}_input" placeholder="${translation_title[step]}">
                                                              <a href="#" class="button" onclick="save_param_measures_put('measure${step}', 'measure${step}_input')">${translation.Confirm}</a>
                                                              <div id="alert_empty" aria-label="custom suit empty field"></div>
                                                        </div>
                                                          <div class="col-md-5 mt-3 offset-md-1" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="1600">
                                                              <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                                                                    <div class="carousel-inner">
                                                                        <div class="carousel-item active">
                                                                            <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                                                            <div class="carousel-caption text-center">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Second slide">
                                                                            <div class="carousel-caption">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Third slide">
                                                                            <div class="carousel-caption">

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                        <span class="sr-only">Previous</span>
                                                                    </a>

                                                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                        <span class="sr-only">Next</span>
                                                                    </a>

                                                                </div>
                                                            </div> `;
    }
}

//FUNCTION TO DECIDE GENDER

function decide_gender() {
    
    let Lady = document.getElementById('Lady');
    let Gentlemen = document.getElementById('Gentlemen');
    let Lady_put = document.getElementById('Lady_put');
    let Gentlemen_put = document.getElementById('Gentlemen_put');

if (Lady && Gentlemen){
    console.log('Listening...');
    document.getElementById('Lady').addEventListener('click', function save_lady(){
        event.preventDefault();
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("gender", "Lady");
        history.pushState(null, null, "?" + queryParams.toString());
        window.location.reload();
    });

    document.getElementById('Gentlemen').addEventListener('click', function save_lady(){
        event.preventDefault();
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("gender", "Gentlemen");
        history.pushState(null, null, "?" + queryParams.toString());
        window.location.reload();
    })
} 

if (Lady_put && Gentlemen_put){
    console.log('Listening...');
    document.getElementById('Lady_put').addEventListener('click', function save_lady(){
        event.preventDefault();
        let token = JSON.parse(window.localStorage.getItem('token'));
        let userId = JSON.parse(window.localStorage.getItem('userId'));
        fetch('https://api.lesthesdemilie.net/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.text()).then(response => Modify_gender(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
        function Modify_gender(response){
            console.log('Modify_Lady');
        let response_json = JSON.parse(response);
        let measures = {
            userId: userId.userId,
            datenow: response_json.datenow,
            unity: response_json.unity,
            gender: 'Lady',
            measure1: response_json.measure1,
            measure2: response_json.measure2,
            measure3: response_json.measure3,
            measure4: response_json.measure4,
            measure5: response_json.measure5,
            measure6: response_json.measure6,
            measure7: response_json.measure7,
            measure8: response_json.measure8,
            measure9: response_json.measure9,
            measure10: response_json.measure10,
            measure11: response_json.measure11,
            measure12: response_json.measure12,
            measure13: response_json.measure13,
            measure14: response_json.measure14,
            measure15: response_json.measure15,
        }

        fetch('https://api.lesthesdemilie.net/api/auth/measuresUpdate' + '/' + userId.userId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(measures) }).then(response => response.json()).then(response => reload_page(response))
            .catch(function (error) {
                console.log('TOKEN ERROR ' + error.message)
            })
        }
    })

    document.getElementById('Gentlemen_put').addEventListener('click', function save_gentlemen(){
        event.preventDefault();
        let token = JSON.parse(window.localStorage.getItem('token'));
        let userId = JSON.parse(window.localStorage.getItem('userId'));
        fetch('https://api.lesthesdemilie.net/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.text()).then(response => Modify_gender(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
        
        function Modify_gender(response){
            console.log('Modify_Lady');
        let response_json = JSON.parse(response);
        let measures = {
            userId: userId.userId,
            datenow: response_json.datenow,
            unity: response_json.unity,
            gender: 'Gentlemen',
            measure1: response_json.measure1,
            measure2: response_json.measure2,
            measure3: response_json.measure3,
            measure4: response_json.measure4,
            measure5: response_json.measure5,
            measure6: response_json.measure6,
            measure7: response_json.measure7,
            measure8: response_json.measure8,
            measure9: response_json.measure9,
            measure10: response_json.measure10,
            measure11: response_json.measure11,
            measure12: response_json.measure12,
            measure13: response_json.measure13,
            measure14: response_json.measure14,
            measure15: response_json.measure15,
        }

        fetch('https://api.lesthesdemilie.net/api/auth/measuresUpdate' + '/' + userId.userId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(measures) }).then(response => response.json()).then(response => reload_page(response))
            .catch(function (error) {
                console.log('TOKEN ERROR ' + error.message)
            })
        }
    })
}
}

function display_gender_choice(){
    document.getElementById('Form_Take_measures').style.display = 'none';
    document.getElementById('Lady_Gent').style.display = 'block';
}

//FUNCTION TO TAKE MEASURES - UNITS

function Take_Measures_units(translation) {
    let queryParams = new URLSearchParams(window.location.search);
    let gender = queryParams.get('gender');

    if (gender === null){
        document.getElementById('Form_Take_measures').style.display = 'none';
        document.getElementById('Lady_Gent').style.display = 'block';
    } else if (gender !== null) {
        document.getElementById('Lady_Gent').style.display = 'none';
        Hide_Other_Categories();
        document.getElementById('Lady_gent_put').innerHTML = `<div class="mt-5 text-center"><div class="m-auto"><a href='#' class="button" onclick="display_gender_choice()">${translation.Modify_Gender_btn}</a></div></div>`
        document.getElementById('Lady_gent_put').style.margin = "auto";
        
        document.getElementById('Measures_form_units').style.display = 'flex';
        document.getElementById('Measures_form_units').innerHTML = `<div class="col-md-10 offset-md-1 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                                <h2 class="pb-3">${translation.How_to_take}</h2>
                                                                <ul>
                                                                        <li id="Measures_Advise1">
                                                                            <img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Calendar.png" alt="Tailoring profile" />
                                                                            <p>${translation.Units_label}</p>
                                                                        </li>
                                                                        <li id="Measures_Advise2">
                                                                            <img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Simulator.png" alt="Tailoring profile" />
                                                                            <p>${translation.Units_label}</p>
                                                                        </li>
                                                                        <li id="Measures_Advise3">
                                                                            <img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Messages.png" alt="Tailoring profile" />
                                                                            <p>${translation.Units_label}</p>
                                                                        </li>
                                                                </ul>

                                                                <h2 class="pt-4 pb-3">Which unit do you use?</h2>
                                                                <div class="d-flex justify-content-around mb-3">
                                                                        <a href="#" onclick="save_param('unity', 'cm')" class="button" id="Measures_cm">${translation.Centimeter}</a>
                                                                        <a href="#" onclick="save_param('unity', 'in')" class="button" id="Measures_in">${translation.Inches}</a>
                                                                </div>
                                                                </div>`;
    } else {
        console.log('error gender')
    }
}



//FUNCTION TO TAKE MEASURES - MEASURES

function Take_Measures(response, translation) {

    let queryParams = new URLSearchParams(window.location.search);
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    fetch('https://api.lesthesdemilie.net/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access } })
        .then(response => response.text())
        .then(response => Take_Measures_fetch(response, translation))
        .catch (function (error) {
            console.log('GET ' + error.message)
        })
}


function Take_Measures_fetch(response, translation) {

    console.log('INSIDE THE TAKE.MEASURES');
        let response_json = JSON.parse(response);

        if (response_json.measure1 === "...") {

        //MEASURE NUMBER 1

        display_current_step('1', 'Shoulders');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ... ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

        } else if (response_json.measure2 === "...") {

        //MEASURE NUMBER 2

        display_current_step('2', 'Arms');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ... ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

        } else if (response_json.measure3 === "...") {

        //MEASURE NUMBER 3

        display_current_step('3', 'Stomack');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ... ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

        } else if (response_json.measure4 === "...") {

        //MEASURE NUMBER 3

        display_current_step('4', 'Shoulders');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ... ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure5 === "...") {

        //MEASURE NUMBER 5

        display_current_step('5', 'Belly');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ... ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure6 === "...") {

        //MEASURE NUMBER 6

        display_current_step('6', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ... ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure7 === "...") {

        //MEASURE NUMBER 7

        display_current_step('7', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ... ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure8 === "...") {

        //MEASURE NUMBER 8

        display_current_step('8', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure9 === "...") {

        //MEASURE NUMBER 9

        display_current_step('9', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure10 === "...") {

        //MEASURE NUMBER 10

        display_current_step('10', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure11 === "...") {

        //MEASURE NUMBER 11

        display_current_step('11', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure12 === "...") {

        //MEASURE NUMBER 12

        display_current_step('12', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${response_json.measure12} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure13 === "...") {

        //MEASURE NUMBER 13

        display_current_step('13', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${response_json.measure12} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure13_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('13', 'Measure')">Measure5 is ${response_json.measure13} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure14 === "...") {

        //MEASURE NUMBER 14

        display_current_step('14', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${response_json.measure12} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure13_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('13', 'Measure')">Measure5 is ${response_json.measure13} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure14_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('14', 'Measure')">Measure5 is ${response_json.measure14} ${response_json.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }
}   

//REDIRECT USERS TO MODIFY A MEASURE

function Display_Step_measure(step, name) {
    event.preventDefault();
    Hide_Other_Categories();

    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation_title = [
            "Unité", "Epaules", "Poitrine", "Shoulders", "Chest", "Shoulders", "Chest", "Measure3", "Measure4"
        ]
        let translation_explanation = [
            "Explication1", "Explication2", "Explication3", "Explication4", "Explication5", "Explication6", "Explication7", "Explication8", "Explication9"
        ]
        let translation = {
            Measure_of : "Mesure n°", New_measure : "Nouvelles mesures", Confirm : "Confirmer"
        }
        Display_translated_measures(step, name, translation_title, translation_explanation, translation)
    } else {
        let translation_title = [
            "Unity", "Shoulders", "Chest", "Measure3", "Measure4", "Shoulders", "Chest", "Measure3", "Measure4"
        ]
        let translation_explanation = [
            "Explication1", "Explication2", "Explication3", "Explication4", "Explication5", "Explication6", "Explication7", "Explication8", "Explication9"
        ]
        let translation = {
            Measure_of : "Measure n°", New_measure : "New measure", Confirm : "Confirm"
        }
        Display_translated_measures(step, name, translation_title, translation_explanation, translation)
    }

    function Display_translated_measures(step, name, translation_title, translation_explanation, translation){

        document.getElementById('Measures_form_' + step).style.display = 'flex';
        let queryParams = new URLSearchParams(window.location.search);
        let unity = queryParams.get('unity');
        if (unity == null) {
            unity = "";
            let transl_name = translation_title[step];
            let transl_expl = translation_explanation[step];
            console.log(transl_name);

            document.getElementById('Measures_form_' + step).innerHTML = `<div class="col-md-6 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                                    <h2>${transl_name}</h2>
                                                                    <p class="text-justify">${transl_expl}</p>
                                                                    <label for="male">${translation.Measure_of} ${step} : ${transl_name}</label>
                                                                    <input class="text-center mb-5" type="number" name="measure${step}" id="measure${step}_input" placeholder='${translation.New_measure}'> ${unity}
                                                                    <a href="#" class="button" onclick="save_param_measures_put('measure${step}', 'measure${step}_input')">${translation.Confirm}</a>
                                                                    <div id="alert_empty" aria-label="custom suit empty field"></div>
                                                                </div>
                                                                <div class="col-md-5 mt-3 offset-md-1" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="1600">
                                                                    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                                                                            <div class="carousel-inner">
                                                                                <div class="carousel-item active">
                                                                                    <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                                                                    <div class="carousel-caption text-center">

                                                                                    </div>
                                                                                </div>
                                                                                <div class="carousel-item">
                                                                                    <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Second slide">
                                                                                    <div class="carousel-caption">

                                                                                    </div>
                                                                                </div>
                                                                                <div class="carousel-item">
                                                                                    <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Third slide">
                                                                                    <div class="carousel-caption">

                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                                <span class="sr-only">Previous</span>
                                                                            </a>

                                                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                                <span class="sr-only">Next</span>
                                                                            </a>

                                                                        </div>
                                                                    </div> `;
        }

        
    }
}

//FUNCTION DISPLAY STEP UNITS

function Display_Step_Units() {
    event.preventDefault();
    Hide_Other_Categories();

    let language = localStorage.getItem("language");
    if (language === 'fr') {
        
        let translation = {
            How_to : "Nos tailleurs vous assistent pour prendre vos mesures", First_rec : "Première mesure", Second_rec : "Deuxième mesure", Third_rec : "Troisième mesure", Choose_unit : "Quelle unité souhaitez vous utiliser?", Centimeter : "Centimètres", Inches : "Pouces"
        }
        Display_translated_units(translation)
    } else {
        let translation = {
            How_to : "Our tailors assist you to take your measures",  First_rec : "First measure", Second_rec : "Second mesure", Third_rec : "Third mesure", Choose_unit : "Which unit do you wish to use?", Centimeter : "Centimeter", Inches : "Inches"
        }
        Display_translated_units(translation)
    }

    function Display_translated_units(translation) {
        document.getElementById('Measures_form_units').style.display = 'flex';
        document.getElementById('Measures_form_units').innerHTML = `<div class="col-md-10 offset-md-1 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                              <h2 class="pb-3">${translation.How_to}</h2>
                                                              <ul>
                                                                    <li id="Measures_Advise1">
                                                                        <img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Calendar.png" alt="Tailoring profile" />
                                                                        <p>${translation.First_rec}</p>
                                                                    </li>
                                                                    <li id="Measures_Advise2">
                                                                        <img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Simulator.png" alt="Tailoring profile" />
                                                                        <p>${translation.Second_rec}</p>
                                                                    </li>
                                                                    <li id="Measures_Advise3">
                                                                        <img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/DASHBOARD/Messages.png" alt="Tailoring profile" />
                                                                        <p>${translation.Third_rec}</p>
                                                                    </li>
                                                              </ul>

                                                              <h2 class="pt-4 pb-3">${translation.Choose_unit}</h2>
                                                              <div class="d-flex justify-content-around mb-3">
                                                                    <a href="#" onclick="save_param_put('unity', 'cm')" class="button_option" id="Measures_cm">${translation.Centimeter}</a>
                                                                    <a href="#" onclick="save_param_put('unity', 'in')" class="button_option" id="Measures_in">${translation.Inches}</a>
                                                              </div>
                                                            </div>`;
    }
}

//FUNCTION TO DISPLAY ALREADY TAKEN MEASURES

function Display_Measures(measures, translation) {
    let Measures = JSON.parse(measures);

    document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">${translation.About} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${Measures.measure1} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${Measures.measure2} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${Measures.measure3} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${Measures.measure4} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${Measures.measure5} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure6 is ${Measures.measure6} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure7 is ${Measures.measure7} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure8 is ${Measures.measure8} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure9 is ${Measures.measure9} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure3 is ${Measures.measure10} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure4 is ${Measures.measure11} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${Measures.measure12} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure13_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('13', 'Measure')">Measure6 is ${Measures.measure13} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure14_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('14', 'Measure')">Measure7 is ${Measures.measure14} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure15_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('15', 'Measure')">Measure7 is ${Measures.measure15} ${Measures.unity}</a><img src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

    if (Measures.measure15 === "..."){
        Display_Step_measure_15('15', 'Measure');
    }
}

function Display_Step_measure_15(step, name) {
    Hide_Other_Categories();

    let language = localStorage.getItem("language");
    if (language === 'fr') {
        let translation_title = [
            "Unité", "Epaules", "Poitrine", "Shoulders", "Chest", "Shoulders", "Chest", "Measure3", "Measure4"
        ]
        let translation_explanation = [
            "Explication1", "Explication2", "Explication3", "Explication4", "Explication5", "Explication6", "Explication7", "Explication8", "Explication9"
        ]
        let translation = {
            Measure_of : "Mesure n°", New_measure : "Nouvelles mesures", Confirm : "Confirmer"
        }
        Display_translated_measures(step, name, translation_title, translation_explanation, translation)
    } else {
        let translation_title = [
            "Unity", "Shoulders", "Chest", "Measure3", "Measure4", "Shoulders", "Chest", "Measure3", "Measure4"
        ]
        let translation_explanation = [
            "Explication1", "Explication2", "Explication3", "Explication4", "Explication5", "Explication6", "Explication7", "Explication8", "Explication9"
        ]
        let translation = {
            Measure_of : "Measure n°", New_measure : "New measure", Confirm : "Confirm"
        }
        Display_translated_measures(step, name, translation_title, translation_explanation, translation)
    }

    function Display_translated_measures(step, name, translation_title, translation_explanation, translation){

        document.getElementById('Measures_form_' + step).style.display = 'flex';
        let queryParams = new URLSearchParams(window.location.search);
        let unity = queryParams.get('unity');
        if (unity == null) {
            unity = "";
            let transl_name = translation_title[step];
            let transl_expl = translation_explanation[step];
            console.log(transl_name);

            document.getElementById('Measures_form_' + step).innerHTML = `<div class="col-md-6 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                                    <h2>${transl_name}</h2>
                                                                    <p class="text-justify">${transl_expl}</p>
                                                                    <label for="male">${translation.Measure_of} ${step} : ${transl_name}</label>
                                                                    <input class="text-center mb-5" type="number" name="measure${step}" id="measure${step}_input" placeholder='${translation.New_measure}'> ${unity}
                                                                    <a href="#" class="button" onclick="save_param_measures_put('measure${step}', 'measure${step}_input')">${translation.Confirm}</a>
                                                                    <div id="alert_empty" aria-label="custom suit empty field"></div>
                                                                </div>
                                                                <div class="col-md-5 mt-3 offset-md-1" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="1600">
                                                                    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                                                                            <div class="carousel-inner">
                                                                                <div class="carousel-item active">
                                                                                    <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                                                                    <div class="carousel-caption text-center">

                                                                                    </div>
                                                                                </div>
                                                                                <div class="carousel-item">
                                                                                    <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Second slide">
                                                                                    <div class="carousel-caption">

                                                                                    </div>
                                                                                </div>
                                                                                <div class="carousel-item">
                                                                                    <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Third slide">
                                                                                    <div class="carousel-caption">

                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                                <span class="sr-only">Previous</span>
                                                                            </a>

                                                                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                                <span class="sr-only">Next</span>
                                                                            </a>

                                                                        </div>
                                                                    </div> `;
        }

        
    }
}




//SAVE THE UNITY USED FOR MEASURES

function save_param_put(category, choice) {
    event.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set(category, choice);
    history.pushState(null, null, "?" + queryParams.toString());

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    fetch('https://api.lesthesdemilie.net/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access } }).then(response => response.text()).then(response => updateUnity(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })

    function updateUnity(response) {

        console.log('Update Unity');
        response_json = JSON.parse(response);
        let queryParams = new URLSearchParams(window.location.search);
        let unity = queryParams.get('unity');
        
        let measures = {
            userId: userId.userId,
            datenow: response_json.datenow,
            unity: unity,
            gender: response_json.gender,
            measure1: response_json.measure1,
            measure2: response_json.measure2,
            measure3: response_json.measure3,
            measure4: response_json.measure4,
            measure5: response_json.measure5,
            measure6: response_json.measure6,
            measure7: response_json.measure7,
            measure8: response_json.measure8,
            measure9: response_json.measure9,
            measure10: response_json.measure10,
            measure11: response_json.measure11,
            measure12: response_json.measure12,
            measure13: response_json.measure13,
            measure14: response_json.measure14,
            measure15: response_json.measure15,
        }

        fetch('https://api.lesthesdemilie.net/api/auth/measuresUpdate' + '/' + userId.userId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(measures) }).then(response => response.json()).then(response => reload_page(response))
            .catch(function (error) {
                console.log('TOKEN ERROR ' + error.message)
            })
    }
}

function reload_page(response){
    window.location.reload();
    console.log(response);
}

//SAVE MEASURES

function save_param_measures_put(measurenb, measurenb_input) {
    event.preventDefault();
    let measure = document.getElementById(measurenb_input).value;
    if (measure === '') {
        document.getElementById('alert_empty').innerHTML = 'Please enter your measure';
    } else {
        let queryParams = new URLSearchParams(window.location.search);
        let choice = document.getElementById(measurenb_input).value;
        queryParams.set(measurenb, choice);
        history.pushState(null, null, "?" + queryParams.toString());

        var token = JSON.parse(window.localStorage.getItem('token'));
        var userId = JSON.parse(window.localStorage.getItem('userId'));

        fetch('https://api.lesthesdemilie.net/api/auth//measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access } }).then(response => response.json()).then(response => modifyOne(response))
            .catch(function (error) {
                console.log('GET ' + error.message)
            })

        function modifyOne(response) {

            let queryParams = new URLSearchParams(window.location.search);
            console.log(response);
            let unity = queryParams.get('unity');
            let measure1 = queryParams.get('measure1');
            let measure2 = queryParams.get('measure2');
            let measure3 = queryParams.get('measure3');
            let measure4 = queryParams.get('measure4');
            let measure5 = queryParams.get('measure5');
            let measure6 = queryParams.get('measure6');
            let measure7 = queryParams.get('measure7');
            let measure8 = queryParams.get('measure8');
            let measure9 = queryParams.get('measure9');
            let measure10 = queryParams.get('measure10');
            let measure11 = queryParams.get('measure11');
            let measure12 = queryParams.get('measure12');
            let measure13 = queryParams.get('measure13');
            let measure14 = queryParams.get('measure14');
            let measure15 = queryParams.get('measure15');

            if (measure1 == null) {
                measure1 = response.measure1;
            }
            if (measure2 == null) {
                measure2 = response.measure2;
            }
            if (measure3 == null) {
                measure3 = response.measure3;
            }
            if (measure4 == null) {
                measure4 = response.measure4;
            }
            if (measure5 == null) {
                measure5 = response.measure5;
            }
            if (measure6 == null) {
                measure6 = response.measure6;
            }
            if (measure7 == null) {
                measure7 = response.measure7;
            }
            if (measure8 == null) {
                measure8 = response.measure8;
            }
            if (measure9 == null) {
                measure9 = response.measure9;
            }
            if (measure10 == null) {
                measure10 = response.measure10;
            }
            if (measure11 == null) {
                measure11 = response.measure11;
            }
            if (measure12 == null) {
                measure12 = response.measure12;
            }
            if (measure13 == null) {
                measure13 = response.measure13;
            }
            if (measure14 == null) {
                measure14 = response.measure14;
            }
            if (measure15 == null) {
                measure15 = response.measure15;
            }

            let measures = {
                    userId: response.userId,
                    datenow: response.datenow,
                    gender: response.gender,
                    unity: response.unity,
                    measure1: measure1,
                    measure2: measure2,
                    measure3: measure3,
                    measure4: measure4,
                    measure5: measure5,
                    measure6: measure6,
                    measure7: measure7,
                    measure8: measure8,
                    measure9: measure9,
                    measure10: measure10,
                    measure11: measure11,
                    measure12: measure12,
                    measure13: measure13,
                    measure14: measure14,
                    measure15: measure15,
            }

            console.log(measures);

            fetch('https://api.lesthesdemilie.net/api/auth/measuresUpdate' + '/' + userId.userId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(measures) }).then(response => {
                console.log(response);
                response.json()
            }).then(response => display_response(response))
                .catch(function (error) {
                    console.log('TOKEN ERROR ' + error.message)
                })

            window.location.reload();
        }
    }
}















































//FUNCTION DISPLAY STEP PICTURES

function Display_Step_measure_pictures() {
    event.preventDefault();
    Hide_Other_Categories();
    document.getElementById('Measures_form_pictures').style.display = 'flex';
    document.getElementById('Measures_form_pictures').innerHTML = `<div class="col-md-6 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                              <h2>Your posture</h2>
                                                              <p class="text-justify">To carry out the first measure of the vest, you need to use the extremity of the shoulders passing by the bottom of the neck. Don't forget to follow the shoulder's neck.</p>
                                                              <label for="male">Pictures of the posture - Front  </label>
                                                              <input class="text-center" type="file" name="pictureFront" id="pictureFront_input" placeholder="Front" required>
                                                              <div id="alert_empty_front" class="mb-4" aria-label="custom suit empty field"></div>
                                                              <label for="male">Pictures of the posture - Back  </label>
                                                              <input class="text-center" type="file" name="pictureBack" id="pictureBack_input" placeholder="Back" required>
                                                              <div id="alert_empty_back" class="mb-4" aria-label="custom suit empty field"></div>
                                                              <label for="male">Pictures of the posture - Side  </label>
                                                              <input class="text-center" type="file" name="pictureSide" id="pictureSide_input" placeholder="Side" required>
                                                              <div id="alert_empty_side" class="mb-4" aria-label="custom suit empty field"></div>
                                                              <a href="#" class="button" onclick="save_param_measures_pictures ('pictures', 'Ok')">Confirm</a>
                                                              
                                                        </div>
                                                          <div class="col-md-5 mt-3 offset-md-1" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="1600">
                                                              <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                                                                    <div class="carousel-inner">
                                                                        <div class="carousel-item active">
                                                                            <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                                                            <div class="carousel-caption text-center">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Second slide">
                                                                            <div class="carousel-caption">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decomissionvn.github.io/lesThesEmilieBackup/assets/IMAGES/HOME/Carroussel-home1.jpg" alt="Third slide">
                                                                            <div class="carousel-caption">

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                        <span class="sr-only">Previous</span>
                                                                    </a>

                                                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                        <span class="sr-only">Next</span>
                                                                    </a>

                                                                </div>
                                                            </div> `;
}


