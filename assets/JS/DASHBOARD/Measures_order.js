User_already_measured();

//GET THE MEASURES FOR THE USER ID

function User_already_measured() {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token == null || userId == null){
        document.getElementById('Measures_article').innerHTML = `<h2 class="pb-3 pt-3">You are not connected!</h2>
                                                             <p>In order to ease the measurment process and allow your identification, you need to create an account  or login.</p>
                                                             <p>Create your profile!</p>
                                                            <form method="post" id="contact_measures" autocomplete="on">
                                                                    <label for="Name">Name</label>
                                                                    <input type="text" name="Name" id="Name_measures" placeholder="Name Surname" required>
                                                                    <div id="Name_warn_measures">Please let us know your name!</div>

                                                                    <label for="Email">Email</label>
                                                                    <input type="text" name="Email" id="Email_measures" placeholder="Email" required>
                                                                    <div id="Email_warn_measures">Enter your Email adress</div>
                                                                    <div id="Email_warn_unique_measures">This Email is already used!</div>
                                                                    
                                                                    <label for="Password">nom</label>
                                                                    <input type="text" name="Password" id="Password_measures" placeholder="Password" required>
                                                                    <div id="Password_warn_measures">Please choose a password</div>

                                                                    <label for="CGU">General conditions of Use</label>
                                                                    <p class="m-0"><input type="checkbox" name="CGU" id="CGU_measures" placeholder="CGU" required> I read and accept the <a id="CGU_link" href="https://decommissionvn.github.io/lesThesEmilieBackup/CGU/Cgu.html" alt="CGU Trois-Fils">CGU<a/></p>
                                                                    <div id="CGU_warn_measures">Please agree with our CGU</div>

                                                                    <div class="mt-4 mb-3">
                                                                        <a href="#" class="button" onclick="Signup_measures()">Signup</a>
                                                                    </div>
                                                            </form>
                                                            <div class="mb-5">
                                                                <a href="#" class="button mt-2 mb-2" onclick="Login_Menu()">I aleady have an account</a>
                                                             </div>`;

    } else {
        fetch('https://api.lesthesdemilie.net/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.text()).then(response => display_measure_saved(response))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }
}

//CHECK IF THE MEASURE OF THE USER HAVE BEEN TAKEN

function display_measure_saved(response) {
    let response_json = JSON.parse(response);
    console.log(response_json);

    if (response_json.message === 'measures not taken') {
        document.getElementById('Measures_article').innerHTML = `<h2 class="pb-3 pt-3">It's time to take your measures!</h2>
                                                             <p>In order to ease the measurment process, our tailors designed the following form. Follow-up the steps and create your own custom piece.</p>
                                                             `;

        Take_Measures_units();

    } else if (response_json.measure15 !== "...") {
        window.location.replace('https://decommissionvn.github.io/lesThesEmilieBackup/HTML/LADIES/Appointment_measures.html');
    
    } else if (response_json.measure14 === "...") {
        console.log('Inside');

        Take_Measures(response_json);

    } else if (response_json.measure14 !== "...") {
        document.getElementById('Measures_article').innerHTML = `<h2 class="pb-3 pt-3">You have already taken your measures</h2>
                                                             <p>You can update your measures or contact your personal tailor if you have any question</p>
                                                             `;
        console.log(response);
        Display_Measures(response);
        display_current_step('15', 'Neck');
        
    } 
}

//FUNCTIONS SIGNUP

function Signup_measures() {
    event.preventDefault();
    var inputOrder = document.getElementsByTagName("input");
    var user = {
        name: inputOrder[2].value,
        email: inputOrder[3].value,
        password: inputOrder[4].value,
    }
    console.log(user);

    if (user.name === "") {
        Clear_Style_Signup_Form();
        document.getElementById('Name_warn_measures').style.display = 'block';
    } else if (user.email === "") {
        Clear_Style_Signup_Form();
        document.getElementById('Email_warn_measures').style.display = 'block';
    } else if (user.password === "") {
        Clear_Style_Signup_Form();
        document.getElementById('Password_warn_measures').style.display = 'block';
    } else if (document.getElementById('CGU_measures').checked) {
        Clear_Style_Signup_Form();
        fetch('https://api.lesthesdemilie.net/api/auth/signup', { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(user) }).then(response => response.json()).then(response => user_saved_signup_measures(response))
            .catch(function (error) {
                alert('Please try again - ' + error.message)
            })
    } else {
        Clear_Style_Signup_Form();
        document.getElementById('CGU_warn_measures').style.display = 'block';
    }
}

function Clear_Style_Signup_Form() {
    document.getElementById('Name_warn_measures').style.display = 'none';
    document.getElementById('Email_warn_measures').style.display = 'none';
    document.getElementById('Password_warn_measures').style.display = 'none';
    document.getElementById('Email_warn_unique_measures').style.display = 'none';
    document.getElementById('CGU_warn_measures').style.display = 'none';
}

function user_saved_signup_measures(response) {

    console.log(response);

    if (response.error === undefined) {

        let token = {
            token_access: response.token
        }

        let userId = {
            userId: response.userId
        }

        Clear_Style_Signup_Form();
        window.localStorage.setItem('token', JSON.stringify(token));
        window.localStorage.setItem('userId', JSON.stringify(userId));
        document.getElementById('Popup__background').style.display = 'none';
        window.setTimeout(window.location.reload(), 5000);

    } else if (response.error.errors.email.kind !== null) {
        Clear_Style_Signup_Form();
        document.getElementById('Email_warn_unique_measures').style.display = 'block';
    } else {
        alert('An error occured while you were signing up - Make sure to check your network connection and try again!')
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

    var userId = JSON.parse(window.localStorage.getItem('userId'));
    var token = JSON.parse(window.localStorage.getItem('token'));
    let datenow = Date.now();
    let unity = choice;

    let measures = {
        userId: userId.userId,
        datenow: datenow,
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
    console.log(step);
    let queryParams = new URLSearchParams(window.location.search);
    let unity = queryParams.get('unity');
    document.getElementById('Measures_form_' + step).innerHTML = `<div class="col-md-6 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                              <h2>${name}</h2>
                                                              <p class="text-justify">To carry out the first measure of the vest, you need to use the extremity of the shoulders passing by the bottom of the neck. Don't forget to follow the shoulder's neck.</p>
                                                              <label for="male">Measure of the ${name}   </label>
                                                              <input class="text-center mb-5" type="number" name="measure${step}" id="measure${step}_input" placeholder="${name}"> ${unity}
                                                              <a href="#" class="button" onclick="save_param_measures_put('measure${step}', 'measure${step}_input')">Confirm</a>
                                                              <div id="alert_empty" aria-label="custom suit empty field"></div>
                                                        </div>
                                                          <div class="col-md-5 mt-3 offset-md-1" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="1600">
                                                              <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                                                                    <div class="carousel-inner">
                                                                        <div class="carousel-item active">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                                                            <div class="carousel-caption text-center">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="Second slide">
                                                                            <div class="carousel-caption">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="Third slide">
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

//FUNCTION TO TAKE MEASURES - UNITS

function Take_Measures_units() {
    Hide_Other_Categories();
    document.getElementById('Measures_form_units').style.display = 'flex';
    document.getElementById('Measures_form_units').innerHTML = `<div class="col-md-10 offset-md-1 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                              <h2 class="pb-3">How to get ready?</h2>
                                                              <ul>
                                                                    <li id="Measures_Advise1">
                                                                        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/DASHBOARD/Calendar.png" alt="Tailoring profile" />
                                                                        <p>Empty your pockets</p>
                                                                    </li>
                                                                    <li id="Measures_Advise2">
                                                                        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/DASHBOARD/Simulator.png" alt="Tailoring profile" />
                                                                        <p>Keep your clothes on, preferably an adjusted shirt</p>
                                                                    </li>
                                                                    <li id="Measures_Advise3">
                                                                        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/DASHBOARD/Messages.png" alt="Tailoring profile" />
                                                                        <p>Ask a friend for help!</p>
                                                                    </li>
                                                              </ul>

                                                              <h2 class="pt-4 pb-3">Which unit do you use?</h2>
                                                              <div class="d-flex justify-content-around mb-3">
                                                                    <a href="#" onclick="save_param('unity', 'cm')" class="button_option" id="Measures_cm">Centimeters</a>
                                                                    <a href="#" onclick="save_param('unity', 'in')" class="button_option" id="Measures_in">Inches</a>
                                                              </div>
                                                            </div>`;

}



//FUNCTION TO TAKE MEASURES - MEASURES

function Take_Measures(response) {

    let queryParams = new URLSearchParams(window.location.search);
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    fetch('https://api.lesthesdemilie.net/api/auth/measuresGet' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access } })
        .then(response => response.text())
        .then(response => Take_Measures_fetch(response))
        .catch (function (error) {
            console.log('GET ' + error.message)
        })
}


function Take_Measures_fetch(response) {

    console.log('INSIDE THE TAKE.MEASURES');
        let response_json = JSON.parse(response);

        if (response_json.measure1 === "...") {

        //MEASURE NUMBER 1

        display_current_step('1', 'Shoulders');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ... ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

        } else if (response_json.measure2 === "...") {

        //MEASURE NUMBER 2

        display_current_step('2', 'Arms');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ... ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

        } else if (response_json.measure3 === "...") {

        //MEASURE NUMBER 3

        display_current_step('3', 'Stomack');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ... ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

        } else if (response_json.measure4 === "...") {

        //MEASURE NUMBER 3

        display_current_step('4', 'Shoulders');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ... ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure5 === "...") {

        //MEASURE NUMBER 5

        display_current_step('5', 'Belly');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ... ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure6 === "...") {

        //MEASURE NUMBER 6

        display_current_step('6', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ... ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure7 === "...") {

        //MEASURE NUMBER 7

        display_current_step('7', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ... ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure8 === "...") {

        //MEASURE NUMBER 8

        display_current_step('8', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure9 === "...") {

        //MEASURE NUMBER 9

        display_current_step('9', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure10 === "...") {

        //MEASURE NUMBER 10

        display_current_step('10', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure11 === "...") {

        //MEASURE NUMBER 11

        display_current_step('11', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure12 === "...") {

        //MEASURE NUMBER 12

        display_current_step('12', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${response_json.measure12} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure13 === "...") {

        //MEASURE NUMBER 13

        display_current_step('13', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${response_json.measure12} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure13_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('13', 'Measure')">Measure5 is ${response_json.measure13} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    }

        else if (response_json.measure14 === "...") {

        //MEASURE NUMBER 14

        display_current_step('14', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${response_json.measure12} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure13_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('13', 'Measure')">Measure5 is ${response_json.measure13} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure14_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('14', 'Measure')">Measure5 is ${response_json.measure14} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            console.log(response_json.measure15);
            console.log(response_json.measure14);

        } else if (response_json.measure15 === "...") {
            console.log('measeue15');
        //MEASURE NUMBER 15

        display_current_step('15', 'Stomach');
            document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${response_json.measure1} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${response_json.measure2} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${response_json.measure3} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${response_json.measure4} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${response_json.measure5} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure1 is ${response_json.measure6} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure2 is ${response_json.measure7} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure3 is ${response_json.measure8} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure4 is ${response_json.measure9} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure5 is ${response_json.measure10} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure5 is ${response_json.measure11} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${response_json.measure12} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure13_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('13', 'Measure')">Measure5 is ${response_json.measure13} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure14_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('14', 'Measure')">Measure5 is ${response_json.measure14} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
            document.getElementById('measure15_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('15', 'Measure')">Measure5 is ${response_json.measure15} ${response_json.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

    }

     else {
    }
}   

//REDIRECT USERS TO MODIFY A MEASURE

function Display_Step_measure(step, name) {
    event.preventDefault();
    Hide_Other_Categories();
    document.getElementById('Measures_form_' + step).style.display = 'flex';
    let queryParams = new URLSearchParams(window.location.search);
    let unity = queryParams.get('unity');
    if (unity == null) {
        unity = "";
    }

    document.getElementById('Measures_form_' + step).innerHTML = `<div class="col-md-6 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                              <h2>${name}</h2>
                                                              <p class="text-justify">To carry out the first measure of the vest, you need to use the extremity of the shoulders passing by the bottom of the neck. Don't forget to follow the shoulder's neck.</p>
                                                              <label for="male">Measure of the ${name}   </label>
                                                              <input class="text-center mb-5" type="number" name="measure${step}" id="measure${step}_input" placeholder='New measure'> ${unity}
                                                              <a href="#" class="button" onclick="save_param_measures_put('measure${step}', 'measure${step}_input')">Confirm</a>
                                                              <div id="alert_empty" aria-label="custom suit empty field"></div>
                                                        </div>
                                                          <div class="col-md-5 mt-3 offset-md-1" data-aos="fade" data-aos-easing="ease" data-aos-delay="200" data-aos-duration="1600">
                                                              <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                                                                    <div class="carousel-inner">
                                                                        <div class="carousel-item active">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                                                            <div class="carousel-caption text-center">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="Second slide">
                                                                            <div class="carousel-caption">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="Third slide">
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

//FUNCTION DISPLAY STEP UNITS

function Display_Step_Units() {
    event.preventDefault();
    Hide_Other_Categories();
    document.getElementById('Measures_form_units').style.display = 'flex';
    document.getElementById('Measures_form_units').innerHTML = `<div class="col-md-10 offset-md-1 mt-auto mb-auto text-center" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000">
                                                              <h2 class="pb-3">How to get ready?</h2>
                                                              <ul>
                                                                    <li id="Measures_Advise1">
                                                                        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/DASHBOARD/Calendar.png" alt="Tailoring profile" />
                                                                        <p>Empty your pockets</p>
                                                                    </li>
                                                                    <li id="Measures_Advise2">
                                                                        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/DASHBOARD/Simulator.png" alt="Tailoring profile" />
                                                                        <p>Keep your clothes on, preferably an adjusted shirt</p>
                                                                    </li>
                                                                    <li id="Measures_Advise3">
                                                                        <img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/DASHBOARD/Messages.png" alt="Tailoring profile" />
                                                                        <p>Ask a friend for help!</p>
                                                                    </li>
                                                              </ul>

                                                              <h2 class="pt-4 pb-3">Which unit do you use?</h2>
                                                              <div class="d-flex justify-content-around mb-3">
                                                                    <a href="#" onclick="save_param_put('unity', 'cm')" class="button_option" id="Measures_cm">Centimeters</a>
                                                                    <a href="#" onclick="save_param_put('unity', 'in')" class="button_option" id="Measures_in">Inches</a>
                                                              </div>
                                                            </div>`;
}

//FUNCTION TO DISPLAY ALREADY TAKEN MEASURES

function Display_Measures(measures) {
    let Measures = JSON.parse(measures);

    console.log(Measures);
    document.getElementById('units_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_Units()">You are using ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure1_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('1', 'Measure')">Measure1 is ${Measures.measure1} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure2_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('2', 'Measure')">Measure2 is ${Measures.measure2} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure3_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('3', 'Measure')">Measure3 is ${Measures.measure3} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure4_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('4', 'Measure')">Measure4 is ${Measures.measure4} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure5_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('5', 'Measure')">Measure5 is ${Measures.measure5} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure6_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('6', 'Measure')">Measure6 is ${Measures.measure6} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure7_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('7', 'Measure')">Measure7 is ${Measures.measure7} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure8_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('8', 'Measure')">Measure8 is ${Measures.measure8} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure9_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('9', 'Measure')">Measure9 is ${Measures.measure9} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure10_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('10', 'Measure')">Measure3 is ${Measures.measure10} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure11_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('11', 'Measure')">Measure4 is ${Measures.measure11} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure12_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('12', 'Measure')">Measure5 is ${Measures.measure12} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure13_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('13', 'Measure')">Measure6 is ${Measures.measure13} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure14_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('14', 'Measure')">Measure7 is ${Measures.measure14} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;
    document.getElementById('measure15_label').innerHTML = `<a href="#" class="text-center width100" onclick="Display_Step_measure('15', 'Measure')">Measure7 is ${Measures.measure15} ${Measures.unity}</a><img src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/GENERAL/ok.png" alt="Measure OK">`;

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
            }).then(response => reload_page(response))
                .catch(function (error) {
                    console.log('TOKEN ERROR ' + error.message)
                })

           
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
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="First slide">
                                                                            <div class="carousel-caption text-center">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="Second slide">
                                                                            <div class="carousel-caption">

                                                                            </div>
                                                                        </div>
                                                                        <div class="carousel-item">
                                                                            <img class="d-block w-100" src="https://decommissionvn.github.io/lesThesEmilieBackup/IMAGES/HOME/Carroussel-home1.jpg" alt="Third slide">
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
