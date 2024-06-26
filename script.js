// Open the modal with the default product image
function openModal() {
  var modal = document.getElementById("myModal");
  var productImage = document.getElementById("productImage");
  productImage.src = "image/classic-tee.jpg";  // Set the image source directly
  modal.style.display = "block";
}



// Add event listener to close modal when clicking outside of it
window.addEventListener('click', function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none"; // Close the modal if the clicked element is the modal itself
  }
});

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}



// Variable to store selected size
var selectedSize = "";

// Select size of the product
function selectSize(size) {
  selectedSize = size;
  // Remove 'selected' class from all buttons
  var buttons = document.querySelectorAll('.size-btn');
  buttons.forEach(function(button) {
    button.classList.remove('selected');
  });
  // Add 'selected' class to the clicked button
  event.target.classList.add('selected');
}

// Add item to cart
function addToCart() {
  if (selectedSize === "") {
    alert("Please select a size before adding to cart.");
    return;
  }
  if (document.querySelectorAll('#cartItems li').length >= 5) {
    alert("You can only add up to 5 items to the cart per order.");
    return;
  }

  var cartItems = document.getElementById("cartItems");
  var li = document.createElement("li");
  li.textContent = "Product Name - Size: " + selectedSize; // Replace with actual product name
  var removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function() {
    li.remove();
  };
  li.appendChild(removeBtn);
  cartItems.appendChild(li);
}



// // Counter for the cart
var cartCount = 0;

cartCount++; // Increment the cart counter

// Update cart counter in HTML
document.getElementById("cartCounter").textContent = cartCount;

var cartItems = document.getElementById("cartItems");
var li = document.createElement("li");
li.textContent = "Product Name - Size: " + selectedSize; // Replace with actual product name
var removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";
removeBtn.onclick = function() {
  li.remove();
  // Decrement cart counter when removing item
  cartCount--;
  // Update cart counter in HTML
  document.getElementById("cartCounter").textContent = cartCount;
};
li.appendChild(removeBtn);
cartItems.appendChild(li);
