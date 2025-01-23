// scripts.js

// Function to add a product to the cart
function addToCart(productId) {
    // Retrieve the cart from local storage or initialize it
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    
    if (existingProductIndex > -1) {
        // If the product exists, increase the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If the product does not exist, add it to the cart
        const product = { id: productId, quantity: 1 };
        cart.push(product);
    }
    
    // Save the updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

// Function to display the cart items
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear existing items

    // Loop through cart items and display them
    cart.forEach(item => {
        const productElement = document.createElement('div');
        productElement.innerText = `Product ID: ${item.id}, Quantity: ${item.quantity}`;
        cartContainer.appendChild(productElement);
    });

    // Calculate and display total cost (assuming a function getProductPrice exists)
    const totalCost = cart.reduce((total, item) => total + getProductPrice(item.id) * item.quantity, 0);
    const totalElement = document.getElementById('total-cost');
    totalElement.innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}

// Function to filter products based on selected criteria
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const priceRange = document.getElementById('price-filter').value;
    const rating = document.getElementById('rating-filter').value;

    // Logic to filter products based on selected criteria
    // This would typically involve fetching products from a database or API
    // For demonstration, we will just log the selected filters
    console.log(`Filtering products by Category: ${category}, Price Range: ${priceRange}, Rating: ${rating}`);
}

// Function to handle user account management (login/logout)
function manageUserAccount(action) {
    if (action === 'login') {
        // Logic for user login
        alert('User logged in!');
    } else if (action === 'logout') {
        // Logic for user logout
        alert('User logged out!');
    }
}

// Function to initialize the application
function init() {
    // Display cart items on page load
    displayCart();
}

// Call the init function when the page loads
window.onload = init;