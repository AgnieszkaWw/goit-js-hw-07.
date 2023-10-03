const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");
const categoryCount = categoryItems.length;
console.log('Liczba kategorii: ' , categoryCount);
categoryItems.forEach(categoryItem => {
	const categoryTitle = categoryItem.querySelector("h2").textContent;
	const categoryElements = categoryItem.querySelectorAll("ul li");
	const categoryElementCount = categoryElements.length;
	console.log('categoryTitle: ');
	console.log('categoryElementCount: ');
});
