function addToCart(productName) {
  alert(productName + " added to cart!");
  console.log("Product added:", productName);
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      alert("Thank you, " + name + "! Your message has been sent.");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});
