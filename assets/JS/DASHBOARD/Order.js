//GET THE MEASURES FOR THE USER ID

function User_exists(translation) {

    var token = JSON.parse(window.localStorage.getItem('token'));
    var userId = JSON.parse(window.localStorage.getItem('userId'));

    if (token && userId) {
        fetch('https://api.lesthesdemilie.net/api/orders/orderGetPending' + '/' + userId.userId, { method: "GET", headers: { 'Authorization': 'bearer ' + token.token_access }}).then(response => response.json()).then(response => display_order(response, translation))
        .catch(function (error) {
            console.log('GET ' + error.message)
        })
    }
}

function display_order(response, translation) {
let response_reverse = response.reverse();
console.log(response_reverse);

    if (response_reverse.length !== 0){
        console.log('no array');
        let orderlist = [];
        class Order {
            constructor(_id, userId, price, picture, status, name, name_en, comment, comment_en, quantity, productId) {
                this.__id = _id;
                this._userId = userId;
                this._price = price;
                this._picture = picture;
                this._status = status;
                this._name = name;
                this._comment = comment;
                this._name_en = name_en;
                this._comment_en = comment_en;
                this._quantity = quantity;
                this._productId = productId;
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
            get name() {
                return this._name
            }
            set name(_name) {
                this._name = this.name
            }
            get comment() {
                return this.c_omment
            }
            set comment(_comment) {
                this._comment = this._comment
            }
            get name_en() {
                return this._name
            }
            set name_en(_name_en) {
                this._name = this.name
            }
            get comment_en() {
                return this._comment_en
            }
            set comment_en(_comment_en) {
                this._comment_en = this._comment_en
            }
            get quantity() {
                return this._quantity
            }
            set quantity(_quantity) {
                this._quantity = this.quantity
            }
            get productId() {
                return this._productId
            }
            set productId(_productId) {
                this._productId = this.productId
            }
        }

        for (let i = 0; i < response_reverse.length; i++) {

            orderlist.push(new Order(response_reverse[i]._id, response_reverse[i].email, response_reverse[i].price, response_reverse[i].picture, response_reverse[i].status, response_reverse[i].name, response_reverse[i].comment, response_reverse[i].name_en, response_reverse[i].comment_en, response_reverse[i].quantity, response_reverse[i].productId));
        }
        console.log(orderlist);

        let HTMLOrderlist = "";
            
        orderlist.forEach(Order => {
            let file = Order.picture.split('/images');
            HTMLOrderlist += `
            <div class="col-md-6 mb-5">
                <div id=${Order.__id} class="order_div">
                    <p>${Order.__id}</p>
                    <p><b>${Order._name}</b></p>
                    <p><b>${Order._comment}</b></p>
                    <p><b>${Order._price}</b></p>
                    <p><b>${Order._status}</b></p>
                </div>
                <div class="col-12 text-center mb-5">
                    <a class="button ${Order._status}" href="#" onclick="PaymentorderId('${Order._productId}')">${translation.Finalize}</a>
                </div>
            </div>

            <div class="col-md-6 mb-5">
                <div class="orderlist text-center">
                    <img src="https://decomissionvn.github.io/lesThesEmilieBackup/backend/images${file[1]}" alt="Tailoring order" class="width70"/>
                </div>
            </div>

            <div class="separation col-12 mb-5">
            </div>
            
            `
        })

        document.getElementById('orders').innerHTML = HTMLOrderlist;

        var elements = document.getElementsByClassName('paid');
            for(var i=0; i<elements.length; i++) { 
            elements[i].style.display = "none";
        }


    } else if (response.length === 0){
        console.log('array');
        document.getElementById('picture_order').innerHTML = `
        <div class="text-center">
            <h3>${translation.No_order}</h3>
        </div>`;
    }
}

function PaymentorderId(Order__id) {
    event.preventDefault();
    let queryParams = new URLSearchParams(window.location.search);
        queryParams.set('orderId', Order__id);
        window.setTimeout(window.location.replace("Payment.html" + "?" + queryParams.toString()), 5000);
}