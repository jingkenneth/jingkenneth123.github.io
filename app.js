var product1=document.getElementById("product1")
var qty1=document.getElementById("qty1")
var price1=document.getElementById("price1")

var product2=document.getElementById("product2")
var qty2=document.getElementById("qty2")
var price2=document.getElementById("price2")

var carts=document.getElementById("carts")
var total=document.getElementById("total")
var cash=document.getElementById("cash")
var change=document.getElementById("change")
document.getElementById("total").value = "Total: PHP " + total.toFixed(2);
document.getElementById("change").value = "Change: PHP " + change.toFixed(2);

function addOrder() {
  carts.textContent = "";
  if (parseFloat(qty1.value) > 0) {
    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------' + product1.textContent + '------PHP ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
    carts.textContent += order;
  }
  if (parseFloat(qty2.value) > 0) {
    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------PHP ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
    carts.textContent += order;
  }
  function calculateTotalAndChange() {
  var total = 0;
  var cashTendered = parseFloat(cash.value);
  var change = 0;

  if (parseFloat(qty1.value) > 0) {
    total += parseFloat(qty1.value) * parseFloat(price1.textContent);
  }
  if (parseFloat(qty2.value) > 0) {
    total += parseFloat(qty2.value) * parseFloat(price2.textContent);
  }

  if (cashTendered >= total) {
    change = cashTendered - total;
  } else {
    change = "Insufficient funds";
  }
}

qty1.addEventListener("input", addOrder);
qty2.addEventListener("input", addOrder);
