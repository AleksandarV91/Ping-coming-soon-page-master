const btn = document.querySelector(".btn");
const err = document.querySelector(".err");
const input = document.querySelector(".email");

function getError() {
  input.classList.add("border");
  err.classList.remove("hidden");
  err.style.display = "block";
}

function getSuccess() {
  input.classList.remove("border");
  err.classList.add("hidden");
  input.value = "";
}

function emailValidation(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

btn.addEventListener("click", function () {
  const emailValue = input.value.trim();
  if (emailValue === "" || !emailValidation(emailValue)) {
    getError();
  } else {
    getSuccess();
  }
});
