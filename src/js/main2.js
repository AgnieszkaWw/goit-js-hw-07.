const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatoes",
	"Herbs",
	"Condiments",
];
const liElements = [];
ingredients.forEach(ingredient => {
	const li = document.createElement("li");
	li.classList.add("item");
	li.textContent = ingredient;
	liElements.push(li);
});
ingredientsList.append(...liElements);
