// Wait until the DOM (HTML elements) is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its ID
  const button = document.getElementById("changeTextBtn");

  // Get the heading element by its ID
  const heading = document.getElementById("greeting");

  // Add a click event listener to the button
  button.addEventListener("click", function () {
    // Change the text of the heading when button is clicked
    heading.textContent = "Have a great day!";
  });
});