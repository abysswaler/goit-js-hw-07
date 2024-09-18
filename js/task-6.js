
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  const boxesContainer = document.querySelector("#boxes");
  boxesContainer.innerHTML = "";
}
document.querySelector("[data-create]").addEventListener("click", () => {
  const input = document.querySelector("#controls input");
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  input.value = "";
});

document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
