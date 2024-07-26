let counterValue = 0;

const value = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

function updateValue() {
  value.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});

updateValue();
