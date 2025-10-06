// cart.js

// Add product to cart
function addToCart(productId) {
    const products = JSON.parse(localStorage.getItem("products"));
    const product = products.find(p => p.id === productId);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`Added "${product.name}" to cart!`);
}

// Show cart items (call this on cart.html or a future cart section)
function showCartItems(containerId = "cart-items") {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById(containerId);

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    container.innerHTML = "";
    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
            <hr>
        `;
        container.appendChild(div);
    });
}

// Remove item from cart by index
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCartItems(); // re-render
}
