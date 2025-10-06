// Sample product data
const products = [
    { id: 1, name: "Product A", description: "Description of Product A", price: 29.99 },
    { id: 2, name: "Product B", description: "Description of Product B", price: 49.99 },
    { id: 3, name: "Product C", description: "Description of Product C", price: 19.99 },
];

// Function to render product list on the page
function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });
}

// Placeholder addToCart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added "${product.name}" to cart!`);
}

// Initialize product list on page load
window.onload = renderProducts;
