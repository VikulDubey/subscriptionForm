const userEmail = document.querySelector("#userEmail");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("form");
const error = document.querySelector(".error");
let emailValue;
function emailValidation() {
  emailValue = userEmail.value;
  if (emailValue.length === 0) {
    error.innerText = "Please enter your email address";
    error.classList.add("show-error");
    setTimeout(() => {
      error.classList.remove("show-error");
    }, 3000);
    return false;
  } else {
    if (!emailValue.match(/^[A-Za-z0-9.-_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/)) {
      error.innerHTML = "Invalid email address";
      error.classList.add("show-error");
      return false;
    } else {
      error.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
      error.classList.add("show-error");
      return true;
    }
  }
}

userEmail.addEventListener("keyup", emailValidation);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailValidation() === true) {
    form.submit();
    localStorage.setItem("email", emailValue);
  } else {
    error.innerText = "fix the error";
    error.classList.add("show-error");
  }
});
