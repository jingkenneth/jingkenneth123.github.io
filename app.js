function calculateTotal() {
  var cartItems = document.querySelectorAll('.cart-item');
  var total = 0;

  cartItems.forEach(function(item) {
    var productId = item.querySelector('label').id;
    var quantity = parseInt(item.querySelector('input[type="number"]').value);
    var price = parseFloat(document.getElementById(productId.replace('product', 'price')).textContent.replace(/[^\d.-]/g, ''));

    total += price * quantity;
  });

  document.getElementById('total').value = "Total: $" + total.toFixed(2);
}

// Call the function when the quantity input fields change
document.querySelectorAll('input[type="number"]').forEach(function(input) {
  input.addEventListener('input', function() {
    calculateTotal();
  });
});

// Call the function when the cash tendered input field changes
document.getElementById('cash').addEventListener('input', function() {
  calculateTotal();
});
