var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
  carts.textContent = "";
  var totalValue = 0;
  if (parseFloat(qty1.value) > 0) {
    var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------' + product1.textContent + '------PHP ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)) + '\n';
    carts.textContent += order;
    totalValue += parseFloat(qty1.value) * parseFloat(price1.textContent);
  }
  if (parseFloat(qty2.value) > 0) {
    var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------PHP ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)) + '\n';
    carts.textContent += order;
    totalValue += parseFloat(qty2.value) * parseFloat(price2.textContent);
  }
  total.value = "Total: PHP " + totalValue.toFixed(2);
}
function calculateChange() {
  var cashValue = parseFloat(cash.value);
  var changeValue;
  if (cashValue >= totalValue) {
    changeValue = cashValue - totalValue;
  } else {
    changeValue = "Insufficient funds";
  }
  change.value = "Change: PHP " + changeValue.toFixed(2);
}
function calculateChange() {
  var cashValue = parseFloat(cash.value);
  var changeValue;
  if (cashValue >= totalValue) {
    changeValue = cashValue - totalValue;
  } else {
    changeValue = "Insufficient funds";
  }
  change.value = "Change: PHP " + changeValue.toFixed(2);
}


}

qty1.addEventListener("input", addOrder);
qty2.addEventListener("input", addOrder);

cash.addEventListener("input", calculateChange);
