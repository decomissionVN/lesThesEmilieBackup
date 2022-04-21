Event_Listener_Upload_Picture_Logged();

function Event_Listener_Upload_Picture_Logged() {

    document.getElementById('submit_picture').addEventListener('click', function Upload_Picture() {
        event.preventDefault();

        var inputOrder = document.getElementsByTagName("input");
        let datenow = Date.now();
        let myFile = document.getElementById('picture').files[0];
        let userId = JSON.parse(window.localStorage.getItem('userId'));
        let token = JSON.parse(window.localStorage.getItem('token'));
        let queryParams = new URLSearchParams(window.location.search);
        //let choix = queryParams.get("subcategory");

        if (inputOrder[1].value && inputOrder[2].value && inputOrder[3].value && myFile){
            console.log(userId.userId);
            console.log(inputOrder[1].value);

            var formData = new FormData();
            formData.append("picture", myFile);
            formData.append("userId", userId.userId);
            formData.append("category", "souvenirs");
            formData.append("subcategory", "diverses");
            formData.append("name", inputOrder[1].value);
            formData.append("price", inputOrder[2].value);
            formData.append("comment", inputOrder[3].value);
            formData.append("name_en", inputOrder[4].value);
            formData.append("comment_en", inputOrder[5].value);
            formData.append("quantity", 1);
            formData.append("datenow", datenow);
            console.log(formData);

            fetch('https://api.lesthesdemilie.net/api/pictures/upload_photo', { method: "POST", headers: { 'Authorization': 'bearer ' + token.token_access } , body: formData })

                .then(response => picture_saved(response))
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

function clear_styles(){
    document.getElementById('theiere_choix').style.backgroundColor = "#ffffff";
    document.getElementById('tasse_choix').style.backgroundColor = "#ffffff";
    document.getElementById('boite_choix').style.backgroundColor = "#ffffff";
    document.getElementById('autre_choix').style.backgroundColor = "#ffffff";
}

function view_Product(_id){
    event.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("ProductId", _id);
        window.setTimeout(window.location.replace("https://decommissionvn.github.io/lesThesEmilieBackup/Products/Preview_product.html" + "?" + queryParams.toString()), 5000);
}