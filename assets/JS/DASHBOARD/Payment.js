//GET THE MEASURES FOR THE USER ID

function User_exists(translation) {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    let queryParams = new URLSearchParams(window.location.search);
    let orderId = queryParams.get('orderId');

    if (token && userId) {
        fetch('https://api.lesthesdemilie.net/api/orders/orderGetOne' + '/' + orderId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_order(response, translation, orderId))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }
}

function display_order(response, translation, orderId) {

    if (response.length !== 0){
        console.log('no array');
        let orderlist = [];
        class Order {
            constructor(_id, userId, price, picture, status) {
                this.__id = _id;
                this._userId = userId;
                this._price = price;
                this._picture = picture;
                this._status = status;
            }

            get userId() {
                return this._userId
            }

            set userId(_userId) {
                this._userId = this.userId
            }

            get price() {
                return this._price
            }

            set price(_price) {
                this._price = this.price
            }
            get picture() {
                return this._picture
            }
            set picture(_picture) {
                this._picture = this.picture
            }
            get status() {
                return this._status
            }
            set status(_status) {
                this._status = this.status
            }
        }

        for (let i = 0; i < response.length; i++) {

            orderlist.push(new Order(response[i]._id, response[i].email, response[i].price, response[i].picture, response[i].status));
        }
        console.log(orderlist);

        let HTMLOrderlist = "";
            
        orderlist.forEach(Order => {
            let file = Order.picture.split('/images');
            HTMLOrderlist += `
            <div class="col-md-6 mb-5">
                <div id="orderId">
                    <p>${translation.Order_id} <b>${Order.__id}</b></p>
                    <p>${translation.Order_Email} <b>${Order._userId}</b></p>
                    <p>${translation.Order_Price} <b>${Order._price}</b></p>
                    <p>${translation.Order_Status} <b>${Order._status}</b></p>
                </div>
            </div>
            <div class="col-md-6 mb-5">
                <div class="orderlist">
                    <img src="https://decommissionvn.github.io/lesThesEmilieBackup/https://decommissionvn.github.io/lesThesEmilieBackup/backend/images${file[1]}" alt="Tailoring order" class="width70"/>
                </div>
            </div>

            <div class="separation col-12 mb-5">
            </div>

            
            `
            Display_price_device(Order._price, Order._status, orderId, response);
        })

        document.getElementById('picture_order').innerHTML = HTMLOrderlist;
        var elements = document.getElementsByClassName('Paid');
            for(var i=0; i<elements.length; i++) { 
            elements[i].innerHTML= translation.Follow_order;
        }
    } else if (response.length === 0){
        console.log('array');
        document.getElementById('picture_order').innerHTML = `
        <div class="text-center">
            <h3>${translation.No_order}</h3>
        </div>`;
    }
}

function Display_price_device(price, status, orderId, response) {
    let language = localStorage.getItem("language");
    console.log(price);
    console.log(status);
    console.log(response[0].userId);

    if (language === 'fr'){
        let translation = {
            Reorder : "Recommander", price_shipment : "Pour confirmer l'envoi, veuillez régler le solde ", price_remaining : "Le montant à régler avant l'envoi est de ", your_payment : "vous pouvez confirmer votre commande", explaination : "Le design de votre pièce est terminée! Pour lancer la confection, nos tailleurs requierent un premier payement. Le solde vous sera demandé lorsque le costume sera confectionné afin de confirmer son envoi.", price_total : "Le prix total de votre pièce est :", price_now : "Le prix à régler pour lancer la confection est : ", confection : "Votre pièce est en confection", ready : "Votre pièce est finalisée", explaination_confection : "Votre pièce est maintenant en confection. Le status sera modifié à 'Ready' losque votre pièce sera prête. Vous serez également informé par mail.", explaination_ready : "Votre pièce est prête à être envoyé. Vous pouvez maintenant régler le solde de votre création.", on_way : "Votre paquet est en chemin!", explaination_on_way : "Your costume a été envoyé. Vous le recevrez bientot.", delivered : "Votre produit a bien été livré.", explaination_delivered : "Nous espérons que vous avez apprécié votre pièce sur mesure! Vous pouvez à tout moment recommander cette création. Pour en changer un détail, veuillez contacter votre tailleur pour affiner votre choix!"
        }
        Display_price_device_translated(price, status, translation, orderId, response)
    } else if (language === 'en'){
        let translation = {
            Reorder: "Order again", price_shipment : "To confirm the shipment, finalize your payment of ", price_remaining : "Remaining payment needed before shipment is ", your_payment : "You can now confirm your order", explaination : "The design of your tailored piece is finalized! To start the confection, our tailors require a first payment. The rest will be needed once the confection is finished, in order to ship your product.", price_total : "The total price of your creation is :", price_now : "The amount needed to start the confection is : ", confection : "Your creation is being tailored", ready : "Your tailored piece is ready", explaination_confection : "Your outfil is being tailored at the moment. The status will be updated to 'Ready' once ready to ship.", explaination_ready : "Your tailored piece is ready and packed. You can now finalize your payment in order to receive your tailored piece.", on_way : "Your parcel is on its way!", explaination_on_way : "Your suit have been sent and you will receive it shortly", delivered : "Your product was delivered successfully", explaination_delivered : "We hope you enjoyed your creation! You can now reorder this model anytime. In order to modify the color, the fabric or the measures, get in touch with your personal tailor!"
        }
        Display_price_device_translated(price, status, translation, orderId, response)
    } 

    function Display_price_device_translated(price, status, translation, orderId, response){
        let price_half = price/2;

        if (status === 'Awaiting_payment'){
            document.getElementById('Price_summarize').innerHTML = `
            <h2>${translation.your_payment}</h2>
            <p>${translation.explaination}</p>
            <p>${translation.price_total} ${price} EUR</p>
            <p>${translation.price_now} ${price} EUR</p>
            `
            Display_button_correct(price, status, orderId, response);
        } 
        
        else if (status === 'Confection'){
            document.getElementById('Price_summarize').innerHTML = `
            <h2>${translation.confection}</h2>
            <p>${translation.explaination_confection}</p>
            <p>${translation.price_total} ${price} EUR</p>
            <p>${translation.price_remaining} ${price_half} EUR</p>
            `
            Display_button_correct(price, status, orderId, response);
        } 
        
        else if (status === 'Ready'){
            document.getElementById('Price_summarize').innerHTML = `
            <h2>${translation.ready}</h2>
            <p>${translation.explaination_ready}</p>
            <p>${translation.price_total} ${price} EUR</p>
            <p>${translation.price_shipment} ${price_half} EUR</p>
            `
            document.getElementById('payment_PP_button').style.display = "block";
            Display_button_correct(price, status, orderId, response);
        } 

        else if (status === 'on_way'){
            document.getElementById('Price_summarize').innerHTML = `
            <h2>${translation.on_way}</h2>
            <p>${translation.explaination_on_way}</p>
            <p>${translation.price_total} ${price} EUR</p>
            `
            document.getElementById('payment_PP_button').style.display = "none";
            Display_button_correct(price, status, orderId, response);
        } 
        
        else if (status === 'delivered'){
            document.getElementById('Price_summarize').innerHTML = `
            <h2>${translation.delivered}</h2>
            <p>${translation.explaination_delivered}</p>
            <p>${translation.price_total} ${price} EUR</p>
            <a href="#" onclick="reorder_this_piece()" class="button">${translation.Reorder}</a>
            `
            document.getElementById('payment_PP_button').style.display = "none";
            Display_button_correct(price, status, orderId, response);
        }
    }
}

//THE PAYMENT BUTTON IS PRESENTED FOR ALL THE STEPS

//AWAITING PAYMENT

function Display_button_correct(price, status, orderId, response) {
    console.log(response[0].userId);

    if (status === 'Awaiting_payment') {
    console.log('awaiting');
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'white',
            layout: 'vertical',
            label: 'pay',
          },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency: "USD",
                value: price
              }
            }]
          });
        },
        
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
              change_status('Confection');
            });
          },
      }).render('#paypal-button-container'); // Display payment options on your web page
    } 

//READY

    else if (status === 'Ready') {
        console.log('confection');
        paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'white',
                layout: 'vertical',
                label: 'pay',
              },
    
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency: "USD",
                    value: price
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    change_status('on_way');
                });
              },
          }).render('#paypal-button-container'); // Display payment options on your web page
        }
}

//THE CHANGE OF THE STATUS

function change_status(status){
    console.log('In the change status function');
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    let queryParams = new URLSearchParams(window.location.search);
    let orderId = queryParams.get('orderId');

    if (token && userId) {
        fetch('https://api.lesthesdemilie.net/api/orders/orderGetOne' + '/' + orderId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => update_status(response, status))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }   
}

function update_status(response, status){
    let order_new = {
        userId: response[0].userId,
        datenow: response[0].datenow,
        price: response[0].price,
        email: response[0].email,
        status: status,
        comment: response[0].comment,
        picture: response[0].picture,
    }

    console.log('ordernew' + order_new);
    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));
    let queryParams = new URLSearchParams(window.location.search);
    let orderId = queryParams.get('orderId');

    fetch('https://api.lesthesdemilie.net/api/orders/orderUpdateOne' + '/' + orderId, { method: "PUT", headers: { 'Content-Type': "application/json", 'Authorization': 'bearer ' + token.token_access }, body: JSON.stringify(order_new) }).then(response => response.json()).then(response => reload_page(response))
    .catch(function (error) {
        console.log('TOKEN ERROR ' + error.message)
    })
}

function reload_page(response) {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set('Payment', '200');
    window.setTimeout(window.location.replace("My_Orders.html" + "?" + queryParams.toString()), 5000);
}






