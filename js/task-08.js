const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
  const formData = new FormData(loginForm);
  const formObject = {};

  let allFields = true;

  formData.forEach((value, name) => {
    if (!value) {
      allFields = false;
    }
    formObject[name] = value;
  });

  if (!allFields) {
    alert("Toate campurile trebuie completate!");
    return;
  }

  console.log(formObject);

  loginForm.reset();
}
loginForm.addEventListener("submit", handleSubmit);
