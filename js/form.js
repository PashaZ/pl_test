const form = document.getElementById("form");
const checkboxIcon = document.querySelector(".checkbox-icon");
const errorMessage = document.querySelector(".alert-error");
const successMessage = document.querySelector(".alert-success");

function formSend(event) {
  event.preventDefault();

  let error = formValidate(form);

  if (error) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = `Please fill in all fields`;
  } else {
    errorMessage.style.display = "none";
    successMessage.innerHTML = "Thank you, submit successful";
    successMessage.style.display = "block";
    setTimeout(() => (successMessage.style.display = "none"), 2000);
    form.reset();
  }
}

function formValidate(form) {
  let error = false;
  let inputs = document.querySelectorAll(".req");

  inputs.forEach((input) => {
    formRemoveError(input);

    if (input.classList.contains("tel")) {
      if (!checkTel(input)) {
        formAddError(input);
        error = true;
      }
    } else if (
      input.getAttribute("type") === "checkbox" &&
      input.checked === false
    ) {
      formAddError(input);
      error = true;
    } else {
      if (input.value === "") {
        formAddError(input);
        error = true;
      }
    }
  });

  return error;
}

function formAddError(input) {
  input.classList.add("error");
  checkboxIcon.classList.add("error");
}

function formRemoveError(input) {
  input.classList.remove("error");
  checkboxIcon.classList.remove("error");
}

function checkTel(input) {
  return /[0-9]/.test(input.value);
}

form.addEventListener("submit", formSend);
