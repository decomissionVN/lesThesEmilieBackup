Event_Listener_Upload_Picture_Logged();
Event_Listener_choices();

function Event_Listener_Upload_Picture_Logged() {

    document.getElementById('submit_picture').addEventListener('click', function Upload_Picture() {
        event.preventDefault();

        let inputOrder = document.getElementsByTagName("input");
        let datenow = Date.now();
        let myFile = document.getElementById('picture').files[0];
        let userId = JSON.parse(window.localStorage.getItem('userId'));
        let token = JSON.parse(window.localStorage.getItem('token'));
        let queryParams = new URLSearchParams(window.location.search);
        let choix = queryParams.get("subcategory");

        if (inputOrder[1].value && inputOrder[2].value && inputOrder[3].value && choix && myFile){
            console.log(userId.userId);
            console.log(inputOrder[1].value);

            let formData = new FormData();
            formData.append("picture", myFile);
            formData.append("userId", userId.userId);
            formData.append("category", "tea");
            formData.append("subcategory", choix);
            formData.append("name", inputOrder[1].value);
            formData.append("price", inputOrder[2].value);
            formData.append("comment", inputOrder[3].value);
            formData.append("name_en", inputOrder[4].value);
            formData.append("comment_en", inputOrder[5].value);
            formData.append("quantity", 1);
            formData.append("datenow", datenow);

            console.log(formData.entries());
            console.log(...formData);

            fetch('http://localhost:3000/api/pictures/upload_photo', { method: "POST", headers: { 'Authorization': 'bearer ' + token.token_access, 'Enctype': 'multipart/form-data' } , body: formData })

                .then(response => console.log(response))
                .catch(function (error) {
                    alert('TOKEN ERROR ' + error.message)
                })
        } else {
            alert("Il faut remplir tous les champs pour que les produits s'affichent correctement");
        }
    });
}

function picture_saved(response) {
    console.log(response);
    window.location.reload();
}

function Event_Listener_choices(){
    document.getElementById('boite_choix').addEventListener('click', function Save_choice() {
        event.preventDefault();
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("subcategory", "boite");
        history.replaceState(null, null, "?"+queryParams.toString());
        clear_styles();
        document.getElementById('boite_choix').style.backgroundColor = "#dabebe";
    })

    document.getElementById('sachet_choix').addEventListener('click', function Save_choice() {
        event.preventDefault();
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("subcategory", "sachet");
        history.replaceState(null, null, "?"+queryParams.toString());
        clear_styles();
        document.getElementById('sachet_choix').style.backgroundColor = "#dabebe";
    })

    document.getElementById('Infusion_choix').addEventListener('click', function Save_choice() {
        event.preventDefault();
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("subcategory", "infusion");
        history.replaceState(null, null, "?"+queryParams.toString());
        clear_styles();
        document.getElementById('Infusion_choix').style.backgroundColor = "#dabebe";
    })

    document.getElementById('Vrac_choix').addEventListener('click', function Save_choice() {
        event.preventDefault();
        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("subcategory", "vrac");
        history.replaceState(null, null, "?"+queryParams.toString());
        clear_styles();
        document.getElementById('Vrac_choix').style.backgroundColor = "#dabebe";
    })
}

function clear_styles(){
    document.getElementById('boite_choix').style.backgroundColor = "#ffffff";
    document.getElementById('sachet_choix').style.backgroundColor = "#ffffff";
    document.getElementById('Infusion_choix').style.backgroundColor = "#ffffff";
    document.getElementById('Vrac_choix').style.backgroundColor = "#ffffff";
}