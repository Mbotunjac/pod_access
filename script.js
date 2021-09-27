// Simple Check to validate form.

const email = document.getElementById("email");
const form = document.querySelector("form");

// Function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function checkEmail() {
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (email.value === "") {
    showError(email, "Oops! Please add your email");
  } else if (!filter.test(email.value)) {
    showError(email, "Oops! Please check your email");
    email.focus;
    return false;
  }
}

// Evenlistener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailInput = email.value;
  checkEmail();
});
