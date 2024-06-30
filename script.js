const container = document.querySelector('.container');
const gridWidth = 16;
const gridHeight = 16;

function createGrid(width, height) {
  for (let i = 0; i < width * height; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  }
}

createGrid(gridWidth, gridHeight);