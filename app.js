var product1 = document.getElementById("product1")
var qty1 = document.getElementById("qty1")
var price1 = document.getElementById("price1")

var product2 = document.getElementById("product2")
var qty2 = document.getElementById("qty2")
var price2 = document.getElementById("price2")

var carts = document.getElementById("carts")
var total = document.getElementById("total")
var cash = document.getElementById("cash")
var change = document.getElementById("change")


function addOrder() {
            carts.textContent=""
            if (parseFloat(qty1.value) > 0){
             var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------'+ product1.textContent + '------ Php' + (parseFloat(qty1.value)*parseFloat(price1.textContent)) + '\n'
            //carts.textContent += carts.value.toString() + "\n";
            carts.textContent += order
                }
            if (parseFloat(qty2.value) > 0){
            var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------ Php' + (parseFloat(qty2.value)*parseFloat(price2.textContent)) + '\n'
            //carts.textContent += carts.value.toString() + "\n";
            carts.textContent += order
function calculateTotal() {
  var cartItems = document.querySelectorAll('.cart-item');
  var total = 0;
  var cashTendered = parseFloat(document.getElementById('cash').value);
  var change = 0;

  cartItems.forEach(function(item) {
    var price = parseFloat(item.querySelector('.price').textContent.replace(/[^\d.-]/g, ''));
    var quantity = parseInt(item.querySelector('input[type="number"]').value);
    total += price * quantity;
  });

  change = cashTendered - total;

  if (change < 0) {
    change = 0;
  } else if (change > cashTendered) {
    alert("Insufficient cash tendered");
    change = cashTendered;
  }


            }
            qty1.addEventListener("keyup", addOrder);
            qty2.addEventListener("keyup", addOrder);
