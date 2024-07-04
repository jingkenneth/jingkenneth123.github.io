function calculateOrder() {
  var cartItems = document.querySelectorAll('.cart-item');
  var total = 0;
  var cashTendered = parseFloat(document.getElementById('cash').value);
  var change = 0;

  cartItems.forEach(function(item) {
    var productId = item.querySelector('label').id;
    var quantity = parseInt(item.querySelector('input[type="number"]').value);
    var price = parseFloat(document.getElementById(productId.replace('product', 'price')).textContent.replace(/[^\d.-]/g, ''));

    total += price * quantity;
  });

  change = cashTendered - total;

  if (change < 0) {
    change = 0;
  }

  document.getElementById('total').value = "Total: $" + total.toFixed(2);
  document.getElementById('change').value = "Change: $" + change.toFixed(2);
}

// Call the function when the quantity input fields change
document.querySelectorAll('input[type="number"]').forEach(function(input) {
  input.addEventListener('input', function() {
    calculateOrder();
  });
});

// Call the function when the cash tendered input field changes
document.getElementById('cash').addEventListener('input', function() {
  calculateOrder();
});
