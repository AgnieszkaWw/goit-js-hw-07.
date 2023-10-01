const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
	const amount = Number(input.value);
	const fragment = document.createDocumentFragment();

	for (let i = 0; i < amount; i++) {
		const box = document.createElement("div");
		box.classList.add("box");
		box.style.backgroundColor = getRandomHexColor();
		box.style.height = `${30 + i * 10}px`;
		box.style.width = `${30 + i * 10}px`;
		fragment.appendChild(box);
	}

	boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
	boxesContainer.innerHTML = "";
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}
