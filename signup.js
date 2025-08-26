// === 1. Name fields allow only letters ===
document.getElementById("fname").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z ]/g, ""); // only alphabets
});
document.getElementById("lname").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z ]/g, "");
});

// === 2. Contact field allow only numbers ===
document.getElementById("contact").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, ""); // only digits
});

// === 3. Active field highlight with #00796b ===
const inputs = document.querySelectorAll(".custom-input");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#00796b";
    input.style.boxShadow = "0 0 5px rgba(0,121,107,0.5)";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "";
    input.style.boxShadow = "";
  });
});

// === 4. Checkbox (agree) → highlight same color when checked ===
const terms = document.getElementById("terms");
terms.addEventListener("change", () => {
  if (terms.checked) {
    terms.style.outline = "2px solid #00796b";
    terms.style.boxShadow = "0 0 5px rgba(0,121,107,0.5)";
  } else {
    terms.style.outline = "";
    terms.style.boxShadow = "";
  }
});

// === 5. Show/Hide password toggle ===
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.classList.remove("bi-eye-slash");
    togglePassword.classList.add("bi-eye");
  } else {
    password.type = "password";
    togglePassword.classList.remove("bi-eye");
    togglePassword.classList.add("bi-eye-slash");
  }
});
