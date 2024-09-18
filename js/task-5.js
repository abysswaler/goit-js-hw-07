function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  document.body.style.backgroundColor = randomColor;

  document.querySelector(".color").textContent = randomColor;
}


