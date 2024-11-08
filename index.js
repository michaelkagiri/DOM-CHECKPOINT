const cart = document.querySelector(".cart");
const totalDisplay = document.querySelector(".total");

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach(item => {
    const quantity = parseInt(item.querySelector(".item-quantity").value);
    const price = parseFloat(item.querySelector(".item-price").innerText.replace('$', ''));
    total += quantity * price;
  });
  totalDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

cart.addEventListener("change", updateTotal);

cart.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    e.target.closest(".cart-item").remove();
    updateTotal();
  }
});

updateTotal(); // Initialize total
