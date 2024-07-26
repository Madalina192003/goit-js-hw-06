const ulIngredients = document.getElementById("ingredients");
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");

  liElement.classList.add("item");

  liElement.textContent = ingredient;

  ulIngredients.appendChild(liElement);
});
