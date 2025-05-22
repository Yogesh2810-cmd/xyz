document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".product button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const product = btn.parentElement;
      const name = product.getAttribute("data-name");
      const price = parseInt(product.getAttribute("data-price"));
      const image = product.querySelector("img").src;  // get image src

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name, price, image });  // include image in cart item
      localStorage.setItem("cart", JSON.stringify(cart));

      // ✅ Redirect to cart page after adding
      window.location.href = "cart.html";
    });
  });
});
