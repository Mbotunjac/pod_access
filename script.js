const email = document.getElementById("email");
const form = document.querySelector("form");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function validateEmail() {
  var filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === "") {
    showError(email, "Oops! Please add your email");
  } else if (!filter.test(email.value)) {
    showError(email, "Oops! Please check your email");
    email.focus;
    return false;
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  emailInput = email.value;
  validateEmail();
});
