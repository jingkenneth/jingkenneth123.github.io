function calculateOrder() {
  var cartItems = [];
  var total = 0;
  var cashTendered = parseFloat(document.getElementById('cash').value);
  var change = 0;

  // Loop through each product
  for (var i = 1; i <= 5; i++) {
    var productId = 'product' + i;
    var priceId = productId + 'price';
    var quantityId = productId + '1';

    var quantity = parseInt(document.getElementById(quantityId).value);
    var price = parseFloat(document.getElementById(priceId).textContent.replace(/[^\d.-]/g, ''));

    cartItems.push({
      id: productId,
      quantity: quantity,
      price: price
    });

    total += quantity * price;
  }

  // Calculate the change
  change = cashTendered - total;

  if (change < 0) {
    change = 0;
  }

  // Update the order, total, and change fields
  document.getElementById('orders').value = "";
  for (var i = 0; i < cartItems.length; i++) {
    document.getElementById('orders').value += cartItems[i].id + " x " + cartItems[i].quantity + "\n";
  }
  document.getElementById('total').value = "Total: $" + total.toFixed(2);
  document.getElementById('change').value = "Change: $" + change.toFixed(2);
}

// Call the function when the quantity input fields change
for (var i = 1; i <= 5; i++) {
  var quantityId = 'qty' + i;
  document.getElementById(quantityId).addEventListener('input', function() {
    calculateOrder();
  });
}

// Call the function when the cash tendered input field changes
document.getElementById('cash').addEventListener('input', function() {
  calculateOrder();
});
