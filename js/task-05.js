const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function updateName() {
  const inputValue = nameInput.value;
  nameOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
}

nameInput.addEventListener("input", updateName);
