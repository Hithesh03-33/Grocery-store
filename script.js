// Function for Add to Cart button
function addToCart() {
    alert("Item added to cart!");
  }
  
  // Optional: Simple search/filter feature
  const search = document.getElementById("search");
  const products = document.querySelectorAll(".product-card");
  
  search.addEventListener("input", () => {
    const query = search.value.toLowerCase();
    products.forEach(product => {
      const name = product.querySelector("h2").innerText.toLowerCase();
      product.style.display = name.includes(query) ? "block" : "none";
    });
  });