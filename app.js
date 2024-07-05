var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var product3 = document.getElementById("product3");
var qty3 = document.getElementById("qty3");
var price3 = document.getElementById("price3");

var product4 = document.getElementById("product4");
var qty4 = document.getElementById("qty4");
var price4 = document.getElementById("price4");

var product5 = document.getElementById("product5");
var qty5 = document.getElementById("qty5");
var price5 = document.getElementById("price5");


var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    var totalValue = 0;
    for (var i = 1; i <= 5; i++) {
        var qty = parseFloat(document.getElementById('qty' + i).value);
        var price = parseFloat(document.getElementById('price' + i).value);
        var product = document.getElementById('product' + i).textContent;
        if (!isNaN(qty) && qty > 0) {
            var order = qty.toString() + ' pc/s x ' + price + '------' + product + '------PHP ' + (qty * price) + '\n';
            document.getElementById('carts').textContent += order;
            totalValue += qty * price;
        }
    }
    document.getElementById('total').value = "Total: PHP " + totalValue.toFixed(2);
}

function calculateChange() {
    const total = parseFloat(document.getElementById('total').value);
    const cash = parseFloat(document.getElementById('cash').value);

    if (isNaN(total) || isNaN(cash)) {
        return;
    }
    const change = cash - total;

    if (change >= 0) {
        document.getElementById('change').value = change.toFixed(2);
    } else {
        document.getElementById('change').value = 'Insufficient cash provided';
    }
}

qty1.addEventListener("input", addOrder);
qty2.addEventListener("input", addOrder)
qty3.addEventListener("input", addOrder);
qty4.addEventListener("input", addOrder);
qty5.addEventListener("input", addOrder);

